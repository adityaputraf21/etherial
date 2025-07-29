export function TutorClassesPage({ classes }) {
    return (
        <div className="space-y-6">
            {classes.map((cls, index) => (
                <div key={index} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h3 className="text-xl font-bold font-serif text-yellow-300">{cls.name}</h3>
                    <p className="text-slate-400 mt-1">Jadwal: {cls.schedule}</p>
                    <div className="mt-4 border-t border-slate-700 pt-4">
                        <h4 className="font-semibold text-white mb-2">Daftar Siswa ({cls.students.length})</h4>
                        <ul className="space-y-2">
                            {cls.students.map((student, sIndex) => (
                                <li key={sIndex} className="flex items-center justify-between bg-slate-700/50 p-3 rounded-lg">
                                    <span className="text-slate-200">{student.name}</span>
                                    <span className={`text-sm font-bold ${student.house.color}`}>{student.house.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}