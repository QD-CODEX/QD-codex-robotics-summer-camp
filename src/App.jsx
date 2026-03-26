import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Curriculum from './components/Curriculum';
import Projects from './components/Projects';
import ProgramDetails from './components/ProgramDetails';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import StickyBottomCTA from './components/StickyBottomCTA';
import RoboticsBackground from './components/RoboticsBackground';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0814] text-white relative">
      <RoboticsBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Curriculum />
        <Projects />
        <ProgramDetails />
        <Benefits />
        <Pricing />
      </main>
      <Footer />
      <StickyBottomCTA />
    </div>
  );
}
