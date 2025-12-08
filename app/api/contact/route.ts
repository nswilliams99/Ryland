import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const { 
      form_type = 'contact',
      office_slug,
      name, 
      email, 
      phone,
      organization,
      service_type,
      message 
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabaseAdmin
      .from('form_submissions')
      .insert({
        form_type,
        office_slug,
        name,
        email,
        phone,
        organization,
        service_type,
        message,
        status: 'new'
      })
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data.id });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
  }
}
