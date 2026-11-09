import React, { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isInsideHouse, setIsInsideHouse] = useState(false);
  const [selectedCompanion, setSelectedCompanion] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    jenisLayanan: '',
    namaPengguna: '',
    kategoriKebutuhan: 'Lansia',
    alamat: '',
    tanggal: '',
    waktu: '',
    durasi: '1 Jam',
    catatan: '',
  });
  const [orderSummary, setOrderSummary] = useState(null);

  // Data Layanan
  const services = [
    {
      id: 'teman',
      title: 'Teman & Pendamping',
      desc: 'Menemani aktivitas sehari-hari, berbincang ramah, dan membantu aktivitas ringan di rumah atau taman.',
      icon: '🤝',
      badge: 'Favorit Keluarga'
    },
    {
      id: 'berobat',
      title: 'Pendampingan Berobat',
      desc: 'Menemani kunjungan ke rumah sakit, antrean pendaftaran, hingga pengambilan obat (Nonmedis).',
      icon: '🏥',
      badge: 'Aman & Terpercaya'
    },
    {
      id: 'rumah',
      title: 'Pendampingan di Rumah',
      desc: 'Menemani lansia atau penyandang disabilitas bersantai dan beraktivitas nyaman di dalam rumah.',
      icon: '🏡',
      badge: 'Hangat & Perhatian'
    }
  ];

  // Data Pendamping
  const companions = [
    {
      id: 1,
      name: 'Siti Aminah',
      age: 32,
      location: 'Jakarta Selatan',
      experience: '4 Tahun',
      skills: 'Pendampingan Lansia, Komunikasi Emosional',
      verified: true,
      rating: '4.9/5',
      image: 'https://i.pravatar.cc/150?img=5'
    },
    {
      id: 2,
      name: 'Budi Santoso',
      age: 28,
      location: 'Jakarta Barat',
      experience: '2 Tahun',
      skills: 'Mobilitas Disabilitas, Navigasi Rumah Sakit',
      verified: true,
      rating: '4.8/5',
      image: 'https://i.pravatar.cc/150?img=11'
    },
    {
      id: 3,
      name: 'Rina Marlina',
      age: 35,
      location: 'Jakarta Timur',
      experience: '5 Tahun',
      skills: 'Pendampingan Demensia (Ringan), Teman Ngobrol',
      verified: true,
      rating: '5.0/5',
      image: 'https://i.pravatar.cc/150?img=9'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm({ ...bookingForm, [name]: value });
  };

  const submitBooking = (e) => {
    e.preventDefault();
    setOrderSummary({
      ...bookingForm,
      pendamping: selectedCompanion ? selectedCompanion.name : 'Dipilihkan sistem',
      nomorPesanan: 'TC-' + Math.floor(Math.random() * 100000),
      harga: 'Rp110.000 (Harga simulasi awal)'
    });
    setCurrentPage('confirmation');
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-gray-800 font-sans selection:bg-emerald-200">
      {/* Navbar */}
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-emerald-100/50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div 
            className="cursor-pointer flex items-center gap-2"
            onClick={() => { setCurrentPage('home'); setIsInsideHouse(false); }}
          >
            <img src="/logo.png.png" alt="Logo TetanggaCare" className="h-14 md:h-16 w-auto object-contain transition-transform hover:scale-105" />
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => { setCurrentPage('home'); setIsInsideHouse(false); }} className="hover:text-emerald-700 font-semibold transition">Beranda</button>
            <button onClick={() => setCurrentPage('services')} className="hover:text-emerald-700 font-semibold transition">Layanan</button>
            <button onClick={() => setCurrentPage('companions')} className="hover:text-emerald-700 font-semibold transition">Pendamping</button>
          </div>
          <button 
            onClick={() => setCurrentPage('booking')}
            className="bg-emerald-700 text-white px-6 py-2.5 rounded-full font-bold hover:bg-emerald-800 transition transform hover:-translate-y-0.5 shadow-md shadow-emerald-700/20"
          >
            Pesan Sekarang
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* HALAMAN BERANDA INTERAKTIF (RUMAH GHIBLI STYLE) */}
        {currentPage === 'home' && (
          <div className="space-y-16">
            
            {/* HER0 ANIMASI MASUK RUMAH */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-amber-900/10 transition-all duration-700">
              
              {!isInsideHouse ? (
                /* VIEW 1: RUMAH DARI LUAR (TAMPILAN TERAS & PINTU HIJAU) */
                <div 
                  className="relative min-h-[520px] bg-cover bg-center flex flex-col justify-between p-8 text-white transition-all duration-700 transform scale-100"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(15, 45, 30, 0.4), rgba(15, 45, 30, 0.7)), url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop')`
                  }}
                >
                  <div className="max-w-xl space-y-4">
                    <span className="inline-block bg-amber-400/90 text-amber-950 font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-sm shadow-sm">
                      🏡 Rumah Pendampingan TetanggaCare
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-amber-50 drop-shadow-md">
                      Kehangatan Rumah untuk Orang Tersayang
                    </h1>
                    <p className="text-amber-100/90 text-lg leading-relaxed drop-shadow-sm">
                      Selamat datang! Sentuh dan bukaklah pintu rumah kami untuk melihat bagaimana pendamping wanita kami menjaga lansia dengan kasih sayang.
                    </p>
                  </div>

                  {/* Tombol Interaktif Ketuk Pintu */}
                  <div className="pt-6">
                    <button
                      onClick={() => setIsInsideHouse(true)}
                      className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 active:scale-95 border border-emerald-400/40"
                    >
                      <span className="text-2xl group-hover:rotate-12 transition-transform">🚪</span>
                      <span>Ketuk Pintu & Masuk Rumah</span>
                      <span className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">✨</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* VIEW 2: DI DALEM RUMAH (LANSIA & PENDAMPING BERSANTAI HANGAT) */
                <div 
                  className="relative min-h-[520px] bg-cover bg-center p-8 text-amber-950 transition-all duration-700 animate-fadeIn flex flex-col justify-between"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(255, 251, 245, 0.92), rgba(255, 251, 245, 0.82)), url('https://images.unsplash.com/photo-1581579438747-1dc8d1e05fec?q=80&w=1200&auto=format&fit=crop')`
                  }}
                >
                  <div className="flex justify-between items-start">
                    <span className="bg-emerald-100 text-emerald-800 font-bold text-xs px-4 py-1.5 rounded-full border border-emerald-200">
                      ☕ Ruang Keluarga TetanggaCare
                    </span>
                    <button 
                      onClick={() => setIsInsideHouse(false)}
                      className="text-xs font-bold text-gray-500 hover:text-emerald-800 underline bg-white/80 px-3 py-1 rounded-lg"
                    >
                      ← Keluar ke Halaman Depan
                    </button>
                  </div>

                  {/* Karakter Ilustrasi & Pesan */}
                  <div className="grid md:grid-cols-2 gap-8 items-center my-6">
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 bg-amber-100/80 px-3 py-1 rounded-lg text-amber-900 text-sm font-semibold">
                        <span>👩‍🦰 Siti (Pendamping)</span>
                        <span>❤️</span>
                        <span>👵 Ibu Endang (Lansia)</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-950 leading-snug">
                        Menemani Setiap Detik Momen Berharga
                      </h2>
                      <p className="text-gray-700 leading-relaxed">
                        Di dalam rumah TetanggaCare, lansia merasa aman, didengarkan, dan ditemani aktivitas harian seperti berbincang hangat, minum teh bersama, hingga jadwal minum obat yang tertata.
                      </p>
                      <div className="pt-2 flex gap-4">
                        <button 
                          onClick={() => setCurrentPage('services')}
                          className="bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl hover:bg-emerald-800 transition shadow-md"
                        >
                          Pilih Layanan Pendamping
                        </button>
                      </div>
                    </div>

                    {/* Visual Card Karakter Interaktif (Hover Goyang & Glow) */}
                    <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-emerald-100 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-200/50 hover:-rotate-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-3xl shadow-inner">
                          👵👩‍⚕️
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-emerald-900">Pendampingan Penuh Kasih</h4>
                          <p className="text-xs text-emerald-700 font-medium">100% Nonmedis & Ramah Lansia</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 italic bg-amber-50/60 p-3 rounded-xl border border-amber-100">
                        "Terima kasih TetanggaCare, ibu saya sekarang ada teman ngobrol yang sabar setiap hari di rumah."
                      </p>
                    </div>
                  </div>

                  <div className="text-xs text-gray-500 text-center">
                    *TetanggaCare berfokus pada pendampingan kenyamanan emosional & mobilitas nonmedis keluarga.
                  </div>
                </div>
              )}
            </div>

            {/* KARTU FITUR INTERAKTIF (Bisa Goyang & Bercahaya saat Kursor Disentuh) */}
            <section>
              <h2 className="text-3xl font-extrabold text-center mb-10 text-emerald-950">
                Mengapa Memilih TetanggaCare?
              </h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                
                {/* Card 1 */}
                <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-2 hover:rotate-1 cursor-pointer">
                  <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:animate-bounce transition-transform">
                    🛡️
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-emerald-900 group-hover:text-emerald-700">Seleksi Ketat</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">Seluruh pendamping melalui verifikasi identitas & latih empati.</p>
                </div>

                {/* Card 2 */}
                <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-2 hover:-rotate-1 cursor-pointer">
                  <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:animate-bounce transition-transform">
                    📲
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-emerald-900 group-hover:text-emerald-700">Pemesanan Praktis</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">Pesan jadwal pendampingan kapan saja langsung dari website.</p>
                </div>

                {/* Card 3 */}
                <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-2 hover:rotate-1 cursor-pointer">
                  <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:animate-bounce transition-transform">
                    🎯
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-emerald-900 group-hover:text-emerald-700">Sesuai Kebutuhan</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">Fleksibel untuk lansia, penyandang disabilitas, maupun pemulihan.</p>
                </div>

                {/* Card 4 */}
                <div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-emerald-300 transition-all duration-300 hover:-translate-y-2 hover:-rotate-1 cursor-pointer">
                  <div className="text-4xl mb-4 transform group-hover:scale-125 group-hover:animate-bounce transition-transform">
                    🔍
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-emerald-900 group-hover:text-emerald-700">Transparan</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">Rincian estimasi tarif dan profil pendamping ditampilkan jelas.</p>
                </div>

              </div>
            </section>

            {/* LANGKAH CARA KERJA */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-emerald-100/60">
              <h2 className="text-2xl font-bold text-center mb-8 text-emerald-900">Cara Kerja TetanggaCare</h2>
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center">
                <div className="hover:scale-105 transition-transform"><div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center font-extrabold text-xl mx-auto mb-3 shadow-inner">1</div><p className="font-semibold text-sm">Pilih Layanan</p></div>
                <div className="hidden md:block text-emerald-200 text-2xl font-bold">━</div>
                <div className="hover:scale-105 transition-transform"><div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center font-extrabold text-xl mx-auto mb-3 shadow-inner">2</div><p className="font-semibold text-sm">Isi Kebutuhan</p></div>
                <div className="hidden md:block text-emerald-200 text-2xl font-bold">━</div>
                <div className="hover:scale-105 transition-transform"><div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center font-extrabold text-xl mx-auto mb-3 shadow-inner">3</div><p className="font-semibold text-sm">Pilih Pendamping</p></div>
                <div className="hidden md:block text-emerald-200 text-2xl font-bold">━</div>
                <div className="hover:scale-105 transition-transform"><div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center font-extrabold text-xl mx-auto mb-3 shadow-inner">4</div><p className="font-semibold text-sm">Konfirmasi</p></div>
              </div>
            </section>

          </div>
        )}

        {/* HALAMAN LAYANAN */}
        {currentPage === 'services' && (
          <div>
            <h2 className="text-3xl font-bold text-center mb-4 text-emerald-900">Pilihan Layanan Kami</h2>
            <div className="bg-amber-100/80 border border-amber-300 text-amber-900 p-4 rounded-2xl text-sm mb-8 text-center max-w-3xl mx-auto shadow-sm">
              <strong>PENTING:</strong> TetanggaCare merupakan layanan pendampingan NONMEDIS. Kami tidak melayani diagnosis, pemberian obat, tindakan keperawatan, atau medis lainnya.
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map(srv => (
                <div key={srv.id} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1">
                  <div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 inline-block mb-3">
                      {srv.badge}
                    </span>
                    <div className="text-5xl mb-4 text-center transform group-hover:scale-110 transition-transform">{srv.icon}</div>
                    <h3 className="text-xl font-bold text-center mb-3 text-emerald-800">{srv.title}</h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{srv.desc}</p>
                  </div>
                  <button 
                    onClick={() => {
                      setBookingForm({...bookingForm, jenisLayanan: srv.title});
                      setCurrentPage('booking');
                    }}
                    className="w-full py-3 border-2 border-emerald-700 text-emerald-700 font-bold rounded-xl hover:bg-emerald-700 hover:text-white transition-colors"
                  >
                    Pilih Layanan Ini
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HALAMAN PENDAMPING */}
        {currentPage === 'companions' && (
          <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-emerald-900">Daftar Pendamping Terverifikasi</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {companions.map(comp => (
                <div key={comp.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
                  <img src={comp.image} alt={comp.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-emerald-100 shadow-sm"/>
                  <h3 className="text-xl font-bold text-center">{comp.name}, {comp.age}</h3>
                  <p className="text-center text-sm text-emerald-600 font-semibold mb-4">⭐ {comp.rating} | ✅ Terverifikasi</p>
                  <div className="text-sm text-gray-600 space-y-2 mb-6 bg-gray-50 p-4 rounded-xl">
                    <p><strong>Lokasi:</strong> {comp.location}</p>
                    <p><strong>Pengalaman:</strong> {comp.experience}</p>
                    <p><strong>Keahlian:</strong> {comp.skills}</p>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedCompanion(comp);
                      setCurrentPage('booking');
                    }}
                    className="w-full py-3 bg-emerald-700 text-white font-bold rounded-xl hover:bg-emerald-800 transition shadow-md"
                  >
                    Pilih Pendamping
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HALAMAN PEMESANAN */}
        {currentPage === 'booking' && (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-lg border border-emerald-100">
            <h2 className="text-2xl font-bold mb-6 text-emerald-900 border-b pb-4">Formulir Pemesanan Layanan</h2>
            <form onSubmit={submitBooking} className="space-y-4">
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Jenis Layanan*</label>
                <select required name="jenisLayanan" value={bookingForm.jenisLayanan} onChange={handleInputChange} className="w-full p-3 border rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none">
                  <option value="">-- Pilih Layanan --</option>
                  <option value="Teman & Pendamping">Teman & Pendamping</option>
                  <option value="Pendampingan Berobat">Pendampingan Berobat</option>
                  <option value="Pendampingan di Rumah">Pendampingan di Rumah</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Nama Pengguna yang Didampingi*</label>
                <input required type="text" name="namaPengguna" value={bookingForm.namaPengguna} onChange={handleInputChange} className="w-full p-3 border rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Masukkan nama" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Kategori Kebutuhan*</label>
                <select name="kategoriKebutuhan" value={bookingForm.kategoriKebutuhan} onChange={handleInputChange} className="w-full p-3 border rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none">
                  <option value="Lansia">Lansia</option>
                  <option value="Penyandang Disabilitas">Penyandang Disabilitas</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Alamat Lokasi Layanan*</label>
                <textarea required name="alamat" value={bookingForm.alamat} onChange={handleInputChange} className="w-full p-3 border rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none" rows={3} placeholder="Alamat lengkap rumah atau rumah sakit"></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Tanggal Layanan*</label>
                  <input required type="date" name="tanggal" value={bookingForm.tanggal} onChange={handleInputChange} className="w-full p-3 border rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Waktu Mulai*</label>
                  <input required type="time" name="waktu" value={bookingForm.waktu} onChange={handleInputChange} className="w-full p-3 border rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Durasi Layanan*</label>
                <select name="durasi" value={bookingForm.durasi} onChange={handleInputChange} className="w-full p-3 border rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none">
                  <option value="1 Jam">1 Jam</option>
                  <option value="3 Jam">3 Jam</option>
                  <option value="6 Jam">6 Jam (Setengah Hari)</option>
                  <option value="12 Jam">12 Jam (Seharian)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Catatan Kebutuhan Khusus</label>
                <textarea name="catatan" value={bookingForm.catatan} onChange={handleInputChange} className="w-full p-3 border rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none" rows={2} placeholder="Contoh: Menggunakan kursi roda, dsb."></textarea>
              </div>

              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                <p className="text-sm font-bold text-emerald-900 mb-1">Pendamping Pilihan:</p>
                <p className="text-gray-700 text-sm mb-2">{selectedCompanion ? selectedCompanion.name : 'Sistem akan memilihkan pendamping terbaik'}</p>
                <button type="button" onClick={() => setCurrentPage('companions')} className="text-sm text-emerald-700 font-bold underline">Ubah Pendamping</button>
              </div>

              <div className="bg-amber-50 p-4 rounded-xl text-sm text-amber-900 border border-amber-200">
                <strong>Simulasi Harga Awal: Rp110.000</strong> <br/>
                *Harga final akan menyesuaikan dengan durasi serta ketentuan layanan tambahan.
              </div>

              <button type="submit" className="w-full py-4 bg-emerald-700 text-white font-bold rounded-xl hover:bg-emerald-800 transition text-lg mt-4 shadow-lg shadow-emerald-700/20">
                Konfirmasi Pemesanan
              </button>
            </form>
          </div>
        )}

        {/* HALAMAN KONFIRMASI */}
        {currentPage === 'confirmation' && orderSummary && (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-emerald-100 text-center">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-inner">
              ✅
            </div>
            <h2 className="text-3xl font-bold text-emerald-900 mb-2">Pemesanan Berhasil!</h2>
            <p className="text-gray-600 mb-6">Terima kasih, tim TetanggaCare akan segera menghubungi Anda.</p>
            
            <div className="bg-gray-50 p-6 rounded-2xl text-left border mb-6 space-y-2">
              <h3 className="font-bold text-lg border-b pb-2 mb-4 text-emerald-900">Ringkasan Pesanan (No: {orderSummary.nomorPesanan})</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li><strong>Layanan:</strong> {orderSummary.jenisLayanan}</li>
                <li><strong>Pendamping:</strong> {orderSummary.pendamping}</li>
                <li><strong>Nama Pengguna:</strong> {orderSummary.namaPengguna} ({orderSummary.kategoriKebutuhan})</li>
                <li><strong>Jadwal:</strong> {orderSummary.tanggal} pukul {orderSummary.waktu}</li>
                <li><strong>Durasi:</strong> {orderSummary.durasi}</li>
                <li><strong>Alamat:</strong> {orderSummary.alamat}</li>
                <li><strong>Estimasi Harga:</strong> {orderSummary.harga}</li>
              </ul>
            </div>

            <button 
              onClick={() => {
                setCurrentPage('home');
                setIsInsideHouse(false);
                setBookingForm({jenisLayanan: '', namaPengguna: '', kategoriKebutuhan: 'Lansia', alamat: '', tanggal: '', waktu: '', durasi: '1 Jam', catatan: ''});
                setSelectedCompanion(null);
              }}
              className="bg-emerald-700 text-white px-8 py-3.5 rounded-full font-bold hover:bg-emerald-800 transition shadow-md"
            >
              Kembali ke Beranda
            </button>
          </div>
        )}
      </main>
      
      {/* Footer (Dengan Logo Resmi TetanggaCare) */}
      <footer className="bg-emerald-950 text-emerald-50 py-10 text-center mt-16 border-t border-emerald-900">
        <div className="flex justify-center items-center gap-4 mb-3 bg-white/10 px-6 py-3 rounded-2xl w-fit mx-auto shadow-sm backdrop-blur-sm">
          <img src="/logo.png.png" alt="Logo TetanggaCare" className="h-12 w-auto object-contain" />
          <span className="font-bold text-xl text-white tracking-wide">TetanggaCare</span>
        </div>
        <p className="text-sm text-emerald-200 mb-4">Teman dan Pendamping untuk Keluarga.</p>
        <p className="text-xs text-emerald-400/80">© 2026 TetanggaCare Prototype. Dibuat untuk keperluan presentasi.</p>
      </footer>
    </div>
  );
}
