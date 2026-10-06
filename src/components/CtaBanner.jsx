import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Leaf, Trophy } from 'lucide-react';

export default function CtaBanner({ onOpenDemoModal, onCalculatorClick }) {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl md:rounded-[40px] p-8 sm:p-12 md:p-16 overflow-hidden bg-gradient-to-br from-primary via-primary-600 to-primary-800 text-white shadow-2xl shadow-primary/30">
          
          {/* Ambient shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-tangerine/20 blur-2xl pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold text-white uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-tangerine" />
              <span>Gerakan Nasional Sekolah Nir-Sampah MBG</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.2]">
              Siap Menjadikan Sekolah Anda Pelopor MBG Higienis & Bebas Sampah?
            </h2>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-primary-100 max-w-2xl mx-auto leading-relaxed">
              Bergabunglah dengan ekosistem digital NutriTrace. Awali kendali mutu makanan yang akuntabel, 
              dorong siswa menghabiskan piring dengan bahagia, dan ubah residu organik menjadi nilai nyata koperasi sekolah.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onOpenDemoModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-tangerine hover:bg-tangerine-600 text-white font-extrabold text-base shadow-xl shadow-tangerine/30 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
              >
                <Sparkles className="w-5 h-5" />
                <span>Buka Aplikasi MBG Sekarang</span>
              </button>

              <button
                onClick={onCalculatorClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold text-base border border-white/30 transition-all duration-300"
              >
                <span>Hitung Potensi Sekolah</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Value bullets */}
            <div className="pt-6 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 text-xs text-primary-100 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-tangerine" />
                <span>Tanpa Biaya Tambahan Anggaran</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Leaf className="w-4 h-4 text-tangerine" />
                <span>Mendukung Target SDG 2 & 12</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-tangerine" />
                <span>Inovasi Karya Pelajar SMKN 26 Jakarta</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
