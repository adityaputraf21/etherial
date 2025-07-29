// src/pages/ForgotPasswordPage.jsx
import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';

export default function ForgotPasswordPage({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:5173/update-password', // ganti ke URL kamu
    });

    if (error) {
      setError(error.message);
    } else {
      setMessage('Link reset telah dikirim ke email.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleResetPassword} className="bg-gray-800 p-6 rounded w-80 space-y-4">
        <h2 className="text-xl font-bold">Lupa Password</h2>

        <input
          type="email"
          placeholder="Masukkan email kamu"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-gray-700"
          required
        />

        {error && <p className="text-red-400 text-sm">{error}</p>}
        {message && <p className="text-green-400 text-sm">{message}</p>}

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded">
          Kirim Link Reset
        </button>

        <p className="text-sm text-blue-400 text-center hover:underline cursor-pointer" onClick={() => onNavigate('login')}>
          Kembali ke login
        </p>
      </form>
    </div>
  );
}
