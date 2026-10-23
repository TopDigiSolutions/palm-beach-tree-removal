import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ReviewsTicker from "@/components/sections/ReviewsTicker";
import TrustBar from "@/components/sections/TrustBar";
import Chatbot from "@/components/chatbot/Chatbot";
import MobileActionBar from "@/components/layout/MobileActionBar";
import ScrollObserver from "@/components/ui/ScrollObserver";
import ServiceAreas from "@/components/sections/ServiceAreas";
import EstimateCalculator from "@/components/sections/EstimateCalculator";
import { siteConfig } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Star, MapPin, Phone, Sparkles, Trees, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <>
      <ScrollObserver />
      <Header />
      <main id="main-content" className="flex-1 w-full overflow-hidden">
        {/* 1. Cinematic Hero Section with Video */}
        <Hero />

        {/* 2. Verified Reviews Running Ticker */}
        <ReviewsTicker />

        {/* 3. Trust Bar */}
        <TrustBar />

        {/* 4. Featured Services Preview */}
        <HomeFeaturedServices />

        {/* 5. Interactive Ballpark Estimator Section */}
        <EstimateCalculator />

        {/* 6. About Snapshot */}
        <HomeAboutSnapshot />

        {/* 7. Interactive Service Areas & Live Coverage Map */}
        <ServiceAreas />

        {/* 8. Gallery Preview */}
        <HomeGalleryPreview />

        {/* 9. Selected Testimonials */}
        <HomeTestimonialsPreview />

        {/* 10. FAQ Preview */}
        <HomeFAQPreview />

        {/* 11. Final CTA */}
        <HomeMainCTA />
      </main>

      {/* Multi-Column Footer */}
      <Footer />

      {/* Floating Arborist Concierge Chatbot */}
      <Chatbot />

      {/* Mobile Sticky Action Bar */}
      <MobileActionBar />
    </>
  );
}

/* ── Featured Services ─────────────────────────────── */
function HomeFeaturedServices() {
  const featured = siteConfig.services.slice(0, 3);
  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F6]" aria-label="Featured Services">
      <div className="container-custom">
        <div className="reveal-item text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#38251B] mb-3">
            <span className="w-8 h-0.5 bg-[#C5A880]" />
            <span>Arboricultural Services</span>
            <span className="w-8 h-0.5 bg-[#C5A880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E654B] tracking-tight">
            Precision Estate Tree Care
          </h2>
          <p className="text-sm sm:text-base text-[#0E1410]/75 mt-3 max-w-2xl mx-auto leading-relaxed">
            ISA Certified Master Arborists delivering surgical precision across Palm Beach County estates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featured.map((service, idx) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className={`reveal-item delay-${(idx + 1) * 100} group relative rounded-3xl overflow-hidden border border-[#38251B]/15 bg-white hover:border-[#357650]/40 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="relative h-56 overflow-hidden bg-brand">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#234D3D]/80 via-[#234D3D]/20 to-transparent" />
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#C5A880] text-[#285640] text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                  {service.tag}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-[#2E654B] mb-2 group-hover:text-[#357650] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-[#0E1410]/70 leading-relaxed mb-5 line-clamp-2">
                  {service.shortDesc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#357650] group-hover:gap-2.5 transition-all">
                  <span>View Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand hover:bg-brand-hover text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
          >
            <span>View All Arborist Services</span>
            <ArrowRight className="w-4 h-4 text-[#C5A880]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── About Snapshot ─────────────────────────────────── */
function HomeAboutSnapshot() {
  const highlights = [
    "ISA Certified Master Arborists on every property assessment",
    "100-ton all-terrain hydraulic crane extraction fleet",
    "AlturnaMAT zero lawn damage protection protocols",
    "$5,000,000 comprehensive commercial liability protection",
    "Municipal permit acquisition and HOA compliance handling",
    "14,800+ estate trees safely cleared since 1992",
  ];
  return (
    <section className="py-20 lg:py-28 bg-[#F7F4EC] border-y border-[#38251B]/15" aria-label="About Palm Beach Tree Removal">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal-item relative">
            <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-2xl bg-brand">
              <Image
                src="/images/service-crane-removal.jpg"
                alt="Palm Beach Tree Removal 100-ton crane operating over luxury estate"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#234D3D]/85 via-[#234D3D]/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-brand  border border-[#C5A880]/35 text-white shadow-xl">
                <div className="text-[10px] text-[#DFCEB8] font-bold uppercase tracking-widest">Est. 1992</div>
                <div className="font-serif text-lg font-bold mt-0.5">34+ Years of Estate Heritage</div>
              </div>
            </div>
            <div className="absolute -top-5 -right-4 sm:-right-6 bg-brand text-white p-5 rounded-2xl shadow-2xl border border-[#C5A880]/40 text-center max-w-[170px] animate-subtleFloat">
              <div className="font-serif text-4xl font-bold text-[#C5A880]">14,800+</div>
              <div className="text-xs uppercase tracking-wider font-semibold mt-1 text-[#DFCEB8]">Trees Cleared</div>
            </div>
          </div>
          <div className="reveal-item delay-200">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#38251B] mb-3">
              <span className="w-8 h-0.5 bg-[#C5A880]" />
              <span>About Palm Beach Tree Removal</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E654B] tracking-tight leading-tight mb-5">
              Expert Tree Care. A Property You Can Be Proud Of.
            </h2>
            <p className="text-base text-[#0E1410]/80 leading-relaxed mb-6">
              Founded in 1992, Palm Beach Tree Removal has served South Florida&apos;s premier private properties with an elevated standard of tree care. Every operation is supervised by an ISA Certified Master Arborist.
            </p>
            <ul className="space-y-2.5 mb-8">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-sm text-[#0E1410]/85 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#357650] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand hover:bg-brand-hover text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
            >
              <span>Meet Your Tree Care Team</span>
              <ArrowRight className="w-4 h-4 text-[#C5A880]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Gallery Preview ─────────────────────────────────── */
function HomeGalleryPreview() {
  const preview = siteConfig.gallery.slice(0, 4);
  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F6]" aria-label="Gallery Preview">
      <div className="container-custom">
        <div className="reveal-item text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#38251B] mb-3">
            <span className="w-8 h-0.5 bg-[#C5A880]" />
            <span>Field Operations Portfolio</span>
            <span className="w-8 h-0.5 bg-[#C5A880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E654B] tracking-tight">
            Recent Estate Field Projects
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {preview.map((item, idx) => (
            <div
              key={item.id}
              className={`reveal-item delay-${(idx + 1) * 100} relative rounded-2xl overflow-hidden bg-brand aspect-square group shadow-lg`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#234D3D]/90 via-[#234D3D]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-xs sm:text-sm font-bold text-white leading-tight">{item.title}</div>
                <div className="text-[10px] text-[#DFCEB8] mt-1 font-medium">{item.location}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand hover:bg-brand-hover text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
          >
            <span>Explore Our Recent Work</span>
            <ArrowRight className="w-4 h-4 text-[#C5A880]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials Preview ───────────────────────────── */
function HomeTestimonialsPreview() {
  const selected = siteConfig.testimonials.slice(0, 2);
  return (
    <section className="py-20 lg:py-28 bg-[#F7F4EC] border-y border-[#38251B]/15" aria-label="Client Reviews">
      <div className="container-custom">
        <div className="reveal-item text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#38251B] mb-3">
            <span className="w-8 h-0.5 bg-[#C5A880]" />
            <span>Verified Estate Reviews</span>
            <span className="w-8 h-0.5 bg-[#C5A880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E654B] tracking-tight">
            What Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
          {selected.map((t, idx) => (
            <div
              key={t.id}
              className={`reveal-item delay-${(idx + 1) * 100} card-lift p-7 rounded-3xl bg-white border border-[#38251B]/12 shadow-md hover:border-[#357650]/30`}
            >
              <div className="flex gap-1 mb-3.5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
                ))}
              </div>
              <p className="text-sm text-[#0E1410]/80 leading-relaxed italic mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-[#38251B]/10 pt-4 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-[#2E654B]">{t.name}</div>
                  <div className="text-xs text-[#38251B] font-medium">{t.location}</div>
                </div>
                <div className="text-[10px] text-[#C5A880] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-brand">
                  {t.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand hover:bg-brand-hover text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
          >
            <span>Read All Verified Reviews</span>
            <ArrowRight className="w-4 h-4 text-[#C5A880]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ Preview ─────────────────────────────────────── */
function HomeFAQPreview() {
  const preview = siteConfig.faqs.slice(0, 3);
  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F6]" aria-label="FAQ Preview">
      <div className="container-custom max-w-3xl">
        <div className="reveal-item text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#38251B] mb-3">
            <span className="w-8 h-0.5 bg-[#C5A880]" />
            <span>Common Questions</span>
            <span className="w-8 h-0.5 bg-[#C5A880]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E654B] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4 mb-10">
          {preview.map((faq, idx) => (
            <div
              key={idx}
              className={`reveal-item delay-${(idx + 1) * 100} p-6 rounded-2xl bg-white border border-[#38251B]/15 shadow-sm hover:shadow-md hover:border-[#357650]/30 transition-all duration-200`}
              style={{ borderLeft: "3px solid rgba(197,168,128,0.6)" }}
            >
              <h3 className="font-bold text-sm sm:text-base text-[#2E654B] mb-2">{faq.question}</h3>
              <p className="text-xs sm:text-sm text-[#0E1410]/75 leading-relaxed line-clamp-2">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand hover:bg-brand-hover text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
          >
            <span>View All FAQs</span>
            <ArrowRight className="w-4 h-4 text-[#C5A880]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Main CTA ────────────────────────────────────────── */
function HomeMainCTA() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #071710 0%, #0F3322 45%, #15452E 70%, #0A2116 100%)" }}
      aria-label="Get Free Estimate"
    >
      {/* Decorative layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(197,168,128,0.16) 0%, transparent 65%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(rgba(197,168,128,1) 1px, transparent 1px), linear-gradient(90deg, rgba(197,168,128,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute -top-40 -left-40 w-[30rem] h-[30rem] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(197,168,128,0.08) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)" }}
        />
      </div>
      {/* Gold shimmer line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(197,168,128,0.6) 25%, #DFCEB8 50%, rgba(197,168,128,0.6) 75%, transparent 100%)" }}
      />

      <div className="container-custom text-center relative z-10">
        <div className="reveal-item max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#C5A880] mb-5">
            <span className="w-8 h-0.5 bg-[#C5A880]" />
            <span>No Obligation Consultation</span>
            <span className="w-8 h-0.5 bg-[#C5A880]" />
          </div>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-5"
            style={{ color: "#FFFFFF", textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
          >
            Ready to Restore Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F3EBDD 0%, #C5A880 50%, #DFCEB8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              Estate Grounds?
            </span>
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.78)" }}>
            Our ISA Certified Master Arborists will visit your estate within 24 hours and provide a fixed, transparent written estimate with zero lawn damage protocols.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#C5A880] via-[#DFCEB8] to-[#C5A880] text-[#285640] font-extrabold text-sm sm:text-base shadow-xl transition-all hover:scale-[1.02] border border-[#DFCEB8]/50"
            >
              <Sparkles className="w-4 h-4 text-[#285640]" />
              <span>Request Free Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            {siteConfig.phone ? (
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl border border-[#C5A880]/40 text-white hover:border-[#DFCEB8] font-bold text-sm transition-all hover:bg-white/5"
              >
                <Phone className="w-4 h-4 text-[#C5A880] fill-current" />
                <span>Call Hotline: {siteConfig.phone}</span>
              </a>
            ) : (
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl border border-[#C5A880]/40 text-white hover:border-[#DFCEB8] font-bold text-sm transition-all hover:bg-white/5"
              >
                <MapPin className="w-4 h-4 text-[#C5A880]" />
                <span>View Service Areas</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

