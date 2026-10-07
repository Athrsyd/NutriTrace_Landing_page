import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Flame,
  ArrowRight,
  Calculator
} from 'lucide-react';

export default function Hero({ onExploreClick, onCalculatorClick }) {
  return (
    <section className="relative pt-18 pb-4 lg:pt-20 lg:pb-6 min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      {/* Decorative ambient gradients (subtle glow) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-sage/15 via-primary/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-52 h-52 rounded-full bg-tangerine/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* Left Column: Headline & Value Prop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col gap-4 text-center lg:text-left"
          >
            {/* Tagline Badge */}
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-primary/30 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
              <span className="text-[11px] font-bold text-primary-700 uppercase tracking-wider">
                Inovasi MBG Berkelanjutan SMKN 26 Jakarta
              </span>
            </div> */}

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] font-black tracking-tight text-slate-800 leading-10">
              Kawal Mutu MBG, Hentikan Food Waste Lewat{' '} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-600 underline decoration-sage decoration-wavy decoration-2">
                Clean Plate Check-in
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Satu platform untuk kendali mutu katering, gamifikasi piring bersih siswa,
              dan konversi residu organik menjadi pakan maggot bernilai kas koperasi sekolah.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-primary text-white font-bold text-sm shadow-md shadow-primary/25 hover:bg-primary-600 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Jelajahi Fitur Aplikasi</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onCalculatorClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border-2 border-primary text-primary font-bold text-sm bg-white/60 backdrop-blur-sm hover:bg-primary-50 transition-all duration-200 cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-primary" />
                <span>Simulasi Dampak</span>
              </button>
            </div>

            {/* Photo Highlights Strip */}
            {/* <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <a href="#dokumentasi" className="flex items-center gap-2 p-1 pr-3 rounded-full bg-white/80 border border-slate-200 shadow-xs hover:border-primary transition-colors">
                <img 
                  src="/images/mbg_qc_arrival.jpg" 
                  alt="QC Kedatangan" 
                  className="w-6 h-6 rounded-full object-cover border border-primary/40"
                />
                <span className="text-xs font-bold text-slate-700">QC Kedatangan</span>
              </a>

              <a href="#dokumentasi" className="flex items-center gap-2 p-1 pr-3 rounded-full bg-white/80 border border-slate-200 shadow-xs hover:border-primary transition-colors">
                <img 
                  src="/images/mbg_clean_plate.jpg" 
                  alt="Piring Bersih" 
                  className="w-6 h-6 rounded-full object-cover border border-primary/40"
                />
                <span className="text-xs font-bold text-slate-700">Piring Bersih</span>
              </a>

              <a href="#dokumentasi" className="flex items-center gap-2 p-1 pr-3 rounded-full bg-white/80 border border-slate-200 shadow-xs hover:border-primary transition-colors">
                <img 
                  src="/images/mbg_maggot_waste.jpg" 
                  alt="Maggot BSF" 
                  className="w-6 h-6 rounded-full object-cover border border-primary/40"
                />
                <span className="text-xs font-bold text-slate-700">Sirkular Maggot</span>
              </a>
            </div> */}
          </motion.div>

          {/* Right Column: Realistic Slim Smartphone Mockup with Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center items-center py-2"
          >
            {/* Smartphone Wrapper: Height strictly 70vh, slightly wider 9/17 aspect ratio */}
            <div className="relative h-[65vh] lg:h-[70vh] max-h-[580px] min-h-[380px] aspect-[9/17] w-auto">

              {/* Outer Phone Bezel Frame with softer, smaller shadow */}
              <div className="relative w-full h-full rounded-[38px] p-2 sm:p-2.5 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 shadow-md shadow-slate-900/15 ring-1 ring-slate-800/50 flex flex-col">

                {/* Screen Frame containing just the image */}
                <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-slate-950 border border-slate-700/50 shadow-inner">
                  {/* 
                    GAMBAR MOCKUP APLIKASI
                    Untuk mengganti tampilan layar aplikasi, cukup ganti file '/images/app_mockup.png'
                    atau ubah attribute src di bawah ini.
                  */}
                  <img
                    src="/images/app_mockup.png"
                    alt="NutriTrace Mobile App Screen"
                    className="w-full h-full object-cover object-top select-none pointer-events-none"
                    onError={(e) => {
                      e.currentTarget.src = '/images/mbg_qc_arrival.jpg';
                    }}
                  />

                  {/* Minimalist Top Speaker / Dynamic Island Dot */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3 bg-black/90 rounded-full flex items-center justify-between px-2 pointer-events-none z-10 shadow-xs">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800 border border-slate-700" />
                    <div className="w-1 h-1 rounded-full bg-emerald-500/80" />
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 (Top Right) */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-3 sm:-right-5 z-20 p-2 sm:p-2.5 rounded-xl backdrop-blur-md bg-white/95 border border-slate-200/60 shadow-md text-left flex items-center gap-2"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-primary/20 text-primary-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-primary block leading-tight">QC KATERING</span>
                  <span className="text-[11px] sm:text-xs font-extrabold text-slate-800">&lt; 2 Menit Akurat</span>
                </div>
              </motion.div>

              {/* Floating Badge 2 (Bottom Left) */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute -bottom-3 -left-3 sm:-left-5 z-20 p-2 sm:p-2.5 rounded-xl backdrop-blur-md bg-white/95 border border-slate-200/60 shadow-md text-left flex items-center gap-2"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-tangerine text-white flex items-center justify-center shrink-0">
                  <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-slate-400 block leading-tight">GAMIFIKASI</span>
                  <span className="text-[11px] sm:text-xs font-extrabold text-slate-800">Clean Plate Reward</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
