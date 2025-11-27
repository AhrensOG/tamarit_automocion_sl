"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Shield, BadgeCheck } from "lucide-react";
import clsx from "clsx";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  { icon: Clock, title: "Eficiencia", description: "Entregas a tiempo" },
  { icon: Shield, title: "Seguridad", description: "Revisión Garantizada" },
  {
    icon: BadgeCheck,
    title: "Nueva Gerencia",
    description: "Atención Personal",
  },
];

const BRAND_RED = "red-600";
const BRAND_DARK_RED = "red-800";
const HEADER_HEIGHT_PX = "84px";

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className={clsx(
        "relative overflow-hidden clip-slant",
        `bg-${BRAND_DARK_RED}`
      )}>
      <div className="absolute inset-0">
        <Image
          src="/hero/red_car.png"
          alt="Coche familiar rojo de alta gama, simbolizando la calidad del Taller Mecánico E.J. TAMARIT en Valencia"
          fill
          priority
          className="w-full h-full object-cover object-center"
          sizes="(max-width: 768px) 100vw, 100vw"
        />
        <div className="absolute inset-0 bg-linear-to-r from-red-600/80 via-red-800/5 to-transparent"></div>
      </div>

      <div
        className={clsx(
          "relative container mx-auto px-4 sm:px-6 lg:px-8",
          `min-h-[calc(100vh-${HEADER_HEIGHT_PX})]`,
          "flex items-center py-16"
        )}>
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/40 text-white mb-6 backdrop-blur-sm">
            <BadgeCheck className="w-4 h-4" />
            <span className="text-sm font-bold">
              Tu Taller de Confianza en Valencia
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            E.J. TAMARIT{" "}
            <span className="text-white border-b-4 border-white">
              AUTOMOCIÓN
            </span>
            <br />
            Seguridad y Experiencia.
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed font-medium drop-shadow-md">
            Cuidamos de tu vehículo con la dedicación que mereces. Especialistas
            en mecánica rápida, mantenimiento y preparación ITV. Bajo nueva
            dirección, con la calidad de siempre.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className={clsx(
                "inline-flex justify-center items-center gap-2 bg-white px-8 py-4 rounded-md font-bold text-lg shadow-xl transition-all transform hover:scale-105 border-2 border-white",
                `text-${BRAND_RED} hover:bg-gray-100`
              )}
              aria-label="Contactar ahora con E.J. TAMARIT Automoción en Valencia">
              Contactar Ahora
              <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              href="#servicios"
              className={clsx(
                "inline-flex justify-center items-center gap-2 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg transition-colors",
                `bg-${BRAND_DARK_RED}/40 hover:bg-white hover:text-${BRAND_RED}`
              )}>
              Nuestros Servicios
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/30 pt-8">
            {features.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex items-center gap-3 text-white">
                  <div className="bg-white/20 p-2 rounded-lg">
                    <IconComponent
                      className="text-white w-6 h-6"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-lg">{item.title}</p>
                    <p className="text-sm text-white/80">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
