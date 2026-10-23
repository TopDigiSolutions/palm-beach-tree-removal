import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageLayout from "@/components/layout/PageLayout";
import { siteConfig } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Wrench, Phone } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return siteConfig.services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.id === slug);
  if (!service) return {};
  return {
    title: `${service.title} in Palm Beach | Palm Beach Tree Removal`,
    description: service.shortDesc,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.title} | Palm Beach Tree Removal`,
      description: service.shortDesc,
      url: `https://palmbeachtreeremoval.com/services/${slug}`,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = siteConfig.services.find((s) => s.id === slug);
  if (!service) notFound();

  const relatedServices = siteConfig.services.filter((s) => s.id !== service.id).slice(0, 3);

  // Find relevant FAQs
  const relatedFaqs = siteConfig.faqs.slice(0, 3);

  return (
    <PageLayout>
      {/* Page Hero */}
      <section
        className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #071710 0%, #0F3322 45%, #15452E 70%, #0A2116 100%)",
        }}
        aria-label={`${service.title} Service`}
      >
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover object-center opacity-15"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(12,53,34,0.92) 0%, rgba(23,107,72,0.78) 50%, rgba(12,53,34,0.92) 100%)" }} />
        </div>

        {/* Decorative layers */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 90% 55% at 50% -10%, rgba(197,168,128,0.15) 0%, transparent 65%)" }}
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
            style={{ background: "radial-gradient(circle, rgba(197,168,128,0.12) 0%, transparent 70%)" }}
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
                { label: "Services", href: "/services" },
                { label: service.title },
              ]}
            />
          </div>

          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-5"
            style={{ background: "rgba(197,168,128,0.13)", borderColor: "rgba(197,168,128,0.48)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase text-[#DFCEB8]">
              {service.tag}
            </span>
          </div>

          <h1
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.12] mb-5 max-w-4xl"
            style={{ color: "#FFFFFF", textShadow: "0 2px 24px rgba(0,0,0,0.4)" }}
          >
            {service.title} in{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F3EBDD 0%, #C5A880 50%, #DFCEB8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              Palm Beach
            </span>
          </h1>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl mb-8" style={{ color: "rgba(255,255,255,0.82)" }}>
            {service.shortDesc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#C5A880] hover:bg-[#DFCEB8] text-[#285640] font-bold text-sm shadow-lg transition-all hover:scale-[1.02]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Free Estimate</span>
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

      {/* Service Details */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]" aria-label="Service Details">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Full Description */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E654B] mb-5">
                  About Our {service.title} Service
                </h2>
                <p className="text-base text-[#121814]/80 leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              {/* Service Image */}
              <div className="reveal-item relative h-[380px] rounded-2xl overflow-hidden shadow-xl bg-brand">
                <Image
                  src={service.image}
                  alt={`${service.title} in Palm Beach County`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Benefits */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#2E654B] mb-5">
                  What&apos;s Included
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white border border-[#422E22]/15 flex items-start gap-3 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#357650] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#121814]/80 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Equipment */}
              <div className="p-6 rounded-2xl bg-[#F7F4EC] border border-[#422E22]/15">
                <div className="flex items-center gap-3 mb-3">
                  <Wrench className="w-5 h-5 text-[#357650]" />
                  <h3 className="font-serif text-lg font-bold text-[#2E654B]">Equipment Used</h3>
                </div>
                <p className="text-sm text-[#121814]/75 leading-relaxed">{service.equipment}</p>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#2E654B] mb-5">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {relatedFaqs.map((faq, idx) => (
                    <div key={idx} className="p-5 rounded-xl bg-white border border-[#422E22]/15 shadow-sm">
                      <h3 className="font-bold text-sm text-[#2E654B] mb-2">{faq.question}</h3>
                      <p className="text-xs text-[#121814]/75 leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link href="/faq" className="text-sm font-semibold text-[#357650] hover:text-[#2E654B] transition-colors flex items-center gap-1.5">
                    View All FAQs <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA Card */}
              <div className="p-6 rounded-2xl bg-brand border border-[#C5A880]/25 text-white sticky top-28">
                <Sparkles className="w-7 h-7 text-[#C5A880] mb-3" />
                <h3 className="font-serif text-xl font-bold mb-2">Request Free Estimate</h3>
                <p className="text-sm text-white/70 mb-5">
                  An ISA Certified Arborist will visit your estate within 24 hours.
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
                <div className="mt-4 pt-4 border-t border-white/10 space-y-2 text-xs text-white/60">
                  <div>✓ No obligation consultation</div>
                  <div>✓ Fixed written estimate</div>
                  <div>✓ No hidden surcharges</div>
                  <div>✓ $5M liability insurance</div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="p-5 rounded-2xl bg-[#F7F4EC] border border-[#422E22]/15">
                <h3 className="font-bold text-sm text-[#2E654B] mb-3">Service Areas</h3>
                <ul className="space-y-1.5">
                  {siteConfig.serviceAreaDetails.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/service-areas/${area.slug}`}
                        className="text-xs text-[#121814]/70 hover:text-[#357650] transition-colors flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] shrink-0" />
                        {area.city}, {area.state}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-[#F7F4EC] border-t border-[#422E22]/15" aria-label="Related Services">
        <div className="container-custom">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E654B] mb-8">
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedServices.map((s, idx) => (
              <Link
                key={s.id}
                href={`/services/${s.id}`}
                className={`reveal-item delay-${(idx + 1) * 100} group p-5 rounded-2xl bg-white border border-[#422E22]/12 hover:border-[#357650]/40 hover:shadow-md transition-all`}
              >
                <div className="relative h-32 rounded-xl overflow-hidden mb-4 bg-brand">
                  <Image src={s.image} alt={s.title} fill sizes="33vw" className="object-cover object-center group-hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="font-serif text-base font-bold text-[#2E654B] group-hover:text-[#357650] transition-colors mb-1">{s.title}</h3>
                <span className="text-xs text-[#422E22]">{s.tag}</span>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-bold text-[#357650] hover:text-[#2E654B] transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
