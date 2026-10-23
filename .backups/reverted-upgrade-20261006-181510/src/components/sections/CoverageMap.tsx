"use client";

import type { Map as LeafletMap, Marker, TileLayer } from "leaflet";
import React, { useEffect, useRef, useState } from "react";
import { ServiceAreaDetail } from "@/data/site";
import { RotateCcw, ShieldCheck, Zap } from "lucide-react";
import "leaflet/dist/leaflet.css";

interface CoverageMapProps {
  areas: ServiceAreaDetail[];
  activeCityIndex: number;
  onSelectCity: (index: number) => void;
}

// Default center over Palm Beach County coverage zone
const PBC_CENTER: [number, number] = [26.54, -80.12];
const DEFAULT_ZOOM = 10;

export default function CoverageMap({
  areas,
  activeCityIndex,
  onSelectCity,
}: CoverageMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<Marker[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [mapStyle, setMapStyle] = useState<"streets" | "satellite">("streets");
  const tileLayerRef = useRef<TileLayer | null>(null);

  // Helper to create branded Luxury HTML icon
  const createCustomIcon = (L: typeof import("leaflet"), cityName: string, isSelected: boolean) => {
    const html = `
      <div class="group relative flex flex-col items-center cursor-pointer transition-transform duration-300 ${
        isSelected ? "scale-110 z-50" : "hover:scale-105 z-20"
      }">
        ${
          isSelected
            ? `<div class="absolute -top-1 w-9 h-9 rounded-full bg-[#C5A880]/35 animate-ping"></div>`
            : ""
        }
        <div class="w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 transition-all ${
          isSelected
            ? "bg-[#0E2A1D] border-[#C5A880] text-[#C5A880] ring-4 ring-[#C5A880]/30 shadow-2xl"
            : "bg-white border-[#0E2A1D] text-[#0E2A1D] group-hover:border-[#C5A880]"
        }">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
        </div>
        <div class="mt-1 px-2 py-0.5 rounded-md text-[11px] font-bold tracking-tight whitespace-nowrap shadow-md border backdrop-blur-sm transition-all ${
          isSelected
            ? "bg-[#0E2A1D] text-[#DFCEB8] border-[#C5A880]"
            : "bg-white/95 text-[#0E2A1D] border-[#0E2A1D]/15 group-hover:border-[#C5A880]"
        }">
          ${cityName}
        </div>
      </div>
    `;

    return L.divIcon({
      html,
      className: "custom-leaflet-marker",
      iconSize: [80, 48],
      iconAnchor: [40, 24],
      popupAnchor: [0, -22],
    });
  };

  // Initialize Map on Client Only
  useEffect(() => {
    let isMounted = true;

    async function initMap() {
      if (!mapContainerRef.current || mapInstanceRef.current) return;

      const L = (await import("leaflet")).default;

      if (!isMounted || !mapContainerRef.current) return;

      // Create Leaflet Map
      const map = L.map(mapContainerRef.current, {
        center: PBC_CENTER,
        zoom: DEFAULT_ZOOM,
        minZoom: 9,
        maxZoom: 18,
        zoomControl: false, // Custom luxury zoom controls
        scrollWheelZoom: false, // Prevent accidental page scroll hijacking
      });

      mapInstanceRef.current = map;

      // Add OpenStreetMap Standard Tile Layer (100% Free, Zero Watermarks, No API Key Required)
      const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
      const tileLayer = L.tileLayer(tileUrl, {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
        subdomains: ["a", "b", "c"],
        maxZoom: 19,
      }).addTo(map);

      tileLayerRef.current = tileLayer;

      // Create Custom Luxury DivIcons for each City
      markersRef.current = [];

      areas.forEach((area, index) => {
        const isSelected = false;
        const customIcon = createCustomIcon(L, area.city, isSelected);

        const marker = L.marker([area.coordinates.lat, area.coordinates.lng], {
          icon: customIcon,
          title: `${area.city}, FL`,
        }).addTo(map);

        // Custom Popup Content
        const popupContent = `
          <div class="p-3 text-left font-sans min-w-[200px]">
            <div class="flex items-center justify-between gap-2 border-b border-[#C5A880]/30 pb-2 mb-2">
              <span class="font-serif font-bold text-[#0E2A1D] text-base leading-tight">${area.city}, FL</span>
              <span class="text-[10px] font-bold uppercase bg-[#0E2A1D] text-[#DFCEB8] px-2 py-0.5 rounded-full">${area.responseTime}</span>
            </div>
            <p class="text-xs text-[#121814]/80 mb-2.5 leading-relaxed">${area.coverageDetail}</p>
            <div class="text-[11px] text-[#422E22] font-semibold flex items-center gap-1 mb-2">
              <span>✓ ${area.permitsInfo.split(" ")[0]} Permits Expedited</span>
            </div>
            <a href="#contact" class="inline-block w-full py-1.5 px-2.5 rounded-lg bg-[#C5A880] hover:bg-[#DFCEB8] text-[#0A1E14] text-center font-bold text-[11px] transition-colors shadow-sm">
              Request Service in ${area.city}
            </a>
          </div>
        `;

        marker.bindPopup(popupContent, {
          className: "custom-leaflet-popup",
          closeButton: false,
          offset: [0, -14],
        });

        // Click handler on marker
        marker.on("click", () => {
          onSelectCity(index);
        });

        markersRef.current.push(marker);
      });

      setIsLoaded(true);
    }

    initMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [areas, onSelectCity]);

  // Synchronize map view and markers when activeCityIndex changes
  useEffect(() => {
    if (!mapInstanceRef.current || !isLoaded || markersRef.current.length === 0) return;

    import("leaflet").then((LModule) => {
      const L = LModule.default;
      const targetArea = areas[activeCityIndex];
      if (!targetArea) return;

      // Update all marker icons to reflect active state
      markersRef.current.forEach((marker, idx) => {
        const isSelected = idx === activeCityIndex;
        marker.setIcon(createCustomIcon(L, areas[idx].city, isSelected));
        if (isSelected) {
          marker.setZIndexOffset(1000);
          marker.openPopup();
        } else {
          marker.setZIndexOffset(0);
        }
      });

      // Smoothly pan to the selected city
      mapInstanceRef.current?.flyTo(
        [targetArea.coordinates.lat, targetArea.coordinates.lng],
        12,
        { duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 0.9 }
      );
    });
  }, [activeCityIndex, isLoaded, areas]);

  // Switch Tile Style (Street OpenStreetMap vs Esri Satellite)
  const handleToggleTileStyle = async () => {
    if (!mapInstanceRef.current || !tileLayerRef.current) return;
    const L = (await import("leaflet")).default;
    const nextStyle = mapStyle === "streets" ? "satellite" : "streets";

    tileLayerRef.current.remove();

    const isSat = nextStyle === "satellite";
    const newUrl = isSat
      ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

    const newLayer = L.tileLayer(newUrl, {
      attribution: isSat
        ? 'Tiles &copy; Esri &mdash; DigitalGlobe, Earthstar Geographics'
        : '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
      subdomains: isSat ? [] : ["a", "b", "c"],
      maxZoom: isSat ? 18 : 19,
    }).addTo(mapInstanceRef.current);

    tileLayerRef.current = newLayer;
    setMapStyle(nextStyle);
  };

  // Reset to countywide bounds
  const handleResetView = () => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.flyTo(PBC_CENTER, DEFAULT_ZOOM, { duration: 0.8 });
  };

  const handleZoomIn = () => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.zoomIn();
  };

  const handleZoomOut = () => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.zoomOut();
  };

  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-[#C5A880]/30 shadow-xl bg-[#FAF9F6]">
      {/* Map Header / Floating Badges */}
      <div className="absolute top-3 left-3 z-[400] flex flex-wrap items-center gap-2 pointer-events-none">
        <div className="pointer-events-auto bg-[#0E2A1D]/90 backdrop-blur-md text-white border border-[#C5A880]/40 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-2 text-xs">
          <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse"></span>
          <span className="font-bold text-[#DFCEB8] uppercase tracking-wider text-[10px]">
            Regional Coverage
          </span>
          <span className="text-white/60">|</span>
          <span className="font-medium text-white/90">8 Municipalities Active</span>
        </div>

        <div className="hidden sm:flex pointer-events-auto bg-white/90 backdrop-blur-md text-[#0E2A1D] border border-[#0E2A1D]/15 px-3 py-1.5 rounded-xl shadow-md items-center gap-1.5 text-xs font-semibold">
          <Zap className="w-3.5 h-3.5 text-[#1E5638]" />
          <span>Click any pin to inspect route</span>
        </div>
      </div>

      {/* Floating Map Controls */}
      <div className="absolute top-3 right-3 z-[400] flex flex-col gap-1.5">
        <button
          type="button"
          onClick={handleResetView}
          title="Reset to Full Palm Beach County View"
          className="p-2.5 rounded-xl bg-white/95 hover:bg-[#FAF9F6] text-[#0E2A1D] border border-[#422E22]/15 shadow-md hover:shadow-lg transition-all flex items-center justify-center cursor-pointer group"
          aria-label="Reset map to Palm Beach County"
        >
          <RotateCcw className="w-4 h-4 text-[#0E2A1D] group-hover:rotate-[-45deg] transition-transform" />
        </button>

        <div className="flex flex-col rounded-xl overflow-hidden border border-[#422E22]/15 shadow-md bg-white/95">
          <button
            type="button"
            onClick={handleZoomIn}
            title="Zoom In"
            className="p-2.5 hover:bg-[#FAF9F6] text-[#0E2A1D] transition-colors flex items-center justify-center font-bold text-base cursor-pointer border-b border-[#422E22]/10"
            aria-label="Zoom In"
          >
            +
          </button>
          <button
            type="button"
            onClick={handleZoomOut}
            title="Zoom Out"
            className="p-2.5 hover:bg-[#FAF9F6] text-[#0E2A1D] transition-colors flex items-center justify-center font-bold text-base cursor-pointer"
            aria-label="Zoom Out"
          >
            −
          </button>
        </div>

        <button
          type="button"
          onClick={handleToggleTileStyle}
          title={`Switch to ${mapStyle === "streets" ? "Satellite Aerial" : "Street"} view`}
          className="px-2 py-1.5 rounded-xl bg-white/95 hover:bg-[#FAF9F6] text-[#0E2A1D] border border-[#422E22]/15 shadow-md text-[10px] font-bold tracking-tight uppercase cursor-pointer"
        >
          {mapStyle === "streets" ? "Satellite" : "Streets"}
        </button>
      </div>

      {/* Leaflet Map DOM Node */}
      <div
        ref={mapContainerRef}
        className="w-full h-[380px] sm:h-[440px] lg:h-[480px] z-10 outline-none"
        aria-label="Interactive Palm Beach County Service Area Map"
      />

      {/* Bottom Information Footer Bar */}
      <div className="bg-[#0E2A1D] text-white px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-[#C5A880]/20">
        <div className="flex items-center gap-2 text-[#DFCEB8]">
          <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0" />
          <span className="text-[11px] sm:text-xs">
            <strong>Full County Licensing:</strong> Palm Beach County TR-1992-048 • Zero Travel Surcharge
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-white/75">
          <span>Active Focus: <strong className="text-[#C5A880]">{areas[activeCityIndex]?.city || "PBC"}</strong></span>
          <span>•</span>
          <span>100% Free OpenStreetMap &amp; Esri GIS</span>
        </div>
      </div>
    </div>
  );
}
