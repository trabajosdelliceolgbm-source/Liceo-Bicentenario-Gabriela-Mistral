import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StarRating from '@/components/StarRating';
import ReviewCard from '@/components/ReviewCard';

function OpinionesPage() {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    rating: 0,
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const storedReviews = localStorage.getItem('liceo_reviews');
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    } else {
      const defaultReviews = [
        {
          name: 'María González',
          rating: 5,
          comment: 'Excelente institución educativa. Los profesores son muy dedicados y el ambiente es muy acogedor.',
          date: '15 Mar 2026'
        },
        {
          name: 'Carlos Muñoz',
          rating: 4,
          comment: 'Mi hijo ha aprendido mucho en este liceo. Las instalaciones son modernas y el enfoque en tecnología es destacable.',
          date: '8 Mar 2026'
        },
        {
          name: 'Valentina Rojas',
          rating: 5,
          comment: 'Como egresada, puedo decir que la formación que recibí aquí fue fundamental para mi desarrollo profesional.',
          date: '2 Mar 2026'
        }
      ];
      setReviews(defaultReviews);
      localStorage.setItem('liceo_reviews', JSON.stringify(defaultReviews));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRatingChange = (rating) => {
    setFormData({
      ...formData,
      rating
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.rating || !formData.comment) {
      toast.error('Por favor completa todos los campos');
      return;
    }

    setIsSubmitting(true);

    const newReview = {
      ...formData,
      date: new Date().toLocaleDateString('es-CL', { day: 'numeric', month: 'short', year: 'numeric' })
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('liceo_reviews', JSON.stringify(updatedReviews));

    toast.success('Opinión agregada correctamente');
    setFormData({ name: '', rating: 0, comment: '' });
    setIsSubmitting(false);
  };

  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : 0;

  return (
    <>
      <Helmet>
        <title>Opiniones - Liceo Polivalente Gabriela Mistral</title>
        <meta name="description" content="Lee las opiniones de nuestra comunidad educativa y comparte tu experiencia en el Liceo Polivalente Gabriela Mistral." />
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
                  Opiniones
                </h1>
                <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Lo que dice nuestra comunidad educativa
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-16"
              >
                <Card className="shadow-lg bg-secondary text-secondary-foreground">
                  <CardContent className="p-8 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div>
                        <p className="text-5xl font-bold">{averageRating}</p>
                        <p className="text-sm opacity-90 mt-1">de 5 estrellas</p>
                      </div>
                      <StarRating rating={Math.round(averageRating)} readonly size={32} />
                      <p className="opacity-90">Basado en {reviews.length} opiniones</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="lg:col-span-1"
                >
                  <Card className="shadow-lg sticky top-24">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-semibold mb-6">Comparte tu opinión</h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <Label htmlFor="name">Nombre</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-2 text-gray-900 placeholder:text-gray-400"
                            placeholder="Tu nombre"
                            required
                          />
                        </div>
                        <div>
                          <Label>Calificación</Label>
                          <div className="mt-2">
                            <StarRating
                              rating={formData.rating}
                              onRatingChange={handleRatingChange}
                              size={32}
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="comment">Comentario</Label>
                          <Textarea
                            id="comment"
                            name="comment"
                            value={formData.comment}
                            onChange={handleChange}
                            className="mt-2 min-h-[120px] text-gray-900 placeholder:text-gray-400"
                            placeholder="Comparte tu experiencia..."
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-200 active:scale-[0.98]"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Enviando...' : 'Publicar opinión'}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>

                <div className="lg:col-span-2 space-y-6">
                  {reviews.map((review, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ReviewCard review={review} />
                    </motion.div>
                  ))}
                  {reviews.length === 0 && (
                    <Card>
                      <CardContent className="p-12 text-center">
                        <p className="text-muted-foreground">
                          Aún no hay opiniones. Sé el primero en compartir tu experiencia.
                        </p>
                      </CardContent>
                    </Card>
                  )}
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

export default OpinionesPage;