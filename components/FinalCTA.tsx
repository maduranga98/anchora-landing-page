"use client";

import { useState, useEffect, FormEvent } from "react";
import { CheckCircle, Loader2, Calendar } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  companySize: string;
  meetingDate: string;
  meetingTime: string;
}

interface FieldErrors {
  name: string;
  email: string;
  company: string;
  companySize: string;
  meetingDate: string;
  meetingTime: string;
}

const trustStats = [
  "14-day free trial",
  "No credit card required",
  "Setup in 24 hours",
  "Cancel anytime",
];

function generateTimeSlots() {
  const slots = [];
  for (let h = 9; h <= 17; h++) {
    for (const m of [0, 30]) {
      if (h === 17 && m === 30) continue;
      const hour12 = h > 12 ? h - 12 : h === 0 ? 12 : h;
      const ampm = h >= 12 ? "PM" : "AM";
      const label = `${hour12}:${m === 0 ? "00" : "30"} ${ampm}`;
      const value = `${String(h).padStart(2, "0")}:${m === 0 ? "00" : "30"}`;
      slots.push({ label, value });
    }
  }
  return slots;
}

const timeSlots = generateTimeSlots();

export default function FinalCTA() {
  const [todayStr, setTodayStr] = useState("");
  const [maxDateStr, setMaxDateStr] = useState("");
  const [userTimezone, setUserTimezone] = useState("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    companySize: "",
    meetingDate: "",
    meetingTime: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({
    name: "",
    email: "",
    company: "",
    companySize: "",
    meetingDate: "",
    meetingTime: "",
  });
  const [touched, setTouched] = useState<Record<keyof FieldErrors, boolean>>({
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

  useEffect(() => {
    const today = new Date();
    setTodayStr(today.toISOString().split("T")[0]);
    const max = new Date();
    max.setDate(max.getDate() + 60);
    setMaxDateStr(max.toISOString().split("T")[0]);
    setUserTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

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

  const formatDateForEmail = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr + "T12:00:00");
    return date.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatTimeForEmail = (timeStr: string) => {
    if (!timeStr) return "";
    const [h, m] = timeStr.split(":").map(Number);
    const hour12 = h > 12 ? h - 12 : h === 0 ? 12 : h;
    const ampm = h >= 12 ? "PM" : "AM";
    return `${hour12}:${m === 0 ? "00" : "30"} ${ampm}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof FieldErrors]) {
      const error = validateField(name as keyof FieldErrors, value);
      setFieldErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name as keyof FieldErrors, value);
    setFieldErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

    if (Object.values(errors).some((e) => e !== "")) {
      setSubmitStatus({ type: "error", message: "Please fix the errors above" });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch(
        "https://us-central1-company-voice-ba26f.cloudfunctions.net/sendDemoBooking",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            companySize: formData.companySize,
            meetingDate: formatDateForEmail(formData.meetingDate),
            meetingTime: formatTimeForEmail(formData.meetingTime),
            timezone: userTimezone,
            meetLink: process.env.NEXT_PUBLIC_GOOGLE_MEET_LINK!,
            message: "",
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to send booking");

      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "demo_booking_submitted", {
          event_category: "engagement",
          event_label: "Final CTA Booking",
          value: formData.companySize,
        });
      }

      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead", {
          content_name: "Final CTA Booking",
          content_category: "Demo Request",
        });
      }

      setSubmitStatus({
        type: "success",
        message: `Confirmed! A meeting invitation has been sent to ${formData.email}`,
      });

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          company: "",
          companySize: "",
          meetingDate: "",
          meetingTime: "",
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
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-lg bg-white/10 border text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all text-sm";
  const inputValid = "border-green-400";
  const inputError = "border-red-400";
  const inputDefault = "border-white/30";

  const inputClass = (field: keyof FieldErrors) =>
    `${inputBase} ${
      fieldErrors[field] && touched[field]
        ? inputError
        : !fieldErrors[field] && touched[field] && formData[field]
        ? inputValid
        : inputDefault
    }`;

  return (
    <section id="final-cta" className="bg-indigo-600 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Your employees have something to say. Give them a safe way to say it.
        </h2>
        <p className="mt-6 text-indigo-200 text-lg max-w-2xl mx-auto leading-relaxed">
          Book your free 15-minute demo and see how Anchora builds a healthier,
          more transparent workplace.
        </p>

        {submitStatus.type === "success" ? (
          <div className="mt-10 bg-white/10 border border-white/30 rounded-2xl p-8 text-white max-w-lg mx-auto">
            <CheckCircle className="w-12 h-12 text-green-300 mx-auto mb-4" />
            <p className="text-lg font-semibold">{submitStatus.message}</p>
            <p className="text-indigo-200 text-sm mt-2">
              We&apos;ll confirm your demo shortly. Check your inbox!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 text-left max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-indigo-100 mb-1">
                  Full Name <span className="text-red-300">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="John Smith"
                  className={inputClass("name")}
                />
                {fieldErrors.name && touched.name && (
                  <p className="text-red-300 text-xs mt-1">{fieldErrors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-indigo-100 mb-1">
                  Work Email <span className="text-red-300">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="john@company.com"
                  className={inputClass("email")}
                />
                {fieldErrors.email && touched.email && (
                  <p className="text-red-300 text-xs mt-1">{fieldErrors.email}</p>
                )}
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-indigo-100 mb-1">
                  Company Name <span className="text-red-300">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Company Ltd"
                  className={inputClass("company")}
                />
                {fieldErrors.company && touched.company && (
                  <p className="text-red-300 text-xs mt-1">{fieldErrors.company}</p>
                )}
              </div>

              {/* Company Size */}
              <div>
                <label className="block text-sm font-medium text-indigo-100 mb-1">
                  Company Size <span className="text-red-300">*</span>
                </label>
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${inputClass("companySize")} appearance-none`}
                >
                  <option value="" className="text-gray-800">Select size</option>
                  <option value="1-10" className="text-gray-800">1–10 employees</option>
                  <option value="11-50" className="text-gray-800">11–50 employees</option>
                  <option value="51-200" className="text-gray-800">51–200 employees</option>
                  <option value="201-500" className="text-gray-800">201–500 employees</option>
                  <option value="501+" className="text-gray-800">501+ employees</option>
                </select>
                {fieldErrors.companySize && touched.companySize && (
                  <p className="text-red-300 text-xs mt-1">{fieldErrors.companySize}</p>
                )}
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-indigo-100 mb-1">
                  Preferred Date <span className="text-red-300">*</span>
                </label>
                <input
                  type="date"
                  name="meetingDate"
                  value={formData.meetingDate}
                  min={todayStr}
                  max={maxDateStr}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${inputClass("meetingDate")} [color-scheme:dark]`}
                />
                {fieldErrors.meetingDate && touched.meetingDate && (
                  <p className="text-red-300 text-xs mt-1">{fieldErrors.meetingDate}</p>
                )}
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-medium text-indigo-100 mb-1">
                  Preferred Time <span className="text-red-300">*</span>
                </label>
                <select
                  name="meetingTime"
                  value={formData.meetingTime}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`${inputClass("meetingTime")} appearance-none`}
                >
                  <option value="" className="text-gray-800">Select a time</option>
                  {timeSlots.map((slot) => (
                    <option key={slot.value} value={slot.value} className="text-gray-800">
                      {slot.label}
                    </option>
                  ))}
                </select>
                {fieldErrors.meetingTime && touched.meetingTime && (
                  <p className="text-red-300 text-xs mt-1">{fieldErrors.meetingTime}</p>
                )}
                {userTimezone && (
                  <p className="text-indigo-300 text-xs mt-1">Timezone: {userTimezone}</p>
                )}
              </div>
            </div>

            {submitStatus.type === "error" && (
              <p className="mt-4 text-red-300 text-sm text-center">
                {submitStatus.message}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 w-full bg-white text-indigo-600 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-50 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Calendar className="w-5 h-5" />
                  Book My Free Demo
                </>
              )}
            </button>
          </form>
        )}

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 mt-8 text-indigo-200 text-sm">
          {trustStats.map((stat) => (
            <span key={stat}>✓ {stat}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
