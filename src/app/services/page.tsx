import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import { siteConfig } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Tree Removal & Arboriculture Services | Palm Beach Tree Removal",
  description:
    "Complete arboricultural services for Palm Beach County estates: tree removal, trimming, stump grinding, emergency response, hedge trimming, and debris hauling. ISA Certified Master Arborists.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Tree Services | Palm Beach Tree Removal",
    description: "Expert tree removal, trimming, stump grinding, and emergency storm response for Palm Beach County estates.",
    url: "https://palmbeachtreeremoval.com/services",
    images: [{ url: "/images/service-hazardous-removal.jpg", width: 1200, height: 630, alt: "Palm Beach Tree Removal Services" }],
  },
};

const whyUs = [
  "ISA Certified Master Arborists on every project",
  "100-ton all-terrain hydraulic crane fleet",
  "AlturnaMAT zero lawn damage guarantee",
  "$5,000,000 commercial general liability insurance",
  "Municipal permit acquisition included",
  "24/7 emergency storm response dispatch",
];

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHero
        badge="6 Core Arboricultural Services"
        title="Expert Tree Care for"
        titleHighlight="Palm Beach Estates"
        description="ISA Certified Master Arborists delivering surgical precision, 100-ton crane capability, and zero-damage guarantees across Palm Beach County since 1992."
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]" aria-label="All Services">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.services.map((service, idx) => (
              <article
                key={service.id}
                className={`reveal-item delay-${(idx + 1) * 100} group rounded-2xl overflow-hidden border border-[#422E22]/15 bg-white hover:border-[#357650]/40 hover:shadow-xl transition-all duration-300 flex flex-col`}
              >
                {/* Service Image */}
                <div className="relative h-56 overflow-hidden bg-brand">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#234D3D]/70 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#C5A880]/90 text-[#285640] text-[10px] font-bold uppercase tracking-wider">
                    {service.tag}
                  </span>
                </div>

                {/* Service Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-serif text-xl font-bold text-[#2E654B] mb-3 group-hover:text-[#357650] transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-sm text-[#121814]/70 leading-relaxed mb-4 flex-1">
                    {service.shortDesc}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-1.5 mb-5">
                    {service.features.slice(0, 2).map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#121814]/75">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#357650] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand hover:bg-brand-hover text-white font-bold text-xs shadow-sm transition-colors mt-auto"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Strip */}
      <section className="py-16 bg-brand" aria-label="Why Choose Palm Beach Tree Removal">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal-item">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                Why Choose Palm Beach Tree Removal?
              </h2>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                Since 1992, we have set the standard for estate arboriculture across Palm Beach County. Our combination of certified expertise, heavy equipment, and meticulous site care is unmatched in South Florida.
              </p>
              <ul className="space-y-2">
                {whyUs.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal-item delay-200 text-center lg:text-left">
              <div className="p-8 rounded-2xl bg-brand border border-[#C5A880]/25">
                <Sparkles className="w-8 h-8 text-[#C5A880] mb-4 mx-auto lg:mx-0" />
                <h3 className="font-serif text-xl font-bold text-white mb-3">
                  Ready to Get Started?
                </h3>
                <p className="text-sm text-white/70 mb-5">
                  An ISA Certified Arborist will visit your estate within 24 hours and provide a fixed, transparent written estimate.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C5A880] hover:bg-[#DFCEB8] text-[#285640] font-bold text-sm transition-colors"
                >
                  <span>Request Free Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
