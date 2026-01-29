/**
 * Client-side Facebook Event Tracking
 * Sends events to both Facebook Pixel (client-side) and Conversions API (server-side)
 */

interface TrackFacebookEventParams {
  eventName: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  customData?: {
    currency?: string;
    value?: string | number;
    content_name?: string;
    content_category?: string;
    [key: string]: any;
  };
  attributionShare?: string;
}

/**
 * Track a Facebook event on both client-side (Pixel) and server-side (Conversions API)
 */
export async function trackFacebookEvent(params: TrackFacebookEventParams): Promise<void> {
  const { eventName, customData, ...userData } = params;

  // Track on client-side using Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    if (customData) {
      (window as any).fbq('track', eventName, customData);
    } else {
      (window as any).fbq('track', eventName);
    }
  }

  // Track on server-side using Conversions API
  try {
    const eventSourceUrl = typeof window !== 'undefined' ? window.location.href : undefined;

    const response = await fetch('/api/facebook-conversion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        ...userData,
        eventSourceUrl,
        customData,
      }),
    });

    if (!response.ok) {
      console.error('Failed to send event to Facebook Conversions API');
    }
  } catch (error) {
    console.error('Error sending event to Facebook Conversions API:', error);
  }
}

/**
 * Track a Lead event (demo booking, form submission, etc.)
 */
export async function trackLead(params: {
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  contentName?: string;
  contentCategory?: string;
  value?: string | number;
}): Promise<void> {
  await trackFacebookEvent({
    eventName: 'Lead',
    email: params.email,
    firstName: params.firstName,
    lastName: params.lastName,
    phone: params.phone,
    customData: {
      content_name: params.contentName,
      content_category: params.contentCategory,
      value: params.value,
    },
  });
}

/**
 * Track a Purchase event
 */
export async function trackPurchase(params: {
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  currency: string;
  value: string | number;
  attributionShare?: string;
}): Promise<void> {
  await trackFacebookEvent({
    eventName: 'Purchase',
    email: params.email,
    firstName: params.firstName,
    lastName: params.lastName,
    phone: params.phone,
    customData: {
      currency: params.currency,
      value: params.value,
    },
    attributionShare: params.attributionShare,
  });
}

/**
 * Track a PageView event
 */
export async function trackPageView(): Promise<void> {
  await trackFacebookEvent({
    eventName: 'PageView',
  });
}

/**
 * Track a ViewContent event
 */
export async function trackViewContent(params: {
  contentName?: string;
  contentCategory?: string;
  value?: string | number;
  currency?: string;
}): Promise<void> {
  await trackFacebookEvent({
    eventName: 'ViewContent',
    customData: {
      content_name: params.contentName,
      content_category: params.contentCategory,
      value: params.value,
      currency: params.currency,
    },
  });
}
