# A/B Testing Infrastructure

## Overview

The Anchora landing page includes a simple but powerful A/B testing infrastructure for testing different variants of CTAs, buttons, and other elements to optimize conversions.

## How It Works

### 1. Variant Assignment

- When a user visits the site for the first time, they are randomly assigned to a variant based on configured weights
- The assignment is stored in `localStorage` to ensure consistency across sessions
- The assignment is tracked in Google Analytics and Meta Pixel for analysis

### 2. Conversion Tracking

- All interactions with tested elements (button clicks, form submissions, etc.) are tracked
- Conversion events include the experiment ID and variant ID for segmentation
- Data is sent to both Google Analytics (GA4) and Meta Pixel

## Active Experiments

### 1. Hero CTA Button Text (`hero_cta_v1`)

Tests different text variations for the main CTA button in the hero section.

**Variants:**
- **Control (50%)**: "Book a Free Demo"
- **Variant A (50%)**: "Get Your Free Demo"

**Location:** Homepage hero section
**Component:** `HeroCTAVariant.tsx`

### 2. Hero CTA Button Style (`hero_cta_style_v1`)

Tests different background colors for the hero CTA button.

**Variants:**
- **Control (50%)**: Teal background (`#1abc9c`)
- **Variant A (50%)**: Coral background (`#ff6b6b`)

**Location:** Homepage hero section
**Component:** `HeroCTAVariant.tsx`

### 3. Floating Button Position (`floating_button_position_v1`)

Tests the optimal position for the floating booking widget button.

**Variants:**
- **Control (50%)**: Bottom right
- **Variant A (50%)**: Bottom left

**Location:** Floating button (all pages)
**Component:** `BookingWidget.tsx`

## Creating New Experiments

### Step 1: Define the Experiment

Add your experiment to `/utils/abTesting.ts`:

```typescript
export const EXPERIMENTS = {
  // ... existing experiments
  YOUR_EXPERIMENT: {
    id: "your_experiment_id",
    name: "Your Experiment Name",
    variants: [
      { id: "control", name: "Control Variant", weight: 50 },
      { id: "variant_a", name: "Variant A", weight: 50 },
    ],
  },
};
```

### Step 2: Implement the Variant Logic

In your component:

```typescript
import { getVariant, trackVariantConversion, EXPERIMENTS } from "@/utils/abTesting";

export default function YourComponent() {
  const [variant, setVariant] = useState("control");

  useEffect(() => {
    const assignedVariant = getVariant(EXPERIMENTS.YOUR_EXPERIMENT);
    setVariant(assignedVariant.id);
  }, []);

  const handleAction = () => {
    // Track conversion
    trackVariantConversion(
      EXPERIMENTS.YOUR_EXPERIMENT.id,
      "action_type",
      optionalValue
    );

    // Your action logic
  };

  // Render based on variant
  return (
    <div>
      {variant === "control" ? (
        <ControlComponent />
      ) : (
        <VariantComponent />
      )}
    </div>
  );
}
```

### Step 3: Track Conversions

Track when users interact with your variant:

```typescript
trackVariantConversion(
  EXPERIMENTS.YOUR_EXPERIMENT.id,
  "conversion_type", // e.g., "button_clicked", "form_submitted"
  optionalValue       // e.g., company size, value amount
);
```

## Analyzing Results

### Google Analytics 4

1. Navigate to **Analytics** → **Events**
2. Look for events:
   - `ab_test_assigned`: When users are assigned to variants
   - `ab_test_conversion`: When users convert

3. Create custom reports:
   - Group by `experiment_id` and `variant_id`
   - Compare conversion rates between variants
   - Use filters to segment by device, traffic source, etc.

### Example GA4 Event Structure

```javascript
{
  event: "ab_test_conversion",
  event_category: "ab_testing",
  event_label: "hero_cta_v1:variant_a:cta_clicked",
  experiment_id: "hero_cta_v1",
  variant_id: "variant_a",
  conversion_type: "cta_clicked",
  value: "optional_value"
}
```

### Meta Pixel

1. Navigate to **Events Manager**
2. Look for custom event: `ABTestConversion`
3. Filter by experiment_id and variant_id parameters
4. Compare performance metrics between variants

## Best Practices

### 1. Sample Size

- Run experiments for at least 2 weeks to account for weekly patterns
- Aim for at least 100 conversions per variant for statistical significance
- Use a significance calculator to validate results before making decisions

### 2. Variant Weights

- Start with 50/50 splits for most experiments
- Adjust weights based on confidence and risk tolerance
- Consider 80/20 splits for higher-risk experiments (80% control, 20% variant)

### 3. Experiment Naming

- Use descriptive IDs: `hero_cta_v1`, not `exp1`
- Include version numbers for iteration: `v1`, `v2`, etc.
- Document what changed between versions

### 4. Avoiding Conflicts

- Don't run too many experiments simultaneously on the same page element
- Test one change at a time when possible for clearer attribution
- If testing multiple elements, ensure they're independent

### 5. When to End an Experiment

End an experiment when:
- One variant is clearly winning (95% statistical significance)
- The experiment has run for the minimum duration (2+ weeks)
- You've reached your target sample size
- Business priorities change

## Technical Details

### Storage

- Variant assignments are stored in `localStorage`
- Key format: `ab_test_{experiment_id}`
- Persists across sessions until localStorage is cleared

### Server-Side Rendering

- The utility safely handles SSR by returning the default variant on the server
- Variant assignment happens client-side to ensure consistency

### Performance

- A/B test logic runs after component mount (client-side only)
- Minimal performance impact (<1ms per variant assignment)
- No external dependencies or network requests

## Troubleshooting

### I'm always seeing the same variant

Clear your browser's localStorage to get reassigned:

```javascript
localStorage.removeItem('ab_test_hero_cta_v1');
// Or clear all:
localStorage.clear();
```

### Analytics events aren't firing

1. Check that GA4 and Meta Pixel are properly configured
2. Open browser console and verify `gtag` and `fbq` are defined
3. Use GA4 DebugView to see events in real-time

### Variants aren't being tracked

Ensure you're calling `trackVariantConversion()` when the conversion event happens (not just when the variant is assigned).

## Future Enhancements

Potential improvements to consider:

1. **Server-side A/B testing**: Use cookies for SSR support
2. **Multi-armed bandit**: Automatically allocate more traffic to winning variants
3. **Visual experiment builder**: No-code tool for marketers
4. **Advanced targeting**: Segment experiments by user attributes
5. **Automated statistical analysis**: Real-time significance calculations

## Support

For questions or issues with A/B testing:
1. Check this documentation
2. Review the `/utils/abTesting.ts` implementation
3. Contact the development team
