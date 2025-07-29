import React from 'react';
import { Leaf, Sparkles, BrainCircuit, PenTool } from 'lucide-react';
import HouseCard from '../ui/HouseCard';

const houses = [
  { name: 'Ignis', color: 'text-red-400', description: 'Berani, Ambisius', icon: <Sparkles size={48} className="mx-auto" /> },
  { name: 'Aeris', color: 'text-blue-300', description: 'Kreatif, Bebas', icon: <PenTool size={48} className="mx-auto" /> },
  { name: 'Terra', color: 'text-green-400', description: 'Stabil, Konsisten', icon: <Leaf size={48} className="mx-auto" /> },
  { name: 'Lumen', color: 'text-yellow-300', description: 'Cerdas, Optimis', icon: <BrainCircuit size={48} className="mx-auto" /> },
];

const HouseSection = () => (
    <section id="houses" className="py-20 bg-slate-900 text-white">
      <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]"></div>
      <div className="container mx-auto px-6 relative">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-serif">Sistem <span className="text-yellow-300">House</span> Kami</h2>
                <p className="mt-4 max-w-3xl mx-auto text-slate-400">
                    Setiap siswa akan menjadi bagian dari salah satu dari empat House, membangun karakter dan semangat kompetisi yang sehat.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {houses.map(house => <HouseCard key={house.name} house={house} />)}
            </div>
        </div>
    </section>
);

export default HouseSection;