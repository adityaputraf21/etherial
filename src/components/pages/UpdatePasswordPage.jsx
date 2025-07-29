// src/pages/UpdatePasswordPage.jsx
import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';

export default function UpdatePasswordPage() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.updateUser({ password });

    if (error) {
      setError(error.message);
    } else {
      setMessage('Password berhasil diperbarui.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleUpdatePassword} className="bg-gray-800 p-6 rounded w-80 space-y-4">
        <h2 className="text-xl font-bold">Atur Ulang Password</h2>

        <input
          type="password"
          placeholder="Password baru"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 rounded bg-gray-700"
          required
        />

        {error && <p className="text-red-400 text-sm">{error}</p>}
        {message && <p className="text-green-400 text-sm">{message}</p>}

        <button type="submit" className="w-full bg-green-600 hover:bg-green-700 py-2 rounded">
          Simpan Password Baru
        </button>
      </form>
    </div>
  );
}
