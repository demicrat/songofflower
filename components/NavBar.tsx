import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-green-200 text-gray-800 navbartop p-3">
      <div className="max-w-7xl text-lg mx-auto flex justify-around items-center">
        <Link href="/" className="relative group">
          <span className="font-bold group-hover:text-green-600 transition duration-300">HarkerJCL</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out"></span>
        </Link>
        <Link href="/events" className="relative group">
          <span className="group-hover:text-green-600 transition duration-300">EVENTS</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out"></span>
        </Link>
        <Link href="/media" className="relative group">
          <span className="group-hover:text-green-600 transition duration-300">MEDIA</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out"></span>
        </Link>
        <Link href="/testing" className="relative group">
          <span className="group-hover:text-green-600 transition duration-300">TESTING</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out"></span>
        </Link>
        <Link href="/certamen" className="relative group">
          <span className="group-hover:text-green-600 transition duration-300">CERTAMEN</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out"></span>
        </Link>
        <Link href="/members" className="relative group">
          <span className="group-hover:text-green-600 transition duration-300">MEMBERS</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out"></span>
        </Link>
        <Link href="/contact" className="relative group">
          <span className="group-hover:text-green-600 transition duration-300">CONTACT</span>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-in-out"></span>
        </Link>
      </div>
    </nav>
  );
}
/*import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className="bg-green-500 text-white p-4 flex justify-between">
      <div className="font-bold text-lg">
        <Link href="/">HarkerJCL</Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/events">Events</Link>
        <Link href="/media">Media</Link>
        <Link href="/certamen">Certamen</Link>
        <Link href="/members">Members</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}*/
