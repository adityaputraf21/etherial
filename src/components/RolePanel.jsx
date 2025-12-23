// src/components/RolePanel.jsx
export default function RolePanel({ role }) {
  if (role === 'admin') return <div>Panel Admin: manajemen sistem</div>;
  if (role === 'tutor') return <div>Panel Tutor: materi, absensi, evaluasi</div>;
  return <div>Panel Siswa: daftar kelas, progres belajar</div>;
}
