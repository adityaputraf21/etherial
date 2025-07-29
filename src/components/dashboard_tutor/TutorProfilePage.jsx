import { useState as useStateProfile } from 'react';

export function TutorProfilePage({ user }) {
    const [fullName, setFullName] = useStateProfile(user.fullName);
    const [email, setEmail] = useStateProfile(user.email);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        alert("Profil berhasil diperbarui! (Simulasi)");
    };

    return (
        <div className="max-w-2xl mx-auto bg-slate-800 border border-slate-700 rounded-xl p-8">
            <form onSubmit={handleUpdateProfile} className="space-y-6">
                <div className="flex items-center space-x-6">
                    <img 
                      src={`https://placehold.co/80x80/8b5cf6/ffffff?text=${user.fullName.charAt(0)}`}
                      alt="Avatar" 
                      className="w-20 h-20 rounded-full" 
                    />
                    <div>
                        <h2 className="text-2xl font-bold text-white">{user.fullName}</h2>
                        <p className="text-slate-400 capitalize">{user.role}</p>
                    </div>
                </div>

                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-300 mb-2">Nama Lengkap</label>
                    <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg py-2 px-4 text-white"/>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Alamat Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg py-2 px-4 text-white"/>
                </div>
          
                <div className="pt-4 border-t border-slate-700 text-right">
                    <button type="submit" className="bg-yellow-400 text-slate-900 font-bold py-2 px-6 rounded-lg hover:bg-yellow-300 transition-colors">
                      Simpan Perubahan
                    </button>
                </div>
            </form>
        </div>
    );
}