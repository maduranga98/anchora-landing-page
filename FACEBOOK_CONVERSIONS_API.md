# Facebook Conversions API Integration

This document explains how to use the Facebook Conversions API integration in the Anchora landing page.

## Overview

The Facebook Conversions API allows you to track user events server-side, providing more reliable and privacy-compliant tracking. This integration sends events to both:
- **Client-side**: Facebook Pixel (browser-based tracking)
- **Server-side**: Facebook Conversions API (server-based tracking)

## Setup

### 1. Environment Variables

The following environment variables are required in your `.env.local` file:

```env
NEXT_PUBLIC_FB_PIXEL_ID=1176012610988242
NEXT_PUBLIC_FB_ACCESS_TOKEN=your_access_token_here
```

These credentials are already configured in the `.env.local` file.

### 2. Facebook Pixel

The Facebook Pixel is automatically loaded on the demo page and uses the `NEXT_PUBLIC_FB_PIXEL_ID` from environment variables.

## Usage

### Basic Event Tracking

Use the helper functions from `utils/trackFacebookEvent.ts`:

```typescript
import { trackLead, trackPurchase, trackPageView, trackViewContent } from '@/utils/trackFacebookEvent';

// Track a lead (demo booking, form submission)
await trackLead({
  email: 'user@example.com',
  firstName: 'John',
  lastName: 'Doe',
  phone: '+1234567890',
  contentName: 'Demo Booking',
  contentCategory: 'Demo Request',
  value: 100
});

// Track a purchase
await trackPurchase({
  email: 'user@example.com',
  firstName: 'John',
  lastName: 'Doe',
  currency: 'USD',
  value: '142.52',
  attributionShare: '0.3'
});

// Track page view
await trackPageView();

// Track content view
await trackViewContent({
  contentName: 'Product Page',
  contentCategory: 'Products',
  value: 100,
  currency: 'USD'
});
```

### Advanced: Custom Events

For custom events, use the `trackFacebookEvent` function:

```typescript
import { trackFacebookEvent } from '@/utils/trackFacebookEvent';

await trackFacebookEvent({
  eventName: 'CustomEvent',
  email: 'user@example.com',
  phone: '+1234567890',
  firstName: 'John',
  lastName: 'Doe',
  city: 'New York',
  state: 'NY',
  zip: '10001',
  country: 'US',
  customData: {
    content_name: 'Custom Event',
    custom_field: 'custom_value'
  }
});
```

### Direct API Usage

You can also call the API route directly:

```typescript
const response = await fetch('/api/facebook-conversion', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    eventName: 'Purchase',
    email: 'user@example.com',
    phone: '+1234567890',
    customData: {
      currency: 'USD',
      value: '142.52'
    },
    attributionShare: '0.3'
  })
});

const result = await response.json();
```

## Event Types

Common Facebook event types:
- `PageView` - User views a page
- `ViewContent` - User views content
- `Lead` - User submits a form (demo booking, contact, etc.)
- `Purchase` - User completes a purchase
- `AddToCart` - User adds item to cart
- `InitiateCheckout` - User begins checkout
- `CompleteRegistration` - User completes registration

## Data Privacy

User data (email, phone, name, etc.) is automatically hashed using SHA-256 before being sent to Facebook, ensuring privacy compliance.

## API Endpoint

**POST** `/api/facebook-conversion`

### Request Body

```json
{
  "eventName": "Purchase",
  "email": "user@example.com",
  "phone": "+1234567890",
  "firstName": "John",
  "lastName": "Doe",
  "city": "New York",
  "state": "NY",
  "zip": "10001",
  "country": "US",
  "customData": {
    "currency": "USD",
    "value": "142.52",
    "content_name": "Product Name",
    "content_category": "Category"
  },
  "attributionShare": "0.3"
}
```

### Response

```json
{
  "success": true
}
```

## Files

- `utils/facebookConversionsApi.ts` - Server-side utility for Facebook Conversions API
- `utils/trackFacebookEvent.ts` - Client-side helper functions for tracking events
- `app/api/facebook-conversion/route.ts` - API route for handling conversion events
- `.env.local` - Environment variables (not committed to git)
- `.env.example` - Template for environment variables

## Testing

To test the integration:

1. Ensure environment variables are set
2. Use the Facebook Events Manager to monitor events in real-time
3. Check browser console for any errors
4. Verify events appear in Facebook Events Manager with both pixel and server sources

## References

- [Facebook Conversions API Documentation](https://developers.facebook.com/docs/marketing-api/conversions-api)
- [Facebook Pixel Documentation](https://developers.facebook.com/docs/meta-pixel)
