"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, ServiceItem } from "@/data/site";
import {
  ArrowRight,
  Check,
  X,
  Shield,
  Phone,
  Sparkles,
  TreePine,
  Scissors,
  AlertTriangle,
  RotateCcw,
  Truck,
  CheckCircle2,
} from "lucide-react";

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Icon mapping for 6 core services
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "tree-removal":
        return <TreePine className="w-5 h-5 text-[#C5A880]" />;
      case "tree-trimming-pruning":
        return <Scissors className="w-5 h-5 text-[#C5A880]" />;
      case "emergency-tree":
        return <AlertTriangle className="w-5 h-5 text-[#C5A880]" />;
      case "hedge-trimming":
        return <Scissors className="w-5 h-5 text-[#C5A880]" />;
      case "stump-grinding":
        return <RotateCcw className="w-5 h-5 text-[#C5A880]" />;
      case "debris-hauling":
        return <Truck className="w-5 h-5 text-[#C5A880]" />;
      default:
        return <TreePine className="w-5 h-5 text-[#C5A880]" />;
    }
  };

  return (
    <section
      id="services"
      aria-label="Arboricultural Services Divisions"
      className="py-20 lg:py-28 bg-[#FAF9F6]"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="reveal-item flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#422E22] mb-3">
              <span className="w-8 h-0.5 bg-[#422E22]" />
              <span>Core Arboricultural Divisions</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E654B] tracking-tight">
              Surgical Precision for Luxury Grounds
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#121814]/80 max-w-xl leading-relaxed">
            Every estate tree operation is planned by an ISA Master Arborist, deploying multi-line rigging systems, hydraulic cranes, and composite turf mats to guarantee zero property or lawn damage.
          </p>
        </div>

        {/* 6 Core Services Grid with Asymmetric Editorial Visual Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.services.map((service, index) => {
            const isFeatured = index === 0 || index === 2; // Tree Removal & Emergency Services
            return (
              <article
                key={service.id}
                className={`reveal-item delay-${(index % 3 + 1) * 100} bg-[#FFFFFF] rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col group shadow-sm hover:shadow-2xl hover:-translate-y-1 ${
                  isFeatured
                    ? "border-[#357650]/30 hover:border-[#357650]"
                    : "border-[#422E22]/15 hover:border-[#422E22]/40"
                }`}
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative h-64 w-full overflow-hidden bg-brand">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#234D3D]/90 via-[#234D3D]/25 to-transparent" />

                  {/* Top Badge & Icon */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand text-[#DFCEB8] border border-[#C5A880]/30 ">
                      {service.tag}
                    </span>

                    <div className="w-8 h-8 rounded-full bg-brand border border-[#C5A880]/40 flex items-center justify-center shadow-md">
                      {getServiceIcon(service.id)}
                    </div>
                  </div>

                  {/* Bottom Image Title overlay for visual anchoring */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A880] block mb-0.5">
                      Division 0{index + 1}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#DFCEB8] transition-colors leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-[#121814]/80 leading-relaxed mb-5">
                      {service.shortDesc}
                    </p>

                    {/* Feature Highlights */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#121814]/85 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-[#357650] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-[#422E22]/10 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2E654B] hover:text-[#357650] transition-colors group-hover:translate-x-0.5"
                    >
                      <span>Specifications</span>
                      <ArrowRight className="w-4 h-4 text-[#C5A880] transition-transform group-hover:translate-x-1" />
                    </button>

                    <Link
                      href="/contact"
                      className="text-xs font-bold px-3.5 py-1.5 rounded-lg bg-[#F7F4EC] hover:bg-brand-hover text-[#2E654B] hover:text-white transition-colors"
                    >
                      Get Estimate &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Fast Estimate Strip */}
        <div className="reveal-item mt-16 bg-brand rounded-2xl p-8 sm:p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border border-[#C5A880]/30">
          <div className="flex items-center gap-4 text-center lg:text-left flex-col sm:flex-row">
            <div className="w-14 h-14 rounded-2xl bg-brand border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0">
              <Sparkles className="w-7 h-7 text-[#C5A880]" />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Need a Palm Beach County Tree Removal Permit Expedited?
              </h4>
              <p className="text-xs sm:text-sm text-[#DFCEB8] mt-1">
                Our ISA Certified Master Arborists handle municipal tree condition assessments, city arborist walkthroughs, and town hall filings.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto justify-center">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#DFCEB8] text-[#285640] font-bold text-sm shadow-md transition-colors whitespace-nowrap"
            >
              Get Free Estimate
            </Link>
            {siteConfig.phone && (
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#C5A880]" />
                <span>{siteConfig.phone}</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-service-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80  animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-[#FAF9F6] border border-[#C5A880]/40 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-60 sm:h-72 w-full bg-brand shrink-0">
              <Image
                src={selectedService.image}
                alt={selectedService.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#234D3D] via-transparent to-black/30" />

              <button
                onClick={() => setSelectedService(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#C5A880] text-[#285640] inline-block mb-2 shadow-sm">
                  {selectedService.tag}
                </span>
                <h3
                  id="modal-service-title"
                  className="font-serif text-2xl sm:text-3xl font-bold text-white"
                >
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#422E22] mb-1.5">
                  Arboricultural Scope &amp; Engineering
                </h4>
                <p className="text-sm sm:text-base text-[#121814]/85 leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#422E22] mb-2.5">
                  Standard Safety &amp; Quality Protocols
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#121814]">
                      <CheckCircle2 className="w-4 h-4 text-[#357650] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F4EC] border border-[#422E22]/15 text-xs sm:text-sm text-[#121814]">
                <strong className="text-[#2E654B] block font-bold mb-1">
                  Specialized Fleet &amp; Equipment Deployed:
                </strong>
                {selectedService.equipment}
              </div>

              <div className="pt-4 border-t border-[#422E22]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#357650] font-semibold">
                  <Shield className="w-4 h-4" />
                  <span>Backed by $5,000,000 Liability Coverage</span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="flex-1 sm:flex-initial px-4 py-2.5 rounded-lg border border-[#422E22]/20 text-sm font-semibold text-[#121814] hover:bg-black/5"
                  >
                    Close
                  </button>
                  <Link
                    href="/contact"
                    onClick={() => setSelectedService(null)}
                    className="flex-1 sm:flex-initial px-5 py-2.5 rounded-lg bg-[#C5A880] text-[#285640] font-bold text-sm hover:bg-[#DFCEB8] transition-colors"
                  >
                    Request Estimate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
