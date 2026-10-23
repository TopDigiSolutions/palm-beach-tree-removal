import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { siteConfig } from "@/data/site";
export default function Services() {
  return <section id="services" className="py-20 lg:py-28 bg-off-white" aria-labelledby="services-heading">
    <div className="container-custom">
      <div className="reveal-item flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div className="max-w-xl"><p className="eyebrow mb-4">Our services / Care from canopy to ground</p><h2 id="services-heading" className="font-serif text-4xl lg:text-5xl text-forest-dark">Expert care for every part of your property.</h2></div>
        <p className="text-sm leading-relaxed text-neutral-muted max-w-sm">From precision removals to meticulous pruning, our ISA Master Arborists plan every operation around the safety of your trees, home, and grounds.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteConfig.services.map((service, index) => <article id={service.id} key={service.id} className="reveal-item group bg-white border border-wood-rich/15 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1">
          <Link href={`/services/${service.id}`} className="relative block overflow-hidden" tabIndex={-1} aria-hidden="true"><Image src={service.image} alt={service.title} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 400px" className="object-cover transition-transform duration-500 group-hover:scale-105" /><span className="absolute left-4 top-4 bg-off-white text-forest-dark text-xs px-3 py-2">0{index + 1} / {service.tag}</span></Link>
          <div className="p-6 flex flex-col flex-1"><h3 className="font-serif text-2xl text-forest-dark mb-3"><Link href={`/services/${service.id}`}>{service.title}</Link></h3><p className="text-sm text-neutral-muted leading-relaxed mb-5">{service.shortDesc}</p><ul className="space-y-2 mb-6">{service.features.slice(0,2).map(feature => <li key={feature} className="flex gap-2 text-xs leading-relaxed text-neutral-muted"><Check size={15} className="text-palm-green shrink-0 mt-0.5" />{feature}</li>)}</ul><div className="flex flex-wrap items-center gap-4 justify-between border-t border-wood-rich/10 pt-5 mt-auto"><Link href={`/services/${service.id}`} className="inline-flex items-center gap-2 text-sm font-semibold text-forest-dark" aria-label={`Explore ${service.title}`}>Explore service <ArrowUpRight size={16} /></Link><a href="#contact" className="text-xs font-semibold text-wood-rich">Get an estimate</a></div></div>
        </article>)}
      </div>
    </div>
  </section>;
}
