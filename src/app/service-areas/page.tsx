import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import ServiceAreas from "@/components/sections/ServiceAreas";
import { siteConfig } from "@/data/site";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, CheckCircle2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Service Areas | Palm Beach Tree Removal | Palm Beach County, FL",
  description:
    "Palm Beach Tree Removal serves Boynton Beach, Delray Beach, Boca Raton, Highland Beach, Lake Worth, West Palm Beach, Wellington, and Boca Del Mar. 20-50 minute rapid response.",
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: "Service Areas | Palm Beach Tree Removal",
    description: "Rapid tree removal and arborist response across Palm Beach County – 8 cities served since 1992.",
    url: "https://palmbeachtreeremoval.com/service-areas",
  },
};

export default function ServiceAreasPage() {
  return (
    <PageLayout>
      <PageHero
        badge="8 Cities Across Palm Beach County"
        title="Our Coverage"
        titleHighlight="Service Areas"
        description="Rapid response tree removal and arboricultural services across Palm Beach County. From Highland Beach oceanfront estates to Wellington equestrian compounds."
        breadcrumbs={[{ label: "Service Areas", href: "/service-areas" }]}
      />

      {/* Interactive Coverage Map & City Dispatch */}
      <ServiceAreas />

      {/* Areas Grid */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]" aria-label="All Service Areas">
        <div className="container-custom">
          <div className="reveal-item text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E654B] tracking-tight">
              Cities We Serve
            </h2>
            <p className="text-sm sm:text-base text-[#121814]/70 mt-3 max-w-2xl mx-auto">
              Each city has dedicated response teams and local municipal permit knowledge for seamless project coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {siteConfig.serviceAreaDetails.map((area, idx) => (
              <article
                key={area.slug}
                className={`reveal-item delay-${(idx % 4 + 1) * 100} group rounded-2xl border border-[#422E22]/15 bg-white hover:border-[#357650]/40 hover:shadow-lg transition-all duration-300`}
              >
                <Link href={`/service-areas/${area.slug}`} className="block p-6 sm:p-8">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-brand flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#C5A880]" />
                    </div>
                    <div>
                      <h2 className="font-serif text-xl font-bold text-[#2E654B] group-hover:text-[#357650] transition-colors">
                        {area.city}, {area.state}
                      </h2>
                      <div className="flex items-center gap-1.5 mt-1 text-xs text-[#422E22]">
                        <Clock className="w-3.5 h-3.5 text-[#C5A880]" />
                        <span className="font-semibold">{area.responseTime} Response</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[#121814]/70 leading-relaxed mb-4">
                    {area.coverageDetail}
                  </p>

                  <div className="mb-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#422E22] mb-2">
                      Popular Services:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {area.popularServices.map((s, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-full bg-[#F7F4EC] border border-[#422E22]/12 text-xs text-[#2E654B] font-medium">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#121814]/60 mb-5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#357650]" />
                    <span>{area.permitsInfo}</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#357650] group-hover:gap-2.5 transition-all">
                    View {area.city} Details <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Strip */}
      <section className="py-16 bg-brand" aria-label="Coverage Information">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="reveal-item">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
                Comprehensive Palm Beach County Coverage
              </h2>
              <p className="text-sm text-white/70 leading-relaxed mb-5">
                Our operational base in West Palm Beach allows for rapid deployment across all communities. Our 20-50 minute emergency response times are among the fastest in Palm Beach County.
              </p>
              <ul className="space-y-2">
                {[
                  "All 8 cities covered with dedicated response teams",
                  "Municipal permit knowledge for every jurisdiction",
                  "24/7 emergency storm dispatch countywide",
                  "Same-day service available for urgent situations",
                  "HOA compliance and coordination included",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-white/80">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal-item delay-200">
              <div className="grid grid-cols-2 gap-3">
                {siteConfig.serviceAreaDetails.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/service-areas/${area.slug}`}
                    className="p-4 rounded-xl bg-brand border border-[#C5A880]/20 hover:border-[#C5A880]/60 transition-all hover:bg-brand-hover group"
                  >
                    <div className="font-bold text-sm text-white group-hover:text-[#DFCEB8] transition-colors">{area.city}</div>
                    <div className="text-[10px] text-[#C5A880] mt-1">{area.responseTime}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F7F4EC] border-t border-[#422E22]/15" aria-label="Contact CTA">
        <div className="container-custom text-center max-w-2xl">
          <div className="reveal-item">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E654B] mb-4">
              Not Sure If We Cover Your Area?
            </h2>
            <p className="text-sm text-[#121814]/70 mb-6">
              Contact us and we&apos;ll let you know if we service your specific location. We are constantly expanding our coverage across South Florida.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand hover:bg-brand-hover text-white font-bold text-sm shadow-md transition-colors"
            >
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
              <span>Check Coverage & Get Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
