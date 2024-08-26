import React from 'react';
import '../app/globals.css';
import Bulletin from '@/components/Bulletin';

const BulletinBoard: React.FC = () => {
  return (
    <div className="graph-paper-bg flex flex-col items-center justify-center h-full p-8">
      <h1 className="pt-10 pb-10 text-6xl font-bold text-green-900 mb-4">✨Bulletin Board✨</h1>
      <div className="flex bulletin-container">
        {/* Render multiple bulletins with different content */}
        <Bulletin title="About" byline="Demi" content="You can request your own bulletin slot for September; Just email me at 27demiz@students.harker.org :)" />
        <Bulletin title="Empty Slot" />
        <Bulletin title="Empty Slot" />
        <Bulletin title="Empty Slot" />
        <Bulletin title="Empty Slot" />
        <Bulletin title="Empty Slot" />
      </div>
    </div>
  );
};

export default BulletinBoard;
