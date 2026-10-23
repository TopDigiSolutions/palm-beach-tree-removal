"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, MapPin, CheckCircle } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = siteConfig.testimonials;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };



  const activeReview = reviews[currentIndex];

  return (
    <section
      id="testimonials"
      aria-label="Client Testimonials and Reviews"
      className="py-20 lg:py-28 bg-[#F7F4EC] border-y border-[#422E22]/15 relative overflow-hidden"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="reveal-item text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#422E22] mb-3">
            <span className="w-8 h-0.5 bg-[#422E22]" />
            <span>Client stories</span>
            <span className="w-8 h-0.5 bg-[#422E22]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0E2A1D] tracking-tight">
            Trusted by South Florida&apos;s Discerning Homeowners
          </h2>
          <p className="text-sm sm:text-base text-[#121814]/80 mt-4 leading-relaxed">
            Read first-hand accounts of precision crane extractions, post-hurricane recoveries, and meticulous palm sculpting from estate owners across Palm Beach County.
          </p>
        </div>

        {/* Carousel Showcase Container */}
        <div className="reveal-item delay-200 max-w-4xl mx-auto">
          <div className="relative bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl border border-[#422E22]/15 overflow-hidden min-h-[380px] sm:min-h-[320px] flex flex-col justify-between">
            {/* Ambient Background Quote Icon */}
            <Quote className="absolute right-6 top-6 w-24 h-24 text-[#422E22]/5 pointer-events-none select-none" />

            <div>
              {/* Star Rating & Verified Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-1 text-[#C5A880]">
                  {[...Array(activeReview.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-[#0E2A1D]">
                    {activeReview.rating.toFixed(1)} / 5.0 Rating
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E5638]/10 text-[#1E5638] text-xs font-bold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Palm Beach Estate Work</span>
                </div>
              </div>

              {/* Quote Body */}
              <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl text-[#121814] leading-relaxed italic mb-8">
                &ldquo;{activeReview.quote}&rdquo;
              </blockquote>
            </div>

            {/* Author Information & Navigation Controls */}
            <div className="pt-6 border-t border-[#422E22]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="font-serif text-lg font-bold text-[#0E2A1D]">
                  {activeReview.name}
                </div>
                <div className="flex items-center gap-2 text-xs text-[#121814]/75 mt-0.5">
                  <span className="font-medium text-[#422E22]">
                    {activeReview.role}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1 text-[#1E5638] font-semibold">
                    <MapPin className="w-3 h-3" />
                    {activeReview.location}
                  </span>
                </div>
                <div className="text-[11px] text-[#75583e] font-semibold mt-1">
                  Service Rendered: {activeReview.service}
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="w-11 h-11 rounded-full border border-[#422E22]/20 hover:border-[#0E2A1D] bg-[#F7F4EC] hover:bg-[#0E2A1D] hover:text-white transition-colors flex items-center justify-center text-[#0E2A1D]"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="px-3 text-xs font-bold text-[#0E2A1D]">
                  0{currentIndex + 1} / 0{reviews.length}
                </div>

                <button
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="w-11 h-11 rounded-full border border-[#422E22]/20 hover:border-[#0E2A1D] bg-[#F7F4EC] hover:bg-[#0E2A1D] hover:text-white transition-colors flex items-center justify-center text-[#0E2A1D]"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`min-h-6 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-[#0E2A1D]"
                    : "w-2 bg-[#422E22]/30 hover:bg-[#422E22]/60"
                }`}
              />
            ))}
          </div>

          {/* Overall Ratings Strip */}
          <div className="mt-10 p-4 rounded-2xl bg-[#0E2A1D] text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#C5A880] shrink-0" />
              <span>
                <strong>100% Satisfaction Record:</strong> Over 14,800 trees cleared with zero property claims.
              </span>
            </div>

            <span className="text-[#DFCEB8] font-bold text-center sm:text-right">
              Serving South Florida Since 1992
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
