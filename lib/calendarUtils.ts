import { google } from 'googleapis';

const auth = new google.auth.JWT(
  process.env.GOOGLE_CLIENT_EMAIL,
  process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  'https://www.googleapis.com/auth/calendar' // Calendar API scope
);

const calendar = google.calendar({ version: 'v3', auth });

export async function listAllEvents(calendarId: string) {
  try {
    const response = await calendar.events.list({
      calendarId,
      timeMin: '1970-01-01T00:00:00Z', // Fetch all events from the beginning of time
      singleEvents: true,
      orderBy: 'startTime',
    });

    const events = response.data.items;
    return events || [];
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
}

export async function listUpcomingEvents(calendarId: string, maxResults: number = 10) {
  try {
    const response = await calendar.events.list({
      calendarId,
      timeMin: new Date().toISOString(), // Fetch only upcoming events
      maxResults,
      singleEvents: true,
      orderBy: 'startTime',
    });

    const events = response.data.items;
    return events || [];
  } catch (error) {
    console.error('Error fetching upcoming events:', error);
    throw error;
  }
}
