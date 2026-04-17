import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GalleryImage from '@/components/GalleryImage';
import ImageModal from '@/components/ImageModal';

function GaleriaPage() {
  const [activeFilter, setActiveFilter] = useState('Todas');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1632466722833-568a49d7b1f7?w=800&h=600&fit=crop',
      title: 'Edificio principal',
      category: 'Instalaciones'
    },
    {
      url: 'https://images.unsplash.com/photo-1507131679781-70be42a343e7?w=800&h=600&fit=crop',
      title: 'Sala de clases moderna',
      category: 'Aulas'
    },
    {
      url: 'https://images.unsplash.com/photo-1677730277400-097e5da58a56?w=800&h=600&fit=crop',
      title: 'Laboratorio de ciencias',
      category: 'Aulas'
    },
    {
      url: 'https://images.unsplash.com/photo-1538166652942-06fdb3612723?w=800&h=600&fit=crop',
      title: 'Estudiantes en clase',
      category: 'Estudiantes'
    },
    {
      url: 'https://images.unsplash.com/photo-1632466722833-568a49d7b1f7?w=800&h=600&fit=crop',
      title: 'Patio central',
      category: 'Instalaciones'
    },
    {
      url: 'https://images.unsplash.com/photo-1507131679781-70be42a343e7?w=800&h=600&fit=crop',
      title: 'Biblioteca',
      category: 'Instalaciones'
    },
    {
      url: 'https://images.unsplash.com/photo-1677730277400-097e5da58a56?w=800&h=600&fit=crop',
      title: 'Actividad deportiva',
      category: 'Actividades'
    },
    {
      url: 'https://images.unsplash.com/photo-1538166652942-06fdb3612723?w=800&h=600&fit=crop',
      title: 'Ceremonia de graduación',
      category: 'Actividades'
    },
    {
      url: 'https://images.unsplash.com/photo-1632466722833-568a49d7b1f7?w=800&h=600&fit=crop',
      title: 'Sala de computación',
      category: 'Aulas'
    }
  ];

  const categories = ['Todas', 'Instalaciones', 'Aulas', 'Estudiantes', 'Actividades'];

  const filteredImages = activeFilter === 'Todas'
    ? images
    : images.filter(image => image.category === activeFilter);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePrevious = () => {
    const currentIndex = filteredImages.findIndex(img => img.url === selectedImage.url);
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    setSelectedImage(filteredImages[previousIndex]);
  };

  const handleNext = () => {
    const currentIndex = filteredImages.findIndex(img => img.url === selectedImage.url);
    const nextIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const currentIndex = selectedImage ? filteredImages.findIndex(img => img.url === selectedImage.url) : -1;

  return (
    <>
      <Helmet>
        <title>Galería - Liceo Polivalente Gabriela Mistral</title>
        <meta name="description" content="Explora nuestra galería de fotos con imágenes de instalaciones, aulas, estudiantes y actividades del Liceo Polivalente Gabriela Mistral." />
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
                  Galería de fotos
                </h1>
                <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Conoce nuestras instalaciones y actividades
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

              <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="break-inside-avoid"
                  >
                    <GalleryImage
                      image={image}
                      onClick={() => handleImageClick(image)}
                    />
                  </motion.div>
                ))}
              </div>

              {filteredImages.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No hay imágenes en esta categoría
                  </p>
                </div>
              )}
            </div>
          </section>
        </main>

        <Footer />

        <ImageModal
          image={selectedImage}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onPrevious={handlePrevious}
          onNext={handleNext}
          hasPrevious={currentIndex > 0}
          hasNext={currentIndex < filteredImages.length - 1}
        />
      </div>
    </>
  );
}

export default GaleriaPage;