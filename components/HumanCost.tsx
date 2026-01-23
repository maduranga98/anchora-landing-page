// components/HumanCost.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { FiAlertTriangle, FiHeart, FiShield } from 'react-icons/fi';

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
              The Silent Cost
            </h2>
          </div>

          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            When Silence Becomes <span className="text-red-400">Fatal</span>
          </h3>

          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A bank employee in our region took their own life due to unbearable workplace stress.
            <span className="block mt-4 text-white font-semibold">
              They had no safe place to speak.
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
              stat: '1 in 5',
              label: 'employees experience workplace harassment',
              color: 'red',
            },
            {
              stat: '77%',
              label: 'of workers say stress affects their mental health',
              color: 'orange',
            },
            {
              stat: '83%',
              label: 'of toxic workplace issues go unreported',
              color: 'red',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-xl p-6 text-center"
            >
              <div className={`text-4xl md:text-5xl font-bold text-${item.color}-400 mb-3`}>
                {item.stat}
              </div>
              <p className="text-slate-300 text-sm md:text-base">{item.label}</p>
            </div>
          ))}
        </div>

        {/* The Solution Bridge */}
        <div
          className={`bg-gradient-to-br from-teal-500/10 to-blue-500/10 backdrop-blur-sm border border-teal-500/30 rounded-2xl p-8 md:p-12 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <FiHeart className="w-12 h-12 text-teal-400 mx-auto mb-6" />

          <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
            It Doesn&apos;t Have to Be This Way
          </h4>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            VoxWel creates a <span className="text-teal-400 font-semibold">confidential, encrypted safe space</span> where employees can voice concerns before they escalate into crises—protecting mental health, preventing tragedies, and saving lives.
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
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
              <span>Early Warning System</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
