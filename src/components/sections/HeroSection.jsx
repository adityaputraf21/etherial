import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => (
    <section id="home" className="min-h-screen flex items-center bg-slate-900 text-white pt-24 md:pt-0">
        <div className="absolute inset-0 bg-grid-slate-800 [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"></div>
        <div className="absolute inset-0 z-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 50% 50%, #4a2d6e, transparent 70%)'}}></div>
        <div className="container mx-auto px-6 text-center z-10">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-serif tracking-tight leading-tight">
                <span className="text-yellow-300">Etherial</span> Academy
            </h2>
            <p className="mt-4 text-xl md:text-2xl text-slate-300">
                "Awaken the Magic in Your Mind"
            </p>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-400">
                Membangkitkan potensi, imajinasi, dan kepercayaan diri siswa melalui pendekatan pendidikan modern yang terinspirasi dari dunia sihir.
            </p>
            <a href="#cta" className="mt-10 inline-block bg-yellow-400 text-slate-900 font-bold py-4 px-10 rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg shadow-yellow-500/20">
                Mulai Petualangan Belajar <ArrowRight className="inline-block ml-2" />
            </a>
        </div>
    </section>
);

export default HeroSection;