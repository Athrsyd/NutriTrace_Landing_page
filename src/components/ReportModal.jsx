import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  FileDown, 
  Printer, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  Calendar, 
  FileText,
  Download
} from 'lucide-react';

export default function ReportModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl rounded-3xl bg-white shadow-2xl border border-slate-200 overflow-hidden text-left"
        >
          {/* Header Bar */}
          <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-tangerine" />
              <div>
                <h3 className="font-bold text-sm">Dokumen Rekapitulasi Audit MBG</h3>
                <p className="text-[11px] text-slate-400">NutriTrace Local Report Generator (PDF / Print Ready)</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Printable Document Preview Canvas */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto print:max-h-none print:overflow-visible">
            
            {/* Letterhead */}
            <div className="border-b-2 border-slate-900 pb-4 text-center space-y-1">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-primary">
                PEMERINTAH PROVINSI DKI JAKARTA • DINAS PENDIDIKAN
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                SMK NEGERI 26 JAKARTA
              </h2>
              <p className="text-xs text-slate-600">
                Jl. Balai Pustaka Baru I No.2, Rawamangun, Kec. Pulo Gadung, Kota Jakarta Timur, DKI Jakarta 13220
              </p>
              <div className="pt-2">
                <span className="inline-block px-3 py-0.5 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold border border-slate-300">
                  BERITA ACARA QUALITY CONTROL & AUDIT ZERO-WASTE PROGRAM MBG
                </span>
              </div>
            </div>

            {/* Meta Information Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div>
                <span className="text-slate-400 block font-semibold text-[10px]">TANGGAL PENILAIAN</span>
                <span className="font-bold text-slate-800">06 Oktober 2026</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold text-[10px]">VENDOR KATERING</span>
                <span className="font-bold text-slate-800">CV Nutrisi Nusantara</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold text-[10px]">TOTAL PORSI TIBA</span>
                <span className="font-bold text-slate-800">600 Box Tersegel</span>
              </div>
              <div>
                <span className="text-slate-400 block font-semibold text-[10px]">STATUS AUDIT</span>
                <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">100% LOLOS QC</span>
              </div>
            </div>

            {/* QC Parameter Verification Table */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700 mb-2">
                1. Hasil Pemeriksaan Mutu Kedatangan (Hulu)
              </h4>
              <table className="w-full text-xs border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-100 text-slate-600">
                  <tr>
                    <th className="p-2 text-left">Parameter Mutu</th>
                    <th className="p-2 text-center">Standar BGN</th>
                    <th className="p-2 text-center">Hasil Uji Fisik</th>
                    <th className="p-2 text-right">Kesimpulan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="p-2 font-medium">Suhu Makanan Saat Tiba</td>
                    <td className="p-2 text-center">&ge; 60.0°C</td>
                    <td className="p-2 text-center font-bold text-emerald-700">68.4°C</td>
                    <td className="p-2 text-right text-emerald-700 font-bold">Memenuhi Syarat</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Integritas Segel Kemasan</td>
                    <td className="p-2 text-center">100% Rapat</td>
                    <td className="p-2 text-center font-bold">Utuh Terverifikasi</td>
                    <td className="p-2 text-right text-emerald-700 font-bold">Memenuhi Syarat</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Uji Organoleptik (Aroma/Tekstur)</td>
                    <td className="p-2 text-center">Segar/Khas</td>
                    <td className="p-2 text-center font-bold">Normal, Tidak Asam</td>
                    <td className="p-2 text-right text-emerald-700 font-bold">Memenuhi Syarat</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">Label Alergen</td>
                    <td className="p-2 text-center">Tercantum</td>
                    <td className="p-2 text-center font-bold">Bebas Alergen Kacang</td>
                    <td className="p-2 text-right text-emerald-700 font-bold">Memenuhi Syarat</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Consumption & Waste Diversion Results */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700 mb-2">
                2. Realisasi Konsumsi & Tata Kelola Residu (Hilir)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-slate-500 block text-[11px]">Clean Plate Completion</span>
                  <span className="text-base font-extrabold text-primary">97.8% (587 Siswa)</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Piring habis terverifikasi AI</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-slate-500 block text-[11px]">Redistribusi Surplus (&lt;1 Jam)</span>
                  <span className="text-base font-extrabold text-tangerine">13 Box Tersegel</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">Disalurkan aman ke satpam/staf</span>
                </div>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
                  <span className="text-slate-500 block text-[11px]">Biokonversi Maggot & Kompos</span>
                  <span className="text-base font-extrabold text-emerald-700">14.2 kg Hari Ini</span>
                  <span className="text-[10px] text-slate-500 block mt-0.5">0 kg sisa pangan ke TPA</span>
                </div>
              </div>
            </div>

            {/* Signature Block */}
            <div className="pt-4 border-t border-slate-200 grid grid-cols-2 text-center text-xs text-slate-700">
              <div className="space-y-12">
                <p>Koordinator Satgas MBG SMKN 26,</p>
                <div>
                  <p className="font-bold underline">Budi Hartanto, S.Pd</p>
                  <p className="text-[10px] text-slate-500">NIP. 19840212 200801 1 003</p>
                </div>
              </div>
              <div className="space-y-12">
                <p>Mengetahui, Kepala Sekolah,</p>
                <div>
                  <p className="font-bold underline">Drs. M. Bakri Akkas, M.Pd</p>
                  <p className="text-[10px] text-slate-500">NIP. 19680515 199412 1 002</p>
                </div>
              </div>
            </div>

          </div>

          {/* Footer Actions */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-500">
              Format kompatibel standar audit ISO 22000 & BGN
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 transition-colors shadow-xs"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak Dokumen</span>
              </button>
              <button
                onClick={() => {
                  alert('Laporan PDF resmi MBG NutriTrace berhasil diunduh ke gawai Anda!');
                  onClose();
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-primary hover:bg-primary-600 transition-colors shadow-xs"
              >
                <FileDown className="w-4 h-4" />
                <span>Unduh File PDF</span>
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
