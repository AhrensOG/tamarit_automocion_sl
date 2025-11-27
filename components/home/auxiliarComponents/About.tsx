"use client";

import React from "react";
import Image from "next/image"; // Para optimización
import Script from "next/script"; // Para inyectar Schema
import { CheckCircle, Award, UserCheck } from "lucide-react";

// Definición de colores
const BRAND_RED = "red-600";

// Información de contacto clave para el LocalBusiness Schema (Asumo estos datos son constantes)
const CONTACT_INFO = {
  address: "Santo Justo y Pastor 121, Bajo, 46022 Valencia, España",
  phone: "634 139 604",
  email: "ENRIQUEJOSETAMARIT@GMAIL.COM",
  hours: "Lunes - Viernes: 08:00 - 19:00",
  // Usaremos un placeholder para una URL de imagen de logo
  logoUrl: "https://ejtamarit.com/logo.png",
};

// 1. Generación del Local Business Schema Markup (JSON-LD)
const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair", // Tipo específico para talleres
    name: "E.J. TAMARIT Automoción",
    image: CONTACT_INFO.logoUrl,
    url: "https://ejtamarit.com", // Usar URL real del sitio
    telephone: `+34${CONTACT_INFO.phone.replace(/\s/g, "")}`,
    email: CONTACT_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Santo Justo y Pastor 121, Bajo",
      addressLocality: "Valencia",
      postalCode: "46022",
      addressCountry: "ES",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    priceRange: "$$", // Rango de precios: Moderado
    hasMap: "https://maps.app.goo.gl/...", // URL real de Google Maps
  };
};

export const About: React.FC = () => {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <section id="nosotros" className="py-20 bg-white relative overflow-hidden">
      {/* Inyección del JSON-LD de Local Business */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* Decorative background elements (Se mantiene el background element pero sin z-index conflictivo) */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 skew-x-12 transform translate-x-1/2 z-0"
        aria-hidden="true"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div
              className={`inline-flex items-center gap-2 text-${BRAND_RED} font-bold uppercase tracking-wide mb-2`}>
              <Award className="w-5 h-5" />
              <span>Sobre Nosotros</span>
            </div>
            {/* 2. SEO Semántico: Mantenemos <h2> */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Nueva Gerencia,
              <br />
              <span className={`text-${BRAND_RED}`}>
                La Confianza de Siempre.
              </span>
            </h2>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8 rounded-r-lg">
              <p className="text-gray-800 text-lg font-medium italic">
                &quot;He tomado las riendas de este histórico taller en Santo Justo y
                Pastor. Mi objetivo es claro: mantener la cercanía y experiencia
                de siempre, elevando el estándar de calidad y tecnología en cada
                servicio.&quot;
                <br />
                <span
                  className={`text-sm text-${BRAND_RED} font-bold mt-2 block`}>
                  - Enrique José Tamarit, Gerente
                </span>
              </p>
            </div>

            {/* 3. Inyección de Antigüedad (30 años) */}
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Aunque E.J. TAMARIT AUTOMOCIÓN es una etapa nueva bajo mi
              dirección, el taller cuenta con una trayectoria de más de 30 años
              sirviendo a los vecinos de Valencia. Contamos con una{" "}
              <strong>larga trayectoria y experiencia</strong> en el sector de
              la automoción.
            </p>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Hemos renovado los procesos y la maquinaria para ofrecerte un
              servicio de <strong>Mecánica Rápida</strong> que realmente cumple
              con los tiempos, sin sacrificar la seguridad. Queremos que sientas
              la tranquilidad de dejar tu coche en manos expertas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Gestión Renovada",
                "30 Años de Experiencia",
                "Ubicación Histórica en Valencia",
                "Trato Directo con Dueño",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 list-none">
                  <CheckCircle
                    className={`w-6 h-6 text-${BRAND_RED} shrink-0`}
                    aria-hidden="true"
                  />
                  <span className="text-gray-700 font-bold">{item}</span>
                </li>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              {/* 4. OPTIMIZACIÓN DE IMAGEN PRINCIPAL */}
              <Image
                src="/about/about.webp"
                alt="Enrique José Tamarit, Gerente, trabajando en el Taller Mecánico"
                width={800}
                height={600}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-2xl shadow-2xl z-10 relative border-8 border-white"
              />

              {/* Decorative elements (mantener z-index ajustado) */}
              <div
                className={`absolute -bottom-6 -left-6 w-2/3 h-2/3 bg-${BRAND_RED}/10 rounded-2xl -z-10`}
                aria-hidden="true"></div>
              <div
                className="absolute -top-6 -right-6 w-2/3 h-2/3 bg-gray-100 rounded-2xl -z-10"
                aria-hidden="true"></div>

              <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs z-10">
                <div className="flex items-center gap-3 mb-2">
                  <UserCheck
                    className={`w-8 h-8 text-${BRAND_RED}`}
                    aria-hidden="true"
                  />
                  <span className="font-bold text-gray-900 text-lg">
                    Compromiso Personal
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Yo mismo superviso cada trabajo para asegurar tu satisfacción.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
