// src/components/dashboard/ProfilePage.jsx
export function ProfilePage({ user }) {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Profil Saya</h1>
      <p><strong>Nama:</strong> {user?.nama_depan} {user?.nama_belakang}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>Username:</strong> {user?.username}</p>
      <p><strong>Role:</strong> {user?.role}</p>
    </div>
  );
}
