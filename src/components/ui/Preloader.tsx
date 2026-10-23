"use client";

import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import Image from "next/image";

interface TelemetryStage {
  threshold: number;
  label: string;
  detail: string;
}

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSplitting, setIsSplitting] = useState(false);
  const [isMounted, setIsMounted] = useState(true);
  const animFrameRef = useRef<number | null>(null);

  const stages: TelemetryStage[] = useMemo(
    () => [
      {
        threshold: 0,
        label: "ESTATE TELEMETRY INITIALIZED",
        detail: "PALM BEACH ARBORICULTURAL STANDARDS",
      },
      {
        threshold: 28,
        label: "VERIFYING TCIA & ISA CREDENTIALS",
        detail: "BOARD CERTIFIED MASTER ARBORISTS",
      },
      {
        threshold: 60,
        label: "CALIBRATING 100-TON CRANE FLEET",
        detail: "HYDRAULIC RIGGING & EXTRACTION MATRIX",
      },
      {
        threshold: 85,
        label: "ZERO-LAWN-DAMAGE SHIELDS ACTIVE",
        detail: "COMPREHENSIVE $5M LIABILITY ASSURANCE",
      },
      {
        threshold: 100,
        label: "PRECISION ARBORICULTURE VERIFIED",
        detail: "EST. 1992 • PALM BEACH, FLORIDA",
      },
    ],
    []
  );

  const currentStage = useMemo(() => {
    let active = stages[0];
    for (let i = 0; i < stages.length; i++) {
      if (progress >= stages[i].threshold) {
        active = stages[i];
      }
    }
    return active;
  }, [progress, stages]);

  const triggerCurtainReveal = useCallback(() => {
    setIsLoaded(true);
    setProgress(100);

    // Snappy tactile pause at 100% before gates slide open
    setTimeout(() => {
      setIsSplitting(true);
      document.body.style.overflow = "";

      setTimeout(() => {
        setIsMounted(false);
      }, 700);
    }, 150);
  }, []);

  const handleSkip = useCallback(() => {
    if (!isLoaded) {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      triggerCurtainReveal();
    }
  }, [isLoaded, triggerCurtainReveal]);

  useEffect(() => {
    try {
      if (sessionStorage.getItem("pb_preloader_seen")) {
        setIsMounted(false);
        document.body.style.overflow = "";
        return;
      }
      sessionStorage.setItem("pb_preloader_seen", "1");
    } catch {
      // sessionStorage not available
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        handleSkip();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    const startTime = performance.now();
    const duration = 1050; // Snappy 1.05s duration
    let lastRenderedPct = 0;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const normalized = Math.min(1, elapsed / duration);

      // Smooth custom cubic ease-out
      const eased =
        normalized < 0.5
          ? 2 * normalized * normalized
          : 1 - Math.pow(-2 * normalized + 2, 2) / 2;

      const currentPct = Math.min(100, Math.round(eased * 100));

      if (currentPct - lastRenderedPct >= 3 || currentPct >= 100) {
        lastRenderedPct = currentPct;
        setProgress(currentPct);
      }

      if (normalized < 1 && currentPct < 100) {
        animFrameRef.current = requestAnimationFrame(tick);
      } else {
        triggerCurtainReveal();
      }
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleSkip, triggerCurtainReveal]);

  if (!isMounted) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Palm Beach Tree Removal Initializing"
      onClick={handleSkip}
      className={`fixed inset-0 z-[99999] select-none cursor-pointer overflow-hidden [transform:translateZ(0)] ${
        isSplitting ? "pointer-events-none" : ""
      }`}
    >
      {/* =========================================================================
          TOP CURTAIN PANEL (Glides UP on 100%)
      ========================================================================= */}
      <div
        className={`absolute inset-x-0 top-0 h-1/2 bg-brand transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isSplitting ? "-translate-y-full will-change-transform" : "translate-y-0"
        }`}
      >
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A880]/50 to-transparent" />

        {/* Top-Left Precision Coordinates */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-10 flex items-center space-x-2 text-[9px] sm:text-[10px] tracking-[0.25em] text-[#DFCEB8]/75 font-mono">
          <span className="text-[#C5A880] text-sm font-bold">⌜</span>
          <span>PB-FL • 26.7056° N</span>
        </div>

        {/* Top-Right Credential Seal */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-10 flex items-center space-x-2 text-[9px] sm:text-[10px] tracking-[0.25em] text-[#DFCEB8]/75 font-mono">
          <span>80.0364° W • TCIA ACCREDITED</span>
          <span className="text-[#C5A880] text-sm font-bold">⌝</span>
        </div>
      </div>

      {/* =========================================================================
          BOTTOM CURTAIN PANEL (Glides DOWN on 100%)
      ========================================================================= */}
      <div
        className={`absolute inset-x-0 bottom-0 h-1/2 bg-brand transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isSplitting ? "translate-y-full will-change-transform" : "translate-y-0"
        }`}
      >
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A880]/50 to-transparent" />

        {/* Bottom-Left Estate Heritage */}
        <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10 flex items-center space-x-2 text-[9px] sm:text-[10px] tracking-[0.25em] text-[#DFCEB8]/75 font-mono">
          <span className="text-[#C5A880] text-sm font-bold">⌞</span>
          <span>EST. 1992 • MASTER ARBORICULTURE</span>
        </div>

        {/* Bottom-Right Skip Prompt */}
        <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10 flex items-center space-x-2 text-[9px] sm:text-[10px] tracking-[0.25em] text-[#DFCEB8]/75 font-mono">
          <span className="hidden sm:inline opacity-80">CLICK OR SPACE TO ENTER</span>
          <span className="text-[#C5A880] text-sm font-bold">⌟</span>
        </div>
      </div>

      {/* =========================================================================
          CENTERPIECE: PRECISION ORBITAL DIAL & CREST
      ========================================================================= */}
      <div
        className={`relative z-30 flex flex-col items-center justify-center min-h-screen px-4 text-center transition-all duration-500 ease-out [transform:translateZ(0)] ${
          isSplitting
            ? "opacity-0 scale-95 pointer-events-none"
            : "opacity-100 scale-100"
        }`}
      >
        {/* Soft radial backdrop */}

        {/* Crest & Rotating Precision Rings */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center mb-5">
          {/* Outer Dotted Calibration Dial */}
          <svg
            className="absolute inset-0 w-full h-full animate-spin-slow pointer-events-none [transform:translateZ(0)]"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle
              cx="100"
              cy="100"
              r="92"
              stroke="#C5A880"
              strokeOpacity="0.35"
              strokeWidth="1.2"
              strokeDasharray="4 6"
            />
            <polygon points="100,6 103,11 100,16 97,11" fill="#C5A880" fillOpacity="0.9" />
            <polygon points="194,100 189,103 184,100 189,97" fill="#C5A880" fillOpacity="0.9" />
            <polygon points="100,194 97,189 100,184 103,189" fill="#C5A880" fillOpacity="0.9" />
            <polygon points="6,100 11,97 16,100 11,103" fill="#C5A880" fillOpacity="0.9" />
          </svg>

          {/* Inner Counter-Rotating Segmented Arc */}
          <svg
            className="absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] animate-spin-reverse-slow pointer-events-none [transform:translateZ(0)]"
            viewBox="0 0 200 200"
            fill="none"
          >
            <circle
              cx="100"
              cy="100"
              r="84"
              stroke="#DFCEB8"
              strokeOpacity="0.55"
              strokeWidth="1.5"
              strokeDasharray="28 20 12 20"
              strokeLinecap="round"
            />
          </svg>

          {/* Ornate Emblem Container */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl p-1.5 bg-brand border border-[#C5A880]/40 shadow-[0_8px_28px_rgba(0,0,0,0.6)] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 w-[60%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-25 pointer-events-none animate-glint" />

            <Image
              src="/images/logo.png"
              alt="Palm Beach Tree Removal Crest"
              width={112}
              height={112}
              priority
              className="object-contain w-full h-full drop-shadow-[0_4px_14px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>

        {/* Brand Identity */}
        <div className="mb-5 max-w-sm">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand border border-[#C5A880]/35 mb-2.5 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.25em] text-[#DFCEB8] font-bold">
              PALM BEACH COUNTY, FL
            </span>
          </div>
          <h1 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white mb-0.5">
            Palm Beach Tree Removal
          </h1>
          <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] uppercase text-[#C5A880]">
            Precision Estate Arboriculture
          </p>
        </div>

        {/* Instrumentation Gauge & Telemetry Box */}
        <div className="w-64 sm:w-72 flex flex-col items-center">
          <div className="flex items-baseline justify-between w-full mb-1.5">
            <span className="text-[9px] tracking-[0.2em] font-mono text-white/55 uppercase font-semibold">
              CALIBRATION
            </span>
            <div className="flex items-baseline space-x-1 font-mono">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#F3EBDD] font-mono">
                {progress.toString().padStart(2, "0")}
              </span>
              <span className="text-xs text-[#C5A880] font-bold">%</span>
              <span className="text-[9px] text-white/40 ml-1">/ 100</span>
            </div>
          </div>

          {/* Smooth Golden Progress Bar */}
          <div className="w-full h-2 bg-black/70 border border-white/15 rounded-full p-[1.5px] relative overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-[#9D7F58] via-[#F3EBDD] to-[#C5A880] rounded-full transition-all duration-100 ease-out shadow-[0_0_12px_rgba(197,168,128,0.9)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Dynamic Live Telemetry Status */}
          <div className="mt-3.5 flex flex-col items-center min-h-[36px]">
            <div className="flex items-center space-x-2 text-[10px] font-mono tracking-[0.16em] text-[#DFCEB8] uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block shadow-[0_0_8px_#10B981]" />
              <span className="font-bold">{currentStage.label}</span>
            </div>
            <span className="text-[9px] font-mono tracking-[0.12em] text-white/50 uppercase mt-0.5">
              {currentStage.detail}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

