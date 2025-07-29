import { Calendar, Users, BookCopy } from 'lucide-react';

export function TutorDashboardHome({ user }) {
    return (
        <div className="space-y-8">
            <div>
                 <h1 className="text-2xl text-slate-300">Selamat Datang, <span className="font-bold text-white">{user.fullName}</span>!</h1>
                 <p className="text-slate-400">Berikut adalah ringkasan aktivitas mengajarmu.</p>
            </div>
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <Users className="text-yellow-400 mb-2" size={28}/>
                    <p className="text-3xl font-bold text-white">{user.stats.activeStudents}</p>
                    <p className="text-sm text-slate-400">Siswa Aktif</p>
                </div>
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <BookCopy className="text-yellow-400 mb-2" size={28}/>
                    <p className="text-3xl font-bold text-white">{user.stats.activeClasses}</p>
                    <p className="text-sm text-slate-400">Kelas Diampu</p>
                </div>
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <Calendar className="text-yellow-400 mb-2" size={28}/>
                    <p className="text-3xl font-bold text-white">{user.schedule.length}</p>
                    <p className="text-sm text-slate-400">Jadwal Hari Ini</p>
                </div>
            </div>
            {/* Upcoming Schedule */}
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h3 className="font-bold text-white text-xl mb-4">Jadwal Terdekat</h3>
                <div className="space-y-4">
                    {user.schedule.length > 0 ? user.schedule.map((item, index) => (
                        <div key={index} className="bg-slate-700/50 p-4 rounded-lg flex justify-between items-center">
                            <div>
                               <p className="font-bold text-white">{item.className}</p>
                               <p className="text-sm text-slate-400">{item.studentCount} siswa</p>
                            </div>
                            <span className="font-semibold text-yellow-300">{item.time}</span>
                        </div>
                    )) : <p className="text-slate-400">Tidak ada jadwal mengajar hari ini.</p>}
                </div>
            </div>
        </div>
    );
}