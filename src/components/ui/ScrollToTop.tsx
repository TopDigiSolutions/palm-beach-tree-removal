"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal button only after scrolling past 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleChatState = (e: Event) => {
      const customEvent = e as CustomEvent<{ isOpen: boolean }>;
      if (customEvent.detail) {
        setIsChatOpen(Boolean(customEvent.detail.isOpen));
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("palmbeach:chatbot", handleChatState);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("palmbeach:chatbot", handleChatState);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const showButton = isVisible && !isChatOpen;

  return (
    <div
      className={`fixed right-4 sm:right-5 bottom-[7.75rem] sm:bottom-[5.5rem] z-40 transition-all duration-300 ease-out ${
        showButton
          ? "opacity-100 translate-y-0 pointer-events-auto scale-100"
          : "opacity-0 translate-y-4 pointer-events-none scale-90"
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        title="Scroll to Top"
        className="w-11 h-11 sm:w-12 sm:h-12 bg-brand hover:bg-brand-hover text-[#C5A880] hover:text-[#DFCEB8] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-[#C5A880]/60 hover:border-[#C5A880]  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
      >
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
      </button>
    </div>
  );
}
