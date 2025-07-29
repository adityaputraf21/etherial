// src/components/layout/DashboardLayout.jsx
export default function DashboardLayout({ user, children, onLogout, activeView, onNavigate }) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Halo, {user?.username || 'Siswa'}</h2>
        <nav className="space-y-4">
          <button onClick={() => onNavigate('home')} className={activeView === 'home' ? 'font-bold' : ''}>🏠 Beranda</button>
          <button onClick={() => onNavigate('my-classes')} className={activeView === 'my-classes' ? 'font-bold' : ''}>📘 Kelas Saya</button>
          <button onClick={() => onNavigate('assignments')} className={activeView === 'assignments' ? 'font-bold' : ''}>📝 Tugas</button>
          <button onClick={() => onNavigate('profile')} className={activeView === 'profile' ? 'font-bold' : ''}>👤 Profil</button>
          <button onClick={onLogout} className="text-red-400">Keluar</button>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-gray-50 p-8">
        {children}
      </main>
    </div>
  );
}
