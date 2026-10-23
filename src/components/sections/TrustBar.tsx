import React from "react";
import { siteConfig } from "@/data/site";
import { ShieldCheck, Award, Truck, Clock, Compass, FileCheck } from "lucide-react";

export default function TrustBar() {
  return (
    <section
      id="trust-bar"
      aria-label="Arboricultural Authority and Credentials"
      className="relative z-20 -mt-10 sm:-mt-12 mb-12 sm:mb-16"
    >
      <div className="container-custom">
        <div className="reveal-item bg-[#FAF9F6] border border-[#422E22]/15 rounded-2xl shadow-[0_20px_50px_rgba(10,30,20,0.1)] p-6 sm:p-8 lg:p-10">
          {/* Top Authority Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-[#422E22]/10">
            <div>
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#422E22] flex items-center gap-2">
                <span className="w-6 h-0.5 bg-[#422E22]" />
                <span>The Gold Standard in South Florida Arboriculture</span>
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2E654B] tracking-tight mt-1.5">
                Precision Rigging &amp; Tree Removal Without Compromise
              </h2>
            </div>

            <div className="flex items-center gap-3 bg-[#F7F4EC] px-4 py-2.5 rounded-xl border border-[#422E22]/10 shrink-0">
              <Compass className="w-5 h-5 text-[#357650] shrink-0" />
              <div className="text-xs sm:text-sm font-medium text-[#121814]">
                <strong className="font-bold text-[#2E654B]">Primary Fleet Dispatch:</strong> Palm Beach County &bull; 8 Cities Daily
              </div>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-8">
            <div className="reveal-item delay-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-soft border border-[#2E654B]/20 flex items-center justify-center text-[#2E654B] shrink-0">
                <Clock className="w-6 h-6 text-[#357650]" />
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-[#2E654B]">
                  1992
                </div>
                <div className="text-sm font-bold text-[#121814] mt-0.5">
                  Established Heritage
                </div>
                <p className="text-xs text-[#121814]/70 mt-1 leading-relaxed">
                  Over three decades of continuous family-owned arborist leadership protecting South Florida properties.
                </p>
              </div>
            </div>

            <div className="reveal-item delay-200 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-soft border border-[#2E654B]/20 flex items-center justify-center text-[#2E654B] shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#357650]" />
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-[#2E654B]">
                  $5,000,000
                </div>
                <div className="text-sm font-bold text-[#121814] mt-0.5">
                  Commercial Insurance
                </div>
                <p className="text-xs text-[#121814]/70 mt-1 leading-relaxed">
                  Comprehensive liability and full workers&apos; compensation safeguarding luxury estates, roofs, and grounds.
                </p>
              </div>
            </div>

            <div className="reveal-item delay-300 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-soft border border-[#2E654B]/20 flex items-center justify-center text-[#2E654B] shrink-0">
                <Award className="w-6 h-6 text-[#357650]" />
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-[#2E654B]">
                  ISA Master Arborist
                </div>
                <div className="text-sm font-bold text-[#121814] mt-0.5">
                  Certified Standards
                </div>
                <p className="text-xs text-[#121814]/70 mt-1 leading-relaxed">
                  ANSI A300 certified structural safety protocols guiding every rigging, trimming, and removal project.
                </p>
              </div>
            </div>

            <div className="reveal-item delay-400 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-soft border border-[#2E654B]/20 flex items-center justify-center text-[#2E654B] shrink-0">
                <Truck className="w-6 h-6 text-[#357650]" />
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-[#2E654B]">
                  100-Ton Crane Fleet
                </div>
                <div className="text-sm font-bold text-[#121814] mt-0.5">
                  Zero Lawn Damage
                </div>
                <p className="text-xs text-[#121814]/70 mt-1 leading-relaxed">
                  All-terrain telescopic cranes and composite turf mats that disperse ground weight to gentle foot-traffic psi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
