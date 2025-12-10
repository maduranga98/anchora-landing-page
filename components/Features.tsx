// components/Features.tsx (Updated with your screenshots)

"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FiShield,
  FiAlertTriangle,
  FiEye,
  FiAward,
  FiUsers,
  FiCheckCircle,
  FiZap,
} from "react-icons/fi";

export default function Features() {
  const [activeWall, setActiveWall] = useState("problems");

  const threeWalls = [
    {
      id: "creative",
      title: "Creative Wall",
      tagline: "Celebrate Success",
      description:
        "Team achievements, recognition, and positive workplace highlights. Build culture through public appreciation.",
      screenshot: "/screenshots/creative-wall.png",
      color: "from-purple-500 to-pink-600",
      icon: <FiAward className="w-6 h-6" />,
      benefits: [
        "Public team recognition",
        "Anniversary celebrations",
        "Achievement milestones",
        "Positive culture building",
      ],
    },
    {
      id: "problems",
      title: "Problems & Solutions Wall",
      tagline: "Anonymous Reporting",
      description:
        "100% anonymous, military-grade encrypted reporting. Employees can safely report harassment, fraud, safety violations without fear.",
      screenshot: "/screenshots/problems-wall.png",
      color: "from-red-500 to-orange-600",
      icon: <FiShield className="w-6 h-6" />,
      benefits: [
        "Complete anonymity guaranteed",
        "Military-grade encryption",
        "7-state workflow tracking",
        "Priority-based escalation",
      ],
    },
    {
      id: "discussions",
      title: "Team Discussions Wall",
      tagline: "Open Communication",
      description:
        "General workplace communication, team collaboration, and everyday questions. Like Slack, but integrated with your feedback system.",
      screenshot: "/screenshots/discussions-wall.png",
      color: "from-blue-500 to-cyan-600",
      icon: <FiUsers className="w-6 h-6" />,
      benefits: [
        "Real-time team chat",
        "Department channels",
        "File sharing support",
        "Question & answer threads",
      ],
    },
  ];

  const keyFeatures = [
    {
      icon: <FiEye className="w-12 h-12" />,
      title: "Real-Time Analytics",
      stat: "Employee Happiness Score",
      description:
        "Track engagement, response times, and sentiment. See which departments need attention before issues escalate.",
      screenshot: "/screenshots/dashboard-analytics.png",
    },
    {
      icon: <FiAlertTriangle className="w-12 h-12" />,
      title: "Admin Dashboard",
      stat: "Crisis Prevention HQ",
      description:
        "Centralized view of all issues: critical, open, in-progress. Route problems to the right people instantly.",
      screenshot: "/screenshots/admin-dashboard.png",
    },
    {
      icon: <FiShield className="w-12 h-12" />,
      title: "Workflow Management",
      stat: "Open → Resolved",
      description:
        "7-state workflow with status tracking, priority assignment, and department routing. Never lose track of an issue.",
      screenshot: "/screenshots/workflow-management.png",
    },
  ];

  return (
    <section
      id="features"
      className="section-padding bg-gradient-to-b from-white to-gray-50"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary-teal uppercase tracking-wide mb-4 flex items-center justify-center gap-2">
            <FiZap className="w-5 h-5" />
            See VoxWel in Action
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Three Walls. One Platform.
          </h3>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            The complete workplace communication system designed to prevent
            crises before they happen
          </p>
        </div>

        {/* Three-Wall Interactive Display */}
        <div className="mb-20">
          {/* Wall Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {threeWalls.map((wall) => (
              <button
                key={wall.id}
                onClick={() => setActiveWall(wall.id)}
                className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 ${
                  activeWall === wall.id
                    ? `bg-gradient-to-r ${wall.color} text-white shadow-2xl scale-105`
                    : "bg-white text-gray-700 hover:shadow-lg border-2 border-gray-200"
                }`}
              >
                {wall.icon}
                <div className="text-left">
                  <div className="text-sm font-bold">{wall.title}</div>
                  <div className="text-xs opacity-80">{wall.tagline}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Wall Display */}
          {threeWalls.map((wall) => (
            <div
              key={wall.id}
              className={`transition-all duration-500 ${
                activeWall === wall.id ? "block" : "hidden"
              }`}
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-gray-100">
                <div className="grid lg:grid-cols-5 gap-8 p-8 md:p-12">
                  {/* Left: Details - Takes 2 columns */}
                  <div className="lg:col-span-2 flex flex-col justify-center">
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${wall.color} text-white w-fit mb-6`}
                    >
                      {wall.icon}
                      <span className="font-bold text-sm">{wall.title}</span>
                    </div>

                    <h4 className="text-3xl font-bold text-gray-900 mb-4">
                      {wall.tagline}
                    </h4>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {wall.description}
                    </p>

                    <div className="space-y-3">
                      {wall.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <FiCheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Screenshot - Takes 3 columns for more prominence */}
                  <div className="lg:col-span-3 relative">
                    <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 group">
                      <Image
                        src={wall.screenshot}
                        alt={`${wall.title} interface`}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                        priority={activeWall === wall.id}
                      />
                      <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/10 rounded-2xl pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features Grid with Screenshots */}
        <div className="mb-16">
          <h4 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Powerful Features for{" "}
            <span className="text-red-600">Crisis Prevention</span>
          </h4>

          <div className="grid md:grid-cols-3 gap-8">
            {keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-100 group"
              >
                {/* Screenshot Section - Enhanced for better visibility */}
                <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 border-b-2 border-gray-100">
                  <Image
                    src={feature.screenshot}
                    alt={feature.title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-gray-900/5 pointer-events-none"></div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="text-primary-teal mb-3 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h5>
                  <div className="text-sm font-semibold text-primary-teal mb-3">
                    {feature.stat}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Features Grid */}
        <div className="bg-gradient-to-r from-primary-teal to-primary-navy rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-10">
            <h4 className="text-2xl md:text-3xl font-bold mb-4">
              Plus Everything Else You Need
            </h4>
            <p className="text-white/90 max-w-2xl mx-auto">
              Complete workplace platform with military-grade security
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {[
              "QR Code Onboarding",
              "File Attachments",
              "Department Filters",
              "Trend Detection",
              "Role-Based Access",
              "Audit Trail",
              "Email Notifications",
              "Mobile Responsive",
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <FiCheckCircle className="w-8 h-8 mb-2" />
                <div className="text-sm font-medium">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
