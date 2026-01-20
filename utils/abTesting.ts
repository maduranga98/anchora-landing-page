/**
 * A/B Testing Utility
 *
 * Simple client-side A/B testing infrastructure for testing different
 * variants of CTAs, buttons, and messaging on the homepage.
 */

export interface Variant {
  readonly id: string;
  readonly name: string;
  readonly weight: number; // Probability weight (e.g., 50 for 50%)
}

export interface Experiment {
  readonly id: string;
  readonly name: string;
  readonly variants: readonly Variant[];
}

/**
 * Get or assign a variant for a given experiment
 * Uses localStorage to persist variant assignment across sessions
 */
export function getVariant(experiment: Experiment): Variant {
  if (typeof window === "undefined") {
    // Server-side: return default variant
    return experiment.variants[0];
  }

  const storageKey = `ab_test_${experiment.id}`;

  // Check if user already has an assigned variant
  const storedVariantId = localStorage.getItem(storageKey);
  if (storedVariantId) {
    const variant = experiment.variants.find(v => v.id === storedVariantId);
    if (variant) {
      return variant;
    }
  }

  // Assign new variant based on weights
  const assignedVariant = assignVariant(experiment.variants);
  localStorage.setItem(storageKey, assignedVariant.id);

  // Track variant assignment
  trackVariantAssignment(experiment.id, assignedVariant.id);

  return assignedVariant;
}

/**
 * Assign a variant based on weighted random selection
 */
function assignVariant(variants: readonly Variant[]): Variant {
  const totalWeight = variants.reduce((sum, v) => sum + v.weight, 0);
  let random = Math.random() * totalWeight;

  for (const variant of variants) {
    random -= variant.weight;
    if (random <= 0) {
      return variant;
    }
  }

  // Fallback to first variant
  return variants[0];
}

/**
 * Track when a user is assigned to a variant
 */
function trackVariantAssignment(experimentId: string, variantId: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "ab_test_assigned", {
      event_category: "ab_testing",
      event_label: `${experimentId}:${variantId}`,
      experiment_id: experimentId,
      variant_id: variantId,
    });
  }
}

/**
 * Track a conversion for the current variant
 */
export function trackVariantConversion(
  experimentId: string,
  conversionType: string,
  value?: string | number
) {
  if (typeof window === "undefined") return;

  const storageKey = `ab_test_${experimentId}`;
  const variantId = localStorage.getItem(storageKey);

  if (!variantId) return;

  // Track with Google Analytics
  if ((window as any).gtag) {
    (window as any).gtag("event", "ab_test_conversion", {
      event_category: "ab_testing",
      event_label: `${experimentId}:${variantId}:${conversionType}`,
      experiment_id: experimentId,
      variant_id: variantId,
      conversion_type: conversionType,
      value: value,
    });
  }

  // Track with Meta Pixel
  if ((window as any).fbq) {
    (window as any).fbq("trackCustom", "ABTestConversion", {
      experiment_id: experimentId,
      variant_id: variantId,
      conversion_type: conversionType,
      value: value,
    });
  }
}

/**
 * Predefined experiments
 */
export const EXPERIMENTS = {
  HERO_CTA: {
    id: "hero_cta_v1",
    name: "Hero CTA Button Text",
    variants: [
      { id: "control", name: "Book a Free Demo", weight: 50 },
      { id: "variant_a", name: "Get Your Free Demo", weight: 50 },
    ],
  },
  HERO_CTA_STYLE: {
    id: "hero_cta_style_v1",
    name: "Hero CTA Button Style",
    variants: [
      { id: "control", name: "Teal Background", weight: 50 },
      { id: "variant_a", name: "Coral Background", weight: 50 },
    ],
  },
  FLOATING_BUTTON_POSITION: {
    id: "floating_button_position_v1",
    name: "Floating Button Position",
    variants: [
      { id: "control", name: "Bottom Right", weight: 50 },
      { id: "variant_a", name: "Bottom Left", weight: 50 },
    ],
  },
} as const;
