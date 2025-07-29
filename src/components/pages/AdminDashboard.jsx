import { supabase } from '../../supabaseClient';

export default function AdminDashboard() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload(); // agar kembali ke halaman login
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-blue-600 mb-2">Dashboard Admin</h1>
        <p className="mb-4 text-gray-600">Selamat datang di area administrator.</p>

        <div className="mt-6">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
