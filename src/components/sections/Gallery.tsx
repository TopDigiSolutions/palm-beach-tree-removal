"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import GalleryScreen from "./GalleryScreen";
import {
  MapPin,
  ArrowRight,
  Sparkles,
  Images,
  Maximize2,
  CheckCircle2,
  ChevronRight,
  Camera,
  ExternalLink,
} from "lucide-react";

export default function Gallery() {
  const [isScreenOpen, setIsScreenOpen] = useState(false);
  const [selectedPreviewIndex, setSelectedPreviewIndex] = useState(0);

  const galleryItems = siteConfig.gallery;
  const currentItem = galleryItems[selectedPreviewIndex] || galleryItems[0];
  const allCount = galleryItems.length;

  return (
    <>
      <section
        id="gallery"
        aria-label="Estate Portfolio and Work Gallery"
        className="py-16 sm:py-20 lg:py-28 bg-[#FAF8F5] border-t border-[#422E22]/15 relative"
      >
        <div className="container-custom">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#8B6B3D] mb-3">
                <Camera className="w-4 h-4 text-[#8B6B3D]" />
                <span>On-Site Portfolio &amp; Field Operations</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2E654B] tracking-tight mb-3">
                Job-Site Work Gallery
              </h2>
              <p className="text-sm sm:text-base text-[#121814]/80 leading-relaxed">
                Browse authentic photos of our heavy crane operations, Serco disaster relief trucks, and precision estate arboriculture across Palm Beach County.
              </p>
            </div>

            {/* Primary Action Button to Open Gallery Screen */}
            <div className="shrink-0">
              <button
                type="button"
                onClick={() => setIsScreenOpen(true)}
                className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-brand hover:bg-brand-hover text-white font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#C5A880]/30"
              >
                <Images className="w-5 h-5 text-[#E5C38D]" />
                <span>See Full Gallery ({allCount} Photos)</span>
                <ArrowRight className="w-4 h-4 text-[#E5C38D]" />
              </button>
            </div>
          </div>

          {/* Featured Preview Picture Showcase Card (Clean, Vivid, No Obscuring Gradients) */}
          <div className="w-full bg-white rounded-3xl border-2 border-[#C5A880]/40 shadow-2xl overflow-hidden">
            {/* Top Preview Bar */}
            <div className="bg-brand px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-white border-b border-[#C5A880]/30">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5C38D] animate-pulse" />
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#E5C38D]">
                  Gallery Preview Photo • {selectedPreviewIndex + 1} of {allCount}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-white/70 hidden sm:inline">
                  Click photo to open interactive gallery screen
                </span>
                <button
                  type="button"
                  onClick={() => setIsScreenOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-[#DFCEB8] transition-colors"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Expand Screen</span>
                </button>
              </div>
            </div>

            {/* The Clear Photo Display */}
            <div
              onClick={() => setIsScreenOpen(true)}
              className="group relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden bg-brand cursor-pointer"
            >
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Minimal Bottom Shadow for readability only */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

              {/* Category Floating Tag */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-xl bg-brand  border border-[#E5C38D]/40 text-xs font-bold text-[#E5C38D] shadow-lg">
                  {currentItem.categoryLabel}
                </span>
              </div>

              {/* Hover Click Overlay Banner */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-black/20">
                <div className="px-6 py-3 rounded-2xl bg-brand border border-[#E5C38D]/50 text-white font-bold text-sm shadow-2xl flex items-center gap-2.5  transform scale-95 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-4 h-4 text-[#E5C38D]" />
                  <span>Click to Open Gallery Screen ({allCount} Photos)</span>
                </div>
              </div>

              {/* Caption Overlay on Bottom of Image */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 pointer-events-none flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#E5C38D] font-semibold mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{currentItem.location}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-2xl font-bold text-white leading-tight drop-shadow-md">
                    {currentItem.title}
                  </h3>
                </div>

                <div className="pointer-events-auto">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsScreenOpen(true);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#E5C38D] hover:bg-[#F3D7A8] text-[#234D3D] font-bold text-xs sm:text-sm shadow-lg transition-colors whitespace-nowrap"
                  >
                    <span>View All {allCount} Photos</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Project Details & Thumbnail Switcher Strip */}
            <div className="p-6 sm:p-8 bg-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-t border-gray-100">
              <div className="max-w-xl">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8B6B3D]">
                  Project Description
                </span>
                <p className="text-xs sm:text-sm text-[#121814]/80 mt-1 leading-relaxed">
                  {currentItem.description}
                </p>
              </div>

              {/* Thumbnail Quick Preview Strip */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full lg:w-auto">
                <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">
                  Switch Preview:
                </span>
                <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
                  {galleryItems.map((item, idx) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedPreviewIndex(idx)}
                      title={item.title}
                      className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                        selectedPreviewIndex === idx
                          ? "border-[#2E654B] ring-2 ring-[#E5C38D] scale-105 shadow-md"
                          : "border-gray-200 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Gallery Screen Modal (Opens when clicking button or preview picture) */}
      {isScreenOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn"
        >
          <GalleryScreen onClose={() => setIsScreenOpen(false)} isModal={true} />
        </div>
      )}
    </>
  );
}
