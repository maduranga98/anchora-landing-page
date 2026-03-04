"use client";

import Image from "next/image";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const navbarHeight = window.innerWidth >= 768 ? 64 : 56;
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.scrollY - navbarHeight - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-6 py-24 text-center">
        {/* H1 — primary SEO keyword target */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          Give every employee a safe voice —{" "}
          <span className="text-indigo-600">
            before problems become lawsuits.
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mt-6">
          VoxWel gives employees a confidential, encrypted channel to report
          harassment, fraud, and safety violations — so you can act before it
          escalates into a crisis, a lawsuit, or a headline.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <button
            onClick={scrollToContact}
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
          >
            Book a Free Demo →
          </button>
          <button
            onClick={scrollToContact}
            className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-slate-400 transition-colors w-full sm:w-auto"
          >
            Start 14-Day Free Trial
          </button>
        </div>

        {/* Trust micro-copy row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-slate-500 text-sm">
          <span>✓ No credit card required</span>
          <span>✓ GDPR compliant</span>
          <span>✓ Live in 24 hours</span>
          <span>✓ 100% anonymous</span>
        </div>

        {/* Hero Visual — Browser Chrome Mockup */}
        <div className="mt-16 max-w-4xl mx-auto">
          {/* Browser top bar */}
          <div className="bg-slate-800 rounded-t-xl px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 shrink-0" />
            <div className="w-3 h-3 rounded-full bg-yellow-400 shrink-0" />
            <div className="w-3 h-3 rounded-full bg-green-500 shrink-0" />
            <div className="flex-1 mx-3 bg-slate-700 rounded px-3 py-1 text-xs text-slate-400 text-left truncate">
              app.voxwel.com/dashboard
            </div>
          </div>
          {/* Screenshot */}
          <div className="shadow-2xl rounded-b-xl overflow-hidden border-x border-b border-slate-200">
            <Image
              src="/screenshots/creative-wall.avif"
              alt="VoxWel anonymous employee reporting dashboard"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
