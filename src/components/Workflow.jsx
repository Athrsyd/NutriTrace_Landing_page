import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ClipboardCheck, 
  Clock, 
  UtensilsCrossed, 
  Recycle, 
  ChevronRight, 
  CheckCircle2, 
  Thermometer, 
  Flame, 
  Sparkles,
  ArrowRight,
  FileText
} from 'lucide-react';

export default function Workflow({ onOpenReportModal }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      stepNumber: "01",
      title: "QC Kedatangan Katering",
      tagline: "Verifikasi Mutu < 2 Menit",
      shortDesc: "Uji suhu bento (>60°C) & cek segel fisik saat boks tiba.",
      detailedDesc: "Petugas Satgas MBG memeriksa suhu makanan dengan termometer digital probe, memastikan integritas segel kemasan, serta mencocokkan kelengkapan porsi kelas.",
      img: "/images/mbg_qc_arrival.jpg",
      imgCaption: "Pemeriksaan Suhu & Segel Bento MBG oleh Satgas",
      icon: ClipboardCheck,
      metrics: [
        { label: "Waktu Input", value: "< 2 Menit" },
        { label: "Suhu Aman", value: "≥ 60.0°C" },
        { label: "Verifikasi", value: "Segel & Alergen" },
      ],
      color: "border-primary text-primary",
      activeBg: "bg-primary text-white",
    },
    {
      stepNumber: "02",
      title: "Distribusi & Surplus Hub",
      tagline: "Strict Surplus Hub < 1 Jam",
      shortDesc: "Pengamanan porsi lebih tersegel untuk staf dan siswa.",
      detailedDesc: "Porsi utuh tersegel yang tersisa langsung tercatat di hub. Sistem mengaktifkan countdown timer 1 jam untuk redistribusi higienis sebelum kualitas makanan berkurang.",
      img: "/images/mbg_qc_arrival.jpg",
      imgCaption: "Porsi Utuh Tersegel Siap Diredistribusikan (< 1 Jam)",
      icon: Clock,
      metrics: [
        { label: "Batas Waktu", value: "< 1 Jam" },
        { label: "Kondisi", value: "100% Tersegel" },
        { label: "Penerima", value: "Staf & Siswa" },
      ],
      color: "border-tangerine text-tangerine",
      activeBg: "bg-tangerine text-white",
    },
    {
      stepNumber: "03",
      title: "Clean Plate Check-in",
      tagline: "Gamifikasi Piring Bersih Siswa",
      shortDesc: "Foto piring habis untuk raih poin harian & streak.",
      detailedDesc: "Siswa menikmati makanan bergizi dan memotret piring yang telah habis. Sistem memverifikasi citra piring, menambah +50 poin, dan menaikkan ranking kelas.",
      img: "/images/mbg_clean_plate.jpg",
      imgCaption: "Siswa SMKN 26 Menghabiskan Menu MBG Tanpa Sisa",
      icon: UtensilsCrossed,
      metrics: [
        { label: "Hadiah Harian", value: "+50 Poin" },
        { label: "Gamifikasi", value: "Streak & Badges" },
        { label: "Kompetisi", value: "Leaderboard Kelas" },
      ],
      color: "border-emerald-600 text-emerald-600",
      activeBg: "bg-emerald-600 text-white",
    },
    {
      stepNumber: "04",
      title: "Sirkular Maggot & Kompos",
      tagline: "Biokonversi & Kas Koperasi Sekolah",
      shortDesc: "Residu organik diolah jadi pakan larva BSF & pupuk.",
      detailedDesc: "Sisa organik dialirkan ke mitra peternak Black Soldier Fly (BSF) dan pengomposan. Hasil penjualan biomassa menjadi kas pendana katalog reward koperasi sekolah.",
      img: "/images/mbg_maggot_waste.jpg",
      imgCaption: "Stasiun Biokonversi Maggot BSF di Sekolah",
      icon: Recycle,
      metrics: [
        { label: "Limbah ke TPA", value: "0 kg (Nir-Sampah)" },
        { label: "Hasil Konversi", value: "Maggot BSF & Kompos" },
        { label: "Ekonomi", value: "Kas Koperasi" },
      ],
      color: "border-primary-700 text-primary-700",
      activeBg: "bg-primary-700 text-white",
    },
  ];

  return (
    <section id="alur" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Concise */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/60 border border-primary/20 text-xs font-bold text-primary-800 uppercase tracking-wider">
            <span>Standar Operasional MBG</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Alur Rantai Pasok Terpadu (4 Langkah)
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Panduan sistematis dari kedatangan makanan hingga pengelolaan residu bernilai ekonomi.
          </p>
        </div>

        {/* Stepper Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 border relative ${
                  isCurrent
                    ? 'bg-white border-primary shadow-md shadow-primary/10'
                    : 'bg-white/60 border-slate-200 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] sm:text-xs font-extrabold px-2 py-0.5 rounded-lg ${
                    isCurrent ? step.activeBg : 'bg-slate-100 text-slate-600'
                  }`}>
                    Langkah {step.stepNumber}
                  </span>
                  <Icon className={`w-4 h-4 ${isCurrent ? 'text-primary' : 'text-slate-400'}`} />
                </div>
                <h4 className="font-extrabold text-xs sm:text-sm text-slate-800 line-clamp-1">
                  {step.title}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5">
                  {step.shortDesc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Inspection Card with Real Documentary Photo */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl p-6 sm:p-8 backdrop-blur-md bg-white/90 border border-white/70 shadow-glass"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Description & Metrics */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-primary-50 text-primary text-xs font-bold border border-primary/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{steps[activeStep].tagline}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
                    {steps[activeStep].stepNumber}. {steps[activeStep].title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {steps[activeStep].detailedDesc}
                  </p>

                  {/* 3 Parameter Chips */}
                  <div className="grid grid-cols-3 gap-2.5 pt-2">
                    {steps[activeStep].metrics.map((metric, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center sm:text-left">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          {metric.label}
                        </span>
                        <span className="text-xs sm:text-sm font-extrabold text-slate-800 mt-0.5 block truncate">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stepper navigation */}
                  <div className="flex flex-wrap items-center gap-2 pt-2">
                    <button
                      onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                      className="px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      ← Sebelumnya
                    </button>
                    <button
                      onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                      className="inline-flex items-center gap-1 px-4 py-1.5 rounded-xl text-xs font-bold text-white bg-primary hover:bg-primary-600 transition-colors shadow-xs"
                    >
                      <span>Langkah Berikutnya</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    {onOpenReportModal && (
                      <button
                        onClick={onOpenReportModal}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-xs sm:ml-auto"
                      >
                        <FileText className="w-3.5 h-3.5 text-tangerine" />
                        <span>Lihat Dokumen Laporan (PDF)</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Right: Real Documentary Photo Preview */}
                <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm">
                  <div className="relative aspect-[16/11]">
                    <img
                      src={steps[activeStep].img}
                      alt={steps[activeStep].title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/70 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      Dokumentasi Lapangan
                    </div>
                  </div>
                  <div className="p-3 bg-white text-xs text-slate-600 font-medium border-t border-slate-200 flex items-center justify-between">
                    <span>{steps[activeStep].imgCaption}</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
