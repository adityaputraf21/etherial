// src/components/pages/DashboardPage.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import DashboardLayout from '../layout/DashboardLayout';
import { DashboardHome } from '../dashboard/DashboardHome';
import { MyClassesPage } from '../dashboard/MyClassesPage';
import { AssignmentsPage } from '../dashboard/AssignmentsPage';
import { ProfilePage } from '../dashboard/ProfilePage';

// --- DATA CONTOH (Nantinya akan diambil dari Supabase) ---
const mockEnrolledPrograms = [
  { name: 'Foundations Class', tutor: 'Mr. Alistair', schedule: 'Senin, 16:00', progress: 75 },
  { name: 'Fluentia Class', tutor: 'Ms. Elara', schedule: 'Rabu, 16:00', progress: 40 },
];

const mockPointHistory = [
  { reason: 'Berani melakukan presentasi', points: 15, date: '2 Agu' },
  { reason: 'Menyelesaikan tugas', points: 10, date: '1 Agu' },
  { reason: 'Hadir tepat waktu', points: 5, date: '1 Agu' },
];

const mockAssignments = [
  { title: 'Membuat Esai Kreatif', class: 'Fluentia Class', dueDate: '5 Agu 2025', status: 'Terkumpul', grade: 'A' },
  { title: 'Eksperimen Perubahan Zat', class: 'Foundations Class', dueDate: '10 Agu 2025', status: 'Belum Dikerjakan', grade: null },
  { title: 'Presentasi Sejarah Nusantara', class: 'Foundations Class', dueDate: '28 Jul 2025', status: 'Terkumpul', grade: 'B+' },
];
// --- AKHIR DATA CONTOH ---

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [activeView, setActiveView] = useState('home');
  const navigate = useNavigate();

  // Ambil user dari session Supabase
  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/login');
      } else {
        setUser({
          id: user.id,
          fullName: `${user.user_metadata?.nama_depan ?? ''} ${user.user_metadata?.nama_belakang ?? ''}`,
          role: user.user_metadata?.role,
          email: user.email,
        });
      }
    };

    fetchUser();
  }, [navigate]);

  // Fungsi Logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login', { replace: true }); // ⬅️ redirect ke login
  };

  // Tampilan isi dashboard
  const renderContent = () => {
    switch (activeView) {
      case 'my-classes':
        return <MyClassesPage programs={mockEnrolledPrograms} />;
      case 'assignments':
        return <AssignmentsPage assignments={mockAssignments} />;
      case 'profile':
        return <ProfilePage user={user} />;
      case 'home':
      default:
        return <DashboardHome user={user} programs={mockEnrolledPrograms} history={mockPointHistory} />;
    }
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-lg">
        Memuat akun...
      </div>
    );
  }

  return (
    <DashboardLayout
      user={user}
      onLogout={handleLogout}
      activeView={activeView}
      onNavigate={setActiveView}
    >
      {renderContent()}
    </DashboardLayout>
  );
}
