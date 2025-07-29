// src/components/dashboard/AssignmentsPage.jsx
export function AssignmentsPage({ assignments }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Tugas</h1>
      <ul>
        {assignments.map((a, i) => (
          <li key={i}>
            <strong>{a.title}</strong> - {a.class} - Deadline: {a.dueDate} - Status: {a.status} - Nilai: {a.grade || '-'}
          </li>
        ))}
      </ul>
    </div>
  );
}
