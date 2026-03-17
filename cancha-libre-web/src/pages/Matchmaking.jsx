import { UserPlus } from 'lucide-react';

export const Matchmaking = () => {
  return (
    <div>
      <h1 className="text-2xl font-black text-white italic uppercase tracking-widest mb-6">
        Generador de <span className="text-primary">Equipos</span>
      </h1>
      
      <div className="bg-secondary border border-slate-800 p-8 rounded-2xl text-center">
        <UserPlus size={48} className="text-slate-700 mx-auto mb-4" />
        <p className="text-slate-400 mb-6 font-medium">Todavía no hay jugadores cargados.</p>
        
        <button className="bg-primary hover:bg-emerald-400 text-slate-950 font-black py-3 px-8 rounded-lg transition-all transform active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)] uppercase text-sm tracking-tighter">
          Nuevo Jugador
        </button>
      </div>
    </div>
  );
};