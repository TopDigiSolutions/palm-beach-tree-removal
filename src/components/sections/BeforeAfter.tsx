"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { MoveHorizontal, ShieldAlert, CheckCircle2, Clock, ArrowRight, Sparkles } from "lucide-react";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const data = siteConfig.beforeAfter;

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      if (e.cancelable) e.preventDefault();
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    } else if (e.key === "Home") {
      setSliderPosition(0);
    } else if (e.key === "End") {
      setSliderPosition(100);
    }
  };

  return (
    <section
      id="before-after"
      aria-label="Before and After Project Comparison"
      className="py-20 lg:py-28 bg-[#FAF9F6]"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="reveal-item text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#422E22] mb-3">
            <span className="w-8 h-0.5 bg-[#422E22]" />
            <span>Interactive Estate Case Study</span>
            <span className="w-8 h-0.5 bg-[#422E22]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E654B] tracking-tight">
            Before &amp; After: The Estate Transformation
          </h2>
          <p className="text-sm sm:text-base text-[#121814]/80 mt-4 leading-relaxed">
            Drag the handle to inspect how our 100-ton crane division dismantled a storm-fractured live oak leaning over an estate glass loggia, restoring the grounds to immaculate sanctuary condition.
          </p>
        </div>

        {/* Comparison Slider Frame */}
        <div className="reveal-item delay-200 max-w-5xl mx-auto bg-[#FFFFFF] rounded-2xl p-4 sm:p-6 shadow-2xl border border-[#422E22]/15">
          <div
            ref={containerRef}
            tabIndex={0}
            role="slider"
            aria-label="Before and after image comparison slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(sliderPosition)}
            onKeyDown={handleKeyDown}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
            className="relative h-[360px] sm:h-[480px] md:h-[540px] w-full rounded-xl overflow-hidden select-none cursor-ew-resize focus-visible:ring-4 focus-visible:ring-[#357650]"
          >
            {/* "After" Image (Underneath Layer) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={data.afterImage}
                alt="After project completion: pristine restored luxury estate lawn"
                fill
                sizes="(max-width: 1200px) 100vw, 1100px"
                className="object-cover object-center"
              />
              <span className="absolute bottom-5 right-5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-brand text-[#DFCEB8] border border-[#C5A880]/40  shadow-lg z-10 pointer-events-none">
                {data.afterLabel}
              </span>
            </div>

            {/* "Before" Image (Clipped Layer) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div
                className="relative w-full h-full"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%",
                }}
              >
                <Image
                  src={data.beforeImage}
                  alt="Before project: hazardous cracked tree leaning after tropical storm"
                  fill
                  sizes="(max-width: 1200px) 100vw, 1100px"
                  className="object-cover object-center"
                />
                <span className="absolute bottom-5 left-5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#291B13]/90 text-white border border-white/20  shadow-lg z-10 pointer-events-none">
                  {data.beforeLabel}
                </span>
              </div>
            </div>

            {/* Draggable Divider Line & Custom Brass Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.6)] z-20 pointer-events-none"
              style={{ left: `calc(${sliderPosition}% - 2px)` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand border-2 border-[#C5A880] shadow-2xl flex items-center justify-center text-[#C5A880]">
                <MoveHorizontal className="w-6 h-6 text-[#DFCEB8]" />
              </div>
            </div>
          </div>

          {/* Quick Helper Text */}
          <div className="flex items-center justify-between text-xs text-[#121814]/60 mt-3 px-2">
            <span>&larr; Drag left to reveal restored estate</span>
            <span className="font-semibold text-[#357650] hidden sm:inline">
              Touch or drag handle anywhere
            </span>
            <span>Drag right to inspect storm damage &rarr;</span>
          </div>

          {/* Case Study Details Grid */}
          <div className="mt-8 pt-6 border-t border-[#422E22]/15 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-4 sm:p-5 rounded-xl bg-[#F7F4EC] border border-[#422E22]/15">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#422E22] mb-1.5">
                <ShieldAlert className="w-4 h-4 text-[#422E22]" />
                <span>The Hazard</span>
              </div>
              <p className="text-xs sm:text-sm text-[#121814]/80 leading-relaxed">
                {data.problem}
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#F7F4EC] border border-[#422E22]/15">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#357650] mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#357650]" />
                <span>The Arborist Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-[#121814]/80 leading-relaxed">
                {data.solution}
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-brand text-white border border-[#C5A880]/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DFCEB8] mb-1.5">
                  <Clock className="w-4 h-4 text-[#C5A880]" />
                  <span>Verified Outcome</span>
                </div>
                <div className="font-serif text-lg sm:text-xl font-bold text-white mb-1">
                  {data.timeline}
                </div>
                <p className="text-xs text-[#FAF9F6]/85 leading-relaxed">
                  {data.impact}
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#C5A880] hover:text-white transition-colors"
              >
                <span>Request Hazard Evaluation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
