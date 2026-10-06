import React, { useState, useEffect } from 'react';
import { Leaf, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenDemoModal }) {
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
    { label: 'Solusi MBG', href: '#solusi' },
    { label: 'Dokumentasi', href: '#dokumentasi' },
    { label: 'Alur Operasional', href: '#alur' },
    { label: 'Kalkulator', href: '#kalkulator' },
    { label: 'Ekonomi Sirkular', href: '#sirkular' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFFF0]/90 backdrop-blur-md shadow-sm border-b border-sage/50 py-3'
          : 'bg-[#FFFFF0]/70 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-105">
              <Leaf className="w-5 h-5 -rotate-12 transition-transform duration-300 group-hover:rotate-0" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-800">
                  Nutri<span className="text-primary">Trace</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-sage text-slate-800 border border-primary/20">
                  v1.0
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
              onClick={onOpenDemoModal}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-tangerine hover:bg-tangerine-600 shadow-md shadow-tangerine/25 hover:shadow-lg hover:shadow-tangerine/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Buka Aplikasi MBG</span>
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
        <div className="md:hidden border-b border-sage/60 bg-[#FFFFF0]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 transition-all">
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
                onOpenDemoModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-tangerine hover:bg-tangerine-600 shadow-md shadow-tangerine/20 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Buka Aplikasi MBG</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
