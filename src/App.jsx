import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DocumentationGallery from './components/DocumentationGallery';
import ProblemSolution from './components/ProblemSolution';
import Workflow from './components/Workflow';
import ImpactCalculator from './components/ImpactCalculator';
import CircularEconomy from './components/CircularEconomy';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import ReportModal from './components/ReportModal';
import DemoAppModal from './components/DemoAppModal';

export default function App() {
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFF0] text-slate-800 font-sans selection:bg-primary/20 selection:text-primary-800">
      
      {/* Sticky Top Navigation */}
      <Navbar onOpenDemoModal={() => setDemoModalOpen(true)} />

      {/* Main Single Page Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('solusi')}
          onCalculatorClick={() => scrollToSection('kalkulator')}
        />

        {/* Galeri Dokumentasi Aksi Nyata MBG */}
        <DocumentationGallery />

        {/* The Urgency: Problem & Integrated Solution */}
        <ProblemSolution />

        {/* Operational Workflow: Hulu ke Hilir Stepper */}
        <Workflow onOpenReportModal={() => setReportModalOpen(true)} />

        {/* Interactive Waste & Impact Calculator */}
        <ImpactCalculator />

        {/* Circular Economy: Closed-loop ecosystem */}
        <CircularEconomy />

        {/* Call to Action Banner */}
        <CtaBanner
          onOpenDemoModal={() => setDemoModalOpen(true)}
          onCalculatorClick={() => scrollToSection('kalkulator')}
        />
      </main>

      {/* Modern Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ReportModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
      />

      <DemoAppModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />

    </div>
  );
}
