import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const pastEvents = [
  {
    id: 1,
    image: encodeURI('/eventos/WhatsApp Image 2026-02-04 at 21.02.35.jpeg'),
    titile: 'Guerreras del K-POP',
    date: '29 de diciembre de 2025',
  },
  {
    id: 2,
    image: encodeURI('/eventos/WhatsApp Image 2026-02-04 at 21.32.41.jpeg'),
    titile: 'JAF Nocivo',
    date: '5 de agosto de 2023',
  },
  {
    id: 3,
    image: encodeURI('/eventos/WhatsApp Image 2026-02-04 at 21.39.46.jpeg'),
    titile: 'Reina Madre Queen',
    date: '9 de diciembre de 2023',
  },
  {
    id: 4,
    image: encodeURI('/eventos/WhatsApp Image 2026-02-04 at 21.47.21.jpeg'),
    titile: 'Norberto ALKALA',
    date: '6 de julio de 2024',
  },
  {
    id: 5,
    image: encodeURI('/eventos/WhatsApp Image 2026-02-04 at 22.07.04.jpeg'),
    titile: '45 años RSO Marcos paz',
    date: '31 de mayo de 2025',
  },
  {
    id: 6,
    image: encodeURI('/eventos/WhatsApp Image 2026-02-04 at 22.08.45.jpeg'),
    titile: 'Gato Peters, MasterGato',
    date: '15 de octubre de 2022',
  },
  {
    id: 7,
    image: encodeURI('/eventos/WhatsApp Image 2026-02-04 at 22.09.33.jpeg'),
    titile: 'Tormenta',
    date: '26 de agosto de 2023',
  },
  {
    id: 8,
    image: encodeURI('/eventos/WhatsApp Image 2026-02-04 at 22.15.55.jpeg'),
    titile: 'Daniel Lezica junto a su hijo Alan / Fernando de Madariaga',
    date: '7 de octubre de 2023',
  },
  {
    id: 9,
    image: encodeURI('/eventos/WhatsApp Image 2026-02-04 at 22.16.54.jpeg'),
    titile: `La Juan D'Arienzo`,
    date: '28 de octubre de 2023',
  },
  {
    id: 10,
    image: encodeURI('/eventos/WhatsApp Image 2026-02-04 at 22.20.48.jpeg'),
    titile: 'Los manceros santiagueños de Leocadio Torres',
    date: '16 de Marzo de 2024',
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
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {pastEvents.map((event, index) => (
              <CarouselItem
                key={event.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group flex flex-col">
                    <div className="relative h-56 overflow-hidden shrink-0">
                      <img
                        src={event.image}
                        alt={event.titile}
                        className="w-full h-full object-contain bg-black group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="flex flex-col gap-2 h-[5.5rem]">
                        <h3 className="font-display text-2xl leading-tight h-[3.5rem] overflow-hidden">
                          {event.titile}
                        </h3>
                        <p className="text-sm text-primary/80 h-[1.25rem] overflow-hidden">
                          {event.date}
                        </p>
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

export default PastEvents;
