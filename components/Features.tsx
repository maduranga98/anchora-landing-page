"use client";

import Image from "next/image";
import {
  Palette,
  MessageCircle,
  AlertTriangle,
  BarChart2,
  Shield,
  GitBranch,
  CheckCircle2,
  ArrowRight,
  Zap,
} from "lucide-react";

/**
 * VOXWEL FEATURES SECTION - UPDATED VERSION
 *
 * Updated with accurate workflow management description
 */

export default function Features() {
  // Three Walls - Your Core Product (Landscape Screenshots)
  const threeWalls = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Wall",
      tagline: "Celebrate Success",
      description:
        "Team achievements, recognition, and positive workplace highlights. Build culture through public appreciation and milestone celebrations.",
      image: "/screenshots/creative-wall.png",
      altText:
        "VoxWel anonymous employee feedback software creative wall interface for team recognition and workplace celebrations",
      color: "#1ABC9C",
      benefits: [
        "Public team recognition",
        "Anniversary celebrations",
        "Achievement milestones",
        "Positive culture building",
      ],
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Problems & Solutions Wall",
      tagline: "Anonymous Reporting",
      description:
        "100% anonymous, military-grade encrypted reporting. Employees can safely report harassment, fraud, safety violations without fear of retaliation.",
      image: "/screenshots/problems-wall.png",
      altText:
        "Anonymous workplace harassment reporting tool with military-grade encrypted complaint submission and crisis prevention",
      color: "#EF4444",
      benefits: [
        "Complete anonymity guaranteed",
        "Military-grade encryption",
        "7-state workflow tracking",
        "Priority-based escalation",
      ],
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Team Discussions Wall",
      tagline: "Open Communication",
      description:
        "General workplace communication, team collaboration, and everyday questions. Like Slack, but integrated with your crisis prevention system.",
      image: "/screenshots/discussions-wall.png",
      altText:
        "Employee communication platform team discussions wall for workplace collaboration and feedback",
      color: "#3B82F6",
      benefits: [
        "Real-time team chat",
        "Department channels",
        "File sharing support",
        "Question & answer threads",
      ],
    },
  ];

  // Dashboard Features (Square/Landscape Screenshots)
  const dashboardFeatures = [
    {
      icon: <BarChart2 className="w-7 h-7" />,
      title: "Real-Time Analytics",
      tagline: "Employee Happiness Score",
      description:
        "Track engagement, response times, and sentiment analysis across departments. See which departments need attention before issues escalate.",
      image: "/screenshots/dashboard-analytics.png",
      altText:
        "Anonymous reporting software analytics dashboard showing employee happiness score and sentiment analysis",
      color: "#8B5CF6",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Admin Dashboard",
      tagline: "Crisis Prevention HQ",
      description:
        "Centralized view of all issues: critical, open, in-progress. Route problems to the right people instantly with complete oversight.",
      image: "/screenshots/admin-dashboard.png",
      altText:
        "Crisis prevention admin dashboard for managing anonymous employee complaints and workplace issues",
      color: "#6366F1",
    },
    {
      icon: <GitBranch className="w-7 h-7" />,
      title: "Workflow Management",
      tagline: "Complete Issue Control",
      description:
        "Full admin controls for every reported issue. Change status (Open → Acknowledged → In Progress → Resolved), set priority levels (Critical/High/Medium/Low), assign to departments, set due dates, and add public admin comments. Pin important posts or archive resolved issues.",
      image: "/screenshots/workflow-management.png",
      altText:
        "Anonymous complaint workflow management system with priority escalation and department routing",
      color: "#10B981",
    },
  ];

  const quickFeatures = [
    "Military Encryption",
    "QR Onboarding",
    "File Attachments",
    "Department Filters",
    "Trend Detection",
    "Role-Based Access",
    "Audit Trail",
    "Email Notifications",
  ];

  return (
    <section
      id="features"
      className="section-padding bg-gradient-to-b from-white via-gray-50/30 to-white"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-primary-teal uppercase tracking-wide mb-3">
            Complete Anonymous Workplace Reporting Platform
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            Three-Wall Crisis Prevention System: Anonymous Reporting, Communication & Recognition
          </h2>
          <p className="text-lg md:text-xl text-text-secondary">
            The complete workplace communication system designed to prevent
            crises before they happen
          </p>
        </div>

        {/* Three Walls - Primary Features (Large Display) */}
        <div className="space-y-12 md:space-y-20 mb-20 md:mb-32">
          {threeWalls.map((wall, index) => (
            <div key={index} className="group">
              {/* Wall Header */}
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div
                  className="p-3 rounded-xl shadow-lg"
                  style={{ backgroundColor: `${wall.color}15` }}
                >
                  <div style={{ color: wall.color }}>{wall.icon}</div>
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl md:text-3xl font-bold text-text-primary">
                    {wall.title}
                  </h4>
                  <p
                    className="text-base md:text-lg font-semibold"
                    style={{ color: wall.color }}
                  >
                    {wall.tagline}
                  </p>
                </div>
              </div>

              {/* Screenshot - Large, Prominent Display */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 mb-6 border-4 border-white">
                {/* Aspect ratio optimized for landscape screenshots */}
                <div className="relative aspect-[16/10]">
                  <Image
                    src={wall.image}
                    alt={wall.altText}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    priority={index === 0}
                    quality={90}
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6">
                  <div
                    className="px-4 py-2 rounded-full font-semibold text-sm shadow-lg backdrop-blur-md"
                    style={{
                      backgroundColor: `${wall.color}F0`,
                      color: "white",
                    }}
                  >
                    Wall {index + 1} of 3
                  </div>
                </div>
              </div>

              {/* Content Below Screenshot */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Description */}
                <div>
                  <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                    {wall.description}
                  </p>
                </div>

                {/* Benefits */}
                <div>
                  <ul className="space-y-3">
                    {wall.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                          style={{ color: wall.color }}
                        />
                        <span className="text-text-secondary text-sm md:text-base">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Decorative Blur Element */}
              <div
                className="absolute -z-10 left-1/2 -translate-x-1/2 w-3/4 h-32 rounded-full blur-3xl opacity-10"
                style={{ backgroundColor: wall.color }}
              ></div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12 md:mb-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          <h4 className="text-xl md:text-2xl font-bold text-text-primary px-4 text-center whitespace-nowrap">
            Powerful Features for Crisis Prevention
          </h4>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        </div>

        {/* Dashboard Features - Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {dashboardFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Screenshot */}
              <div className="relative bg-gray-100">
                {/* Aspect ratio for square/landscape dashboard screenshots */}
                <div className="relative aspect-square">
                  <Image
                    src={feature.image}
                    alt={feature.altText}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    quality={85}
                  />
                </div>

                {/* Icon Badge */}
                <div className="absolute top-4 left-4">
                  <div
                    className="p-2.5 rounded-xl shadow-lg backdrop-blur-md"
                    style={{ backgroundColor: `${feature.color}30` }}
                  >
                    <div style={{ color: feature.color }}>{feature.icon}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h5 className="text-lg md:text-xl font-bold text-text-primary mb-1">
                  {feature.title}
                </h5>
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: feature.color }}
                >
                  {feature.tagline}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Features - Pills */}
        <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-3xl p-8 md:p-12 mb-16">
          <h4 className="text-2xl md:text-3xl font-bold text-center text-text-primary mb-2">
            Plus Everything Else You Need
          </h4>
          <p className="text-center text-text-secondary mb-8 max-w-2xl mx-auto">
            Complete workplace platform with military-grade security
          </p>

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {quickFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="px-5 py-3 bg-white rounded-full border-2 border-gray-200 hover:border-primary-teal hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-teal group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-text-secondary">
                    {feature}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-primary-teal to-[#16A085] rounded-3xl p-10 md:p-16 shadow-2xl text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
            <Zap className="w-4 h-4" />
            <span>Ready in 24 Hours</span>
          </div>

          <h4 className="text-2xl md:text-4xl font-bold mb-4">
            Start preventing workplace crises today
          </h4>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join companies protecting their workplace with VoxWel's
            comprehensive three-wall system
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 md:px-10 py-3 md:py-4 bg-white text-primary-teal rounded-full font-semibold text-base md:text-lg hover:bg-gray-100 transition-colors shadow-xl group"
            >
              See Pricing
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 md:px-10 py-3 md:py-4 border-2 border-white text-white rounded-full font-semibold text-base md:text-lg hover:bg-white/10 transition-colors"
            >
              Request Demo
            </a>
          </div>

          <p className="text-xs md:text-sm text-white/70 mt-6">
            14-day free trial • No credit card required • Setup in 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
