import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

const CONTACT_INFO = {
  address: "C/ dels Sants Just i Pastor, 121, Bajo, 46022 València, España",
  phone: "634 139 604",
  email: "ENRIQUEJOSETAMARIT@GMAIL.COM",
  hours: "Lunes - Viernes: 08:30 - 14:00 | 15:00 - 18:30",
};

const Contact: React.FC = () => {
  const whatsappUrl = "https://wa.me/34634139604";

  const googleMapsLinkUrl =
    "https://maps.google.com/?q=Santo+Justo+y+Pastor+121+Valencia4";

  const googleMapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229.39561993728134!2d-0.34132589013287995!3d39.4678251209431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60488b76287a0d%3A0x1676a3d012f181d2!2sGarmar%20Automoci%C3%B3n!5e0!3m2!1ses!2ses!4v1764234251261!5m2!1ses!2ses";

  return (
    <section id="contacto" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-red-600 font-bold uppercase tracking-wide mb-2`}>
            ¿Hablamos?
          </h2>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Contacta con Nosotros
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Estamos en C/ dels Sants Just i Pastor, 121, Valencia. Puedes venir
            a vernos directamente o escribirnos por WhatsApp para una respuesta
            inmediata.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Info Column */}
          <div className="lg:w-1/2 space-y-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-full">
              <h4 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">
                Información del Taller
              </h4>
              <div className="space-y-8">
                {/* UBICACIÓN */}
                <div className="flex items-start gap-5">
                  <div
                    className={`bg-white p-4 rounded-full shadow-sm border border-red-600/20`}>
                    <MapPin
                      className={`w-6 h-6 text-red-600`}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Ubicación</p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {CONTACT_INFO.address}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      Zona Algirós / Ayora
                    </p>
                  </div>
                </div>

                {/* TELÉFONO */}
                <div className="flex items-start gap-5">
                  <div
                    className={`bg-white p-4 rounded-full shadow-sm border border-red-600/20`}>
                    <Phone
                      className={`w-6 h-6 text-red-600`}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Llámanos</p>
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                      className={`text-gray-800 text-xl font-bold hover:text-red-600 transition-colors`}>
                      {CONTACT_INFO.phone}
                    </a>
                    <p className="text-sm text-green-600 font-medium mt-1">
                      Atención inmediata
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-5">
                  <div
                    className={`bg-white p-4 rounded-full shadow-sm border border-red-600/20`}>
                    <Mail
                      className={`w-6 h-6 text-red-600`}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">Email</p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className={`text-gray-600 hover:text-red-600 break-all`}>
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* HORARIO */}
                <div className="flex items-start gap-5">
                  <div
                    className={`bg-white p-4 rounded-full shadow-sm border border-red-600/20`}>
                    <Clock
                      className={`w-6 h-6 text-red-600`}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">
                      Horario de Apertura
                    </p>
                    <p className="text-gray-600">{CONTACT_INFO.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA / Map Column */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            {/* WhatsApp Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle
                  className="w-8 h-8 text-green-600"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Cita Previa por WhatsApp
              </h3>
              <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                ¿Tienes prisa? Escribe directamente a Enrique para pedir cita o
                presupuesto sin compromiso.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Abrir WhatsApp
              </a>
            </div>

            {/* IFRAME MAP BLOCK (con Cartel y Botón) */}
            <div className="grow bg-gray-100 rounded-2xl overflow-hidden relative shadow-lg min-h-[400px] border border-gray-300">
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false} // Mantengo fullScreen en false como en tu última versión
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Taller E.J. TAMARIT Automoción en Valencia"></iframe>

              {/* Overlay con Fondo Transparente, Cartel y Botón */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10 pointer-events-none">
                {/* Background negro transparente */}
                <div className="absolute inset-0 bg-black/40 z-0"></div>

                {/* Contenido del overlay (Cartel y Botón) con un z-index superior al background */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Cartel de la Empresa - Nuestro Cartel */}
                  <div className="bg-white/95 backdrop-blur-sm px-6 py-5 rounded-xl shadow-2xl flex flex-col items-center gap-2 border-2 border-white transform transition-transform max-w-[280px] sm:max-w-none text-center pointer-events-auto">
                    <div className={`bg-red-600 p-2 rounded-full shadow-md`}>
                      <MapPin
                        className="w-6 h-6 text-white fill-current"
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <p className="block font-extrabold text-gray-900 text-lg leading-tight">
                        E.J. TAMARIT <br /> <span className="text-xs uppercase text-red-600">Automoción SL</span>
                      </p>
                      <span className="block text-sm font-medium text-gray-600 mt-1">
                        C/ dels Sants Just i Pastor, 121
                      </span>
                    </div>
                  </div>

                  {/* Botón de Google Maps */}
                  <a
                    href={googleMapsLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 bg-red-600 text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-red-800 hover:scale-105 transition-all flex items-center gap-2 border-2 border-white/20 pointer-events-auto`}>
                    Ver en Google Maps
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
