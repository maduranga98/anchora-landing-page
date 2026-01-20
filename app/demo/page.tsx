"use client";

import { useState, useEffect } from "react";
import {
  FiCheckCircle,
  FiAlertCircle,
  FiClock,
  FiShield,
  FiTrendingUp,
  FiCalendar,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Script from "next/script";
import AnchoraLogo from "@/components/AnchoraLogo";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    companySize: "",
    preferredTime: "",
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
    companySize: "",
    preferredTime: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    company: false,
    companySize: false,
    preferredTime: false,
  });

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required";
        if (value.trim().length < 2)
          return "Name must be at least 2 characters";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return "Please enter a valid email";
        return "";
      case "company":
        if (!value.trim()) return "Company name is required";
        return "";
      case "companySize":
        if (!value) return "Please select company size";
        return "";
      case "preferredTime":
        if (!value) return "Please select preferred time";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (touched[name as keyof typeof touched]) {
      const error = validateField(name, value);
      setFieldErrors({
        ...fieldErrors,
        [name]: error,
      });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });

    const error = validateField(name, value);
    setFieldErrors({
      ...fieldErrors,
      [name]: error,
    });
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
          company_size: formData.companySize,
          preferred_time: formData.preferredTime,
          message: formData.message || "Demo booking request",
          reply_to: formData.email,
          subject: "VoxWel Demo Booking Request",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      console.log("Demo booking sent successfully:", result);
      setStatus("success");

      // Track Meta Pixel Lead conversion event
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          content_name: "Demo Booking",
          content_category: "Demo Request",
        });
      }

      setFormData({
        name: "",
        email: "",
        company: "",
        companySize: "",
        preferredTime: "",
        message: "",
      });
      setTouched({
        name: false,
        email: false,
        company: false,
        companySize: false,
        preferredTime: false,
      });
    } catch (error: any) {
      console.error("Error booking demo:", error);
      setStatus("error");
      setErrorMessage(
        error.text ||
          "Failed to book demo. Please try again or email us directly at info@lumoraventures.com",
      );

      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-background-softGray to-white">
      {/* Meta Pixel Code */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '937193265639466');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=937193265639466&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      {/* Minimal Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <AnchoraLogo size="default" />
            <span className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-white to-primary-teal bg-clip-text text-transparent">
              VoxWel
            </span>
          </div>
          <Link
            href="/"
            className="text-text-secondary hover:text-primary-teal transition-colors text-sm font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-8">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary-teal/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Headline */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-teal/10 border border-primary-teal/30 rounded-full text-primary-teal text-sm font-bold mb-6">
              🎯 Free Demo - No Credit Card Required
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
              See VoxWel in Action
            </h1>
            <p className="text-xl sm:text-2xl text-text-secondary mb-8">
              Book Your{" "}
              <span className="text-primary-teal font-semibold">
                Free 15-Minute Demo
              </span>
            </p>
            <p className="text-lg text-text-tertiary max-w-2xl mx-auto">
              Discover how VoxWel can help you create a safer workplace, prevent
              lawsuits, and protect your employees—all in just 15 minutes.
            </p>
          </div>

          {/* Trust Signals Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-teal/10 rounded-lg flex items-center justify-center shrink-0">
                <FiClock className="w-6 h-6 text-primary-teal" />
              </div>
              <div>
                <div className="font-bold text-text-primary">15 Minutes</div>
                <div className="text-sm text-text-secondary">
                  Quick & focused
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center shrink-0">
                <FiShield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="font-bold text-text-primary">
                  No Credit Card
                </div>
                <div className="text-sm text-text-secondary">
                  Zero commitment
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                <FiTrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="font-bold text-text-primary">
                  Live Dashboard
                </div>
                <div className="text-sm text-text-secondary">
                  See it in action
                </div>
              </div>
            </div>
          </div>

          {/* Demo Booking Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-primary-teal/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-text-primary mb-3">
                  Book Your Free Demo
                </h2>
                <p className="text-text-secondary">
                  Fill out the form below and we'll get back to you within 24
                  hours to schedule your personalized demo.
                </p>
              </div>

              {/* Success Message */}
              {status === "success" && (
                <div className="mb-8 p-6 bg-green-50 border-2 border-green-500 rounded-xl flex items-start gap-4 animate-fade-in">
                  <FiCheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                  <div>
                    <p className="text-green-800 font-bold text-lg mb-2">
                      Demo Booked Successfully! 🎉
                    </p>
                    <p className="text-green-700 mb-2">
                      Thank you for your interest in VoxWel! We've received your
                      demo request.
                    </p>
                    <p className="text-green-700 text-sm">
                      Our team will contact you within 24 hours at{" "}
                      <strong>{formData.email}</strong> to confirm your demo
                      time and send you the meeting link.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {status === "error" && (
                <div className="mb-8 p-6 bg-red-50 border-2 border-red-500 rounded-xl flex items-start gap-4 animate-fade-in">
                  <FiAlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
                  <div>
                    <p className="text-red-800 font-bold text-lg mb-1">
                      Oops! Something went wrong
                    </p>
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-text-primary mb-2"
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
                      className={`w-full px-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all text-lg ${
                        fieldErrors.name && touched.name
                          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                          : !fieldErrors.name && touched.name && formData.name
                            ? "border-green-500 focus:ring-green-500 focus:border-green-500"
                            : "border-gray-300 focus:ring-primary-teal focus:border-primary-teal"
                      }`}
                      placeholder="John Doe"
                      disabled={status === "submitting"}
                    />
                    {touched.name && !fieldErrors.name && formData.name && (
                      <FiCheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-green-500" />
                    )}
                  </div>
                  {fieldErrors.name && touched.name && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <FiAlertCircle className="w-4 h-4" />
                      {fieldErrors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-text-primary mb-2"
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
                      className={`w-full px-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all text-lg ${
                        fieldErrors.email && touched.email
                          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                          : !fieldErrors.email &&
                              touched.email &&
                              formData.email
                            ? "border-green-500 focus:ring-green-500 focus:border-green-500"
                            : "border-gray-300 focus:ring-primary-teal focus:border-primary-teal"
                      }`}
                      placeholder="john@company.com"
                      disabled={status === "submitting"}
                    />
                    {touched.email && !fieldErrors.email && formData.email && (
                      <FiCheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-green-500" />
                    )}
                  </div>
                  {fieldErrors.email && touched.email && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <FiAlertCircle className="w-4 h-4" />
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold text-text-primary mb-2"
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
                      className={`w-full px-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all text-lg ${
                        fieldErrors.company && touched.company
                          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                          : !fieldErrors.company &&
                              touched.company &&
                              formData.company
                            ? "border-green-500 focus:ring-green-500 focus:border-green-500"
                            : "border-gray-300 focus:ring-primary-teal focus:border-primary-teal"
                      }`}
                      placeholder="Your Company Inc."
                      disabled={status === "submitting"}
                    />
                    {touched.company &&
                      !fieldErrors.company &&
                      formData.company && (
                        <FiCheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-green-500" />
                      )}
                  </div>
                  {fieldErrors.company && touched.company && (
                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                      <FiAlertCircle className="w-4 h-4" />
                      {fieldErrors.company}
                    </p>
                  )}
                </div>

                {/* Company Size & Preferred Time */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="companySize"
                      className="block text-sm font-semibold text-text-primary mb-2"
                    >
                      Company Size *
                    </label>
                    <div className="relative">
                      <select
                        id="companySize"
                        name="companySize"
                        required
                        value={formData.companySize}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all text-lg appearance-none bg-white ${
                          fieldErrors.companySize && touched.companySize
                            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                            : !fieldErrors.companySize &&
                                touched.companySize &&
                                formData.companySize
                              ? "border-green-500 focus:ring-green-500 focus:border-green-500"
                              : "border-gray-300 focus:ring-primary-teal focus:border-primary-teal"
                        }`}
                        disabled={status === "submitting"}
                      >
                        <option value="">Select size</option>
                        <option value="1-50">1-50 employees</option>
                        <option value="51-100">51-100 employees</option>
                        <option value="101-250">101-250 employees</option>
                        <option value="251-500">251-500 employees</option>
                        <option value="501-1000">501-1,000 employees</option>
                        <option value="1000+">1,000+ employees</option>
                      </select>
                    </div>
                    {fieldErrors.companySize && touched.companySize && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <FiAlertCircle className="w-4 h-4" />
                        {fieldErrors.companySize}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="preferredTime"
                      className="block text-sm font-semibold text-text-primary mb-2"
                    >
                      Preferred Time *
                    </label>
                    <div className="relative">
                      <select
                        id="preferredTime"
                        name="preferredTime"
                        required
                        value={formData.preferredTime}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-4 py-4 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all text-lg appearance-none bg-white ${
                          fieldErrors.preferredTime && touched.preferredTime
                            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                            : !fieldErrors.preferredTime &&
                                touched.preferredTime &&
                                formData.preferredTime
                              ? "border-green-500 focus:ring-green-500 focus:border-green-500"
                              : "border-gray-300 focus:ring-primary-teal focus:border-primary-teal"
                        }`}
                        disabled={status === "submitting"}
                      >
                        <option value="">Select time</option>
                        <option value="Morning (9AM-12PM)">
                          Morning (9AM-12PM)
                        </option>
                        <option value="Afternoon (12PM-3PM)">
                          Afternoon (12PM-3PM)
                        </option>
                        <option value="Late Afternoon (3PM-6PM)">
                          Late Afternoon (3PM-6PM)
                        </option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>
                    {fieldErrors.preferredTime && touched.preferredTime && (
                      <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                        <FiAlertCircle className="w-4 h-4" />
                        {fieldErrors.preferredTime}
                      </p>
                    )}
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-text-primary mb-2"
                  >
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-teal focus:border-primary-teal transition-all resize-none text-lg"
                    placeholder="Any specific features you'd like to see in the demo?"
                    disabled={status === "submitting"}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-5 bg-gradient-to-r from-primary-teal to-blue-500 text-white rounded-xl font-bold text-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                  {status === "submitting" && (
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  )}
                  {status === "submitting" ? (
                    <>
                      <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
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
                      <span>Booking your demo...</span>
                    </>
                  ) : (
                    <>
                      <FiCalendar className="w-6 h-6" />
                      <span>Book My Free Demo</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-text-tertiary text-center">
                  By booking a demo, you agree to our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-primary-teal hover:underline font-medium"
                  >
                    Privacy Policy
                  </Link>
                  . We respect your privacy and will never share your
                  information.
                </p>
              </form>
            </div>
          </div>

          {/* What You'll See Section */}
          <div className="max-w-4xl mx-auto mt-16 mb-12">
            <h3 className="text-3xl font-bold text-text-primary text-center mb-8">
              What You'll See in Your Demo
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-primary-teal/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-3xl">🔒</span>
                </div>
                <h4 className="font-bold text-text-primary mb-2 text-lg">
                  Anonymous Reporting
                </h4>
                <p className="text-text-secondary text-sm">
                  See how employees can report issues completely anonymously
                  with military-grade encryption.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-3xl">📊</span>
                </div>
                <h4 className="font-bold text-text-primary mb-2 text-lg">
                  Real-Time Dashboard
                </h4>
                <p className="text-text-secondary text-sm">
                  Live analytics showing workplace sentiment, trending issues,
                  and department insights.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h4 className="font-bold text-text-primary mb-2 text-lg">
                  15-Minute Setup
                </h4>
                <p className="text-text-secondary text-sm">
                  Walk through the simple setup process and see how quickly you
                  can deploy VoxWel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-primary-navy text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <AnchoraLogo size="small" />
              <span className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-white to-primary-teal bg-clip-text text-transparent">
                VoxWel
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy-policy"
                className="hover:text-primary-teal transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-primary-teal transition-colors"
              >
                Terms of Service
              </Link>
              <a
                href="mailto:info@lumoraventures.com"
                className="hover:text-primary-teal transition-colors"
              >
                info@lumoraventures.com
              </a>
            </div>
          </div>
          <div className="text-center mt-6 text-sm text-gray-400">
            © {new Date().getFullYear()} VoxWel. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
