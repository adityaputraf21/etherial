// src/components/pages/LoginPage.jsx
import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { Shield, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Tambahkan ini

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Inisialisasi navigate

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      navigate('/redirect'); // 🚀 Ganti window reload
    }

    setIsLoading(false);
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/redirect`,
      },
    });

    if (error) setError(error.message);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white font-sans relative">
      <button onClick={() => navigate('/')} className="absolute top-4 left-4 p-2">
        <ArrowLeft />
      </button>

      <div className="bg-slate-800 p-8 rounded-xl shadow-xl w-full max-w-md">
        <div className="text-center mb-6">
          <Shield className="w-14 h-14 text-yellow-400 mx-auto mb-2" />
          <h1 className="text-3xl font-bold font-serif">ETHERIAL ACADEMY</h1>
        </div>

        {error && (
          <div className="bg-red-500/20 text-red-300 p-3 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-slate-700 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Kata Sandi"
            className="w-full p-3 rounded bg-slate-700 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold py-3 rounded"
          >
            {isLoading ? 'Memproses...' : 'Masuk'}
          </button>
        </form>

        <div className="my-4 text-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white text-slate-900 font-bold py-3 rounded hover:bg-gray-200"
          >
            Masuk dengan Google
          </button>
        </div>

        <div className="text-center mt-6 text-sm">
          Belum punya akun?{' '}
          <button
            onClick={() => navigate('/register')}
            className="text-yellow-300 font-bold hover:underline"
          >
            Daftar di sini
          </button>
        </div>
      </div>
    </div>
  );
}
