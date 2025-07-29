import { useState as useStateAttendance } from 'react';

export function TutorAttendancePage({ classes }) {
    const [selectedClass, setSelectedClass] = useStateAttendance(classes[0] || null);
    const [attendance, setAttendance] = useStateAttendance({});

    const handleAttendanceChange = (studentName, status) => {
        setAttendance(prev => ({ ...prev, [studentName]: status }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Absensi untuk kelas ${selectedClass.name} telah disimpan!`);
        console.log(attendance);
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <p className="text-slate-400 mb-4 sm:mb-0">Pilih kelas untuk mengelola absensi.</p>
                <select onChange={(e) => setSelectedClass(classes.find(c => c.name === e.target.value))} className="w-full sm:w-auto bg-slate-800 border border-slate-600 rounded-lg py-2 px-4 text-white">
                    {classes.map(cls => <option key={cls.name} value={cls.name}>{cls.name}</option>)}
                </select>
            </div>

            {selectedClass && (
                <form onSubmit={handleSubmit} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-yellow-300 mb-4">Absensi: {selectedClass.name}</h3>
                    <div className="space-y-4">
                        {selectedClass.students.map(student => (
                            <div key={student.name} className="bg-slate-700/50 p-4 rounded-lg flex flex-col sm:flex-row justify-between sm:items-center">
                                <span className="text-white font-semibold mb-3 sm:mb-0">{student.name}</span>
                                <div className="flex space-x-2">
                                    {['Hadir', 'Izin', 'Sakit', 'Alpa'].map(status => (
                                        <button 
                                            key={status} 
                                            type="button"
                                            onClick={() => handleAttendanceChange(student.name, status)}
                                            className={`px-3 py-1 text-sm rounded-full transition-colors ${attendance[student.name] === status ? 'bg-yellow-400 text-slate-900 font-bold' : 'bg-slate-600 text-slate-300 hover:bg-slate-500'}`}
                                        >
                                            {status}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-right mt-6">
                        <button type="submit" className="bg-yellow-400 text-slate-900 font-bold py-2 px-6 rounded-lg hover:bg-yellow-300">
                            Simpan Absensi
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}