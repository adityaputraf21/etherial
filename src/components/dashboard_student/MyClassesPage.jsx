import React from 'react';
import { Zap } from 'lucide-react';

export default function MyClassesPage({ user }) {
  return (
    <div>
        <h1 className="text-3xl font-bold text-white mb-2">Kelas Saya</h1>
        <p className="text-slate-400 mb-8">Lihat progres dan detail kelas yang kamu ikuti.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {user?.classes?.map(cls => (
                <div key={cls.id} className="bg-slate-800 border border-slate-700 rounded-lg p-6 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center space-x-3 mb-3">
                            <Zap className="text-yellow-400" />
                            <h2 className="text-xl font-bold text-white">{cls.name}</h2>
                        </div>
                        <p className="text-slate-400 mb-4">Jadwal: {cls.schedule}</p>
                    </div>
                    <div>
                        <p className="text-sm text-slate-300 mb-2">Progres: {cls.progress}%</p>
                        <div className="w-full bg-slate-700 rounded-full h-2.5">
                            <div className="bg-yellow-400 h-2.5 rounded-full" style={{ width: `${cls.progress}%` }}></div>
                        </div>
                    </div>
                </div>
            ))}
            {!user?.classes?.length && <p className="text-slate-400">Kamu belum terdaftar di kelas manapun.</p>}
        </div>
    </div>
  )
}