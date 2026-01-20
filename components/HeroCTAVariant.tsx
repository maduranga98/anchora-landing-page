"use client";

import { useState, useEffect } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { getVariant, trackVariantConversion, EXPERIMENTS } from "@/utils/abTesting";

interface HeroCTAVariantProps {
  onBookDemo: () => void;
  onLearnMore: () => void;
}

export default function HeroCTAVariant({ onBookDemo, onLearnMore }: HeroCTAVariantProps) {
  const [ctaText, setCTAText] = useState("Book a Free Demo");
  const [ctaStyle, setCTAStyle] = useState("control");

  useEffect(() => {
    // Get A/B test variants
    const textVariant = getVariant(EXPERIMENTS.HERO_CTA);
    const styleVariant = getVariant(EXPERIMENTS.HERO_CTA_STYLE);

    setCTAText(textVariant.name);
    setCTAStyle(styleVariant.id);
  }, []);

  const handleBookDemo = () => {
    // Track conversion for both experiments
    trackVariantConversion(EXPERIMENTS.HERO_CTA.id, "cta_clicked");
    trackVariantConversion(EXPERIMENTS.HERO_CTA_STYLE.id, "cta_clicked");
    onBookDemo();
  };

  const handleLearnMore = () => {
    trackVariantConversion(EXPERIMENTS.HERO_CTA.id, "learn_more_clicked");
    trackVariantConversion(EXPERIMENTS.HERO_CTA_STYLE.id, "learn_more_clicked");
    onLearnMore();
  };

  const getButtonStyles = () => {
    if (ctaStyle === "variant_a") {
      // Variant A: Coral background
      return "bg-accent-coral hover:bg-red-500";
    }
    // Control: Teal background (default)
    return "bg-primary-teal hover:bg-teal-500";
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-5 pt-4 sm:pt-5 md:pt-6 lg:pt-8">
      <button
        onClick={handleBookDemo}
        className={`group w-full sm:w-auto px-6 sm:px-7 md:px-8 lg:px-10 xl:px-12 py-3 sm:py-3.5 md:py-4 lg:py-5 ${getButtonStyles()} text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl rounded-lg sm:rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 sm:gap-3`}
      >
        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        <span>{ctaText}</span>
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
      </button>
      <button
        onClick={handleLearnMore}
        className="w-full sm:w-auto px-6 sm:px-7 md:px-8 lg:px-10 xl:px-12 py-3 sm:py-3.5 md:py-4 lg:py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-sm sm:text-base md:text-lg lg:text-xl rounded-lg sm:rounded-xl border-2 border-white/30 hover:border-white/50 shadow-xl transition-all duration-300 hover:scale-105"
      >
        Learn More
      </button>
    </div>
  );
}
