import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Camera, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Maximize2, 
  X, 
  Sparkles, 
  ShieldCheck, 
  Flame, 
  Recycle, 
  Store 
} from 'lucide-react';

export default function DocumentationGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: 'qc',
      title: 'Pemeriksaan Suhu & Segel Kedatangan',
      location: 'Kantin Utama SMKN 26',
      time: '09:42 WIB',
      badge: '100% Lolos QC',
      badgeColor: 'bg-emerald-500 text-white',
      img: '/images/mbg_qc_arrival.jpg',
      desc: 'Pengawasan suhu bento MBG (>68°C) menggunakan termometer probe digital serta inspeksi segel sebelum didistribusikan ke kelas.',
      icon: ShieldCheck,
    },
    {
      id: 2,
      category: 'siswa',
      title: 'Aksi Clean Plate Check-in Siswa',
      location: 'Ruang Kelas XII RPL 1',
      time: '12:15 WIB',
      badge: 'Zero Food Waste',
      badgeColor: 'bg-primary text-white',
      img: '/images/mbg_clean_plate.jpg',
      desc: 'Siswa SMK dengan antusias menghabiskan seluruh porsi menu MBG hingga piring bersih tanpa sisa residu.',
      icon: Flame,
    },
    {
      id: 3,
      category: 'maggot',
      title: 'Stasiun Biokonversi Maggot BSF',
      location: 'Eco-Station SMKN 26',
      time: '13:00 WIB',
      badge: 'Sirkular Organik',
      badgeColor: 'bg-sage-dark text-slate-900',
      img: '/images/mbg_maggot_waste.jpg',
      desc: 'Pemilahan sisa organik menjadi bahan pakan larva Black Soldier Fly (BSF) dan pengomposan mandiri sekolah.',
      icon: Recycle,
    },
    {
      id: 4,
      category: 'koperasi',
      title: 'Penukaran Reward Koperasi Sekolah',
      location: 'Koperasi Siswa Mandiri',
      time: '13:30 WIB',
      badge: 'Ekonomi Sirkular',
      badgeColor: 'bg-tangerine text-white',
      img: '/images/mbg_koperasi_reward.jpg',
      desc: 'Siswa menukarkan poin streak piring bersih dengan produk susu segar, buah apel, dan botol minum ramah lingkungan.',
      icon: Store,
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="dokumentasi" className="py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with concise text */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage/60 border border-primary/20 text-xs font-bold text-primary-800 uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5 text-primary" />
              <span>Dokumentasi Lapangan MBG</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
              Galeri Aksi Nyata di Sekolah
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl">
              Bukti visual implementasi terpadu: dari pengujian mutu katering, piring bersih siswa, 
              hingga biokonversi maggot dan belanja reward koperasi.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Semua Foto
            </button>
            <button
              onClick={() => setActiveFilter('qc')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'qc'
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              QC Katering
            </button>
            <button
              onClick={() => setActiveFilter('siswa')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'siswa'
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Piring Bersih
            </button>
            <button
              onClick={() => setActiveFilter('maggot')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'maggot'
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Biokonversi BSF
            </button>
            <button
              onClick={() => setActiveFilter('koperasi')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'koperasi'
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Koperasi
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedPhoto(item)}
                  className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 shadow-glass hover:shadow-glass-hover hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col"
                >
                  {/* Photo Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Top Pill Overlay */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-sm ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                      <span className="p-1.5 rounded-full bg-slate-900/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <div className="absolute bottom-2 left-3 text-[10px] text-white/90 font-semibold bg-slate-900/60 backdrop-blur-md px-2 py-0.5 rounded-md flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{item.time}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                    <div>
                      <h4 className="font-extrabold text-sm text-slate-800 line-clamp-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                      <div className="flex items-center gap-1 text-slate-500 font-medium">
                        <MapPin className="w-3 h-3 text-primary" />
                        <span>{item.location}</span>
                      </div>
                      <span className="font-bold text-primary group-hover:underline">Lihat Detail →</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Photo Lightbox Modal */}
      {selectedPhoto && (
        <div 
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl rounded-3xl overflow-hidden bg-white shadow-2xl border border-slate-700 text-left"
          >
            <div className="relative aspect-[16/9] w-full bg-slate-900">
              <img
                src={selectedPhoto.img}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute top-4 left-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full shadow-md ${selectedPhoto.badgeColor}`}>
                  {selectedPhoto.badge}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-extrabold text-slate-800">
                  {selectedPhoto.title}
                </h3>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  {selectedPhoto.time}
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {selectedPhoto.desc}
              </p>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{selectedPhoto.location}</span>
                </div>
                <span className="font-bold text-slate-700">Verifikasi Resmi: SMKN 26 Jakarta</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}

    </section>
  );
}
