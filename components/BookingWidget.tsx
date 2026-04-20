"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { X, Calendar, CheckCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { getVariant, trackVariantConversion, EXPERIMENTS } from "@/utils/abTesting";

interface FormData {
  name: string;
  email: string;
  company: string;
  companySize: string;
  meetingDate: string;
  meetingTime: string;
  message: string;
}

interface FieldErrors {
  name: string;
  email: string;
  company: string;
  companySize: string;
  meetingDate: string;
  meetingTime: string;
}

interface TouchedFields {
  name: boolean;
  email: boolean;
  company: boolean;
  companySize: boolean;
  meetingDate: boolean;
  meetingTime: boolean;
}

export default function BookingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [buttonPosition, setButtonPosition] = useState<"right" | "left">("right");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    companySize: "",
    meetingDate: "",
    meetingTime: "",
    message: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    name: "",
    email: "",
    company: "",
    companySize: "",
    meetingDate: "",
    meetingTime: "",
  });
  const [touched, setTouched] = useState<TouchedFields>({
    name: false,
    email: false,
    company: false,
    companySize: false,
    meetingDate: false,
    meetingTime: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Show button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen for custom event to open the widget
  useEffect(() => {
    const handleOpenWidget = () => {
      setIsOpen(true);
    };

    window.addEventListener("openBookingWidget", handleOpenWidget);
    return () => window.removeEventListener("openBookingWidget", handleOpenWidget);
  }, []);

  // Get A/B test variant for button position
  useEffect(() => {
    const positionVariant = getVariant(EXPERIMENTS.FLOATING_BUTTON_POSITION);
    setButtonPosition(positionVariant.id === "variant_a" ? "left" : "right");
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const generateTimeSlots = () => {
    const slots = [];
    for (let h = 9; h <= 17; h++) {
      for (const m of [0, 30]) {
        if (h === 17 && m === 30) continue;
        const hour12 = h > 12 ? h - 12 : h === 0 ? 12 : h;
        const ampm = h >= 12 ? 'PM' : 'AM';
        const label = `${hour12}:${m === 0 ? '00' : '30'} ${ampm}`;
        const value = `${String(h).padStart(2, '0')}:${m === 0 ? '00' : '30'}`;
        slots.push({ label, value });
      }
    }
    return slots;
  };
  const timeSlots = generateTimeSlots();
  const todayStr = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 60);
  const maxDateStr = maxDate.toISOString().split('T')[0];
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const formatDateForEmail = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr + 'T12:00:00');
    return date.toLocaleDateString('en-GB', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
    });
  };

  const formatTimeForEmail = (timeStr: string) => {
    if (!timeStr) return '';
    const [h, m] = timeStr.split(':').map(Number);
    const hour12 = h > 12 ? h - 12 : h === 0 ? 12 : h;
    const ampm = h >= 12 ? 'PM' : 'AM';
    return `${hour12}:${m === 0 ? '00' : '30'} ${ampm}`;
  };

  const validateField = (name: keyof FieldErrors, value: string): string => {
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
      case "companySize":
        if (!value) return "Please select company size";
        return "";
      case "meetingDate": {
        if (!value) return "Please select a date";
        const sel = new Date(value + "T12:00:00");
        const now = new Date();
        now.setHours(0, 0, 0, 0);
        if (sel < now) return "Please select a future date";
        return "";
      }
      case "meetingTime":
        if (!value) return "Please select a time";
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
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name as keyof TouchedFields]) {
      const error = validateField(name as keyof FieldErrors, value);
      setFieldErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FieldErrors, value);
    setFieldErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all fields
    const errors: FieldErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      company: validateField("company", formData.company),
      companySize: validateField("companySize", formData.companySize),
      meetingDate: validateField("meetingDate", formData.meetingDate),
      meetingTime: validateField("meetingTime", formData.meetingTime),
    };

    setFieldErrors(errors);
    setTouched({
      name: true,
      email: true,
      company: true,
      companySize: true,
      meetingDate: true,
      meetingTime: true,
    });

    // Check if there are any errors
    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      setSubmitStatus({
        type: "error",
        message: "Please fix the errors above",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch(
        'https://us-central1-company-voice-ba26f.cloudfunctions.net/sendDemoBooking',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            companySize: formData.companySize,
            meetingDate: formatDateForEmail(formData.meetingDate),
            meetingTime: formatTimeForEmail(formData.meetingTime),
            timezone: userTimezone,
            meetLink: process.env.NEXT_PUBLIC_GOOGLE_MEET_LINK!,
            message: formData.message,
          }),
        }
      );
      if (!response.ok) throw new Error('Failed to send booking');

      // Track conversion with Google Analytics
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "demo_booking_submitted", {
          event_category: "engagement",
          event_label: "Demo Booking Widget",
          value: formData.companySize,
        });
      }

      // Track conversion with Meta Pixel
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          content_name: "Demo Booking Widget",
          content_category: "Demo Request",
          value: formData.companySize,
        });
      }

      setSubmitStatus({
        type: "success",
        message: `Confirmed! ✅ A meeting invitation has been sent to ${formData.email}`,
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          companySize: "",
          meetingDate: "",
          meetingTime: "",
          message: "",
        });
        setFieldErrors({
          name: "",
          email: "",
          company: "",
          companySize: "",
          meetingDate: "",
          meetingTime: "",
        });
        setTouched({
          name: false,
          email: false,
          company: false,
          companySize: false,
          meetingDate: false,
          meetingTime: false,
        });
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      console.error("Failed to send demo booking:", error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openModal = () => {
    setIsOpen(true);
    // Track modal open event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "demo_widget_opened", {
        event_category: "engagement",
        event_label: "Booking Widget Opened",
      });
    }
    // Track A/B test conversion
    trackVariantConversion(EXPERIMENTS.FLOATING_BUTTON_POSITION.id, "button_clicked");
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Demo Booking Button */}
      <button
        onClick={openModal}
        className={`fixed bottom-6 ${
          buttonPosition === "right" ? "right-6" : "left-6"
        } z-40 flex items-center gap-2 px-6 py-4 bg-primary-teal text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
        aria-label="Book a demo"
      >
        <Calendar className="w-5 h-5" />
        <span className="hidden sm:inline">Book a Demo</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-fadeIn">
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-primary-teal to-primary-navy text-white px-6 py-5 rounded-t-2xl flex items-center justify-between z-10">
              <div>
                <h2 className="text-2xl font-bold">Book Your Demo</h2>
                <p className="text-sm text-white/90 mt-1">
                  See how Anchora can transform your HR operations
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-text-primary mb-2"
                >
                  Full Name <span className="text-accent-coral">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
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
                    placeholder="John Smith"
                  />
                  {!fieldErrors.name && touched.name && formData.name && (
                    <CheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
                  )}
                </div>
                {fieldErrors.name && touched.name && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-text-primary mb-2"
                >
                  Email Address <span className="text-accent-coral">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
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
                  />
                  {!fieldErrors.email && touched.email && formData.email && (
                    <CheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
                  )}
                </div>
                {fieldErrors.email && touched.email && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>
                )}
              </div>

              {/* Company Field */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold text-text-primary mb-2"
                >
                  Company Name <span className="text-accent-coral">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all ${
                      fieldErrors.company && touched.company
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : !fieldErrors.company &&
                          touched.company &&
                          formData.company
                        ? "border-green-500 focus:ring-green-500 focus:border-green-500"
                        : "border-border-medium focus:ring-primary-teal focus:border-primary-teal"
                    }`}
                    placeholder="Your Company Ltd"
                  />
                  {!fieldErrors.company &&
                    touched.company &&
                    formData.company && (
                      <CheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
                    )}
                </div>
                {fieldErrors.company && touched.company && (
                  <p className="text-red-500 text-sm mt-1">
                    {fieldErrors.company}
                  </p>
                )}
              </div>

              {/* Company Size Field */}
              <div>
                <label
                  htmlFor="companySize"
                  className="block text-sm font-semibold text-text-primary mb-2"
                >
                  Company Size <span className="text-accent-coral">*</span>
                </label>
                <div className="relative">
                  <select
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all appearance-none bg-white ${
                      fieldErrors.companySize && touched.companySize
                        ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                        : !fieldErrors.companySize &&
                          touched.companySize &&
                          formData.companySize
                        ? "border-green-500 focus:ring-green-500 focus:border-green-500"
                        : "border-border-medium focus:ring-primary-teal focus:border-primary-teal"
                    }`}
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501+">501+ employees</option>
                  </select>
                  {!fieldErrors.companySize &&
                    touched.companySize &&
                    formData.companySize && (
                      <CheckCircle className="absolute right-3 top-3.5 w-5 h-5 text-green-500" />
                    )}
                </div>
                {fieldErrors.companySize && touched.companySize && (
                  <p className="text-red-500 text-sm mt-1">
                    {fieldErrors.companySize}
                  </p>
                )}
              </div>

              {/* Meeting Date */}
              <div>
                <label htmlFor="meetingDate" className="block text-sm font-semibold text-text-primary mb-2">
                  Preferred Date <span className="text-accent-coral">*</span>
                </label>
                <input
                  type="date"
                  id="meetingDate"
                  name="meetingDate"
                  value={formData.meetingDate}
                  min={todayStr}
                  max={maxDateStr}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2
                    focus:ring-offset-1 transition-all bg-white ${
                    fieldErrors.meetingDate && touched.meetingDate
                      ? 'border-red-500 focus:ring-red-500'
                      : !fieldErrors.meetingDate && touched.meetingDate && formData.meetingDate
                      ? 'border-green-500 focus:ring-green-500'
                      : 'border-border-medium focus:ring-primary-teal focus:border-primary-teal'
                  }`}
                />
                {fieldErrors.meetingDate && touched.meetingDate && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.meetingDate}</p>
                )}
              </div>

              {/* Meeting Time */}
              <div>
                <label htmlFor="meetingTime" className="block text-sm font-semibold text-text-primary mb-2">
                  Preferred Time <span className="text-accent-coral">*</span>
                </label>
                <select
                  id="meetingTime"
                  name="meetingTime"
                  value={formData.meetingTime}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2
                    focus:ring-offset-1 transition-all bg-white ${
                    fieldErrors.meetingTime && touched.meetingTime
                      ? 'border-red-500 focus:ring-red-500'
                      : !fieldErrors.meetingTime && touched.meetingTime && formData.meetingTime
                      ? 'border-green-500 focus:ring-green-500'
                      : 'border-border-medium focus:ring-primary-teal focus:border-primary-teal'
                  }`}
                >
                  <option value="">Select a time</option>
                  {timeSlots.map(slot => (
                    <option key={slot.value} value={slot.value}>{slot.label}</option>
                  ))}
                </select>
                {fieldErrors.meetingTime && touched.meetingTime && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.meetingTime}</p>
                )}
                <p className="text-xs text-slate-400 mt-1">Your timezone: {userTimezone}</p>
              </div>

              {/* Message Field (Optional) */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-text-primary mb-2"
                >
                  Additional Information (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-border-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-teal focus:border-primary-teal transition-all resize-none"
                  placeholder="Any specific topics you'd like to discuss?"
                />
              </div>

              {/* Submit Status */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-teal text-white py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    Schedule Demo
                  </>
                )}
              </button>

              <p className="text-sm text-text-secondary text-center">
                We'll get back to you within 24 hours to confirm your demo
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
