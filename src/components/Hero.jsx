import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Flame, 
  Sparkles, 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  Thermometer, 
  Clock, 
  Award, 
  Recycle, 
  Zap, 
  Utensils,
  Trophy,
  Wifi,
  Battery,
  Store,
  ChevronRight
} from 'lucide-react';

export default function Hero({ onExploreClick, onCalculatorClick }) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Decorative ambient gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-sage/30 via-primary/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-tangerine/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5 text-center lg:text-left"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-primary/30 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-ping" />
              <span className="text-[11px] sm:text-xs font-bold text-primary-700 uppercase tracking-wider">
                Inovasi MBG Berkelanjutan SMKN 26 Jakarta
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-black tracking-tight text-slate-800 leading-[1.18]">
              Kawal Mutu MBG, Hentikan Food Waste Lewat{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-600 underline decoration-sage decoration-wavy decoration-2">
                Clean Plate Check-in
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Satu platform untuk kendali mutu katering, gamifikasi piring bersih siswa, 
              dan konversi residu organik menjadi pakan maggot bernilai kas koperasi sekolah.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-primary text-white font-bold text-sm sm:text-base shadow-lg shadow-primary/25 hover:bg-primary-600 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Jelajahi Fitur Aplikasi</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onCalculatorClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl border-2 border-primary text-primary font-bold text-sm sm:text-base bg-white/60 backdrop-blur-sm hover:bg-primary-50 transition-all duration-200"
              >
                <Calculator className="w-4 h-4 text-primary" />
                <span>Simulasi Dampak</span>
              </button>
            </div>

            {/* Photo Highlights Strip */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <a href="#dokumentasi" className="flex items-center gap-2.5 p-1.5 pr-3 rounded-full bg-white/80 border border-slate-200 shadow-xs hover:border-primary transition-colors">
                <img 
                  src="/images/mbg_qc_arrival.jpg" 
                  alt="QC Kedatangan" 
                  className="w-7 h-7 rounded-full object-cover border border-primary/40"
                />
                <span className="text-xs font-bold text-slate-700">QC Kedatangan</span>
              </a>

              <a href="#dokumentasi" className="flex items-center gap-2.5 p-1.5 pr-3 rounded-full bg-white/80 border border-slate-200 shadow-xs hover:border-primary transition-colors">
                <img 
                  src="/images/mbg_clean_plate.jpg" 
                  alt="Piring Bersih" 
                  className="w-7 h-7 rounded-full object-cover border border-primary/40"
                />
                <span className="text-xs font-bold text-slate-700">Piring Bersih</span>
              </a>

              <a href="#dokumentasi" className="flex items-center gap-2.5 p-1.5 pr-3 rounded-full bg-white/80 border border-slate-200 shadow-xs hover:border-primary transition-colors">
                <img 
                  src="/images/mbg_maggot_waste.jpg" 
                  alt="Maggot BSF" 
                  className="w-7 h-7 rounded-full object-cover border border-primary/40"
                />
                <span className="text-xs font-bold text-slate-700">Sirkular Maggot</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Realistic Tall Smartphone Mockup Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
              
              {/* Outer Phone Frame (Flagship Smartphone Aspect Ratio ~19.5:9) */}
              <div className="relative rounded-[48px] p-3 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 shadow-2xl ring-1 ring-slate-800 shadow-slate-900/30">
                
                {/* Screen Bezel */}
                <div className="relative rounded-[40px] overflow-hidden bg-[#FFFFF0] border border-slate-800/80 min-h-[650px] sm:min-h-[690px] flex flex-col justify-between">
                  
                  {/* Top Status Bar & Dynamic Island */}
                  <div className="relative pt-3 pb-2 px-5 bg-white/80 border-b border-slate-200/60 z-30">
                    
                    {/* Dynamic Island Pill Notch */}
                    <div className="w-24 h-4.5 bg-slate-900 rounded-full mx-auto flex items-center justify-between px-2.5 mb-1.5 shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-slate-800 border border-slate-700" />
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>

                    {/* Clock & Status Icons */}
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-700">
                      <span>12:15 WIB</span>
                      <div className="flex items-center gap-1.5 text-slate-600">
                        <Wifi className="w-3 h-3" />
                        <span className="text-[9px] font-black">5G</span>
                        <Battery className="w-3.5 h-3.5 text-slate-700" />
                      </div>
                    </div>
                  </div>

                  {/* App Header Bar */}
                  <div className="px-4 py-2.5 bg-gradient-to-r from-sage/40 to-[#FFFFF0] flex items-center justify-between border-b border-sage/40">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                        RA
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-bold text-slate-800 leading-tight">Raditya Pratama</p>
                        <p className="text-[10px] text-slate-500">XII RPL 1 • SMKN 26</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-white px-2 py-1 rounded-full border border-primary/20 shadow-xs">
                      <Sparkles className="w-3 h-3 text-tangerine" />
                      <span className="text-[11px] font-black text-slate-800">1.450 Pts</span>
                    </div>
                  </div>

                  {/* App Screen Content Body */}
                  <div className="p-3.5 space-y-3 text-left flex-1 overflow-hidden">
                    
                    {/* Menu Card with QC Status & Real Image */}
                    <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xs">
                      <div className="relative h-28 w-full">
                        <img 
                          src="/images/mbg_qc_arrival.jpg" 
                          alt="QC MBG" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-slate-900/75 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-[9px] font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-2.5 h-2.5 text-primary" /> 100% Lolos QC
                        </div>
                        <div className="absolute bottom-2 right-2 bg-emerald-600 text-white px-2 py-0.5 rounded-md text-[9px] font-extrabold shadow-xs">
                          68.4°C Higienis
                        </div>
                      </div>
                      <div className="p-2.5">
                        <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                          <span>Ayam Teriyaki + Sayur Bayam</span>
                          <span className="text-[10px] text-slate-500 font-medium">600 Box</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 mt-1">
                          <span className="px-1.5 py-0.2 bg-slate-100 rounded">640 kcal</span>
                          <span className="px-1.5 py-0.2 bg-slate-100 rounded">32g Protein</span>
                          <span className="px-1.5 py-0.2 bg-emerald-50 text-emerald-700 rounded font-semibold">Bebas Alergen</span>
                        </div>
                      </div>
                    </div>

                    {/* Streak Card */}
                    <div className="p-2.5 rounded-2xl bg-gradient-to-r from-primary/15 via-sage/30 to-tangerine/10 border border-primary/20 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-tangerine text-white flex items-center justify-center shrink-0 shadow-xs">
                          <Flame className="w-4 h-4 fill-white" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-800">Streak 14 Hari 🔥</p>
                          <p className="text-[10px] text-slate-500">Piring Bersih Konsisten</p>
                        </div>
                      </div>
                      <span className="text-[11px] font-extrabold text-tangerine bg-white px-2 py-0.5 rounded-lg border border-tangerine/20 shadow-xs">
                        +350 Pts
                      </span>
                    </div>

                    {/* Strict Surplus Hub Mini Bar */}
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[11px] space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600 font-medium">Strict Surplus Hub</span>
                        <span className="text-tangerine font-bold text-[10px]">38 Menit Tersisa</span>
                      </div>
                      <p className="text-[10px] text-slate-500">12 box tersegel dialihkan aman untuk staf sekolah</p>
                    </div>

                    {/* Circular Waste Metric */}
                    <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-200/70 flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-1.5">
                        <Recycle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="text-emerald-900 font-medium text-[10px]">Sisa Organik ➔ Maggot BSF</span>
                      </div>
                      <span className="font-extrabold text-emerald-700 text-[10px]">0 kg ke TPA</span>
                    </div>

                    {/* Leaderboard snippet */}
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-[11px] flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Trophy className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span className="font-bold text-slate-800 text-[10px]">#1 XII RPL 1</span>
                      </div>
                      <span className="text-[10px] font-bold text-primary">99.2% Clean Plate</span>
                    </div>

                  </div>

                  {/* Device Bottom Dock Bar */}
                  <div className="p-2.5 bg-white border-t border-slate-200 flex items-center justify-around text-slate-400 text-[10px]">
                    <div className="flex flex-col items-center gap-0.5 text-primary font-bold">
                      <Utensils className="w-4 h-4" />
                      <span>Menu</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Check-in</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <Trophy className="w-4 h-4" />
                      <span>Ranking</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <Store className="w-4 h-4" />
                      <span>Koperasi</span>
                    </div>
                  </div>

                  {/* Home Indicator Bar */}
                  <div className="py-1 bg-white">
                    <div className="w-28 h-1 bg-slate-300 rounded-full mx-auto" />
                  </div>

                </div>
              </div>

              {/* Floating Badge 1 (Top Right) */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-4 sm:-right-8 z-40 p-3 rounded-2xl backdrop-blur-md bg-white/95 border border-white shadow-xl text-left flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-primary/20 text-primary-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-primary block leading-none">QC KATERING</span>
                  <span className="text-xs font-extrabold text-slate-800">&lt; 2 Menit Akurat</span>
                </div>
              </motion.div>

              {/* Floating Badge 2 (Bottom Left) */}
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute -bottom-4 -left-4 sm:-left-8 z-20 p-3 rounded-2xl backdrop-blur-md bg-white/95 border border-white shadow-xl text-left flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-xl bg-tangerine text-white flex items-center justify-center shrink-0">
                  <Flame className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 block leading-none">GAMIFIKASI</span>
                  <span className="text-xs font-extrabold text-slate-800">Clean Plate Reward</span>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
