import { Link } from 'react-router-dom';
import { Home, Users, Trophy, Database } from 'lucide-react'; // Sumamos Database por el estilo de "archivo"

export function Navbar() {
    return (
      <nav className="flex justify-around p-4 bg-secondary border-b border-slate-800 shadow-lg sticky top-0 z-50">
        <Link to="/" className="flex flex-col items-center gap-1 hover:text-primary transition-colors group">
          <Home size={22} className="group-hover:scale-110 transition-transform" />
          <span className="text-[10px] uppercase font-bold tracking-wider">Inicio</span>
        </Link>

        <Link to="/matchmaking" className="flex flex-col items-center gap-1 hover:text-primary transition-colors group">
          <Users size={22} className="group-hover:scale-110 transition-transform" />
          <span className="text-[10px] uppercase font-bold tracking-wider">Matchmaking</span>
        </Link>

        {/* Acceso temporal al registro de partidos */}
        <Link to="/registro-partidos" className="flex flex-col items-center gap-1 hover:text-primary transition-colors group opacity-60 hover:opacity-100">
          <Database size={22} className="group-hover:scale-110 transition-transform" />
          <span className="text-[10px] uppercase font-bold tracking-wider italic">Archivo</span>
        </Link>
      </nav>
    );
}