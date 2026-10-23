"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Award, ShieldCheck, CheckCircle2, ArrowRight, History, Calendar, Sparkles } from "lucide-react";

export default function Established() {
  const [activeTab, setActiveTab] = useState(0);

  const milestones = [
    {
      year: "1992",
      title: "Founding on Palm Beach Island",
      subtitle: "The Genesis of Precision Care",
      desc: "Founded with a single forestry truck and an unwavering dedication to safely managing historic live oaks and towering royal palms along Palm Beach Island's iconic estates.",
      stat: "1st Generation",
      statLabel: "Family Founded",
    },
    {
      year: "2004",
      title: "Hurricane Crisis Response Division",
      subtitle: "Pioneering Rapid Disaster Recovery",
      desc: "Following historic South Florida storm seasons, we established dedicated 24/7 heavy grapple units and arborist triage teams, responding within 90 minutes to critical residential hazards.",
      stat: "24/7 Dispatch",
      statLabel: "Rapid Emergency Response",
    },
    {
      year: "2015",
      title: "100-Ton All-Terrain Crane Division",
      subtitle: "Engineering Zero-Lawn-Damage Extraction",
      desc: "Invested in all-terrain hydraulic telescopic cranes, allowing multi-ton tree canopies to be hoisted vertically over luxury homes and glass loggias with zero ground disturbance.",
      stat: "100-Ton",
      statLabel: "Hydraulic Lifting Power",
    },
    {
      year: "Today",
      title: "34 Years of Unbroken Heritage",
      subtitle: "Generations of Palm Beach Trust",
      desc: "Continuing three decades of arboricultural leadership, serving over 14,800 private estate properties across Palm Beach, Wellington, Delray Beach, and Boca Raton.",
      stat: "14,800+",
      statLabel: "Estate Trees Cleared",
    },
  ];

  return (
    <section
      id="established"
      aria-label="Serving Palm Beach Since 1992"
      className="py-20 lg:py-28 bg-[#F7F4EC] border-y border-[#422E22]/15 relative overflow-hidden"
    >
      {/* Subtle Archival Watermark */}
      <div className="absolute right-2 -bottom-12 select-none pointer-events-none opacity-[0.03] font-serif text-[200px] sm:text-[280px] lg:text-[380px] font-bold text-[#2E654B]">
        1992
      </div>

      <div className="container-custom relative z-10">
        {/* Section Monolith Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          {/* Giant Monumental 1992 Visual Element */}
          <div className="reveal-item lg:col-span-5 flex flex-col items-start bg-[#FAF9F6] p-8 sm:p-10 rounded-3xl border border-[#422E22]/15 shadow-xl relative">
            <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#422E22]">
              South Florida Arboricultural Heritage
            </span>
            <div className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold text-[#2E654B] tracking-tight leading-none my-3">
              1992
            </div>
            <div className="text-sm sm:text-base font-semibold text-[#357650] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-ping" />
              <span>Serving Palm Beach for 34 Consecutive Years</span>
            </div>
            <p className="text-xs sm:text-sm text-[#121814]/75 mt-3 leading-relaxed">
              Continuous family-owned tree removal, estate palm sculpting, and crane operations with verified Florida State License #CBC1264890.
            </p>
          </div>

          {/* Editorial Story */}
          <div className="reveal-item delay-200 lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#422E22] mb-2">
              <span className="w-8 h-0.5 bg-[#422E22]" />
              <span>Decades of Proven Experience</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E654B] tracking-tight leading-tight mb-5">
              Built on Trust. Proven Through Every Florida Hurricane.
            </h2>

            <p className="text-base sm:text-lg text-[#121814]/85 leading-relaxed mb-4">
              Tree removal in Palm Beach County is not standard yard work. Saturated coastal soils, hurricane gusts, delicate clay-tile roofs, and multi-million dollar estate grounds require seasoned arborist engineering.
            </p>

            <p className="text-sm sm:text-base text-[#121814]/75 leading-relaxed">
              Since 1992, our crews have guided South Florida homeowners through major storm restorations, hazardous canopy extractions, and specimen palm curation—delivering flawless safety records and zero damage to luxury turf.
            </p>
          </div>
        </div>

        {/* 1992 → Today Timeline Journey Cards */}
        <div className="mb-14">
          <div className="reveal-item flex items-center justify-between mb-6">
            <div className="text-xs uppercase tracking-widest font-bold text-[#422E22] flex items-center gap-2">
              <History className="w-4 h-4 text-[#357650]" />
              <span>Historical Timeline: 1992 &rarr; Today</span>
            </div>
            <div className="text-xs text-[#121814]/60 hidden sm:block">
              Click any milestone to inspect historical record
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {milestones.map((item, idx) => {
              const isSelected = activeTab === idx;
              return (
                <div
                  key={item.year}
                  onClick={() => setActiveTab(idx)}
                  className={`reveal-item delay-${(idx + 1) * 100} p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? "bg-brand text-white border-[#C5A880]/50 shadow-2xl scale-[1.02]"
                      : "bg-[#FAF9F6] text-[#121814] border-[#422E22]/15 hover:border-[#357650]/40 hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`font-serif text-3xl sm:text-4xl font-bold tracking-tight ${
                          isSelected ? "text-[#DFCEB8]" : "text-[#2E654B]"
                        }`}
                      >
                        {item.year}
                      </span>
                      <span
                        className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full ${
                          isSelected
                            ? "bg-[#C5A880] text-[#285640]"
                            : "bg-brand-soft text-[#2E654B]"
                        }`}
                      >
                        Era 0{idx + 1}
                      </span>
                    </div>

                    <h3
                      className={`font-bold text-base mb-1 ${
                        isSelected ? "text-white" : "text-[#2E654B]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <div
                      className={`text-xs font-semibold mb-3 ${
                        isSelected ? "text-[#C5A880]" : "text-[#422E22]"
                      }`}
                    >
                      {item.subtitle}
                    </div>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isSelected ? "text-white/80" : "text-[#121814]/75"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </div>

                  <div
                    className={`mt-6 pt-4 border-t flex items-center justify-between ${
                      isSelected ? "border-white/15" : "border-[#422E22]/10"
                    }`}
                  >
                    <div>
                      <div
                        className={`font-serif text-lg font-bold leading-none ${
                          isSelected ? "text-[#DFCEB8]" : "text-[#357650]"
                        }`}
                      >
                        {item.stat}
                      </div>
                      <div
                        className={`text-[10px] mt-0.5 ${
                          isSelected ? "text-white/60" : "text-[#121814]/60"
                        }`}
                      >
                        {item.statLabel}
                      </div>
                    </div>

                    <CheckCircle2
                      className={`w-4 h-4 ${
                        isSelected ? "text-[#C5A880]" : "text-[#357650]"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Historical Assurance Strip */}
        <div className="reveal-item p-6 sm:p-8 rounded-3xl bg-brand text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-[#C5A880]/30">
          <div className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-2xl bg-brand border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0">
              <History className="w-7 h-7 text-[#C5A880]" />
            </div>
            <div>
              <div className="font-serif text-lg sm:text-xl font-bold text-white">
                &ldquo;A tree removal contractor builds reputation not on speed, but on safety, precision, and absolute respect for the estate.&rdquo;
              </div>
              <p className="text-xs sm:text-sm text-[#DFCEB8] mt-1">
                Florida Certified Contractor #CBC1264890 &bull; Palm Beach County License #TR-1992-048
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#DFCEB8] text-[#285640] font-bold text-sm transition-all shadow-md flex items-center gap-2"
          >
            <span>Request Estate Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
