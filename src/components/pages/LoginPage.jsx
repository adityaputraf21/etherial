// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { ArrowLeft, Shield } from 'lucide-react';

export default function LoginPage({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error || !data.session) {
        setError(error?.message || 'Login gagal. Periksa email dan password Anda.');
        return;
      }

      onNavigate('dashboard');
    } catch (err) {
      setError('Terjadi kesalahan: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full p-8 bg-slate-800 rounded-xl shadow-xl">
        <Shield className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
        <h1 className="text-3xl text-center font-bold font-serif mb-6">Login Etherial</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          {error && <div className="bg-red-500/20 text-red-300 p-3 rounded-lg">{error}</div>}
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="Email" required className="w-full bg-slate-700 p-3 rounded" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" required className="w-full bg-slate-700 p-3 rounded" />
          <button type="submit" disabled={isLoading}
            className="w-full bg-yellow-400 text-black font-bold p-3 rounded">
            {isLoading ? 'Loading...' : 'Masuk'}
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Belum punya akun?{' '}
          <a href="#" onClick={() => onNavigate('register')} className="text-yellow-300 font-bold">Daftar</a>
        </p>
      </div>
    </div>
  );
}
