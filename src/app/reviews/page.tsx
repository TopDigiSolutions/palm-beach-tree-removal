import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import { siteConfig } from "@/data/site";
import Link from "next/link";
import { Star, CheckCircle2, ArrowRight, Sparkles, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials | Palm Beach Tree Removal",
  description:
    "Read verified testimonials from Palm Beach estate owners, property managers, and historic district residents who trust Palm Beach Tree Removal for expert arboricultural services.",
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: "Client Reviews | Palm Beach Tree Removal",
    description: "5-star verified reviews from Palm Beach County estate clients. See why property owners trust our arboricultural services since 1992.",
    url: "https://palmbeachtreeremoval.com/reviews",
  },
};

const trustStats = [
  { value: "5.0", label: "Google Rating", suffix: "★" },
  { value: "14,800+", label: "Trees Cleared", suffix: "" },
  { value: "34+", label: "Years of Service", suffix: "Yrs" },
  { value: "100%", label: "Verified Reviews", suffix: "" },
];

export default function ReviewsPage() {
  return (
    <PageLayout>
      <PageHero
        badge="Verified Estate Client Reviews"
        title="What Our Clients"
        titleHighlight="Say About Us"
        description="Authentic testimonials from Palm Beach County estate owners, property managers, and historic district residents who have experienced our services firsthand."
        breadcrumbs={[{ label: "Reviews", href: "/reviews" }]}
      />

      {/* Trust Stats */}
      <section className="py-12 bg-brand border-b border-[#C5A880]/20" aria-label="Trust Statistics">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustStats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-3xl sm:text-4xl font-bold text-[#C5A880]">
                  {stat.value}
                  {stat.suffix && <span className="text-xl ml-1">{stat.suffix}</span>}
                </div>
                <div className="text-xs uppercase tracking-wider text-white/60 font-semibold mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]" aria-label="Client Testimonials">
        <div className="container-custom">
          <div className="reveal-item text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E654B] tracking-tight">
              Verified Testimonials
            </h2>
            <p className="text-sm sm:text-base text-[#121814]/70 mt-3 max-w-2xl mx-auto">
              Every review is from a real client of Palm Beach Tree Removal. We never fabricate or incentivize testimonials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {siteConfig.testimonials.map((testimonial, idx) => (
              <article
                key={testimonial.id}
                className={`reveal-item delay-${(idx + 1) * 100} p-7 rounded-2xl bg-white border border-[#422E22]/12 shadow-sm hover:shadow-md hover:border-[#357650]/30 transition-all`}
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-[#2E654B]">
                    {testimonial.rating}.0 / 5.0
                  </span>
                </div>

                {/* Quote */}
                <Quote className="w-6 h-6 text-[#C5A880]/40 mb-3" />
                <p className="text-sm sm:text-base text-[#121814]/80 leading-relaxed italic mb-5">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="border-t border-[#422E22]/10 pt-4 flex items-start justify-between gap-4">
                  <div>
                    <div className="font-bold text-sm text-[#2E654B]">{testimonial.name}</div>
                    <div className="text-xs text-[#422E22] mt-0.5">{testimonial.role}</div>
                    <div className="text-xs text-[#121814]/60 mt-0.5">{testimonial.location}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-[10px] text-[#C5A880] font-bold uppercase tracking-wider">{testimonial.service}</div>
                    {testimonial.verifiedEstate && (
                      <div className="flex items-center gap-1 mt-1 text-[10px] text-[#357650] font-semibold">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified Estate</span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="py-16 bg-[#F7F4EC] border-t border-[#422E22]/15" aria-label="Leave a Review">
        <div className="container-custom text-center max-w-2xl">
          <div className="reveal-item">
            <div className="flex items-center justify-center gap-1 mb-5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#C5A880] text-[#C5A880]" />
              ))}
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E654B] mb-4">
              We Rely on Honest Feedback
            </h2>
            <p className="text-sm text-[#121814]/70 mb-6">
              If you have experienced our services, we welcome your honest review. Your feedback helps other Palm Beach County estate owners make informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand hover:bg-brand-hover text-white font-bold text-sm shadow-md transition-colors"
              >
                <Sparkles className="w-4 h-4 text-[#C5A880]" />
                <span>Request Free Estimate</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#2E654B]/30 hover:border-[#2E654B] text-[#2E654B] font-bold text-sm transition-colors"
              >
                <span>View Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
