import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Mock data
const mockGallery = [
  { id: 1, url: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800", type: "image" },
  { id: 2, url: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800", type: "image" },
  { id: 3, url: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800", type: "image" },
  { id: 4, url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800", type: "image" },
  { id: 5, url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800", type: "image" },
  { id: 6, url: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800", type: "image" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-20 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl mb-4">
            <span className="text-primary">Galería</span> de Eventos
          </h2>
          <p className="text-muted-foreground text-lg">
            Revive los mejores momentos
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {mockGallery.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(item.url)}
            >
              <img
                src={item.url}
                alt={`Galería ${item.id}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-card hover:bg-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Vista ampliada"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
