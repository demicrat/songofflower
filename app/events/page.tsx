'use client';
import React, { useEffect, useState } from 'react';
import MonthlyCalendar from '@/components/MonthlyCalendar';
import EventModal from '@/components/EventModal';
import { Event } from '@/types/Event';

const CalendarPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events');
        const data = await response.json();
        console.log(data);
        setEvents(data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div>
      <div className="text-5xl mt-24 text-gray-800 pb-10 pl-40 bg-green-50">Event Calendar📅</div>
      {/* Color Code Section */}
      <div className="mt-8 pl-40">
        <div className="text-xl mb-4">Color Code:</div>
        <div className="flex flex-row gap-x-8">
          <div className="flex flex-col gap-y-8">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-green-300 rounded-full mr-2"></div>
              <span>General Meetings</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-violet-300 rounded-full mr-2"></div>
              <span>Certamen Meetings</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-teal-300 rounded-full mr-2"></div>
              <span>Art Meetings</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-8">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-blue-300 rounded-full mr-2"></div>
              <span>Chariot Meetings</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-fuchsia-300 rounded-full mr-2"></div>
              <span>Publicity Team Meetings</span>
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 bg-rose-300 rounded-full mr-2"></div>
              <span>Events/Competition</span>
            </div>
          </div>
        </div>
      </div>
      {/* Placeholder for the Calendar */}
      <div className="m-20">
        <MonthlyCalendar onEventClick={handleEventClick} />
      </div>
      {/*<div className="mt-12 pl-40">
        {events.length > 0 ? (
          <ul>
            {events.map((event, index) => (
              <li
                key={index}
                className="mb-4 cursor-pointer hover:underline"
                onClick={() => handleEventClick(event)}
              >
                <div className="text-lg font-semibold">{event.summary}</div>
                <div>{new Date(event.start.dateTime).toLocaleString()}</div>
                <div>{event.location}</div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No upcoming events found.</p>
        )}
      </div>*/}

      {selectedEvent && (
        <EventModal event={selectedEvent} isOpen={isModalOpen} onClose={closeModal} />
      )}
    </div>
  );
};

export default CalendarPage;
