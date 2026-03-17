export const MatchCard = ({ partido }) => {
  return (
    <div className="bg-secondary border border-slate-800 rounded-xl p-4 shadow-lg hover:border-primary/50 transition-colors">
      <div className="flex justify-between items-center gap-4">
        {/* Local */}
        <div className="flex flex-col items-center flex-1">
          <img src={partido.local_logo} alt={partido.local} className="w-12 h-12 object-contain mb-2" />
          <span className="text-xs font-bold text-center text-white uppercase tracking-tighter">{partido.local}</span>
        </div>

        {/* Marcador / VS */}
        <div className="flex flex-col items-center">
          <div className="bg-background px-3 py-1 rounded-lg border border-slate-700">
            <span className="text-xl font-black text-primary font-mono">
              {partido.estado === 'FT' ? `${partido.goles_local} - ${partido.goles_visitante}` : 'VS'}
            </span>
          </div>
          <span className="text-[10px] text-slate-500 mt-2 font-bold uppercase">{partido.estado}</span>
        </div>

        {/* Visitante */}
        <div className="flex flex-col items-center flex-1">
          <img src={partido.visitante_logo} alt={partido.visitante} className="w-12 h-12 object-contain mb-2" />
          <span className="text-xs font-bold text-center text-white uppercase tracking-tighter">{partido.visitante}</span>
        </div>
      </div>
    </div>
  );
};