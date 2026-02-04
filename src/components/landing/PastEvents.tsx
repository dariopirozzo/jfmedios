import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Mock data
const mockPastEvents = [
  {
    id: 1,
    title: "Festival de Verano 2024",
    date: "15 de Enero, 2024",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
    attendees: 5000,
  },
  {
    id: 2,
    title: "Noche Latina",
    date: "20 de Diciembre, 2023",
    image: "https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=800",
    attendees: 2000,
  },
  {
    id: 3,
    title: "Rock Fest",
    date: "10 de Noviembre, 2023",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
    attendees: 8000,
  },
  {
    id: 4,
    title: "Electro Night",
    date: "5 de Octubre, 2023",
    image: "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?w=800",
    attendees: 3500,
  },
];

const PastEvents = () => {
  return (
    <section id="eventos-pasados" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl mb-4">
            Eventos <span className="text-primary">Pasados</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Un recorrido por nuestras experiencias anteriores
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
            {mockPastEvents.map((event, index) => (
              <CarouselItem key={event.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="text-sm text-primary font-semibold">
                          {event.attendees.toLocaleString()} asistentes
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-display text-2xl mb-2">{event.title}</h3>
                      <p className="text-muted-foreground text-sm">{event.date}</p>
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

export default PastEvents;
