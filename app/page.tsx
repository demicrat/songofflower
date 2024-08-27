import Banner from '@/components/Banner';
import Navbar from '@/components/NavBar';
import TypeWriter from '@/components/TypeWriter';
import BulletinBoard from '@/components/BulletinBoard';
import UpcomingEvents from '@/components/UpcomingEvents';
import BottomNav from '@/components/BottomNav';

export default function Home() {
  return (
    <div className="bg-green-50 min-h-screen">
      <div className="mt-40 ml-40 text-7xl mb-40">
        <TypeWriter />
        <p className="text-xl text-gray-700 w-7/12 mt-8">
          Hi, We&apos;re <span className="font-bold text-green-400">Harker JCL</span>. We are a passionate community of classicists dedicated to the exploration and appreciation of Greek, Latin, and Mediterranean cultures. Whether you are a seasoned scholar or simply curious, we invite you to join us. Our doors are open to all who share an interest in the classical world. Visit us during our meetings in Room 31, located in the Dance Building.
        </p>
      </div>
      <BulletinBoard />
      <UpcomingEvents />
    </div>
  );
}
