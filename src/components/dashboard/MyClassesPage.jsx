export function MyClassesPage({ programs }) {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Daftar Kelas Saya</h2>
            {programs.map((prog, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center">
                        <div>
                            <h3 className="text-xl font-bold font-serif text-yellow-300">{prog.name}</h3>
                            <p className="text-slate-400 mt-1">Tutor: {prog.tutor} | Jadwal: {prog.schedule}</p>
                        </div>
                        <button className="mt-4 sm:mt-0 bg-yellow-400 text-slate-900 font-bold py-2 px-5 rounded-lg hover:bg-yellow-300 transition-colors">
                            Lihat Materi
                        </button>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm text-slate-300 mb-1">Progres Kelas</p>
                        <div className="w-full bg-slate-700 rounded-full h-2.5">
                            <div className="bg-yellow-400 h-2.5 rounded-full" style={{width: `${prog.progress}%`}}></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}