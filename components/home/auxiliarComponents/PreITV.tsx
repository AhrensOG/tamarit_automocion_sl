import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckSquare, AlertTriangle } from "lucide-react";
import clsx from 'clsx'; // Añadido para gestionar clases condicionales si fuera necesario, aunque no se use aquí.

// --- Tipado Estricto: Regla 1 ---
// Usamos una Interface para la estructura de los datos de la lista de verificación.
interface CheckItem {
  id: number;
  label: string;
  isDetailed?: boolean; // Opcional, para marcar visualmente si queremos dar más detalle
}

// Lista de verificación tipada y con mayor detalle en los últimos ítems.
const checkList: CheckItem[] = [
  { id: 1, label: "Niveles de emisiones (Gases)", isDetailed: false },
  { id: 2, label: "Sistema de frenado y pastillas", isDetailed: false },
  { id: 3, label: "Neumáticos (Profundidad, cortes y presión)", isDetailed: false }, // Pequeña mejora también
  { id: 4, label: "Luces, intermitentes y señalización", isDetailed: false },
  { id: 5, label: "Dirección, rótulas y amortiguadores (Estado y fugas)", isDetailed: false },
  { id: 6, label: "Cinturones de seguridad y cierres de puertas/capó", isDetailed: false },
  { id: 7, label: "Fugas de líquidos (Aceite motor, refrigerante, dirección, etc.)", isDetailed: true }, // Más específico
  { id: 8, label: "Testigos del cuadro (Estado 'Check Engine', ABS, Airbag, etc.)", isDetailed: true }, // Más específico
];



export const PreITV: React.FC = () => {
  return (
    <section className="py-16 bg-red-50 border-y border-red-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row">
            <div
              // Uso de Template Strings para Tailwind (Regla 2)
              className={clsx(
                `md:w-2/5 bg-red-600 text-white p-10 flex flex-col justify-center items-start relative overflow-hidden`
              )}
            >
              <div className="absolute top-0 left-0 w-full h-full">
                <Image
                  src="/pre_itv/car.webp"
                  alt="Panel de instrumentos con luz de advertencia"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover w-full h-full opacity-20 mix-blend-multiply"
                />
              </div>

              <div className="relative z-10">
                <div className="bg-white/20 p-3 rounded-lg inline-block mb-4">
                  <AlertTriangle
                    className="w-8 h-8 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-3xl font-extrabold mb-4">
                  ¿Te toca pasar la ITV?
                </h3>
                <p className="text-red-100 mb-6 text-lg">
                  No te arriesgues a un resultado desfavorable. En E.J. Tamarit
                  preparamos tu coche, revisamos gases y seguridad para que
                  pases la inspección a la primera.
                </p>
                <Link
                  href="#contacto"
                  className={clsx(
                    `inline-block bg-white text-red-600 font-bold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors shadow-lg`
                  )}
                >
                  Reserva tu Pre-ITV Hoy
                </Link>
              </div>
            </div>

            <div className="md:w-3/5 p-10">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Qué incluye nuestra revisión Pre-ITV:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Usamos 'check.id' como 'key' ya que es un identificador estable y único (Regla 1) */}
                {checkList.map((check) => (
                  <div key={check.id} className="flex items-start gap-3"> {/* items-start para alinear el icono con texto multi-línea */}
                    <CheckSquare
                      // Condición simple para usar una clase de Tailwind (Regla 2)
                      className={clsx(
                        `w-5 h-5 shrink-0 mt-0.5`, // mt-0.5 para mejor alineación visual
                        check.isDetailed ? 'text-red-700' : 'text-red-600'
                      )}
                      aria-hidden="true"
                    />
                    <span className="text-gray-700 font-medium">{check.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreITV;