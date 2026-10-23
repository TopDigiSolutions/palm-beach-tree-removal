"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import {
  Phone,
  CheckCircle,
  Calculator,
  ShieldCheck,
  Clock,
  ArrowRight,
  Sparkles,
  Trees,
  Send,
  User,
  Mail,
  MapPin,
} from "lucide-react";

export default function EstimateCalculator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: "tree-removal",
    treeCount: "1",
    treeHeight: "medium", // small, medium, large, massive
    proximity: "near-roof",
    propertyArea: siteConfig.serviceAreas[0] || "Palm Beach, FL",
    urgency: "standard",
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Ballpark estimator calculation
  const calculateEstimate = () => {
    let base = 650;
    if (formData.serviceType === "tree-removal") base = 1200;
    if (formData.serviceType === "stump-grinding") base = 350;
    if (formData.serviceType === "emergency-tree") base = 1800;
    if (formData.serviceType === "tree-trimming-pruning") base = 550;
    if (formData.serviceType === "hedge-trimming") base = 400;
    if (formData.serviceType === "debris-hauling") base = 450;

    let heightMultiplier = 1;
    if (formData.treeHeight === "medium") heightMultiplier = 1.35;
    if (formData.treeHeight === "large") heightMultiplier = 2.0;
    if (formData.treeHeight === "massive") heightMultiplier = 3.1;

    let proxMultiplier = 1;
    if (formData.proximity === "near-roof") proxMultiplier = 1.3;
    if (formData.proximity === "near-pool") proxMultiplier = 1.2;
    if (formData.proximity === "power-lines") proxMultiplier = 1.4;

    const count = parseInt(formData.treeCount, 10) || 1;
    const low = Math.round((base * heightMultiplier * proxMultiplier * count) / 50) * 50;
    const high = Math.round((low * 1.35) / 50) * 50;

    return { low, high };
  };

  const estimate = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="estimate"
      aria-label="Request a Free Written Estimate"
      className="py-20 lg:py-28 bg-[#FAF9F6] border-t border-[#38251B]/15"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="reveal-item text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-[#38251B] mb-3">
              <span className="w-8 h-0.5 bg-emerald-700" />
              <span>Transparent Pricing &amp; Rapid Booking</span>
              <span className="w-8 h-0.5 bg-emerald-700" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2E654B] tracking-tight">
              Instant Ballpark Estimator
            </h2>
            <p className="text-sm sm:text-base text-[#0E1410]/80 mt-3 max-w-xl mx-auto leading-relaxed">
              Calculate an instant preliminary scope or connect directly with our master arborists for a guaranteed fixed-price estate inspection.
            </p>
          </div>

          {/* Card Container */}
          <div className="reveal-item delay-200 bg-white rounded-3xl border border-[#38251B]/15 shadow-2xl overflow-hidden">
            {/* Top Quick Contact Bar */}
            <div className="bg-brand px-6 sm:px-8 py-4 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-emerald-800">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-white/90">
                <Clock className="w-4 h-4 text-emerald-100" />
                <span>Estimates Reviewed Within 2 Hours &bull; 24/7 Urgent Storm Dispatch</span>
              </div>

              {siteConfig.phone ? (
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="text-xs sm:text-sm font-bold text-emerald-100 hover:text-white flex items-center gap-1.5 transition-colors shrink-0"
                >
                  <Phone className="w-3.5 h-3.5 fill-current text-emerald-700" />
                  <span>{siteConfig.phone}</span>
                </a>
              ) : (
                <span className="text-xs text-emerald-100 font-semibold shrink-0">
                  Priority Online Queue
                </span>
              )}
            </div>

            {/* Estimator Body */}
            <div className="p-6 sm:p-10">
              {!submitted ? (
                <div>
                  {/* Step Progress Bar */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#38251B]/10">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all ${
                          step === 1
                            ? "bg-brand text-emerald-100 ring-2 ring-emerald-200"
                            : "bg-[#F7F4EC] text-[#2E654B]"
                        }`}
                      >
                        1
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#2E654B]">
                        Scope &amp; Specimen Details
                      </span>
                    </div>

                    <div className="w-12 sm:w-24 h-0.5 bg-[#38251B]/15" />

                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all ${
                          step === 2
                            ? "bg-brand text-emerald-100 ring-2 ring-emerald-200"
                            : "bg-[#F7F4EC] text-[#2E654B]"
                        }`}
                      >
                        2
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-[#2E654B]">
                        Estate Location &amp; Contact
                      </span>
                    </div>
                  </div>

                  {step === 1 && (
                    <div className="space-y-6 animate-fadeIn">
                      {/* Service Selection */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#2E654B] mb-2.5">
                          1. Select Primary Service Division
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                          {siteConfig.services.map((srv) => (
                            <button
                              key={srv.id}
                              type="button"
                              onClick={() =>
                                setFormData({ ...formData, serviceType: srv.id })
                              }
                              className={`p-3.5 rounded-2xl text-left border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                                formData.serviceType === srv.id
                                  ? "bg-brand text-white border-[#2E654B] shadow-lg scale-[1.01]"
                                  : "bg-[#FAF9F6] text-[#0E1410] border-[#38251B]/15 hover:border-[#357650]/50"
                              }`}
                            >
                              <div className="font-bold flex items-center justify-between">
                                <span>{srv.title}</span>
                                {formData.serviceType === srv.id && (
                                  <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                                )}
                              </div>
                              <div
                                className={`text-[10px] mt-1 ${
                                  formData.serviceType === srv.id
                                    ? "text-emerald-100"
                                    : "text-[#38251B]"
                                }`}
                              >
                                {srv.tag}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Tree Size & Count */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-1">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#2E654B] mb-2">
                            2. Approximate Specimen Height
                          </label>
                          <select
                            value={formData.treeHeight}
                            onChange={(e) =>
                              setFormData({ ...formData, treeHeight: e.target.value })
                            }
                            className="w-full p-3.5 rounded-xl border border-[#38251B]/20 bg-[#FAF9F6] text-sm text-[#0E1410] focus:ring-2 focus:ring-[#2E654B] outline-none cursor-pointer"
                          >
                            <option value="small">Small / Under 20 ft (Young palms, crape myrtles)</option>
                            <option value="medium">Medium / 20–40 ft (Queen palms, juvenile oaks)</option>
                            <option value="large">Large / 40–65 ft (Mature royal palms, slash pines)</option>
                            <option value="massive">Massive / Over 65 ft (Historic live oaks, grand pines)</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#2E654B] mb-2">
                            3. Number of Trees Involved
                          </label>
                          <select
                            value={formData.treeCount}
                            onChange={(e) =>
                              setFormData({ ...formData, treeCount: e.target.value })
                            }
                            className="w-full p-3.5 rounded-xl border border-[#38251B]/20 bg-[#FAF9F6] text-sm text-[#0E1410] focus:ring-2 focus:ring-[#2E654B] outline-none cursor-pointer"
                          >
                            <option value="1">1 Specimen Tree</option>
                            <option value="2">2 to 3 Trees</option>
                            <option value="5">4 to 7 Trees</option>
                            <option value="10">8+ Trees (Estate Compound Package)</option>
                          </select>
                        </div>
                      </div>

                      {/* Proximity / Site Obstacles */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#2E654B] mb-2">
                          4. Site Access &amp; Adjacent Structures
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {[
                            { id: "near-roof", label: "Directly Over Roof or Loggia" },
                            { id: "near-pool", label: "Adjacent to Pool, Seawall or Screen" },
                            { id: "power-lines", label: "Close to Power Lines or Utilities" },
                          ].map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() =>
                                setFormData({ ...formData, proximity: item.id })
                              }
                              className={`p-3 rounded-xl text-left border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                                formData.proximity === item.id
                                  ? "bg-[#38251B] text-white border-[#38251B] shadow-sm"
                                  : "bg-[#FAF9F6] text-[#0E1410] border-[#38251B]/15 hover:border-[#38251B]/40"
                              }`}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Dynamic Ballpark Calculation Card */}
                      <div className="p-6 sm:p-7 rounded-3xl bg-emerald-50 text-slate-900 border border-emerald-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-5">
                        <div>
                          <span className="text-xs uppercase font-bold tracking-wider text-emerald-800 flex items-center gap-1.5">
                            <Calculator className="w-4 h-4 text-emerald-700" />
                            <span>Estimated Preliminary Ballpark</span>
                          </span>
                          <div className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-1">
                            ${estimate.low.toLocaleString()} &ndash; ${estimate.high.toLocaleString()}
                          </div>
                          <span className="text-[11px] text-slate-600 mt-1 block">
                            *Includes crew mobilization, crane rigging, turf protection, and complete debris haul-away.
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="w-full sm:w-auto px-7 py-4 rounded-xl bg-brand hover:bg-brand-hover text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer hover:scale-[1.02]"
                        >
                          <span>Schedule Free Inspection</span>
                          <ArrowRight className="w-4 h-4 text-[#285640]" />
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <form onSubmit={handleSubmit} className="space-y-6 animate-fadeIn">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2E654B] mb-2">
                            <User className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Full Name *</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Sterling Montgomery"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full p-3.5 rounded-xl border border-[#38251B]/20 bg-[#FAF9F6] text-sm text-[#0E1410] focus:ring-2 focus:ring-[#2E654B] outline-none"
                          />
                        </div>

                        <div>
                          <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2E654B] mb-2">
                            <Phone className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Phone Number *</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="(561) 555-0192"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className="w-full p-3.5 rounded-xl border border-[#38251B]/20 bg-[#FAF9F6] text-sm text-[#0E1410] focus:ring-2 focus:ring-[#2E654B] outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2E654B] mb-2">
                            <Mail className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Email Address *</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="estate@palmbeach.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full p-3.5 rounded-xl border border-[#38251B]/20 bg-[#FAF9F6] text-sm text-[#0E1410] focus:ring-2 focus:ring-[#2E654B] outline-none"
                          />
                        </div>

                        <div>
                          <label className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2E654B] mb-2">
                            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Palm Beach County District *</span>
                          </label>
                          <select
                            value={formData.propertyArea}
                            onChange={(e) =>
                              setFormData({ ...formData, propertyArea: e.target.value })
                            }
                            className="w-full p-3.5 rounded-xl border border-[#38251B]/20 bg-[#FAF9F6] text-sm text-[#0E1410] focus:ring-2 focus:ring-[#2E654B] outline-none cursor-pointer"
                          >
                            {siteConfig.serviceAreas.map((area) => (
                              <option key={area} value={area}>
                                {area}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#2E654B] mb-2">
                          Property Street Address (Optional for initial ballpark)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 1420 S Ocean Blvd, Palm Beach, FL"
                          value={formData.address}
                          onChange={(e) =>
                            setFormData({ ...formData, address: e.target.value })
                          }
                          className="w-full p-3.5 rounded-xl border border-[#38251B]/20 bg-[#FAF9F6] text-sm text-[#0E1410] focus:ring-2 focus:ring-[#2E654B] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#2E654B] mb-2">
                          Project Details &amp; Specific Timing
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Describe tree species, gate width limitations, emergency concerns, or specific timing requirements..."
                          value={formData.notes}
                          onChange={(e) =>
                            setFormData({ ...formData, notes: e.target.value })
                          }
                          className="w-full p-3.5 rounded-xl border border-[#38251B]/20 bg-[#FAF9F6] text-sm text-[#0E1410] focus:ring-2 focus:ring-[#2E654B] outline-none resize-none"
                        />
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-4 border-t border-[#38251B]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="text-xs sm:text-sm font-bold text-[#38251B] hover:underline cursor-pointer"
                        >
                          &larr; Back to Scope Details
                        </button>

                        <button
                          type="submit"
                          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand hover:bg-brand-hover text-white font-extrabold text-base shadow-xl transition-all cursor-pointer hover:scale-[1.02]"
                        >
                          Request Written Inspection
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              ) : (
                /* Submission Confirmation */
                <div className="py-12 text-center max-w-lg mx-auto space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-brand-soft text-[#357650] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E654B]">
                    Estimate Request Dispatched
                  </h3>
                  <p className="text-sm sm:text-base text-[#0E1410]/85 leading-relaxed">
                    Thank you, <strong>{formData.name || "valued client"}</strong>. Your project specifications have been assigned to our Palm Beach County operations supervisor. An ISA Certified Master Arborist will review your property details and contact you within <strong>2 hours</strong>.
                  </p>

                  <div className="p-4 rounded-2xl bg-[#F7F4EC] border border-[#38251B]/15 text-xs sm:text-sm text-[#0E1410]">
                    {siteConfig.phone ? (
                      <>
                        For immediate 24/7 storm or emergency dispatch, call directly at{" "}
                        <a
                          href={`tel:${siteConfig.phoneRaw}`}
                          className="font-bold text-[#2E654B] underline"
                        >
                          {siteConfig.phone}
                        </a>
                        .
                      </>
                    ) : (
                      <>
                        Your estimate request is queued for rapid evaluation by an ISA Certified Master Arborist.
                      </>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                    }}
                    className="inline-block text-xs font-bold text-[#38251B] hover:underline pt-4 cursor-pointer"
                  >
                    Submit Another Estimate Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

