"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X, MapPin, Maximize2 } from "lucide-react";
import { siteConfig } from "@/data/site";
export default function GalleryScreen({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const items = siteConfig.gallery.filter(item => filter === "all" || item.category === filter);
  const active = selected === null ? null : items[selected];
  const filters = [{ id: "all", label: "All projects" }, ...Array.from(new Map(siteConfig.gallery.map(item => [item.category, { id: item.category, label: item.category === "crane" ? "Crane operations" : item.category === "emergency" ? "Storm recovery" : item.category === "palms" ? "Palm & canopy care" : "Root & lawn care" }])).values())];
  const isOpen = selected !== null;
  useEffect(() => {
    if (!isOpen) { dialog.current?.close(); return; }
    const previous = document.activeElement as HTMLElement | null;
    dialog.current?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = overflow; previous?.focus(); };
  }, [isOpen]);
  return <>
    <div className="gallery-filters" aria-label="Filter projects">{filters.map(item => <button key={item.id} type="button" aria-pressed={filter === item.id} onClick={() => setFilter(item.id)}>{item.label}</button>)}</div>
    <div className={`project-grid ${compact ? "is-compact" : ""}`}>{items.map((item, index) => <article key={item.id} className="project-card"><button type="button" className="project-photo" onClick={() => setSelected(index)} aria-label={`View photo: ${item.title}`}><Image src={item.image} alt={item.title} fill sizes="(max-width:639px) 100vw, (max-width:1023px) 50vw, 410px" className="object-cover" /><span className="project-expand"><Maximize2 size={18} /></span><span className="project-category">{item.categoryLabel}</span></button><div className="project-copy"><p><MapPin size={12} />{item.location}</p><h3><button type="button" onClick={() => setSelected(index)}>{item.title}</button></h3>{!compact && <p className="project-description">{item.description}</p>}</div></article>)}</div>
    <p className="text-xs text-neutral-muted mt-6" aria-live="polite">{items.length} {items.length === 1 ? "project" : "projects"}</p>
    <dialog ref={dialog} className="project-lightbox" aria-label="Project photo viewer" onCancel={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) setSelected(null); }} onKeyDown={event => { if (event.key === "ArrowRight") { event.preventDefault(); setSelected(index => index === null ? null : (index + 1) % items.length); } if (event.key === "ArrowLeft") { event.preventDefault(); setSelected(index => index === null ? null : (index - 1 + items.length) % items.length); } }}>
      {active && selected !== null && <div className="lightbox-inner"><div className="lightbox-top"><span>{selected + 1} / {items.length} — {active.categoryLabel}</span><button type="button" onClick={() => setSelected(null)} aria-label="Close photo viewer" autoFocus><X /></button></div><div className="lightbox-image"><Image src={active.image} alt={active.title} fill sizes="(max-width:1100px) 95vw, 1100px" className="object-contain" /><button className="lightbox-previous" type="button" aria-label="Previous photo" onClick={() => setSelected((selected - 1 + items.length) % items.length)}><ArrowLeft /></button><button className="lightbox-next" type="button" aria-label="Next photo" onClick={() => setSelected((selected + 1) % items.length)}><ArrowRight /></button></div><div className="lightbox-caption" aria-live="polite"><p className="text-xs mb-2">{active.location}</p><h2 className="font-serif text-xl mb-2">{active.title}</h2><p className="text-xs leading-relaxed text-white/80">{active.description}</p></div></div>}
    </dialog>
  </>;
}
