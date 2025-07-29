import React, { useState } from 'react';
import { Shield, LayoutDashboard, BookMarked, ClipboardCheck, UserCircle, Settings, LogOut, Menu, X } from 'lucide-react';

const Sidebar = ({ onLogout, onNavigate, activeView, setSidebarOpen }) => {
    const navItems = [
        { name: 'Dashboard', icon: LayoutDashboard, view: 'home' },
        { name: 'Kelas Saya', icon: BookMarked, view: 'my-classes' },
        { name: 'Tugas', icon: ClipboardCheck, view: 'assignments' },
        { name: 'Profil', icon: UserCircle, view: 'profile' },
    ];

    return (
        <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-slate-800/80 backdrop-blur-lg border-r border-slate-700 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0`}>
            <div className="flex items-center justify-center h-20 border-b border-slate-700">
                <Shield className="text-yellow-400 w-8 h-8 mr-3" />
                <h1 className="text-xl font-bold text-white font-serif tracking-wider">ETHERIAL</h1>
            </div>
            
            <nav className="flex-1 px-4 py-6 space-y-2">
                {navItems.map(item => (
                    <button 
                        key={item.name} 
                        onClick={() => { onNavigate(item.view); setSidebarOpen(false); }}
                        className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                            activeView === item.view 
                            ? 'bg-yellow-400/10 text-yellow-300' 
                            : 'text-slate-300 hover:bg-yellow-400/10 hover:text-yellow-300'
                        }`}
                    >
                        <item.icon className="w-5 h-5 mr-3" />
                        <span>{item.name}</span>
                    </button>
                ))}
            </nav>

            <div className="px-4 py-4 border-t border-slate-700">
                <button onClick={onLogout} className="w-full flex items-center px-4 py-3 text-slate-300 rounded-lg hover:bg-red-500/20 hover:text-red-400 transition-colors mt-2">
                    <LogOut className="w-5 h-5 mr-3" />
                    <span>Keluar</span>
                </button>
            </div>
        </aside>
    );
};

export default function DashboardLayout({ user, onLogout, onNavigate, activeView, children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-900 font-sans text-white">
            {/* Backdrop for mobile */}
            <div 
                className={`fixed inset-0 bg-slate-900/50 z-20 md:hidden ${sidebarOpen ? 'block' : 'hidden'}`}
                onClick={() => setSidebarOpen(false)}
            ></div>
            
            <div className={`fixed inset-y-0 left-0 z-30 w-64 transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
                 <Sidebar onLogout={onLogout} onNavigate={onNavigate} activeView={activeView} setSidebarOpen={setSidebarOpen} />
            </div>
            <div className="hidden md:block">
                 <Sidebar onLogout={onLogout} onNavigate={onNavigate} activeView={activeView} setSidebarOpen={setSidebarOpen} />
            </div>
            
            <div className="md:ml-64 flex flex-col h-screen">
                <header className="sticky top-0 bg-slate-900/60 backdrop-blur-md z-10 border-b border-slate-800">
                    <div className="h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8">
                        <button onClick={() => setSidebarOpen(true)} className="md:hidden text-slate-300 hover:text-white">
                            <Menu size={24} />
                        </button>
                        
                        <div className="hidden md:block">
                            <h2 className="text-xl font-bold text-white capitalize">{activeView.replace('-', ' ')}</h2>
                        </div>

                        <div className="flex items-center space-x-3">
                            <span className="hidden sm:inline font-semibold text-slate-200">{user.fullName}</span>
                            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                                <UserCircle className="w-6 h-6 text-slate-400" />
                            </div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}