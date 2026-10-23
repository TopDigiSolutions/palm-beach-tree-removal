import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/ui/PageHero";
import GalleryScreen from "@/components/sections/GalleryScreen";

export const metadata: Metadata = {
  title: "Project Gallery | Palm Beach Tree Removal | Field Operations Portfolio",
  description:
    "Explore authentic photographs from our Palm Beach tree removal operations: 100-ton crane lifts, Serco grapple disaster recovery, palm sculpting, stump grinding, and precision estate arboriculture.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | Palm Beach Tree Removal",
    description: "Field operations portfolio: 100-ton crane lifts, emergency disaster recovery, palm removal, and more.",
    url: "https://palmbeachtreeremoval.com/gallery",
    images: [{ url: "/images/gallery/gallery-1.jpg", width: 1200, height: 630, alt: "Palm Beach Tree Removal Gallery" }],
  },
};

export default function GalleryPage() {
  return (
    <PageLayout>
      <PageHero
        badge="Field Operations Portfolio"
        title="Our Work in"
        titleHighlight="Action"
        description="Authentic field photographs from crane extractions, emergency storm recovery, palm sculpting, and stump grinding operations across Palm Beach County."
        breadcrumbs={[{ label: "Gallery", href: "/gallery" }]}
      />
      <GalleryScreen isModal={false} />
    </PageLayout>
  );
}
