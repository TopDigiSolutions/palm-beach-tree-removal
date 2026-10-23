import { NextResponse } from "next/server";
import { siteConfig } from "@/data/site";

const SYSTEM_PROMPT = `You are the digital arborist concierge and AI assistant for "${siteConfig.name}" (established ${siteConfig.established}, over ${siteConfig.yearsInBusiness} years of heritage in Palm Beach County).
Your goal is to provide luxurious, highly professional, knowledgeable, and helpful arborist consultation to estate owners, property managers, and homeowners.

KEY BUSINESS FACTS & POLICIES:
- Contact: Available 24/7 via the on-site estimate request form on this website.${siteConfig.phone ? ` Direct Hotline: ${siteConfig.phone}.` : ""}
- Primary Address: ${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip} (Palm Beach Island).
- Operations Yard: ${siteConfig.yardAddress.street}, ${siteConfig.yardAddress.city}, ${siteConfig.yardAddress.state}.
- Insurance & Licensing: ${siteConfig.licensing.insurance}. ${siteConfig.licensing.stateLicense}. ${siteConfig.licensing.arboristCert}.
- Service Areas (Palm Beach County): ${siteConfig.serviceAreas.join(", ")}.
- Core Services:
  1. Tree Removal (Hazardous, large specimen removal, 100-ton crane operations, friction rigging over luxury roofs).
  2. Tree Trimming & Pruning (ANSI A300 structural safety pruning, hurricane wind canopy thinning, palm tree diamond skinning & crown shaping).
  3. 24/7 Emergency Storm Damage Response (60-90 min response time, structural hazard tarping, insurance documentation).
  4. Hedge Trimming & Estate Privacy Shaping (Ficus, Clusia, Podocarpus, formal box cuts).
  5. Stump Grinding (12-18 inches sub-grade clearance, rubber-tracked zero-impact machinery).
  6. Vegetative Debris Hauling & Lawn Sweeping (Hydraulic grapple trucks, 100% green recycling).
- Zero Lawn Damage Guarantee: AlturnaMAT composite ground mats protect manicured Bermuda grass, driveways, and pavers.
- Municipal Permits: ISA Certified Arborists handle all town hall permits & tree condition assessments for Palm Beach County cities.
- Estimates: Fixed-price written estimates, zero obligation, typically delivered within 24 hours.

CONVERSATIONAL TONE & GUIDELINES:
- Be warm, refined, authoritative, and helpful (like a senior ISA Master Arborist concierge).
- Keep responses concise, clear, and easy to read (1 to 3 short paragraphs).
- Always encourage requesting a free on-site written estimate using the online form on this page${siteConfig.phone ? ` or calling ${siteConfig.phone}` : ""}.
- If asking about prices, explain that pricing depends on tree height, DBH (diameter), accessibility, crane requirements, and proximity to structures, but we offer free written estimates within 24 hours.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenRouter API key is missing in environment variables." },
        { status: 500 }
      );
    }

    const modelName = process.env.OPENROUTER_MODEL || "openai/gpt-4o-mini";

    // Format and sanitize messages for OpenRouter / OpenAI API format
    const validHistory = Array.isArray(messages)
      ? messages
          .filter((m: any) => {
            const txt = m?.text || m?.content;
            return typeof txt === "string" && txt.trim().length > 0;
          })
          .map((m: any) => {
            const content = (m?.text || m?.content || "").trim();
            const role = m?.sender === "user" || m?.role === "user" ? "user" : "assistant";
            return { role, content };
          })
      : [];

    const formattedMessages = [
      { role: "system", content: SYSTEM_PROMPT },
      ...validHistory,
    ];

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey.trim()}`,
        "HTTP-Referer": "https://palmbeachtreeremoval.com",
        "X-Title": "Palm Beach Tree Removal Arborist Concierge",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: modelName,
        messages: formattedMessages,
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter API error response:", errorText);

      // Attempt fallback with alternative model if first model is unavailable
      if (modelName !== "meta-llama/llama-3.3-70b-instruct") {
        const fallbackResponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${apiKey.trim()}`,
            "HTTP-Referer": "https://palmbeachtreeremoval.com",
            "X-Title": "Palm Beach Tree Removal Arborist Concierge",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "meta-llama/llama-3.3-70b-instruct:free",
            messages: formattedMessages,
            temperature: 0.7,
            max_tokens: 500,
          }),
        });

        if (fallbackResponse.ok) {
          const fallbackData = await fallbackResponse.json();
          const reply = fallbackData.choices?.[0]?.message?.content;
          if (reply) {
            return NextResponse.json({ reply });
          }
        }
      }

      return NextResponse.json(
        {
          error: "Failed to connect to AI arborist service.",
          details: errorText,
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    const replyText = data.choices?.[0]?.message?.content;

    if (!replyText) {
      return NextResponse.json(
        { error: "No response text received from AI arborist service." },
        { status: 500 }
      );
    }

    return NextResponse.json({ reply: replyText });
  } catch (error: unknown) {
    console.error("Chatbot API internal error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
