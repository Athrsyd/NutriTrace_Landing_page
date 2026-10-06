import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Smartphone, 
  ShieldCheck, 
  UserCheck, 
  CheckCircle2, 
  Download, 
  Layers, 
  Zap, 
  ExternalLink 
} from 'lucide-react';

export default function DemoAppModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden text-left"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary-600 text-white px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-extrabold text-base">Tentang Aplikasi NutriTrace MBG</h3>
                <p className="text-xs text-primary-100">Inovasi Android Native (Kotlin) & Firebase Cloud</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-white/20 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold text-primary uppercase tracking-wider">
                Informasi & Spesifikasi Aplikasi
              </span>
              <h4 className="text-xl font-black text-slate-800">
                Aplikasi Pendamping Resmi MBG di Sekolah
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                NutriTrace dirancang untuk dua jenis pengguna utama di lingkungan sekolah guna menjamin kelayakan gizi dan nol sampah makanan:
              </p>
            </div>

            {/* 2 Roles Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-800">
                  <UserCheck className="w-4 h-4 text-primary" />
                  <span>Untuk Siswa Sekolah</span>
                </div>
                <ul className="space-y-1 text-slate-600 text-[11px]">
                  <li>• Clean Plate Check-in foto piring habis</li>
                  <li>• Poin gamifikasi & daily streak 🔥</li>
                  <li>• Kompetisi peringkat piring bersih antarkelas</li>
                  <li>• Penukaran voucer belanja di koperasi</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-tangerine" />
                  <span>Untuk Satgas & Koordinator</span>
                </div>
                <ul className="space-y-1 text-slate-600 text-[11px]">
                  <li>• Input QC kedatangan katering &lt; 2 menit</li>
                  <li>• Monitoring suhu makanan & label alergen</li>
                  <li>• Strict Surplus Hub (redistribusi &lt; 1 jam)</li>
                  <li>• Ekspor rekapitulasi laporan resmi PDF</li>
                </ul>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="p-4 rounded-2xl bg-[#FFFFF0] border border-sage/70 space-y-2 text-xs">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <Layers className="w-4 h-4 text-primary" />
                <span>Arsitektur Rekayasa Perangkat Lunak (SDLC Waterfall)</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 pt-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>Kotlin + MVVM Pattern</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>Room DB Offline-First</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>Firebase Realtime Database</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>MPAndroidChart Data Visualizer</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href="#alur"
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-xl text-center bg-primary hover:bg-primary-600 text-white font-bold text-xs shadow-xs transition-colors"
              >
                Pelajari Alur Kerja Sistem
              </a>
              <button
                onClick={() => {
                  alert('Versi build APK Android Native NutriTrace sedang dalam tahap sertifikasi piloting SMKN 26 Jakarta!');
                  onClose();
                }}
                className="py-3 px-4 rounded-xl text-center bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh Informasi APK</span>
              </button>
            </div>

          </div>

          {/* Footer */}
          <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 text-center">
            <p className="text-[11px] text-slate-400">
              SMKN 26 Jakarta • Befeest Binus University 2026
            </p>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
