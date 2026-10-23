"use client";

import React, { useState, useRef, useEffect, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Award,
  Send,
  CheckCircle2,
  UploadCloud,
  Sparkles,
  MessageSquare,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
  X,
  User,
  Trees,
  AlertTriangle,
  Calculator,
  FileCheck,
  Info,
  ChevronDown,
} from "lucide-react";

interface ContactFormProps {
  standalone?: boolean;
  className?: string;
}

export default function ContactForm({
  standalone = true,
  className = "",
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Palm Beach",
    service: "Hazardous Tree Removal",
    urgency: "Standard Inspection (24-48 Hours)",
    date: "",
    time: "Morning (8AM - 12PM)",
    notes: "",
    treeSize: "medium",
    treeCount: "1",
  });

  const [showEstimator, setShowEstimator] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [estimateRefId, setEstimateRefId] = useState("");

  // Custom Calendar State
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [calendarViewDate, setCalendarViewDate] = useState<Date>(new Date());
  const calendarRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Close calendar popover on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Calendar Helper Functions
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setCalendarViewDate(
      new Date(calendarViewDate.getFullYear(), calendarViewDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCalendarViewDate(
      new Date(calendarViewDate.getFullYear(), calendarViewDate.getMonth() + 1, 1)
    );
  };

  const handleSelectDate = (day: number) => {
    const selected = new Date(
      calendarViewDate.getFullYear(),
      calendarViewDate.getMonth(),
      day
    );

    const monthStr = String(selected.getMonth() + 1).padStart(2, "0");
    const dayStr = String(selected.getDate()).padStart(2, "0");
    const dateFormatted = `${selected.getFullYear()}-${monthStr}-${dayStr}`;

    setFormData((prev) => ({ ...prev, date: dateFormatted }));
    setIsCalendarOpen(false);
  };

  const formatDisplayDate = (dateStr: string) => {
    if (!dateStr) return "Select Preferred Date";
    const [y, m, d] = dateStr.split("-").map(Number);
    const dateObj = new Date(y, m - 1, d);
    return dateObj.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleShortcutDate = (offsetDays: number) => {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    const monthStr = String(d.getMonth() + 1).padStart(2, "0");
    const dayStr = String(d.getDate()).padStart(2, "0");
    const dateFormatted = `${d.getFullYear()}-${monthStr}-${dayStr}`;
    setFormData((prev) => ({ ...prev, date: dateFormatted }));
    setIsCalendarOpen(false);
  };

  // Ballpark Estimate Calculation
  const calculateEstimate = () => {
    let base = 650;
    if (formData.service.toLowerCase().includes("crane") || formData.service.toLowerCase().includes("removal")) base = 1200;
    if (formData.service.toLowerCase().includes("stump")) base = 350;
    if (formData.service.toLowerCase().includes("emergency")) base = 1800;
    if (formData.service.toLowerCase().includes("pruning") || formData.service.toLowerCase().includes("trimming")) base = 550;
    if (formData.service.toLowerCase().includes("palm")) base = 480;
    if (formData.service.toLowerCase().includes("clearing")) base = 2200;

    let heightMultiplier = 1;
    if (formData.treeSize === "medium") heightMultiplier = 1.35;
    if (formData.treeSize === "large") heightMultiplier = 2.0;
    if (formData.treeSize === "massive") heightMultiplier = 3.2;

    const count = parseInt(formData.treeCount, 10) || 1;
    const low = Math.round((base * heightMultiplier * count) / 50) * 50;
    const high = Math.round((low * 1.35) / 50) * 50;

    return { low, high };
  };

  const dynamicEstimate = calculateEstimate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const ref = `PBTR-${Math.floor(100000 + Math.random() * 900000)}`;
      setEstimateRefId(ref);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1100);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      city: "Palm Beach",
      service: "Hazardous Tree Removal",
      urgency: "Standard Inspection (24-48 Hours)",
      date: "",
      time: "Morning (8AM - 12PM)",
      notes: "",
      treeSize: "medium",
      treeCount: "1",
    });
    setUploadedFile(null);
    setShowEstimator(false);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Palm Beach Tree Removal, I submitted an estimate request (Ref #${estimateRefId}) for ${formData.service} in ${formData.city}. My phone is ${formData.phone}.`
  );

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentYear = calendarViewDate.getFullYear();
  const currentMonth = calendarViewDate.getMonth();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);
  const firstDay = getFirstDayOfMonth(currentYear, currentMonth);

  const formBody = (
    <div className={`estimate-form rounded-3xl bg-white border border-slate-200 shadow-sm  p-6 sm:p-8 lg:p-10 text-slate-900 relative ${className}`}>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Header */}
          <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-slate-50 border border-slate-300 text-[10px] font-mono text-emerald-800 uppercase tracking-wider mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                <span>ISA Certified On-Site Evaluation</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                Request Your Written Estimate
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Guaranteed fixed-rate proposal with zero-lawn-damage protocol.
              </p>
            </div>
            <Sparkles className="w-6 h-6 text-emerald-800 hidden sm:block shrink-0" />
          </div>

          {/* Row 1: Full Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="estimate-name" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
                <User className="w-3.5 h-3.5 text-emerald-800" />
                <span>Full Name *</span>
              </label>
              <input
                type="text"
                id="estimate-name"
                name="name"
                required
                placeholder="e.g. Harrison Vance"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 hover:border-slate-300 focus:border-slate-300 focus:ring-2 focus:ring-emerald-700/20 text-slate-900 placeholder-slate-500 text-sm transition-all outline-none"
              />
            </div>

            <div>
              <label htmlFor="estimate-phone" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-800" />
                <span>Phone Number *</span>
              </label>
              <input
                type="tel"
                id="estimate-phone"
                name="phone"
                required
                placeholder="(561) 555-0199"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 hover:border-slate-300 focus:border-slate-300 focus:ring-2 focus:ring-emerald-700/20 text-slate-900 placeholder-slate-500 text-sm transition-all outline-none"
              />
            </div>
          </div>

          {/* Row 2: Email & Property Area */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="estimate-email" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-800" />
                <span>Email Address *</span>
              </label>
              <input
                type="email"
                id="estimate-email"
                name="email"
                required
                placeholder="harrison@estate.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 hover:border-slate-300 focus:border-slate-300 focus:ring-2 focus:ring-emerald-700/20 text-slate-900 placeholder-slate-500 text-sm transition-all outline-none"
              />
            </div>

            <div>
              <label htmlFor="estimate-city" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-800" />
                <span>Property City / Area *</span>
              </label>
              <div className="relative">
                <select
                  id="estimate-city"
                name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 hover:border-slate-300 focus:border-slate-300 focus:ring-2 focus:ring-emerald-700/20 text-slate-900 text-sm transition-all outline-none appearance-none cursor-pointer pr-10"
                >
                  <option value="Palm Beach" className="bg-slate-50 text-slate-900">Palm Beach Island</option>
                  <option value="Boca Raton" className="bg-slate-50 text-slate-900">Boca Raton</option>
                  <option value="Wellington" className="bg-slate-50 text-slate-900">Wellington Equestrian</option>
                  <option value="Delray Beach" className="bg-slate-50 text-slate-900">Delray Beach</option>
                  <option value="Boynton Beach" className="bg-slate-50 text-slate-900">Boynton Beach</option>
                  <option value="Highland Beach" className="bg-slate-50 text-slate-900">Highland Beach</option>
                  <option value="West Palm Beach" className="bg-slate-50 text-slate-900">West Palm Beach</option>
                  <option value="Jupiter" className="bg-slate-50 text-slate-900">Jupiter / Juno Beach</option>
                  <option value="Manalapan" className="bg-slate-50 text-slate-900">Manalapan / Ocean Ridge</option>
                  <option value="Lake Worth" className="bg-slate-50 text-slate-900">Lake Worth Beach</option>
                </select>
                <ChevronDown className="w-4 h-4 text-emerald-800 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Row 3: Primary Service & Urgency */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="estimate-service" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
                <Trees className="w-3.5 h-3.5 text-emerald-800" />
                <span>Primary Service Needed *</span>
              </label>
              <div className="relative">
                <select
                  id="estimate-service"
                name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 hover:border-slate-300 focus:border-slate-300 focus:ring-2 focus:ring-emerald-700/20 text-slate-900 text-sm transition-all outline-none appearance-none cursor-pointer pr-10"
                >
                  <option value="Hazardous Tree Removal" className="bg-slate-50">Hazardous 100-Ton Crane Tree Removal</option>
                  <option value="Tree Trimming & Pruning" className="bg-slate-50">Precision Tree Trimming & Pruning</option>
                  <option value="Emergency Storm Response" className="bg-slate-50">24/7 Emergency Storm Hazard Clearance</option>
                  <option value="Palm Sculpting" className="bg-slate-50">Luxury Diamond Palm Sculpting</option>
                  <option value="Stump Grinding" className="bg-slate-50">Sub-Grade Hydraulic Stump Grinding</option>
                  <option value="Whole Estate Clearing" className="bg-slate-50">Whole Estate Canopy & Ground Clearing</option>
                </select>
                <ChevronDown className="w-4 h-4 text-emerald-800 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div>
              <label htmlFor="estimate-urgency" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-emerald-800" />
                <span>Response Urgency *</span>
              </label>
              <div className="relative">
                <select
                  id="estimate-urgency"
                name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 hover:border-slate-300 focus:border-slate-300 focus:ring-2 focus:ring-emerald-700/20 text-slate-900 text-sm transition-all outline-none appearance-none cursor-pointer pr-10"
                >
                  <option value="Emergency Response (Immediate)" className="bg-slate-50 text-emerald-700 font-bold">⚡ Emergency Response (Immediate 24/7)</option>
                  <option value="Standard Inspection (24-48 Hours)" className="bg-slate-50">Next 24–48 Hours (Standard)</option>
                  <option value="Flexible Inspection Date" className="bg-slate-50">Flexible / Upcoming Project Schedule</option>
                </select>
                <ChevronDown className="w-4 h-4 text-emerald-800 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Interactive Ballpark Estimator Toggle Tool */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-300">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-emerald-800" />
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Instant Ballpark Cost Estimator
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowEstimator(!showEstimator)}
                className="text-xs font-bold text-emerald-800 hover:text-emerald-800 underline cursor-pointer"
              >
                {showEstimator ? "Hide Estimator" : "Show Ballpark Range"}
              </button>
            </div>

            {showEstimator && (
              <div className="mt-3 pt-3 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 animate-fadeIn">
                <div>
                  <label htmlFor="estimate-treeSize" className="block text-[10px] uppercase font-bold text-emerald-800 mb-1">
                    Specimen Height
                  </label>
                  <select
                    id="estimate-treeSize"
                name="treeSize"
                    value={formData.treeSize}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-900 outline-none"
                  >
                    <option value="small">Small (&lt;20 ft)</option>
                    <option value="medium">Medium (20-40 ft)</option>
                    <option value="large">Large (40-65 ft)</option>
                    <option value="massive">Massive (65+ ft)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="estimate-treeCount" className="block text-[10px] uppercase font-bold text-emerald-800 mb-1">
                    Tree Quantity
                  </label>
                  <select
                    id="estimate-treeCount"
                name="treeCount"
                    value={formData.treeCount}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-900 outline-none"
                  >
                    <option value="1">1 Specimen</option>
                    <option value="2">2 - 3 Trees</option>
                    <option value="5">4 - 7 Trees</option>
                    <option value="10">8+ Trees</option>
                  </select>
                </div>

                <div className="flex flex-col justify-end">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-300 text-center">
                    <span className="text-[9px] uppercase font-bold text-emerald-800 block">Preliminary Range</span>
                    <span className="font-serif font-bold text-sm sm:text-base text-slate-900">
                      ${dynamicEstimate.low.toLocaleString()} – ${dynamicEstimate.high.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Row 4: Custom Calendar Date Picker & Preferred Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Custom Styled Calendar Dropdown */}
            <div className="relative" ref={calendarRef}>
              <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
                <CalendarIcon className="w-3.5 h-3.5 text-emerald-800" />
                <span>Preferred Inspection Date</span>
              </label>

              {/* Trigger Input */}
              <button
                type="button"
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 hover:border-slate-300 focus:border-slate-300 focus:ring-2 focus:ring-emerald-700/20 text-left text-slate-900 text-sm transition-all flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-2 truncate">
                  <CalendarIcon className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span className={formData.date ? "font-semibold text-slate-900" : "text-slate-600"}>
                    {formatDisplayDate(formData.date)}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-emerald-800 group-hover:text-emerald-800 px-2 py-0.5 rounded-md bg-emerald-50 border border-slate-200 shrink-0">
                  {isCalendarOpen ? "Close" : "Pick Date"}
                </span>
              </button>

              {/* Calendar Popover Dropdown */}
              {isCalendarOpen && (
                <div className="absolute top-full left-0 right-0 sm:right-auto sm:w-80 mt-2 z-[90] p-4 rounded-2xl bg-slate-50 border-2 border-slate-300 shadow-xl  animate-fadeIn">

                  {/* Month Navigation */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
                    <button
                      type="button"
                      onClick={handlePrevMonth}
                      className="p-1.5 rounded-lg hover:bg-emerald-50 text-emerald-800 transition-colors cursor-pointer"
                      aria-label="Previous Month"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <div className="text-sm font-bold font-serif text-emerald-800">
                      {monthNames[currentMonth]} {currentYear}
                    </div>

                    <button
                      type="button"
                      onClick={handleNextMonth}
                      className="p-1.5 rounded-lg hover:bg-emerald-50 text-emerald-800 transition-colors cursor-pointer"
                      aria-label="Next Month"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Weekday Headers */}
                  <div className="grid grid-cols-7 gap-1 text-center mb-2">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((dayName, idx) => (
                      <div key={idx} className="text-[10px] font-bold text-emerald-800 uppercase">
                        {dayName}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Days */}
                  <div className="grid grid-cols-7 gap-1 text-center">
                    {Array.from({ length: firstDay }).map((_, idx) => (
                      <div key={`empty-${idx}`} className="w-8 h-8 mx-auto" />
                    ))}

                    {Array.from({ length: daysInMonth }).map((_, idx) => {
                      const dayNumber = idx + 1;
                      const cellDate = new Date(currentYear, currentMonth, dayNumber);
                      cellDate.setHours(0, 0, 0, 0);

                      const isPast = cellDate < today;
                      const isToday = cellDate.getTime() === today.getTime();

                      const monthStr = String(currentMonth + 1).padStart(2, "0");
                      const dayStr = String(dayNumber).padStart(2, "0");
                      const formattedCellDate = `${currentYear}-${monthStr}-${dayStr}`;
                      const isSelected = formData.date === formattedCellDate;

                      return (
                        <button
                          key={dayNumber}
                          type="button"
                          disabled={isPast}
                          onClick={() => handleSelectDate(dayNumber)}
                          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg text-xs font-semibold flex items-center justify-center transition-all cursor-pointer mx-auto ${isSelected
                              ? "bg-emerald-100 text-[#285640] font-extrabold shadow-lg scale-110 ring-2 ring-white/60"
                              : isPast
                                ? "text-slate-400 cursor-not-allowed"
                                : isToday
                                  ? "border border-slate-300 text-emerald-800 hover:bg-slate-50"
                                  : "text-slate-900 hover:bg-slate-50 hover:text-emerald-800"
                            }`}
                        >
                          {dayNumber}
                        </button>
                      );
                    })}
                  </div>

                  {/* Quick Date Shortcuts */}
                  <div className="pt-3 mt-3 border-t border-slate-200 flex items-center justify-between gap-1 text-[11px]">
                    <button
                      type="button"
                      onClick={() => handleShortcutDate(0)}
                      className="px-2.5 py-1 rounded-md bg-emerald-50 hover:bg-emerald-50 text-emerald-800 transition-colors cursor-pointer"
                    >
                      Today
                    </button>
                    <button
                      type="button"
                      onClick={() => handleShortcutDate(1)}
                      className="px-2.5 py-1 rounded-md bg-emerald-50 hover:bg-emerald-50 text-emerald-800 transition-colors cursor-pointer"
                    >
                      Tomorrow
                    </button>
                    <button
                      type="button"
                      onClick={() => handleShortcutDate(3)}
                      className="px-2.5 py-1 rounded-md bg-emerald-50 hover:bg-emerald-50 text-emerald-800 transition-colors cursor-pointer"
                    >
                      +3 Days
                    </button>
                    <button
                      type="button"
                      onClick={() => handleShortcutDate(7)}
                      className="px-2.5 py-1 rounded-md bg-emerald-50 hover:bg-emerald-50 text-emerald-800 transition-colors cursor-pointer"
                    >
                      +1 Week
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Preferred Time Slot */}
            <div>
              <label htmlFor="estimate-time" className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
                <Clock className="w-3.5 h-3.5 text-emerald-800" />
                <span>Preferred Time Slot</span>
              </label>
              <div className="relative">
                <select
                  id="estimate-time"
                name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 hover:border-slate-300 focus:border-slate-300 focus:ring-2 focus:ring-emerald-700/20 text-slate-900 text-sm transition-all outline-none appearance-none cursor-pointer pr-10"
                >
                  <option value="Morning (8AM - 12PM)" className="bg-slate-50">Morning (8:00 AM - 12:00 PM)</option>
                  <option value="Afternoon (12PM - 4PM)" className="bg-slate-50">Afternoon (12:00 PM - 4:00 PM)</option>
                  <option value="Late Afternoon (4PM - 6PM)" className="bg-slate-50">Late Afternoon (4:00 PM - 6:00 PM)</option>
                </select>
                <ChevronDown className="w-4 h-4 text-emerald-800 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Photo / Layout Upload Zone */}
          <div>
            <label className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
              <span className="flex items-center gap-1.5">
                <UploadCloud className="w-3.5 h-3.5 text-emerald-800" />
                <span>Upload Tree Photos / Layout (Optional)</span>
              </span>
              <span className="text-[10px] text-slate-600 normal-case">Helps crane setup analysis</span>
            </label>

            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-2xl p-4 text-center transition-all ${isDragging
                  ? "border-slate-300 bg-slate-50 scale-[1.01]"
                  : "border-slate-200 hover:border-slate-300 bg-slate-50"
                }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*,.pdf"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />

              {uploadedFile ? (
                <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-300 text-left relative z-20">
                  <div className="flex items-center gap-2.5 truncate">
                    <FileCheck className="w-5 h-5 text-emerald-700 shrink-0" />
                    <div className="truncate">
                      <div className="text-xs font-bold text-slate-900 truncate">{uploadedFile.name}</div>
                      <div className="text-[10px] text-slate-600">
                        {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    className="p-1 rounded-lg hover:bg-emerald-50 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
                    aria-label="Remove uploaded file"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-1.5 pointer-events-none">
                  <UploadCloud className="w-7 h-7 text-emerald-800" />
                  <span className="text-xs font-semibold text-slate-900">
                    Click to browse or Drag &amp; Drop tree photos
                  </span>
                  <span className="text-[11px] text-slate-600">
                    PNG, JPG, PDF up to 25MB &bull; 100% Confidential
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Special Instructions / Notes */}
          <div>
            <label htmlFor="estimate-notes" className="block text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
              Project Scope, Tree Details or Gate Access Codes
            </label>
            <textarea
              id="estimate-notes"
                name="notes"
              rows={3}
              placeholder="Detail tree proximity to roof/pool, gate width constraints, or specific arborist instructions..."
              value={formData.notes}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 hover:border-slate-300 focus:border-slate-300 focus:ring-2 focus:ring-emerald-700/20 text-slate-900 placeholder-slate-500 text-sm transition-all outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-8 rounded-xl estimate-submit text-[#285640] font-extrabold text-base sm:text-lg shadow-xl hover:shadow-sm transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer group disabled:opacity-50 border border-slate-300"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2.5">
                <span className="w-5 h-5 border-2 border-[#285640] border-t-transparent rounded-full animate-spin" />
                <span>Transmitting Scope to Dispatch...</span>
              </span>
            ) : (
              <>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[2.5]" />
                <span>Submit Free Estimate Request</span>
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-600 text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
            <span>Guaranteed Fixed Pricing &bull; $5,000,000 Insurance &bull; No Obligation</span>
          </div>
        </form>
      ) : (
        /* Submission Confirmation State */
        <div className="py-8 px-2 sm:px-4 text-center space-y-6 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-700 flex items-center justify-center mx-auto shadow-xl">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-widest block mb-1">
              ESTIMATE REQUEST LOGGED
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-2">
              Thank You, {formData.name || "Valued Estate Owner"}!
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Your inquiry has been assigned Reference ID:{" "}
              <strong className="text-emerald-800 font-mono text-base px-2 py-0.5 rounded bg-emerald-50 border border-slate-300">{estimateRefId}</strong>.
              An ISA Certified Master Arborist will review your scope and contact you shortly.
            </p>
          </div>

          {/* Summary Card */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-300 text-left text-xs space-y-2.5 max-w-md mx-auto">
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-600">Service Division:</span>
              <span className="font-bold text-slate-900">{formData.service}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-600">Property Area:</span>
              <span className="font-bold text-slate-900">{formData.city}</span>
            </div>
            <div className="flex justify-between border-b border-slate-200 pb-1.5">
              <span className="text-slate-600">Preferred Date:</span>
              <span className="font-bold text-emerald-800">{formatDisplayDate(formData.date)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Response Urgency:</span>
              <span className="font-bold text-emerald-700">{formData.urgency}</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            {siteConfig.phone && (
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-100 hover:bg-emerald-100 text-[#285640] font-extrabold text-sm shadow-lg transition-colors"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call Dispatch Directly</span>
              </a>
            )}

            {siteConfig.phoneRaw && (
              <a
                href={`https://wa.me/${siteConfig.phoneRaw.replace("+", "")}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand hover:bg-brand-hover border border-slate-300 text-slate-900 font-bold text-sm shadow-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                <span>Send via WhatsApp</span>
              </a>
            )}
          </div>

          <button
            onClick={handleReset}
            className="text-xs text-slate-600 hover:text-emerald-800 underline transition-colors pt-4 block mx-auto cursor-pointer"
          >
            Submit another property scope
          </button>
        </div>
      )}

    </div>
  );

  if (!standalone) {
    return formBody;
  }

  return (
    <section
      id="contact"
      aria-label="Contact Us & Free Estimate Request"
      className="relative py-20 sm:py-28 lg:py-32 bg-brand text-white overflow-hidden"
    >
      {/* Ambient Decorative Lighting */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-30">
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="reveal-item inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand border border-[#C5A880]/40  mb-4 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-[#C5A880] animate-pulse" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#DFCEB8] uppercase">
              ESTATE INSPECTION &amp; 24/7 DISPATCH
            </span>
          </div>

          <h2 className="reveal-item delay-100 font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Request Your Free On-Site Estimate
          </h2>

          <p className="reveal-item delay-200 text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
            Connect directly with an ISA Master Arborist. We provide prompt on-site assessments, guaranteed fixed pricing, zero lawn damage protocols, and $5M liability coverage.
          </p>
        </div>

        {/* 2-Column Grid for Standalone Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

          {/* Left Column: Direct Info & Authority Badges */}
          <div className="lg:col-span-5 space-y-6">

            {/* 24/7 Dispatch Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-brand border border-[#C5A880]/35 shadow-2xl  relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Phone className="w-24 h-24 text-[#C5A880]" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                  {siteConfig.phone ? "Live Dispatch Available Now" : "Online Dispatch Active 24/7"}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1 font-serif">
                {siteConfig.phone ? "Direct Emergency Hotline" : "Rapid On-Site Assessment"}
              </h3>
              <p className="text-xs text-white/70 mb-4">
                {siteConfig.phone
                  ? "Rapid emergency response for fallen trees or storm damage across Palm Beach County."
                  : "Submit property details. An ISA Certified Arborist reviews incoming estate scopes within hours."}
              </p>
              {siteConfig.phone ? (
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#C5A880] hover:bg-[#DFCEB8] text-[#285640] font-extrabold text-base shadow-lg transition-all w-full justify-center"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call {siteConfig.phone}</span>
                </a>
              ) : (
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/5 border border-[#C5A880]/30 text-xs text-[#DFCEB8]">
                  <Sparkles className="w-4 h-4 text-[#C5A880] shrink-0" />
                  <span>Priority scheduling applied to all online estimate submissions.</span>
                </div>
              )}
            </div>

            {/* Contact Details List */}
            <div className="p-6 sm:p-7 rounded-3xl bg-brand border border-white/10 shadow-xl  space-y-5">
              {siteConfig.email && (
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#DFCEB8] font-bold uppercase tracking-wider">
                      Written Estimates Email
                    </div>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-[#C5A880] transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#DFCEB8] font-bold uppercase tracking-wider">
                    Palm Beach Office &amp; Operations Yard
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-white/90 leading-tight">
                    {siteConfig.address.street}, {siteConfig.address.city}, FL {siteConfig.address.zip}
                  </div>
                  <div className="text-[11px] text-white/60 mt-0.5">
                    Dispatch Yard: {siteConfig.yardAddress.street}, {siteConfig.yardAddress.city}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand border border-[#C5A880]/40 flex items-center justify-center text-[#C5A880] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#DFCEB8] font-bold uppercase tracking-wider">
                    Service Hours
                  </div>
                  <div className="text-xs sm:text-sm text-white font-medium">
                    {siteConfig.hours.regular}
                  </div>
                  <div className="text-xs text-emerald-400 font-bold mt-0.5">
                    {siteConfig.hours.emergency}
                  </div>
                </div>
              </div>
            </div>

            {/* Authority Trust Chips */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#C5A880] shrink-0" />
                <div>
                  <div className="text-[10px] text-white/60 uppercase font-bold">Protected</div>
                  <div className="text-xs font-bold text-white">$5M Insurance</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
                <Award className="w-6 h-6 text-[#C5A880] shrink-0" />
                <div>
                  <div className="text-[10px] text-white/60 uppercase font-bold">Certified</div>
                  <div className="text-xs font-bold text-white">ISA Arborist</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            {formBody}
          </div>

        </div>
      </div>
    </section>
  );
}
