import React from 'react';
import { Sparkles, BookOpen, BrainCircuit } from 'lucide-react';

const AboutSection = () => (
    <section id="about" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-serif">Tentang <span className="text-yellow-300">Etherial Academy</span></h2>
                <p className="mt-4 max-w-3xl mx-auto text-slate-400">
                    Kami adalah akademi yang memadukan keajaiban imajinasi dengan kurikulum pendidikan modern untuk siswa SD (kelas 4+) dan SMP.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-slate-800/50 p-6 rounded-lg">
                    <Sparkles className="mx-auto w-12 h-12 text-yellow-400 mb-4" />
                    <h3 className="text-xl font-bold text-white">Nuansa Magis</h3>
                    <p className="text-slate-400 mt-2">Terinspirasi dari dunia sihir, kami menciptakan suasana belajar yang fantasis dan imajinatif.</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                    <BookOpen className="mx-auto w-12 h-12 text-yellow-400 mb-4" />
                    <h3 className="text-xl font-bold text-white">Pendidikan Modern</h3>
                    <p className="text-slate-400 mt-2">Metode belajar semi-privat yang fokus pada materi inti dan public speaking.</p>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-lg">
                    <BrainCircuit className="mx-auto w-12 h-12 text-yellow-400 mb-4" />
                    <h3 className="text-xl font-bold text-white">Gamifikasi</h3>
                    <p className="text-slate-400 mt-2">Sistem poin dan House System yang seru untuk memotivasi siswa.</p>
                </div>
            </div>
        </div>
    </section>
);

export default AboutSection;