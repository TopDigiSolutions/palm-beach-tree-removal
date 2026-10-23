import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import { siteConfig } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, Award, Star, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Palm Beach Tree Removal | Est. 1992 | ISA Certified Arborists",
  description:
    "Learn about Palm Beach Tree Removal – serving Palm Beach County estates since 1992 with ISA Certified Master Arborists, 100-ton crane fleet, and $5M liability coverage.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Palm Beach Tree Removal | Est. 1992",
    description: "Florida's premier arboriculture team for luxury estates since 1992. Meet our ISA Master Arborists and learn about our approach.",
    url: "https://palmbeachtreeremoval.com/about",
    images: [{ url: "/images/service-crane-removal.jpg", width: 1200, height: 630, alt: "Palm Beach Tree Removal Crane Division" }],
  },
};

const values = [
  {
    title: "Engineering Precision",
    desc: "Every tree removal is engineered like a structural project — rigging angles calculated, crane capacities verified, and escape routes planned before a single cut is made.",
    icon: "⚙️",
  },
  {
    title: "Estate Respect",
    desc: "We treat your property as if it were our own home. AlturnaMAT ground protection, clean equipment, spotless site restoration — left in better condition than we arrived.",
    icon: "🏡",
  },
  {
    title: "Safety First",
    desc: "Our crews hold ISA Arborist, OSHA 10/30, and First Aid certifications. Every job begins with a formal Job Hazard Analysis reviewed by our senior arborist.",
    icon: "🛡️",
  },
  {
    title: "Transparent Pricing",
    desc: "No surprise invoices. Every estimate is fixed, itemized, and written before work begins. Municipal permit fees are always disclosed upfront.",
    icon: "📋",
  },
];

const credentials = [
  { label: "State License", value: siteConfig.licensing.stateLicense },
  { label: "County License", value: siteConfig.licensing.countyLicense },
  { label: "ISA Certification", value: siteConfig.licensing.arboristCert },
  { label: "TCIA Accreditation", value: siteConfig.licensing.tciaMember },
  { label: "Insurance", value: siteConfig.licensing.insurance },
];

const guarantees = [
  { title: "AlturnaMAT Ground Protection", desc: "Zero ruts or soil compaction on prized Bermuda, Zoysia, and St. Augustine turf." },
  { title: "Surgical Friction Rigging", desc: "Controlled rope-and-pulley lowering over fragile barrel tile roofs, glass enclosures, and infinity pools." },
  { title: "Complete Permitting Coordination", desc: "Official Tree Condition Assessments and arborist filings with Palm Beach County municipalities." },
  { title: "$5M Verified Insurance Protection", desc: "Full commercial liability and workers' comp certificate riders issued directly for your estate or HOA." },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHero
        badge="Est. 1992 · 34+ Years Serving Palm Beach County"
        title="Arboriculture Practiced as an Exact"
        titleHighlight="Engineering Discipline"
        description="Palm Beach County's trusted tree removal and estate arboriculture specialist since 1992. Learn about the people, principles, and practices that set us apart."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      {/* Company Story */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]" aria-label="Company Story">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal-item relative">
              <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl bg-brand">
                <Image
                  src="/images/service-crane-removal.jpg"
                  alt="Palm Beach Tree Removal 100-ton crane operating over luxury waterfront estate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#234D3D]/80 via-[#234D3D]/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-brand  border border-[#C5A880]/30 text-white">
                  <div className="text-[10px] text-[#DFCEB8] font-bold uppercase tracking-widest">Specialized Operations Fleet</div>
                  <div className="font-serif text-lg font-bold text-white mt-0.5">100-Ton All-Terrain Crane Division</div>
                </div>
              </div>
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-brand text-white p-5 rounded-2xl shadow-2xl border border-[#C5A880]/40 text-center max-w-[170px] animate-subtleFloat">
                <div className="font-serif text-4xl font-bold text-[#C5A880]">34+</div>
                <div className="text-xs uppercase tracking-wider font-semibold mt-1">Years Serving Palm Beach</div>
                <div className="text-[10px] text-[#DFCEB8] mt-2 border-t border-white/20 pt-1.5 font-medium">Est. 1992</div>
              </div>
            </div>

            <div className="reveal-item delay-200">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#422E22] mb-3">
                <span className="w-8 h-0.5 bg-[#422E22]" />
                <span>Our Story</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E654B] tracking-tight leading-tight mb-5">
                Three Decades of Heritage and Precision
              </h2>
              <p className="text-base text-[#121814]/80 leading-relaxed mb-4">
                Founded in 1992, <strong>Palm Beach Tree Removal</strong> was established to provide South Florida&apos;s premier private properties with an elevated standard of tree care. We recognized that an estate&apos;s landscape represents decades of architectural investment and natural beauty.
              </p>
              <p className="text-sm text-[#121814]/70 leading-relaxed mb-4">
                What began as a small, dedicated crew with a single bucket truck has grown into Palm Beach County&apos;s leading arboricultural service — now commanding a 100-ton all-terrain hydraulic crane fleet, spider lifts, remote-controlled grapple saws, and a team of ISA Certified Master Arborists.
              </p>
              <p className="text-sm text-[#121814]/70 leading-relaxed mb-8">
                Whether navigating narrow waterfront setbacks, lifting 15,000-pound Live Oak sections over Spanish barrel-tile roofs, or sculpting prized Medjool date palms, every operation is supervised by an ISA Certified Master Arborist using modern low-impact equipment.
              </p>
              <div className="flex flex-wrap gap-4">
                {siteConfig.stats.slice(0, 3).map((stat, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-[#F7F4EC] border border-[#422E22]/15 text-center min-w-[100px]">
                    <div className="font-serif text-2xl font-bold text-[#2E654B]">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-wider text-[#422E22] font-semibold mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 lg:py-28 bg-[#F7F4EC] border-y border-[#422E22]/15" aria-label="Mission and Values">
        <div className="container-custom">
          <div className="reveal-item text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#422E22] mb-3">
              <span className="w-8 h-0.5 bg-[#422E22]" />
              <span>Our Philosophy</span>
              <span className="w-8 h-0.5 bg-[#422E22]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E654B] tracking-tight">
              Core Values & Professional Standards
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div key={idx} className={`reveal-item delay-${(idx + 1) * 100} p-6 rounded-2xl bg-white border border-[#422E22]/12 shadow-sm hover:shadow-md hover:border-[#357650]/30 transition-all`}>
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="font-serif text-lg font-bold text-[#2E654B] mb-2">{v.title}</h3>
                <p className="text-xs text-[#121814]/70 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zero Lawn Damage Guarantee */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]" aria-label="Our Guarantees">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="reveal-item">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#422E22] mb-3">
                <span className="w-8 h-0.5 bg-[#422E22]" />
                <span>The Zero-Damage Standard</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E654B] tracking-tight leading-tight mb-5">
                Our Operational Guarantees to Every Client
              </h2>
              <p className="text-base text-[#121814]/80 leading-relaxed mb-8">
                Our operational guarantees are the foundation of every engagement. These are not marketing promises — they are documented protocols verified on every job site by our licensed arborist supervisors.
              </p>
              <div className="space-y-3">
                {guarantees.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#F7F4EC] border border-[#422E22]/15 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#357650] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[#2E654B]">{item.title}</div>
                      <div className="text-xs text-[#121814]/70 mt-0.5 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-item delay-200 relative">
              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl bg-brand">
                <Image
                  src="/images/service-hazardous-removal.jpg"
                  alt="Zero lawn damage guarantee in action"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#234D3D]/70 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing & Credentials */}
      <section className="py-16 bg-brand" aria-label="Licensing and Credentials">
        <div className="container-custom">
          <div className="reveal-item text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Licensing, Insurance &amp; Credentials
            </h2>
            <p className="text-sm text-white/60 mt-2">
              Full documentation available upon request for every estate engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((c, idx) => (
              <div key={idx} className={`reveal-item delay-${(idx + 1) * 100} p-4 rounded-xl bg-brand border border-[#C5A880]/25 flex items-start gap-3`}>
                <ShieldCheck className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#C5A880] font-bold">{c.label}</div>
                  <div className="text-sm text-white/80 mt-0.5">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-[#F7F4EC] border-t border-[#422E22]/15" aria-label="Why Choose Us">
        <div className="container-custom text-center max-w-3xl">
          <div className="reveal-item">
            <Award className="w-10 h-10 text-[#C5A880] mx-auto mb-5" />
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E654B] tracking-tight mb-5">
              Why Palm Beach Estates Trust Us
            </h2>
            <p className="text-base text-[#121814]/75 leading-relaxed mb-8">
              For over 34 years, we have been the preferred arboricultural partner of Palm Beach Island estates, Wellington equestrian compounds, Boca Raton waterfront properties, and historic West Palm Beach districts. Our reputation is built on three principles: do not damage property, do not cut corners, and do not leave until the site is pristine.
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
