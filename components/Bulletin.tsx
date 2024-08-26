import React from 'react';
import '../app/globals.css';

interface BulletinProps {
  title: string;
  byline: string;
  content: string; // This will be the main content of the bulletin
}

const Bulletin: React.FC<BulletinProps> = ({ title, byline, content }) => {
  return (
    <div className="bulletin">
      <div className="tape w-4/12"></div>
      <div className="font-bold mt-5 text-3xl text-center mb-2 text-green-700">{title}</div>
      <div className="m-5 content text-left ">
        {content}
      </div>
      <div className="text-md mr-5 text-right text-gray-600">-- {byline}</div>
    </div>
  );
};

export default Bulletin;
