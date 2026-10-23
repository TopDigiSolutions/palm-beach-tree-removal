import Image from "next/image";
import { ArrowDown, ArrowUpRight, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import HeroVideo from "@/components/ui/HeroVideo";
export default function Hero() {
  return (
    <section id="hero" className="hero-section" aria-label="Palm Beach Tree Removal">
      <div className="hero-photo">
        <Image src="/images/hero-poster.jpg" alt="Palm trees and landscaped grounds in Palm Beach" fill preload sizes="(max-width: 900px) 100vw, 55vw" className="object-cover" />
        <HeroVideo />
        <div className="hero-photo-caption"><span>Palm Beach County, Florida</span><span>Est. {siteConfig.established}</span></div>
      </div>
      <div className="container-custom hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Rooted in Palm Beach. Since {siteConfig.established}.</p>
          <h1>Precision tree removal.<br /><em>Exceptional estate care.</em></h1>
          <p className="hero-description">{siteConfig.hero.description}</p>
          <div className="hero-actions">
            <a className="button-primary" href="#contact">Get a Free Estimate <ArrowUpRight size={18} /></a>
            {siteConfig.phoneRaw ? <a className="button-secondary" href={`tel:${siteConfig.phoneRaw}`}><Phone size={17} /> Call Now</a> : <a className="button-secondary" href="#services">Explore our services <ArrowDown size={17} /></a>}
          </div>
          <div className="hero-note"><span className="status-dot" />Tree removal &middot; Pruning &middot; Storm recovery</div>
        </div>
      </div>
    </section>
  );
}
