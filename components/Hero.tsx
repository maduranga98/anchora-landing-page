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

  const trustItems = [
    "No credit card required",
    "GDPR compliant",
    "Live in 24 hours",
    "100% anonymous",
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* LEFT — Text (3 cols) */}
          <div className="lg:col-span-3">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-indigo-100">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full pulse-ring"></span>
              Anonymous Employee Reporting Platform
            </div>

            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Give every employee a{" "}
              <span className="text-indigo-600">safe voice</span> before
              problems become lawsuits.
            </h1>

            {/* Sub-headline */}
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              VoxWel gives employees a confidential, encrypted channel to report
              harassment, fraud, and safety violations so you can act before it
              escalates into a crisis, a lawsuit, or a headline.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={scrollToContact}
                className="bg-indigo-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 text-base"
              >
                Book a Free Demo →
              </button>
              <button
                onClick={scrollToContact}
                className="border-2 border-slate-200 text-slate-700 font-semibold px-8 py-4 rounded-xl hover:border-slate-300 transition-all text-base"
              >
                Start 14-Day Free Trial
              </button>
            </div>

            {/* Trust micro-copy */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {trustItems.map((item) => (
                <span
                  key={item}
                  className="text-sm text-slate-500 flex items-center gap-1.5"
                >
                  <svg
                    className="w-4 h-4 text-emerald-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — Product screenshot (2 cols) */}
          <div className="lg:col-span-2 float">
            {/* Browser chrome mockup */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
              {/* Chrome bar */}
              <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-slate-400 ml-2 font-mono">
                  app.voxwel.com/problems
                </div>
              </div>
              {/* Screenshot */}
              <Image
                src="/screenshots/problems-wall.avif"
                alt="VoxWel anonymous reports dashboard showing employee reports with priority levels and anonymous verification"
                width={800}
                height={560}
                className="w-full"
                style={{ objectFit: "cover", objectPosition: "top" }}
                priority
              />
            </div>
            {/* Caption */}
            <p className="text-center text-xs text-slate-400 mt-3">
              Anonymous Reports Dashboard — visible only to HR admins
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
