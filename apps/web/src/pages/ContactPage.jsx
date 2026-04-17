import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor completa todos los campos');
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      toast.success('Mensaje enviado correctamente');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Bernardo O\'Higgins #306, Máfil, Región de Los Ríos, Chile'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '(63) 241 1246'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contacto@liceogm.cl'
    },
    {
      icon: Clock,
      title: 'Horario',
      content: 'Lunes a Viernes: 8:00 - 17:00'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contacto - Liceo Polivalente Gabriela Mistral</title>
        <meta name="description" content="Contáctanos para más información sobre el Liceo Polivalente Gabriela Mistral. Estamos ubicados en Máfil, Región de Los Ríos." />
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
                  Contacto
                </h1>
                <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Estamos aquí para responder tus consultas
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="shadow-lg">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <Label htmlFor="name">Nombre completo</Label>
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
                          <Label htmlFor="email">Correo electrónico</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-2 text-gray-900 placeholder:text-gray-400"
                            placeholder="tu@email.com"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="message">Mensaje</Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-2 min-h-[150px] text-gray-900 placeholder:text-gray-400"
                            placeholder="Escribe tu mensaje aquí..."
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-200 active:scale-[0.98]"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-semibold mb-6">Información de contacto</h2>
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-secondary rounded-xl">
                            <info.icon className="h-6 w-6 text-secondary-foreground" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            <p className="text-muted-foreground">{info.content}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="shadow-lg overflow-hidden">
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
                        title="Ubicación del Liceo Polivalente Gabriela Mistral"
                      ></iframe>
                    </div>
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

export default ContactPage;