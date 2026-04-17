import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, Award, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
function HomePage() {
  const highlights = [{
    icon: GraduationCap,
    title: 'Excelencia académica',
    description: 'Programas educativos de alta calidad que preparan a nuestros estudiantes para el futuro.'
  }, {
    icon: Users,
    title: 'Comunidad comprometida',
    description: 'Un ambiente inclusivo donde cada estudiante es valorado y apoyado en su desarrollo.'
  }, {
    icon: Award,
    title: 'Reconocimiento regional',
    description: 'Destacados logros en competencias académicas y deportivas a nivel regional.'
  }, {
    icon: BookOpen,
    title: 'Formación integral',
    description: 'Desarrollo de habilidades técnicas, artísticas y deportivas junto a la formación académica.'
  }];
  return <>
      <Helmet>
        <title>Liceo Polivalente Gabriela Mistral - Innovación y Educación para el Futuro</title>
        <meta name="description" content="Institución educativa en Máfil comprometida con la excelencia académica y la formación integral de nuestros estudiantes." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <img src="https://images.unsplash.com/photo-1465271699506-28d5e29a0394" alt="Edificio del Liceo Polivalente Gabriela Mistral" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.h1 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{
              letterSpacing: '-0.02em'
            }}>
                Innovación y Educación para el Futuro
              </motion.h1>
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="mt-6 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Formando líderes comprometidos con el desarrollo de nuestra comunidad
              </motion.p>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }} className="mt-10">
                <Link to="/contacto">
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 transition-all duration-200 hover:scale-105 active:scale-[0.98]">
                    Únete a nuestra comunidad
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

          <section className="py-20 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6
            }} className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Bienvenidos al Liceo Polivalente Gabriela Mistral
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Somos una institución educativa ubicada en Máfil, Región de Los Ríos, dedicada a formar estudiantes con valores sólidos y preparación académica de excelencia.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {highlights.map((highlight, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }}>
                    <Card className="h-full transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-secondary rounded-xl">
                            <highlight.icon className="h-6 w-6 text-secondary-foreground" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>)}
              </div>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.6,
              delay: 0.4
            }} className="mt-12 text-center">
                <Link to="/about">
                  <Button variant="outline" size="lg" className="transition-all duration-200 hover:scale-105 active:scale-[0.98]">
                    Conoce más sobre nosotros
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>;
}
export default HomePage;