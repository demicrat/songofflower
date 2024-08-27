'use client';
import React, { useEffect, useState } from 'react';
import UpcomingEventCard from './UpcomingEventCard';

interface Event {
  date: string;
  month: string;
  title: string;
  time: string;
  description: string;
  address: string;
}

const UpcomingEventListCalendar: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events'); // Fetching events from the API
        const data = await response.json();
        
        // Process the data to extract the relevant information
        const upcomingEvents = data.slice(0, 4).map((event: any) => {
          const eventDate = new Date(event.start.dateTime || event.start.date);
          const formattedDate = eventDate.getDate().toString().padStart(2, '0');
          const formattedMonth = eventDate.toLocaleString('default', { month: 'short' }).toUpperCase();
          const formattedTime = `${eventDate.getHours()}:${eventDate.getMinutes().toString().padStart(2, '0')}`;
          const endDate = new Date(event.end.dateTime);
          const formattedEndTime = `${endDate.getHours()}:${endDate.getMinutes().toString().padStart(2, '0')}`;

          return {
            date: formattedDate,
            month: formattedMonth,
            title: event.summary,
            time: `${formattedTime}-${formattedEndTime}`,
            description: event.description || '',
            address: event.location || '',
          };
        });

        setEvents(upcomingEvents);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      {events.map((event, index) => (
        <UpcomingEventCard
          key={index}
          date={event.date}
          month={event.month}
          title={event.title}
          time={event.time}
          address={event.address}
          description={event.description}
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default UpcomingEventListCalendar;
/*import React from 'react';
import UpcomingEventCard from './UpcomingEventCard';

const events = [
  { date: '01', month: 'JAN', title: 'New Year Celebration', time: '3:30-4:30PM', description: 'Have fun with us and eat ricecakes!', address: 'Room 101' },
  { date: '14', month: 'FEB', title: 'Valentine’s Day Party', time: '2:00-3:00PM', description: 'Make and give Valentines to your friends, family, and significant others... Join us for some fun :)', address: 'Room 202' },
  { date: '17', month: 'MAR', title: 'St. Patrick’s Day Parade', time: '6:00-7:00AM', description: 'Silly string the school with us and leave trails of golden dust around before school. hehe.', address: 'Main Hall' },
];

const UpcomingEventListCalendar: React.FC = () => {
  return (
    <div>
      {events.map((event, index) => (
        <UpcomingEventCard
          key={index}
          date={event.date}
          month={event.month}
          title={event.title}
          time={event.time}
          address={event.address}
          description={event.description}
          isEven={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default UpcomingEventListCalendar;*/
