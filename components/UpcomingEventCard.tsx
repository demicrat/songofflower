import React from 'react';

interface EventProps {
  date: string; // Format "01"
  month: string; // Format "JAN"
  title: string;
  time: string; // Format "3:30-4:30PM"
  address: string; // Room number or similar
  isEven: boolean; // To alternate background colors
  description: string;
}

const UpcomingEventCard: React.FC<EventProps> = ({ date, month, title, time, address, description, isEven }) => {
  return (
    <div
      className={`p-4 ml-40 rounded-lg shadow-md mr-36 mb-3 ${
        isEven ? 'bg-emerald-900 text-slate-200' : 'bg-green-300 text-gray-800'
      }`}
    >
      <div className="flex items-center space-x-4">
        <div className="text-center">
          <div className="text-4xl font-bold">{date}</div>
          <div className="text-sm uppercase">{month}</div>
        </div>
        <div>
          <div className="text-lg font-semibold">{title}</div>
          <div className="text-sm">{time}</div>
          <div className="text-sm">{address}</div>
          <div className="pt-2 text-md">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventCard;
