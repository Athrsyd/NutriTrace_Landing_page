import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calculator, 
  Scale, 
  Coins, 
  Leaf, 
  Users, 
  Sparkles, 
  TreePine, 
  CheckCircle2,
  Calendar,
  Info,
  ChevronDown,
  ChevronUp,
  ArrowRight
} from 'lucide-react';

export default function ImpactCalculator() {
  const [studentCount, setStudentCount] = useState(600);
  const [showMethodology, setShowMethodology] = useState(false);

  // Perhitungan Dampak Terukur (Berdasarkan 22 hari sekolah / 1 bulan)
  // SISTEM PERHITUNGAN TETAP SESUAI ASLINYA:
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

  // Parameter Satuan Awal untuk Referensi Informatif
  const baselineUnits = [
    {
      label: 'Hari Aktif Belajar',
      value: '22 Hari / Bulan',
      formula: 'Senin - Jumat',
      desc: 'Jumlah hari makan bergizi (MBG) disajikan di sekolah per bulan.',
      tag: 'Waktu'
    },
    {
      label: 'Sisa Pangan Dicegah',
      value: '70 gram / siswa / hari',
      formula: '0,07 kg / porsi',
      desc: 'Rata-rata potensi sisa piring yang berhasil dicegah dengan pembiasaan makan habis.',
      tag: 'Residu'
    },
    {
      label: 'Bobot Standar Porsi',
      value: '350 gram / porsi',
      formula: '0,35 kg / porsi',
      desc: 'Standar porsi gizi seimbang (nasi, lauk, sayur, buah) sebagai basis konversi porsi.',
      tag: 'Porsi'
    },
    {
      label: 'Faktor Emisi Karbon',
      value: '2,5 kg CO₂e / kg sampah',
      formula: '1 pohon ≈ 22 kg CO₂/thn',
      desc: 'Potensi gas metana & emisi GRK yang dihindari saat sisa pangan tidak membusuk di TPA.',
      tag: 'Lingkungan'
    },
    {
      label: 'Valuasi Bahan Pokok',
      value: 'Rp 7.500 / porsi',
      formula: 'Nilai bahan makanan',
      desc: 'Estimasi nilai bahan makanan bergizi yang terselamatkan dari pemborosan.',
      tag: 'Ekonomi'
    },
    {
      label: 'Daur Ulang Residu',
      value: '12 gram residu × 90%',
      formula: 'Pupuk Kasgot & Maggot',
      desc: 'Sisa tak terhindarkan (tulang/kulit buah) yang diolah menjadi pupuk & pakan maggot.',
      tag: 'Sirkular'
    },
  ];

  return (
    <section id="kalkulator" className="py-20 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header - Ringkas & Jelas */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-container border border-primary/20 text-xs font-bold text-primary-800 uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-primary" />
            <span>Simulasi Dampak Transparan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Perkiraan Dampak Positif Bagi Sekolah
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Perhitungan transparan berbasis parameter nyata: geser jumlah siswa untuk melihat estimasi pengurangan sampah, emisi yang dicegah, dan nilai efisiensi per bulan.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 backdrop-blur-md bg-white/95 border border-slate-200/90 shadow-glass space-y-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Sisi Kiri: Slider, Pilihan Cepat & Parameter Waktu */}
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
                      className={`py-2 px-2.5 rounded-xl text-xs font-bold transition-all text-center leading-tight cursor-pointer ${
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

              {/* Banner Informasi Total Porsi MBG */}
              <div className="p-3.5 rounded-2xl bg-primary/10 border border-primary/20 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    Total Porsi Disajikan:
                  </span>
                  <span className="text-xs font-black text-primary">
                    {totalMeals.toLocaleString('id-ID')} Porsi/Bulan
                  </span>
                </div>
                <p className="text-[10px] text-slate-500">
                  Dihitung dari {studentCount.toLocaleString('id-ID')} siswa × 22 hari aktif belajar.
                </p>
              </div>

              {/* Penjelasan Singkat */}
              <div className="pt-1 text-[11px] text-slate-500 flex items-center gap-1.5 border-t border-slate-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>Simulasi akurat dengan satuan baku lingkungan & gizi</span>
              </div>
            </div>

            {/* Sisi Kanan: 4 Kartu Dampak Kuantitatif dengan Rincian Satuan Awal */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              
              {/* Kartu 1: Sampah Makanan Dihabiskan */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase text-slate-400">Makanan Dihabiskan</span>
                    <Scale className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-2xl font-black text-slate-800 mt-1">
                    {foodSavedKg.toLocaleString('id-ID')} <span className="text-xs font-semibold text-slate-400">kg/bln</span>
                  </p>
                  <p className="text-[11px] text-slate-500 leading-tight mt-1">
                    ≈ {portionsSaved.toLocaleString('id-ID')} porsi makanan tidak terbuang
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-0.5">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-slate-400">Satuan Awal:</span>
                    <span className="font-bold text-slate-700">70g sisa/anak/hari</span>
                  </div>
                  <div className="text-[9px] text-slate-400">
                    {totalMeals.toLocaleString('id-ID')} porsi × 0,07 kg = {foodSavedKg.toLocaleString('id-ID')} kg
                  </div>
                </div>
              </div>

              {/* Kartu 2: Emisi Karbon Dihindari */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase text-slate-400">Emisi Karbon Dicegah</span>
                    <Leaf className="w-4 h-4 text-emerald-600" />
                  </div>
                  <p className="text-2xl font-black text-slate-800 mt-1">
                    {co2AvoidedKg.toLocaleString('id-ID')} <span className="text-xs font-semibold text-slate-400">kg CO₂e</span>
                  </p>
                  <p className="text-[11px] text-emerald-600 font-semibold leading-tight mt-1">
                    Setara daya serap {treesEquivalent.toLocaleString('id-ID')} pohon/tahun
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-0.5">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-slate-400">Satuan Awal:</span>
                    <span className="font-bold text-emerald-800">2,5 kg CO₂e / kg sampah</span>
                  </div>
                  <div className="text-[9px] text-slate-400">
                    {foodSavedKg.toLocaleString('id-ID')} kg × 2,5 = {co2AvoidedKg.toLocaleString('id-ID')} kg CO₂e
                  </div>
                </div>
              </div>

              {/* Kartu 3: Nilai Anggaran Terselamatkan */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase text-slate-400">Dana Pangan Diselamatkan</span>
                    <Coins className="w-4 h-4 text-accent" />
                  </div>
                  <p className="text-2xl font-black text-slate-800 mt-1">
                    Rp {moneySavedRp.toLocaleString('id-ID')}
                  </p>
                  <p className="text-[11px] text-slate-500 leading-tight mt-1">
                    Efisiensi dari pencegahan mubazir pangan
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-0.5">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-slate-400">Satuan Awal:</span>
                    <span className="font-bold text-amber-800">Rp 7.500 / porsi utuh</span>
                  </div>
                  <div className="text-[9px] text-slate-400">
                    {portionsSaved.toLocaleString('id-ID')} porsi × Rp 7.500 = Rp {moneySavedRp.toLocaleString('id-ID')}
                  </div>
                </div>
              </div>

              {/* Kartu 4: Daur Ulang Sisa Makanan */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between space-y-2">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase text-slate-400">Pupuk & Pakan Alami</span>
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-2xl font-black text-primary mt-1">
                    {compostMaggotKg.toLocaleString('id-ID')} <span className="text-xs font-semibold text-slate-400">kg/bln</span>
                  </p>
                  <p className="text-[11px] text-slate-500 leading-tight mt-1">
                    Hasil daur ulang sisa tak terhindarkan
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-0.5">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="text-slate-400">Satuan Awal:</span>
                    <span className="font-bold text-primary">12g residu × 90% konversi</span>
                  </div>
                  <div className="text-[9px] text-slate-400">
                    {totalMeals.toLocaleString('id-ID')} porsi × 0,012 kg × 90% = {compostMaggotKg.toLocaleString('id-ID')} kg
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* ================= PANEL TRANSPARANSI NILAI SATUAN AWAL & METODOLOGI ================= */}
          <div className="pt-4 border-t border-slate-200/80">
            <button
              onClick={() => setShowMethodology(!showMethodology)}
              className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 transition-colors text-left cursor-pointer group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Info className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-slate-800 group-hover:text-primary transition-colors">
                    Nilai Awal Satuan & Metodologi Perhitungan
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Pelajari parameter dasar, standar porsi, dan rumus konversi yang digunakan dalam simulasi ini
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-primary shrink-0 ml-3">
                <span className="hidden sm:inline">{showMethodology ? 'Sembunyikan' : 'Buka Rincian'}</span>
                {showMethodology ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </div>
            </button>

            <AnimatePresence>
              {showMethodology && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 space-y-4">
                    
                    {/* Grid 6 Parameter Satuan Awal */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {baselineUnits.map((item, idx) => (
                        <div 
                          key={idx}
                          className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1.5 text-left"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-md">
                              {item.tag}
                            </span>
                            <span className="text-[10px] text-slate-400 font-semibold">
                              {item.formula}
                            </span>
                          </div>

                          <h5 className="font-extrabold text-xs text-slate-800">
                            {item.label}
                          </h5>

                          <p className="text-xs font-black text-slate-700">
                            {item.value}
                          </p>

                          <p className="text-[11px] text-slate-500 leading-relaxed pt-1 border-t border-slate-100">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Ringkasan Alur Rumus Terapan untuk Nilai Saat Ini */}
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white space-y-2.5">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-tangerine" />
                        <span className="text-xs font-extrabold uppercase tracking-wider text-tangerine">
                          Rangkuman Rumus Terapan ({studentCount.toLocaleString('id-ID')} Siswa):
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                        <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
                          <span className="text-[10px] text-slate-400 block font-semibold">1. Makanan Dihabiskan:</span>
                          <span className="font-mono text-white text-[11px]">
                            {totalMeals.toLocaleString('id-ID')} porsi × 0,07 kg = <strong>{foodSavedKg.toLocaleString('id-ID')} kg/bln</strong>
                          </span>
                        </div>

                        <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
                          <span className="text-[10px] text-slate-400 block font-semibold">2. Emisi Karbon Dicegah:</span>
                          <span className="font-mono text-white text-[11px]">
                            {foodSavedKg.toLocaleString('id-ID')} kg × 2,5 = <strong>{co2AvoidedKg.toLocaleString('id-ID')} kg CO₂e</strong>
                          </span>
                        </div>

                        <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
                          <span className="text-[10px] text-slate-400 block font-semibold">3. Dana Diselamatkan:</span>
                          <span className="font-mono text-white text-[11px]">
                            {portionsSaved.toLocaleString('id-ID')} porsi × Rp 7.500 = <strong>Rp {moneySavedRp.toLocaleString('id-ID')}</strong>
                          </span>
                        </div>

                        <div className="bg-white/5 p-2.5 rounded-xl border border-white/10">
                          <span className="text-[10px] text-slate-400 block font-semibold">4. Biokonversi Pupuk & Pakan:</span>
                          <span className="font-mono text-white text-[11px]">
                            {totalMeals.toLocaleString('id-ID')} porsi × 0,012 kg × 90% = <strong>{compostMaggotKg.toLocaleString('id-ID')} kg</strong>
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
