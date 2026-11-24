import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Catalogo from './pages/Catalogo';
import Detalle from './pages/Detalle';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <header className="bg-blue-700 p-4 text-white shadow-md">
          <h1 className="text-3xl font-bold text-center">TiendaSimple</h1>
        </header>

        <main className="max-w-5xl mx-auto mt-8 p-4">
          <Routes>
            <Route path="/" element={<Catalogo />} />
            <Route path="/producto/:id" element={<Detalle />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;