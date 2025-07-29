// src/components/dashboard/DashboardHome.jsx
export function DashboardHome({ user, programs, history }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Selamat datang, {user?.username || 'Siswa'}!</h1>
      <h2 className="text-xl font-bold mt-6 mb-2">Kelas yang Diikuti</h2>
      <ul>
        {programs.map((p, i) => (
          <li key={i}>{p.name} - {p.tutor} ({p.schedule}) - Progress: {p.progress}%</li>
        ))}
      </ul>

      <h2 className="text-xl font-bold mt-6 mb-2">Riwayat Poin</h2>
      <ul>
        {history.map((h, i) => (
          <li key={i}>{h.date}: {h.reason} (+{h.points} poin)</li>
        ))}
      </ul>
    </div>
  );
}
