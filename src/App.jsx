import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppOverview from './components/AppOverview';
import SdgAlignment from './components/SdgAlignment';
import DocumentationGallery from './components/DocumentationGallery';
import ProblemSolution from './components/ProblemSolution';
import Workflow from './components/Workflow';
import ImpactCalculator from './components/ImpactCalculator';
import CircularEconomy from './components/CircularEconomy';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import ReportModal from './components/ReportModal';
import DemoAppModal from './components/DemoAppModal';
import DownloadPage from './components/DownloadPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#download' || hash === '#/download') {
        setCurrentPage('download');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    if (page === 'download') {
      window.location.hash = '#download';
    } else {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    if (currentPage !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (currentPage === 'download') {
    return <DownloadPage onBackToHome={() => navigateTo('home')} />;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1E293B] font-sans selection:bg-primary/20 selection:text-primary-800">
      
      {/* Sticky Top Navigation */}
      <Navbar 
        onOpenDemoModal={() => setDemoModalOpen(true)}
        onNavigateToDownload={() => navigateTo('download')}
      />

      {/* Main Single Page Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('tentang')}
          onCalculatorClick={() => scrollToSection('kalkulator')}
        />

        {/* Section 1: Penjelasan Aplikasi, Role & Fitur, dan Tujuan */}
        <AppOverview />

        {/* Section 2: Bagaimana Solusi Menyelesaikan SDGs (2, 12, 13) */}
        <SdgAlignment />

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
          onNavigateToDownload={() => navigateTo('download')}
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
