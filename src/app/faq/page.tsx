import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import FAQAccordion from "./FAQAccordion";
import { siteConfig } from "@/data/site";
import Link from "next/link";
import { Phone, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Clear answers to common questions about tree removal, municipal permits, ISA Certified Arborists, insurance coverage, and storm emergency dispatch in Palm Beach County.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | Palm Beach Tree Removal",
    description:
      "Clear answers to common questions about tree removal, municipal permits, ISA Certified Arborists, insurance coverage, and storm emergency dispatch in Palm Beach County.",
    url: "https://palmbeachtreeremoval.com/faq",
  },
};

export default function FAQPage() {
  return (
    <PageLayout>
      <PageHero
        badge="Municipal Regulations & Arborist Protocols"
        title="Frequently Asked"
        titleHighlight="Questions"
        description="Clear, transparent answers regarding municipal tree permits, insurance policies, turf protection, crane procedures, and emergency response across Palm Beach County."
        breadcrumbs={[{ label: "FAQ", href: "/faq" }]}
      />

      {/* FAQ Content */}
      <section className="py-20 lg:py-28 bg-[#FAF9F6]" aria-label="FAQ">
        <div className="container-custom max-w-4xl">
          <FAQAccordion />

          {/* Contact Strip */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#F7F4EC] border border-[#422E22]/15 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left">
            <div>
              <h3 className="text-base font-bold text-[#2E654B]">
                Have a specific question regarding your estate grounds?
              </h3>
              <p className="text-xs sm:text-sm text-[#121814]/75 mt-0.5">
                Our ISA Certified Master Arborists are available for direct consultations.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {siteConfig.phone ? (
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="px-5 py-3 rounded-xl bg-brand text-white font-bold text-xs sm:text-sm hover:bg-brand-hover transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                  <span>{siteConfig.phone}</span>
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="px-5 py-3 rounded-xl bg-brand text-white font-bold text-xs sm:text-sm hover:bg-brand-hover transition-colors flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-[#C5A880]" />
                  <span>Submit Inquiry</span>
                </Link>
              )}

              {siteConfig.email ? (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="px-5 py-3 rounded-xl border border-[#422E22]/25 text-[#2E654B] font-bold text-xs sm:text-sm hover:bg-white transition-colors"
                >
                  Email Arborist
                </a>
              ) : (
                <Link
                  href="/contact"
                  className="px-5 py-3 rounded-xl border border-[#422E22]/25 text-[#2E654B] font-bold text-xs sm:text-sm hover:bg-white transition-colors flex items-center gap-2"
                >
                  <span>Request Free Estimate</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
