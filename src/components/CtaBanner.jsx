import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, HeartHandshake, Leaf, Trophy } from 'lucide-react';

export default function CtaBanner({ onOpenDemoModal, onCalculatorClick, onNavigateToDownload }) {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        <div className="relative rounded-[20px] p-8 sm:p-12 md:p-16 overflow-hidden bg-gradient-to-br from-[#134E4A] via-[#115E59] to-[#0F766E] text-white shadow-2xl shadow-primary/25 border border-white/10">
          
          {/* Ambient shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-accent/20 blur-2xl pointer-events-none -ml-20 -mb-20" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-bold text-white uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Gerakan Sekolah Bebas Sampah Makanan</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.2]">
              Siap Menjadikan Sekolah Pelopor Makanan Sehat & Bebas Sampah?
            </h2>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-container/90 max-w-2xl mx-auto leading-relaxed">
              Bergabunglah dengan PeduliMBG. Pastikan makanan siswa selalu bersih dan higienis, 
              biasakan piring bersih dengan gembira, serta ubah sisa makanan menjadi bermanfaat bagi lingkungan sekolah.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={onNavigateToDownload || onOpenDemoModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-[16px] bg-accent hover:bg-amber-600 text-slate-900 font-extrabold text-base shadow-xl shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-slate-900" />
                <span>Unduh Aplikasi PeduliMBG Sekarang</span>
              </button>

              <button
                onClick={onCalculatorClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-[16px] bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold text-base border border-white/30 transition-all duration-300"
              >
                <span>Hitung Potensi Sekolah</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Value bullets */}
            <div className="pt-6 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 text-xs text-container/90 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-accent" />
                <span>Tanpa Biaya Tambahan Anggaran</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Leaf className="w-4 h-4 text-accent" />
                <span>Mendukung Target SDG 2 & 12</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Trophy className="w-4 h-4 text-accent" />
                <span>Inovasi Karya Pelajar SMKN 26 Jakarta</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
