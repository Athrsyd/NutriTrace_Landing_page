import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  Scale, 
  Coins, 
  Leaf, 
  Users, 
  Sparkles,
  TreePine,
  CheckCircle2
} from 'lucide-react';

export default function ImpactCalculator() {
  const [studentCount, setStudentCount] = useState(600);

  // Perhitungan Dampak Terukur (Berdasarkan 22 hari sekolah / 1 bulan)
  const schoolDays = 22;
  const totalMeals = studentCount * schoolDays;

  // 1. Makanan yang berhasil dihabiskan (mencegah rata-rata ~70 gram sisa per anak per hari)
  const foodSavedKg = Math.round(totalMeals * 0.07);
  const portionsSaved = Math.round(foodSavedKg / 0.35); // 350 gram per porsi standar

  // 2. Emisi Karbon & Metana dicegah (1 kg sampah makanan = 2.5 kg CO2e)
  const co2AvoidedKg = Math.round(foodSavedKg * 2.5);
  const treesEquivalent = Math.max(1, Math.round(co2AvoidedKg / 22)); // 1 pohon serap ~22 kg CO2/thn

  // 3. Efisiensi Anggaran Pangan (Nilai bahan baku pangan terselamatkan)
  const moneySavedRp = Math.round(portionsSaved * 7500);

  // 4. Sisa makanan tak terhindarkan didaur ulang (biokonversi maggot BSF & pupuk kasgot)
  const compostMaggotKg = Math.round(totalMeals * 0.012 * 0.9);

  const presets = [
    { label: '250 Siswa', count: 250 },
    { label: '600 Siswa (SMKN 26)', count: 600 },
    { label: '1.000 Siswa', count: 1000 },
    { label: '1.500 Siswa', count: 1500 },
  ];

  return (
    <section id="kalkulator" className="py-20 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header - Ringkas & Jelas */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-container border border-primary/20 text-xs font-bold text-primary-800 uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-primary" />
            <span>Simulasi Dampak</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Perkiraan Dampak Positif Bagi Sekolah
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Geser jumlah siswa untuk melihat estimasi pengurangan sampah, emisi yang dicegah, dan penghematan dana per bulan.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 backdrop-blur-md bg-white/95 border border-slate-200/90 shadow-glass space-y-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sisi Kiri: Slider & Preset Input */}
            <div className="lg:col-span-5 space-y-5">
              <div className="flex items-center justify-between">
                <label htmlFor="studentSlider" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Jumlah Siswa
                </label>
                <div className="text-right">
                  <span className="text-2xl font-black text-primary">
                    {studentCount.toLocaleString('id-ID')}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 ml-1">Siswa</span>
                </div>
              </div>

              {/* Slider Input */}
              <input
                id="studentSlider"
                type="range"
                min="100"
                max="2000"
                step="50"
                value={studentCount}
                onChange={(e) => setStudentCount(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
              />

              {/* Presets */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-slate-400 block">Pilihan Cepat:</span>
                <div className="grid grid-cols-2 gap-2">
                  {presets.map((preset) => (
                    <button
                      key={preset.count}
                      onClick={() => setStudentCount(preset.count)}
                      className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all text-center truncate cursor-pointer ${
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

              <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-1.5 border-t border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>Simulasi berbasis 22 hari sekolah (1 bulan)</span>
              </div>
            </div>

            {/* Sisi Kanan: 4 Kartu Dampak Kuantitatif */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              {/* Kartu 1: Sampah Makanan Dihabiskan */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Makanan Dihabiskan</span>
                  <Scale className="w-4 h-4 text-primary" />
                </div>
                <p className="text-2xl font-black text-slate-800">
                  {foodSavedKg.toLocaleString('id-ID')} <span className="text-xs font-semibold text-slate-400">kg/bln</span>
                </p>
                <p className="text-[11px] text-slate-500">
                  ≈ {portionsSaved.toLocaleString('id-ID')} porsi makanan tidak terbuang
                </p>
              </div>

              {/* Kartu 2: Emisi Karbon Dihindari */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Emisi Karbon Dicegah</span>
                  <Leaf className="w-4 h-4 text-emerald-600" />
                </div>
                <p className="text-2xl font-black text-slate-800">
                  {co2AvoidedKg.toLocaleString('id-ID')} <span className="text-xs font-semibold text-slate-400">kg CO₂e</span>
                </p>
                <p className="text-[11px] text-emerald-600 font-semibold">
                  Setara daya serap {treesEquivalent.toLocaleString('id-ID')} pohon/tahun
                </p>
              </div>

              {/* Kartu 3: Nilai Anggaran Terselamatkan */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Dana Pangan Diselamatkan</span>
                  <Coins className="w-4 h-4 text-accent" />
                </div>
                <p className="text-2xl font-black text-slate-800">
                  Rp {moneySavedRp.toLocaleString('id-ID')}
                </p>
                <p className="text-[11px] text-slate-500">
                  Efisiensi dari pencegahan mubazir pangan
                </p>
              </div>

              {/* Kartu 4: Daur Ulang Sisa Makanan */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Pupuk & Pakan Alami</span>
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <p className="text-2xl font-black text-primary">
                  {compostMaggotKg.toLocaleString('id-ID')} <span className="text-xs font-semibold text-slate-400">kg/bln</span>
                </p>
                <p className="text-[11px] text-slate-500">
                  Hasil daur ulang sisa tak terhindarkan
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
