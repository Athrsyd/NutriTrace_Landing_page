import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  UserCheck, 
  ShieldCheck, 
  Camera, 
  Flame, 
  Award, 
  Trophy, 
  Gift, 
  CheckCircle2, 
  Clock, 
  Thermometer, 
  FileText, 
  Recycle, 
  Sparkles, 
  Check, 
  ShoppingBag, 
  FileDown,
  RotateCcw,
  Scan
} from 'lucide-react';

export default function RoleSwitcher({ onOpenReportModal, currentRole, onRoleChange }) {
  const [internalRole, setInternalRole] = useState('siswa');
  const activeRole = currentRole !== undefined ? currentRole : internalRole;
  const setActiveRole = onRoleChange !== undefined ? onRoleChange : setInternalRole;

  // Siswa Interactive States
  const [checkInStep, setCheckInStep] = useState('ready'); // 'ready', 'scanning', 'success'
  const [studentPoints, setStudentPoints] = useState(1450);
  const [studentStreak, setStudentStreak] = useState(14);
  const [redeemedReward, setRedeemedReward] = useState(null);

  // Satgas Interactive States
  const [surplusClaimed, setSurplusClaimed] = useState(false);

  // Trigger simulated plate check-in
  const handleSimulateCheckIn = () => {
    setCheckInStep('scanning');
    setTimeout(() => {
      setCheckInStep('success');
      setStudentPoints(prev => prev + 50);
      setStudentStreak(prev => prev + 1);

      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.65 },
          colors: ['#0D9488', '#F59E0B', '#14B8A6']
        });
      } catch (e) {
        console.log('Confetti triggered');
      }
    }, 1500);
  };

  const handleResetCheckIn = () => {
    setCheckInStep('ready');
  };

  const handleRedeemReward = (rewardName, cost) => {
    if (studentPoints >= cost) {
      setStudentPoints(prev => prev - cost);
      setRedeemedReward(rewardName);
      setTimeout(() => setRedeemedReward(null), 3000);
    }
  };

  const leaderboardData = [
    { rank: 1, class: 'XII RPL 1', cleanRate: '99.2%', points: '5,840', badge: '🥇 #1' },
    { rank: 2, class: 'XI TKJ 2', cleanRate: '97.6%', points: '5,420', badge: '🥈 #2' },
    { rank: 3, class: 'X TFL 1', cleanRate: '96.1%', points: '5,180', badge: '🥉 #3' },
    { rank: 4, class: 'XII DPIB 2', cleanRate: '94.8%', points: '4,910', badge: '#4' },
  ];

  const rewardCatalog = [
    { id: 1, name: 'Voucer Koperasi Rp10.000', cost: 200, icon: ShoppingBag },
    { id: 2, name: 'Susu Nutrisi Extra MBG', cost: 150, icon: Gift },
    { id: 3, name: 'Diskon Kantin Rp5.000', cost: 100, icon: Award },
    { id: 4, name: 'Tumbler Ramah Lingkungan', cost: 500, icon: Sparkles },
  ];

  return (
    <section id="peran" className="py-20 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header - Concise */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/60 border border-primary/20 text-xs font-bold text-primary-800 uppercase tracking-wider">
            <span>Mode Pengguna</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Antarmuka Siswa & PIC Sekolah
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Pilih mode untuk menguji coba fitur langsung di halaman ini.
          </p>

          {/* Interactive Role Switcher Tabs */}
          <div className="inline-flex p-1 rounded-2xl bg-white border border-slate-200 shadow-sm mt-4">
            <button
              onClick={() => setActiveRole('siswa')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeRole === 'siswa'
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>Mode Siswa (Gamifikasi)</span>
            </button>

            <button
              onClick={() => setActiveRole('satgas')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all ${
                activeRole === 'satgas'
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Mode Petugas Sekolah</span>
            </button>
          </div>
        </div>

        {/* Dynamic Role Content */}
        <div>
          <AnimatePresence mode="wait">
            
            {/* ===================== TAB 1: MODE SISWA ===================== */}
            {activeRole === 'siswa' && (
              <motion.div
                key="siswa"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                
                {/* Left: Clean Plate Check-In Simulation Card with Real Photo Viewport */}
                <div className="lg:col-span-6 rounded-3xl p-5 sm:p-7 backdrop-blur-md bg-white/90 border border-white/70 shadow-glass space-y-4">
                  
                  {/* Student Profile Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-primary text-white font-extrabold text-sm flex items-center justify-center shadow-xs">
                        RA
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-extrabold text-slate-800 text-sm">Raditya Pratama</h4>
                          <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-sage text-slate-800">
                            XII RPL 1
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400">SMKN 26 Jakarta</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Poin</span>
                      <span className="text-base font-extrabold text-tangerine flex items-center gap-1 justify-end">
                        <Sparkles className="w-3.5 h-3.5" /> {studentPoints.toLocaleString()} Pts
                      </span>
                    </div>
                  </div>

                  {/* Clean Plate Check-in Simulator with Photo HUD */}
                  <div className="rounded-2xl border border-primary/20 bg-gradient-to-b from-white to-container/30 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span>Clean Plate AI Scanner</span>
                      </div>
                      <span className="text-[10px] font-bold text-primary bg-white px-2 py-0.5 rounded-full border border-primary/20">
                        Menu: Ayam Teriyaki
                      </span>
                    </div>

                    {/* Camera / Plate Viewport with Real Photo Integration */}
                    <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 min-h-[220px] flex items-center justify-center">
                      
                      {checkInStep === 'ready' && (
                        <div className="relative w-full h-56 group cursor-pointer" onClick={handleSimulateCheckIn}>
                          <img
                            src="/images/mbg_clean_plate.jpg"
                            alt="Clean Plate Siswa"
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                          />
                          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px] flex flex-col items-center justify-center p-4 text-center text-white space-y-2">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Camera className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs font-bold">Ketuk untuk Ambil Foto Piring Bersih</p>
                            <span className="text-[10px] bg-primary text-white font-bold px-3 py-1 rounded-full shadow-sm">
                              Simulasikan Check-in
                            </span>
                          </div>
                        </div>
                      )}

                      {checkInStep === 'scanning' && (
                        <div className="relative w-full h-56">
                          <img
                            src="/images/mbg_clean_plate.jpg"
                            alt="Scanning Plate"
                            className="w-full h-full object-cover opacity-75"
                          />
                          {/* AI Scanning Grid Overlay */}
                          <div className="absolute inset-0 bg-primary/20 flex flex-col items-center justify-center p-4 text-white text-center space-y-2">
                            <div className="relative w-12 h-12">
                              <div className="absolute inset-0 rounded-full border-2 border-white border-t-transparent animate-spin" />
                              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                                <Scan className="w-6 h-6 text-white animate-pulse" />
                              </div>
                            </div>
                            <p className="text-xs font-extrabold bg-slate-900/70 px-3 py-1 rounded-full">
                              Memindai Kebersihan Piring...
                            </p>
                            <div className="w-36 bg-white/30 rounded-full h-1 overflow-hidden">
                              <div className="bg-primary h-1 rounded-full animate-pulse w-3/4" />
                            </div>
                          </div>
                        </div>
                      )}

                      {checkInStep === 'success' && (
                        <div className="relative w-full h-56">
                          <img
                            src="/images/mbg_clean_plate.jpg"
                            alt="Verified Plate"
                            className="w-full h-full object-cover"
                          />
                          {/* Verified Badge HUD */}
                          <div className="absolute inset-0 bg-slate-900/60 flex flex-col items-center justify-center p-4 text-center text-white space-y-1.5 animate-fadeIn">
                            <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg">
                              <Check className="w-7 h-7 stroke-[3]" />
                            </div>
                            <span className="text-[11px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/50">
                              100% Piring Bersih Lolos AI
                            </span>
                            <h5 className="text-sm font-extrabold text-white">+50 Poin Ditambahkan!</h5>
                            <button
                              onClick={handleResetCheckIn}
                              className="inline-flex items-center gap-1 text-[11px] text-slate-200 hover:text-white underline pt-1 font-semibold"
                            >
                              <RotateCcw className="w-3 h-3" />
                              <span>Coba Lagi</span>
                            </button>
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Quick Stats: Streak & Badges */}
                    <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-tangerine text-white flex items-center justify-center shrink-0">
                          <Flame className="w-4 h-4 fill-white" />
                        </div>
                        <div>
                          <p className="font-extrabold text-slate-800">{studentStreak} Hari</p>
                          <p className="text-[10px] text-slate-500">Streak Harian 🔥</p>
                        </div>
                      </div>

                      <div className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary-100 text-primary-800 flex items-center justify-center shrink-0">
                          <Award className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="font-extrabold text-slate-800">Tier 3</p>
                          <p className="text-[10px] text-slate-500">Zero Waste Hero</p>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                {/* Right: Leaderboard & Reward Catalog */}
                <div className="lg:col-span-6 space-y-4">
                  
                  {/* Leaderboard - Clean */}
                  <div className="rounded-3xl p-5 backdrop-blur-md bg-white/90 border border-white/70 shadow-glass">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-primary" />
                        <h4 className="font-extrabold text-slate-800 text-sm">Papan Peringkat Antarkelas</h4>
                      </div>
                      <span className="text-[10px] font-bold text-primary bg-primary-50 px-2 py-0.5 rounded-full">
                        Maret 2026
                      </span>
                    </div>

                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase text-[10px]">
                          <th className="pb-1.5">Rank</th>
                          <th className="pb-1.5">Kelas</th>
                          <th className="pb-1.5 text-center">Clean Rate</th>
                          <th className="pb-1.5 text-right">Poin</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {leaderboardData.map((row) => (
                          <tr key={row.class} className="hover:bg-slate-50">
                            <td className="py-2 font-bold text-slate-700">{row.badge}</td>
                            <td className="py-2 font-bold text-slate-800">{row.class}</td>
                            <td className="py-2 text-center">
                              <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold text-[10px]">
                                {row.cleanRate}
                              </span>
                            </td>
                            <td className="py-2 text-right font-extrabold text-primary">{row.points}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Reward Catalog with Photo Header */}
                  <div className="rounded-3xl p-5 backdrop-blur-md bg-white/90 border border-white/70 shadow-glass space-y-3">
                    
                    {/* Visual header */}
                    <div className="relative rounded-2xl overflow-hidden h-20 border border-slate-200">
                      <img
                        src="/images/mbg_koperasi_reward.jpg"
                        alt="Koperasi Sekolah"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-transparent flex items-center px-4">
                        <div className="text-white">
                          <h4 className="font-extrabold text-xs sm:text-sm">Katalog Reward Koperasi & Kantin</h4>
                          <p className="text-[10px] text-slate-300">Tukarkan poin piring bersih dengan produk riil</p>
                        </div>
                      </div>
                    </div>

                    {redeemedReward && (
                      <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Kupon <strong>{redeemedReward}</strong> berhasil diklaim!</span>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {rewardCatalog.map((reward) => {
                        const canAfford = studentPoints >= reward.cost;
                        return (
                          <div
                            key={reward.id}
                            className="p-2.5 rounded-xl border border-slate-200 bg-white flex flex-col justify-between"
                          >
                            <h5 className="font-bold text-slate-800 text-[11px] leading-tight">{reward.name}</h5>
                            <div className="flex items-center justify-between pt-1.5 mt-1 border-t border-slate-100">
                              <span className="text-[11px] font-extrabold text-tangerine">
                                {reward.cost} Pts
                              </span>
                              <button
                                onClick={() => handleRedeemReward(reward.name, reward.cost)}
                                disabled={!canAfford}
                                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  canAfford ? 'bg-primary text-white hover:bg-primary-600' : 'bg-slate-100 text-slate-400'
                                }`}
                              >
                                {canAfford ? 'Tukar' : 'Kurang'}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                  </div>

                </div>

              </motion.div>
            )}

            {/* ===================== TAB 2: MODE SATGAS MBG ===================== */}
            {activeRole === 'satgas' && (
              <motion.div
                key="satgas"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
              >
                
                {/* Left: Daily Arrival Log with Live Photo Evidence */}
                <div className="lg:col-span-6 rounded-3xl p-5 sm:p-7 backdrop-blur-md bg-white/90 border border-white/70 shadow-glass space-y-4">
                  
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      <div>
                        <h4 className="font-extrabold text-slate-800 text-sm">Catatan Pemeriksaan Makanan</h4>
                        <p className="text-[11px] text-slate-500">Pemeriksaan kondisi makanan saat tiba oleh petugas</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      VERIFIED
                    </span>
                  </div>

                  {/* Photo Evidence Attached */}
                  <div className="rounded-2xl overflow-hidden border border-slate-200 relative">
                    <img
                      src="/images/mbg_qc_arrival.jpg"
                      alt="QC Evidence"
                      className="w-full h-36 object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-slate-900/80 text-white text-[10px] px-2.5 py-0.5 rounded-md font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Bukti Foto Kamera Satgas: 09:42 WIB</span>
                    </div>
                  </div>

                  {/* Compact Parameters Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-400 font-bold block">Suhu Awal</span>
                      <span className="font-extrabold text-emerald-700 flex items-center gap-1">
                        <Thermometer className="w-3.5 h-3.5" /> 68.5°C (Aman)
                      </span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-400 font-bold block">Total Box</span>
                      <span className="font-extrabold text-slate-800">600 Box Tersegel</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-amber-50 text-[11px] text-amber-900 border border-amber-200/60">
                    <strong>Catatan Alergen:</strong> Bebas kacang tanah, telur & kedelai terlabel steril.
                  </div>

                </div>

                {/* Right: Surplus Hub, Sorting, and PDF Button */}
                <div className="lg:col-span-6 space-y-4">
                  
                  {/* Strict Surplus Hub */}
                  <div className="rounded-3xl p-5 backdrop-blur-md bg-white/90 border border-white/70 shadow-glass space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-tangerine" />
                        <h4 className="font-extrabold text-slate-800 text-sm">Penyaluran Porsi Berlebih</h4>
                      </div>
                      <span className="text-[10px] font-extrabold text-tangerine bg-tangerine-50 px-2 py-0.5 rounded-full border border-tangerine/30">
                        Segera Disalurkan Hari Ini
                      </span>
                    </div>

                    <div className="p-3 rounded-2xl bg-gradient-to-r from-tangerine-50 to-white border border-tangerine/20 flex items-center justify-between gap-3 text-xs">
                      <div>
                        <p className="font-bold text-slate-800">
                          {surplusClaimed ? '0 Porsi Tersisa' : '12 Porsi Masih Bersih & Utuh'}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          {surplusClaimed ? 'Sudah dibagikan secara tertib kepada staf.' : 'Siap dibagikan agar tidak ada makanan mubazir.'}
                        </p>
                      </div>
                      <button
                        onClick={() => setSurplusClaimed(true)}
                        disabled={surplusClaimed}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 ${
                          surplusClaimed ? 'bg-emerald-600 text-white' : 'bg-tangerine text-white hover:bg-tangerine-600'
                        }`}
                      >
                        {surplusClaimed ? '✓ Selesai' : 'Salurkan'}
                      </button>
                    </div>
                  </div>

                  {/* Smart Sorting with Real Photo */}
                  <div className="rounded-3xl p-5 backdrop-blur-md bg-white/90 border border-white/70 shadow-glass space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Recycle className="w-4 h-4 text-primary" />
                        <h4 className="font-extrabold text-slate-800 text-sm">Pemilahan Sisa Makanan</h4>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-3 rounded-xl bg-slate-50 border border-primary/20">
                        <p className="font-bold text-primary">Pakan Ramah Lingkungan</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">Sisa nasi & lauk pauk protein</p>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                        <p className="font-bold text-slate-700">Pupuk Kompos Alami</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">Sisa sayur & kulit buah</p>
                      </div>
                    </div>
                  </div>

                  {/* Trigger PDF Report */}
                  <button
                    onClick={onOpenReportModal}
                    className="w-full py-3 px-4 rounded-2xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
                  >
                    <FileDown className="w-4 h-4 text-tangerine" />
                    <span>Lihat Ringkasan Laporan (PDF)</span>
                  </button>

                </div>

              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
