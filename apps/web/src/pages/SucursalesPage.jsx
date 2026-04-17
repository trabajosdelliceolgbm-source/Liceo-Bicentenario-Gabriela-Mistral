import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function SucursalesPage() {
  const branches = [
    {
      name: 'Sede Principal',
      address: 'Bernardo O\'Higgins #306, Máfil',
      phone: '(63) 241 1246',
      students: '487 estudiantes',
      status: 'Activa',
      description: 'Nuestra sede principal cuenta con instalaciones modernas y equipamiento tecnológico de última generación.'
    },
    {
      name: 'Sede Anexo Norte',
      address: 'Av. Los Aromos #152, Máfil',
      phone: '(63) 241 1247',
      students: '213 estudiantes',
      status: 'Activa',
      description: 'Sede especializada en formación técnico-profesional con talleres equipados para diversas especialidades.'
    },
    {
      name: 'Sede Los Ríos',
      address: 'Calle Gabriela Mistral #89, Máfil',
      phone: '(63) 241 1248',
      students: 'Próximamente',
      status: 'En construcción',
      description: 'Nueva sede en construcción que ampliará nuestra capacidad y oferta educativa para la comunidad.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sucursales - Liceo Polivalente Gabriela Mistral</title>
        <meta name="description" content="Conoce nuestras sedes y ubicaciones del Liceo Polivalente Gabriela Mistral en Máfil, Región de Los Ríos." />
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
                  Nuestras sucursales
                </h1>
                <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Presencia educativa en toda la comuna de Máfil
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {branches.map((branch, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className={`h-full transition-all duration-300 hover:shadow-xl ${
                      branch.status === 'Activa' ? '' : 'opacity-90'
                    }`}>
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <h2 className="text-2xl font-bold">{branch.name}</h2>
                          <Badge variant={branch.status === 'Activa' ? 'default' : 'secondary'}>
                            {branch.status}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {branch.description}
                        </p>

                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{branch.address}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-secondary flex-shrink-0" />
                            <span className="text-foreground">{branch.phone}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Users className="h-5 w-5 text-secondary flex-shrink-0" />
                            <span className="text-foreground">{branch.students}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-16"
              >
                <Card className="shadow-lg bg-secondary text-secondary-foreground">
                  <CardContent className="p-8 md:p-12 text-center">
                    <h3 className="text-2xl font-semibold mb-4">
                      Expansión continua
                    </h3>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto opacity-90">
                      Estamos comprometidos con ampliar nuestra cobertura educativa para servir mejor a la comunidad de Máfil y sus alrededores, 
                      ofreciendo educación de calidad accesible para todos.
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

export default SucursalesPage;