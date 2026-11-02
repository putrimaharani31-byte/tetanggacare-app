import React, { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedService, setSelectedService] = useState('');
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

  // Data Dummy Layanan
  const services = [
    {
      id: 'teman',
      title: 'Teman & Pendamping',
      desc: 'Menemani aktivitas sehari-hari, berbincang, dan membantu aktivitas ringan di dalam atau luar rumah.',
      icon: '🤝'
    },
    {
      id: 'berobat',
      title: 'Pendampingan Berobat',
      desc: 'Menemani ke rumah sakit, membantu proses pendaftaran, hingga antrean pengambilan obat (Nonmedis).',
      icon: '🏥'
    },
    {
      id: 'rumah',
      title: 'Pendampingan di Rumah',
      desc: 'Menemani dan membantu mobilitas atau aktivitas ringan di rumah sesuai ruang lingkup nonmedis.',
      icon: '🏡'
    }
  ];

  // Data Dummy Pendamping
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
    <div className="min-h-screen bg-amber-50/30 text-gray-800 font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div 
            className="text-2xl font-bold text-green-700 cursor-pointer flex items-center gap-2"
            onClick={() => setCurrentPage('home')}
          >
         <img src="/logo.png.png" alt="Logo TetanggaCare" className="h-20 md:h-28 object-contain" />
          </div>
          <div className="hidden md:flex space-x-6">
            <button onClick={() => setCurrentPage('home')} className="hover:text-green-600 font-medium">Beranda</button>
            <button onClick={() => setCurrentPage('services')} className="hover:text-green-600 font-medium">Layanan</button>
            <button onClick={() => setCurrentPage('companions')} className="hover:text-green-600 font-medium">Pendamping</button>
          </div>
          <button 
            onClick={() => setCurrentPage('booking')}
            className="bg-green-700 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-800 transition"
          >
            Pesan Sekarang
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* HALAMAN BERANDA */}
        {currentPage === 'home' && (
          <div className="space-y-16">
            <section className="text-center py-16 bg-green-50 rounded-3xl mt-4">
              <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
                Pendamping Terpercaya untuk Orang Tersayang
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Teman dan Pendamping untuk Keluarga. Temukan pendamping yang siap menemani keluarga Anda dalam aktivitas sehari-hari maupun kunjungan berobat.
              </p>
              <button 
                onClick={() => setCurrentPage('services')}
                className="bg-green-700 text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-green-800 transition shadow-lg"
              >
                Lihat Layanan Kami
              </button>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-center mb-8 text-green-800">Mengapa Memilih TetanggaCare?</h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl mb-3">🛡️</div>
                  <h3 className="font-bold mb-2">Seleksi Ketat</h3>
                  <p className="text-sm text-gray-500">Pendamping melalui proses seleksi dan verifikasi.</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl mb-3">📱</div>
                  <h3 className="font-bold mb-2">Pemesanan Praktis</h3>
                  <p className="text-sm text-gray-500">Pesan layanan langsung dari website dengan mudah.</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl mb-3">🎯</div>
                  <h3 className="font-bold mb-2">Sesuai Kebutuhan</h3>
                  <p className="text-sm text-gray-500">Pilih layanan yang paling tepat untuk keluarga Anda.</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-3xl mb-3">🔍</div>
                  <h3 className="font-bold mb-2">Transparan</h3>
                  <p className="text-sm text-gray-500">Informasi layanan dan tarif ditampilkan jelas di awal.</p>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-center mb-8 text-green-800">Cara Kerja TetanggaCare</h2>
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                <div><div className="w-12 h-12 bg-green-100 text-green-800 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-2">1</div><p>Pilih Layanan</p></div>
                <div className="hidden md:block text-gray-300">━</div>
                <div><div className="w-12 h-12 bg-green-100 text-green-800 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-2">2</div><p>Isi Kebutuhan</p></div>
                <div className="hidden md:block text-gray-300">━</div>
                <div><div className="w-12 h-12 bg-green-100 text-green-800 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-2">3</div><p>Pilih Pendamping</p></div>
                <div className="hidden md:block text-gray-300">━</div>
                <div><div className="w-12 h-12 bg-green-100 text-green-800 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-2">4</div><p>Konfirmasi</p></div>
              </div>
            </section>
          </div>
        )}

        {/* HALAMAN LAYANAN */}
        {currentPage === 'services' && (
          <div>
            <h2 className="text-3xl font-bold text-center mb-4 text-green-800">Pilihan Layanan Kami</h2>
            <div className="bg-amber-100 text-amber-800 p-4 rounded-lg text-sm mb-8 text-center max-w-3xl mx-auto">
              <strong>PENTING:</strong> TetanggaCare merupakan layanan pendampingan NONMEDIS. Kami tidak melayani diagnosis, pemberian obat, tindakan keperawatan, atau medis lainnya.
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {services.map(srv => (
                <div key={srv.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                  <div className="text-5xl mb-4 text-center">{srv.icon}</div>
                  <h3 className="text-xl font-bold text-center mb-3 text-green-700">{srv.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">{srv.desc}</p>
                  <button 
                    onClick={() => {
                      setBookingForm({...bookingForm, jenisLayanan: srv.title});
                      setCurrentPage('booking');
                    }}
                    className="w-full py-2 border-2 border-green-700 text-green-700 font-bold rounded-lg hover:bg-green-50 transition"
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
            <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Daftar Pendamping Terverifikasi</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {companions.map(comp => (
                <div key={comp.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <img src={comp.image} alt={comp.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-green-100"/>
                  <h3 className="text-xl font-bold text-center">{comp.name}, {comp.age}</h3>
                  <p className="text-center text-sm text-green-600 font-medium mb-4">⭐ {comp.rating} | ✅ Terverifikasi</p>
                  <div className="text-sm text-gray-600 space-y-2 mb-6">
                    <p><strong>Lokasi:</strong> {comp.location}</p>
                    <p><strong>Pengalaman:</strong> {comp.experience}</p>
                    <p><strong>Keahlian:</strong> {comp.skills}</p>
                  </div>
                  <button 
                    onClick={() => {
                      setSelectedCompanion(comp);
                      setCurrentPage('booking');
                    }}
                    className="w-full py-2 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition"
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
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-green-800 border-b pb-4">Formulir Pemesanan Layanan</h2>
            <form onSubmit={submitBooking} className="space-y-4">
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Jenis Layanan*</label>
                <select required name="jenisLayanan" value={bookingForm.jenisLayanan} onChange={handleInputChange} className="w-full p-3 border rounded-lg bg-gray-50">
                  <option value="">-- Pilih Layanan --</option>
                  <option value="Teman & Pendamping">Teman & Pendamping</option>
                  <option value="Pendampingan Berobat">Pendampingan Berobat</option>
                  <option value="Pendampingan di Rumah">Pendampingan di Rumah</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Nama Pengguna yang Didampingi*</label>
                <input required type="text" name="namaPengguna" value={bookingForm.namaPengguna} onChange={handleInputChange} className="w-full p-3 border rounded-lg bg-gray-50" placeholder="Masukkan nama" />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Kategori Kebutuhan*</label>
                <select name="kategoriKebutuhan" value={bookingForm.kategoriKebutuhan} onChange={handleInputChange} className="w-full p-3 border rounded-lg bg-gray-50">
                  <option value="Lansia">Lansia</option>
                  <option value="Penyandang Disabilitas">Penyandang Disabilitas</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Alamat Lokasi Layanan*</label>
                <textarea required name="alamat" value={bookingForm.alamat} onChange={handleInputChange} className="w-full p-3 border rounded-lg bg-gray-50" rows="3" placeholder="Alamat lengkap rumah atau rumah sakit"></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Tanggal Layanan*</label>
                  <input required type="date" name="tanggal" value={bookingForm.tanggal} onChange={handleInputChange} className="w-full p-3 border rounded-lg bg-gray-50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Waktu Mulai*</label>
                  <input required type="time" name="waktu" value={bookingForm.waktu} onChange={handleInputChange} className="w-full p-3 border rounded-lg bg-gray-50" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Durasi Layanan*</label>
                <select name="durasi" value={bookingForm.durasi} onChange={handleInputChange} className="w-full p-3 border rounded-lg bg-gray-50">
                  <option value="1 Jam">1 Jam</option>
                  <option value="3 Jam">3 Jam</option>
                  <option value="6 Jam">6 Jam (Setengah Hari)</option>
                  <option value="12 Jam">12 Jam (Seharian)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Catatan Kebutuhan Khusus</label>
                <textarea name="catatan" value={bookingForm.catatan} onChange={handleInputChange} className="w-full p-3 border rounded-lg bg-gray-50" rows="2" placeholder="Contoh: Menggunakan kursi roda, dsb."></textarea>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-sm font-bold text-green-800 mb-1">Pendamping Pilihan:</p>
                <p className="text-gray-700 text-sm mb-2">{selectedCompanion ? selectedCompanion.name : 'Sistem akan memilihkan pendamping terbaik'}</p>
                <button type="button" onClick={() => setCurrentPage('companions')} className="text-sm text-green-700 font-bold underline">Ubah Pendamping</button>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-600">
                <strong>Simulasi Harga Awal: Rp110.000</strong> <br/>
                *Harga final akan menyesuaikan dengan durasi serta ketentuan layanan tambahan (jika ada).
              </div>

              <button type="submit" className="w-full py-4 bg-green-700 text-white font-bold rounded-xl hover:bg-green-800 transition text-lg mt-4 shadow-md">
                Konfirmasi Pemesanan
              </button>
            </form>
          </div>
        )}

        {/* HALAMAN KONFIRMASI */}
        {currentPage === 'confirmation' && orderSummary && (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-lg border border-green-100 text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
              ✅
            </div>
            <h2 className="text-3xl font-bold text-green-800 mb-2">Pemesanan Berhasil!</h2>
            <p className="text-gray-600 mb-6">Terima kasih, tim TetanggaCare akan segera menghubungi Anda.</p>
            
            <div className="bg-gray-50 p-6 rounded-xl text-left border mb-6">
              <h3 className="font-bold text-lg border-b pb-2 mb-4">Ringkasan Pesanan (No: {orderSummary.nomorPesanan})</h3>
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
                setBookingForm({jenisLayanan: '', namaPengguna: '', kategoriKebutuhan: 'Lansia', alamat: '', tanggal: '', waktu: '', durasi: '1 Jam', catatan: ''});
                setSelectedCompanion(null);
              }}
              className="bg-green-700 text-white px-8 py-3 rounded-full font-bold hover:bg-green-800 transition"
            >
              Kembali ke Beranda
            </button>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-green-900 text-green-50 py-8 text-center mt-12">
       <div className="flex justify-center items-center gap-3 mb-2 bg-white/10 px-4 py-2 rounded-full w-fit mx-auto">
  <img src="/logo.png.png" alt="Logo TetanggaCare" className="h-8 object-contain" />
  <span className="font-bold text-lg text-white">TetanggaCare</span>
</div>
        <p className="text-sm mb-4">Teman dan Pendamping untuk Keluarga.</p>
        <p className="text-xs text-green-200">© 2026 TetanggaCare Prototype. Dibuat untuk keperluan presentasi.</p>
      </footer>
    </div>
  );
}
