import React from 'react';
import Link from 'next/link';

const BottomNav: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-green-200 pt-6 pl-6 pr-6">
      <div className="flex justify-between">
        <div className="ml-20 pl-10 pr-10 pt-5 pb-10 flex">
          <div>
            <h4 className="font-bold text-lg mb-2">About</h4>
            <ul className="space-y-1">
              <li><Link href="/" className="duration-300 hover:opacity-80">Home</Link></li>
              <li><Link href="/members" className="duration duration-300 hover:opacity-80">Members</Link></li>
              <li><Link href="/contact" className="duration duration-300 hover:opacity-80">Contact</Link></li>
            </ul>
          </div>
          <div className="ml-20">
            <h4 className="font-bold text-lg mb-2">Fun</h4>
            <ul className="space-y-1">
              <li><Link href="/events" className="duration-300 hover:opacity-80">Events</Link></li>
              <li><Link href="/media" className="duration-300 hover:opacity-80">Media</Link></li>
            </ul>
          </div>
          <div className="ml-20">
            <h4 className="font-bold text-lg mb-2">Resources</h4>
            <ul className="space-y-1">
              <li><Link href="/testing" className="duration-300 hover:opacity-80">Testing</Link></li>
              <li><Link href="/certamen" className="duration-300 hover:opacity-80">Certamen</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 text-right text-sm text-green-300">
          <p>
            Made with <span className="font-mono">&lt;/&gt;</span> by Demi Zheng.
          </p>
          <p>
            Contact me at <a href="mailto:27demiz@students.harker.org" className="hover:underline">27demiz@students.harker.org</a> for website issues or just to say hi :)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default BottomNav;
