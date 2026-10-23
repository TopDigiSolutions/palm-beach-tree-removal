"use client";

import React, { useState, useRef, useEffect } from "react";
import { siteConfig } from "@/data/site";
import { MessageSquare, X, Send, Phone, TreePine, Sparkles, Loader2 } from "lucide-react";

interface ChatMessage {
  sender: "bot" | "user";
  text: string;
  options?: { label: string; action: string }[];
}

export default function Chatbot() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: `Welcome to Palm Beach Tree Removal (Est. 1992). I'm your AI arborist concierge. How can our team assist your estate today?`,
      options: [
        { label: "⚡ Emergency Storm Dispatch", action: "emergency" },
        { label: "💰 Request a Written Estimate", action: "estimate" },
        { label: "🌴 Palm Tree Sculpting", action: "palms" },
        { label: "🏗️ 100-Ton Crane Work", action: "crane" },
        { label: "📍 Service Areas & Permits", action: "areas" },
        { label: "📞 Speak With Dispatch", action: "call" },
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    window.dispatchEvent(
      new CustomEvent("palmbeach:chatbot", { detail: { isOpen } })
    );
  }, [messages, isOpen, loading]);

  if (!mounted) return null;

  const fetchAiResponse = async (userQuery: string, history: ChatMessage[]) => {
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...history, { sender: "user", text: userQuery }],
        }),
      });

      const data = await response.json();

      if (response.ok && data.reply) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: data.reply,
            options: [
              { label: `📞 Call ${siteConfig.phone}`, action: "call" },
              { label: "💰 Online Free Estimate", action: "jump_estimate" },
            ],
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: `Thank you for reaching out regarding "${userQuery}". For immediate dispatch or custom quotes, please call our master arborist desk at ${siteConfig.phone}.`,
            options: [
              { label: `📞 Call ${siteConfig.phone}`, action: "call" },
              { label: "💰 Online Estimate", action: "jump_estimate" },
            ],
          },
        ]);
      }
    } catch (err) {
      console.error("Failed to query arborist assistant:", err);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: `An ISA Certified Master Arborist is available 24/7 to assist. You can reach our dispatch line directly at ${siteConfig.phone}.`,
          options: [{ label: `📞 Call ${siteConfig.phone}`, action: "call" }],
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleAction = (action: string, labelText: string) => {
    if (action === "call") {
      window.location.href = `tel:${siteConfig.phoneRaw}`;
      return;
    } else if (action === "jump_estimate") {
      setIsOpen(false);
      window.location.href = "#estimate";
      return;
    } else if (action === "jump_gallery") {
      setIsOpen(false);
      window.location.href = "#gallery";
      return;
    } else if (action === "jump_areas") {
      setIsOpen(false);
      window.location.href = "#service-areas";
      return;
    }

    const userMsg: ChatMessage = { sender: "user", text: labelText };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);

    // Fetch AI answer for the selected option topic
    fetchAiResponse(labelText, updatedMessages);
  };

  const handleSendText = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || loading) return;

    const query = inputValue.trim();
    setInputValue("");

    const userMsg: ChatMessage = { sender: "user", text: query };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);

    fetchAiResponse(query, updatedMessages);
  };

  return (
    <div className="fixed bottom-16 sm:bottom-5 right-4 sm:right-5 z-50">
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Palm Beach Arborist AI Assistant"
          className="flex items-center gap-3 px-4 py-3.5 rounded-full bg-brand hover:bg-brand-hover text-white shadow-2xl border border-[#C5A880]/50 transition-all transform hover:scale-105 group focus-visible:ring-4 focus-visible:ring-[#C5A880]"
        >
          <div className="relative w-8 h-8 rounded-full bg-[#C5A880] text-[#285640] flex items-center justify-center font-bold">
            <MessageSquare className="w-4 h-4 fill-current text-[#285640]" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#2E654B] animate-ping" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#2E654B]" />
          </div>
          <div className="text-left pr-1 hidden sm:block">
            <div className="text-[10px] text-[#DFCEB8] font-bold uppercase tracking-wider leading-none flex items-center gap-1">
              <span>Arborist Concierge</span>
              <Sparkles className="w-2.5 h-2.5 text-[#C5A880]" />
            </div>
            <div className="text-xs font-bold text-white mt-0.5">
              AI Online &bull; 24/7 Dispatch
            </div>
          </div>
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Estate Arborist Concierge"
          className="w-[92vw] sm:w-[380px] md:w-[420px] max-h-[580px] h-[580px] bg-[#FAF9F6] rounded-3xl shadow-2xl border border-[#422E22]/25 flex flex-col overflow-hidden animate-fadeIn"
        >
          {/* Header */}
          <div className="bg-brand p-4 text-white flex items-center justify-between border-b border-[#C5A880]/30">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-brand border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] font-bold text-sm">
                <TreePine className="w-5 h-5 text-[#C5A880]" />
              </div>
              <div>
                <div className="font-serif text-sm font-bold text-white leading-tight flex items-center gap-1.5">
                  <span>Palm Beach AI Concierge</span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] bg-[#C5A880]/20 text-[#DFCEB8] font-mono border border-[#C5A880]/30">AI</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#DFCEB8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>ISA Arborist Knowledge Engine</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
              className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:ring-2 focus-visible:ring-[#C5A880]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Hotline Strip */}
          <div className="bg-brand px-4 py-2 text-white text-xs flex items-center justify-between border-b border-white/10">
            <span className="text-[#DFCEB8] font-medium">Need immediate emergency dispatch?</span>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="font-bold text-white hover:text-[#C5A880] flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#C5A880] fill-current" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>

          {/* Message List */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#FAF9F6] text-xs sm:text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                <div
                  className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed shadow-xs ${
                    msg.sender === "user"
                      ? "bg-brand text-white rounded-br-none"
                      : "bg-[#F7F4EC] text-[#121814] border border-[#422E22]/15 rounded-bl-none whitespace-pre-wrap"
                  }`}
                >
                  {msg.text}
                </div>

                {/* Option Buttons */}
                {msg.options && msg.options.length > 0 && !loading && (
                  <div className="mt-2.5 flex flex-wrap gap-1.5 w-full">
                    {msg.options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => handleAction(opt.action, opt.label)}
                        className="px-3 py-1.5 rounded-full bg-white hover:bg-brand-hover text-[#2E654B] hover:text-white text-xs font-semibold border border-[#2E654B]/20 transition-all shadow-xs"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Loading / Typing indicator */}
            {loading && (
              <div className="flex flex-col items-start">
                <div className="p-3.5 rounded-2xl bg-[#F7F4EC] text-[#121814] border border-[#422E22]/15 rounded-bl-none flex items-center gap-2 text-xs font-medium text-[#2E654B]">
                  <Loader2 className="w-4 h-4 animate-spin text-[#C5A880]" />
                  <span>Consulting ISA Arborist Knowledge Base...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form
            onSubmit={handleSendText}
            className="p-3 bg-white border-t border-[#422E22]/15 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about tree removal, permits, cost..."
              value={inputValue}
              disabled={loading}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-[#FAF9F6] border border-[#422E22]/20 text-[#121814] focus:outline-none focus:ring-2 focus:ring-[#2E654B] disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading || !inputValue.trim()}
              aria-label="Send message"
              className="p-2.5 rounded-xl bg-brand hover:bg-brand-hover text-white transition-colors flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4 text-[#C5A880]" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
