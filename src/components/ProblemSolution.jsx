import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldAlert, 
  Trash2, 
  RefreshCw, 
  Check, 
  X,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingDown,
  ChevronDown
} from 'lucide-react';

export default function ProblemSolution() {
  const [activeTab, setActiveTab] = useState('with');
  const [expandedDropdown, setExpandedDropdown] = useState(0);

  const toggleDropdown = (index) => {
    setExpandedDropdown((prev) => (prev === index ? null : index));
  };

  const challenges = [
    {
      id: 1,
      tag: "SAAT TIBA",
      title: "Pemeriksaan Makanan Baru Tiba",
      problem: "Risiko makanan dingin, basi, atau kemasan rusak jika tidak diperiksa terlebih dahulu.",
      solution: "Pemeriksaan Cepat & Mudah: Memastikan makanan tetap hangat, kemasan rapi, dan aman disantap.",
      img: "/images/mbg_qc_arrival.jpg",
      status: "Makanan Aman & Higienis",
    },
    {
      id: 2,
      tag: "SAAT MAKAN",
      title: "Mencegah Makanan Bersisa",
      problem: "Sayur dan lauk sering tersisa di piring dan terbuang ke tempat sampah sekolah.",
      solution: "Gerakan Piring Bersih: Mengajak siswa bangga menghabiskan makanan lewat apresiasi yang menyenangkan.",
      img: "/images/mbg_clean_plate.jpg",
      status: "Piring Bersih Tanpa Sisa",
    },
    {
      id: 3,
      tag: "SETELAH MAKAN",
      title: "Pemanfaatan Sisa Makanan",
      problem: "Sisa makanan yang menumpuk di tempat sampah menimbulkan bau tidak sedap dan mengotori lingkungan.",
      solution: "Daur Ulang Ramah Lingkungan: Sisa makanan dipilah dan diolah menjadi pupuk kompos serta pakan alami.",
      img: "/images/mbg_maggot_waste.jpg",
      status: "Bermanfaat & Bebas Bau",
    },
  ];

  const comparisonRows = [
    {
      feature: "Pemeriksaan Makanan Tiba",
      withoutApp: "Hanya dilihat sekilas; risiko makanan dingin atau basi tidak diketahui sejak awal.",
      withApp: "Pencatatan praktis; kondisi hangat dan kebersihan kemasan langsung tercatat rapi.",
    },
    {
      feature: "Porsi Makanan Berlebih",
      withoutApp: "Dibiarkan menumpuk hingga basi atau terbuang sia-sia.",
      withApp: "Langsung disalurkan kepada yang membutuhkan sebelum dingin.",
    },
    {
      feature: "Kebiasaan Makan Siswa",
      withoutApp: "Siswa sering memilih-milih dan menyisakan makanan di piring kelas.",
      withApp: "Siswa lebih semangat menghabiskan makanannya berkat apresiasi positif.",
    },
    {
      feature: "Penanganan Sisa Makanan",
      withoutApp: "Dibuang campur aduk ke tempat sampah hingga menumpuk dan berbau.",
      withApp: "Dipilah dan diolah menjadi pupuk kompos yang menyuburkan kebun sekolah.",
    },
  ];

  return (
    <section id="solusi" className="py-20 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header - Concise */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-container border border-primary/20 text-xs font-bold text-primary-800 uppercase tracking-wider">
            <span>Tantangan & Solusi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Mengubah Kebiasaan Makan Jadi Sehat & Bertanggung Jawab
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            PeduliMBG membantu sekolah memastikan makanan bergizi disantap dengan lahap tanpa menyisakan sampah.
          </p>
        </div>

        {/* 3 Visual Cards with Real Photo Documentation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {challenges.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-glass hover:shadow-glass-hover transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/70 backdrop-blur-md text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full">
                    Pilar 0{item.id} • {item.tag}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                    {item.status}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-extrabold text-slate-800">
                    {item.title}
                  </h3>

                  {/* Problem vs Solution - Crisp */}
                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2 text-rose-700 bg-rose-50/70 p-2.5 rounded-xl border border-rose-200/50">
                      <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span><strong>Kendala:</strong> {item.problem}</span>
                    </div>

                    <div className="flex items-start gap-2 text-slate-800 bg-emerald-50/70 p-2.5 rounded-xl border border-emerald-200/50">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Solusi:</strong> {item.solution}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <a
                  href="#alur"
                  className="w-full py-2 rounded-xl text-center text-xs font-bold text-primary bg-primary-50 hover:bg-primary-100 transition-colors flex items-center justify-center gap-1"
                >
                  <span>Lihat Alur Kerja</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Toggle Section - Concise */}
        <div className="mt-14 rounded-3xl p-6 sm:p-8 backdrop-blur-md bg-white/80 border border-white/70 shadow-glass">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Perbandingan Cepat</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800">
                Mengapa Sekolah Membutuhkan PeduliMBG?
              </h3>
            </div>

            <div className="hidden md:inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
              <button
                onClick={() => setActiveTab('with')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'with'
                    ? 'bg-primary text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Dengan PeduliMBG
              </button>
              <button
                onClick={() => setActiveTab('without')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'without'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tanpa PeduliMBG
              </button>
            </div>
          </div>

          {/* Mobile View: Dropdown Accordion (< md) */}
          <div className="md:hidden space-y-2.5">
            {comparisonRows.map((row, i) => {
              const isOpen = expandedDropdown === i;
              return (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200/80 overflow-hidden bg-white/95 shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleDropdown(i)}
                    className={`w-full flex items-center justify-between p-3.5 text-left transition-colors ${
                      isOpen ? 'bg-slate-50/90' : 'bg-white hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-primary text-white' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {i + 1}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-800 font-bold">
                        {row.feature}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-primary' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="p-3.5 pt-1 space-y-2.5 border-t border-slate-100">
                          {/* Konvensional */}
                          <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-100">
                            <div className="flex items-center gap-1.5 mb-1 text-rose-700">
                              <X className="w-3.5 h-3.5" />
                              <span className="text-[11px] font-bold uppercase tracking-wide">
                                Konvensional
                              </span>
                            </div>
                            <p className="text-xs text-slate-600 pl-5 leading-relaxed">
                              {row.withoutApp}
                            </p>
                          </div>

                          {/* Dengan PeduliMBG */}
                          <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                            <div className="flex items-center gap-1.5 mb-1 text-emerald-800">
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span className="text-[11px] font-bold uppercase tracking-wide">
                                Dengan PeduliMBG
                              </span>
                            </div>
                            <p className="text-xs text-slate-800 pl-5 leading-relaxed font-medium">
                              {row.withApp}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Desktop & Tablet View: Table (>= md) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 uppercase text-[11px] font-bold">
                  <th className="py-2.5 px-3">Aspek</th>
                  <th className="py-2.5 px-3 text-rose-700 bg-rose-50/50 rounded-t-lg">Konvensional</th>
                  <th className="py-2.5 px-3 text-primary-700 bg-primary-50/50 rounded-t-lg">Dengan PeduliMBG</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/60">
                    <td className="py-3 px-3 font-bold text-slate-800">{row.feature}</td>
                    <td className={`py-3 px-3 text-slate-600 text-xs sm:text-sm ${activeTab === 'without' ? 'bg-rose-50/40 font-medium' : ''}`}>
                      <div className="flex items-start gap-1.5">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.withoutApp}</span>
                      </div>
                    </td>
                    <td className={`py-3 px-3 text-slate-800 text-xs sm:text-sm ${activeTab === 'with' ? 'bg-primary-50/40 font-semibold' : ''}`}>
                      <div className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{row.withApp}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
