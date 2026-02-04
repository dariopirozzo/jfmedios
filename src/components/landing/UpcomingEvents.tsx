import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Countdown from "./Countdown";

// Mock data - será reemplazado por datos de la base de datos
const mockEvents = [
  {
    id: 1,
    title: "Noche de Rock en Vivo",
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    location: "Teatro Principal",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800",
    isNext: true,
  },
  {
    id: 2,
    title: "Festival Electrónico",
    date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    location: "Parque Central",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
    isNext: false,
  },
  {
    id: 3,
    title: "Fiesta de Año Nuevo",
    date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    location: "Club Nocturno Elite",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
    isNext: false,
  },
];

const UpcomingEvents = () => {
  const nextEvent = mockEvents.find((e) => e.isNext);
  const otherEvents = mockEvents.filter((e) => !e.isNext);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
    });
  };

  return (
    <section id="eventos" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl mb-4">
            Próximos <span className="text-primary">Eventos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            No te pierdas nuestras próximas experiencias
          </p>
        </motion.div>

        {/* Featured Event with Countdown */}
        {nextEvent && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="overflow-hidden bg-card border-primary/30 glow-bordo">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={nextEvent.image}
                    alt={nextEvent.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <span className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">
                    Próximo Evento
                  </span>
                  <h3 className="font-display text-4xl md:text-5xl mb-4">
                    {nextEvent.title}
                  </h3>
                  <div className="flex flex-col gap-2 mb-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="capitalize">{formatDate(nextEvent.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{nextEvent.location}</span>
                    </div>
                  </div>
                  <Countdown targetDate={nextEvent.date} />
                </CardContent>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Other Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-display text-2xl mb-3">{event.title}</h3>
                  <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="capitalize">{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
