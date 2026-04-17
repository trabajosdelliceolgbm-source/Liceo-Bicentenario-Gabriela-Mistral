import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function UbicacionPage() {
  const directions = [
    {
      icon: Navigation,
      title: 'Desde Valdivia',
      description: 'Tomar Ruta 5 Sur hacia el sur, luego tomar salida hacia Máfil. Aproximadamente 35 minutos en auto.'
    },
    {
      icon: Navigation,
      title: 'Transporte público',
      description: 'Buses interurbanos desde Terminal de Valdivia con destino a Máfil. Frecuencia cada 30 minutos.'
    },
    {
      icon: Clock,
      title: 'Horario de atención',
      description: 'Lunes a Viernes: 8:00 - 17:00 hrs. Sábados y domingos cerrado.'
    },
    {
      icon: Phone,
      title: 'Contacto directo',
      description: 'Para consultas sobre ubicación: (63) 241 1246'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Ubicación - Liceo Polivalente Gabriela Mistral</title>
        <meta name="description" content="Encuentra la ubicación del Liceo Polivalente Gabriela Mistral en Máfil y cómo llegar desde diferentes puntos de la región." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-gradient-to-b from-muted to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Ubicación
                </h1>
                <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Encuéntranos en el corazón de Máfil
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <Card className="shadow-xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-video w-full">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.8!2d-72.95!3d-39.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDM5JzAwLjAiUyA3MsKwNTcnMDAuMCJX!5e0!3m2!1ses!2scl!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación del Liceo Polivalente Gabriela Mistral en Máfil"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <Card className="shadow-lg bg-primary text-primary-foreground">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-8 w-8 flex-shrink-0 mt-1" />
                      <div>
                        <h2 className="text-2xl font-bold mb-2">Dirección</h2>
                        <p className="text-lg leading-relaxed opacity-90">
                          Bernardo O'Higgins #306<br />
                          Máfil, Región de Los Ríos<br />
                          Chile
                        </p>
                        <p className="mt-4 text-sm opacity-80">
                          Código de ubicación: 82MW+94 Máfil
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
                  Cómo llegar
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {directions.map((direction, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full transition-all duration-300 hover:shadow-lg">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-secondary rounded-xl">
                              <direction.icon className="h-6 w-6 text-secondary-foreground" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold mb-2">{direction.title}</h3>
                              <p className="text-muted-foreground leading-relaxed">{direction.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default UbicacionPage;