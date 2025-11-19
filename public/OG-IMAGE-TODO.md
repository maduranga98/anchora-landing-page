# Open Graph Image Required

## Action Required
Create an Open Graph preview image at `/public/og-image.png`

## Specifications
- **Dimensions**: 1200 x 630 pixels (required for optimal display)
- **Format**: PNG or JPG
- **File size**: Keep under 1MB for fast loading
- **Content**: Should include:
  - Anchora logo
  - Tagline: "Your Anchor in Every Storm"
  - Key value proposition
  - Brand colors (primary-teal #1abc9c, primary-navy #2d3e50)

## Quick Options

### Option 1: Use Canva (Recommended)
1. Go to canva.com
2. Create custom size: 1200 x 630px
3. Use template: "Facebook Post" or "Open Graph"
4. Add your branding and text
5. Export as PNG
6. Save to `/public/og-image.png`

### Option 2: Use Figma
1. Create new frame: 1200 x 630px
2. Design with brand colors and logo
3. Export as PNG
4. Save to `/public/og-image.png`

### Option 3: Online OG Image Generator
- https://www.opengraph.xyz/
- https://og-playground.vercel.app/

## Current Status
The metadata in `app/layout.tsx` is already configured to use `/og-image.png`.
Once you create the image, it will automatically be used for social media previews.

## Testing
After creating the image, test with:
- Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/
