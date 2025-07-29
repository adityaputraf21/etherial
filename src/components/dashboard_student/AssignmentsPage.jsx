import React from 'react';
import { ClipboardCheck, CheckCircle, Clock } from 'lucide-react';

export default function AssignmentsPage({ user }) {
  const upcomingAssignments = user?.assignments?.filter(a => a.status === 'Belum Selesai') || [];
  const completedAssignments = user?.assignments?.filter(a => a.status === 'Selesai') || [];

  const AssignmentCard = ({ assignment }) => (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-5 flex items-start space-x-4">
        <div>
            {assignment.status === 'Selesai' 
                ? <CheckCircle className="text-green-500 w-6 h-6 mt-1" /> 
                : <Clock className="text-yellow-500 w-6 h-6 mt-1" />
            }
        </div>
        <div className="flex-1">
            <h3 className="font-bold text-white">{assignment.title}</h3>
            <p className="text-sm text-slate-400">{assignment.subject}</p>
            <p className="text-sm text-slate-500 mt-2">Tenggat: {assignment.dueDate}</p>
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${assignment.status === 'Selesai' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
            {assignment.status}
        </span>
    </div>
  );

  return (
    <div>
        <h1 className="text-3xl font-bold text-white mb-2">Tugas Saya</h1>
        <p className="text-slate-400 mb-8">Kelola semua tugasmu di sini.</p>

        <div className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center"><Clock className="mr-3 text-yellow-400"/>Mendatang</h2>
            <div className="space-y-4">
                {upcomingAssignments.length > 0 
                  ? upcomingAssignments.map(task => <AssignmentCard key={task.id} assignment={task} />)
                  : <p className="text-slate-500 pl-4">Tidak ada tugas yang akan datang.</p>
                }
            </div>
        </div>

        <div>
            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center"><CheckCircle className="mr-3 text-green-500"/>Selesai</h2>
            <div className="space-y-4">
                {completedAssignments.length > 0 
                  ? completedAssignments.map(task => <AssignmentCard key={task.id} assignment={task} />)
                  : <p className="text-slate-500 pl-4">Belum ada tugas yang selesai.</p>
                }
            </div>
        </div>
    </div>
  )
}