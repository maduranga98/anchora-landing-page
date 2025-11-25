"use client";

import {
  FiShield,
  FiAlertTriangle,
  FiEye,
  FiLock,
  FiFileText,
  FiUsers,
  FiTrendingUp,
  FiActivity,
  FiCheckCircle,
  FiAward,
} from "react-icons/fi";

export default function Features() {
  const protectionFeatures = [
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Anonymous Problem Reporting",
      description:
        "Employees report harassment, fraud, safety issues without fear. 100% anonymity-even admins can't identify posters.",
      benefit: "Stop retaliation. Get the truth.",
      color: "from-green-500 to-green-700",
    },
    {
      icon: <FiAlertTriangle className="w-8 h-8" />,
      title: "Critical Issue Escalation",
      description:
        "7-state workflow with 4 priority levels. Critical issues auto-escalate to leadership within minutes.",
      benefit: "Catch crises before they explode.",
      color: "from-red-500 to-red-700",
    },
    {
      icon: <FiEye className="w-8 h-8" />,
      title: "Real-Time Risk Dashboard",
      description:
        "See patterns across departments. Identify toxic managers, repeated violations, and brewing problems.",
      benefit: "Spot danger before lawsuits arrive.",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: <FiFileText className="w-8 h-8" />,
      title: "Immutable Audit Trail",
      description:
        "Complete documentation of every report, action, and response. Perfect for legal protection and compliance.",
      benefit: "Defend your company in court.",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Department-Level Privacy",
      description:
        "Contains sensitive issues within HR/management. Prevent company-wide panic while handling problems.",
      benefit: "Resolve internally, avoid media.",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Trend Analysis & Predictions",
      description:
        "AI identifies emerging patterns: repeated harassment complaints, increasing safety concerns, fraud indicators.",
      benefit: "Prevent disasters before they start.",
      color: "from-orange-500 to-orange-700",
    },
  ];

  const complianceFeatures = [
    {
      icon: <FiLock className="w-6 h-6" />,
      title: "Whistleblower Protection",
      description:
        "Military-grade encryption for anonymous tips. Meets all legal whistleblower protection standards.",
      badge: "🛡️ Legal Shield",
    },
    {
      icon: <FiFileText className="w-6 h-6" />,
      title: "Evidence Collection",
      description:
        "Photos, videos, documents attached to reports. Time-stamped, immutable, admissible as evidence.",
      badge: "⚖️ Court-Ready",
    },
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      title: "Response Tracking",
      description:
        "Document every action taken. Prove due diligence to regulators, lawyers, and investigators.",
      badge: "📋 Compliance",
    },
    {
      icon: <FiActivity className="w-6 h-6" />,
      title: "Moderation System",
      description:
        "3-strike policy for misuse. Keeps platform professional while protecting legitimate reporters.",
      badge: "⚡ Quality Control",
    },
  ];

  const uniqueAdvantages = [
    {
      title: "The Silent Whistleblower",
      description:
        "Your employees ALREADY know about fraud, harassment, and violations. VoxWel gives them a safe way to tell you—before lawyers, media, or regulators find out.",
      stat: "67%",
      statLabel:
        "of workplace violations are witnessed by multiple employees but never reported",
    },
    {
      title: "Reputation Insurance",
      description:
        "Handle scandals internally. One media story about harassment or fraud can destroy years of brand building. VoxWel keeps problems contained.",
      stat: "$2.4M",
      statLabel:
        "average cost of a major workplace scandal (lawsuits + reputation damage)",
    },
    {
      title: "Legal Documentation",
      description:
        "When lawsuits happen, you need proof you took action. VoxWel provides timestamped records of every report and response.",
      stat: "100%",
      statLabel:
        "audit trail coverage for legal defense and regulatory compliance",
    },
  ];

  return (
    <section
      id="features"
      className="section-padding bg-linear-to-b from-white to-gray-50"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-[#1ABC9C] uppercase tracking-wide mb-4">
            🛡️ Your Company's Defense System
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Catch the <span className="text-red-600">Storm</span> Before It Hits
          </h3>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto">
            Every feature is designed to{" "}
            <span className="font-bold underline">surface hidden problems</span>{" "}
            before they become lawsuits, scandals, or criminal investigations.
          </p>
        </div>

        {/* Core Protection Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {protectionFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200"
            >
              <div className={`bg-linear-to-r ${feature.color} p-6`}>
                <div className="text-white mb-3">{feature.icon}</div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h4>
              </div>

              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 text-green-700 font-semibold bg-green-50 px-4 py-2 rounded-lg">
                  <FiCheckCircle className="shrink-0" />
                  <span className="text-sm">{feature.benefit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance & Legal Section */}
        <div className="bg-linear-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white mb-20">
          <div className="text-center mb-12">
            <h4 className="text-2xl md:text-3xl font-bold mb-4">
              Built for <span className="text-[#1ABC9C]">Legal Protection</span>{" "}
              & Compliance
            </h4>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
              When regulatory investigations or lawsuits arrive, VoxWel
              provides the documentation trail you need to defend your company.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {complianceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#1ABC9C]/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#1ABC9C]/20 rounded-lg flex items-center justify-center text-[#1ABC9C]">
                    {feature.icon}
                  </div>
                  <span className="text-xs font-semibold">{feature.badge}</span>
                </div>
                <h5 className="text-lg font-bold mb-2">{feature.title}</h5>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Unique Advantages */}
        <div className="mb-20">
          <h4 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Why VoxWel is <span className="text-[#1ABC9C]">Different</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {uniqueAdvantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-[#1ABC9C]"
              >
                <div className="mb-6">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1ABC9C] mb-2">
                    {advantage.stat}
                  </div>
                  <div className="text-sm text-gray-600">
                    {advantage.statLabel}
                  </div>
                </div>
                <h5 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h5>
                <p className="text-gray-700 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="bg-linear-to-r from-[#1ABC9C] to-[#2D3E50] rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-10">
            <h4 className="text-2xl md:text-3xl font-bold mb-4">
              Plus Everything Else You Need
            </h4>
            <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
              Beyond risk management, VoxWel includes all the tools for a
              complete employee voice platform.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl mb-2">🎨</div>
              <div className="font-semibold">Creative Wall</div>
              <div className="text-sm text-white/80">
                Celebrate wins & ideas
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💬</div>
              <div className="font-semibold">Team Discussions</div>
              <div className="text-sm text-white/80">Collaborate easily</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📊</div>
              <div className="font-semibold">Analytics Dashboard</div>
              <div className="text-sm text-white/80">Real-time insights</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📱</div>
              <div className="font-semibold">QR Onboarding</div>
              <div className="text-sm text-white/80">Instant setup</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📎</div>
              <div className="font-semibold">File Attachments</div>
              <div className="text-sm text-white/80">Photos & documents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🏢</div>
              <div className="font-semibold">Departments</div>
              <div className="text-sm text-white/80">Organized structure</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">❤️</div>
              <div className="font-semibold">Reactions</div>
              <div className="text-sm text-white/80">Express feedback</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🔐</div>
              <div className="font-semibold">Role-Based Access</div>
              <div className="text-sm text-white/80">Secure permissions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
