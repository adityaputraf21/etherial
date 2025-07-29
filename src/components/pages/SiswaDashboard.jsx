// src/components/pages/SiswaDashboard.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import DashboardLayout from '../layout/DashboardLayout';
import { DashboardHome } from '../dashboard/DashboardHome';
import { MyClassesPage } from '../dashboard/MyClassesPage';
import { AssignmentsPage } from '../dashboard/AssignmentsPage';
import { ProfilePage } from '../dashboard/ProfilePage';

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

export default function SiswaDashboard({ user }) {
  const [activeView, setActiveView] = useState('home');
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

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

  return (
    <DashboardLayout
      user={user}
      onNavigate={setActiveView}
      activeView={activeView}
      onLogout={handleLogout} // 👈 penting untuk mengaktifkan tombol logout
    >
      {renderContent()}
    </DashboardLayout>
  );
}
