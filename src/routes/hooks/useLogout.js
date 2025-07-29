import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export const useLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Logout error:', error.message);
    } else {
      navigate('/login');
    }
  };

  return logout;
};
