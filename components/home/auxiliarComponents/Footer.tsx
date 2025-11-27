import React from "react";
import { Car } from "lucide-react";

export const CONTACT_INFO = {
  address: "C/ dels Sants Just i Pastor, 121, Bajo, 46022 València, España",
  phone: "634 139 604",
  email: "ENRIQUEJOSETAMARIT@GMAIL.COM",
  hours: "Lunes - Viernes: 08:30 - 14:00 / 15:00 - 18:30",
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-red-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Grid Principal del Footer --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-red-800/50 pb-12">
          {/* Columna 1: Logo y Redes Sociales */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white p-1.5 rounded-full">
                {/* Ícono del coche con color de marca */}
                <Car className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <span className="block text-xl font-bold leading-none">
                  E.J. TAMARIT
                </span>
                <span className="block text-xs font-bold text-white/80 uppercase tracking-wider">
                  Automoción SL
                </span>
              </div>
            </div>
            <p className="text-red-100 mb-6 leading-relaxed">
              Tu taller de confianza en Santo Justo y Pastor. Nueva gerencia,
              misma pasión por el motor. Especialistas en mecánica rápida,
              mantenimiento y Pre-ITV.
            </p>
            {/* Redes Sociales */}
            {/* <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook de E.J. Tamarit"
                className="bg-white/10 p-2 rounded-full text-white hover:bg-white hover:text-red-600 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram de E.J. Tamarit"
                className="bg-white/10 p-2 rounded-full text-white hover:bg-white hover:text-red-600 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="Twitter de E.J. Tamarit"
                className="bg-white/10 p-2 rounded-full text-white hover:bg-white hover:text-red-600 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Columna 2: Servicios Principales */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-red-700 inline-block pb-1">
              Servicios Principales
            </h4>
            <ul className="space-y-3 text-red-100">
              <li>
                <a
                  href="#servicios"
                  className="hover:text-white hover:pl-2 transition-all">
                  Cambio de Aceite y Filtros
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="hover:text-white hover:pl-2 transition-all">
                  Revisión Pre-ITV
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="hover:text-white hover:pl-2 transition-all">
                  Kit de Distribución
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="hover:text-white hover:pl-2 transition-all">
                  Amortiguadores y Frenos
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Dónde Estamos y Contacto Rápido */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-b-2 border-red-700 inline-block pb-1">
              Dónde Estamos
            </h4>
            <ul className="space-y-3 text-red-100">
              {/* Dirección */}
              <li className="font-medium">{CONTACT_INFO.address}</li>

              {/* Horario */}
              <li className="mt-4 font-bold">Horario de Taller:</li>
              {/* Dividimos la cadena de horas por el separador '|' */}
              <li>{CONTACT_INFO.hours.split("|")[0]}</li>
              <li>{CONTACT_INFO.hours.split("|")[1]}</li>
            </ul>

            {/* Botón CTA */}
            <div className="mt-6">
              <a
                href="#contacto"
                className="inline-block bg-white text-red-600 px-4 py-2 rounded font-bold hover:bg-gray-100 transition-colors shadow-md">
                Pedir Cita WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* --- Copyright y Aviso Legal --- */}
        <div className="flex flex-col md:flex-row justify-between items-center text-red-200/80 text-sm">
          <p>
            &copy; {currentYear} E.J. TAMARIT AUTOMOCION. Todos los derechos
            reservados.
          </p>
          <p className="mt-2 md:mt-0">Calidad y Confianza.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
