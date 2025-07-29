import { Users, User, BookOpen } from 'lucide-react';

export function AdminDashboardHome({ stats }) {
    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <Users className="text-yellow-400 mb-2" size={28}/>
                    <p className="text-3xl font-bold text-white">{stats.totalStudents}</p>
                    <p className="text-sm text-slate-400">Total Siswa</p>
                </div>
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <User className="text-yellow-400 mb-2" size={28}/>
                    <p className="text-3xl font-bold text-white">{stats.totalTutors}</p>
                    <p className="text-sm text-slate-400">Total Tutor</p>
                </div>
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <BookOpen className="text-yellow-400 mb-2" size={28}/>
                    <p className="text-3xl font-bold text-white">{stats.totalClasses}</p>
                    <p className="text-sm text-slate-400">Total Kelas</p>
                </div>
            </div>
            {/* Bisa ditambahkan chart atau statistik lain di sini */}
        </div>
    );
}