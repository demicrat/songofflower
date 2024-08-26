import React from 'react';
import Link from 'next/link';
import UpcomingEventListCalendar from '@/components/UpcomingEventListCalendar';

export default function UpcomingEvents() {
  return (
    <div>
      <h1 className="text-gray-800 text-6xl text-bold mt-5 ml-20 pl-20 pb-10 pt-20 ">Upcoming Events</h1>
      <UpcomingEventListCalendar />
    </div>
  );
}
