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

export default EventModal;
