import React from 'react';
import { motion } from 'framer-motion';
import { 
  Recycle, 
  Store, 
  Coins, 
  Sparkles, 
  ArrowRight, 
  Leaf, 
  Utensils, 
  Bug, 
  ShieldCheck,
  RefreshCcw
} from 'lucide-react';

export default function CircularEconomy() {
  const loopStages = [
    {
      id: 1,
      name: "Penyedia Makanan",
      role: "Menu Sehat",
      desc: "Makanan bergizi disiapkan secara bersih dan higienis.",
      icon: Utensils,
      color: "bg-primary/10 text-primary",
    },
    {
      id: 2,
      name: "Petugas Sekolah",
      role: "Pemeriksaan",
      desc: "Memastikan makanan tetap hangat dan layak konsumsi.",
      icon: ShieldCheck,
      color: "bg-container text-slate-800",
    },
    {
      id: 3,
      name: "Siswa Sekolah",
      role: "Makan Lahap",
      desc: "Menikmati dan menghabiskan makanan tanpa ada sisa.",
      icon: Sparkles,
      color: "bg-tangerine/15 text-tangerine",
    },
    {
      id: 4,
      name: "Pengolahan Sisa",
      role: "Daur Ulang",
      desc: "Sisa tak termakan diolah jadi pupuk dan pakan alami.",
      icon: Bug,
      color: "bg-primary/20 text-primary-800",
    },
    {
      id: 5,
      name: "Apresiasi Sekolah",
      role: "Hadiah Siswa",
      desc: "Hasil daur ulang mendukung hadiah bagi siswa rajin.",
      icon: Store,
      color: "bg-amber-100 text-amber-800",
    },
  ];

  return (
    <section id="sirkular" className="py-10 lg:py-20  md:py-24 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header - Concise */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-container border border-primary/20 text-xs font-bold text-primary-800 uppercase tracking-wider">
            <span>Daur Ulang Ramah Lingkungan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Siklus Kebaikan: Dari Makanan Sehat Hingga Hadiah Siswa
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Sisa makanan yang dipilah diolah kembali menjadi produk bermanfaat, 
            dan manfaatnya kembali mendukung kegiatan serta hadiah apresiasi bagi siswa.
          </p>
        </div>

        {/* 5-Stage Infographic */}
        <div className="rounded-3xl p-6 sm:p-8 backdrop-blur-md bg-white/90 border border-white/70 shadow-glass space-y-6">
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {loopStages.map((stage, idx) => {
              const Icon = stage.icon;
              const isLast = idx === loopStages.length - 1;
              return (
                <div 
                  key={stage.id}
                  className={`flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-xs transition-all ${
                    isLast ? 'col-span-2 w-[calc(50%-0.375rem)] mx-auto md:col-span-1 md:w-full md:mx-0' : ''
                  }`}
                >
                  <span className="text-[10px] font-black uppercase text-slate-400 mb-2">
                    0{stage.id}
                  </span>

                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs mb-2 ${stage.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h4 className="font-extrabold text-slate-800 text-xs sm:text-sm">
                    {stage.name}
                  </h4>
                  <span className="text-[10px] font-bold text-primary mb-1">
                    {stage.role}
                  </span>
                  <p className="text-[11px] text-slate-500 leading-tight">
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Loop Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-primary/15 via-sage/30 to-tangerine/15 border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                <RefreshCcw className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-800">
                Koperasi mandiri menyediakan voucer tanpa membebani kas sekolah, didanai penuh dari konversi residu organik.
              </p>
            </div>
            <span className="text-xs font-black px-3 py-1.5 rounded-xl bg-tangerine text-white shrink-0 shadow-xs">
              100% Sirkular Mandiri
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
