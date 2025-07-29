import { supabase } from '../../supabaseClient';

export default function DashboardAdmin() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard Admin</h1>
      <p>Halo Admin! Ini area kontrol Anda.</p>
      <button onClick={handleLogout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Logout</button>
    </div>
  );
}
