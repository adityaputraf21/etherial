import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { supabase } from './supabaseClient';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      const user = session?.user;
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single();
        setRole(data?.role || null);
      }
      setLoading(false);
    };

    checkUser();

    supabase.auth.onAuthStateChange((_event, session) => {
      const user = session?.user;
      if (user) {
        supabase
          .from('profiles')
          .select('role')
          .eq('id', user.id)
          .single()
          .then(({ data }) => {
            setRole(data?.role || null);
          });
      } else {
        setRole(null);
      }
    });
  }, []);

  if (loading) return <p className="text-center mt-10">Memuat...</p>;

  return (
    <BrowserRouter>
      <AppRoutes role={role} />
    </BrowserRouter>
  );
}
