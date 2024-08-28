import React from 'react';
import Image from 'next/image';

interface MemberCardProps {
  photoUrl: string;
  name: string;
  position: string;
  description?: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ photoUrl, name, position, description='' }) => {
  return (
    <div className="bg-white w-1/4 shadow-lg pt-8 rounded-lg object-center overflow-hidden text-center">
      <div className="relative mx-auto flex flex-col items-center justify-center">
        <Image 
          src={photoUrl} 
          alt={`${name}'s photo`} 
          width={150}
          height={150}
          className="rounded object-cover rounded-full"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-lg text-teal-600 mt-2">{position}</p>
          <p className="text-gray-600 mt-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
