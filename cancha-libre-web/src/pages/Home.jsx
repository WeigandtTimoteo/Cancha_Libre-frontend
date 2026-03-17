import { Link } from 'react-router-dom';
import { Users, ClipboardList } from 'lucide-react';

export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-5xl font-black text-white italic uppercase tracking-tighter mb-4">
        Cancha <span className="text-primary">Libre</span>
      </h1>
      <p className="text-slate-500 max-w-md mb-10 font-medium">
        Gestioná tus partidos, armá equipos balanceados y llevá el control de tus jugadores de forma profesional.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
        <Link to="/matchmaking" className="bg-secondary p-6 rounded-2xl border border-slate-800 hover:border-primary/50 transition-all group">
          <Users className="mx-auto mb-3 text-slate-500 group-hover:text-primary transition-colors" size={40} />
          <h2 className="text-white font-bold uppercase text-sm">Armar Equipos</h2>
        </Link>
        
        <Link to="/registro-partidos" className="bg-secondary p-6 rounded-2xl border border-slate-800 hover:border-primary/50 transition-all group">
          <ClipboardList className="mx-auto mb-3 text-slate-500 group-hover:text-primary transition-colors" size={40} />
          <h2 className="text-white font-bold uppercase text-sm">Ver Archivo</h2>
        </Link>
      </div>
    </div>
  );
};