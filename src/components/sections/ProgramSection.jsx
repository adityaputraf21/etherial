import React from 'react';
import { BookOpen, Mic, PenTool, Code } from 'lucide-react';
import ProgramCard from '../ui/ProgramCard';

const programs = [
  { name: 'Foundations Class', focus: 'Semua pelajaran sekolah (kecuali B.Inggris & Coding)', price: 'Rp300.000', icon: <BookOpen className="w-8 h-8 mr-4 text-yellow-400" /> },
  { name: 'Fluentia Class', focus: 'Kelas Bahasa Inggris', price: 'Rp250.000', icon: <Mic className="w-8 h-8 mr-4 text-yellow-400" /> },
  { name: 'Codecraft Class', focus: 'Coding dan Teknologi Dasar', price: 'Rp300.000', icon: <Code className="w-8 h-8 mr-4 text-yellow-400" /> },
  { name: 'Creativa Class', focus: 'Kelas Kreatif (menulis, menggambar, dll)', price: 'Rp270.000', icon: <PenTool className="w-8 h-8 mr-4 text-yellow-400" /> },
];

const ProgramSection = () => (
    <section id="programs" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-serif">Program <span className="text-yellow-300">Kelas</span></h2>
                <p className="mt-4 max-w-3xl mx-auto text-slate-400">
                    Pilih petualangan belajarmu dari berbagai kelas yang kami tawarkan. Semua siswa mendapat kelas Public Speaking GRATIS!
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {programs.map(program => <ProgramCard key={program.name} program={program} />)}
            </div>
             <div className="mt-10 text-center bg-slate-800/50 border border-yellow-400/30 max-w-4xl mx-auto p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-300">✨ Bonus Spesial ✨</h3>
                <p className="text-slate-300 mt-2">Semua siswa yang terdaftar di program apapun akan mendapatkan <span className="font-bold">kelas Public Speaking secara GRATIS</span> untuk melatih kepercayaan diri mereka.</p>
            </div>
        </div>
    </section>
);

export default ProgramSection;