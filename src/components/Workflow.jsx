import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ClipboardCheck, 
  Clock, 
  UtensilsCrossed, 
  Recycle, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';

export default function Workflow({ onOpenReportModal }) {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);

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
    <section id="alur" className="scroll-mt-24 py-12 md:py-16 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
            Alur Pengelolaan Makanan (4 Langkah Mudah)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Arahkan kursor untuk melihat ringkasan detail tiap tahapan, atau klik untuk melihat dokumentasi visualnya.
          </p>
        </div>

        {/* Stepper Pipeline: Tampilan persis, bagian berlebih dapat di-scroll secara horizontal */}
        <div className="relative overflow-x-auto pb-3 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
          <div className="min-w-[920px] flex items-center justify-between gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-3xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-glass">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isCurrent = activeStep === idx;
              return (
                <React.Fragment key={step.stepNumber}>
                  {/* Step item */}
                  <div
                    className="relative flex-1"
                    onMouseEnter={() => setHoveredStep(idx)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      title={`${step.tagline} - ${step.detailedDesc}`}
                      className={`w-full group text-left px-4 py-3 sm:py-3.5 rounded-2xl transition-all duration-300 border flex items-center gap-3 relative cursor-pointer ${
                        isCurrent
                          ? 'bg-primary text-white border-primary shadow-md shadow-primary/25 scale-[1.02]'
                          : 'bg-white/70 hover:bg-white text-slate-700 border-slate-200/80 hover:border-primary/40 hover:shadow-xs'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-black text-xs shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                        isCurrent
                          ? 'bg-white/20 text-white'
                          : 'bg-primary-50 text-primary border border-primary/20'
                      }`}>
                        {step.stepNumber}
                      </div>

                      <div className="min-w-0 flex-1">
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider block ${
                          isCurrent ? 'text-white/80' : 'text-slate-400'
                        }`}>
                          Langkah {step.stepNumber}
                        </span>
                        <h4 className={`font-extrabold text-xs sm:text-sm truncate leading-snug ${
                          isCurrent ? 'text-white' : 'text-slate-800 group-hover:text-primary transition-colors'
                        }`}>
                          {step.title}
                        </h4>
                      </div>

                      <Icon className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:rotate-6 ${
                        isCurrent ? 'text-white' : 'text-slate-400 group-hover:text-primary'
                      }`} />
                    </button>
                  </div>

                  {/* Arrow connector between steps */}
                  {idx < steps.length - 1 && (
                    <div className="flex items-center justify-center shrink-0 text-slate-400 px-1">
                      <ArrowRight className="w-5 h-5 text-slate-400" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Hover Detail Preview Bar */}
        <div className="min-h-[28px] my-2 flex items-center justify-center">
          <AnimatePresence>
            {hoveredStep !== null && (
              <motion.div
                key={hoveredStep}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 text-white text-xs shadow-md backdrop-blur-sm"
              >
                <span className="text-emerald-300 font-bold">{steps[hoveredStep].tagline}:</span>
                <span className="text-slate-200">{steps[hoveredStep].shortDesc}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Inspection Card with Real Documentary Photo */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 25 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="rounded-3xl p-6 sm:p-8 backdrop-blur-md bg-white border border-slate-200/90 shadow-glass"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Left Description & Metrics */}
                <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                  <div className="space-y-1.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {steps[activeStep].tagline}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800">
                      {steps[activeStep].stepNumber}. {steps[activeStep].title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {steps[activeStep].detailedDesc}
                  </p>

                  {/* 3 Parameter Chips */}
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-1">
                    {steps[activeStep].metrics.map((metric, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center sm:text-left">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                          {metric.label}
                        </span>
                        <span className="text-xs sm:text-sm font-extrabold text-slate-800 mt-0.5 block leading-tight break-words">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stepper navigation buttons */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                      className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                    >
                      ← Sebelumnya
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-primary hover:bg-primary-600 transition-colors shadow-xs cursor-pointer"
                    >
                      <span>Langkah Berikutnya</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
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
