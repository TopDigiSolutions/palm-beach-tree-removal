"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
export default function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!isOpen) { dialog.current?.close(); return; }
    const previous = document.activeElement as HTMLElement | null;
    dialog.current?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const media = window.matchMedia("(min-width: 1280px)");
    const resize = () => { if (media.matches) onClose(); };
    media.addEventListener("change", resize);
    return () => { document.body.style.overflow = overflow; media.removeEventListener("change", resize); previous?.focus(); };
  }, [isOpen, onClose]);
  return <dialog ref={dialog} id="mobile-navigation" className="mobile-drawer" aria-label="Mobile navigation" onCancel={onClose} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
    <div className="drawer-heading"><span className="eyebrow">Palm Beach Tree Removal</span><button type="button" aria-label="Close navigation menu" onClick={onClose}><X /></button></div>
    <nav aria-label="Mobile navigation">{siteConfig.navLinks.map((link, i) => <Link key={link.href} href={link.href} onClick={onClose}><span><small>0{i + 1}</small>{link.name}</span><ArrowUpRight size={20} /></Link>)}</nav>
    <Link href="/#contact" onClick={onClose} className="button-primary">Get a Free Estimate <ArrowUpRight size={18} /></Link>
    <p className="text-sm mt-6 text-neutral-muted">{siteConfig.hours.regular}</p>
  </dialog>;
}
