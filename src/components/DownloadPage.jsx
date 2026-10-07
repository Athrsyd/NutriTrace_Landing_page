import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Smartphone, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowLeft, 
  QrCode, 
  Sparkles, 
  Cpu, 
  HardDrive, 
  Wifi, 
  WifiOff, 
  Check, 
  ChevronDown, 
  Info, 
  UserCheck, 
  Layers, 
  Clock, 
  AlertCircle,
  FileCheck2,
  Copy
} from 'lucide-react';

export default function DownloadPage({ onBackToHome }) {
  const [copiedChecksum, setCopiedChecksum] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const checksum = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

  const handleCopyChecksum = () => {
    navigator.clipboard.writeText(checksum);
    setCopiedChecksum(true);
    setTimeout(() => setCopiedChecksum(false), 2500);
  };

  const handleTriggerDownload = () => {
    setDownloading(true);
    // Simulate real APK download response
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);

      // Create a downloadable mock text/info file so user browser triggers a download
      const element = document.createElement("a");
      const file = new Blob([
        `NutriTrace Android Native App v1.2.0\n` +
        `Build Date: Oktober 2026\n` +
        `Package: com.nutritrace.mbg\n` +
        `Target SDK: Android 14 (API 34)\n` +
        `Min SDK: Android 8.0 (API 26)\n` +
        `Checksum SHA256: ${checksum}\n\n` +
        `Aplikasi siap dipasang untuk peran Siswa dan PIC Sekolah.\n` +
        `Pengembang: Tim eSDoGer's - SMKN 26 Jakarta`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = "NutriTrace-v1.2.0-InfoBuild.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);

      setTimeout(() => setDownloadSuccess(false), 5000);
    }, 1200);
  };

  const faqs = [
    {
      q: "Apakah NutriTrace membutuhkan koneksi internet secara terus-menerus?",
      a: "Tidak. NutriTrace dirancang dengan arsitektur Offline-First (Room Database). Fitur seperti input QC oleh PIC Sekolah atau foto piring siswa tetap dapat berjalan saat sinyal lemah dan otomatis tersinkronisasi ke Cloud begitu perangkat terhubung ke internet."
    },
    {
      q: "Bagaimana cara beralih antara Mode Siswa dan Mode PIC Sekolah?",
      a: "Di dalam satu aplikasi NutriTrace, pengguna dapat memilih peran saat pertama kali dibuka. Siswa masuk dengan memilih kelas dan NISN, sedangkan PIC Sekolah masuk menggunakan PIN atau akun petugas resmi yang terdaftar di sekolah."
    },
    {
      q: "Apakah aplikasi ini aman dari virus atau malware?",
      a: "Sangat aman. Aplikasi dibangun langsung menggunakan Android Native (Kotlin) dengan arsitektur resmi Google MVVM, tanpa library pihak ketiga yang mencurigakan. Anda juga dapat memverifikasi keaslian file dengan SHA256 Checksum yang kami sediakan."
    },
    {
      q: "Berapa versi minimum OS Android yang didukung?",
      a: "NutriTrace mendukung Android versi 8.0 (Oreo / API Level 26) ke atas hingga Android 15 terbaru. Aplikasi dapat berjalan lancar di smartphone dengan RAM mulai dari 2 GB."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFF0] text-slate-800 font-sans selection:bg-primary/20 selection:text-primary-800">
      
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-50 bg-[#FFFFF0]/90 backdrop-blur-md border-b border-sage/50 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 transition-colors shadow-2xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-primary" />
            <span>Kembali ke Beranda</span>
          </button>

          <a href="#" onClick={(e) => { e.preventDefault(); onBackToHome(); }} className="flex items-center gap-2.5">
            <img src="./logo.png" alt="NutriTrace Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-extrabold text-lg tracking-tight text-slate-800">
              Nutri<span className="text-primary">Trace</span>
            </span>
          </a>


        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16">
        
        {/* ================= HERO DOWNLOAD SECTION ================= */}
        <section className="relative">
          {/* Decorative ambient gradients */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-gradient-to-br from-primary/15 via-tangerine/10 to-transparent blur-3xl pointer-events-none -z-10" />

          <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 border border-primary/20 shadow-xs text-xs font-bold text-primary-800 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Android Native Package • Rilis Stabil v1.2.0</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-800 tracking-tight leading-tight">
              Unduh Aplikasi <span className="text-primary">NutriTrace</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Satu aplikasi terpadu untuk <strong>Siswa</strong> dan <strong>PIC Sekolah</strong>. 
              Kawal mutu Makan Bergizi Gratis, hentikan sisa piring, dan wujudkan sekolah bebas sampah.
            </p>
          </div>

          {/* Main Download Card Box */}
          <div className="max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 backdrop-blur-md bg-white/90 border border-white/80 shadow-glass">
            <div className="flex flex-row justify-center items-center">
              
              {/* Left Column: APK Details & Main Action */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white p-3 flex items-center justify-center text-white shadow-lg shadow-primary/25 shrink-0">
                    <img src="./logo.png" alt="" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl sm:text-2xl font-black text-slate-800">
                        NutriTrace APK
                      </h2>
                      <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-extrabold uppercase">
                        Terverifikasi
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Versi 1.2.0 • 28.4 MB • Android 8.0 ke atas
                    </p>
                  </div>
                </div>

                {/* Badges / Specs Pill */}
                <div className="grid grid-cols-3 gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-200/70 text-center">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Ukuran File</span>
                    <span className="text-xs sm:text-sm font-black text-slate-800">28.4 MB</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Arsitektur</span>
                    <span className="text-xs sm:text-sm font-black text-slate-800">Kotlin MVVM</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase block">Dukungan</span>
                    <span className="text-xs sm:text-sm font-black text-slate-800">Offline-First</span>
                  </div>
                </div>

                {/* Download Button */}
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={handleTriggerDownload}
                    disabled={downloading}
                    className="w-full flex items-center justify-center gap-3 py-4 px-6 rounded-2xl text-base font-extrabold text-white bg-tangerine hover:bg-tangerine-600 shadow-lg shadow-tangerine/30 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-75 disabled:cursor-wait cursor-pointer"
                  >
                    {downloading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Menyiapkan Berkas APK...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-5 h-5 text-white" />
                        <span>Unduh APK Sekarang (v1.2.0)</span>
                      </>
                    )}
                  </button>

                  <AnimatePresence>
                    {downloadSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Unduhan dimulai! Periksa folder unduhan di perangkat Anda.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-primary" />
                      100% Bebas Malware & Ads
                    </span>
                    <span>Diperbarui 07 Oktober 2026</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= 2 ROLES INSIDE THE APP ================= */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
              Satu APK, Dua Peran Terintegrasi
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Pilih peran saat pertama kali membuka aplikasi setelah instalasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Role 1: Siswa */}
            <div className="rounded-3xl p-6 sm:p-7 backdrop-blur-md bg-white/90 border border-slate-200/80 shadow-glass space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shrink-0 shadow-sm">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-primary">
                    Peran 01
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-800">
                    Mode Siswa (Duta Piring Bersih)
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Dirancang ramah remaja dengan pengalaman gamifikasi yang memotivasi kebiasaan menghabiskan makanan tanpa sisa.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span><strong>Clean Plate Check-in:</strong> Validasi foto piring kosong seusai makan</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span><strong>Daily Streak:</strong> Kumpulkan +50 poin setiap hari tanpa putus</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span><strong>Leaderboard Antarkelas:</strong> Kompetisi kelas zero food waste</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span><strong>Katalog Reward:</strong> Tukarkan poin dengan hadiah ekstra sekolah</span>
                </div>
              </div>
            </div>

            {/* Role 2: PIC Sekolah */}
            <div className="rounded-3xl p-6 sm:p-7 backdrop-blur-md bg-white/90 border border-slate-200/80 shadow-glass space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                    Peran 02
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-800">
                    Mode PIC Sekolah (Satgas MBG)
                  </h3>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Instrumen kendali operasional hulu-ke-hilir untuk tim pengawas sekolah, guru, dan koordinator gizi.
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>QC Suhu Kedatangan:</strong> Uji digital probe (&gt;60°C) dalam &lt;2 menit</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Strict Surplus Hub:</strong> Redistribusi porsi berlebih dalam jendela &lt;1 jam</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Pencatatan Residu:</strong> Timbang sisa organik ke biopon maggot BSF</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span><strong>Ekspor Laporan Resmi:</strong> Cetak rekapitulasi mutu untuk SPJ Bappeda</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= 3 EASY INSTALLATION STEPS ================= */}
        <section className="rounded-3xl p-6 sm:p-9 backdrop-blur-md bg-white/85 border border-white/80 shadow-glass space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Panduan Pengguna</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
              Cara Instalasi dalam 3 Langkah Mudah
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <span className="w-9 h-9 rounded-xl bg-primary/20 text-primary-800 font-black text-sm flex items-center justify-center">
                1
              </span>
              <h3 className="font-extrabold text-slate-800 text-sm">
                Unduh Berkas APK
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Klik tombol "Unduh APK Sekarang" di atas atau scan QR Code langsung dari kamera smartphone Anda.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <span className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-800 font-black text-sm flex items-center justify-center">
                2
              </span>
              <h3 className="font-extrabold text-slate-800 text-sm">
                Izinkan Instalasi APK
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Buka file yang telah diunduh. Jika muncul peringatan keamanan, pilih "Izinkan dari sumber ini" untuk melanjutkan.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <span className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-800 font-black text-sm flex items-center justify-center">
                3
              </span>
              <h3 className="font-extrabold text-slate-800 text-sm">
                Pilih Peran & Siap Dipakai
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Buka NutriTrace di smartphone, pilih mode Siswa atau PIC Sekolah, dan aplikasi siap digunakan tanpa instalasi tambahan.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SYSTEM REQUIREMENTS ================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center gap-2 font-extrabold text-slate-800 text-sm">
              <Cpu className="w-4 h-4 text-primary" />
              <span>Spesifikasi Minimum Perangkat</span>
            </div>
            
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-slate-400">Sistem Operasi</span>
                <span className="font-bold text-slate-800">Android 8.0 (Oreo) ke atas</span>
              </li>
              <li className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-slate-400">Memori RAM</span>
                <span className="font-bold text-slate-800">Minimal 2 GB (Rekomendasi 4 GB)</span>
              </li>
              <li className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-slate-400">Penyimpanan Kosong</span>
                <span className="font-bold text-slate-800">Minimal 50 MB</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-slate-400">Konektivitas</span>
                <span className="font-bold text-slate-800">Offline-First (WiFi / 4G saat sinkron)</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4">
            <div className="flex items-center gap-2 font-extrabold text-slate-800 text-sm">
              <FileCheck2 className="w-4 h-4 text-primary" />
              <span>Izin Akses Aplikasi yang Dibutuhkan</span>
            </div>

            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2.5 pb-2 border-b border-slate-100">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 block">Kamera</span>
                  <span className="text-slate-500 text-[11px]">Untuk scan QR code boks dan foto bukti piring bersih siswa.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-slate-800 block">Akses Internet</span>
                  <span className="text-slate-500 text-[11px]">Untuk sinkronisasi data leaderboard dan laporan ke server Cloud.</span>
                </div>
              </li>
            </ul>
          </div>

        </section>

        {/* ================= FAQ ACCORDION ================= */}
        <section className="rounded-3xl p-6 sm:p-9 backdrop-blur-md bg-white/85 border border-white/80 shadow-glass space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800">
              Pertanyaan yang Sering Diajukan (FAQ)
            </h2>
            <p className="text-xs text-slate-500">
              Informasi teknis dan solusi kendala instalasi APK.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-4 text-left font-bold text-xs sm:text-sm text-slate-800 hover:bg-slate-50/70 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
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
                        <div className="p-4 pt-1 border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* Download Page Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 text-xs">
          <p>
            © 2026 <strong className="text-white">NutriTrace</strong>. Dikembangkan oleh{' '}
            <strong className="text-white">Tim eSDoGer&apos;s</strong> (SMKN 26 Jakarta).
          </p>
          <p className="text-[11px] text-slate-500">
            Kompetisi Jakarta SDG&apos;s Futuremaker • Bappeda Provinsi DKI Jakarta
          </p>
        </div>
      </footer>

    </div>
  );
}
