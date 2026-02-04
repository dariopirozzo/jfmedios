import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Mock data
const mockTestimonials = [
  {
    id: 1,
    name: "María García",
    role: "Organizadora de Bodas",
    content: "JFMedios superó todas nuestras expectativas. La producción del evento fue impecable y la atención al detalle increíble.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Director de Marketing",
    content: "Profesionales de primera. Cada evento que organizan es una experiencia única que deja a todos con ganas de más.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Empresaria",
    content: "La mejor decisión que tomamos fue contratar a JFMedios. Nuestro evento corporativo fue un éxito rotundo.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
  },
  {
    id: 4,
    name: "Luis Fernández",
    role: "Músico",
    content: "Como artista, he trabajado con muchas productoras, pero JFMedios destaca por su profesionalismo y pasión.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl mb-4">
            Lo que dicen <span className="text-primary">nuestros clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Experiencias que hablan por sí solas
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {mockTestimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
                      <p className="text-foreground/90 mb-6 flex-grow leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                        />
                        <div>
                          <p className="font-semibold text-foreground">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 border-primary/50 hover:bg-primary hover:text-primary-foreground" />
          <CarouselNext className="hidden md:flex -right-4 border-primary/50 hover:bg-primary hover:text-primary-foreground" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
