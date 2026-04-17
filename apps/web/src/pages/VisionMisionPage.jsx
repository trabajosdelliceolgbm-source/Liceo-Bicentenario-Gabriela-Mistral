import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Eye, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function VisionMisionPage() {
  return (
    <>
      <Helmet>
        <title>Visión y Misión - Liceo Polivalente Gabriela Mistral</title>
        <meta name="description" content="Conoce la visión y misión del Liceo Polivalente Gabriela Mistral, nuestro compromiso con la educación innovadora y la formación integral." />
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
                  Visión y Misión
                </h1>
                <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Nuestro compromiso con la educación del futuro
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="h-full shadow-xl bg-secondary text-secondary-foreground">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-secondary-foreground/10 rounded-2xl">
                          <Eye className="h-8 w-8" />
                        </div>
                        <h2 className="text-3xl font-bold">Visión</h2>
                      </div>
                      <div className="space-y-4 leading-relaxed">
                        <p>
                          Ser reconocidos como una institución educativa innovadora y de excelencia en la Región de Los Ríos, que forma estudiantes integrales, comprometidos con su desarrollo personal y el progreso de su comunidad.
                        </p>
                        <p>
                          Aspiramos a ser un referente en la integración de tecnología y metodologías modernas en el proceso educativo, preparando a nuestros estudiantes para enfrentar con éxito los desafíos del futuro.
                        </p>
                        <p>
                          Visualizamos una comunidad educativa donde cada estudiante descubre y desarrolla su potencial único, contribuyendo al desarrollo sostenible de nuestra región y del país.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="h-full shadow-xl bg-primary text-primary-foreground">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 bg-primary-foreground/10 rounded-2xl">
                          <Target className="h-8 w-8" />
                        </div>
                        <h2 className="text-3xl font-bold">Misión</h2>
                      </div>
                      <div className="space-y-4 leading-relaxed">
                        <p>
                          Proporcionar una educación de calidad que promueva la formación integral de nuestros estudiantes, desarrollando sus capacidades académicas, técnicas, artísticas y deportivas.
                        </p>
                        <p>
                          Fomentar el crecimiento personal de cada estudiante a través de valores como el respeto, la responsabilidad, la solidaridad y el compromiso con su comunidad.
                        </p>
                        <p>
                          Crear un ambiente educativo inclusivo y estimulante que inspire el aprendizaje continuo, el pensamiento crítico y la innovación, preparando ciudadanos responsables y competentes para la sociedad del siglo XXI.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-16"
              >
                <Card className="shadow-lg">
                  <CardContent className="p-8 md:p-12 text-center">
                    <h3 className="text-2xl font-semibold mb-4">
                      Nuestro compromiso
                    </h3>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                      Trabajamos cada día para hacer realidad nuestra visión y cumplir nuestra misión, 
                      construyendo un futuro mejor para nuestros estudiantes y nuestra comunidad.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default VisionMisionPage;