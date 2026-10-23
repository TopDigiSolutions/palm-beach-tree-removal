import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import Preloader from "@/components/ui/Preloader";
import ScrollToTop from "@/components/ui/ScrollToTop";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#173F2A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${siteConfig.name} | Precision Estate Arboriculture Est. ${siteConfig.established}`,
  description:
    "Palm Beach County's trusted tree removal and estate arboriculture specialist since 1992. TCIA Accredited, ISA Master Arborists, 100-ton crane division, $5M liability protection, zero-lawn-damage guarantee.",
  keywords: [
    "Palm Beach tree removal",
    "tree trimming Palm Beach Island",
    "palm tree skinning West Palm Beach",
    "emergency hurricane tree removal",
    "100 ton crane tree extraction",
    "stump grinding Jupiter FL",
    "Wellington equestrian estate tree service",
    "Boca Raton tree removal contractor",
    "ISA certified arborist Palm Beach County",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  metadataBase: new URL("https://palmbeachtreeremoval.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://palmbeachtreeremoval.com",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Luxury Tree Removal & Estate Arboriculture`,
    description:
      "Serving Palm Beach County estates since 1992. 100-ton crane rigging, diamond palm sculpting, 24/7 storm recovery, and $5M liability coverage.",
    images: [
      {
        url: "/images/hero-poster.jpg",
        width: 1920,
        height: 1080,
        alt: "Palm Beach Tree Removal Estate Arboriculture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Precision Estate Tree Removal Est. 1992`,
    description:
      "Florida's premier arboriculture team for luxury estates. 100-ton crane capability, $5M insurance, 24/7 emergency response.",
    images: ["/images/hero-poster.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://palmbeachtreeremoval.com/#business",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: "Palm Beach Tree Service",
    description:
      "Specialized hazardous tree removal, luxury palm sculpting, 100-ton crane rigging, and 24/7 hurricane storm response for premier Palm Beach County estates.",
    foundingDate: "1992",
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    logo: "https://palmbeachtreeremoval.com/images/logo.png",
    image: "https://palmbeachtreeremoval.com/images/logo.png",
    url: "https://palmbeachtreeremoval.com",
    priceRange: "$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.7056,
      longitude: -80.0364,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        description: "24/7 Emergency Storm Dispatch Only",
        opens: "00:00",
        closes: "23:59",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Estate Arboricultural Services",
      itemListElement: siteConfig.services.map((service, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDesc,
        },
        position: idx + 1,
      })),
    },
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF9F6] text-[#121814] font-sans selection:bg-[#1E5638] selection:text-[#FAF9F6] flex flex-col">
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Preloader />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
