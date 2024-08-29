'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface Minute {
  date: string;
  link: string;
}

const MeetingMinutes: React.FC = () => {
  const [recentMinutes, setRecentMinutes] = useState<Minute[]>([]);

  useEffect(() => {
    const fetchMinutes = async () => {
      try {
        const res = await fetch('/api/minutes');
        if (res.ok) {
          const data = await res.json();
          setRecentMinutes(data);
        } else {
          console.error('Failed to fetch meeting minutes');
        }
      } catch (error) {
        console.error('Error fetching meeting minutes:', error);
      }
    };

    fetchMinutes();
  }, []);

  return (
    <div className="p-6 mt-10 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Meeting Minutes</h2>
      <ul className="flex flex-wrap">
        {recentMinutes.map((minute, index) => (
          <li key={index} className="mb-4">
            <Link href={minute.link} className="text-blue-600 m-4 hover:opacity-70 duration duration-300">
                {new Date(minute.date).toLocaleDateString()} - View Minutes
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingMinutes;
