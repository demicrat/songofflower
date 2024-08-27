'use client';
import React from 'react';

interface Event {
  summary: string;
  start: { dateTime: string };
  end: { dateTime: string };
  location: string;
  description: string;
}

interface EventModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, isOpen, onClose }) => {
  if (!isOpen) return null;

  const getColorForEvent = (summary: string) => {
    if (summary.includes('General')) return 'bg-green-300';
    if (summary.includes('Certamen')) return 'bg-violet-300';
    if (summary.includes('Art')) return 'bg-teal-300';
    if (summary.includes('Chariot')) return 'bg-blue-300';
    if (summary.includes('Publicity')) return 'bg-fuchsia-300';
    if (summary.includes('Event') || summary.includes('Competition')) return 'bg-rose-300';
    return 'bg-gray-300'; // default color if no match
  };

  const eventColor = getColorForEvent(event.summary);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-lg">
        <h2 className="text-2xl font-bold mb-4">{event.summary}</h2>
        <p>
          <strong>Date & Time: </strong>
          {new Date(event.start.dateTime).toLocaleString()} - {new Date(event.end.dateTime).toLocaleString()}
        </p>
        <p>
          <strong>Location: </strong>
          {event.location || 'No location provided'}
        </p>
        <p>
          <strong>Description: </strong>
          {event.description || 'No description provided'}
        </p>
        <button onClick={onClose} className={`mt-4 text-gray-800 px-4 py-2 hover:opacity-70 duration duration-300 rounded ${eventColor}`}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EventModal;
/*'use client';
import React from 'react';

interface Event {
  summary: string;
  start: { dateTime: string };
  end: { dateTime: string };
  location: string;
  description: string;
}

interface EventModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-lg">
        <h2 className="text-2xl font-bold mb-4">{event.summary}</h2>
        <p>
          <strong>Date & Time: </strong>
          {new Date(event.start.dateTime).toLocaleString()} - {new Date(event.end.dateTime).toLocaleString()}
        </p>
        <p>
          <strong>Location: </strong>
          {event.location || 'No location provided'}
        </p>
        <p>
          <strong>Description: </strong>
          {event.description || 'No description provided'}
        </p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default EventModal;*/
