import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageLayout from "@/components/layout/PageLayout";
import { siteConfig } from "@/data/site";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, CheckCircle2, Sparkles, Phone, ChevronRight } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

interface AreaPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteConfig.serviceAreaDetails.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = siteConfig.serviceAreaDetails.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `Tree Removal in ${area.city}, FL | Palm Beach Tree Removal`,
    description: `Expert tree removal, trimming, and arboricultural services in ${area.city}, ${area.state}. ${area.responseTime} response time. ISA Certified Arborists. ${area.coverageDetail}.`,
    alternates: { canonical: `/service-areas/${slug}` },
    openGraph: {
      title: `Tree Removal in ${area.city}, FL | Palm Beach Tree Removal`,
      description: `${area.responseTime} emergency response for tree removal in ${area.city}. Serving ${area.coverageDetail}.`,
      url: `https://palmbeachtreeremoval.com/service-areas/${slug}`,
    },
  };
}

export default async function ServiceAreaPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = siteConfig.serviceAreaDetails.find((a) => a.slug === slug);
  if (!area) notFound();

  const otherAreas = siteConfig.serviceAreaDetails.filter((a) => a.slug !== slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: `Tree removal and arboricultural services in ${area.city}, ${area.state}`,
    url: `https://palmbeachtreeremoval.com/service-areas/${area.slug}`,
    areaServed: {
      "@type": "City",
      name: area.city,
      addressRegion: area.state,
      addressCountry: "US",
    },
  };

  return (
    <PageLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #071710 0%, #0F3322 45%, #15452E 70%, #0A2116 100%)",
        }}
        aria-label={`Tree Removal in ${area.city}`}
      >
        {/* Decorative layers */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 90% 55% at 50% -10%, rgba(197,168,128,0.18) 0%, transparent 65%)" }}
          />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(rgba(197,168,128,1) 1px, transparent 1px), linear-gradient(90deg, rgba(197,168,128,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div
            className="absolute -top-32 -right-32 w-[26rem] h-[26rem] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(197,168,128,0.13) 0%, transparent 70%)" }}
          />
        </div>
        {/* Gold accent top line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(197,168,128,0.6) 25%, #DFCEB8 50%, rgba(197,168,128,0.6) 75%, transparent 100%)",
          }}
        />

        <div className="container-custom relative z-10">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Breadcrumbs
              items={[
                { label: "Service Areas", href: "/service-areas" },
                { label: area.city },
              ]}
            />
          </div>

          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-5"
            style={{ background: "rgba(197,168,128,0.13)", borderColor: "rgba(197,168,128,0.48)" }}
          >
            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#DFCEB8]">
              {area.city}, {area.state}
            </span>
          </div>

          <h1
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.12] mb-5 max-w-4xl"
            style={{ color: "#FFFFFF", textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}
          >
            Tree Removal in{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F3EBDD 0%, #C5A880 50%, #DFCEB8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              {area.city}, FL
            </span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl mb-8" style={{ color: "rgba(255,255,255,0.82)" }}>
            Professional arboricultural services serving {area.coverageDetail}. ISA Certified Master Arborists with {area.responseTime} emergency response.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#DFCEB8] text-[#285640] font-bold text-sm shadow-lg transition-all hover:scale-[1.02]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Free {area.city} Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            {siteConfig.phone && (
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#C5A880]/40 text-white hover:border-[#DFCEB8] font-bold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A880] fill-current" />
                <span>{siteConfig.phone}</span>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Area Details */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]" aria-label="Area Details">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Coverage & Response */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E654B] mb-5">
                  Serving {area.city} Since 1992
                </h2>
                <p className="text-base text-[#121814]/80 leading-relaxed mb-4">
                  Palm Beach Tree Removal has served {area.city} and the surrounding {area.state} communities for over 34 years. Our team knows the local landscape, municipal regulations, and permit requirements inside and out — so your project proceeds without delays or complications.
                </p>
                <p className="text-sm text-[#121814]/70 leading-relaxed">
                  We specialize in {area.coverageDetail}. Our rapid response team deploys within {area.responseTime} for emergency situations, and our standard scheduling allows for same-week service for most non-emergency projects.
                </p>
              </div>

              {/* Response Time Card */}
              <div className="p-6 rounded-2xl bg-brand text-white border border-[#C5A880]/25">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-[#C5A880]" />
                  <h3 className="font-serif text-lg font-bold">Emergency Response Time</h3>
                </div>
                <div className="font-serif text-3xl font-bold text-[#C5A880] mb-1">{area.responseTime}</div>
                <p className="text-sm text-white/70">
                  For life-safety emergencies in {area.city}, our on-call supervisors arrive on-site with emergency stabilization gear within this timeframe.
                </p>
              </div>

              {/* Popular Services */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#2E654B] mb-5">
                  Most Requested Services in {area.city}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {area.popularServices.map((s, i) => (
                    <div key={i} className="p-4 rounded-xl bg-white border border-[#422E22]/12 shadow-sm text-center">
                      <div className="text-2xl mb-2">🌳</div>
                      <div className="text-sm font-bold text-[#2E654B]">{s}</div>
                    </div>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#357650] hover:text-[#2E654B] transition-colors"
                >
                  View All Services <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Permits */}
              <div className="p-5 rounded-2xl bg-[#F7F4EC] border border-[#422E22]/15">
                <h3 className="font-serif text-lg font-bold text-[#2E654B] mb-2">
                  Local Permit Expertise
                </h3>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#357650] shrink-0 mt-0.5" />
                  <p className="text-sm text-[#121814]/75 leading-relaxed">{area.permitsInfo}</p>
                </div>
              </div>

              {/* Why Choose */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#2E654B] mb-5">
                  Why {area.city} Residents Choose Us
                </h2>
                <div className="space-y-3">
                  {[
                    `${area.responseTime} emergency storm response`,
                    "ISA Certified Master Arborists on every project",
                    "AlturnaMAT zero lawn damage guarantee",
                    "$5,000,000 commercial liability insurance",
                    "Full municipal permit acquisition in " + area.city,
                    "Complete debris removal and site restoration",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-[#121814]/80">
                      <CheckCircle2 className="w-4 h-4 text-[#357650] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA */}
              <div className="p-6 rounded-2xl bg-brand border border-[#C5A880]/25 text-white sticky top-28">
                <MapPin className="w-7 h-7 text-[#C5A880] mb-3" />
                <h3 className="font-serif text-xl font-bold mb-2">
                  Free Estimate in {area.city}
                </h3>
                <p className="text-sm text-white/70 mb-5">
                  An ISA Arborist will visit your {area.city} property within 24 hours.
                </p>
                <Link
                  href="/contact"
                  className="block text-center px-5 py-3 rounded-xl bg-[#C5A880] hover:bg-[#DFCEB8] text-[#285640] font-bold text-sm transition-colors mb-3"
                >
                  Get Free Written Estimate
                </Link>
                {siteConfig.phone && (
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="block text-center px-5 py-3 rounded-xl border border-[#C5A880]/40 text-white font-bold text-sm hover:border-[#DFCEB8] transition-colors"
                  >
                    Call {siteConfig.phone}
                  </a>
                )}
              </div>

              {/* Other Areas */}
              <div className="p-5 rounded-2xl bg-[#F7F4EC] border border-[#422E22]/15">
                <h3 className="font-bold text-sm text-[#2E654B] mb-3">Other Service Areas</h3>
                <ul className="space-y-1.5">
                  {otherAreas.slice(0, 6).map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/service-areas/${a.slug}`}
                        className="text-xs text-[#121814]/70 hover:text-[#357650] transition-colors flex items-center justify-between group"
                      >
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] shrink-0" />
                          {a.city}, {a.state}
                        </span>
                        <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/service-areas"
                  className="block mt-3 text-xs font-semibold text-[#357650] hover:text-[#2E654B] transition-colors"
                >
                  View All Areas →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
