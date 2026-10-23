import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { siteConfig } from "@/data/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileActionBar from "@/components/layout/MobileActionBar";
export const dynamicParams = false;
export function generateStaticParams() { return siteConfig.services.map(service => ({ slug: service.id })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = siteConfig.services.find(item => item.id === slug);
  if (!service) notFound();
  return { title: `${service.title} in Palm Beach County | ${siteConfig.name}`, description: service.shortDesc, alternates: { canonical: `/services/${slug}` }, openGraph: { title: `${service.title} | ${siteConfig.name}`, description: service.shortDesc, url: `/services/${slug}`, images: [{ url: service.image, alt: service.title }] } };
}
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = siteConfig.services.find(item => item.id === slug);
  if (!service) notFound();
  return <><Header /><main id="main-content"><section className="py-12 lg:py-20 bg-beige-subtle"><div className="container-custom"><nav aria-label="Breadcrumb" className="text-xs text-neutral-muted mb-8"><Link href="/">Home</Link> / <Link href="/#services">Services</Link> / <span aria-current="page">{service.title}</span></nav><div className="grid lg:grid-cols-2 gap-12 items-center"><div><p className="eyebrow mb-5">{service.tag} / Palm Beach County</p><h1 className="font-serif text-4xl lg:text-6xl text-forest-dark mb-6">{service.title}</h1><p className="text-neutral-muted leading-relaxed mb-8">{service.shortDesc}</p><Link href="/#contact" className="button-primary">Get a Free Estimate <ArrowUpRight size={18} /></Link>{siteConfig.phoneRaw && <a className="button-secondary ml-3" href={`tel:${siteConfig.phoneRaw}`}>Call Now</a>}</div><div className="relative aspect-[4/3] overflow-hidden rounded"><Image src={service.image} alt={service.title} fill preload sizes="(max-width:1023px) 100vw, 600px" className="object-cover" /></div></div></div></section><section className="py-16 lg:py-24"><div className="container-custom grid lg:grid-cols-3 gap-12"><div className="lg:col-span-2"><h2 className="font-serif text-3xl text-forest-dark mb-6">Carefully planned. Professionally completed.</h2><p className="text-neutral-muted leading-loose mb-8">{service.fullDesc}</p><ul className="space-y-5">{service.features.map(feature => <li key={feature} className="flex gap-3 text-sm leading-relaxed"><Check className="shrink-0 text-palm-green" size={20} />{feature}</li>)}</ul></div><aside className="p-7 bg-beige-subtle self-start border border-wood-rich/15"><h2 className="font-serif text-2xl mb-4 text-forest-dark">Equipment &amp; expertise</h2><p className="text-sm leading-loose text-neutral-muted">{service.equipment}</p><h3 className="font-semibold mt-6 mb-3">Serving your community</h3><p className="text-xs leading-loose text-neutral-muted">{siteConfig.serviceAreas.join(" · ")}</p><Link href="/#service-areas" className="inline-block text-sm underline mt-5">Explore our service areas</Link></aside></div></section><section className="container-custom pb-20"><h2 className="font-serif text-3xl mb-6 text-forest-dark">More ways we care for your property</h2><div className="flex flex-wrap gap-3">{siteConfig.services.filter(item => item.id !== slug).map(item => <Link className="button-secondary" key={item.id} href={`/services/${item.id}`}>{item.title}<ArrowUpRight size={16} /></Link>)}</div></section></main><Footer /><MobileActionBar /></>;
}
