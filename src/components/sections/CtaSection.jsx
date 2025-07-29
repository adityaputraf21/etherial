// src/components/sections/CtaSection.jsx
import React from 'react';

// Tambahkan { onNavigate } sebagai parameter
const CtaSection = ({ onNavigate }) => (
    <section id="cta" className="py-20 bg-slate-900 text-white">
     <div className="container mx-auto px-6">
       <div className="relative rounded-xl p-10 md:p-16 overflow-hidden bg-slate-800 border border-slate-700">
         <div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 100% 0%, #8c3c4a, transparent 50%)'}}></div>
         <div className="relative z-10 text-center">
           <h2 className="text-3xl md:text-4xl font-bold font-serif">Siap Memulai Petualangan <span className="text-yellow-300">Belajarmu?</span></h2>
           <p className="mt-4 max-w-2xl mx-auto text-slate-300">
               Daftarkan dirimu sekarang dan bangkitkan keajaiban dalam pikiranmu. Pendaftaran dilakukan melalui Google Form yang akan kami kirimkan.
           </p>
           <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('login'); }} className="mt-8 inline-block bg-yellow-400 text-slate-900 font-bold py-4 px-10 rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg shadow-yellow-500/20">
               Daftar Sekarang Juga
           </a>
         </div>
       </div>
     </div>
    </section>
);

export default CtaSection;