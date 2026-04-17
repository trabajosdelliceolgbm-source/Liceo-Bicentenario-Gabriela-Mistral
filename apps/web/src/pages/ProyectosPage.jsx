import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

function ProyectosPage() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const projects = [
    {
      title: 'Portal Web Educativo',
      description: 'Plataforma web desarrollada por estudiantes de 4° medio para facilitar el acceso a recursos educativos digitales.',
      category: 'Tecnología',
      author: 'Valentina Rojas',
      image: 'https://images.unsplash.com/photo-1565841327798-694bc2074762?w=800&h=600&fit=crop'
    },
    {
      title: 'Sistema de Gestión Escolar',
      description: 'Aplicación web para administrar asistencia, notas y comunicación entre profesores y apoderados.',
      category: 'Tecnología',
      author: 'Diego Silva',
      image: 'https://images.unsplash.com/photo-1565841327798-694bc2074762?w=800&h=600&fit=crop'
    },
    {
      title: 'Huerto Sustentable',
      description: 'Proyecto de agricultura urbana que promueve la alimentación saludable y el cuidado del medio ambiente.',
      category: 'Ciencias',
      author: 'María González',
      image: 'https://images.unsplash.com/photo-1565841327798-694bc2074762?w=800&h=600&fit=crop'
    },
    {
      title: 'Robótica Educativa',
      description: 'Construcción de robots programables para resolver desafíos de automatización y eficiencia energética.',
      category: 'Tecnología',
      author: 'Carlos Muñoz',
      image: 'https://images.unsplash.com/photo-1565841327798-694bc2074762?w=800&h=600&fit=crop'
    },
    {
      title: 'Mural Comunitario',
      description: 'Obra artística colaborativa que representa la historia y cultura de Máfil, creada por estudiantes de arte.',
      category: 'Arte',
      author: 'Lucía Torres',
      image: 'https://images.unsplash.com/photo-1565841327798-694bc2074762?w=800&h=600&fit=crop'
    },
    {
      title: 'Investigación Hídrica',
      description: 'Estudio sobre la calidad del agua en ríos locales y propuestas de conservación del recurso hídrico.',
      category: 'Ciencias',
      author: 'Anika Bergström',
      image: 'https://images.unsplash.com/photo-1565841327798-694bc2074762?w=800&h=600&fit=crop'
    }
  ];

  const categories = ['Todos', 'Tecnología', 'Ciencias', 'Arte'];

  const filteredProjects = activeFilter === 'Todos'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Proyectos - Liceo Polivalente Gabriela Mistral</title>
        <meta name="description" content="Descubre los proyectos innovadores desarrollados por nuestros estudiantes en tecnología, ciencias y arte." />
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
                className="text-center mb-12"
              >
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  Proyectos estudiantiles
                </h1>
                <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Innovación y creatividad de nuestros estudiantes
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-3 mb-12"
              >
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeFilter === category ? 'default' : 'outline'}
                    onClick={() => setActiveFilter(category)}
                    className="transition-all duration-200 active:scale-[0.98]"
                  >
                    {category}
                  </Button>
                ))}
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No hay proyectos en esta categoría
                  </p>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ProyectosPage;