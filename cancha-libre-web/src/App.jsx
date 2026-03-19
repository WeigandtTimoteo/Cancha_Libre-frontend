import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Matchmaking } from './pages/Matchmaking';
import { RegistroPartidos } from './pages/RegistroPartidos'; // Nueva página
import { Navbar } from './components/navbar/navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-slate-300 font-sans">
      <Navbar />

      <main className="p-6 max-w-4xl mx-auto">
        <Routes>
          {/* Home ahora puede ser algo más simple o un dashboard */}
          <Route path="/" element={<Home />} /> 
          
          <Route path="/matchmaking" element={<Matchmaking />} />
          
          {/* Ruta para el archivo de la liga */}
          <Route path="/registro-partidos" element={<RegistroPartidos />} />
        </Routes>
      </main>
    </div>
  );
}