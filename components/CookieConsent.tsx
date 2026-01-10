"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiX, FiCheck, FiSettings } from "react-icons/fi";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    functional: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("voxwel_cookie_consent");
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    } else {
      // Load saved preferences
      try {
        const saved = JSON.parse(consent);
        setPreferences(saved);
        // Apply analytics if consented
        if (saved.analytics) {
          enableAnalytics();
        }
      } catch (e) {
        console.error("Error parsing cookie consent:", e);
      }
    }
  }, []);

  const enableAnalytics = () => {
    // Enable Google Analytics if consented
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const disableAnalytics = () => {
    // Disable Google Analytics if not consented
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      functional: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem("voxwel_cookie_consent", JSON.stringify(allAccepted));
    enableAnalytics();
    setShowBanner(false);
    setShowPreferences(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      functional: false,
    };
    setPreferences(necessaryOnly);
    localStorage.setItem(
      "voxwel_cookie_consent",
      JSON.stringify(necessaryOnly)
    );
    disableAnalytics();
    setShowBanner(false);
    setShowPreferences(false);
  };

  const savePreferences = () => {
    localStorage.setItem("voxwel_cookie_consent", JSON.stringify(preferences));
    if (preferences.analytics) {
      enableAnalytics();
    } else {
      disableAnalytics();
    }
    setShowBanner(false);
    setShowPreferences(false);
  };

  const togglePreference = (key: "analytics" | "functional") => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={() => !showPreferences && setShowBanner(false)}
      />

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border-2 border-primary-teal/20">
          {!showPreferences ? (
            // Main Banner
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-teal to-primary-navy rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                      We Value Your Privacy
                    </h3>
                    <p className="text-sm text-text-tertiary mt-1">
                      VoxWel by Lumora Ventures
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowBanner(false)}
                  className="text-text-tertiary hover:text-text-primary transition-colors p-2"
                  aria-label="Close"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              <p className="text-text-secondary mb-6 leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site
                traffic, and provide personalized content. By clicking "Accept
                All", you consent to our use of cookies.{" "}
                <Link
                  href="/cookie-policy"
                  className="text-primary-teal hover:underline font-semibold"
                >
                  Learn more
                </Link>
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptAll}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-teal to-primary-navy text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <FiCheck className="w-5 h-5" />
                  Accept All
                </button>
                <button
                  onClick={acceptNecessary}
                  className="flex-1 px-6 py-3 bg-background-light text-text-primary rounded-xl font-semibold hover:bg-border-light transition-all border-2 border-border-light"
                >
                  Necessary Only
                </button>
                <button
                  onClick={() => setShowPreferences(true)}
                  className="flex-1 px-6 py-3 bg-white text-primary-teal rounded-xl font-semibold hover:bg-primary-teal/5 transition-all border-2 border-primary-teal flex items-center justify-center gap-2"
                >
                  <FiSettings className="w-5 h-5" />
                  Customize
                </button>
              </div>
            </div>
          ) : (
            // Preferences Panel
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                    Cookie Preferences
                  </h3>
                  <p className="text-sm text-text-tertiary mt-1">
                    Choose which cookies you want to allow
                  </p>
                </div>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="text-text-tertiary hover:text-text-primary transition-colors p-2"
                  aria-label="Back"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="bg-background-light rounded-xl p-5 border-2 border-border-light">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-text-primary mb-2 flex items-center gap-2">
                        Essential Cookies
                        <span className="text-xs bg-primary-teal text-white px-2 py-1 rounded-full">
                          Always Active
                        </span>
                      </h4>
                      <p className="text-sm text-text-secondary">
                        Required for the website to function properly. Cannot be
                        disabled.
                      </p>
                    </div>
                    <div className="w-12 h-6 bg-primary-teal rounded-full relative flex-shrink-0 cursor-not-allowed opacity-50">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-md" />
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-background-light rounded-xl p-5 border-2 border-border-light">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-text-primary mb-2">
                        Analytics Cookies
                      </h4>
                      <p className="text-sm text-text-secondary">
                        Help us understand how visitors interact with our
                        website by collecting and reporting information
                        anonymously.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference("analytics")}
                      className={`w-12 h-6 rounded-full relative flex-shrink-0 transition-colors ${
                        preferences.analytics
                          ? "bg-primary-teal"
                          : "bg-border-medium"
                      }`}
                      aria-label="Toggle analytics cookies"
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform ${
                          preferences.analytics
                            ? "right-1 translate-x-0"
                            : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Functional Cookies */}
                <div className="bg-background-light rounded-xl p-5 border-2 border-border-light">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-text-primary mb-2">
                        Functional Cookies
                      </h4>
                      <p className="text-sm text-text-secondary">
                        Enable enhanced functionality and personalization, such
                        as remembering your preferences.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference("functional")}
                      className={`w-12 h-6 rounded-full relative flex-shrink-0 transition-colors ${
                        preferences.functional
                          ? "bg-primary-teal"
                          : "bg-border-medium"
                      }`}
                      aria-label="Toggle functional cookies"
                    >
                      <div
                        className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform ${
                          preferences.functional
                            ? "right-1 translate-x-0"
                            : "left-1"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={savePreferences}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-primary-teal to-primary-navy text-white rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <FiCheck className="w-5 h-5" />
                  Save Preferences
                </button>
                <button
                  onClick={acceptAll}
                  className="flex-1 px-6 py-3 bg-background-light text-text-primary rounded-xl font-semibold hover:bg-border-light transition-all border-2 border-border-light"
                >
                  Accept All
                </button>
              </div>

              <p className="text-xs text-text-tertiary text-center mt-4">
                <Link
                  href="/cookie-policy"
                  className="text-primary-teal hover:underline"
                >
                  Read our Cookie Policy
                </Link>{" "}
                •{" "}
                <Link
                  href="/privacy-policy"
                  className="text-primary-teal hover:underline"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
