import React from "react";
import Script from "next/script";
import {
  Wrench,
  Droplets,
  Activity,
  Settings,
  Car,
  ShieldCheck,
  Zap, // Nuevo icono para Electricidad
  Cpu, // Nuevo icono para Electrónica
  HandPlatter, // Nuevo icono para Mecánica Especializada
  LucideIcon,
} from "lucide-react";

// --- Tipado Estricto de Datos (Regla 1) ---
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

// --- Tipado Estricto de Schema.org (Regla 1) ---
// Define la estructura mínima de un objeto Service dentro de Schema.org
interface SchemaServiceOffer {
  "@type": "Service";
  serviceType: string;
  name: string;
  description: string;
  provider: {
    "@type": "LocalBusiness";
    name: string;
  };
  areaServed: {
    "@type": "City";
    name: string;
  };
}

// Define la estructura del objeto @graph completo
interface SchemaOrgGraph {
  "@context": "https://schema.org";
  "@graph": SchemaServiceOffer[];
}


const SERVICES: ServiceItem[] = [
  {
    id: "aceite",
    title: "Aceite y Filtros",
    description:
      "Mecánica rápida para cambio de aceite y filtros. Trabajamos con las mejores marcas para proteger el motor de tu coche moderno.",
    icon: Droplets,
  },
  {
    id: "pre-itv",
    title: "Revisión Pre-ITV",
    description:
      "Preparamos tu coche para pasar la ITV a la primera. Revisión de gases, frenos y puntos críticos.",
    icon: ShieldCheck,
  },
  {
    id: "distribucion",
    title: "Kit de Distribución",
    description:
      "Especialistas en cambio de correa de distribución y bomba de agua. Mantenimiento preventivo vital para tu motor.",
    icon: Settings,
  },
  {
    id: "mecanica-especializada",
    title: "Mecánica Especializada",
    description:
      "Reparación y diagnosis de averías complejas de motor, culata y sistemas de inyección. Expertise técnico avanzado.",
    icon: HandPlatter, // Icono acorde: Simboliza la entrega de un servicio experto
  },
  {
    id: "electronica",
    title: "Electrónica del Automóvil",
    description:
      "Diagnóstico y solución de fallos en la UCE (ECU), reprogramaciones, sistemas de confort y seguridad electrónica avanzada.",
    icon: Cpu, // Icono acorde: Representa el cerebro electrónico del vehículo
  },
  {
    id: "electricidad",
    title: "Electricidad del Automóvil",
    description:
      "Reparación de sistemas de carga (alternador), arranque (motor de arranque), cableado y baterías de alta potencia.",
    icon: Zap, // Icono acorde: Relacionado con la energía y el circuito eléctrico
  },
  {
    id: "amortiguadores",
    title: "Amortiguadores y Suspensión",
    description:
      "Mejora la estabilidad y seguridad. Sustitución de amortiguadores, pastillas y discos de freno.",
    icon: Activity,
  },
  {
    id: "transmision",
    title: "Transmisión y Embrague",
    description:
      "Diagnóstico y reparación de cajas de cambio y sistemas de embrague. Soluciones para vehículos actuales.",
    icon: Wrench,
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento Integral",
    description:
      "Revisiones oficiales sin perder garantía, chequeo de niveles y puesta a punto completa del vehículo.",
    icon: Car,
  },
];

// La función ahora devuelve el tipo SchemaOrgGraph (Regla 1)
const generateServiceSchema = (services: ServiceItem[]): SchemaOrgGraph => {
  const serviceOffers: SchemaServiceOffer[] = services.map((service) => ({
    "@type": "Service",
    serviceType: service.title,
    name: `Servicio de ${service.title} en Valencia`,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: "E.J. TAMARIT Automoción",
    },
    areaServed: {
      "@type": "City",
      name: "Valencia",
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": serviceOffers,
  };
};

export const Services: React.FC = () => {
  const serviceSchema = generateServiceSchema(SERVICES);

  return (
    <section id="servicios" className="py-20 bg-white">
      {/* Script para SEO - mantiene el tipo de retorno tipado (Regla 1) */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`text-red-600 font-bold text-lg uppercase tracking-wide mb-2`}
          >
            Nuestros Servicios
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Soluciones Integrales para tu Vehículo
          </h2>

          <p className="text-gray-600 text-lg">
            Utilizamos recambios de primera calidad y tecnología de diagnóstico
            avanzada para asegurar el mejor resultado.
          </p>
        </div>

        {/* La cuadrícula de 3 columnas (md:grid-cols-2, lg:grid-cols-3) ahora contendrá exactamente 9 elementos,
            asegurando que no queden espacios vacíos en la última fila en resoluciones LG y superiores. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-red-600 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-red-100 rounded-full opacity-50 group-hover:bg-red-200 transition-colors"></div>

                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300`}
                  >
                    <Icon
                      className={`w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300`}
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;