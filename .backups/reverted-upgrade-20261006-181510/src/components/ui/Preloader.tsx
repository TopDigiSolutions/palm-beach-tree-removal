"use client";
import { useEffect, useRef } from "react";
import { TreePine } from "lucide-react";
import { siteConfig } from "@/data/site";
export default function Preloader() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { ref.current?.classList.add("is-ready"); }, []);
  return <div ref={ref} className="brand-loader" aria-hidden="true"><TreePine size={36} /><span>{siteConfig.name}</span></div>;
}
