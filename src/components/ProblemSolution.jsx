import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  Trash2, 
  RefreshCw, 
  Check, 
  X,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingDown
} from 'lucide-react';

export default function ProblemSolution() {
  const [activeTab, setActiveTab] = useState('with');

  const challenges = [
    {
      id: 1,
      tag: "HULU",
      title: "Verifikasi Mutu Katering",
      problem: "Risiko makanan basi, porsi kurang, atau kemasan cacat tanpa bukti digital.",
      solution: "QC Digital <2 Menit: Cek suhu probe (>60°C), segel boks, & catatan alergen.",
      img: "/images/mbg_qc_arrival.jpg",
      status: "Uji Cepat Terstandar",
    },
    {
      id: 2,
      tag: "KONSUMSI",
      title: "Pencegahan Food Waste",
      problem: "Banyak makanan MBG bersisa di tempat sampah jika tidak dihabiskan siswa.",
      solution: "Clean Plate Check-in: Gamifikasi foto piring habis berhadiah poin koperasi.",
      img: "/images/mbg_clean_plate.jpg",
      status: "Zero Sisa Piring",
    },
    {
      id: 3,
      tag: "HILIR",
      title: "Sirkularitas Residu Pangan",
      problem: "Sisa sampah organik membusuk di TPA dan menghasilkan gas rumah kaca metana.",
      solution: "Daur Ulang Sirkular: 100% sisa organik dialihkan jadi pakan maggot BSF & kompos.",
      img: "/images/mbg_maggot_waste.jpg",
      status: "Nilai Kas Koperasi",
    },
  ];

  const comparisonRows = [
    {
      feature: "QC Kedatangan Katering",
      withoutApp: "Cek manual tanpa rekaman suhu; risiko basi tidak terdeteksi dini.",
      withApp: "Formulir digital <2 menit, uji suhu digital probe, foto segel tersimpan.",
    },
    {
      feature: "Porsi Makanan Berlebih",
      withoutApp: "Dibiarkan menumpuk hingga basi atau dibuang sembarangan.",
      withApp: "Strict Surplus Hub: redistribusi tertib dalam jendela <1 jam.",
    },
    {
      feature: "Perilaku Konsumsi Siswa",
      withoutApp: "Pasif, sisa sayur/lauk menumpuk di tempat sampah kelas.",
      withApp: "Gamifikasi Clean Plate, daily streak 🔥, & leaderboard antarkelas.",
    },
    {
      feature: "Sampah Organik Sekolah",
      withoutApp: "Bercampur sampah plastik langsung dibuang ke TPA kota.",
      withApp: "Biokonversi 100% jadi pakan larva maggot BSF & kas koperasi.",
    },
  ];

  return (
    <section id="solusi" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Concise */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/60 border border-primary/20 text-xs font-bold text-primary-800 uppercase tracking-wider">
            <span>Urgensi & Solusi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Dari Hulu Katering Hingga Hilir Bebas Sampah
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            NutriTrace menggantikan prosedur manual dengan sistem kendali digital yang ringkas dan terukur.
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
                Mengapa Sekolah Membutuhkan NutriTrace?
              </h3>
            </div>

            <div className="inline-flex p-1 rounded-xl bg-slate-100 border border-slate-200">
              <button
                onClick={() => setActiveTab('with')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'with'
                    ? 'bg-primary text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Dengan NutriTrace
              </button>
              <button
                onClick={() => setActiveTab('without')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'without'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Tanpa NutriTrace
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 uppercase text-[11px] font-bold">
                  <th className="py-2.5 px-3">Aspek</th>
                  <th className="py-2.5 px-3 text-rose-700 bg-rose-50/50 rounded-t-lg">Konvensional</th>
                  <th className="py-2.5 px-3 text-primary-700 bg-primary-50/50 rounded-t-lg">Dengan NutriTrace</th>
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
