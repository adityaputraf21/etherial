// components/ProtectedRoute.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export default function ProtectedRoute({ children, allowedRole = null }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();

      if (error || !session) {
        navigate('/login');
        return;
      }

      // Optional: cek role dari user metadata
      const { user } = session;
      const role = user.user_metadata?.role || null;

      if (allowedRole && role !== allowedRole) {
        navigate('/login');
        return;
      }

      setLoading(false);
    };

    checkSession();

    // Listen to auth changes (misalnya user logout di tab lain)
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/login');
      }
    });

    return () => {
      listener?.subscription?.unsubscribe();
    };
  }, [navigate, allowedRole]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold text-white">
        Memuat...
      </div>
    );
  }

  return children;
}
