"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import {
  Phone,
  X,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Award,
  MapPin,
  Trees,
} from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const [citiesExpanded, setCitiesExpanded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Close and reset expansions when path changes
  useEffect(() => {
    if (isOpen) {
      onClose();
      setServicesExpanded(false);
      setCitiesExpanded(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  if (!isOpen) return null;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-[9999] lg:hidden flex justify-end"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85  transition-opacity animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide Drawer */}
      <div className="relative w-full max-w-md h-full bg-brand border-l border-[#C5A880]/35 flex flex-col z-10 shadow-2xl overflow-hidden animate-slideInRight">
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-brand shrink-0">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center gap-3 focus:outline-none"
          >
            <div className="relative w-11 h-11 shrink-0 drop-shadow-md">
              <Image
                src={siteConfig.logo || "/images/logo.png"}
                alt="Palm Beach Tree Removal"
                fill
                sizes="44px"
                className="object-contain object-center"
              />
            </div>
            <div>
              <div className="font-serif text-white font-bold text-base leading-none">
                PALM BEACH
              </div>
              <div className="text-[9px] text-[#C5A880] tracking-[0.16em] uppercase font-bold mt-1">
                Est. 1992 &bull; Precision Arboriculture
              </div>
            </div>
          </Link>

          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation List */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-5">
          {/* Emergency Alert Bar */}
          <div className="p-3.5 rounded-2xl bg-brand border border-[#C5A880]/35 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold">
                  24/7 Emergency Dispatch
                </div>
                <div className="text-xs text-white/85 font-medium">
                  {siteConfig.phone ? `Direct: ${siteConfig.phone}` : "Online Dispatch 24/7"}
                </div>
              </div>
            </div>

            {siteConfig.phone ? (
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                onClick={onClose}
                className="px-3 py-1.5 rounded-lg bg-[#C5A880] text-[#285640] text-xs font-bold flex items-center gap-1 shadow-md hover:bg-[#DFCEB8] transition-colors shrink-0"
              >
                <Phone className="w-3 h-3 fill-current" />
                <span>Call</span>
              </a>
            ) : (
              <Link
                href="/contact"
                onClick={onClose}
                className="px-3 py-1.5 rounded-lg bg-[#C5A880] text-[#285640] text-xs font-bold flex items-center gap-1 shadow-md hover:bg-[#DFCEB8] transition-colors shrink-0"
              >
                <span>Request</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            )}
          </div>

          {/* Links */}
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {/* Home */}
            <Link
              href="/"
              onClick={onClose}
              className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                isActive("/") && pathname === "/"
                  ? "bg-white/10 text-[#DFCEB8]"
                  : "text-white/90 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>Home</span>
              <ArrowRight className="w-4 h-4 text-white/30" />
            </Link>

            {/* About */}
            <Link
              href="/about"
              onClick={onClose}
              className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                isActive("/about")
                  ? "bg-white/10 text-[#DFCEB8]"
                  : "text-white/90 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>About Us</span>
              <ArrowRight className="w-4 h-4 text-white/30" />
            </Link>

            {/* Services Accordion */}
            <div className="flex flex-col">
              <button
                type="button"
                onClick={() => setServicesExpanded(!servicesExpanded)}
                className={`w-full px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                  isActive("/services")
                    ? "bg-white/10 text-[#DFCEB8]"
                    : "text-white hover:bg-white/5"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Trees className="w-4 h-4 text-[#C5A880]" />
                  <span>Services</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#C5A880] transition-transform duration-200 ${
                    servicesExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              {servicesExpanded && (
                <div className="ml-3 pl-3 border-l-2 border-[#C5A880]/30 py-1 space-y-1.5 animate-fadeIn">
                  <Link
                    href="/services"
                    prefetch={true}
                    onClick={onClose}
                    className="block px-3 py-2 rounded-lg text-sm text-[#DFCEB8] hover:bg-white/5 transition-colors font-bold"
                  >
                    View All Arborist Services →
                  </Link>
                  {siteConfig.services.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.id}`}
                      prefetch={true}
                      onClick={onClose}
                      className="block px-3 py-2.5 rounded-lg text-sm text-white/85 hover:text-[#DFCEB8] hover:bg-white/5 transition-colors"
                    >
                      <div className="font-semibold text-white/95 text-sm">
                        {service.title}
                      </div>
                      <div className="text-xs text-[#C5A880] mt-0.5">
                        {service.tag}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Service Areas Accordion */}
            <div className="flex flex-col">
              <button
                type="button"
                onClick={() => setCitiesExpanded(!citiesExpanded)}
                className={`w-full px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                  isActive("/service-areas")
                    ? "bg-white/10 text-[#DFCEB8]"
                    : "text-white hover:bg-white/5"
                }`}
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C5A880]" />
                  <span>Service Areas</span>
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#C5A880] transition-transform duration-200 ${
                    citiesExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              {citiesExpanded && (
                <div className="ml-3 pl-3 border-l-2 border-[#C5A880]/30 py-1 space-y-1 animate-fadeIn">
                  <Link
                    href="/service-areas"
                    onClick={onClose}
                    className="block px-3 py-2 rounded-lg text-sm text-[#DFCEB8] hover:bg-white/5 transition-colors font-bold"
                  >
                    All Service Areas &amp; Live Map →
                  </Link>
                  {siteConfig.serviceAreaDetails.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/service-areas/${area.slug}`}
                      onClick={onClose}
                      className="block px-3 py-2 rounded-lg text-sm text-white/85 hover:text-[#DFCEB8] hover:bg-white/5 transition-colors"
                    >
                      {area.city}, {area.state}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/gallery"
              onClick={onClose}
              className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                isActive("/gallery")
                  ? "bg-white/10 text-[#DFCEB8]"
                  : "text-white/90 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>Gallery</span>
              <ArrowRight className="w-4 h-4 text-white/30" />
            </Link>

            <Link
              href="/reviews"
              onClick={onClose}
              className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                isActive("/reviews")
                  ? "bg-white/10 text-[#DFCEB8]"
                  : "text-white/90 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>Client Reviews</span>
              <ArrowRight className="w-4 h-4 text-white/30" />
            </Link>

            <Link
              href="/faq"
              onClick={onClose}
              className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                isActive("/faq")
                  ? "bg-white/10 text-[#DFCEB8]"
                  : "text-white/90 hover:text-white hover:bg-white/5"
              }`}
            >
              <span>Frequently Asked Questions</span>
              <ArrowRight className="w-4 h-4 text-white/30" />
            </Link>

            <Link
              href="/contact"
              onClick={onClose}
              className={`px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors flex items-center justify-between ${
                isActive("/contact")
                  ? "bg-white/10 text-[#DFCEB8]"
                  : "text-[#DFCEB8] hover:text-white hover:bg-white/5"
              }`}
            >
              <span>Contact &amp; Free Estimate</span>
              <ArrowRight className="w-4 h-4 text-[#C5A880]" />
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="pt-3 border-t border-white/10 space-y-2.5">
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#C5A880] via-[#DFCEB8] to-[#C5A880] text-[#285640] font-extrabold text-sm shadow-lg transition-all"
            >
              <Sparkles className="w-4 h-4 text-[#285640]" />
              <span>Get a Free Written Estimate</span>
            </Link>

            {siteConfig.phone && (
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-brand border border-[#C5A880]/40 text-white font-bold text-sm hover:bg-brand-hover transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A880] fill-current" />
                <span>Call Hotline: {siteConfig.phone}</span>
              </a>
            )}
          </div>

          {/* Credentials Footer Strip */}
          <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2 text-xs text-white/70">
            <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white/5 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0" />
              <span>$5M Coverage</span>
            </div>
            <div className="flex items-center gap-1.5 p-2 rounded-xl bg-white/5 border border-white/10">
              <Award className="w-4 h-4 text-[#C5A880] shrink-0" />
              <span>ISA Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

