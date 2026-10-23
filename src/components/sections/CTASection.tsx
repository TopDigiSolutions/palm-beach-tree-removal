import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Phone, ArrowRight, ShieldCheck, Mail, Clock, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section
      aria-label="Final Call to Action"
      className="relative py-20 lg:py-28 bg-brand text-white overflow-hidden border-t border-[#C5A880]/20"
    >
      {/* Subtle Background Radial Glow */}

      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
        <div className="reveal-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand border border-[#C5A880]/40 mb-6 shadow-md">
          <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#DFCEB8]">
            Protect Your Estate Grounds Today
          </span>
        </div>

        <h2 className="reveal-item delay-100 font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
          Need Professional Tree Removal in Palm Beach County?
        </h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#FAF9F6]/85 font-normal max-w-2xl mx-auto leading-relaxed mb-10">
          Connect directly with Palm Beach County&apos;s established arborists since 1992. Receive an honest, transparent written evaluation with guaranteed zero lawn damage.
        </p>

        {/* Dual Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-md sm:max-w-none mx-auto mb-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#C5A880] hover:bg-[#DFCEB8] text-[#285640] font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 group"
          >
            <Sparkles className="w-5 h-5 text-[#285640]" />
            <span>Get a Free Written Estimate</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          {siteConfig.phone ? (
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand hover:bg-brand-hover border border-[#C5A880]/40 text-white font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5 text-[#C5A880] fill-current" />
              <span>Call Now {siteConfig.phone}</span>
            </a>
          ) : (
            <Link
              href="/service-areas"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-brand hover:bg-brand-hover border border-[#C5A880]/40 text-white font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <span className="text-[#C5A880]">✦</span>
              <span>Explore 8 Service Areas</span>
            </Link>
          )}
        </div>

        {/* Trust Badges Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm text-white/80">
          {siteConfig.email ? (
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 hover:text-[#C5A880] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#C5A880]" />
              <span>Direct Email: {siteConfig.email}</span>
            </a>
          ) : (
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
              <span>Zero Lawn Damage Guarantee</span>
            </div>
          )}

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#C5A880]" />
            <span>24/7 Emergency Storm Dispatch</span>
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
            <span>$5,000,000 Commercial Policy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
