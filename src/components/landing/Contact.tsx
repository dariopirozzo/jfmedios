import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, MessageCircle, Send, Instagram, Facebook, Youtube } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es requerido").max(100, "Máximo 100 caracteres"),
  email: z.string().trim().email("Email inválido").max(255, "Máximo 255 caracteres"),
  message: z.string().trim().min(1, "El mensaje es requerido").max(1000, "Máximo 1000 caracteres"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    // Simular envío
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const openWhatsApp = () => {
    const phone = "5491112345678"; // Reemplazar con número real
    const message = encodeURIComponent("Hola! Me interesa obtener información sobre sus servicios de eventos.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section id="contacto" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl mb-4">
            <span className="text-primary">Contáctanos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Estamos listos para hacer realidad tu próximo evento
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card border-border">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background border-border focus:border-primary"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Tu email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background border-border focus:border-primary"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <Textarea
                      placeholder="Tu mensaje"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">{errors.message}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-bordo hover:scale-[1.02] transition-transform"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* WhatsApp Button */}
            <Button
              onClick={openWhatsApp}
              size="lg"
              className="w-full bg-green-600 hover:bg-green-700 text-lg py-6"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Contactar por WhatsApp
            </Button>

            <Card className="bg-card border-border">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:contacto@jfmedios.com" className="text-muted-foreground hover:text-primary transition-colors">
                      contacto@jfmedios.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Teléfono</p>
                    <a href="tel:+5491112345678" className="text-muted-foreground hover:text-primary transition-colors">
                      +54 9 11 1234-5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/20">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Ubicación</p>
                    <p className="text-muted-foreground">
                      Buenos Aires, Argentina
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <p className="font-semibold mb-4">Síguenos en redes</p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
                  >
                    <Facebook className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors"
                  >
                    <Youtube className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
