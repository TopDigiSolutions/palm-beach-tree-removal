"use client";
import { useState } from "react";
import { MessageSquare, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  return <div className="fixed bottom-20 sm:bottom-5 right-4 z-40">
    {open && <aside id="quick-help" aria-label="Tree service quick help" className="bg-off-white text-forest-dark border border-sand shadow-lg rounded p-6 mb-3 w-[min(340px,calc(100vw-32px))]"><div className="flex justify-between gap-4 items-center mb-4"><h2 className="font-serif text-xl">How can we help?</h2><button aria-label="Close quick help" onClick={() => setOpen(false)} className="p-2"><X size={20} /></button></div><p className="text-xs leading-relaxed text-neutral-muted mb-4">Find information about our services or prepare a free estimate request.</p><nav className="grid gap-2">{[{name:"Explore tree services", href:"/#services"},{name:"View service areas",href:"/#service-areas"},{name:"Common questions",href:"/#faq"},{name:"Get a Free Estimate",href:"/#contact"}].map(link => <a className="flex items-center justify-between p-3 border border-sand rounded text-sm hover:bg-beige-warm" key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.name}<ArrowUpRight size={16} /></a>)}{siteConfig.phoneRaw && <a className="button-primary" href={`tel:${siteConfig.phoneRaw}`}>Call Now {siteConfig.phone}</a>}</nav></aside>}
    <button className="ml-auto flex items-center justify-center w-12 h-12 rounded-full bg-forest-dark text-off-white shadow-lg border border-champagne-gold/40" onClick={() => setOpen(!open)} aria-label={open ? "Close quick help" : "Open quick help"} aria-expanded={open} aria-controls="quick-help">{open ? <X size={20} /> : <MessageSquare size={20} />}</button>
  </div>;
}
