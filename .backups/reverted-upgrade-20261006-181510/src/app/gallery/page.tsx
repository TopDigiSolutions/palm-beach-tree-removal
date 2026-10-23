import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GalleryScreen from "@/components/sections/GalleryScreen";
import MobileActionBar from "@/components/layout/MobileActionBar";
export const metadata: Metadata = {
  title: "Project Gallery | Palm Beach Tree Removal",
  description: "Explore Palm Beach tree removal projects, crane operations, storm recovery, and estate tree care.",
  alternates: { canonical: "/gallery" },
  openGraph: { title: "Project Gallery | Palm Beach Tree Removal", url: "/gallery", images: [{ url: "/images/gallery/gallery-4.jpg", alt: "Crane operations in Palm Beach County" }] },
};
export default function GalleryPage() {
  return <><Header /><main id="main-content" className="py-14 lg:py-20"><div className="container-custom"><p className="eyebrow mb-5">Palm Beach County / Field operations</p><h1 className="font-serif text-4xl lg:text-6xl text-forest-dark mb-6">Our work. In detail.</h1><p className="text-neutral-muted max-w-2xl leading-relaxed mb-10">Browse the project collection, from heavy crane lifts and disaster recovery to canopy care and root excavation. Select a photograph to take a closer look.</p><GalleryScreen /></div></main><Footer /><MobileActionBar /></>;
}
