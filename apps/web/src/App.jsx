import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import VisionMisionPage from './pages/VisionMisionPage';
import ContactPage from './pages/ContactPage';
import SucursalesPage from './pages/SucursalesPage';
import ProyectosPage from './pages/ProyectosPage';
import OpinionesPage from './pages/OpinionesPage';
import GaleriaPage from './pages/GaleriaPage';
import UbicacionPage from './pages/UbicacionPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vision-mision" element={<VisionMisionPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/sucursales" element={<SucursalesPage />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
        <Route path="/opiniones" element={<OpinionesPage />} />
        <Route path="/galeria" element={<GaleriaPage />} />
        <Route path="/ubicacion" element={<UbicacionPage />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-muted">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">404 - Página no encontrada</h1>
              <p className="text-muted-foreground mb-6">La página que buscas no existe.</p>
              <a href="/" className="text-secondary hover:underline">Volver al inicio</a>
            </div>
          </div>
        } />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;