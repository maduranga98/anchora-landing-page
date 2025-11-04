# Blueprint for Anchora Landing Page

## Overview

This document outlines the plan for creating a new landing page for "Anchora," an employee feedback platform. The landing page will be built using Next.js and Tailwind CSS, following the detailed content and design specifications provided.

## Project Outline

### Style and Design

*   **Color Palette:**
    *   Navy: `#2D3E50` (Headers, text)
    *   Teal: `#1ABC9C` (Accents, success states)
    *   Coral: `#FF6B6B` (Primary CTAs)
    *   Gray: `#7F8C8D` (Body text)
    *   White: `#ECF0F1` (Backgrounds)
*   **Typography:**
    *   Headers: Montserrat
    *   Body: Inter
*   **Layout:**
    *   Mobile-first and responsive.
    *   Max container width of 1200px.
    *   Consistent spacing and section padding.

### Features

The landing page will be a single-page design with the following sections:

1.  **Hero:** Main headline, subheadline, CTAs, and trust signals.
2.  **The Problem:** Highlights the pain points of poor employee feedback.
3.  **The Solution:** Explains how Anchora works in a three-step process.
4.  **Key Features:** A grid detailing the platform's features.
5.  **Benefits:** Value proposition for both employers and employees.
6.  **Use Cases:** How different industries can use Anchora.
7.  **Pricing:** A three-tiered pricing table.
8.  **How It Works:** A screenshot carousel.
9.  **Comparison:** A table comparing Anchora to competitors.
10. **Social Proof:** Testimonial section (placeholders for now).
11. **FAQ:** Frequently asked questions.
12. **Final CTA:** A final call-to-action to sign up or schedule a demo.
13. **Footer:** Comprehensive footer with navigation and contact information.

### SEO & Analytics

*   **Meta Tags:** Detailed meta tags for SEO and social sharing.
*   **Schema Markup:** JSON-LD schema for `SoftwareApplication`, `FAQPage`, and `Organization`.
*   **Analytics:** Google Analytics 4 tracking for CTA clicks.

## Implementation Plan

1.  **Update `src/app/page.js`:** Replace the current content with the new landing page structure using JSX and Tailwind CSS classes.
2.  **Update `src/app/globals.css`:** Add `@import` rules for the Montserrat and Inter fonts from Google Fonts and define the color palette as CSS variables.
3.  **Update `src/app/layout.js`:** Add the specified SEO meta tags and JSON-LD schema markup to the `<head>` and `<body>` of the root layout.
4.  **Install Dependencies:** No new dependencies are immediately apparent, but I will install any that become necessary (e.g., for icons or carousels).
5.  **Add Images:** Create placeholder images for screenshots and social proof.
6.  **Lint and Format:** Run `npm run lint -- --fix` to ensure code quality.
