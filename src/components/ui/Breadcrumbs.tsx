import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      ...(item.href ? { item: `https://palmbeachtreeremoval.com${item.href}` } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs sm:text-sm text-white/60 flex-wrap">
        {allItems.map((item, idx) => (
          <React.Fragment key={idx}>
            {idx > 0 && <ChevronRight className="w-3.5 h-3.5 text-white/30 shrink-0" />}
            {item.href && idx < allItems.length - 1 ? (
              <Link
                href={item.href}
                className="hover:text-[#DFCEB8] transition-colors flex items-center gap-1"
              >
                {idx === 0 && <Home className="w-3.5 h-3.5" />}
                <span>{item.label}</span>
              </Link>
            ) : (
              <span className={idx === allItems.length - 1 ? "text-[#DFCEB8] font-semibold" : "flex items-center gap-1"}>
                {idx === 0 && <Home className="w-3.5 h-3.5 inline mr-1" />}
                {item.label}
              </span>
            )}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
}
