"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Car, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "#servicios" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Contacto", href: "#contacto" },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuVariants = {
    hidden: { height: 0, opacity: 0, transition: { duration: 0.3 } },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-red-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo (Identidad Principal y H1 para la Home) */}
          <div className="flex items-center">
            {/* 3. SEO CRÍTICO: Usamos <h1> en el logo para la página principal 
                 y <Link> para asegurar que la Home es accesible desde cualquier página. */}
            <Link
              href="/"
              className="shrink-0 flex items-center gap-2"
              onClick={() => setIsOpen(false)}>
              <div className="bg-red-600 p-2 rounded-full shadow-xl transition-transform hover:scale-105">
                <Car
                  className="h-8 w-8 text-white"
                  aria-label="Logo Taller E.J. TAMARIT Automoción"
                />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight leading-none">
                  E.J. TAMARIT
                </h1>
                <span className="block text-xs font-bold text-red-600 tracking-[0.2em] uppercase">
                  Automoción SL
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6" aria-label="Navegación Principal">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    "text-gray-700 hover:text-red-600 font-semibold transition-colors duration-200",
                    link.href === "/" ? "aria-current" : undefined
                  )}>
                  {link.name}
                </Link>
              ))}
            </nav>
            <a
              href="tel:+34634139604"
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-xl transform hover:-translate-y-0.5"
              aria-label="Llamar para Pedir Cita en Taller">
              <Phone className="w-4 h-4" />
              Pedir Cita
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 transition-colors"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={
                isOpen ? "Cerrar menú principal" : "Abrir menú principal"
              }>
              {isOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="overflow-hidden md:hidden bg-white border-t border-gray-100 shadow-inner">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition-colors">
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+34634139604"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-4 bg-red-600 text-white px-3 py-3 rounded-lg text-base font-bold hover:bg-red-700 transition-colors">
                Llamar Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
