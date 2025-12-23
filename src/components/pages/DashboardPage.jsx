// src/pages/DashboardPage.jsx
import { useEffect, useState } from 'react';
import { supabase } from '../../supabaseClient';
import RolePanel from '../../components/RolePanel';

export default function DashboardPage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single();
      setProfile(data);
    };
    fetchProfile();
  }, []);

  if (!profile) return <div className="text-white p-8">Memuat dashboard...</div>;

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Halo, {profile.nama_depan}</h1>
      <RolePanel role={profile.role} />
    </div>
  );
}
