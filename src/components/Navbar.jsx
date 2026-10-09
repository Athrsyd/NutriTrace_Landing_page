import React, { useState, useEffect } from 'react';

import { Leaf, Menu, X, Download } from 'lucide-react';

export default function Navbar({ onOpenDemoModal, onNavigateToDownload }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tentang', href: '#tentang' },
    { label: 'SDGs', href: '#sdgs' },
    { label: 'Solusi', href: '#solusi' },
    { label: 'Dokumentasi', href: '#dokumentasi' },
    { label: 'Alur', href: '#alur' },
    { label: 'Kalkulator', href: '#kalkulator' },
    { label: 'Sirkular', href: '#sirkular' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#F8FAFC]/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
        : 'bg-[#F8FAFC]/75 backdrop-blur-sm py-4'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img src="./logo.png" alt="" className='w-10 h-10 rounded-xl ' />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-800">
                  Peduli<span className="text-primary">MBG</span>
                </span>

              </div>
              <span className="text-[11px] font-medium text-slate-500 hidden sm:inline-block">
                Smart QC MBG & Zero Waste App
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/60 shadow-xs">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-primary hover:bg-primary-50 rounded-full transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onNavigateToDownload || onOpenDemoModal}
              className="relative inline-flex items-center gap-2 px-3 py-3 rounded-xl text-sm font-bold text-white bg-tangerine hover:bg-tangerine-600 shadow-md shadow-tangerine/25 hover:shadow-lg hover:shadow-tangerine/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Download PeduliMBG</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-primary hover:bg-white/80 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200/80 bg-[#F8FAFC]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 transition-all">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-primary-50 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onNavigateToDownload) {
                  onNavigateToDownload();
                } else {
                  onOpenDemoModal();
                }
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-tangerine hover:bg-tangerine-600 shadow-md shadow-tangerine/20 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PeduliMBG APK</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
