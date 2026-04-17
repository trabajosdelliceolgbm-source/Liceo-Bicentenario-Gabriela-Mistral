import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Heart, Lightbulb, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Compromiso',
      description: 'Dedicación constante a la excelencia educativa y al desarrollo integral de cada estudiante.'
    },
    {
      icon: Heart,
      title: 'Respeto',
      description: 'Valoramos la diversidad y promovemos un ambiente de inclusión y tolerancia.'
    },
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Incorporamos tecnología y metodologías modernas para preparar a nuestros estudiantes para el futuro.'
    },
    {
      icon: Users,
      title: 'Comunidad',
      description: 'Fomentamos la participación activa de familias y la comunidad en el proceso educativo.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Acerca de - Liceo Polivalente Gabriela Mistral</title>
        <meta name="description" content="Conoce la historia, valores y compromiso del Liceo Polivalente Gabriela Mistral con la educación de calidad en Máfil." />
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
                  Acerca de nosotros
                </h1>
                <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Una institución con historia y compromiso con la educación de calidad
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <Card className="shadow-lg">
                  <CardContent className="p-8 md:p-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                      Nuestra historia
                    </h2>
                    <div className="space-y-4 text-foreground leading-relaxed">
                      <p>
                        El Liceo Polivalente Gabriela Mistral es una institución educativa comprometida con la excelencia académica y la formación integral de nuestros estudiantes. Ubicados en el corazón de Máfil, Región de Los Ríos, hemos sido parte fundamental del desarrollo educativo de nuestra comunidad.
                      </p>
                      <p>
                        Nuestro enfoque se centra en el desarrollo tecnológico y la formación integral, preparando a nuestros estudiantes para enfrentar los desafíos del mundo moderno con las herramientas necesarias para el éxito académico y personal.
                      </p>
                      <p>
                        Creemos firmemente que la educación es el pilar fundamental para el desarrollo de una sociedad más justa y equitativa. Por ello, trabajamos día a día para ofrecer oportunidades de aprendizaje de calidad que permitan a cada estudiante alcanzar su máximo potencial.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12">
                  Nuestros valores
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="p-3 bg-secondary rounded-xl">
                              <value.icon className="h-6 w-6 text-secondary-foreground" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;