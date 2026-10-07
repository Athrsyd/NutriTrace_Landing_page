import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AppWindow, 
  Target, 
  Users, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Flame, 
  Award, 
  Camera, 
  Thermometer, 
  Clock, 
  Recycle, 
  BarChart3, 
  ArrowRight
} from 'lucide-react';

export default function AppOverview() {
  const [activeRole, setActiveRole] = useState('siswa');

  const appPurposes = [
    {
      id: 1,
      title: "Zero Makanan Basi & Keracunan",
      desc: "Menjamin mutu dan higienitas makanan MBG sebelum disantap siswa lewat sensor suhu digital & inspeksi organoleptik ketat.",
      badge: "Keamanan Pangan",
      textColor: "text-amber-700",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200/70",
      icon: ShieldCheck
    },
    {
      id: 2,
      title: "Zero Sisa Piring (Food Waste)",
      desc: "Membangun kesadaran piring bersih melalui gamifikasi interaktif, streak harian, dan reward apresiasi di sekolah.",
      badge: "Perubahan Perilaku",
      textColor: "text-primary-800",
      bgColor: "bg-primary-50",
      borderColor: "border-primary-200/70",
      icon: Flame
    },
    {
      id: 3,
      title: "Zero Residu ke TPA Kota",
      desc: "Mengalihkan 100% sisa organik yang tak terhindarkan menjadi pakan larva maggot BSF & kas nyata bagi sekolah.",
      badge: "Ekonomi Sirkular",
      textColor: "text-emerald-700",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200/70",
      icon: Recycle
    }
  ];

  const rolesData = [
    {
      id: 'siswa',
      label: 'Siswa (Peserta Didik)',
      badge: 'Konsumen & Duta Zero Waste',
      roleDesc: 'Peserta didik yang menikmati makan bergizi gratis dan berpartisipasi aktif dalam pembiasaan piring bersih tanpa sisa.',
      icon: Users,
      color: 'bg-primary text-white',
      accentColor: 'text-primary',
      features: [
        {
          title: 'Clean Plate Check-in',
          desc: 'Scan foto piring kosong seusai makan siang sebagai bukti digital kebiasaan piring bersih.',
          icon: Camera,
          tag: 'Aksi Harian'
        },
        {
          title: 'Daily Streak & Poin MBG',
          desc: 'Dapatkan poin per hari dan bangun rekor streak konsumsi habis untuk membentuk kebiasaan disiplin.',
          icon: Flame,
          tag: 'Gamifikasi'
        },
        {
          title: 'Leaderboard Antarkelas',
          desc: 'Pantau peringkat persentase piring bersih kelas secara real-time untuk memicu kompetisi positif.',
          icon: Sparkles,
          tag: 'Peringkat'
        },
        {
          title: 'Katalog Reward Apresiasi',
          desc: 'Tukarkan poin yang terkumpul dengan reward bermanfaat seperti susu ekstra, alat tulis, atau voucer.',
          icon: Award,
          tag: 'Insentif'
        }
      ]
    },
    {
      id: 'pic',
      label: 'PIC Sekolah (Satgas MBG)',
      badge: 'Pengawas & Penanggung Jawab',
      roleDesc: 'Guru, koordinator, dan tim satgas yang bertanggung jawab mengawasi kedatangan makanan, redistribusi surplus, dan pencatatan residu.',
      icon: ShieldCheck,
      color: 'bg-slate-800 text-white',
      accentColor: 'text-slate-800',
      features: [
        {
          title: 'QC Digital Kedatangan <2 Menit',
          desc: 'Input hasil uji suhu digital probe (>60°C), verifikasi segel kemasan, dan uji organoleptik acak saat boks tiba.',
          icon: Thermometer,
          tag: 'Pemeriksaan'
        },
        {
          title: 'Strict Surplus Hub (<1 Jam)',
          desc: 'Deteksi porsi makanan berlebih yang masih utuh dan kelola redistribusi cepat sebelum batas aman basi.',
          icon: Clock,
          tag: 'Penyelamatan Pangan'
        },
        {
          title: 'Pencatatan Residu Organik',
          desc: 'Timbang dan catat residu sisa piring yang dialihkan ke unit biopon larva maggot BSF di sekolah.',
          icon: Recycle,
          tag: 'Sirkularitas'
        },
        {
          title: 'Dashboard Monitoring & Laporan',
          desc: 'Pantau rekapitulasi mutu harian, evaluasi sisa makanan kelas, notifikasi anomali, dan cetak laporan resmi.',
          icon: BarChart3,
          tag: 'Akuntabilitas'
        }
      ]
    }
  ];

  const currentRoleData = rolesData.find((r) => r.id === activeRole) || rolesData[0];

  return (
    <section id="tentang" className="py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/60 border border-primary/20 text-xs font-bold text-primary-800 uppercase tracking-wider">
            <AppWindow className="w-3.5 h-3.5" />
            <span>Tentang Aplikasi & Ekosistem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Mengenal <span className="text-primary">NutriTrace</span>: Solusi Digital Pengawal MBG
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            NutriTrace adalah platform berbasis <strong>Android Native & Cloud</strong> yang 
            mengintegrasikan Quality Control mutu makanan, eliminasi food waste melalui 
            gamifikasi siswa, serta pencatatan residu pangan menjadi ekonomi sirkular sekolah.
          </p>
        </div>

        {/* ================= 1. TUJUAN UTAMA APLIKASI ================= */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-5">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Core Mission</span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800">
                Tiga Tujuan Pokok NutriTrace
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-slate-500">
              <Target className="w-4 h-4 text-primary" />
              <span>Target Terukur Program</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {appPurposes.map((purpose, index) => {
              const IconComp = purpose.icon;
              return (
                <motion.div
                  key={purpose.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.1 }}
                  className={`rounded-2xl p-6 backdrop-blur-md bg-white/90 border ${purpose.borderColor} shadow-glass hover:shadow-glass-hover transition-all duration-200 flex flex-col justify-between`}
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className={`w-11 h-11 rounded-xl ${purpose.bgColor} border ${purpose.borderColor} flex items-center justify-center`}>
                        <IconComp className={`w-5 h-5 ${purpose.textColor}`} />
                      </div>
                      <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full ${purpose.bgColor} ${purpose.textColor} border ${purpose.borderColor}`}>
                        {purpose.badge}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-extrabold text-slate-800 mb-1.5">
                        {purpose.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {purpose.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
                    <span className="flex items-center gap-1.5 text-[11px]">
                      <CheckCircle2 className={`w-3.5 h-3.5 ${purpose.textColor}`} />
                      Pilar 0{purpose.id}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">Berdampak Nyata</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= 2. DUA PERAN UTAMA & FITUR ================= */}
        <div className="rounded-3xl p-6 sm:p-8 backdrop-blur-md bg-white/95 border border-white/80 shadow-glass">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5 mb-6 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-1">
                <Users className="w-3.5 h-3.5" />
                <span>2 Peran Pengguna Utama</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800">
                Antarmuka Terintegrasi: Siswa & PIC Sekolah
              </h3>
              <p className="text-xs text-slate-500 mt-0.5 max-w-xl">
                Aplikasi NutriTrace memiliki 2 alur pengguna utama yang disesuaikan dengan tanggung jawab masing-masing.
              </p>
            </div>

            {/* Role Switcher: 2 Roles Only */}
            <div className="inline-flex p-1 rounded-2xl bg-slate-100 border border-slate-200 self-start md:self-auto">
              {rolesData.map((role) => {
                const IconComponent = role.icon;
                const isSelected = activeRole === role.id;
                return (
                  <button
                    key={role.id}
                    onClick={() => setActiveRole(role.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                      isSelected
                        ? `${role.color} shadow-xs`
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{role.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Role Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentRoleData.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-5"
            >
              {/* Role Header Banner */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl ${currentRoleData.color} flex items-center justify-center shrink-0 shadow-xs`}>
                    <currentRoleData.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-extrabold text-slate-800 text-sm sm:text-base">
                        {currentRoleData.label}
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-200/80 text-slate-700">
                        {currentRoleData.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {currentRoleData.roleDesc}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-bold text-slate-500 sm:text-right shrink-0">
                  <span className="text-primary font-black">4 Fitur Khusus</span> untuk peran ini
                </div>
              </div>

              {/* 4 Features Grid for this Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentRoleData.features.map((feature, idx) => {
                  const FeatureIcon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2, delay: idx * 0.05 }}
                      className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-primary/50 hover:shadow-xs transition-all duration-200 flex flex-col justify-between group"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                            <FeatureIcon className="w-4 h-4 text-slate-700 group-hover:text-primary transition-colors" />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-100">
                            {feature.tag}
                          </span>
                        </div>

                        <div>
                          <h5 className="font-bold text-slate-800 text-xs sm:text-sm mb-1 group-hover:text-primary transition-colors">
                            {feature.title}
                          </h5>
                          <p className="text-xs text-slate-500 leading-relaxed">
                            {feature.desc}
                          </p>
                        </div>
                      </div>

                      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Fitur Aktif</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
