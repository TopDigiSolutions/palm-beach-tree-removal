import React from "react";

export default function TrustTicker() {
  const tickerItems = [
    "SERVING PALM BEACH SINCE 1992",
    "100-TON ALL-TERRAIN CRANE DIVISION",
    "$5,000,000 LIABILITY & WORKERS' COMP",
    "ZERO LAWN DAMAGE GUARANTEE",
    "ISA CERTIFIED MASTER ARBORISTS",
    "TCIA ACCREDITED COMPANY",
    "24/7 HURRICANE & STORM RAPID DISPATCH",
    "PALM BEACH ISLAND • WELLINGTON • BOCA RATON • DELRAY BEACH",
  ];

  return (
    <div
      aria-label="Estate Credentials Ticker"
      className="relative z-20 w-full bg-[#0E2A1D] border-y border-[#C5A880]/30 py-3.5 overflow-hidden select-none"
    >
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {/* First repetition */}
        <div className="flex items-center gap-8 shrink-0 pr-8">
          {tickerItems.map((item, idx) => (
            <div key={`tick-1-${idx}`} className="flex items-center gap-8">
              <span className="text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#FAF9F6]">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            </div>
          ))}
        </div>

        {/* Second repetition for seamless infinite loop */}
        <div className="flex items-center gap-8 shrink-0 pr-8" aria-hidden="true">
          {tickerItems.map((item, idx) => (
            <div key={`tick-2-${idx}`} className="flex items-center gap-8">
              <span className="text-xs sm:text-sm font-bold tracking-[0.18em] uppercase text-[#FAF9F6]">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
