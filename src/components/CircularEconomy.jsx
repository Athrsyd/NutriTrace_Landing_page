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
      name: "Katering MBG",
      role: "Suplai Bergizi",
      desc: "Bento steril dengan label alergen lengkap.",
      icon: Utensils,
      color: "bg-primary/10 text-primary",
    },
    {
      id: 2,
      name: "QC Satgas",
      role: "Uji < 2 Menit",
      desc: "Verifikasi suhu (>60°C) & segel fisik.",
      icon: ShieldCheck,
      color: "bg-sage text-slate-800",
    },
    {
      id: 3,
      name: "Siswa MBG",
      role: "Piring Bersih",
      desc: "Foto piring habis, kumpulkan poin & streak.",
      icon: Sparkles,
      color: "bg-tangerine/15 text-tangerine",
    },
    {
      id: 4,
      name: "Maggot BSF",
      role: "Biokonversi",
      desc: "Residu diolah jadi pakan larva & pupuk.",
      icon: Bug,
      color: "bg-primary/20 text-primary-800",
    },
    {
      id: 5,
      name: "Koperasi",
      role: "Kas Reward",
      desc: "Hasil penjualan mendanai voucer siswa.",
      icon: Store,
      color: "bg-amber-100 text-amber-800",
    },
  ];

  return (
    <section id="sirkular" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Concise */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/60 border border-primary/20 text-xs font-bold text-primary-800 uppercase tracking-wider">
            <span>Ekonomi Sirkular Tertutup</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Siklus Closed-Loop: Residu Menjadi Hadiah Siswa
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Hasil pemilahan residu organik diserap mitra maggot BSF, dananya dialokasikan 
            kembali ke koperasi untuk mendanai voucer hadiah siswa.
          </p>
        </div>

        {/* 5-Stage Infographic */}
        <div className="rounded-3xl p-6 sm:p-8 backdrop-blur-md bg-white/90 border border-white/70 shadow-glass space-y-6">
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {loopStages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div 
                  key={stage.id}
                  className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-xs transition-all"
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
