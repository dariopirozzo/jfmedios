import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';
import Countdown from './Countdown';

// Mock data - será reemplazado por datos de la base de datos
const mockEvents = [
  {
    id: 1,
    title: 'Cazadoras Doradas Guerreras K-pop en vivo',
    date: new Date(2026, 1, 26, 18, 0, 0),
    location: 'Teatro Sociedad Española, Suipacha',
    image: '/guerreras-kpop-flyer.jpeg',
    isNext: true,
  },
  {
    id: 2,
    title: 'Cazadoras Doradas Guerreras K-pop en vivo',
    date: new Date(2026, 2, 7, 19, 0, 0),
    location: 'Teatro Italiano de Lobos',
    image: '/guerreras-kpop-flyer.jpeg',
    isNext: false,
  },
  {
    id: 4,
    title: 'Campeonato Horseball Open 2026',
    date: new Date(2026, 2, 13, 18, 0, 0),
    location: 'Club de Campo La Pintada, Gral. Las Heras',
    image: encodeURI('/eventos/WhatsApp Image 2026-02-17 at 19.08.40.jpeg'),
    isNext: false,
  },
  {
    id: 3,
    title: 'Cazadoras Doradas Guerreras K-pop en vivo',
    date: new Date(2026, 3, 11, 18, 0, 0),
    location: 'Cine Teatro de la Sociedad Española de General Las Heras',
    image: '/guerreras-kpop-flyer.jpeg',
    isNext: false,
  },
];

const UpcomingEvents = () => {
  const upcomingEvents = [...mockEvents]
    .filter((event) => event.date.getTime() > Date.now())
    .sort((a, b) => a.date.getTime() - b.date.getTime());
  const nextEvent = upcomingEvents[0];
  const otherEvents = upcomingEvents.slice(1);
  const ticketUrl = 'https://www.entradaweb.com.ar/evento/7231a537/step/1';

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
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
                    className="absolute inset-0 w-full h-full object-contain bg-black"
                  />
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
                      <span className="capitalize">
                        {formatDate(nextEvent.date)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{nextEvent.location}</span>
                    </div>
                  </div>
                  <Countdown targetDate={nextEvent.date} />
                  <div className="mt-6 flex justify-end">
                    <Button asChild className="gradient-bordo">
                      <a
                        href={ticketUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() =>
                          trackEvent('upcoming_event_ticket_click', {
                            event_id: nextEvent.id,
                            event_title: nextEvent.title,
                            source: 'upcoming_events',
                          })
                        }
                      >
                        Comprar entradas
                      </a>
                    </Button>
                  </div>
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
              className="h-full"
            >
              <Card className="h-full overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group flex flex-col">
                <div className="relative h-56 md:h-64 overflow-hidden bg-black">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <CardContent className="p-6 flex-1">
                  <div className="flex flex-col gap-3 min-h-[11rem]">
                    <h3 className="font-display text-2xl leading-tight min-h-[4.5rem]">
                      {event.title}
                    </h3>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground min-h-[5rem]">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="capitalize">
                          {formatDate(event.date)}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="leading-snug">{event.location}</span>
                      </div>
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
