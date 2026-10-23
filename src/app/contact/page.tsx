import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import { siteConfig } from "@/data/site";
import ContactForm from "@/components/sections/ContactForm";
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight, Award, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Free Written Estimate | Palm Beach Tree Removal",
  description:
    "Contact Palm Beach Tree Removal for a free written estimate. ISA Certified Master Arborists serving Palm Beach County. 24/7 emergency storm response. Call or submit online.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Palm Beach Tree Removal | Free Estimate",
    description: "Get a free written estimate from our ISA Certified Master Arborists. 24/7 emergency response across Palm Beach County.",
    url: "https://palmbeachtreeremoval.com/contact",
  },
};

const contactInfo = [
  ...(siteConfig.phone
    ? [
        {
          icon: Phone,
          label: "Phone Hotline",
          value: siteConfig.phone,
          href: `tel:${siteConfig.phoneRaw}`,
          sub: "24/7 Emergency Dispatch",
        },
      ]
    : []),
  ...(siteConfig.email
    ? [
        {
          icon: Mail,
          label: "Email Proposals",
          value: siteConfig.email,
          href: `mailto:${siteConfig.email}`,
          sub: "Response within 2 hours",
        },
      ]
    : []),
  {
    icon: MapPin,
    label: "Main Office & Operations",
    value: `${siteConfig.address.street}, ${siteConfig.address.city}, FL ${siteConfig.address.zip}`,
    href: undefined,
    sub: siteConfig.address.county,
  },
  {
    icon: Clock,
    label: "Service Hours",
    value: siteConfig.hours.regular,
    href: undefined,
    sub: siteConfig.hours.emergency,
  },
];

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHero
        badge="No Obligation — Guaranteed Fixed Pricing"
        title="Request Your Free On-Site"
        titleHighlight="Estate Estimate"
        description="An ISA Certified Master Arborist will evaluate your property within 24 hours and deliver a transparent written proposal. No hidden surcharges, zero lawn damage protocol, and $5M liability coverage."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      {/* Contact Info Strip */}
      <section className="py-10 sm:py-12 bg-brand border-b border-[#C5A880]/25" aria-label="Contact Information">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {contactInfo.map((info, idx) => (
              <div key={idx} className="flex items-start gap-3.5 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="w-11 h-11 rounded-xl bg-brand border border-[#C5A880]/35 flex items-center justify-center shrink-0 shadow-md">
                  <info.icon className="w-5 h-5 text-[#C5A880]" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#C5A880] font-bold mb-0.5">
                    {info.label}
                  </div>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm font-bold text-white hover:text-[#DFCEB8] transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <div className="text-sm text-white/90 font-medium leading-tight">{info.value}</div>
                  )}
                  {info.sub && (
                    <div className="text-xs text-white/50 mt-1">{info.sub}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content: Form + Sidebar Info */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF9F6]" aria-label="Contact Form and Details">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Form Column (Takes 8 columns for spacious, comfortable inputs) */}
            <div className="lg:col-span-8">
              <div id="contact-form">
                <ContactForm standalone={false} />
              </div>
            </div>

            {/* Sidebar Info Column (Takes 4 columns) */}
            <aside className="lg:col-span-4 space-y-6">
              {/* Emergency Card */}
              <div className="p-6 rounded-3xl bg-brand border border-[#C5A880]/35 text-white shadow-xl relative overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    24/7 Emergency Dispatch Active
                  </span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">Emergency Storm Response</h3>
                <p className="text-xs text-white/75 leading-relaxed mb-5">
                  For life-safety emergencies — fallen trees over roofs, blocked access gates, hazardous cracked limbs — call our emergency operations team immediately.
                </p>
                {siteConfig.phone ? (
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C5A880] via-[#DFCEB8] to-[#C5A880] text-[#285640] font-extrabold text-sm transition-all shadow-lg hover:scale-[1.02]"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    <span>Call Hotline: {siteConfig.phone}</span>
                  </a>
                ) : (
                  <p className="text-xs text-[#DFCEB8] font-medium text-center">
                    Submit the estimate form for prioritized rapid emergency dispatch.
                  </p>
                )}
              </div>

              {/* Guarantees & Credentials */}
              <div className="p-6 rounded-3xl bg-[#F7F4EC] border border-[#38251B]/15 space-y-4 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2E654B]">
                  <ShieldCheck className="w-4 h-4 text-[#357650]" />
                  <span>The Palm Beach Standard</span>
                </div>
                
                <div className="space-y-3">
                  {[
                    "ISA Certified Master Arborists on every property assessment",
                    "100-ton crane extraction capability with AlturnaMAT turf shields",
                    "$5,000,000 comprehensive commercial liability protection",
                    "Municipal permit handling and full HOA compliance documentation",
                    "Zero lawn damage guarantee with pristine magnetic nail sweeps",
                  ].map((cred, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#0E1410]/80">
                      <CheckCircle2 className="w-4 h-4 text-[#357650] shrink-0 mt-0.5" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Official Licensing */}
              <div className="p-6 rounded-3xl bg-white border border-[#38251B]/12 shadow-sm space-y-2.5">
                <h3 className="font-bold text-xs uppercase tracking-wider text-[#2E654B] mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#C5A880]" />
                  <span>Licensed &amp; Accredited</span>
                </h3>
                <div className="text-xs text-[#0E1410]/75 space-y-1">
                  <div><strong>State:</strong> {siteConfig.licensing.stateLicense}</div>
                  <div><strong>County:</strong> {siteConfig.licensing.countyLicense}</div>
                  <div><strong>Accreditation:</strong> {siteConfig.licensing.tciaMember}</div>
                  <div><strong>Certification:</strong> {siteConfig.licensing.arboristCert}</div>
                </div>
              </div>

              {/* Service Areas quick link */}
              <div className="p-6 rounded-3xl bg-white border border-[#38251B]/12 shadow-sm">
                <h3 className="font-bold text-sm text-[#2E654B] mb-2">Service Areas</h3>
                <p className="text-xs text-[#0E1410]/65 mb-4 leading-relaxed">
                  Active crane crews and ISA certified teams dispatched across 8 Palm Beach County communities.
                </p>
                <Link
                  href="/service-areas"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#357650] hover:text-[#2E654B] transition-colors"
                >
                  <span>Explore All Service Areas &amp; Coverage Map</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </PageLayout>
  );
}

