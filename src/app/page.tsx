import React from 'react';
import Header from '@/components/Header';
// import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import StackSection from '@/app/components/StackSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProjectsSection />
      <StackSection />
      <TestimonialsSection />
      <ContactSection />
      {/* <Footer /> */}
    </main>
  );
}