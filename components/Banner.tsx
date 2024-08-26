'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-green-700 text-center p-2 relative">
      <span className="text-white">🥳 Sign up for Harker JCL 2024-2025 <Link className="text-green-200 underline hover:text-green-300 duration duration-300" href="">here</Link>! 🎉</span>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-2 text-white"
      >
        <FontAwesomeIcon icon={faTimes} className="h-6 w-6" />
      </button>
    </div>
  );
}
