import React from 'react';

const MembersPageBanner: React.FC = () => {
  return (
    <div className="bg-green-100 py-20 text-center">
      <h1 className="text-xl font-extrabold text-green-500">OUR TEAM</h1>
      <p className="text-6xl text-gray-800 mt-4 font-semibold">
        Meet all the people<br></br>who <span className="font-extrabold text-emerald-400">make Harker JCL happen </span>
      </p>
    </div>
  );
};

export default MembersPageBanner;
