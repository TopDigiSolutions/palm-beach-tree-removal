import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

export default function About() {
  const guarantees = [
    {
      title: "AlturnaMAT Ground Protection",
      desc: "Zero ruts or soil compaction on prized Bermuda, Zoysia, and St. Augustine turf.",
    },
    {
      title: "Surgical Friction Rigging",
      desc: "Controlled rope-and-pulley lowering over fragile barrel tile roofs, glass enclosures, and infinity pools.",
    },
    {
      title: "Complete Permitting Coordination",
      desc: "Official Tree Condition Assessments and arborist filings with Palm Beach County municipalities.",
    },
    {
      title: "$5M Verified Insurance Protection",
      desc: "Full commercial liability and workers' comp certificate riders issued directly for your estate or HOA.",
    },
  ];

  return (
    <section
      id="about"
      aria-label="About Palm Beach Tree Removal"
      className="py-20 lg:py-28 bg-[#F7F4EC] border-y border-[#422E22]/15 relative overflow-hidden"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Editorial Image with Floating Heritage Card */}
          <div className="reveal-item lg:col-span-6 relative">
            <div className="relative h-[460px] sm:h-[560px] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#422E22]/20 bg-[#0A1E14]">
              <Image
                src="/images/service-crane-removal.jpg"
                alt="Palm Beach Tree Removal 100-ton crane division operating over luxury waterfront estate"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06160E]/90 via-[#06160E]/20 to-transparent" />

              {/* Bottom Image Callout */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-xl bg-[#0E2A1D]/90 backdrop-blur-md border border-[#C5A880]/30 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-[#DFCEB8] font-bold uppercase tracking-widest">
                      Specialized Operations Fleet
                    </div>
                    <div className="font-serif text-base sm:text-lg font-bold text-white mt-0.5">
                      100-Ton All-Terrain Crane Division
                    </div>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#163E2B] border border-[#C5A880]/40 text-[#DFCEB8] font-bold shrink-0">
                    Zero Lawn Footprint
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Heritage Badge */}
            <div className="absolute -top-6 -right-4 sm:-right-6 bg-[#0E2A1D] text-white p-5 sm:p-6 rounded-2xl shadow-2xl border border-[#C5A880]/40 text-center max-w-[170px] sm:max-w-[190px] animate-subtleFloat">
              <div className="font-serif text-4xl sm:text-5xl font-bold text-[#C5A880] leading-none">
                34+
              </div>
              <div className="text-xs uppercase tracking-wider font-semibold mt-1 text-[#FAF9F6]">
                Years Serving Palm Beach
              </div>
              <div className="text-[10px] text-[#DFCEB8] mt-2 border-t border-white/20 pt-1.5 font-medium">
                Est. 1992
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Core Guarantees */}
          <div className="reveal-item delay-200 lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#422E22] mb-3">
              <span className="w-8 h-0.5 bg-[#422E22]" />
              <span>Decades of Professional Discipline</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E2A1D] tracking-tight leading-tight mb-6">
              Arboriculture Practiced as an Exact Engineering Discipline.
            </h2>

            <p className="text-base sm:text-lg text-[#121814]/85 leading-relaxed mb-4">
              Founded in 1992, <strong>Palm Beach Tree Removal</strong> was established to provide South Florida&apos;s premier private properties with an elevated standard of tree care. We recognize that an estate&apos;s landscape represents decades of architectural investment and natural beauty.
            </p>

            <p className="text-sm sm:text-base text-[#121814]/75 leading-relaxed mb-8">
              Whether navigating narrow waterfront setbacks, lifting 15,000-pound Live Oak sections over Spanish barrel-tile roofs, or sculpting prized Medjool date palms, every operation is supervised by an ISA Certified Master Arborist using modern low-impact equipment.
            </p>

            {/* 4 Guarantees Cards */}
            <div className="space-y-3 w-full mb-8">
              {guarantees.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-xl bg-[#FAF9F6] border border-[#422E22]/15 flex items-start gap-3 shadow-xs"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#1E5638] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-[#0E2A1D]">
                      {item.title}
                    </div>
                    <div className="text-xs text-[#121814]/75 mt-0.5 leading-relaxed">
                      {item.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
              <a
                href="#contact"
                className="px-7 py-4 rounded-xl bg-[#0E2A1D] hover:bg-[#163E2B] text-white font-bold text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Request On-Site Inspection</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880]" />
              </a>

              {siteConfig.phone ? (
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="px-6 py-4 rounded-xl border border-[#0E2A1D]/30 hover:border-[#0E2A1D] bg-transparent text-[#0E2A1D] font-bold text-sm sm:text-base transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#1E5638]" />
                  <span>Call {siteConfig.phone}</span>
                </a>
              ) : (
                <a
                  href="#service-areas"
                  className="px-6 py-4 rounded-xl border border-[#0E2A1D]/30 hover:border-[#0E2A1D] bg-transparent text-[#0E2A1D] font-bold text-sm sm:text-base transition-colors flex items-center justify-center gap-2"
                >
                  <span className="text-[#1E5638]">✦</span>
                  <span>Explore Service Areas</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
