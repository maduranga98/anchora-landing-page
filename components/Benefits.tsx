"use client";

import {
  FiDollarSign,
  FiShield,
  FiTrendingUp,
  FiAward,
  FiCheckCircle,
  FiAlertTriangle,
} from "react-icons/fi";

export default function Benefits() {
  const companyBenefits = [
    {
      icon: <FiShield className="w-12 h-12" />,
      title: "Prevent Lawsuits Before They Start",
      description:
        "Catch harassment, discrimination, and hostile work environment issues when they&apos;re still manageable. Handle internally instead of in court.",
      stats: [
        { value: "$75K-$300K", label: "Average harassment lawsuit cost" },
        { value: "18-36 months", label: "Average litigation timeline" },
      ],
      testimonial:
        '"We identified a harassment pattern across 3 departments before any victim filed a complaint. Saved us from a multi-million dollar lawsuit."',
      author: "HR Director, Tech Company",
    },
    {
      icon: <FiDollarSign className="w-12 h-12" />,
      title: "Stop Fraud & Embezzlement",
      description:
        "Your employees see suspicious activity every day. Anchora gives them a safe channel to report before thousands disappear.",
      stats: [
        { value: "$50K-$500K", label: "Typical fraud loss per incident" },
        { value: "18 months", label: "Average time before discovery" },
      ],
      testimonial:
        '"Anonymous tip about expense irregularities led us to a $180K fraud scheme. Without Anchora, we would have never known until the audit."',
      author: "CFO, Manufacturing Company",
    },
    {
      icon: <FiAlertTriangle className="w-12 h-12" />,
      title: "Eliminate Safety Catastrophes",
      description:
        "Floor workers know which equipment is dangerous, which protocols are ignored. Get the truth before OSHA shows up.",
      stats: [
        { value: "$7K-$70K", label: "Per OSHA violation fine" },
        { value: "$2M+", label: "Average serious accident cost" },
      ],
      testimonial:
        '"Employees reported safety concerns anonymously. We fixed issues immediately. 2 months later, OSHA inspection—perfect score."',
      author: "Operations Manager, Construction",
    },
    {
      icon: <FiTrendingUp className="w-12 h-12" />,
      title: "Fix Toxic Culture = Retain Talent",
      description:
        "Identify toxic managers, discriminatory practices, and cultural issues before your best employees quit.",
      stats: [
        { value: "$50K+", label: "Cost to replace one employee" },
        { value: "32%", label: "Higher turnover with poor feedback systems" },
      ],
      testimonial:
        '"Anonymous feedback revealed a manager was driving away top performers. We addressed it. Turnover dropped 40% in that department."',
      author: "CEO, SaaS Startup",
    },
    {
      icon: <FiAward className="w-12 h-12" />,
      title: "Protect Your Reputation",
      description:
        "One media story about harassment or fraud can destroy decades of brand building. Handle scandals before they leak.",
      stats: [
        { value: "-23%", label: "Average stock drop after major scandal" },
        { value: "3-5 years", label: "Time to rebuild reputation" },
      ],
      testimonial:
        '"A potential PR nightmare was flagged and resolved internally in 48 hours. No media. No lawsuits. Just quiet resolution."',
      author: "Communications Director, Fortune 500",
    },
    {
      icon: <FiCheckCircle className="w-12 h-12" />,
      title: "Regulatory Compliance Shield",
      description:
        "Complete audit trail proves you took employee concerns seriously. Essential defense against regulatory investigations.",
      stats: [
        { value: "100%", label: "Documentation coverage" },
        { value: "$0", label: "Additional compliance software needed" },
      ],
      testimonial:
        '"During an EEOC investigation, we showed our Anchora records proving we addressed every complaint. Case dismissed."',
      author: "Legal Counsel, Healthcare",
    },
  ];

  const roiCalculator = {
    yourCompany: [
      { employees: 50, cost: "$50/month", savings: "$37,500-$150,000" },
      { employees: 100, cost: "$100/month", savings: "$75,000-$300,000" },
      { employees: 250, cost: "$250/month", savings: "$187,500-$750,000" },
      { employees: 500, cost: "$500/month", savings: "$375,000-$1,500,000" },
    ],
  };

  return (
    <section
      id="benefits"
      className="section-padding bg-gradient-to-b from-white to-gray-50"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary-teal uppercase tracking-wide mb-4">
            💼 Built for Company Protection
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
            The ROI is <span className="text-primary-teal">Obvious</span>
          </h3>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-8">
            One prevented lawsuit pays for{" "}
            <span className="font-bold underline">decades</span> of Anchora.
            <br />
            One stopped fraud scheme pays for{" "}
            <span className="font-bold underline">centuries</span>.
          </p>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6 max-w-3xl mx-auto">
            <p className="text-2xl font-bold text-green-800">
              Cost: <span className="text-4xl">$1/employee/month</span>
            </p>
            <p className="text-lg text-text-secondary mt-2">
              Value: Preventing{" "}
              <span className="font-bold">
                lawsuits, scandals, fraud, accidents, and regulatory fines
              </span>
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="space-y-12 mb-20">
          {companyBenefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-large overflow-hidden border border-border-light ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } flex flex-col lg:flex`}
            >
              <div className="lg:w-1/3 bg-gradient-to-br from-primary-navy to-primary-teal p-6 md:p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {benefit.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {benefit.title}
                  </h4>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {benefit.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-3"
                      >
                        <div className="text-2xl font-bold text-white">
                          {stat.value}
                        </div>
                        <div className="text-xs text-white/80">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3 p-6 md:p-8">
                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                <div className="bg-background-softGray border-l-4 border-primary-teal p-6 rounded-r-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-3xl">💬</div>
                    <div>
                      <p className="text-text-secondary italic mb-2">
                        {benefit.testimonial}
                      </p>
                      <p className="text-sm font-semibold text-text-tertiary">
                        — {benefit.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="bg-gradient-to-br from-primary-navy to-primary-teal rounded-3xl p-8 md:p-12 text-white mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-5xl font-bold mb-4">
              What's <span className="text-accent-coral">ONE</span> Prevented
              Incident Worth?
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Calculate the value of Anchora for your company size
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="p-4 text-left text-lg font-bold">
                      Company Size
                    </th>
                    <th className="p-4 text-left text-lg font-bold">
                      Anchora Cost/Month
                    </th>
                    <th className="p-4 text-left text-lg font-bold">
                      ONE Prevented Incident Saves
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {roiCalculator.yourCompany.map((row, index) => (
                    <tr key={index} className="border-b border-white/10">
                      <td className="p-4 text-lg font-semibold">
                        {row.employees} employees
                      </td>
                      <td className="p-4 text-lg text-accent-coral font-bold">
                        {row.cost}
                      </td>
                      <td className="p-4 text-lg text-green-300 font-bold">
                        {row.savings}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 text-center">
              <p className="text-2xl font-bold mb-2">
                Payback Period:{" "}
                <span className="text-accent-coral">ONE INCIDENT</span>
              </p>
              <p className="text-lg text-white/80">
                Everything after that is pure profit (and saved reputation)
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-white rounded-2xl shadow-xl p-12 border-4 border-primary-teal">
          <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            The Question Isn't "Can We Afford Anchora?"
          </h3>
          <p className="text-2xl text-text-secondary mb-8">
            The question is:{" "}
            <span className="text-accent-coral font-bold">
              "Can we afford NOT to have it?"
            </span>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-12 py-6 bg-accent-coral text-white rounded-lg font-bold text-xl hover:bg-accent-coral/90 transition-all duration-300 shadow-large hover:shadow-xl transform hover:scale-105"
          >
            <FiShield />
            Protect Your Company Now
          </a>
          <p className="text-sm text-text-tertiary mt-4">
            14-day free trial • No credit card required • Setup in 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
