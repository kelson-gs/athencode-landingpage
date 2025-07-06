import React from 'react';
import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
