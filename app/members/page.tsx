import Link from 'next/link';
import MembersPageBanner from '@/components/MembersPageBanner';
import MemberCard from '@/components/MemberCard';

const faculty = [
  {
    photoUrl: '/paterson.jpg',
    name: 'Mr. Paterson',
    position: 'Upper School Head',
    description: 'Dr. Doe has been leading the department for over a decade with a focus on innovation and excellence. [these are placeholders]',
  },
  {
    photoUrl: '/hull.jpg',
    name: 'Mr. Hull',
    position: 'Upper School Head',
    description: 'Ms. Smith specializes in Latin literature and has been teaching for 15 years. [these are placeholders]',
  },
  {
    photoUrl: '/masoni.jpg',
    name: 'Ms. Masoni',
    position: 'Middle School Head',
    description: 'Mr. Brown is known for his engaging lectures on Roman history and has published several papers on the topic. [these are placeholders]',
  },
];

const coPresidents = [
  {
    photoUrl: '/25ainsliec.jpg',
    name: 'Ainslie Chen \'25',
    position: 'Consules',
    description: 'Dr. Doe has been leading the department for over a decade with a focus on innovation and excellence. [these are placeholders]',
  },
  {
    photoUrl: '/26suhanab.jpg',
    name: 'Suhana Bhandere \'26',
    position: 'Consules',
    description: 'Ms. Smith specializes in Latin literature and has been teaching for 15 years. [these are placeholders]',
  },
];

const advisors = [
  {
    photoUrl: '/25felixc.jpg',
    name: 'Felix Chen \'25',
    position: 'Advisor',
    description: 'Dr. Doe has been leading the department for over a decade with a focus on innovation and excellence. [these are placeholders]',
  },
  {
    photoUrl: '/27ameerar.jpg',
    name: 'Ameera Ramzan \'27',
    position: 'Advisor',
    description: 'Dr. Doe has been leading the department for over a decade with a focus on innovation and excellence. [these are placeholders]',
  },
];

const committeeHeads = [
  {
    photoUrl: '/28shreyask.jpg',
    name: 'Shreyas Karnam \'28',
    position: 'Publicity Co-Officer',
  },
  {
    photoUrl: '/28jacobc.jpg',
    name: 'Jacob Chung \'28',
    position: 'Publicity Co-Officer',
  },
  {
    photoUrl: '/27raeannel.jpg',
    name: 'Raeanne Li \'27',
    position: 'Co-Chair of Graphic Arts',
  },
  {
    photoUrl: '/27lilyp.jpg',
    name: 'Lily Peng \'27',
    position: 'Co-Chair of Graphic Arts)',
  },
  {
    photoUrl: '/27pascalq.jpg',
    name: 'Pascal Qin \'27',
    position: 'Certamen Co-Captain',
  },
  {
    photoUrl: '/27demiz.jpg',
    name: 'Demi Zheng \'27',
    position: 'Certamen Co-Captain',
  },
  {
    photoUrl: '/27leoz.jpg',
    name: 'Leo Zhang \'27',
    position: 'Co-Chief Engineer (chariot/catapult)',
  },
  {
    photoUrl: '/27shamikk.jpg',
    name: 'Shamik Khowala \'27',
    position: 'Co-Chief Engineer (chariot/catapult)',
  },
  // Add other committee heads here...
];

export default function Home() {
  return (
    <div>
      <MembersPageBanner />
      <h1 className="text-5xl mt-24 text-gray-800 flex-wrap pb-10 text-center font-bold">Faculty</h1>
      <div className="flex justify-center gap-8 mb-24">
        {faculty.map((member, index) => (
          <MemberCard 
            key={index}
            photoUrl={member.photoUrl}
            name={member.name}
            position={member.position}
            description={member.description || ''}
          />
        ))}
      </div>

      <div className="flex flex-row justify-center gap-72 ">
        <h1 className="text-5xl mt-24 text-gray-800 pb-10 text-center font-bold">Co-Presidents</h1>
        <h1 className="text-5xl mt-24 text-gray-800 pb-10 text-center font-bold">Advisors</h1>
      </div>
      <div className="flex justify-center flex-wrap gap-8 mx-20 mb-24">
        {coPresidents.map((member, index) => (
          <MemberCard 
            key={index}
            photoUrl={member.photoUrl}
            name={member.name}
            position={member.position}
            description={member.description || ''}
          />
        ))}

        {advisors.map((member, index) => (
          <MemberCard 
            key={index}
            photoUrl={member.photoUrl}
            name={member.name}
            position={member.position}
            description={member.description || ''}
          />
        ))}
      </div>

      <div className="flex justify-center gap-8 mx-20 mb-24">
        
      </div>

      <h1 className="text-5xl mt-24 text-gray-800 pb-10 text-center font-bold">Committee Heads</h1>
      <div className="flex justify-center flex-wrap gap-8 mx-20 mb-24">
        {committeeHeads.map((member, index) => (
          <MemberCard 
            key={index}
            photoUrl={member.photoUrl}
            name={member.name}
            position={member.position}
          />
        ))}
      </div>

      <h1 className="text-5xl mt-24 text-gray-800 pb-10 text-center font-bold">Members</h1>
    </div>
  );
}
