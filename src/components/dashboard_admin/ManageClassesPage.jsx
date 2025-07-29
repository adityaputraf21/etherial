export function ManageClassesPage({ programs }) {
    return (
        <div className="space-y-4">
            {programs.map(program => (
                <div key={program.id} className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-bold text-white">{program.name}</h3>
                        <p className="text-slate-400">Harga: Rp {program.price.toLocaleString('id-ID')}</p>
                    </div>
                    <button className="bg-yellow-400 text-slate-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-300">
                        Kelola
                    </button>
                </div>
            ))}
        </div>
    );
}