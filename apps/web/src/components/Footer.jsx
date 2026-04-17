import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-xl font-bold">Liceo Polivalente Gabriela Mistral</span>
            <p className="mt-4 text-sm opacity-90 leading-relaxed">
              Institución educativa comprometida con la excelencia académica y la formación integral de nuestros estudiantes.
            </p>
          </div>

          <div>
            <span className="text-lg font-semibold">Contacto</span>
            <div className="mt-4 space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm opacity-90">
                  Bernardo O'Higgins #306<br />
                  Máfil, Región de Los Ríos<br />
                  Chile
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm opacity-90">(63) 241 1246</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm opacity-90">contacto@liceogm.cl</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-lg font-semibold">Enlaces rápidos</span>
            <div className="mt-4 space-y-2">
              <Link to="/about" className="block text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity duration-200">
                Acerca de
              </Link>
              <Link to="/vision-mision" className="block text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity duration-200">
                Visión y Misión
              </Link>
              <Link to="/proyectos" className="block text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity duration-200">
                Proyectos
              </Link>
              <Link to="/contacto" className="block text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity duration-200">
                Contacto
              </Link>
            </div>
            <div className="mt-6 flex gap-4">
              <a href="#" className="opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-200" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-200" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 hover:scale-110 transition-all duration-200" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-90">
              © 2026 Liceo Polivalente Gabriela Mistral. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity duration-200">
                Política de privacidad
              </a>
              <a href="#" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity duration-200">
                Términos de servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;