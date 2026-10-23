import Link from "next/link";


import React from "react";
import { Phone, ClipboardList } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function MobileActionBar() {
  return (
    <div className="pb-[env(safe-area-inset-bottom)] fixed inset-x-0 bottom-0 z-40 flex border-t border-[#422E22]/20 bg-white/95 backdrop-blur-md shadow-[0_-4px_16px_rgba(0,0,0,0.12)] sm:hidden">
      {siteConfig.phone ? (
        <a
          href={`tel:${siteConfig.phoneRaw}`}
          className="flex flex-1 items-center justify-center gap-2 bg-[#0E2A1D] px-4 py-3.5 text-xs font-bold text-white transition-active active:bg-[#163E2B]"
        >
          <Phone className="h-4 w-4 text-[#C5A880] fill-current" />
          <span>Call Now</span>
        </a>
      ) : (
        <Link
          href="/#services"
          className="flex flex-1 items-center justify-center gap-2 bg-[#0E2A1D] px-4 py-3.5 text-xs font-bold text-white transition-active active:bg-[#163E2B]"
        >
          <span className="text-[#C5A880]">✦</span>
          <span>Our Services</span>
        </Link>
      )}
      <Link
        href="/#contact"
        className="flex flex-1 items-center justify-center gap-2 bg-[#C5A880] px-4 py-3.5 text-xs font-bold text-[#0A1E14] transition-active active:bg-[#DFCEB8]"
      >
        <ClipboardList className="h-4 w-4 text-[#0A1E14]" />
        <span>Get Free Estimate</span>
      </Link>
    </div>
  );
}
