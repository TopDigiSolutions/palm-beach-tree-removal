"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import {
  X,
  MapPin,
  ArrowRight,
  ArrowLeft,
  Maximize2,
  Filter,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface GalleryScreenProps {
  onClose?: () => void;
  isModal?: boolean;
}

export default function GalleryScreen({ onClose, isModal = false }: GalleryScreenProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: "all", label: "All Operations", count: siteConfig.gallery.length },
    {
      id: "crane",
      label: "Crane & Heavy Rigging",
      count: siteConfig.gallery.filter((i) => i.category === "crane").length,
    },
    {
      id: "emergency",
      label: "Emergency Disaster Relief",
      count: siteConfig.gallery.filter((i) => i.category === "emergency").length,
    },
    {
      id: "palms",
      label: "Palm Removal & Canopy",
      count: siteConfig.gallery.filter((i) => i.category === "palms").length,
    },
    {
      id: "stump",
      label: "Root & Lawn Care",
      count: siteConfig.gallery.filter((i) => i.category === "stump").length,
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? siteConfig.gallery
      : siteConfig.gallery.filter((item) => item.category === activeFilter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) {
        if (e.key === "Escape" && onClose) {
          onClose();
        }
        return;
      }

      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null
            ? (prev - 1 + filteredItems.length) % filteredItems.length
            : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length, onClose]);

  const activeItem =
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className={`w-full ${isModal ? "min-h-full" : ""} bg-[#FAF9F6] text-[#1A2E22] flex flex-col`}>
      {/* Modal Top Navigation Bar (Only displayed when opened as a full modal) */}
      {isModal && (
        <header
          className="sticky top-0 z-40 px-4 sm:px-8 py-4 flex items-center justify-between shadow-lg"
          style={{
            background: "linear-gradient(135deg, #071710 0%, #0F3322 100%)",
            borderBottom: "1px solid rgba(197, 168, 128, 0.3)",
          }}
        >
          <div className="flex items-center gap-3">
            {onClose && (
              <button
                onClick={onClose}
                aria-label="Back to page"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[#DFCEB8] text-xs font-semibold transition-colors mr-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </button>
            )}
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880]">
                  Verified Field Operations
                </span>
              </div>
              <p className="font-serif text-lg sm:text-2xl font-bold text-white leading-tight">
                Palm Beach Job-Site Gallery
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/contact"
              onClick={() => {
                if (onClose) onClose();
              }}
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C5A880] hover:bg-[#DFCEB8] text-[#1A2E22] font-bold text-xs shadow-md transition-colors"
            >
              <span>Request Free Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {onClose && (
              <button
                onClick={onClose}
                aria-label="Close Gallery Screen"
                className="p-2 sm:p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </header>
      )}

      {/* Main Content Area */}
      <section
        aria-label="Field Operations Photo Gallery"
        className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-18"
      >
        {/* Intro & Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#E5DEC9]">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] uppercase text-[#8B6B3D] mb-2">
              <Filter className="w-3.5 h-3.5 text-[#8B6B3D]" />
              <span>Filter Operations</span>
            </div>
            <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
              Browse actual photographs of our 100-ton hydraulic crane lifts, Serco disaster relief grapple trucks, aerial boom trims, and precision root excavations across Palm Beach County estates.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 items-center">
            {filters.map((f) => {
              const active = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => {
                    setActiveFilter(f.id);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                    active
                      ? "bg-[#234D3D] text-white shadow-md font-bold border border-[#234D3D]"
                      : "bg-white text-[#2C3E33] hover:text-[#234D3D] hover:bg-[#F3EBDD]/60 border border-[#E5DEC9] shadow-sm"
                  }`}
                >
                  <span>{f.label}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold transition-colors ${
                      active
                        ? "bg-white/20 text-[#DFCEB8]"
                        : "bg-[#F5F2EB] text-stone-500"
                    }`}
                  >
                    {f.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredItems.map((item, index) => (
            <article
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative flex flex-col rounded-2xl bg-white border border-[#E5DEC9] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#357650]/40 card-lift transition-all duration-300 cursor-pointer"
            >
              {/* Photo Viewport */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Top Floating Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#0c3522]/90 text-[#DFCEB8] border border-[#C5A880]/30 shadow-md backdrop-blur-sm">
                    {item.categoryLabel}
                  </span>

                  <span className="w-8 h-8 rounded-full bg-[#0c3522]/90 text-[#DFCEB8] border border-[#C5A880]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm shadow-md">
                    <Maximize2 className="w-3.5 h-3.5 text-[#DFCEB8]" />
                  </span>
                </div>

                {/* Bottom subtle gradient on image */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>

              {/* Photo Meta & Caption */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#8B6B3D] mb-2 font-semibold">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.location}</span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#1A2E22] group-hover:text-[#234D3D] transition-colors leading-snug mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#E5DEC9] flex items-center justify-between text-xs">
                  <span className="text-[#234D3D] font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Job Completed</span>
                  </span>
                  <span className="text-stone-500 group-hover:text-[#234D3D] transition-colors flex items-center gap-1 font-semibold">
                    <span>View Photo</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner inside Gallery Screen */}
        <div
          className="mt-16 p-8 sm:p-10 rounded-3xl relative overflow-hidden shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{
            background: "linear-gradient(135deg, #071710 0%, #0F3322 50%, #092116 100%)",
            border: "1px solid rgba(197, 168, 128, 0.35)",
          }}
        >
          {/* Gold shimmer accent top line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(197,168,128,0.7) 30%, #DFCEB8 50%, rgba(197,168,128,0.7) 70%, transparent 100%)",
            }}
          />

          {/* Radial gold glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              background: "radial-gradient(circle at 20% 50%, rgba(197,168,128,0.3) 0%, transparent 60%)",
            }}
          />

          <div className="relative z-10 space-y-2 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DFCEB8]">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>Zero Lawn Damage Guarantee</span>
            </div>
            <h4
              className="font-serif text-xl sm:text-2xl font-bold text-white"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.3)" }}
            >
              Need Similar Crane or Tree Work on Your Estate?
            </h4>
            <p className="text-xs sm:text-sm text-white/80 max-w-xl">
              Certified Arborists, 100-ton crane access, surgical friction rigging, and $5M liability coverage across Palm Beach County.
            </p>
          </div>

          <div className="relative z-10 flex items-center gap-3 shrink-0">
            <Link
              href="/contact"
              onClick={() => {
                if (onClose) onClose();
              }}
              className="px-6 py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#DFCEB8] text-[#1A2E22] font-bold text-sm shadow-xl hover:shadow-2xl transition-all whitespace-nowrap transform hover:-translate-y-0.5"
            >
              Get Free Written Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal (Zoomed View) */}
      {activeItem && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-between p-4 sm:p-6"
        >
          {/* Lightbox Header */}
          <div className="w-full max-w-5xl flex items-center justify-between py-2 border-b border-white/10">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-white/70">
              <span className="font-mono text-[#C5A880] font-bold">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
              <span>•</span>
              <span className="text-white/90 font-medium truncate max-w-xs sm:max-w-md">
                {activeItem.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setLightboxIndex(null)}
                aria-label="Close Lightbox"
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Center Image & Controls */}
          <div className="relative w-full max-w-5xl flex-1 my-4 flex items-center justify-center">
            {/* Previous Button */}
            <button
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + filteredItems.length) %
                    filteredItems.length
                )
              }
              aria-label="Previous Photo"
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/60 hover:bg-[#C5A880] text-white hover:text-[#1A2E22] border border-white/20 transition-all focus:outline-none"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            {/* Next Button */}
            <button
              onClick={() =>
                setLightboxIndex((lightboxIndex + 1) % filteredItems.length)
              }
              aria-label="Next Photo"
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/60 hover:bg-[#C5A880] text-white hover:text-[#1A2E22] border border-white/20 transition-all focus:outline-none"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* The Photo */}
            <div className="relative w-full h-full max-h-[70vh]">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Lightbox Bottom Caption */}
          <div
            className="w-full max-w-5xl border rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #071710 0%, #0F3322 100%)",
              borderColor: "rgba(197, 168, 128, 0.35)",
            }}
          >
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-[#DFCEB8] font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{activeItem.location}</span>
                <span>•</span>
                <span className="uppercase tracking-wider text-[#C5A880]">
                  {activeItem.categoryLabel}
                </span>
              </div>
              <h2 className="font-serif text-base sm:text-lg font-bold text-white">
                {activeItem.title}
              </h2>
              <p className="text-xs text-white/80 max-w-2xl">
                {activeItem.description}
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/contact"
                onClick={() => {
                  setLightboxIndex(null);
                  if (onClose) onClose();
                }}
                className="px-5 py-2.5 rounded-xl bg-[#C5A880] hover:bg-[#DFCEB8] text-[#1A2E22] font-bold text-xs shadow-lg transition-colors flex items-center gap-2"
              >
                <span>Inquire About This Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
