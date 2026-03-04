"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiGlobe,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";

export default function Contact() {
  // ── Form state — preserved exactly ───────────────────────────────────────
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    company: "",
    employees: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    company: false,
    employees: false,
  });

  // ── Validation — preserved exactly ───────────────────────────────────────
  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2) return "Name must be at least 2 characters";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Please enter a valid email";
        return "";
      case "company":
        if (!value.trim()) return "Company name is required";
        return "";
      case "employees":
        if (!value) return "Please select employee range";
        return "";
      default:
        return "";
    }
  };

  // ── Handlers — preserved exactly ─────────────────────────────────────────
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (touched[name as keyof typeof touched]) {
      const error = validateField(name, value);
      setFieldErrors({ ...fieldErrors, [name]: error });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    const error = validateField(name, value);
    setFieldErrors({ ...fieldErrors, [name]: error });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          employees: formData.employees,
          phone: formData.phone || "Not provided",
          message: formData.message || "No message provided",
          reply_to: formData.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("Email sent successfully:", result);
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        employees: "",
        phone: "",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: any) {
      console.error("Error sending email:", error);
      setStatus("error");
      setErrorMessage(
        error.text ||
          "Failed to send message. Please try again or email us directly."
      );
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  // ── Shared input class helper ─────────────────────────────────────────────
  const inputClass = (field: keyof typeof fieldErrors) =>
    `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all text-slate-900 ${
      fieldErrors[field] && touched[field]
        ? "border-red-400 focus:ring-red-400"
        : !fieldErrors[field] && touched[field] && formData[field]
        ? "border-emerald-400 focus:ring-emerald-400"
        : "border-slate-300 focus:ring-indigo-500 focus:border-indigo-500"
    }`;

  return (
    <section
      id="contact"
      className="bg-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Ready to protect your workplace?
          </h2>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            Book a demo or get instant access. Our team responds within 24 hours.
          </p>
        </div>

        {/* Demo booking CTA */}
        <div className="text-center mb-12 pb-12 border-b border-slate-200">
          <span className="inline-block bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            Prefer to talk first?
          </span>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            Book a 20-minute demo
          </h3>
          <p className="text-slate-500 mb-6 max-w-md mx-auto">
            See VoxWel live. Get your questions answered. No commitment, no sales pressure.
          </p>
          <Link
            href="/demo"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            📅 Schedule a Demo →
          </Link>
          <p className="text-xs text-slate-400 mt-3">
            Usually responds within 2 hours during business hours
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ── Contact Form ────────────────────────────────────────────── */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Get Instant Access
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Submit your details and receive your login credentials via email
              immediately.
            </p>

            {/* Success */}
            {status === "success" && (
              <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 rounded-lg flex items-start gap-3">
                <FiCheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-emerald-800 font-semibold">
                    Welcome to VoxWel!
                  </p>
                  <p className="text-emerald-700 text-sm mt-1">
                    Check your email for login credentials and setup
                    instructions. You&apos;ll be up and running in minutes!
                  </p>
                </div>
              </div>
            )}

            {/* Error */}
            {status === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-300 rounded-lg flex items-start gap-3">
                <FiAlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-800 font-semibold">
                    Oops! Something went wrong
                  </p>
                  <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputClass("name")}
                      placeholder="Jane Smith"
                      disabled={status === "submitting"}
                    />
                    {touched.name && !fieldErrors.name && formData.name && (
                      <FiCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
                    )}
                  </div>
                  {fieldErrors.name && touched.name && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <FiAlertCircle className="w-3 h-3" />
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Work Email *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={inputClass("email")}
                      placeholder="jane@company.com"
                      disabled={status === "submitting"}
                    />
                    {touched.email && !fieldErrors.email && formData.email && (
                      <FiCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
                    )}
                  </div>
                  {fieldErrors.email && touched.email && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <FiAlertCircle className="w-3 h-3" />
                      {fieldErrors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Company Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass("company")}
                    placeholder="Your Company Inc."
                    disabled={status === "submitting"}
                  />
                  {touched.company &&
                    !fieldErrors.company &&
                    formData.company && (
                      <FiCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500" />
                    )}
                </div>
                {fieldErrors.company && touched.company && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <FiAlertCircle className="w-3 h-3" />
                    {fieldErrors.company}
                  </p>
                )}
              </div>

              {/* Employees + Phone */}
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="employees"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Number of Employees *
                  </label>
                  <select
                    id="employees"
                    name="employees"
                    required
                    value={formData.employees}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass("employees")}
                    disabled={status === "submitting"}
                  >
                    <option value="">Select range</option>
                    <option value="1-50">1–50</option>
                    <option value="51-100">51–100</option>
                    <option value="101-250">101–250</option>
                    <option value="251-500">251–500</option>
                    <option value="501-1000">501–1,000</option>
                    <option value="1000+">1,000+</option>
                  </select>
                  {fieldErrors.employees && touched.employees && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <FiAlertCircle className="w-3 h-3" />
                      {fieldErrors.employees}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-1.5"
                  >
                    Phone Number{" "}
                    <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-slate-900"
                    placeholder="+1 (555) 123-4567"
                    disabled={status === "submitting"}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all resize-none text-slate-900"
                  placeholder="Tell us about your needs..."
                  disabled={status === "submitting"}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 bg-indigo-600 text-white rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
              >
                {status === "submitting" && (
                  <div className="absolute inset-0 bg-indigo-700/30 animate-pulse" />
                )}
                {status === "submitting" ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Setting up your account…</span>
                  </>
                ) : (
                  <>
                    Get Instant Access →
                    <FiSend className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-xs text-slate-400 text-center">
                By submitting this form, you agree to our{" "}
                <a
                  href="/privacy-policy"
                  className="text-indigo-600 hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>

          {/* ── Right column: contact info ───────────────────────────────── */}
          <div className="space-y-6">
            {/* Contact cards */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <h4 className="text-lg font-bold text-slate-900 mb-6">
                Get in Touch
              </h4>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 shrink-0">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-0.5">
                      Email Us
                    </p>
                    <a
                      href="mailto:hello@voxwel.com"
                      className="text-indigo-600 hover:underline text-sm"
                    >
                      hello@voxwel.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 shrink-0">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm mb-0.5">
                      Call Us
                    </p>
                    <a
                      href="tel:+9476620655"
                      className="text-indigo-600 hover:underline text-sm"
                    >
                      +94 (76) 620-6555
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Offices */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8">
              <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <FiGlobe className="w-5 h-5 text-indigo-600" />
                Our Offices
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4 pb-6 border-b border-slate-100">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
                    <FiMapPin className="w-5 h-5 text-slate-500" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                      <span>🇬🇧</span> United Kingdom
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Office 4157, 58 Peregrine Road
                      <br />
                      Hainault, Ilford, Essex
                      <br />
                      United Kingdom, IG6 3SZ
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center shrink-0">
                    <FiMapPin className="w-5 h-5 text-slate-500" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-1.5">
                      <span>🇱🇰</span> Sri Lanka
                    </p>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Kurunegala Road
                      <br />
                      Kuliyapitiya
                      <br />
                      Kurunegala, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why VoxWel */}
            <div className="bg-indigo-50 rounded-2xl border border-indigo-100 p-8">
              <h4 className="text-lg font-bold text-slate-900 mb-5">
                Why Choose VoxWel?
              </h4>
              <ul className="space-y-3">
                {[
                  ["24-hour setup", "Deploy in minutes, not months"],
                  ["Military-grade security", "True anonymity guaranteed"],
                  ["$1 per employee", "Affordable protection for any size"],
                  ["24/7 support", "We're here when you need us"],
                ].map(([bold, rest]) => (
                  <li key={bold} className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">
                      {bold}: 
                      {rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
