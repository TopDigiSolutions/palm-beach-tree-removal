"use client";

import React from "react";
import Link from "next/link";
import { Star, CheckCircle2 } from "lucide-react";

interface TickerReview {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  service: string;
}

const reviewsData: TickerReview[] = [
  {
    id: "rev-1",
    name: "Victoria & Sterling H.",
    location: "Palm Beach Island",
    quote: "Rigged a 70ft oak over our tile roof with zero lawn damage. Absolute masterclass.",
    rating: 5,
    service: "Crane Removal",
  },
  {
    id: "rev-2",
    name: "Arthur M. Vance",
    location: "Wellington Equestrian",
    quote: "Emergency storm team arrived in 75 mins after hurricane gusts. Paddock cleared and safe.",
    rating: 5,
    service: "24/7 Storm Dispatch",
  },
  {
    id: "rev-3",
    name: "Dr. Julian Montgomery",
    location: "Boca Raton Estate",
    quote: "Zero lawn damage guarantee is 100% genuine. Not a single tire mark on our turf.",
    rating: 5,
    service: "Turf Rigging",
  },
  {
    id: "rev-4",
    name: "Eleanor Davenport",
    location: "El Cid, West Palm",
    quote: "Pruned our century-old banyan and royal palms to perfection. Immaculate site cleanup.",
    rating: 5,
    service: "Canopy Pruning",
  },
  {
    id: "rev-5",
    name: "Harrison & Claire B.",
    location: "Delray Beach (Seagate)",
    quote: "Extracted 3 diseased palms leaning over the pool loggia without dropping a twig in the water.",
    rating: 5,
    service: "Precision Extraction",
  },
  {
    id: "rev-6",
    name: "Lawrence Kensington",
    location: "Palm Beach Island",
    quote: "ISA Master Arborist expedited town hall permits within 48 hours. Flawless execution.",
    rating: 5,
    service: "Permit Expediting",
  },
  {
    id: "rev-7",
    name: "Sofia & Mateo R.",
    location: "Jupiter Island",
    quote: "The only tree service in Palm Beach County we trust with our prized specimen palms.",
    rating: 5,
    service: "Specimen Care",
  },
  {
    id: "rev-8",
    name: "Marcus Sterling",
    location: "Highland Beach",
    quote: "Ground 4 large stumps 18 inches below grade. Backfilled ready for sod. Outstanding crew.",
    rating: 5,
    service: "Stump Grinding",
  },
];

export default function ReviewsTicker() {
  return (
    <section
      aria-label="Verified Client Reviews Marquee"
      className="relative z-20 w-full bg-[#FAF9F6] py-8 sm:py-10 border-b border-[#C5A880]/30 select-none"
    >
      <div className="max-w-[1400px] mx-auto px-2 sm:px-4 lg:px-6">
        {/* Floating Rounded Ticker Container */}
        <div className="relative w-full bg-brand border border-[#C5A880]/40 rounded-2xl py-4 sm:py-5 overflow-hidden shadow-2xl">
          {/* Edge gradient fade masks for smooth visual transition */}
          <div className="absolute left-0 inset-y-0 w-12 sm:w-28 md:w-36 bg-gradient-to-r from-[#234D3D] via-[#234D3D]/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-12 sm:w-28 md:w-36 bg-gradient-to-l from-[#234D3D] via-[#234D3D]/90 to-transparent z-10 pointer-events-none" />

          {/* Infinite Marquee Running Left to Right */}
          <div className="animate-marquee-ltr flex items-center whitespace-normal">
            {/* Set 1 */}
            <div className="flex items-center gap-3 sm:gap-5 shrink-0 pr-3 sm:pr-5">
              {reviewsData.map((review) => (
                <Link
                  key={`r1-${review.id}`}
                  href="/reviews"
                  className="w-[260px] sm:w-[300px] md:w-[330px] min-h-[130px] sm:min-h-[140px] flex flex-col justify-between p-3.5 sm:p-4 rounded-xl bg-brand hover:bg-[#153D2A] border border-[#C5A880]/35 hover:border-[#DFCEB8] transition-all duration-300 shadow-lg group shrink-0 hover:scale-[1.02] cursor-pointer"
                  title={`Read review by ${review.name}`}
                >
                  {/* Card Header: Google G badge, 5 stars, Service tag */}
                  <div className="flex items-center justify-between gap-2 border-b border-[#C5A880]/20 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-5.5 h-5.5 rounded-full bg-white flex items-center justify-center text-[11px] font-black shadow-md shrink-0">
                        <span className="text-[#4285F4]">G</span>
                      </span>
                      <div className="flex items-center gap-0.5 text-[#C5A880]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-[#DFCEB8] bg-brand border border-[#C5A880]/30 px-2 py-0.5 rounded-full shrink-0">
                      {review.service}
                    </span>
                  </div>

                  {/* Card Body: Quote */}
                  <p className="text-xs text-[#FAF9F6] font-medium leading-relaxed my-1.5 italic line-clamp-2">
                    &ldquo;{review.quote}&rdquo;
                  </p>

                  {/* Card Footer: Reviewer Name, Location & Verified Badge */}
                  <div className="flex items-center justify-between gap-2 border-t border-[#C5A880]/20 pt-2">
                    <div className="flex flex-col min-w-0">
                      <span className="font-bold text-[#DFCEB8] text-xs group-hover:text-white transition-colors truncate">
                        {review.name}
                      </span>
                      <span className="text-white/60 text-[10px] truncate font-normal">
                        {review.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[#C5A880] shrink-0">
                      <span className="text-[9px] font-medium text-[#DFCEB8]/80 hidden sm:inline">Verified</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Set 2 (Duplicate for continuous seamless infinite loop) */}
            <div className="flex items-center gap-3 sm:gap-5 shrink-0 pr-3 sm:pr-5" aria-hidden="true">
              {reviewsData.map((review) => (
                <Link
                  key={`r2-${review.id}`}
                  href="/reviews"
                  tabIndex={-1}
                  className="w-[260px] sm:w-[300px] md:w-[330px] min-h-[130px] sm:min-h-[140px] flex flex-col justify-between p-3.5 sm:p-4 rounded-xl bg-brand hover:bg-[#153D2A] border border-[#C5A880]/35 hover:border-[#DFCEB8] transition-all duration-300 shadow-lg group shrink-0 hover:scale-[1.02] cursor-pointer"
                >
                  {/* Card Header: Google G badge, 5 stars, Service tag */}
                  <div className="flex items-center justify-between gap-2 border-b border-[#C5A880]/20 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-5.5 h-5.5 rounded-full bg-white flex items-center justify-center text-[11px] font-black shadow-md shrink-0">
                        <span className="text-[#4285F4]">G</span>
                      </span>
                      <div className="flex items-center gap-0.5 text-[#C5A880]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <span className="text-[10px] font-semibold text-[#DFCEB8] bg-brand border border-[#C5A880]/30 px-2 py-0.5 rounded-full shrink-0">
                      {review.service}
                    </span>
                  </div>

                  {/* Card Body: Quote */}
                  <p className="text-xs text-[#FAF9F6] font-medium leading-relaxed my-1.5 italic line-clamp-2">
                    &ldquo;{review.quote}&rdquo;
                  </p>

                  {/* Card Footer: Reviewer Name, Location & Verified Badge */}
                  <div className="flex items-center justify-between gap-2 border-t border-[#C5A880]/20 pt-2">
                    <div className="flex flex-col min-w-0">
                      <span className="font-bold text-[#DFCEB8] text-xs group-hover:text-white transition-colors truncate">
                        {review.name}
                      </span>
                      <span className="text-white/60 text-[10px] truncate font-normal">
                        {review.location}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[#C5A880] shrink-0">
                      <span className="text-[9px] font-medium text-[#DFCEB8]/80 hidden sm:inline">Verified</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A880] shrink-0" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
