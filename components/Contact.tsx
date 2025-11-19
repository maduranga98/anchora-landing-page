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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
    <section id="contact" className="section-padding bg-background-softGray">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary-teal uppercase tracking-wide mb-4">
            Get in Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Ready to Transform Your{" "}
            <span className="text-primary-teal">Workplace?</span>
          </h3>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Schedule a demo or start your free trial today. No credit card
            required.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-large p-8 md:p-10">
            <h4 className="text-2xl font-bold text-text-primary mb-6">
              Request a Demo
            </h4>

            {/* Success Message */}
            {status === "success" && (
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg flex items-start gap-3 animate-fade-in">
                <FiCheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-800 font-semibold">
                    Thank you for contacting us!
                  </p>
                  <p className="text-green-700 text-sm mt-1">
                    We've received your message and will get back to you within
                    24 hours.
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
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-medium rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all"
                    placeholder="John Doe"
                    disabled={status === "submitting"}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-medium rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all"
                    placeholder="john@company.com"
                    disabled={status === "submitting"}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border-medium rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all"
                  placeholder="Your Company Inc."
                  disabled={status === "submitting"}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="employees"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Number of Employees *
                  </label>
                  <select
                    id="employees"
                    name="employees"
                    required
                    value={formData.employees}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border-medium rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all"
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
                    className="w-full px-4 py-3 border border-border-medium rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all"
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
                  className="w-full px-4 py-3 border border-border-medium rounded-lg focus:ring-2 focus:ring-primary-teal focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your needs..."
                  disabled={status === "submitting"}
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 bg-primary-teal text-white rounded-lg font-semibold text-lg hover:bg-primary-teal/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
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
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
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
            <div className="bg-white rounded-2xl shadow-soft p-8">
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
                        <div className="w-12 h-12 bg-primary-navy/10 rounded-lg flex items-center justify-center text-primary-navy flex-shrink-0">
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
                        <div className="w-12 h-12 bg-primary-navy/10 rounded-lg flex items-center justify-center text-primary-navy flex-shrink-0">
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
            <div className="bg-linear-to-br from-primary-teal/5 to-primary-navy/5 rounded-2xl p-8 border-2 border-primary-teal/20">
              <h4 className="text-xl font-bold text-text-primary mb-6">
                Why Choose Anchora?
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
