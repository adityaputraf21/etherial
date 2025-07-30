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
    const fetchData = async () => {
      const { data: packages, error: pkgError } = await supabase
        .from('paket')
        .select('id_paket, nama_paket');
      if (pkgError) console.error("Error fetching packages:", pkgError);
      else setPackageOptions(packages);

      const { data: houses, error: houseError } = await supabase
        .from('house')
        .select('id_house');
      if (houseError) console.error("Error fetching houses:", houseError);
      else setHouseOptions(houses);
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (houseOptions.length === 0) {
        setError("Data house belum termuat, silakan coba lagi sesaat.");
        return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      if (authError) throw authError;
      if (!authData.user) throw new Error("Gagal membuat akun.");

      const randomHouse = houseOptions[Math.floor(Math.random() * houseOptions.length)];

      const profileData = {
        id: authData.user.id,
        role: 'student',
        nama_depan: formData.nama_depan,
        nama_belakang: formData.nama_belakang,
        username: formData.username,
        email: formData.email,
        id_paket: formData.id_paket ? parseInt(formData.id_paket) : null,
        id_house: randomHouse.id_house,
      };

      const { error: insertError } = await supabase.from('profiles').insert(profileData);
      if (insertError) throw insertError;

      alert('Pendaftaran berhasil! Silakan cek email Anda untuk verifikasi.');
      onNavigate('login');
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 flex items-center justify-center font-sans">
      <style>{`
        select:required:invalid { color: #9ca3af; }
        option[value=""][disabled] { display: none; }
        option { color: #1f2937; }
      `}</style>
      <div className="w-full max-w-2xl bg-slate-800/50 p-8 rounded-2xl shadow-2xl">
        <div className="flex items-center mb-6 relative">
          <button onClick={() => onNavigate('landing')} className="absolute left-0 p-2">
            <ArrowLeft />
          </button>
          <h1 className="text-3xl font-bold font-serif text-center flex-grow">Formulir Pendaftaran</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          {error && (
            <div className="p-3 bg-red-500/20 text-red-300 rounded-lg text-center">{error}</div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="nama_depan"
              placeholder="Nama Depan"
              onChange={handleChange}
              required
              className="w-full bg-slate-900/50 p-3 rounded-lg"
            />
            <input
              name="nama_belakang"
              placeholder="Nama Belakang"
              onChange={handleChange}
              required
              className="w-full bg-slate-900/50 p-3 rounded-lg"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
              required
              className="w-full bg-slate-900/50 p-3 rounded-lg"
            />
            <input
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
              className="w-full bg-slate-900/50 p-3 rounded-lg"
            />
          </div>
          <input
            name="password"
            type="password"
            placeholder="Kata Sandi (minimal 6 karakter)"
            onChange={handleChange}
            required
            minLength={6}
            className="w-full bg-slate-900/50 p-3 rounded-lg"
          />
          <select
            name="id_paket"
            value={formData.id_paket}
            onChange={handleChange}
            required
            className="w-full bg-slate-900/50 p-3 rounded-lg text-white"
          >
            <option value="" disabled>Pilih Paket Belajar</option>
            {packageOptions.map(pkg => (
              <option key={pkg.id_paket} value={pkg.id_paket} className="bg-slate-800 text-white">
                {pkg.nama_paket}
              </option>
            ))}
          </select>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-yellow-400 text-slate-900 font-bold py-3 rounded-lg"
          >
            {isLoading ? 'Mendaftarkan...' : 'Daftarkan Akun'}
          </button>
        </form>
      </div>
    </div>
  );
}
