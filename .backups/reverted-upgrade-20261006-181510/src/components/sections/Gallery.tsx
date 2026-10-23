import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import GalleryScreen from "./GalleryScreen";
export default function Gallery() {
  return <section id="gallery" className="py-20 lg:py-28 bg-off-white" aria-labelledby="gallery-heading"><div className="container-custom"><div className="flex flex-col sm:flex-row justify-between gap-6 sm:items-end mb-10"><div><p className="eyebrow mb-4">Our work / Across Palm Beach County</p><h2 id="gallery-heading" className="font-serif text-4xl lg:text-5xl text-forest-dark">See the care in every project.</h2><p className="text-sm leading-relaxed text-neutral-muted mt-5 max-w-xl">Crane operations, storm recovery, and precision tree care. Explore the existing collection of our team at work.</p></div><Link className="button-secondary shrink-0 self-start sm:self-auto" href="/gallery">View full gallery <ArrowUpRight size={16} /></Link></div><GalleryScreen compact /></div></section>;
}
