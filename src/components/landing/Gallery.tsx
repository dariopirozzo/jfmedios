import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const galleryFiles = [
  "WhatsApp Image 2026-02-04 at 21.02.34 (1).jpeg",
  "WhatsApp Image 2026-02-04 at 21.02.34.jpeg",
  "WhatsApp Image 2026-02-04 at 21.02.35 (1).jpeg",
  "WhatsApp Image 2026-02-04 at 21.02.35 (2).jpeg",
  "WhatsApp Image 2026-02-04 at 21.02.35 (3).jpeg",
  "WhatsApp Image 2026-02-04 at 21.27.32 (1).jpeg",
  "WhatsApp Image 2026-02-04 at 21.27.32.jpeg",
  "WhatsApp Image 2026-02-04 at 21.33.02.jpeg",
  "WhatsApp Image 2026-02-04 at 21.34.28.jpeg",
  "WhatsApp Image 2026-02-04 at 21.38.20.jpeg",
  "WhatsApp Image 2026-02-04 at 21.47.21 (1).jpeg",
  "WhatsApp Image 2026-02-04 at 22.02.18.jpeg",
];

const mockGallery = galleryFiles.map((file, index) => ({
  id: index + 1,
  url: encodeURI(`/galeria/${file}`),
  type: "image",
}));

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
                className="w-full h-full object-contain bg-black transition-transform duration-500 group-hover:scale-105"
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
