import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { MatchCard } from '../components/MatchCard';
import { History } from 'lucide-react';

export const RegistroPartidos = () => {
  const { data: partidos, isLoading, error } = useQuery({
    queryKey: ['partidos-archivo'],
    queryFn: () => axios.get('http://localhost:8000/api/partidos-ar/').then(res => res.data),
    staleTime: 1000 * 60 * 60, // Datos históricos: 1 hora de caché
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <History className="text-primary" size={32} />
        <div>
          <h1 className="text-2xl font-black text-white italic uppercase tracking-widest text-slate-400">
            Archivo de <span className="text-white">Partidos</span>
          </h1>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-tighter">
            Datos históricos (Temporada 2024)
          </p>
        </div>
      </div>

      {isLoading && <div className="text-primary animate-pulse font-bold text-center">Consultando archivos...</div>}
      
      <div className="grid gap-4 opacity-80 hover:opacity-100 transition-opacity">
        {partidos?.map((partido) => (
          <MatchCard key={partido.id} partido={partido} />
        ))}
      </div>
    </div>
  );
};