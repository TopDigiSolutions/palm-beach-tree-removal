"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { ChevronDown, Phone } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-20 lg:py-28 bg-[#FAF9F6] border-t border-[#422E22]/15"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="reveal-item text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#422E22] mb-3">
              <span className="w-8 h-0.5 bg-[#422E22]" />
              <span>Municipal Regulations &amp; Arborist Protocols</span>
              <span className="w-8 h-0.5 bg-[#422E22]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E2A1D] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-[#121814]/80 mt-3 leading-relaxed">
              Clear, transparent answers regarding municipal tree permits, $5,000,000 insurance policies, turf protection, and crane procedures across Palm Beach County.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {siteConfig.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`reveal-item delay-${(idx + 1) * 100} rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#FFFFFF] border-[#C5A880]/50 shadow-md"
                      : "bg-[#FAF9F6] border-[#422E22]/15 hover:border-[#1E5638]/40"
                  }`}
                >
                  <h3><button
                    id={`faq-question-${idx}`}
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif text-lg sm:text-xl font-bold text-[#0E2A1D] hover:text-[#1E5638] transition-colors focus-visible:ring-2 focus-visible:ring-[#0E2A1D]"
                  >
                    <span>{faq.question}</span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[#0E2A1D] text-[#C5A880] rotate-180"
                          : "bg-[#F7F4EC] text-[#422E22]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button></h3>

                  <div id={`faq-answer-${idx}`} role="region" aria-labelledby={`faq-question-${idx}`} aria-hidden={!isOpen} className={`faq-answer ${isOpen ? "is-open" : ""}`}>
                    <div><p className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-neutral-muted leading-relaxed">{faq.answer}</p></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Direct Support Strip */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#F7F4EC] border border-[#422E22]/15 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div>
              <h3 className="text-base font-bold text-[#0E2A1D]">
                Have a specific question regarding your estate grounds?
              </h3>
              <p className="text-xs sm:text-sm text-[#121814]/75 mt-0.5">
                Our ISA Certified Master Arborists are available for direct consultations.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {siteConfig.phone ? (
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="px-5 py-3 rounded-xl bg-[#0E2A1D] text-white font-bold text-xs sm:text-sm hover:bg-[#163E2B] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                  <span>{siteConfig.phone}</span>
                </a>
              ) : (
                <a
                  href="#contact"
                  className="px-5 py-3 rounded-xl bg-[#0E2A1D] text-white font-bold text-xs sm:text-sm hover:bg-[#163E2B] transition-colors flex items-center gap-2 shadow-sm"
                >
                  <span>Submit Inquiry</span>
                </a>
              )}

              {siteConfig.email ? (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="px-5 py-3 rounded-xl border border-[#422E22]/25 text-[#0E2A1D] font-bold text-xs sm:text-sm hover:bg-white transition-colors"
                >
                  Email Arborist
                </a>
              ) : (
                <a
                  href="#contact"
                  className="px-5 py-3 rounded-xl border border-[#422E22]/25 text-[#0E2A1D] font-bold text-xs sm:text-sm hover:bg-white transition-colors"
                >
                  Request Free Estimate
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
