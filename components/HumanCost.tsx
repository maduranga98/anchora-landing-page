'use client';

import { useEffect, useRef, useState } from 'react';
import { FiAlertTriangle, FiHeart, FiShield } from 'react-icons/fi';
import Link from 'next/link';

export default function HumanCost() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Dark overlay for emotional gravity */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Subtle red accent (danger/urgency) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

      <div className="section-container relative z-10">
        {/* Emotional Hook */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <FiAlertTriangle className="w-8 h-8 text-red-400" />
            <h2 className="text-sm font-bold text-red-400 uppercase tracking-wider">
              The Hidden Crisis
            </h2>
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            When Companies Don&apos;t Care,{' '}
            <span className="text-red-400">Employees Pay the Price</span>
          </h3>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Workplace pressure is pushing employees to breaking points every single day.
            <span className="block mt-4 text-white font-semibold">
              Most companies only act after it&apos;s too late.
            </span>
          </p>
        </div>

        {/* Statistics Grid */}
        <div
          className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            {
              stat: '83%',
              label: 'of workplace stress goes unreported due to fear',
              color: 'red',
            },
            {
              stat: '120K',
              label: 'deaths per year attributed to workplace stress',
              color: 'red',
            },
            {
              stat: '77%',
              label: 'of workers say stress affects their mental health',
              color: 'orange',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6 text-center hover:border-slate-600/50 transition-all group"
            >
              <div className={`text-4xl md:text-5xl font-bold ${
                item.color === 'red' ? 'text-red-400' : 'text-orange-400'
              } mb-3 group-hover:scale-110 transition-transform`}>
                {item.stat}
              </div>
              <p className="text-slate-300 text-sm md:text-base">{item.label}</p>
            </div>
          ))}
        </div>

        {/* The Problem Statement */}
        <div
          className={`bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8 md:p-12 mb-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            The Companies That Ignore This Reality Face Devastating Consequences
          </h4>

          <div className="grid md:grid-cols-2 gap-6 text-slate-300">
            <div className="space-y-3">
              <p className="flex items-start gap-3">
                <FiAlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span><strong className="text-white">Mental health crises</strong> from unbearable workplace pressure</span>
              </p>
              <p className="flex items-start gap-3">
                <FiAlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span><strong className="text-white">Massive turnover</strong> as burned-out employees quit</span>
              </p>
              <p className="flex items-start gap-3">
                <FiAlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span><strong className="text-white">$1M+ lawsuits</strong> for negligence and duty of care violations</span>
              </p>
            </div>
            <div className="space-y-3">
              <p className="flex items-start gap-3">
                <FiAlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span><strong className="text-white">Reputation destruction</strong> that makes recruiting impossible</span>
              </p>
              <p className="flex items-start gap-3">
                <FiAlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span><strong className="text-white">Lost productivity</strong> from traumatized remaining employees</span>
              </p>
              <p className="flex items-start gap-3">
                <FiAlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <span><strong className="text-white">Preventable tragedies</strong> that could have been stopped</span>
              </p>
            </div>
          </div>
        </div>

        {/* The Solution Bridge */}
        <div
          className={`bg-gradient-to-br from-teal-500/10 to-blue-500/10 backdrop-blur-sm border border-teal-500/30 rounded-2xl p-8 md:p-12 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <FiHeart className="w-12 h-12 text-teal-400 mx-auto mb-6" />

          <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Smart Companies Act Before the Crisis
          </h4>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            VoxWel creates a <span className="text-teal-400 font-semibold">confidential, encrypted safe space</span> where employees can report workplace pressure, stress, and toxic conditions <span className="text-teal-400 font-semibold">before they reach breaking point</span>—protecting lives, preventing crises, and saving millions in potential damages.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400 mb-8">
            <div className="flex items-center gap-2">
              <FiShield className="text-teal-400" />
              <span>Military-Grade Encryption</span>
            </div>
            <div className="flex items-center gap-2">
              <FiShield className="text-teal-400" />
              <span>100% Anonymous Reporting</span>
            </div>
            <div className="flex items-center gap-2">
              <FiShield className="text-teal-400" />
              <span>24-48 Hour Response</span>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/blogs/workplace-pressure-mental-health-crisis-prevention"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold text-lg rounded-xl transition-all shadow-lg hover:shadow-teal-500/50 hover:scale-105"
          >
            Learn How to Protect Your Team
            <FiAlertTriangle className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
