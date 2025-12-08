import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const officeSlug = searchParams.get('office');

    let query = supabase.from('faqs').select('*');

    if (category) {
      query = query.eq('category', category);
    }

    if (officeSlug) {
      const { data: office } = await supabase
        .from('offices')
        .select('id')
        .eq('slug', officeSlug)
        .single();

      if (office) {
        const { data: officeFaqs } = await supabase
          .from('office_faqs')
          .select('faq_id')
          .eq('office_id', office.id);

        if (officeFaqs) {
          const faqIds = officeFaqs.map(of => of.faq_id);
          query = query.in('id', faqIds);
        }
      }
    }

    const { data: faqs, error } = await query.order('category').order('question');

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(faqs);
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json({ error: 'Failed to fetch FAQs' }, { status: 500 });
  }
}
