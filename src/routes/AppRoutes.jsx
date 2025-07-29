import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import LoginPage from '../components/pages/LoginPage';
import RegisterPage from '../components/pages/RegisterPage';
import DashboardPage from '../components/pages/DashboardPage';
import TutorDashboardPage from '../components/pages/TutorDashboardPage';
import AdminDashboardPage from '../components/pages/AdminDashboardPage';
import LandingPage from '../components/pages/LandingPage';
import ProtectedRoute from '../components/ProtectedRoute';

export default function AppRoutes() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        const { data: profileData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        setProfile(profileData);
      } else {
        setUser(null);
        setProfile(null);
      }
      setLoading(false);
    };
    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      getSession();
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (loading) return <div className="p-10">Memuat...</div>;

  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Auth Pages */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* Protected Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            {
              profile?.role === 'siswa' ? (
                <DashboardPage user={profile} />
              ) : profile?.role === 'tutor' ? (
                <TutorDashboardPage user={profile} />
              ) : profile?.role === 'admin' ? (
                <AdminDashboardPage user={profile} />
              ) : (
                <div className="p-10 text-red-500">Peran tidak dikenali</div>
              )
            }
          </ProtectedRoute>
        }
      />

      {/* Redirect Page */}
      <Route
        path="/redirect"
        element={
          user && profile ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
        }
      />

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
