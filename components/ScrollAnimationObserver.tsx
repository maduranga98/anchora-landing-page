"use client";

import { useEffect } from "react";

/**
 * Mounts a single IntersectionObserver that watches every .fade-in-up and
 * .fade-up element on the page. When an element enters the viewport it gets
 * the .visible class, which triggers the CSS transition defined in globals.css.
 *
 * This component renders nothing — it is purely side-effect driven.
 */
export default function ScrollAnimationObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<Element>(".fade-in-up, .fade-up");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
