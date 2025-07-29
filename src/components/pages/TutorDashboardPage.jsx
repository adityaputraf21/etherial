import { useState } from 'react';
import { TutorDashboardLayout } from '../layout/TutorDashboardLayout';
import { TutorDashboardHome } from '../dashboard_tutor/TutorDashboardHome';
import { TutorClassesPage } from '../dashboard_tutor/TutorClassesPage';
import { TutorAttendancePage } from '../dashboard_tutor/TutorAttendancePage';
import { TutorProfilePage } from '../dashboard_tutor/TutorProfilePage';


export default function TutorDashboardPage({ user, onLogout }) {
    const [activeView, setActiveView] = useState('home');

    // Data contoh untuk tutor yang login
    const tutorData = {
        ...user,
        stats: { activeStudents: 12, activeClasses: 2 },
        schedule: [
            { className: 'Foundations Class', time: '16:00', studentCount: 3 },
            { className: 'Codecraft Class', time: '18:30', studentCount: 2 },
        ],
        classes: [
            { name: 'Foundations Class', schedule: 'Senin, 16:00', students: [
                { name: 'Budi Hartono', house: { name: 'Ignis', color: 'text-red-400' } },
                { name: 'Citra Lestari', house: { name: 'Lumen', color: 'text-yellow-400' } },
                { name: 'Dewi Anggraini', house: { name: 'Terra', color: 'text-green-400' } },
            ]},
            { name: 'Codecraft Class', schedule: 'Selasa, 18:30', students: [
                { name: 'Eka Wijaya', house: { name: 'Aeris', color: 'text-blue-400' } },
                { name: 'Fajar Nugroho', house: { name: 'Ignis', color: 'text-red-400' } },
            ]},
        ]
    };

    const renderContent = () => {
        switch(activeView) {
            case 'my-classes':
                return <TutorClassesPage classes={tutorData.classes} />;
            case 'attendance':
                return <TutorAttendancePage classes={tutorData.classes} />;
            case 'profile':
                return <TutorProfilePage user={tutorData} />;
            case 'home':
            default:
                return <TutorDashboardHome user={tutorData} />;
        }
    };

    return (
        <TutorDashboardLayout 
            user={tutorData} 
            onLogout={onLogout}
            activeView={activeView}
            onNavigate={setActiveView}
        >
            {renderContent()}
        </TutorDashboardLayout>
    );
}