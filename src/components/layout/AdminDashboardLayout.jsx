import React, { useState } from 'react';
import { Shield, Home, Users, BookOpen, UserCircle, LogOut, Menu, X } from 'lucide-react';

export function AdminDashboardLayout({ user, onLogout, onNavigate, activeView, children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navItems = [
        { name: 'Dashboard', icon: Home, view: 'home' },
        { name: 'Kelola Pengguna', icon: Users, view: 'manage-users' },
        { name: 'Kelola Kelas', icon: BookOpen, view: 'manage-classes' },
        { name: 'Profil', icon: UserCircle, view: 'profile' },
    ];
    
    const handleNavClick = (page) => {
        onNavigate(page);
        setSidebarOpen(false);
    };

    const SidebarContent = () => (
        <div className="flex flex-col h-full bg-slate-800">
            <div className="flex items-center justify-center h-20 border-b border-slate-700 flex-shrink-0">
                <Shield className="text-yellow-400 w-8 h-8 mr-3" />
                <h1 className="text-xl font-bold text-white font-serif tracking-wider">ADMIN PORTAL</h1>
            </div>
            
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                {navItems.map(item => (
                    <button 
                        key={item.name} 
                        onClick={() => handleNavClick(item.view)}
                        className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
                            activeView === item.view 
                            ? 'bg-yellow-400 text-slate-900 font-bold' 
                            : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                        }`}
                    >
                        <item.icon className="w-6 h-6 mr-3" />
                        <span>{item.name}</span>
                    </button>
                ))}
            </nav>

            <div className="px-4 py-4 border-t border-slate-700 flex-shrink-0">
                <button onClick={onLogout} className="w-full flex items-center px-4 py-3 text-slate-300 rounded-lg hover:bg-red-500 hover:text-white transition-colors duration-200">
                    <LogOut className="w-6 h-6 mr-3" />
                    <span>Keluar</span>
                </button>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-slate-900 font-sans text-white flex">
            {/* Sidebar for Mobile */}
            <div className={`fixed inset-0 z-40 md:hidden transition-transform transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="w-64 bg-slate-800 h-full">
                   <SidebarContent />
                </div>
                 <div className="absolute top-5 right-5" onClick={() => setSidebarOpen(false)}>
                    <X className="text-white w-6 h-6" />
                </div>
            </div>

            {/* Sidebar for Desktop */}
            <aside className="hidden md:flex w-64 flex-shrink-0">
                <SidebarContent />
            </aside>
            
            <div className="flex-1 flex flex-col max-h-screen">
                <header className="flex-shrink-0 bg-slate-800/80 backdrop-blur-lg md:bg-transparent p-4 flex justify-between items-center md:justify-end border-b md:border-none border-slate-700">
                    <button onClick={() => setSidebarOpen(true)} className="md:hidden text-slate-300 hover:text-white">
                        <Menu size={24} />
                    </button>
                    <div className="flex items-center space-x-4">
                        <div className="text-right">
                            <p className="font-semibold text-white">{user.fullName}</p>
                            <p className="text-xs text-slate-400 capitalize">{user.role}</p>
                        </div>
                        <img src={`https://placehold.co/40x40/10b981/ffffff?text=${user.fullName.charAt(0)}`} alt="Avatar" className="w-10 h-10 rounded-full" />
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                    <h2 className="text-3xl font-bold text-white capitalize mb-6">{activeView.replace('-', ' ')}</h2>
                    {children}
                </main>
            </div>
        </div>
    );
}