import React from "react";
import Script from "next/script";
import { Star, Quote } from "lucide-react";

// 1. Tipado estricto anidado
interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number; // 1-5
}

// 2. Constantes anidadas (Base de datos de Testimonios)
const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Maficc Miel Y Azahar",
    role: "Local Guide",
    content:
      "Mi mecánico de confianza. Me lo recomendaron y no puedo estar más contenta! Mi coche no toca otro mecánico mientras dure. Precios justos, rapidez, y seriedad. Un buen mecánico en el barrio. Gracias",
    rating: 5,
  },
  {
    id: 2,
    name: "Reies",
    role: "Local Guide",
    content:
      "Primera vez que llevo el coche y más contenta imposible. Rápidos, honestos y genial de precio. Ya tengo nuevo taller de confianza. Llevo unos años llevando el coche a este taller. Siempre han sido profesionales y amables en el trato. Es un taller de confianza.",
    rating: 5,
  },
  {
    id: 3,
    name: "Vladimir H",
    role: "Local Guide",
    content:
      "Un gran profesional! Rápido, honesto, fiable: lo que necesitas de un taller de confianza. Volveré.",
    rating: 5,
  },
];

// Definición de colores y datos agregados
const BRAND_RED = "red-600";
// Calcular rating promedio real (para el esquema)
const totalRating = TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0);
const AGGREGATE_RATING = (totalRating / TESTIMONIALS.length).toFixed(1); // 4.7, 4.8, etc.
const RATING_COUNT = TESTIMONIALS.length;

// 3. Generación del Schema Markup de AggregateRating y Reviews
const generateReviewSchema = (testimonials: Testimonial[]) => {
  // Mapeamos los testimonios individuales (Review)
  const reviews = testimonials.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating.toString(),
      bestRating: "5",
    },
    reviewBody: t.content,
    datePublished: new Date().toISOString().split("T")[0],
  }));

  // Creamos el AggregateRating (Rating Promedio)
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness", // Asociado al negocio local
    name: "E.J. TAMARIT Automoción",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: AGGREGATE_RATING.toString(),
      reviewCount: RATING_COUNT.toString(),
    },
    review: reviews,
  };
};

export const Testimonials: React.FC = () => {
  const reviewSchema = generateReviewSchema(TESTIMONIALS);

  return (
    <section className="py-24 bg-gray-50">
      {/* Inyección del JSON-LD para Rich Snippets (Estrellas de Google) */}
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2
              className={`text-${BRAND_RED} font-bold uppercase tracking-wide mb-2`}>
              Confianza Real
            </h2>
            {/* SEO Semántico: Título principal de la sección <h3> */}
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              La opinión de nuestros clientes es nuestra mejor garantía.
            </h3>
          </div>

          {/* Display de Rating Agregado (4.8/5) */}
          <div className="hidden md:block pb-2">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
              <span className="font-bold text-gray-900">
                {AGGREGATE_RATING}/5
              </span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-gray-500 text-sm ml-1">
                {RATING_COUNT} Reseñas | Satisfacción
              </span>
            </div>
          </div>
        </div>

        {/* Lista de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`bg-white pt-8 pr-8 pb-8 pl-0 rounded-r-xl border-l-4 border-${BRAND_RED} shadow-sm hover:shadow-xl transition-all duration-300 group`}>
              <div className="pl-8 relative">
                <Quote
                  className={`absolute -top-4 left-4 w-10 h-10 text-red-100 rotate-180 group-hover:text-red-200 transition-colors`}
                  aria-hidden="true"
                />

                <div
                  className="flex mb-4 relative z-10"
                  role="img"
                  aria-label={`Valoración de ${testimonial.rating} estrellas`}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? `text-${BRAND_RED} fill-${BRAND_RED}`
                          : "text-gray-200"
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed font-medium relative z-10">
                  &quot;{testimonial.content}&quot;
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500 font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-bold text-xs"
                    aria-hidden="true">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
