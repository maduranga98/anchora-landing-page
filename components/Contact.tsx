"use client";

import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

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

    // TODO: Integrate with Firebase Functions or your backend
    // For now, simulate submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setStatus("success");
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
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-background-softGray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-large p-8 md:p-10">
            <h4 className="text-2xl font-bold text-text-primary mb-6">
              Request a Demo
            </h4>

            {status === "success" && (
              <div className="mb-6 p-4 bg-status-success-light border border-status-success rounded-lg">
                <p className="text-status-success font-medium">
                  ✓ Thank you! We'll be in touch within 24 hours.
                </p>
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
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-4 bg-primary-teal text-white rounded-lg font-semibold text-lg hover:bg-primary-teal/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {status === "submitting" ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <FiSend className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-sm text-text-tertiary text-center">
                By submitting this form, you agree to our Privacy Policy.
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
                  <div className="w-12 h-12 bg-primary-teal/10 rounded-lg flex items-center justify-center text-primary-teal flex-shrink-0">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary mb-1">
                      Email Us
                    </div>
                    <a
                      href="mailto:hello@anchora.app"
                      className="text-primary-teal hover:underline"
                    >
                      hello@anchora.app
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-teal/10 rounded-lg flex items-center justify-center text-primary-teal flex-shrink-0">
                    <FiPhone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary mb-1">
                      Call Us
                    </div>
                    <a
                      href="tel:+1234567890"
                      className="text-primary-teal hover:underline"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-teal/10 rounded-lg flex items-center justify-center text-primary-teal flex-shrink-0">
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold text-text-primary mb-1">
                      Visit Us
                    </div>
                    <p className="text-text-secondary">
                      123 Innovation Street
                      <br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Benefits */}
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">What Happens Next?</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <span>
                    We'll schedule a personalized demo within 24 hours
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <span>Start your 14-day free trial with full access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </span>
                  <span>Get onboarded with dedicated support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </span>
                  <span>Transform your workplace culture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
