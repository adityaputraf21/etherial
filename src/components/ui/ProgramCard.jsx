import React from 'react';

const ProgramCard = ({ program }) => (
  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 flex flex-col h-full transform hover:scale-105 transition-transform duration-300">
    <div className="flex items-center mb-4">
      {program.icon}
      <h3 className="text-xl font-bold text-yellow-300 font-serif">{program.name}</h3>
    </div>
    <p className="text-slate-300 flex-grow">{program.focus}</p>
    <div className="mt-4 pt-4 border-t border-slate-600">
      <p className="text-2xl font-bold text-white">{program.price}</p>
      <p className="text-slate-400 text-sm">/ Paket / Murid</p>
    </div>
  </div>
);

export default ProgramCard;