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
      badgeText: "SDG 2 • Tanpa Kelaparan",
      title: "Pencegahan Kelaparan & Gizi Sehat",
      accent: "text-amber-600",
      activeBg: "bg-amber-500/10 border-amber-500/40",
      unTarget: "Target 2.1 & 2.2: Memastikan setiap anak mendapatkan makanan bergizi, sehat, dan cukup.",
      problem: "Makanan yang tidak diperiksa kondisinya berisiko basi atau dingin saat dinikmati siswa, sehingga manfaat gizinya berkurang dan rentan mengganggu kesehatan.",
      solutionSteps: [
        {
          name: "Pemeriksaan Makanan Hangat & Segar",
          desc: "Memastikan makanan dalam kondisi hangat, bersih, dan segar saat tiba sebelum dinikmati siswa."
        },
        {
          name: "Manfaat Gizi Optimal",
          desc: "Menjamin nutrisi makanan terserap optimal untuk kesehatan tubuh dan semangat belajar siswa."
        },
        {
          name: "Penyaluran Makanan Berlebih",
          desc: "Membagikan makanan porsi berlebih yang masih bersih dan utuh kepada yang membutuhkan agar tidak mubazir."
        }
      ],
      impactMetrics: [
        { value: "100%", label: "Makanan Aman", note: "Selalu Diperiksa Saat Tiba" },
        { value: "Aman", label: "Higienis", note: "Layak & Siap Santap" },
        { value: "Cepat", label: "Porsi Disalurkan", note: "Tepat Sasaran" }
      ]
    },
    {
      id: 12,
      logo: sdg12Logo,
      badgeText: "SDG 12 • Konsumsi Bertanggung Jawab",
      title: "Konsumsi Bijak & Menghargai Makanan",
      accent: "text-orange-600",
      activeBg: "bg-orange-500/10 border-orange-500/40",
      unTarget: "Target 12.3: Mengurangi kebiasaan membuang makanan dan membiasakan pola makan hemat.",
      problem: "Sayur dan lauk sering bersisa di piring siswa dan terbuang percuma ke tempat sampah jika anak-anak belum terbiasa menghabiskan makanannya.",
      solutionSteps: [
        {
          name: "Gerakan Piring Bersih",
          desc: "Membiasakan siswa menghabiskan porsi makannya lewat foto piring bersih dan apresiasi yang menyenangkan."
        },
        {
          name: "Masukan Menu ke Katering",
          desc: "Catatan menu yang kurang disukai disampaikan ke pihak katering agar bumbu dan variasinya makin digemari siswa."
        },
        {
          name: "Bantuan Tepat Guna",
          desc: "Memastikan seluruh bantuan makanan sekolah benar-benar dimakan habis dan bermanfaat bagi siswa."
        }
      ],
      impactMetrics: [
        { value: "85%", label: "Sisa Berkurang", note: "Piring Siswa Lebih Bersih" },
        { value: "Tinggi", label: "Semangat Siswa", note: "Bangga Habiskan Makanan" },
        { value: "Rutin", label: "Evaluasi Menu", note: "Rasa Makin Disukai" }
      ]
    },
    {
      id: 13,
      logo: sdg13Logo,
      badgeText: "SDG 13 • Peduli Lingkungan & Iklim",
      title: "Menjaga Kebersihan & Kelestarian Bumi",
      accent: "text-emerald-700",
      activeBg: "bg-emerald-500/10 border-emerald-500/40",
      unTarget: "Target 13.3: Mengajarkan kepedulian lingkungan dan kebiasaan memilah sampah sejak dini.",
      problem: "Sampah sisa makanan yang menumpuk di tempat pembuangan bisa membusuk, menimbulkan bau menyengat, dan mencemari udara sekitar.",
      solutionSteps: [
        {
          name: "Daur Ulang Ramah Lingkungan",
          desc: "Sisa makanan dipilah sebelum membusuk untuk diolah kembali menjadi pupuk kompos dan pakan alami."
        },
        {
          name: "Pupuk Kompos Alami",
          desc: "Hasil olahan sisa makanan digunakan untuk menyuburkan tanaman dan kebun hijau di lingkungan sekolah."
        },
        {
          name: "Sekolah Bersih & Segar",
          desc: "Mengurangi sampah yang dibuang ke luar sekolah sehingga lingkungan sekolah tetap bersih, sejuk, dan asri."
        }
      ],
      impactMetrics: [
        { value: "0 kg", label: "Sampah Olahan", note: "Langsung Diolah Bermanfaat" },
        { value: "Nyata", label: "Udara Bersih", note: "Pengurangan Bau Busuk" },
        { value: "Subur", label: "Kebun Hijau", note: "Dipupuk dari Kompos Mandiri" }
      ]
    }
  ];

  const activeSdg = sdgData.find((s) => s.id === selectedSdg) || sdgData[0];

  return (
    <section id="sdgs" className="py-16 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-container border border-primary/20 text-xs font-bold text-primary-800 uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5" />
            <span>Dampak Positif Lingkungan & Sosial</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Bagaimana PeduliMBG Membantu Lingkungan & Masa Depan?
          </h2>

          <p className="text-sm sm:text-base text-slate-600">
            Membiasakan hidup sehat, menghargai makanan, dan menjaga kebersihan lingkungan sekolah.
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
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      {item.badgeText}
                    </span>
                    <h4 className="font-extrabold text-slate-800 text-sm mt-0.5 leading-snug">
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
                    <div key={i} className="text-center px-1 sm:px-2 flex flex-col justify-center">
                      <div className="text-sm sm:text-base font-black text-slate-800 leading-tight">
                        {metric.value}
                      </div>
                      <div className="text-[10px] sm:text-xs font-bold text-slate-500 leading-tight mt-0.5 break-words">
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

                {/* Right: Solusi PeduliMBG */}
                <div className="md:col-span-7 p-5 rounded-2xl bg-emerald-50/40 border border-emerald-200/50 space-y-3">
                  <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>Langkah Solusi PeduliMBG</span>
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
