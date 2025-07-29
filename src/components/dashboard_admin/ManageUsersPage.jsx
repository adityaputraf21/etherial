import { useState as useStateUsers } from 'react';

export function ManageUsersPage({ students, tutors }) {
    const [view, setView] = useStateUsers('students');

    const UserTable = ({ users, role }) => (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-slate-600">
                        <th className="p-3 text-sm font-semibold text-slate-300">Nama Lengkap</th>
                        <th className="p-3 text-sm font-semibold text-slate-300">Email</th>
                        <th className="p-3 text-sm font-semibold text-slate-300">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.uid} className="border-b border-slate-700 hover:bg-slate-700/50">
                            <td className="p-3 text-white">{user.fullName}</td>
                            <td className="p-3 text-slate-400">{user.email}</td>
                            <td className="p-3">
                                <button className="text-yellow-400 hover:underline text-sm">Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="space-y-6">
            <div className="flex space-x-2 border-b border-slate-700">
                <button onClick={() => setView('students')} className={`py-2 px-4 font-semibold ${view === 'students' ? 'text-yellow-300 border-b-2 border-yellow-300' : 'text-slate-400'}`}>Siswa ({students.length})</button>
                <button onClick={() => setView('tutors')} className={`py-2 px-4 font-semibold ${view === 'tutors' ? 'text-yellow-300 border-b-2 border-yellow-300' : 'text-slate-400'}`}>Tutor ({tutors.length})</button>
            </div>
            {view === 'students' ? <UserTable users={students} role="Siswa" /> : <UserTable users={tutors} role="Tutor" />}
        </div>
    );
}