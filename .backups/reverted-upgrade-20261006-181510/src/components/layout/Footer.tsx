import Link from "next/link";
import React from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      aria-label="Site Footer"
      className="bg-[#06160E] text-white border-t border-[#C5A880]/20 pt-16 pb-12"
    >
      <div className="container-custom">
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Brand & Heritage (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 shrink-0 drop-shadow-md">
                <Image
                  src={siteConfig.logo || "/images/logo.png"}
                  alt="Palm Beach Tree Removal"
                  fill
                  sizes="56px"
                  className="object-contain object-center"
                />
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-wider text-white block leading-none">
                  PALM BEACH
                </span>
                <span className="text-[10px] text-[#C5A880] tracking-[0.2em] uppercase font-semibold">
                  Tree Removal &bull; Est. 1992
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#FAF9F6]/75 leading-relaxed pr-4">
              Providing surgical hazardous tree removals, 100-ton crane extractions, and 24/7 hurricane emergency response across Palm Beach County for over 34 consecutive years.
            </p>

            <div className="pt-2 text-xs text-[#DFCEB8] space-y-1">
              <div>{siteConfig.licensing.stateLicense}</div>
              <div>{siteConfig.licensing.countyLicense}</div>
              <div>{siteConfig.licensing.arboristCert}</div>
              <div>{siteConfig.licensing.tciaMember}</div>
            </div>
          </div>

          {/* Column 2: Core Services (3 cols) */}
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
            </ul>
          </div>

          {/* Column 3: Service Areas (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880]">
              Service Areas
            </h3>
            <ul className="space-y-1.5 text-xs text-white/75">
              {siteConfig.serviceAreas.map((area) => (
                <li key={area}>
                  <Link
                    href="/#service-areas"
                    className="hover:text-[#DFCEB8] transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
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
                href="/#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#C5A880] hover:bg-[#DFCEB8] text-[#0A1E14] font-bold text-xs shadow-md transition-colors"
              >
                <span>Get Free Written Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>&copy; 2026 {siteConfig.legalName}. All Rights Reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <span>Established 1992</span>
            <span>&bull;</span>
            <span>$5M Insured</span>
            <span>&bull;</span>
            <span>ISA Master Arborist #FL-4982A</span>
            <span>&bull;</span>
            <Link href="/#contact" className="hover:text-white">Contact</Link>
            <span>&bull;</span>
            <Link href="/gallery" className="hover:text-white">Gallery</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
