"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingDemoCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <Link
        href="/demo"
        className="flex items-center gap-2 bg-indigo-600 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all"
      >
        <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
        Request a Demo
      </Link>
    </div>
  );
}
