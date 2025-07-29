import { useState } from 'react';
import { supabase } from '../../supabaseClient';

export default function RegisterPage() {
  const [form, setForm] = useState({
    nama_depan: '',
    nama_belakang: '',
    email: '',
    username: '',
    password: '',
    role: 'siswa',
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const { email, password, nama_depan, nama_belakang, username, role } = form;

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      alert(error.message);
      return;
    }

    const user = data.user;
    if (user) {
      await supabase.from('profiles').insert({
        id: user.id,
        nama_depan,
        nama_belakang,
        username,
        role,
      });
    }

    alert('Register berhasil! Cek email untuk verifikasi.');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4 p-4">
      <input className="input" name="nama_depan" placeholder="Nama Depan" onChange={handleChange} required />
      <input className="input" name="nama_belakang" placeholder="Nama Belakang" onChange={handleChange} required />
      <input className="input" name="username" placeholder="Username" onChange={handleChange} required />
      <input className="input" type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input className="input" type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <select className="input" name="role" onChange={handleChange}>
        <option value="siswa">Siswa</option>
        <option value="tutor">Tutor</option>
        <option value="admin">Admin</option>
      </select>
      <button className="bg-blue-500 text-white w-full py-2">Register</button>
    </form>
  );
}
