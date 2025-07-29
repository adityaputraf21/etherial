import React from 'react';

const HouseCard = ({ house }) => (
  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className={`${house.color} mb-4`}>{house.icon}</div>
    <h3 className={`text-2xl font-bold font-serif ${house.color}`}>{house.name}</h3>
    <p className="text-slate-300 mt-2">{house.description}</p>
  </div>
);

export default HouseCard;