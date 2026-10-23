"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { siteConfig } from "@/data/site";
import {
  Phone,
  Menu,
  ShieldCheck,
  ChevronDown,
  ArrowRight,
  Sparkles,
  MapPin,
  Trees,
  Award,
  Loader2,
  Clock,
  Compass,
} from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navigatingSlug, setNavigatingSlug] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Reset navigating state when route changes
  useEffect(() => {
    setNavigatingSlug(null);
  }, [pathname]);

  // Pre-warm / prefetch all service & service area routes
  const prefetchServices = useCallback(() => {
    siteConfig.services.forEach((service) => {
      router.prefetch(`/services/${service.id}`);
    });
    router.prefetch("/services");
  }, [router]);

  const prefetchServiceAreas = useCallback(() => {
    siteConfig.serviceAreaDetails.forEach((area) => {
      router.prefetch(`/service-areas/${area.slug}`);
    });
    router.prefetch("/service-areas");
  }, [router]);

  // Idle prefetch: warm routes during browser idle time after header mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      prefetchServices();
      prefetchServiceAreas();
    }, 800);
    return () => clearTimeout(timer);
  }, [prefetchServices, prefetchServiceAreas]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact", highlight: true },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-brand shadow-[0_8px_28px_rgba(8,26,18,0.3)] border-b border-[#C5A880]/30 py-2"
            : "bg-brand border-b border-white/10 py-2.5"
        }`}
      >
        {/* Top Pre-Header Announcement Strip */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isScrolled ? "max-h-0 opacity-0 mb-0 py-0" : "max-h-9 opacity-100 mb-1.5 pb-1.5 border-b border-white/10"
          }`}
        >
          <div className="container-custom flex items-center justify-between text-[10px] sm:text-xs text-white/80 px-3 sm:px-6">
            <div className="flex items-center gap-2 truncate">
              <span className="flex items-center gap-1 text-[#DFCEB8] font-semibold shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A880]" />
                ISA Master Arborists
              </span>
              <span className="text-white/30">&bull;</span>
              <span className="text-white/70 truncate shrink-0">
                $5,000,000 Commercial Coverage
              </span>
              <span className="text-white/30 hidden md:inline">&bull;</span>
              <span className="hidden md:inline text-white/60">
                FL Lic. #CBC1264890
              </span>
            </div>

            <div className="flex items-center gap-1.5 shrink-0 ml-2">
              <Sparkles className="w-3 h-3 text-[#C5A880] animate-pulse" />
              {siteConfig.phone ? (
                <>
                  <span className="text-[10px] text-[#DFCEB8] font-bold uppercase tracking-wider hidden sm:inline">
                    ⚡ 24/7 Storm Response:
                  </span>
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="text-white hover:text-[#C5A880] font-bold tracking-wide transition-colors whitespace-nowrap bg-brand px-2.5 py-0.5 rounded-full border border-[#C5A880]/35 hover:border-[#C5A880] shadow-sm flex items-center gap-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    <span>{siteConfig.phone}</span>
                  </a>
                </>
              ) : (
                <Link
                  href="/contact"
                  prefetch={true}
                  className="text-[#DFCEB8] hover:text-white font-bold text-[10px] tracking-wide transition-colors whitespace-nowrap bg-brand px-2.5 py-0.5 rounded-full border border-[#C5A880]/35 flex items-center gap-1"
                >
                  <span>⚡ 24/7 Rapid Emergency Response</span>
                  <ArrowRight className="w-3 h-3 text-[#C5A880]" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="container-custom flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-6">
          {/* Brand Logo & Heritage */}
          <Link
            href="/"
            prefetch={true}
            className="flex items-center gap-2.5 sm:gap-3 group shrink-0 focus-visible:outline-none"
            aria-label="Palm Beach Tree Removal Home"
          >
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 group-hover:scale-105 transition-transform shrink-0 drop-shadow-md">
              <Image
                src={siteConfig.logo || "/images/logo.png"}
                alt="Palm Beach Tree Removal"
                fill
                sizes="52px"
                className="object-contain object-center"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-white font-bold text-xs sm:text-base lg:text-lg tracking-wider leading-none group-hover:text-[#DFCEB8] transition-colors whitespace-nowrap">
                PALM BEACH
              </span>
              <span className="text-[8px] sm:text-[10px] text-[#C5A880] tracking-[0.16em] uppercase font-bold mt-0.5 whitespace-nowrap flex items-center gap-1">
                <span>Tree Removal</span>
                <span className="hidden sm:inline text-white/40">&bull;</span>
                <span className="hidden sm:inline text-[#DFCEB8]">Est. 1992</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-1.5 shrink-0"
            aria-label="Primary Navigation"
          >
            {/* Services Dropdown (White Background & Luxury Styling) */}
            <div
              className="relative group/services"
              onMouseEnter={prefetchServices}
              onFocus={prefetchServices}
            >
              <Link
                href="/services"
                prefetch={true}
                className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  isActive("/services")
                    ? "text-[#DFCEB8] bg-white/10 shadow-sm"
                    : "text-white/85 hover:text-white hover:bg-white/5 group-hover/services:text-[#DFCEB8]"
                }`}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#C5A880] transition-transform duration-200 group-hover/services:rotate-180" />
              </Link>

              {/* White Dropdown Panel for Services */}
              <div className="absolute top-full left-0 pt-2 w-[390px] opacity-0 -translate-y-2 pointer-events-none group-hover/services:opacity-100 group-hover/services:translate-y-0 group-hover/services:pointer-events-auto transition-all duration-200 z-50">
                <div className="bg-white border border-[#C5A880]/40 rounded-2xl p-3 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.25),0_0_0_1px_rgba(0,0,0,0.06)]">
                  <div className="px-3.5 py-2 bg-[#F4F1E8] border border-[#C5A880]/25 rounded-xl mb-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Trees className="w-4 h-4 text-[#0F3322]" />
                      <span className="text-xs uppercase tracking-wider text-[#0F3322] font-extrabold">
                        Arboricultural Divisions
                      </span>
                    </div>
                    <Link
                      href="/services"
                      prefetch={true}
                      className="text-sm text-[#0F3322] hover:text-[#C5A880] transition-colors font-extrabold flex items-center gap-0.5"
                    >
                      <span>View All</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                  <div className="space-y-1">
                    {siteConfig.services.map((service) => {
                      const isNavigating = navigatingSlug === service.id;
                      return (
                        <Link
                          key={service.id}
                          href={`/services/${service.id}`}
                          prefetch={true}
                          onMouseEnter={() => router.prefetch(`/services/${service.id}`)}
                          onClick={() => setNavigatingSlug(service.id)}
                          className={`flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group/item ${
                            isNavigating
                              ? "bg-[#EAF2EE] text-[#0F3322]"
                              : "hover:bg-[#F3F7F5]"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-[#EAF2EE] text-[#0F3322] group-hover/item:bg-[#0F3322] group-hover/item:text-[#DFCEB8] transition-colors flex items-center justify-center shrink-0 shadow-2xs">
                              <Trees className="w-4.5 h-4.5" />
                            </div>
                            <div>
                              <div className="text-[15px] font-extrabold text-[#0B2317] group-hover/item:text-[#0F3322] transition-colors leading-tight">
                                {service.title}
                              </div>
                              <div className="text-[13px] text-[#3D5A4B] group-hover/item:text-[#113824] font-semibold mt-0.5">
                                {service.tag}
                              </div>
                            </div>
                          </div>
                          {isNavigating ? (
                            <Loader2 className="w-4 h-4 text-[#0F3322] animate-spin shrink-0 ml-2" />
                          ) : (
                            <ArrowRight className="w-4 h-4 text-neutral-400 group-hover/item:text-[#0F3322] transition-transform group-hover/item:translate-x-1 shrink-0 ml-2" />
                          )}
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-2.5 pt-2.5 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#3D5A4B] px-2">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>24/7 Rapid Emergency Response</span>
                    </span>
                    <span className="font-extrabold text-[#0F3322]">Zero Lawn Damage</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas Dropdown (White Background & Luxury Styling) */}
            <div
              className="relative group/areas"
              onMouseEnter={prefetchServiceAreas}
              onFocus={prefetchServiceAreas}
            >
              <Link
                href="/service-areas"
                prefetch={true}
                className={`inline-flex items-center gap-1 px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
                  isActive("/service-areas")
                    ? "text-[#DFCEB8] bg-white/10 shadow-sm"
                    : "text-white/85 hover:text-white hover:bg-white/5 group-hover/areas:text-[#DFCEB8]"
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Service Areas</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#C5A880] transition-transform duration-200 group-hover/areas:rotate-180" />
              </Link>

              {/* White Dropdown Panel for Service Areas */}
              <div className="absolute top-full left-0 pt-2 w-[440px] opacity-0 -translate-y-2 pointer-events-none group-hover/areas:opacity-100 group-hover/areas:translate-y-0 group-hover/areas:pointer-events-auto transition-all duration-200 z-50">
                <div className="bg-white border border-[#C5A880]/40 rounded-2xl p-3 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.25),0_0_0_1px_rgba(0,0,0,0.06)]">
                  <div className="px-3.5 py-2 bg-[#F4F1E8] border border-[#C5A880]/25 rounded-xl mb-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#0F3322]" />
                      <span className="text-xs uppercase tracking-wider text-[#0F3322] font-extrabold">
                        Palm Beach Coverage
                      </span>
                    </div>
                    <Link
                      href="/service-areas"
                      prefetch={true}
                      className="text-sm text-[#0F3322] hover:text-[#C5A880] transition-colors font-extrabold flex items-center gap-0.5"
                    >
                      <span>Live Map &amp; All</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  {/* 2-Column Grid for Cities */}
                  <div className="grid grid-cols-2 gap-1.5">
                    {siteConfig.serviceAreaDetails.map((area) => {
                      const isNavigating = navigatingSlug === area.slug;
                      return (
                        <Link
                          key={area.slug}
                          href={`/service-areas/${area.slug}`}
                          prefetch={true}
                          onMouseEnter={() => router.prefetch(`/service-areas/${area.slug}`)}
                          onClick={() => setNavigatingSlug(area.slug)}
                          className={`flex flex-col justify-between p-2.5 rounded-xl transition-all group/item border ${
                            isNavigating
                              ? "bg-[#EAF2EE] border-[#0F3322]/20 text-[#0F3322]"
                              : "bg-[#F8FAF9] border-neutral-200/60 hover:bg-[#EDF5F0] hover:border-[#0F3322]/25 hover:shadow-xs"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-[15px] font-extrabold text-[#0B2317] group-hover/item:text-[#0F3322] transition-colors leading-tight truncate">
                              {area.city}
                            </span>
                            {isNavigating ? (
                              <Loader2 className="w-3.5 h-3.5 text-[#0F3322] animate-spin shrink-0" />
                            ) : (
                              <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover/item:text-[#0F3322] transition-transform group-hover/item:translate-x-0.5 shrink-0" />
                            )}
                          </div>
                          <div className="mt-1.5 flex items-center">
                            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#14432D] bg-[#E1ECE5] px-1.5 py-0.5 rounded-md">
                              <Clock className="w-3 h-3 text-[#0F3322]" />
                              <span>{area.responseTime.replace(" (Direct Dispatch)", "")}</span>
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-2.5 pt-2.5 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#3D5A4B] px-2">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Direct Dispatch Across PBC</span>
                    </span>
                    <span className="font-extrabold text-[#0F3322]">FL Lic. #CBC1264890</span>
                  </div>
                </div>
              </div>
            </div>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                prefetch={true}
                onMouseEnter={() => router.prefetch(item.href)}
                className={`px-2.5 xl:px-3 py-1.5 text-xs xl:text-sm font-semibold rounded-lg transition-all whitespace-nowrap flex items-center gap-1 ${
                  isActive(item.href)
                    ? "text-[#DFCEB8] bg-white/10 shadow-sm"
                    : item.highlight
                    ? "text-[#DFCEB8] hover:text-white hover:bg-white/5"
                    : "text-white/85 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Phone Button (Desktop XL) */}
            {siteConfig.phone && (
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#C5A880]/40 text-white transition-all shadow-sm"
                aria-label={`Call ${siteConfig.phone}`}
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880] fill-current" />
                <div className="text-left">
                  <span className="text-[9px] uppercase font-bold text-[#C5A880] tracking-wider block leading-none">
                    24/7 Hotline
                  </span>
                  <span className="text-xs font-bold text-white whitespace-nowrap">
                    {siteConfig.phone}
                  </span>
                </div>
              </a>
            )}

            {/* Primary CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-[#C5A880] via-[#DFCEB8] to-[#C5A880] hover:from-[#DFCEB8] hover:to-[#C5A880] text-[#285640] font-extrabold text-xs sm:text-sm tracking-wide shadow-md transition-all transform hover:scale-[1.02] whitespace-nowrap shrink-0 border border-[#DFCEB8]/40"
            >
              <Sparkles className="hidden sm:block w-3.5 h-3.5 text-[#285640]" />
              <span>Free Estimate</span>
            </Link>

            {/* Mobile / Tablet Triggers */}
            <div className="flex items-center gap-1.5 lg:hidden shrink-0">
              {siteConfig.phone && (
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="p-2 rounded-xl bg-brand border border-[#C5A880]/40 text-[#C5A880] hover:bg-brand-hover transition-colors shadow-sm"
                  aria-label="Call Dispatch"
                  title="Call Dispatch"
                >
                  <Phone className="w-4 h-4 fill-current" />
                </a>
              )}

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open mobile menu"
                className="p-2 rounded-xl bg-brand border border-[#C5A880]/40 text-white hover:bg-brand-hover transition-colors focus:outline-none shrink-0 shadow-md cursor-pointer"
                title="Open Menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

