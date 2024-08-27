import { NextRequest, NextResponse } from 'next/server';
import { listAllEvents, listUpcomingEvents } from '@/lib/calendarUtils';


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const filter = searchParams.get('filter'); // Check if a 'filter' query parameter is present

  try {
    const calendarId = process.env.GOOGLE_CALENDAR_ID || '';

    if (!calendarId) {
      throw new Error('Calendar ID is not defined');
    }

    if (filter === 'upcoming') {
      const events = await listUpcomingEvents(calendarId);
      return NextResponse.json(events);
    }

    // Default to returning all events if no 'filter' is specified
    const events = await listAllEvents(calendarId);
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}
