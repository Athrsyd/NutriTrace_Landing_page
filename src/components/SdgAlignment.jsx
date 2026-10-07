import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe2, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  RotateCw, 
  Sparkles,
  Target
} from 'lucide-react';
import sdg2Logo from '../assets/logo-sdgs/E_WEB_02.png';
import sdg12Logo from '../assets/logo-sdgs/E_WEB_12.png';
import sdg13Logo from '../assets/logo-sdgs/E_WEB_13.png';

export default function SdgAlignment() {
  const [selectedSdg, setSelectedSdg] = useState(2);

  const sdgData = [
    {
      id: 2,
      logo: sdg2Logo,
      badgeText: "SDG 2 • Zero Hunger",
      title: "Tanpa Kelaparan & Perbaikan Gizi",
      accent: "text-amber-600",
      activeBg: "bg-amber-500/10 border-amber-500/40",
      unTarget: "Target 2.1 & 2.2: Akses pangan bergizi merata & penghapusan malnutrisi anak sekolah.",
      problem: "Makanan MBG yang basi karena penurunan suhu (<60°C) atau terlambat tiba berisiko memicu kontaminasi bakteri, penyakit pencernaan, dan hilangnya penyerapan nutrisi harian siswa.",
      solutionSteps: [
        {
          name: "QC Suhu Digital Probe (>60°C)",
          desc: "Validasi suhu boks tiba dalam <2 menit guna memutus perkembangbiakan bakteri berbahaya."
        },
        {
          name: "Jaminan Absorpsi Gizi MBG",
          desc: "Menjamin mutu kalori dan protein terserap optimal ke tubuh siswa tanpa risiko kontaminasi."
        },
        {
          name: "Strict Surplus Hub <1 Jam",
          desc: "Redistribusi tertib porsi berlebih yang masih layak konsumsi sebelum memasuki masa kedaluwarsa."
        }
      ],
      impactMetrics: [
        { value: "0 Kasus", label: "Keracunan Pangan", note: "Standar Keamanan Ketat" },
        { value: "100%", label: "QC Terverifikasi", note: "Boks Makanan Tervalidasi" },
        { value: "<1 Jam", label: "Redistribusi Surplus", note: "Cepat & Tepat Sasaran" }
      ]
    },
    {
      id: 12,
      logo: sdg12Logo,
      badgeText: "SDG 12 • Responsible Consumption",
      title: "Konsumsi & Produksi Bertanggung Jawab",
      accent: "text-orange-600",
      activeBg: "bg-orange-500/10 border-orange-500/40",
      unTarget: "Target 12.3: Memangkas separuh food waste per kapita global pada 2030.",
      problem: "Banyak siswa menyisakan sayur atau lauk di tempat sampah kelas. Tanpa sistem pemantauan, anggaran subsidi MBG terbuang percuma dan menambah beban timbulan sampah kota.",
      solutionSteps: [
        {
          name: "Gamifikasi Clean Plate Check-in",
          desc: "Membangun kebiasaan piring bersih melalui scan foto harian berhadiah streak dan reward koperasi."
        },
        {
          name: "Food Waste Intelligence ke Katering",
          desc: "Data analitik menu bersisa dilaporkan ke dapur mitra untuk mengevaluasi bumbu, rasa, dan porsi."
        },
        {
          name: "Efisiensi Belanja MBG Negara",
          desc: "Mencegah alokasi dana konsumsi anak bangsa terbuang sia-sia menjadi residu sampah."
        }
      ],
      impactMetrics: [
        { value: "85%", label: "Reduksi Food Waste", note: "Sisa Makanan di Piring Berkurang" },
        { value: "96.4%", label: "Piring Bersih", note: "Partisipasi Check-in Siswa" },
        { value: "Harian", label: "Feedback Menu", note: "Evaluasi Cita Rasa Dapur" }
      ]
    },
    {
      id: 13,
      logo: sdg13Logo,
      badgeText: "SDG 13 • Climate Action",
      title: "Penanganan Perubahan Iklim",
      accent: "text-emerald-700",
      activeBg: "bg-emerald-500/10 border-emerald-500/40",
      unTarget: "Target 13.3: Meningkatkan pendidikan & kapasitas mitigasi perubahan iklim di sekolah.",
      problem: "Sampah makanan yang ditimbun di TPA membusuk anaerobik dan melepaskan Gas Metana (CH₄), yang 28x lebih berbahaya dibandingkan CO₂ dalam memerangkap panas atmosfer bumi.",
      solutionSteps: [
        {
          name: "100% Biokonversi Maggot BSF",
          desc: "Residu piring dialihkan ke biopon larva BSF dalam <24 jam sebelum membusuk menghasilkan metana."
        },
        {
          name: "Pupuk Organik Kasgot",
          desc: "Hasil sampingan larva diolah menjadi pupuk kasgot untuk penghijauan sekolah tanpa bahan kimia."
        },
        {
          name: "Nol Residu MBG ke TPA Kota",
          desc: "Menghapuskan beban ritase truk sampah dan mengeliminasi jejak emisi karbon sekolah."
        }
      ],
      impactMetrics: [
        { value: "0 kg", label: "Organik ke TPA", note: "100% Didaur Ulang di Sekolah" },
        { value: "~420 kg", label: "Reduksi Emisi Metana", note: "Setara CO₂e / Bulan / Sekolah" },
        { value: "120 kg", label: "Pupuk Kasgot/Bulan", note: "Menyuburkan Kebun Sekolah" }
      ]
    }
  ];

  const activeSdg = sdgData.find((s) => s.id === selectedSdg) || sdgData[0];

  return (
    <section id="sdgs" className="py-16 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/60 border border-primary/20 text-xs font-bold text-primary-800 uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Agenda PBB 2030 Terpadu</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Bagaimana NutriTrace Menyelesaikan SDGs?
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Setiap fitur dirancang spesifik untuk menjawab 3 pilar Tujuan Pembangunan Berkelanjutan (SDGs).
          </p>
        </div>

        {/* Outer Clean Card Container */}
        <div className="rounded-3xl p-6 sm:p-9 backdrop-blur-md bg-white/85 border border-white/80 shadow-glass">
          
          {/* 3 SDG Interactive Selector Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-8">
            {sdgData.map((item) => {
              const isCurrent = selectedSdg === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedSdg(item.id)}
                  className={`p-4 rounded-2xl text-left transition-all duration-200 border flex items-center gap-3.5 ${
                    isCurrent
                      ? 'bg-white border-primary shadow-sm ring-2 ring-primary/20'
                      : 'bg-slate-50/70 border-slate-200/70 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="w-12 h-12 rounded-xl object-cover shrink-0 shadow-xs"
                  />

                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block truncate">
                      {item.badgeText}
                    </span>
                    <h4 className="font-extrabold text-slate-800 text-sm truncate mt-0.5">
                      {item.title}
                    </h4>
                    <span className="text-[11px] font-bold text-primary flex items-center gap-1 mt-0.5">
                      {isCurrent ? 'Aktif' : 'Lihat Detail'}
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active SDG Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSdg.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Header Box of Selected SDG */}
              <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={activeSdg.logo}
                    alt={activeSdg.title}
                    className="w-14 h-14 rounded-xl object-cover shrink-0 shadow-sm"
                  />
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-primary">
                      {activeSdg.badgeText}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-800">
                      {activeSdg.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 max-w-xl">
                      <strong>Target PBB:</strong> {activeSdg.unTarget}
                    </p>
                  </div>
                </div>

                {/* Impact Metrics Chips */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 p-2.5 rounded-xl bg-white border border-slate-200/80 shrink-0">
                  {activeSdg.impactMetrics.map((metric, i) => (
                    <div key={i} className="text-center px-2">
                      <div className="text-sm sm:text-base font-black text-slate-800">
                        {metric.value}
                      </div>
                      <div className="text-[10px] font-bold text-slate-500 truncate">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Two-Column Clean Grid: Tantangan vs Solusi */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
                
                {/* Left: Tantangan */}
                <div className="md:col-span-5 p-5 rounded-2xl bg-rose-50/50 border border-rose-200/50 flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-1.5 text-rose-700 text-xs font-bold uppercase tracking-wider">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>Tantangan di Lapangan</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {activeSdg.problem}
                    </p>
                  </div>
                  <div className="pt-3 mt-3 border-t border-rose-200/40 text-[11px] text-rose-600 font-medium">
                    Tanpa sistem digital, risiko basi dan pemborosan sulit dicegah secara dini.
                  </div>
                </div>

                {/* Right: Solusi NutriTrace */}
                <div className="md:col-span-7 p-5 rounded-2xl bg-emerald-50/40 border border-emerald-200/50 space-y-3">
                  <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>Langkah Solusi NutriTrace</span>
                  </div>

                  <div className="space-y-2.5">
                    {activeSdg.solutionSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-white/90 border border-emerald-100 flex items-start gap-2.5 shadow-2xs"
                      >
                        <span className="w-5 h-5 rounded-md bg-primary/20 text-primary-800 text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <div>
                          <h5 className="font-bold text-slate-800 text-xs sm:text-sm">
                            {step.name}
                          </h5>
                          <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom: Closed Loop Summary */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <RotateCw className="w-4 h-4 text-primary shrink-0" />
                  <span>
                    <strong className="text-slate-800">Sinergi Tiga Pilar:</strong> SDG 2 (Gizi Berkualitas) ➔ SDG 12 (Piring Bersih) ➔ SDG 13 (Biokonversi Residu Tanpa Metana).
                  </span>
                </div>
                <span className="text-[11px] font-bold text-primary self-end sm:self-auto shrink-0">
                  Closed-Loop System
                </span>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
