import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data: offices, error } = await supabase
      .from('offices')
      .select(`
        *,
        office_services (
          services (*)
        )
      `)
      .order('name');

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(offices);
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Failed to fetch offices' }, { status: 500 });
  }
}
