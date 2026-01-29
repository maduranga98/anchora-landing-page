/**
 * Facebook Conversions API Route
 * Handles server-side event tracking for Facebook
 */

import { NextRequest, NextResponse } from 'next/server';
import { createConversionEvent, sendFacebookConversionEvent } from '@/utils/facebookConversionsApi';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      eventName,
      email,
      phone,
      firstName,
      lastName,
      city,
      state,
      zip,
      country,
      eventSourceUrl,
      customData,
      attributionShare,
    } = body;

    // Validate required fields
    if (!eventName) {
      return NextResponse.json(
        { success: false, error: 'Event name is required' },
        { status: 400 }
      );
    }

    // Create the conversion event
    const event = createConversionEvent({
      eventName,
      email,
      phone,
      firstName,
      lastName,
      city,
      state,
      zip,
      country,
      eventSourceUrl,
      customData,
      attributionShare,
    });

    // Send the event to Facebook
    const result = await sendFacebookConversionEvent(event);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing Facebook conversion event:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
