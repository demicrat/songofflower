'use client';
import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import { Event } from '@/types/Event'

interface MonthlyCalendarProps {
  onEventClick: (event: Event) => void;
}

const MonthlyCalendar: React.FC<MonthlyCalendarProps> = ({ onEventClick }) => {
  const [currentMonth, setCurrentMonth] = useState(dayjs().startOf('month'));
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch('/api/events');
      if (res.ok) {
        const data = await res.json();
        setEvents(data);
      } else {
        console.error('Failed to fetch events');
      }
    };

    fetchEvents();
  }, [currentMonth]);

  const daysInMonth = currentMonth.daysInMonth();
  const firstDayOfWeek = currentMonth.startOf('month').day();

  const prevMonth = () => setCurrentMonth(currentMonth.subtract(1, 'month'));
  const nextMonth = () => setCurrentMonth(currentMonth.add(1, 'month'));

  const formatEventTime = (event: Event) => {
    const startTime = dayjs(event.start.dateTime);
    const endTime = dayjs(event.end.dateTime);
    return `${startTime.format('h:mm A')} - ${endTime.format('h:mm A')}`;
  };

  const getEventColor = (summary: string) => {
    if (summary.toLowerCase().includes('general meeting')) return 'text-gray-800 bg-green-300';
    if (summary.toLowerCase().includes('certamen meeting')) return 'bg-violet-300 text-gray-800';
    if (summary.toLowerCase().includes('art meeting')) return 'bg-teal-300 text-gray-800';
    if (summary.toLowerCase().includes('chariot meeting')) return 'bg-blue-300 text-gray-800';
    if (summary.toLowerCase().includes('publicity team meeting')) return 'bg-fuchsia-300 text-gray-800';
    if (summary.toLowerCase().includes('event') || summary.toLowerCase().includes('competition')) return 'bg-rose-300 text-gray-800';
    return 'bg-gray-200'; // Default color if no keyword matches
  };

  return (
    <div className="p-4 bg-green-400 text-white rounded-lg">
      <div className="flex justify-between mb-4">
        <button onClick={prevMonth} className="hover:opacity-80 duration duration-300 bg-gray-700 px-4 py-2 rounded">
          Previous
        </button>
        <h2 className="text-xl font-bold">{currentMonth.format('MMMM YYYY')}</h2>
        <button onClick={nextMonth} className="hover:opacity-80 duration duration-300 bg-gray-700 px-4 py-2 rounded">
          Next
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 bg-green-200 text-gray-600 p-4 rounded">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
          <div key={index} className="text-center font-semibold">
            {day}
          </div>
        ))}
        {Array.from({ length: firstDayOfWeek }).map((_, index) => (
          <div key={index}></div>
        ))}
        {Array.from({ length: daysInMonth }).map((_, day) => {
          const date = currentMonth.date(day + 1);
          const isToday = date.isSame(dayjs(), 'day');
          return (
            <div
              key={day}
              className={`p-2 h-24 rounded ${isToday ? 'text-gray-50 bg-emerald-500' : 'bg-green-50'} overflow-y-auto`}
            >
              <div className="text-center font-bold">{day + 1}</div>
              <div className="text-xs mt-1 space-y-1">
                {events
                  .filter((event) =>
                    dayjs(event.start.dateTime).isSame(date, 'day')
                  )
                  .map((event, index) => (
                    <div
                      key={index}
                      className={`truncate rounded-sm p-1 duration duration-300 hover:opacity-70 hover:text-gray-600 cursor-pointer ${getEventColor(event.summary)}`}
                      onClick={() => onEventClick(event)}
                    >
                      {event.summary}: {formatEventTime(event)}
                    </div>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MonthlyCalendar;
