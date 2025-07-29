import { supabase } from '../../supabaseClient';

export default function DashboardTutor() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard Tutor</h1>
      <p>Selamat datang, Tutor!</p>
      <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
    </div>
  );
}
