/**
 * Facebook Conversions API Utility
 * Server-side event tracking for Facebook
 */

import crypto from 'crypto';

// Hash user data using SHA-256 for privacy
export function hashUserData(value: string | null | undefined): string[] | null[] {
  if (!value || value.trim() === '') {
    return [null];
  }
  const hash = crypto.createHash('sha256').update(value.toLowerCase().trim()).digest('hex');
  return [hash];
}

// Facebook Conversions API event interface
export interface FacebookConversionEvent {
  event_name: string;
  event_time: number;
  action_source: string;
  user_data?: {
    em?: (string | null)[];
    ph?: (string | null)[];
    fn?: (string | null)[];
    ln?: (string | null)[];
    ct?: (string | null)[];
    st?: (string | null)[];
    zp?: (string | null)[];
    country?: (string | null)[];
  };
  custom_data?: {
    currency?: string;
    value?: string | number;
    content_name?: string;
    content_category?: string;
    [key: string]: any;
  };
  event_source_url?: string;
  attribution_data?: {
    attribution_share?: string;
  };
  original_event_data?: {
    event_name: string;
    event_time: number;
  };
}

export interface FacebookConversionPayload {
  data: FacebookConversionEvent[];
}

/**
 * Send event to Facebook Conversions API
 */
export async function sendFacebookConversionEvent(
  event: FacebookConversionEvent
): Promise<{ success: boolean; error?: string }> {
  const pixelId = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
  const accessToken = process.env.NEXT_PUBLIC_FB_ACCESS_TOKEN;

  if (!pixelId || !accessToken) {
    console.error('Facebook Pixel ID or Access Token not configured');
    return { success: false, error: 'Facebook credentials not configured' };
  }

  const payload: FacebookConversionPayload = {
    data: [event],
  };

  try {
    const url = `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${accessToken}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Facebook Conversions API error:', result);
      return { success: false, error: result.error?.message || 'API request failed' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending Facebook conversion event:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

/**
 * Create a Facebook conversion event with standard format
 */
export function createConversionEvent(params: {
  eventName: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  eventSourceUrl?: string;
  customData?: {
    currency?: string;
    value?: string | number;
    content_name?: string;
    content_category?: string;
    [key: string]: any;
  };
  attributionShare?: string;
}): FacebookConversionEvent {
  const eventTime = Math.floor(Date.now() / 1000);

  const event: FacebookConversionEvent = {
    event_name: params.eventName,
    event_time: eventTime,
    action_source: 'website',
    user_data: {
      em: params.email ? hashUserData(params.email) : [null],
      ph: params.phone ? hashUserData(params.phone) : [null],
    },
    original_event_data: {
      event_name: params.eventName,
      event_time: eventTime,
    },
  };

  // Add optional user data fields
  if (params.firstName) {
    event.user_data!.fn = hashUserData(params.firstName);
  }
  if (params.lastName) {
    event.user_data!.ln = hashUserData(params.lastName);
  }
  if (params.city) {
    event.user_data!.ct = hashUserData(params.city);
  }
  if (params.state) {
    event.user_data!.st = hashUserData(params.state);
  }
  if (params.zip) {
    event.user_data!.zp = hashUserData(params.zip);
  }
  if (params.country) {
    event.user_data!.country = hashUserData(params.country);
  }

  // Add event source URL if provided
  if (params.eventSourceUrl) {
    event.event_source_url = params.eventSourceUrl;
  }

  // Add custom data if provided
  if (params.customData) {
    event.custom_data = params.customData;
  }

  // Add attribution data if provided
  if (params.attributionShare) {
    event.attribution_data = {
      attribution_share: params.attributionShare,
    };
  }

  return event;
}
