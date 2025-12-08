import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

function generateReferenceNumber(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'RYL-';
  for (let i = 0; i < 5; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const {
      issueType,
      brokenParts,
      cartSize,
      isRecurring,
      explanation,
      photos,
      name,
      address,
      email,
      phone,
      town,
      preferredContact,
      pickupDate,
      serviceType,
      blockingAccess,
      blockingOther,
      billCurrent,
      cartOutOnTime,
      cartOutDelayed,
    } = body;

    if (!name || !phone || !town) {
      return NextResponse.json(
        { error: 'Name, phone, and town are required' },
        { status: 400 }
      );
    }

    const referenceNumber = generateReferenceNumber();

    const issueTypeLabels: Record<string, string> = {
      broken: 'Broken Cart',
      missing: 'Missing/Destroyed Cart',
      missed: 'Missed Pickup',
      stinks: 'Cart Cleaning',
    };

    const { data, error } = await supabaseAdmin
      .from('form_submissions')
      .insert({
        form_type: 'help_request',
        office_slug: town.toLowerCase().replace(/\s+/g, '-'),
        name,
        email: email || null,
        phone,
        organization: null,
        service_type: issueTypeLabels[issueType] || issueType,
        message: JSON.stringify({
          issueType,
          brokenParts,
          cartSize,
          isRecurring,
          explanation,
          photos,
          address,
          town,
          preferredContact,
          pickupDate,
          serviceType,
          blockingAccess,
          blockingOther,
          billCurrent,
          cartOutOnTime,
          cartOutDelayed,
          referenceNumber,
        }),
        status: 'new',
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      referenceNumber,
      id: data.id 
    });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Failed to submit request' }, { status: 500 });
  }
}
