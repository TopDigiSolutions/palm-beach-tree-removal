import React from "react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  bgImage?: string;
  centered?: boolean;
  children?: React.ReactNode;
}

export default function PageHero({
  badge,
  title,
  titleHighlight,
  description,
  breadcrumbs,
  centered = true,
  children,
}: PageHeroProps) {
  return (
    <section
      className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #071710 0%, #0F3322 45%, #15452E 70%, #0A2116 100%)",
      }}
      aria-label="Page Hero"
    >
      {/* Rich decorative background layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gold bloom from top center */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 50% -10%, rgba(197,168,128,0.18) 0%, transparent 65%)",
          }}
        />

        {/* Subtle gold grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(197,168,128,1) 1px, transparent 1px), linear-gradient(90deg, rgba(197,168,128,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gold orb – top right */}
        <div
          className="absolute -top-32 -right-32 w-[26rem] h-[26rem] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(197,168,128,0.13) 0%, transparent 70%)",
          }}
        />

        {/* Emerald orb – bottom left */}
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(16,185,129,0.09) 0%, transparent 70%)",
          }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{
            background: "linear-gradient(to bottom, transparent, rgba(12,53,34,0.35))",
          }}
        />
      </div>

      {/* Gold shimmer accent line at very top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(197,168,128,0.6) 25%, #DFCEB8 50%, rgba(197,168,128,0.6) 75%, transparent 100%)",
        }}
      />

      <div className={`container-custom relative z-10 ${centered ? "text-center" : ""}`}>
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className={`mb-6 ${centered ? "flex justify-center" : ""}`}>
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        {/* Badge */}
        {badge && (
          <div className={`mb-5 ${centered ? "flex justify-center" : ""}`}>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
              style={{
                background: "rgba(197, 168, 128, 0.13)",
                borderColor: "rgba(197, 168, 128, 0.48)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#DFCEB8]">
                {badge}
              </span>
            </div>
          </div>
        )}

        {/* Title – explicit white so it's never invisible */}
        <h1
          className={`font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.12] mb-5 ${
            centered ? "max-w-4xl mx-auto" : "max-w-3xl"
          }`}
          style={{
            color: "#FFFFFF",
            textShadow: "0 2px 24px rgba(0,0,0,0.35)",
          }}
        >
          {title}
          {titleHighlight && (
            <>
              {" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #F3EBDD 0%, #C5A880 50%, #DFCEB8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontStyle: "italic",
                }}
              >
                {titleHighlight}
              </span>
            </>
          )}
        </h1>

        {/* Description */}
        {description && (
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              centered ? "max-w-2xl mx-auto" : "max-w-2xl"
            }`}
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            {description}
          </p>
        )}

        {/* Custom children (CTAs etc.) */}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
