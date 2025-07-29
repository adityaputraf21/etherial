import React from 'react';
import Header from '../Header';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import HouseSection from '../sections/HouseSection';
import ProgramSection from '../sections/ProgramSection';
import CtaSection from '../sections/CtaSection';
import Footer from '../Footer';

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <HouseSection />
        <ProgramSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
