import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/app/utils/replitmail';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, address, numCans, serviceType } = body;

    if (!name || !email || !phone || !address) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const cityEmail = process.env.CITY_OF_TIFTON_EMAIL;
    const rylandEmail = process.env.RYLAND_EMAIL;

    if (!cityEmail || !rylandEmail) {
      return NextResponse.json(
        { error: 'Email configuration missing' },
        { status: 500 }
      );
    }

    const emailContent = `
New City Trash Service Signup Request

Name: ${name}
Email: ${email}
Phone: ${phone}
Address: ${address}
Number of Cans: ${numCans || '1'}
Service Type: ${serviceType || 'Residential Trash Service'}

This request was submitted through the Ryland Environmental website.
    `.trim();

    await sendEmail({
      to: [cityEmail, rylandEmail],
      subject: `New Trash Service Signup - ${name}`,
      text: emailContent,
    });

    return NextResponse.json({ 
      success: true,
      message: 'Your signup request has been submitted successfully!'
    });

  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Failed to process signup request' },
      { status: 500 }
    );
  }
}
