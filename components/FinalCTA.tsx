"use client";

import Link from "next/link";

const trustStats = [
  "14-day free trial",
  "No credit card required",
  "Setup in 24 hours",
  "Cancel anytime",
];

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="bg-indigo-600 py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* H2 */}
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Your employees have something to say. Give them a safe way to say it.
        </h2>

        {/* Sub-copy */}
        <p className="mt-6 text-indigo-200 text-lg max-w-2xl mx-auto leading-relaxed">
          Join companies building healthier, more transparent workplaces with
          VoxWel&apos;s anonymous employee reporting platform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            href="/demo"
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors w-full sm:w-auto"
          >
            Book a Demo →
          </Link>
          <Link
            href="/demo"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors w-full sm:w-auto"
          >
            Start Free Trial
          </Link>
        </div>

        {/* Trust stats */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-8 text-indigo-200 text-sm">
          {trustStats.map((stat) => (
            <span key={stat}>✓ {stat}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
