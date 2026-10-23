"use client";

import React, { useRef, useState, useEffect } from "react";
import { siteConfig } from "@/data/site";
import Link from "next/link";
import { Phone, ArrowRight, MessageCircle, FileText, Star, Sparkles } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    motionQuery.addEventListener("change", handleMotionChange);
    return () => motionQuery.removeEventListener("change", handleMotionChange);
  }, []);

  // Pause video when out of viewport to eliminate GPU decode lag on scroll
  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!videoRef.current) return;
          if (entry.isIntersecting && !prefersReducedMotion) {
            videoRef.current.play().catch(() => { });
          } else {
            videoRef.current.pause();
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [prefersReducedMotion]);



  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Palm Beach Tree Removal & Estate Arboriculture"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-brand pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-24"
    >
      {/* 1. Background Media Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 bg-brand [transform:translateZ(0)]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover object-center will-change-transform"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Balanced overlay keeps the headline readable over moving footage. */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#234D3D]/80 via-[#234D3D]/60 to-[#234D3D]/35" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#234D3D]/70 via-[#234D3D]/20 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#234D3D]/80 via-[#234D3D]/30 to-transparent pointer-events-none" />
      </div>

      {/* 2. Left Side Fixed Quick Action Bar (Theme Styled) */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-1.5 shadow-2xl opacity-90 hover:opacity-100 transition-opacity">
        {siteConfig.phoneRaw ? (
          <a
            href={`https://wa.me/${siteConfig.phoneRaw.replace("+", "")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-9 h-9 sm:w-11 sm:h-11 bg-brand hover:bg-brand-hover border-y border-r border-[#C5A880]/40 text-[#DFCEB8] flex items-center justify-center rounded-r-lg transition-all duration-300 transform hover:scale-105 shadow-xl group"
            title="WhatsApp Us"
          >
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current group-hover:rotate-12 transition-transform" />
          </a>
        ) : (
          <Link
            href="/services"
            aria-label="View Services"
            className="w-9 h-9 sm:w-11 sm:h-11 bg-brand hover:bg-brand-hover border-y border-r border-[#C5A880]/40 text-[#DFCEB8] flex items-center justify-center rounded-r-lg transition-all duration-300 transform hover:scale-105 shadow-xl group"
            title="Arboriculture Services"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#DFCEB8] group-hover:rotate-12 transition-transform" />
          </Link>
        )}
        <Link
          href="/contact"
          aria-label="Get Instant Quote"
          className="w-9 h-9 sm:w-11 sm:h-11 bg-[#C5A880] hover:bg-[#DFCEB8] border-y border-r border-[#285640]/20 text-[#285640] flex items-center justify-center rounded-r-lg transition-all duration-300 transform hover:scale-105 shadow-xl group"
          title="Request Free Quote"
        >
          <FileText className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform stroke-[2.5]" />
        </Link>
      </div>



      {/* 4. Floating Estate Review Badge on Hero (Desktop) */}
      <div className="absolute bottom-28 right-8 hidden lg:block w-72 rounded-2xl border border-[#C5A880]/40 bg-brand p-4  shadow-2xl z-20">
        <div className="flex items-center justify-between">
          <div className="flex gap-0.5 text-[#C5A880]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span className="text-xs font-bold text-white/90">5.0 Verified</span>
        </div>
        <p className="mt-2.5 text-xs leading-relaxed text-white/95 italic">
          “Professional from start to finish—rigged our oak over the roof and left the yard spotless.”
        </p>
        <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-[#DFCEB8]">
          Victoria H. &bull; Palm Beach Island
        </p>
      </div>

      {/* 4. Main Hero Content Container */}
      <div className="container-custom relative z-10 w-full flex flex-col items-center text-center my-auto px-4 sm:px-6">

        {/* Eyebrow Trust Badge */}
        <div className="reveal-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand border border-[#D4A366]/60  mb-6 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-[#D4A366] animate-pulse" />
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#E5C38D]">
            {siteConfig.hero.badge}
          </span>
        </div>

        {/* Main Headline (Matched to Logo Carved-Gold Wood Color) */}
        <h1 className="reveal-item font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.12] mb-6 text-white [text-shadow:_0_2px_16px_rgba(0,0,0,0.2)]">
          {siteConfig.hero.title}{" "}
          <span className="text-[#E5D6B9] italic font-serif">
            {siteConfig.hero.highlight}
          </span>
        </h1>

        <p className="reveal-item delay-100 max-w-2xl text-base sm:text-lg leading-relaxed text-white/90 mb-8">
          Expert tree removal, thoughtful palm care, and storm cleanup.
          Give your Palm Beach property the care it deserves.
        </p>

        <Link href="/reviews" className="reveal-item delay-200 inline-flex flex-wrap items-center justify-center gap-3 mb-8 rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm text-white  transition-colors hover:bg-white/20">
          <span className="flex gap-1 text-[#E5D6B9]" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }, (_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />)}
          </span>
          <span>Read our customer stories</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>

        {/* 6. Primary Action Buttons Group Matching Theme Palette */}
        <div className="reveal-item delay-300 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-2xl px-2">
          {/* Primary Action: Request Free Estimate */}
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#C5A880] via-[#DFCEB8] to-[#C5A880] hover:from-[#DFCEB8] hover:to-[#C5A880] text-[#285640] font-extrabold text-sm sm:text-base tracking-wide shadow-[0_10px_30px_rgba(197,168,128,0.35)] hover:shadow-[0_14px_40px_rgba(197,168,128,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap w-full sm:w-auto"
          >
            <Sparkles className="w-4 h-4 text-[#285640] transition-transform duration-300 group-hover:rotate-12" />
            <span>Request Free Estimate</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] text-[#285640] transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Secondary Action: Direct 24/7 Dispatch Phone Hotline or Online Dispatch */}
          {siteConfig.phone ? (
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              aria-label={`Call 24/7 Hotline at ${siteConfig.phone}`}
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-sm sm:text-base tracking-wide border border-[#C5A880]/50 hover:border-[#DFCEB8]  shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap w-full sm:w-auto"
            >
              <div className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </div>
              <Phone className="w-4 h-4 fill-current text-[#C5A880] transition-transform duration-300 group-hover:rotate-12 shrink-0" />
              <span className="font-extrabold tracking-tight shrink-0">{siteConfig.phone}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#DFCEB8] px-2.5 py-0.5 rounded-full bg-brand border border-[#C5A880]/30 hidden sm:inline-block">
                24/7 Dispatch
              </span>
            </a>
          ) : (
            <Link
              href="/contact"
              aria-label="Request 24/7 Emergency Dispatch"
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-sm sm:text-base tracking-wide border border-[#C5A880]/50 hover:border-[#DFCEB8]  shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap w-full sm:w-auto"
            >
              <div className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </div>
              <span className="font-extrabold tracking-tight shrink-0">Emergency Storm Dispatch</span>
              <ArrowRight className="w-4 h-4 text-[#C5A880] transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
            </Link>
          )}
        </div>

      </div>
    </section>
  );
}
