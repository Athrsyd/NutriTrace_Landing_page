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
      title: "Pemeriksaan Makanan Tiba",
      tagline: "Memastikan Makanan Bersih & Hangat",
      shortDesc: "Pemeriksaan kondisi makanan saat baru tiba agar tetap hangat, bersih, dan aman.",
      detailedDesc: "Petugas sekolah memeriksa kebersihan kemasan dan memastikan makanan dalam kondisi hangat serta layak dikonsumsi sebelum disajikan kepada siswa.",
      img: "/images/mbg_qc_arrival.jpg",
      imgCaption: "Pemeriksaan kebersihan dan kelayakan makanan saat tiba di sekolah",
      icon: ClipboardCheck,
      metrics: [
        { label: "Kondisi", value: "Hangat & Bersih" },
        { label: "Kemasan", value: "Rapi & Tersegel" },
        { label: "Hasil", value: "Aman Dikonsumsi" },
      ],
      color: "border-primary text-primary",
      activeBg: "bg-primary text-white",
    },
    {
      stepNumber: "02",
      title: "Pembagian Makanan ke Siswa",
      tagline: "Tertib, Merata, & Tepat Sasaran",
      shortDesc: "Makanan dibagikan ke setiap kelas, dan porsi berlebih disalurkan agar tidak mubazir.",
      detailedDesc: "Makanan dibagikan secara tertib ke setiap kelas. Jika ada porsi lebih yang masih bersih dan utuh, langsung disalurkan kepada warga sekolah yang membutuhkan agar tidak ada makanan yang terbuang.",
      img: "/images/mbg_qc_arrival.jpg",
      imgCaption: "Penyaluran makanan secara tertib dan higienis ke setiap kelas",
      icon: Clock,
      metrics: [
        { label: "Pembagian", value: "Merata ke Kelas" },
        { label: "Porsi Berlebih", value: "Segera Disalurkan" },
        { label: "Tujuan", value: "Tidak Ada yang Terbuang" },
      ],
      color: "border-tangerine text-tangerine",
      activeBg: "bg-tangerine text-white",
    },
    {
      stepNumber: "03",
      title: "Makan Bersama & Habiskan Piring",
      tagline: "Membiasakan Makan Tanpa Sisa",
      shortDesc: "Siswa makan bersama dan diajak menghabiskan porsinya sampai bersih.",
      detailedDesc: "Siswa menikmati makanan bergizi bersama teman sekelas dan diajak untuk menghabiskan seluruh makanan di piring. Kebiasaan baik ini diapresiasi agar anak-anak terbiasa menghargai makanan.",
      img: "/images/mbg_clean_plate.jpg",
      imgCaption: "Siswa menikmati makanan bergizi dan menghabiskan porsinya tanpa sisa",
      icon: UtensilsCrossed,
      metrics: [
        { label: "Kebiasaan", value: "Piring Bersih" },
        { label: "Apresiasi", value: "Poin Semangat Positif" },
        { label: "Manfaat", value: "Gizi Terserap Sempurna" },
      ],
      color: "border-emerald-600 text-emerald-600",
      activeBg: "bg-emerald-600 text-white",
    },
    {
      stepNumber: "04",
      title: "Pengolahan Sisa Makanan",
      tagline: "Memanfaatkan Sisa Jadi Bernilai",
      shortDesc: "Sisa makanan dipilah untuk diolah kembali menjadi pupuk dan pakan ternak.",
      detailedDesc: "Sisa makanan yang tidak habis dipilah secara teratur dan diolah kembali secara ramah lingkungan menjadi pupuk kompos atau pakan ternak, sehingga lingkungan sekolah tetap bersih dan bebas sampah.",
      img: "/images/mbg_maggot_waste.jpg",
      imgCaption: "Pengolahan sisa makanan secara ramah lingkungan di sekolah",
      icon: Recycle,
      metrics: [
        { label: "Sampah Terbuang", value: "Berkurang Drastis" },
        { label: "Pemanfaatan", value: "Pupuk Kompos & Pakan" },
        { label: "Hasil", value: "Sekolah Bersih & Asri" },
      ],
      color: "border-primary-700 text-primary-700",
      activeBg: "bg-primary-700 text-white",
    },
  ];

  return (
    <section id="alur" className="py-20 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header - Concise */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-container border border-primary/20 text-xs font-bold text-primary-800 uppercase tracking-wider">
            <span>Alur Praktis Sekolah</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Alur Pengelolaan Makanan (4 Langkah Mudah)
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Panduan sederhana mulai dari makanan tiba, dibagikan ke siswa, hingga penanganan sisa makanan secara bermanfaat.
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
                className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 border relative flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-white border-primary shadow-md shadow-primary/10'
                    : 'bg-white/60 border-slate-200 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] sm:text-xs font-extrabold px-2 py-0.5 rounded-lg ${
                      isCurrent ? step.activeBg : 'bg-slate-100 text-slate-600'
                    }`}>
                      Langkah {step.stepNumber}
                    </span>
                    <Icon className={`w-4 h-4 ${isCurrent ? 'text-primary' : 'text-slate-400'}`} />
                  </div>
                  <h4 className="font-extrabold text-xs sm:text-sm text-slate-800 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                    {step.shortDesc}
                  </p>
                </div>
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
                        <span className="text-xs sm:text-sm font-extrabold text-slate-800 mt-0.5 block leading-tight break-words">
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
