import React from 'react';
import { Award, Book, Star } from 'lucide-react';

export default function DashboardHome({ user }) {
  return (
    <div>
        <h1 className="text-3xl font-bold text-white mb-2">Selamat Datang, {user?.fullName || 'Siswa'}!</h1>
        <p className="text-slate-400 mb-8">Ini adalah ringkasan perjalanan sihirmu di Etherial Academy.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className={`p-6 rounded-lg bg-slate-800 border border-slate-700 flex items-center space-x-4`}>
                <div className={`p-3 rounded-full ${user?.house?.color.replace('text-', 'bg-')}/20`}>
                    <Award className={`${user?.house?.color}`} size={28} />
                </div>
                <div>
                    <p className="text-slate-400 text-sm">House</p>
                    <p className="text-2xl font-bold text-white">{user?.house?.name || 'N/A'}</p>
                </div>
            </div>
             <div className="p-6 rounded-lg bg-slate-800 border border-slate-700 flex items-center space-x-4">
                 <div className="p-3 rounded-full bg-yellow-500/20">
                    <Star className="text-yellow-400" size={28} />
                 </div>
                <div>
                    <p className="text-slate-400 text-sm">Poin</p>
                    <p className="text-2xl font-bold text-white">{user?.points || 0}</p>
                </div>
            </div>
            <div className="p-6 rounded-lg bg-slate-800 border border-slate-700 flex items-center space-x-4">
                 <div className="p-3 rounded-full bg-sky-500/20">
                    <Book className="text-sky-400" size={28} />
                 </div>
                <div>
                    <p className="text-slate-400 text-sm">Kelas Diikuti</p>
                    <p className="text-2xl font-bold text-white">{user?.classes?.length || 0}</p>
                </div>
            </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Tugas Mendatang</h2>
        <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <ul className="space-y-4">
               {user?.assignments?.filter(a => a.status === 'Belum Selesai').slice(0, 3).map(task => (
                 <li key={task.id} className="flex flex-col sm:flex-row justify-between sm:items-center p-4 bg-slate-700/50 rounded-md">
                     <div>
                         <p className="font-bold text-white">{task.title}</p>
                         <p className="text-sm text-slate-400">{task.subject}</p>
                     </div>
                     <p className="text-sm text-yellow-400 mt-2 sm:mt-0">Tenggat: {task.dueDate}</p>
                 </li>  
               ))}
               {user?.assignments?.filter(a => a.status === 'Belum Selesai').length === 0 && (
                 <p className="text-slate-400 text-center py-4">Hore! Tidak ada tugas yang akan datang.</p>
               )}
            </ul>
        </div>
    </div>
  )
}