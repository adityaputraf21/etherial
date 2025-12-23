import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { ArrowLeft } from 'lucide-react';

export default function RegisterPage({ onNavigate }) {
  const [formData, setFormData] = useState({
    nama_depan: '', nama_belakang: '', email: '', username: '', password: '', id_paket: '',
  });
  const [packageOptions, setPackageOptions] = useState([]);
  const [houseOptions, setHouseOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      const { data: pkg } = await supabase.from('paket').select('id_paket, nama_paket');
      const { data: house } = await supabase.from('house').select('id_house');
      setPackageOptions(pkg || []);
      setHouseOptions(house || []);
    })();
  }, []);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Sign up
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      if (authError || !authData.user?.id) throw authError || new Error("Gagal membuat akun");

      // Random house
      const randomHouse = houseOptions[Math.floor(Math.random() * houseOptions.length)];

      // Insert profile
      const profileData = {
        id: authData.user.id,
        nama_depan: formData.nama_depan,
        nama_belakang: formData.nama_belakang,
        email: formData.email,
        username: formData.username,
        role: 'student',
        id_paket: formData.id_paket ? parseInt(formData.id_paket) : null,
        id_house: randomHouse?.id_house ?? null,
      };
      const { error: insertError } = await supabase.from('profiles').insert(profileData);
      if (insertError) throw insertError;

      alert('Berhasil! Silakan cek email untuk verifikasi.');
      onNavigate('login');
    } catch (err) {
      setError(err.message || 'Terjadi kesalahan saat pendaftaran.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 flex items-center justify-center font-sans">
      <div className="w-full max-w-2xl bg-slate-800/50 p-8 rounded-2xl shadow-2xl">
        <div className="flex items-center mb-6 relative">
          <button onClick={() => onNavigate('landing')} className="absolute left-0 p-2"><ArrowLeft /></button>
          <h1 className="text-3xl font-bold font-serif text-center flex-grow">Formulir Pendaftaran</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && <div className="p-3 bg-red-500/20 text-red-300 rounded-lg text-center">{error}</div>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="nama_depan" placeholder="Nama Depan" onChange={handleChange} required className="w-full bg-slate-900/50 p-3 rounded-lg" />
            <input name="nama_belakang" placeholder="Nama Belakang" onChange={handleChange} required className="w-full bg-slate-900/50 p-3 rounded-lg" />
            <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="w-full bg-slate-900/50 p-3 rounded-lg" />
            <input name="username" placeholder="Username" onChange={handleChange} required className="w-full bg-slate-900/50 p-3 rounded-lg" />
          </div>
          <input name="password" type="password" placeholder="Password (min 6 karakter)" onChange={handleChange} required className="w-full bg-slate-900/50 p-3 rounded-lg" />
          <select name="id_paket" value={formData.id_paket} onChange={handleChange} required className="w-full bg-slate-900/50 p-3 rounded-lg text-white">
            <option value="" disabled>Pilih Paket Belajar</option>
            {packageOptions.map((pkg) => (
              <option key={pkg.id_paket} value={pkg.id_paket}>{pkg.nama_paket}</option>
            ))}
          </select>
          <button type="submit" disabled={isLoading} className="w-full bg-yellow-400 text-slate-900 font-bold py-3 rounded-lg">
            {isLoading ? 'Mendaftarkan...' : 'Daftarkan Akun'}
          </button>
        </form>
      </div>
    </div>
  );
}
