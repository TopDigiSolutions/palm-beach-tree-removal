import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Phone, Mail, MapPin, ShieldCheck, Clock, ArrowRight, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer
      aria-label="Site Footer"
      className="relative text-white border-t border-[#C5A880]/25 pt-16 pb-12 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #071710 0%, #0F3322 40%, #092116 100%)" }}
    >
      {/* Gold shimmer top line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(197,168,128,0.5) 25%, #DFCEB8 50%, rgba(197,168,128,0.5) 75%, transparent 100%)",
        }}
      />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(197,168,128,1) 1px, transparent 1px), linear-gradient(90deg, rgba(197,168,128,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="container-custom relative z-10">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Heritage (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative w-13 h-13 shrink-0 drop-shadow-md">
                <Image
                  src={siteConfig.logo || "/images/logo.png"}
                  alt="Palm Beach Tree Removal"
                  fill
                  sizes="52px"
                  className="object-contain object-center"
                />
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-wider text-white block leading-none group-hover:text-[#DFCEB8] transition-colors">
                  PALM BEACH
                </span>
                <span className="text-[10px] text-[#C5A880] tracking-[0.2em] uppercase font-bold">
                  Tree Removal &bull; Est. 1992
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-white/75 leading-relaxed pr-4">
              Providing surgical hazardous tree removals, 100-ton crane extractions, and 24/7 hurricane emergency response across Palm Beach County for over 34 consecutive years.
            </p>

            <div className="pt-2 text-xs text-[#DFCEB8] space-y-1">
              <div>{siteConfig.licensing.stateLicense}</div>
              <div>{siteConfig.licensing.countyLicense}</div>
              <div>{siteConfig.licensing.arboristCert}</div>
              <div>{siteConfig.licensing.tciaMember}</div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-white/75">
              <li><Link href="/" className="hover:text-[#DFCEB8] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#DFCEB8] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#DFCEB8] transition-colors">All Services</Link></li>
              <li><Link href="/gallery" className="hover:text-[#DFCEB8] transition-colors">Gallery</Link></li>
              <li><Link href="/reviews" className="hover:text-[#DFCEB8] transition-colors">Reviews</Link></li>
              <li><Link href="/faq" className="hover:text-[#DFCEB8] transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-[#DFCEB8] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Core Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880]">
              Arboriculture Services
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-white/75">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="hover:text-[#DFCEB8] transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="hover:text-[#DFCEB8] transition-colors font-semibold text-[#C5A880]">
                  View All Service Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact & Dispatch (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880]">
              Direct Contact &amp; Dispatch
            </h3>

            <div className="space-y-2.5 text-xs sm:text-sm text-white/80">
              {siteConfig.phone && (
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-2.5 text-white hover:text-[#C5A880] transition-colors font-bold"
                >
                  <Phone className="w-4 h-4 text-[#C5A880] shrink-0 fill-current" />
                  <span>{siteConfig.phone}</span>
                </a>
              )}

              {siteConfig.email && (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2.5 hover:text-[#C5A880] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span className="truncate">{siteConfig.email}</span>
                </a>
              )}

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#DFCEB8] pt-1">
                <Clock className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                <span>24/7 Rapid Emergency Response</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#C5A880] via-[#DFCEB8] to-[#C5A880] text-[#285640] font-extrabold text-xs shadow-md transition-all hover:scale-[1.02]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#285640]" />
                <span>Get Free Written Estimate</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>&copy; 2026 {siteConfig.legalName}. All Rights Reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center text-[11px]">
            <span>Established 1992</span>
            <span>&bull;</span>
            <span>$5M Commercial Coverage</span>
            <span>&bull;</span>
            <span>ISA Master Arborist #FL-4982A</span>
            <span>&bull;</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>&bull;</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

