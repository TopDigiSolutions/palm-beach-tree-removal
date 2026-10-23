"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    // Check if reduced motion is preferred
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document.querySelectorAll(".reveal-item").forEach((el) => {
        el.classList.add("revealed");
      });
      return;
    }

    const observerCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -60px 0px",
      threshold: 0.1,
    });

    const elements = document.querySelectorAll(".reveal-item");
    elements.forEach((el) => {
      if (el.getBoundingClientRect().top > window.innerHeight) el.classList.add("reveal-pending");
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
