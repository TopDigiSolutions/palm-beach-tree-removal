"use client";

import React, { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { siteConfig } from "@/data/site";
import { MapPin, Clock, FileCheck, ArrowRight, Compass, CheckCircle2, Navigation, ShieldCheck, Truck } from "lucide-react";

const CoverageMap = dynamic(() => import("./CoverageMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[380px] sm:h-[440px] lg:h-[480px] rounded-2xl bg-[#EDE6D8]/30 border border-[#C5A880]/30 animate-pulse flex flex-col items-center justify-center text-center p-6">
      <div className="w-10 h-10 rounded-full border-2 border-[#2E654B] border-t-transparent animate-spin mb-3"></div>
      <p className="font-serif font-bold text-[#2E654B] text-base">
        Loading Palm Beach County Coverage Map...
      </p>
      <p className="text-xs text-[#121814]/70 mt-1">
        Plotting 8 municipality dispatch routes and coordinates
      </p>
    </div>
  ),
});

export default function ServiceAreas() {
  const [activeCityIndex, setActiveCityIndex] = useState(0);
  const [shouldRenderMap, setShouldRenderMap] = useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    setShouldRenderMap(true);
  }, []);

  const areas = siteConfig.serviceAreaDetails;
  const currentCity = areas[activeCityIndex] || areas[0];

  return (
    <section
      ref={sectionRef}
      id="service-areas"
      aria-label="Palm Beach County Service Areas"
      className="py-20 lg:py-28 bg-[#FAF9F6] border-t border-[#422E22]/15 relative overflow-hidden"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="reveal-item text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#422E22] mb-3">
            <span className="w-8 h-0.5 bg-[#422E22]" />
            <span>Dedicated Regional Coverage</span>
            <span className="w-8 h-0.5 bg-[#422E22]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E654B] tracking-tight">
            Serving 8 Palm Beach County Municipalities
          </h2>
          <p className="text-sm sm:text-base text-[#121814]/80 mt-4 leading-relaxed">
            Our specialized crane rigs, grapple trucks, and ISA Certified Master Arborists maintain dedicated daily routes across South Florida, navigating local municipal tree protection ordinances and environmental codes.
          </p>

          {/* Quick Metrics Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-6 text-xs text-[#2E654B]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#422E22]/15 shadow-sm font-semibold">
              <Truck className="w-3.5 h-3.5 text-[#357650]" /> 20–50 Min Rapid Dispatch
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#422E22]/15 shadow-sm font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" /> Zero Travel Surcharges in PBC
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#422E22]/15 shadow-sm font-semibold">
              <Navigation className="w-3.5 h-3.5 text-[#357650]" /> Full Permit Handling
            </span>
          </div>
        </div>

        {/* Interactive Coverage Map */}
        <div className="mb-12">
          {shouldRenderMap ? (
            <CoverageMap
              areas={areas}
              activeCityIndex={activeCityIndex}
              onSelectCity={setActiveCityIndex}
            />
          ) : (
            <div className="w-full h-[380px] sm:h-[440px] lg:h-[480px] rounded-2xl bg-[#EDE6D8]/30 border border-[#C5A880]/30 flex flex-col items-center justify-center text-center p-6">
              <p className="font-serif font-bold text-[#2E654B] text-base">
                Palm Beach County Coverage Map
              </p>
              <p className="text-xs text-[#121814]/70 mt-1">
                8 municipality dispatch routes and coordinates
              </p>
            </div>
          )}
          <div className="text-center mt-3">
            <p className="text-xs text-[#121814]/70">
              Interactive Map: Click any marker above or choose a municipality card below to view localized route and municipal permit information.
            </p>
          </div>
        </div>

        {/* 8 Cities Visual Cards Grid (Persistent visibility on interaction) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {areas.map((area, idx) => {
            const isSelected = activeCityIndex === idx;
            return (
              <button
                key={area.city}
                type="button"
                onClick={() => setActiveCityIndex(idx)}
                className={`p-5 rounded-2xl border transition-all duration-300 text-left cursor-pointer flex flex-col justify-between group focus:outline-none ${
                  isSelected
                    ? "bg-brand text-white border-[#C5A880] shadow-2xl scale-[1.02] ring-2 ring-[#C5A880]/40"
                    : "bg-[#FFFFFF] text-[#121814] border-[#422E22]/15 hover:border-[#357650]/40 hover:shadow-lg hover:-translate-y-0.5"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5">
                      <MapPin
                        className={`w-4 h-4 ${
                          isSelected ? "text-[#C5A880]" : "text-[#357650]"
                        }`}
                      />
                      <span
                        className={`text-xs font-bold uppercase tracking-wider ${
                          isSelected ? "text-[#DFCEB8]" : "text-[#422E22]"
                        }`}
                      >
                        Palm Beach Co.
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-[#C5A880] text-[#285640]"
                          : "bg-brand-soft text-[#2E654B]"
                      }`}
                    >
                      {area.responseTime}
                    </span>
                  </div>

                  <h3
                    className={`font-serif text-xl font-bold mb-1.5 ${
                      isSelected ? "text-white" : "text-[#2E654B]"
                    }`}
                  >
                    {area.city}, {area.state}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed mb-4 ${
                      isSelected ? "text-white/80" : "text-[#121814]/75"
                    }`}
                  >
                    {area.coverageDetail}
                  </p>
                </div>

                <div
                  className={`pt-3 border-t flex items-center justify-between text-xs font-semibold ${
                    isSelected
                      ? "border-white/15 text-[#C5A880]"
                      : "border-[#422E22]/10 text-[#2E654B]"
                  }`}
                >
                  <span>Municipal Permits Handled</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected City Municipal Detail Spotlight Card */}
        <div className="bg-[#FAF9F6] border border-[#C5A880]/30 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand text-[#DFCEB8] text-xs font-bold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Local District Spotlight: {currentCity.city}</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E654B]">
              Fast Dispatch &amp; Municipal Permitting in {currentCity.city}, FL
            </h3>

            <p className="text-sm text-[#121814]/85 leading-relaxed">
              Our teams maintain direct relationships with the local building departments, town environmental boards, and city arborists. We conduct the official Tree Condition Assessment, compile photographic documentation, and pull the required removal or preservation permits prior to mobilization.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2 text-xs sm:text-sm text-[#121814]">
                <FileCheck className="w-4 h-4 text-[#357650] shrink-0 mt-0.5" />
                <span>
                  <strong>Ordinance Care:</strong> {currentCity.permitsInfo}
                </span>
              </div>

              <div className="flex items-start gap-2 text-xs sm:text-sm text-[#121814]">
                <Clock className="w-4 h-4 text-[#357650] shrink-0 mt-0.5" />
                <span>
                  <strong>Emergency Arrival:</strong> Typically {currentCity.responseTime}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs uppercase font-bold tracking-wider text-[#422E22] block mb-2">
                Popular Services in {currentCity.city}:
              </span>
              <div className="flex flex-wrap gap-2">
                {currentCity.popularServices.map((srv, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-lg bg-[#F7F4EC] border border-[#422E22]/15 text-xs font-semibold text-[#2E654B]"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-stretch gap-3 bg-brand text-white p-6 rounded-xl border border-[#C5A880]/30 shadow-md">
            <div className="text-center pb-2 border-b border-white/15">
              <div className="text-[11px] text-[#DFCEB8] uppercase font-bold tracking-wider">
                Daily Route Service
              </div>
              <div className="font-serif text-xl font-bold text-white mt-0.5">
                {currentCity.city} District
              </div>
            </div>

            <div className="space-y-2 py-2 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Zero travel surcharges anywhere in PBC</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>Same-day written tree assessments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                <span>$5,000,000 local liability coverage</span>
              </div>
            </div>

            <div className="mt-2 space-y-2">
              <Link
                href="/contact"
                className="block w-full py-3 px-4 rounded-xl bg-[#C5A880] hover:bg-[#DFCEB8] text-[#285640] font-bold text-xs sm:text-sm text-center shadow-md transition-colors"
              >
                Book Service in {currentCity.city}
              </Link>
              <Link
                href={`/service-areas/${currentCity.slug}`}
                className="block w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-[#DFCEB8] font-semibold text-xs text-center border border-[#C5A880]/30 transition-colors"
              >
                View {currentCity.city} Area Guide &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
