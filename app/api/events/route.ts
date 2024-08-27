import { NextResponse } from 'next/server';
import { listAllEvents } from '@/lib/calendarUtils';

export async function GET() {
  try {
    const calendarId = '83d539c813707464f54faa7ea72888eeade8c869959f3fca5b92e11a68d6b101@group.calendar.google.com';
    const events = await listAllEvents(calendarId);
    console.log("hello" + events);
    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}
