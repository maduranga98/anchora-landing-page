"use client";

import { useState } from "react";
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate on change if field has been touched
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
    >
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
      // Send email using EmailJS
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

      // Clear form
      setFormData({
        name: "",
        email: "",
        company: "",
        employees: "",
        phone: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: any) {
      console.error("Error sending email:", error);
      setStatus("error");
      setErrorMessage(
        error.text ||
          "Failed to send message. Please try again or email us directly."
      );

      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background-softGray to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-teal/10 border border-primary-teal/30 rounded-full text-primary-teal text-sm font-bold mb-6">
            📧 Get in Touch
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-text-primary mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-primary-teal to-blue-500 bg-clip-text text-transparent">Workplace?</span>
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-text-secondary max-w-3xl mx-auto">
            Get instant access - receive your login credentials via email. Start protecting your workplace in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100">
            <h4 className="text-2xl font-bold text-text-primary mb-6">
              Get Instant Access
            </h4>
            <p className="text-text-secondary mb-6">
              Submit your details and receive your login credentials via email immediately.
            </p>

            {/* Success Message */}
            {status === "success" && (
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg flex items-start gap-3 animate-fade-in">
                <FiCheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-800 font-semibold">
                    Welcome to VoxWel!
                  </p>
                  <p className="text-green-700 text-sm mt-1">
                    Check your email for login credentials and setup instructions. You'll be up and running in minutes!
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {status === "error" && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded-lg flex items-start gap-3 animate-fade-in">
                <FiAlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-800 font-semibold">
                    Oops! Something went wrong
                  </p>
                  <p className="text-red-700 text-sm mt-1">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-primary mb-2"
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
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all ${
                        fieldErrors.name && touched.name
                          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                          : !fieldErrors.name && touched.name && formData.name
                          ? "border-green-500 focus:ring-green-500 focus:border-green-500"
                          : "border-border-medium focus:ring-primary-teal focus:border-primary-teal"
                      }`}
                      placeholder="John Doe"
                      disabled={status === "submitting"}
                    />
                    {touched.name && !fieldErrors.name && formData.name && (
                      <FiCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
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
                    className="block text-sm font-medium text-text-primary mb-2"
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
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all ${
                        fieldErrors.email && touched.email
                          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                          : !fieldErrors.email && touched.email && formData.email
                          ? "border-green-500 focus:ring-green-500 focus:border-green-500"
                          : "border-border-medium focus:ring-primary-teal focus:border-primary-teal"
                      }`}
                      placeholder="john@company.com"
                      disabled={status === "submitting"}
                    />
                    {touched.email && !fieldErrors.email && formData.email && (
                      <FiCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
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

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-text-primary mb-2"
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
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all ${
                      fieldErrors.company && touched.company
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : !fieldErrors.company && touched.company && formData.company
                        ? "border-green-500 focus:ring-green-500 focus:border-green-500"
                        : "border-border-medium focus:ring-primary-teal focus:border-primary-teal"
                    }`}
                    placeholder="Your Company Inc."
                    disabled={status === "submitting"}
                  />
                  {touched.company && !fieldErrors.company && formData.company && (
                    <FiCheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
                  )}
                </div>
                {fieldErrors.company && touched.company && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <FiAlertCircle className="w-3 h-3" />
                    {fieldErrors.company}
                  </p>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="employees"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Number of Employees *
                  </label>
                  <div className="relative">
                    <select
                      id="employees"
                      name="employees"
                      required
                      value={formData.employees}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all ${
                        fieldErrors.employees && touched.employees
                          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                          : !fieldErrors.employees && touched.employees && formData.employees
                          ? "border-green-500 focus:ring-green-500 focus:border-green-500"
                          : "border-border-medium focus:ring-primary-teal focus:border-primary-teal"
                      }`}
                      disabled={status === "submitting"}
                    >
                      <option value="">Select range</option>
                      <option value="1-50">1-50</option>
                      <option value="51-100">51-100</option>
                      <option value="101-250">101-250</option>
                      <option value="251-500">251-500</option>
                      <option value="501-1000">501-1000</option>
                      <option value="1000+">1000+</option>
                    </select>
                  </div>
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
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-teal focus:border-primary-teal transition-all"
                    placeholder="+1 (555) 123-4567"
                    disabled={status === "submitting"}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary-teal focus:border-primary-teal transition-all resize-none"
                  placeholder="Tell us about your needs..."
                  disabled={status === "submitting"}
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 bg-primary-teal text-white rounded-lg font-semibold text-lg hover:bg-primary-teal/90 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
              >
                {status === "submitting" && (
                  <div className="absolute inset-0 bg-primary-teal/20 animate-pulse"></div>
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
                    <span className="font-bold">Setting up your account...</span>
                  </>
                ) : (
                  <>
                    Get Access Now
                    <FiSend className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-sm text-text-tertiary text-center">
                By submitting this form, you agree to our{" "}
                <a
                  href="/privacy-policy"
                  className="text-primary-teal hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>

          {/* Contact Info & Benefits */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h4 className="text-xl font-bold text-text-primary mb-6">
                Get in Touch
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-teal/10 rounded-lg flex items-center justify-center text-primary-teal shrink-0">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary mb-1">
                      Email Us
                    </div>
                    <a
                      href="mailto:info@lumoraventures.com"
                      className="text-primary-teal hover:underline"
                    >
                      info@lumoraventures.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-teal/10 rounded-lg flex items-center justify-center text-primary-teal shrink-0">
                    <FiPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary mb-1">
                      Call Us
                    </div>
                    <a
                      href="tel:+9476620655"
                      className="text-primary-teal hover:underline"
                    >
                      +94 (76) 620-6555
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  {/* <div className="w-12 h-12 bg-primary-teal/10 rounded-lg flex items-center justify-center text-primary-teal shrink-0">
                    <FiMapPin className="w-6 h-6" />
                  </div> */}
                  <div className="bg-white rounded-2xl shadow-soft p-8">
                    <h4 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
                      <FiGlobe className="w-5 h-5 text-primary-teal" />
                      Our Offices
                    </h4>
                    <div className="space-y-6">
                      {/* UK Office */}
                      <div className="flex items-start gap-4 pb-6 border-b border-border-light">
                        <div className="w-12 h-12 bg-primary-navy/10 rounded-lg flex items-center justify-center text-primary-navy shrink-0">
                          <FiMapPin className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-bold text-text-primary mb-2 flex items-center gap-2">
                            <span className="text-lg">🇬🇧</span>
                            United Kingdom
                          </div>
                          <p className="text-text-secondary text-sm leading-relaxed">
                            Office 4157, 58 Peregrine Road
                            <br />
                            Hainault, Ilford, Essex
                            <br />
                            United Kingdom, IG6 3SZ
                          </p>
                        </div>
                      </div>

                      {/* Sri Lanka Office */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary-navy/10 rounded-lg flex items-center justify-center text-primary-navy shrink-0">
                          <FiMapPin className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="font-bold text-text-primary mb-2 flex items-center gap-2">
                            <span className="text-lg">🇱🇰</span>
                            Sri Lanka
                          </div>
                          <p className="text-text-secondary text-sm leading-relaxed">
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
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-primary-teal/10 via-blue-500/5 to-purple-500/10 rounded-2xl p-8 border-2 border-primary-teal/30 shadow-lg">
              <h4 className="text-xl font-bold text-text-primary mb-6">
                Why Choose VoxWel?
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-primary-teal shrink-0 mt-0.5" />
                  <span className="text-text-secondary">
                    <strong className="text-text-primary">
                      15-minute setup
                    </strong>{" "}
                    - Deploy in minutes, not months
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-primary-teal shrink-0 mt-0.5" />
                  <span className="text-text-secondary">
                    <strong className="text-text-primary">
                      Military-grade security
                    </strong>{" "}
                    - True anonymity guaranteed
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-primary-teal shrink-0 mt-0.5" />
                  <span className="text-text-secondary">
                    <strong className="text-text-primary">
                      $1 per employee
                    </strong>{" "}
                    - Affordable protection for any size
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheckCircle className="w-5 h-5 text-primary-teal shrink-0 mt-0.5" />
                  <span className="text-text-secondary">
                    <strong className="text-text-primary">24/7 support</strong>{" "}
                    - We're here when you need us
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
