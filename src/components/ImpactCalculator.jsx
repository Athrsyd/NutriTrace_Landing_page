import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Sparkles, 
  Scale, 
  Coins, 
  Leaf, 
  Users, 
  RefreshCcw 
} from 'lucide-react';

export default function ImpactCalculator() {
  const [studentCount, setStudentCount] = useState(600);

  const schoolDays = 22;
  const wastePerMealKg = 0.08;
  const wastePreventedRate = 0.88;

  const totalMeals = studentCount * schoolDays;
  const foodWastePreventedKg = Math.round(totalMeals * wastePerMealKg * wastePreventedRate);
  const maggotCompostBiomassKg = Math.round(totalMeals * wastePerMealKg * 0.12 * 1.5);
  const economicValueRupiah = Math.round(maggotCompostBiomassKg * 5500 + (foodWastePreventedKg * 2200));
  const co2AvoidedKg = Math.round(foodWastePreventedKg * 2.5);

  const presets = [
    { label: 'Rintisan (250)', count: 250 },
    { label: 'SMKN 26 (600)', count: 600 },
    { label: 'Menengah (1.200)', count: 1200 },
    { label: 'Kompleks (1.800)', count: 1800 },
  ];

  return (
    <section id="kalkulator" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Concise */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/60 border border-primary/20 text-xs font-bold text-primary-800 uppercase tracking-wider">
            <span>Simulasi Cepat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Kalkulator Dampak & Kas Koperasi
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Geser slider jumlah siswa untuk melihat proyeksi food waste tereduksi dan nilai ekonomi koperasi sekolah.
          </p>
        </div>

        {/* Calculator Main Container */}
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 backdrop-blur-md bg-white/90 border border-white/70 shadow-glass space-y-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <label htmlFor="studentSlider" className="text-xs font-bold text-slate-500 uppercase">
                  Jumlah Siswa MBG
                </label>
                <span className="text-xl font-black text-primary">
                  {studentCount.toLocaleString()} Siswa
                </span>
              </div>

              <input
                id="studentSlider"
                type="range"
                min="100"
                max="2000"
                step="50"
                value={studentCount}
                onChange={(e) => setStudentCount(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />

              {/* Presets */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                {presets.map((preset) => (
                  <button
                    key={preset.count}
                    onClick={() => setStudentCount(preset.count)}
                    className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all text-center truncate ${
                      studentCount === preset.count
                        ? 'bg-primary text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Output Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Sampah Tereduksi</span>
                  <Scale className="w-4 h-4 text-primary" />
                </div>
                <p className="text-2xl font-black text-slate-800">
                  {foodWastePreventedKg.toLocaleString()} <span className="text-xs font-semibold text-slate-400">kg/bln</span>
                </p>
                <p className="text-[11px] text-slate-500">Makanan habis dimakan siswa</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Pakan Maggot BSF</span>
                  <Leaf className="w-4 h-4 text-primary" />
                </div>
                <p className="text-2xl font-black text-primary">
                  {maggotCompostBiomassKg.toLocaleString()} <span className="text-xs font-semibold text-slate-400">kg/bln</span>
                </p>
                <p className="text-[11px] text-slate-500">Biokonversi pakan larva segar</p>
              </div>

              <div className="sm:col-span-2 p-4 rounded-2xl bg-gradient-to-r from-tangerine-50 to-white border border-tangerine/30 shadow-xs space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-slate-500">Estimasi Nilai Kas Koperasi</span>
                  <Coins className="w-4 h-4 text-tangerine" />
                </div>
                <p className="text-2xl sm:text-3xl font-black text-slate-800">
                  Rp {economicValueRupiah.toLocaleString('id-ID')}
                  <span className="text-xs font-semibold text-slate-500"> / bulan</span>
                </p>
                <p className="text-[11px] text-emerald-700 font-bold">
                  🌱 Mencegah {co2AvoidedKg.toLocaleString()} kg emisi CO2e dari pembusukan di TPA
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
