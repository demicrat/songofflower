import React from 'react';
import Link from 'next/link';
import UpcomingEventListCalendar from '@/components/UpcomingEventListCalendar';

export default function UpcomingEvents() {
  return (
    <div className="pb-20">
      <h1 className="text-gray-800 text-6xl text-bold mt-5 ml-20 pl-20 pb-10 pt-20 ">Upcoming Events</h1>
      <UpcomingEventListCalendar />
      <Link href="/events" className="ml-20 pl-20 text-green-800 italic text-md hover:opacity-70 duration duration-300">See More Events...</Link>
    </div>
  );
}
