"use client";

import { useState } from "react";
import { siteConfig } from "@/data/site";
import { ChevronDown } from "lucide-react";

const categories = [
  { key: "all", label: "All Questions" },
  { key: "licensing", label: "Licensing & Insurance" },
  { key: "estimate", label: "Estimates & Pricing" },
  { key: "emergency", label: "Emergency Response" },
  { key: "services", label: "Services & Permits" },
  { key: "protection", label: "Property Protection" },
] as const;

type Category = (typeof categories)[number]["key"];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered =
    activeCategory === "all"
      ? siteConfig.faqs
      : siteConfig.faqs.filter((f) => f.category === activeCategory);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      {/* Category Filter */}
      <div className="reveal-item flex flex-wrap gap-2 justify-center mb-12">
        {categories.map((cat) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => {
              setActiveCategory(cat.key);
              setOpenIndex(null);
            }}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
              activeCategory === cat.key
                ? "bg-brand text-white border-[#2E654B] shadow-sm"
                : "bg-white text-[#2E654B] border-[#422E22]/20 hover:border-[#2E654B]/40"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="space-y-4" role="list">
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-[#121814]/60">
            No questions in this category.
          </div>
        ) : (
          filtered.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                role="listitem"
                className={`reveal-item delay-${(idx + 1) * 100} rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#C5A880]/50 shadow-md"
                    : "bg-[#FAF9F6] border-[#422E22]/15 hover:border-[#357650]/40"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-btn-${idx}`}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-lg sm:text-xl font-bold text-[#2E654B] hover:text-[#357650] transition-colors focus-visible:ring-2 focus-visible:ring-[#2E654B]"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "bg-brand text-[#C5A880] rotate-180"
                        : "bg-[#F7F4EC] text-[#422E22]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-btn-${idx}`}
                    className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-[#121814]/80 leading-relaxed border-t border-[#422E22]/10 pt-4 animate-fadeIn"
                  >
                    <p>{faq.answer}</p>
                    <div className="mt-3">
                      <span className="inline-block px-2.5 py-1 rounded-full bg-[#F7F4EC] border border-[#422E22]/12 text-[10px] font-bold uppercase tracking-wider text-[#422E22]">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </>
  );
}
