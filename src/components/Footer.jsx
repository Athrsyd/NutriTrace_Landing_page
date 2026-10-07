import React from 'react';
import { Leaf, ArrowUp, MapPin } from 'lucide-react';
import sdg2Logo from '../assets/logo-sdgs/E_WEB_02.png';
import sdg12Logo from '../assets/logo-sdgs/E_WEB_12.png';
import sdg13Logo from '../assets/logo-sdgs/E_WEB_13.png';

const sdgList = [
  {
    id: '02',
    title: 'SDG 2: Tanpa Kelaparan',
    description: 'Memastikan mutu gizi MBG terserap optimal tanpa basi.',
    logo: sdg2Logo,
  },
  {
    id: '12',
    title: 'SDG 12: Konsumsi Bertanggung Jawab',
    description: 'Clean Plate Check-in menghentikan limbah sisa makanan.',
    logo: sdg12Logo,
  },
  {
    id: '13',
    title: 'SDG 13: Penanganan Perubahan Iklim',
    description: 'Mereduksi gas metana lewat biokonversi pakan larva BSF.',
    logo: sdg13Logo,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">

          {/* Col 1: Brand & Purpose */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#" className="flex items-center gap-3 group">
              <img src="./logo.png" alt="" className='w-10 h-10 rounded-xl ' />
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl tracking-tight text-white">
                    Nutri<span className="text-primary">Trace</span>
                  </span>

                </div>
                <span className="text-[11px] font-medium text-slate-500 hidden sm:inline-block">
                  Smart QC MBG & Zero Waste App
                </span>
              </div>
            </a>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Platform pendamping Program Makan Bergizi Gratis (MBG) berbasis Android Native
              untuk memastikan kualitas makanan harian, mengeliminasi food waste, dan menggerakkan
              ekonomi sirkular di lingkungan sekolah.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-slate-400">
              <img src="logo_dunem.png" alt="" className='w-10 h-10 rounded-xl ' />

              <span>SMK Negeri 26 Jakarta (STM Pembangunan) • DKI Jakarta</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#solusi" className="hover:text-primary transition-colors">
                  Solusi MBG & Urgensi
                </a>
              </li>
              <li>
                <a href="#dokumentasi" className="hover:text-primary transition-colors">
                  Dokumentasi Lapangan MBG
                </a>
              </li>
              <li>
                <a href="#alur" className="hover:text-primary transition-colors">
                  Alur Rantai Pasok Terpadu
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-primary transition-colors">
                  Kalkulator Dampak & Kas Koperasi
                </a>
              </li>
              <li>
                <a href="#sirkular" className="hover:text-primary transition-colors">
                  Ekosistem Ekonomi Sirkular
                </a>
              </li>
              <li>
                <a href="#download" className="text-tangerine hover:text-tangerine-600 font-bold transition-colors">
                  Unduh Aplikasi Android (APK)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: SDG & Impact Alignment */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Pilar Keberlanjutan PBB (SDGs)
            </h4>
            <div className="space-y-2 text-xs">
              {sdgList.map((sdg) => (
                <div
                  key={sdg.id}
                  className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center gap-3 hover:border-slate-600 transition-colors"
                >
                  <img
                    src={sdg.logo}
                    alt={sdg.title}
                    className="w-10 h-10 rounded-lg shrink-0 object-cover"
                  />
                  <div>
                    <p className="font-bold text-white">{sdg.title}</p>
                    <p className="text-slate-400 text-[11px]">{sdg.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>
              © 2026 <strong className="text-slate-300 font-semibold">NutriTrace</strong>. Dirancang & Dikembangkan oleh{' '}
              <strong className="text-slate-300 font-semibold">Tim eSDoGer&apos;s</strong> (SMKN 26 Jakarta).
            </p>
            <p className="mt-0.5 text-[11px]">
              Kompetisi Jakarta SDG&apos;s Futuremaker | Badan Perencanaan Pembangunan Daerah Provinsi DKI Jakarta
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700 text-xs font-semibold"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
