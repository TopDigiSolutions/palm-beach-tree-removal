"use client";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import MobileMenu from "./MobileMenu";
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <>
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-top"><div className="container-custom"><span>Serving Palm Beach County since {siteConfig.established}</span><span>Licensed &amp; insured / 24/7 storm response</span></div></div>
      <div className="container-custom header-main">
        <Link href="/" className="brand" aria-label="Palm Beach Tree Removal home"><Image src={siteConfig.logo} alt="" width={54} height={54} /><span><strong>PALM BEACH</strong><small>TREE REMOVAL</small></span></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">{siteConfig.navLinks.map(link => <Link key={link.href} href={link.href}>{link.name}</Link>)}</nav>
        <Link href="/#contact" className="button-primary header-cta">Get a Free Estimate <ArrowUpRight size={16} /></Link>
        <button type="button" className="menu-toggle" aria-label="Open mobile menu" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)}><Menu /></button>
      </div>
    </header>
    <MobileMenu isOpen={open} onClose={close} />
  </>;
}
