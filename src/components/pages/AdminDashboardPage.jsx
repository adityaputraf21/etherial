import { useState } from 'react';
import { AdminDashboardLayout } from '../layout/AdminDashboardLayout';
import { AdminDashboardHome } from '../dashboard_admin/AdminDashboardHome';
import { ManageUsersPage } from '../dashboard_admin/ManageUsersPage';
import { ManageClassesPage } from '../dashboard_admin/ManageClassesPage';
// Impor ProfilePage dari folder student, bisa dipakai ulang
import { default as AdminProfilePage } from '../dashboard_student/ProfilePage';

export default function AdminDashboardPage({ user, onLogout }) {
    const [activeView, setActiveView] = useState('home');

    // Data contoh untuk admin
    const adminData = {
        ...user,
        stats: { totalStudents: 12, totalTutors: 2, totalClasses: 4 },
        allStudents: [
            { uid: 'student123', fullName: 'Budi Hartono', email: 'budi.hartono@example.com' },
            { uid: 'student124', fullName: 'Citra Lestari', email: 'citra.lestari@example.com' },
        ],
        allTutors: [
            { uid: 'tutor456', fullName: 'Mr. Alistair', email: 'alistair.tutor@etherial.com' },
            { uid: 'tutor457', fullName: 'Ms. Bella', email: 'bella.tutor@etherial.com' },
        ],
        programs: [
            { id: 'p01', name: 'Foundations Class', price: 300000 },
            { id: 'p02', name: 'Fluentia Class', price: 250000 },
            { id: 'p03', name: 'Codecraft Class', price: 300000 },
            { id: 'p04', name: 'Creativa Class', price: 270000 },
        ]
    };

    const renderContent = () => {
        switch(activeView) {
            case 'manage-users':
                return <ManageUsersPage students={adminData.allStudents} tutors={adminData.allTutors} />;
            case 'manage-classes':
                return <ManageClassesPage programs={adminData.programs} />;
            case 'profile':
                return <AdminProfilePage user={adminData} />;
            case 'home':
            default:
                return <AdminDashboardHome stats={adminData.stats} />;
        }
    };

    return (
        <AdminDashboardLayout
            user={adminData}
            onLogout={onLogout}
            activeView={activeView}
            onNavigate={setActiveView}
        >
            {renderContent()}
        </AdminDashboardLayout>
    );
}