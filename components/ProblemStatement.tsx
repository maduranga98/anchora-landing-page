"use client";

import {
  FiAlertCircle,
  FiDollarSign,
  FiUsers,
  FiFileText,
  FiAlertTriangle,
  FiEyeOff,
  FiActivity,
  FiTrendingDown,
} from "react-icons/fi";
import { Eye, AlertTriangle, Activity, Shield } from "lucide-react";

export default function ProblemStatement() {
  const hiddenProblems = [
    {
      icon: <FiDollarSign className="w-10 h-10" />,
      title: "Expense Fraud & Corruption",
      realExample:
        '"3 employees noticed suspicious expense claims. Nobody reported it."',
      consequence: "6 months later: $250K missing + police investigation",
      color: "from-red-500 to-red-700",
    },
    {
      icon: <FiUsers className="w-10 h-10" />,
      title: "Workplace Harassment",
      realExample:
        '"Multiple people witnessed inappropriate behavior. Nobody spoke up."',
      consequence:
        "Result: $180K lawsuit settlement + 2 years of media coverage",
      color: "from-orange-500 to-orange-700",
    },
    {
      icon: <FiAlertTriangle className="w-10 h-10" />,
      title: "Safety Violations",
      realExample:
        '"Workers knew equipment was dangerous. Management never told."',
      consequence:
        "Outcome: Serious accident + OSHA investigation + business shutdown",
      color: "from-yellow-600 to-yellow-800",
    },
    {
      icon: <FiFileText className="w-10 h-10" />,
      title: "Regulatory Non-Compliance",
      realExample:
        '"Team members saw documents being falsified. Stayed silent out of fear."',
      consequence:
        "Discovery: $2M fine + criminal charges + license suspension",
      color: "from-purple-600 to-purple-800",
    },
    {
      icon: <FiEyeOff className="w-10 h-10" />,
      title: "Data Breaches & Privacy",
      realExample:
        '"IT staff noticed security gaps. Reported internally, nothing happened."',
      consequence:
        "3 months later: Major breach + class action lawsuit + reputation destroyed",
      color: "from-indigo-600 to-indigo-800",
    },
    {
      icon: <FiTrendingDown className="w-10 h-10" />,
      title: "Toxic Management",
      realExample:
        '"Everyone knew Manager X was driving people to quit. HR never acted."',
      consequence:
        "18 months: Lost 40% of department + $500K+ in recruitment costs",
      color: "from-pink-600 to-pink-800",
    },
  ];

  return (
    <section
      id="problem"
      className="section-padding bg-linear-to-b from-gray-50 to-white"
    >
      <div className="section-container">
        {/* Shocking Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 border border-red-300 rounded-full text-red-700 text-sm font-bold mb-6">
            <FiAlertCircle className="animate-pulse" />
            What Your Employees Know (But Won't Tell You)
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            By the Time <span className="text-red-600">YOU</span> Find Out,
            <br />
            <span className="text-red-600">It's Already Too Late</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-8">
            Your employees see these problems{" "}
            <span className="font-bold underline">every single day</span>.
            <br />
            But traditional channels are broken. Fear of retaliation keeps them
            silent.
          </p>

          <div className="bg-linear-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg max-w-3xl mx-auto">
            <p className="text-sm md:text-base lg:text-lg text-gray-800">
              <span className="font-bold text-red-600">
                Critical Reality Check:
              </span>{" "}
              The average employee witnesses 2-3 serious workplace issues per
              year. Less than 10% ever report them. Those silent issues are
              destroying your company-
              <span className="font-bold">you just don't know it yet.</span>
            </p>
          </div>
        </div>

        {/* Real Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {hiddenProblems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group"
            >
              <div className={`bg-linear-to-r ${problem.color} p-6`}>
                <div className="text-white mb-3">{problem.icon}</div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                  {problem.title}
                </h4>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <div className="text-xs font-semibold text-gray-500 uppercase mb-2">
                    ⚠️ What Employees See:
                  </div>
                  <p className="text-sm text-gray-700 italic bg-gray-50 p-3 rounded border-l-4 border-gray-300">
                    {problem.realExample}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-semibold text-red-600 uppercase mb-2">
                    💥 What Management Discovers:
                  </div>
                  <p className="text-sm font-semibold text-red-700 bg-red-50 p-3 rounded border-l-4 border-red-500">
                    {problem.consequence}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Pattern Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            <span className="text-red-400">The Deadly Pattern</span> (Happening
            Right Now in Your Company)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center bg-gray-800/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">Employees Notice</h4>
              <p className="text-sm text-gray-300">
                They see harassment, fraud, safety issues daily
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center bg-gray-800/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">Fear Takes Over</h4>
              <p className="text-sm text-gray-300">
                "What if I lose my job? What if nothing changes?"
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center bg-gray-800/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mb-4">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">Problem Escalates</h4>
              <p className="text-sm text-gray-300">
                Silent issues grow into catastrophes
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center bg-gray-800/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="w-20 h-20 bg-red-700 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-bold text-lg mb-2">Company Suffers</h4>
              <p className="text-sm text-gray-300">
                Lawsuits, scandals, media, bankruptcy
              </p>
            </div>
          </div>
        </div>

        {/* Impact Stats - The Real Cost */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-4 border-red-200">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8">
            The <span className="text-red-600">Actual Financial Impact</span> of
            One Silent Problem
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="md:border-r border-gray-200 last:border-0">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 mb-2">
                $75K-$300K
              </div>
              <div className="text-gray-600 font-medium">
                Average Harassment Lawsuit
              </div>
              <div className="text-sm text-gray-500 mt-2">
                + Legal fees, settlements, reputation damage
              </div>
            </div>
            <div className="md:border-r border-gray-200 last:border-0">
              <div className="text-5xl font-bold text-red-600 mb-2">$250K+</div>
              <div className="text-gray-600 font-medium">
                Average Fraud/Embezzlement
              </div>
              <div className="text-sm text-gray-500 mt-2">
                + Investigation costs, insurance hikes
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-red-600 mb-2">$2M+</div>
              <div className="text-gray-600 font-medium">
                Major Safety or Compliance Violation
              </div>
              <div className="text-sm text-gray-500 mt-2">
                + Business shutdown, licenses, criminal charges
              </div>
            </div>
          </div>

          <div className="mt-10 p-6 bg-green-50 rounded-xl border-2 border-green-300">
            <p className="text-base md:text-lg lg:text-xl text-center font-bold text-green-800">
              VoxWel Costs:{" "}
              <span className="text-2xl md:text-3xl lg:text-4xl text-green-600">
                $1/employee/month
              </span>
            </p>
            <p className="text-center text-gray-700 mt-2">
              For 100 employees: $1,200/year vs. $75,000+ in ONE incident
            </p>
            <p className="text-center text-green-700 font-semibold mt-3 text-lg">
              ONE prevented problem pays for{" "}
              <span className="text-2xl">60+ YEARS</span> of VoxWel.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-2xl font-bold text-gray-900 mb-4">
            Stop waiting for the lawsuit.{" "}
            <span className="text-red-600">
              Catch problems before they catch you.
            </span>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-red-600 text-white rounded-lg font-bold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <FiAlertCircle />
            Protect Your Company Now
          </a>
        </div>
      </div>
    </section>
  );
}
