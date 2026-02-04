import { Instagram, Facebook, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-4xl text-gradient">JF</span>
              <span className="font-display text-2xl">MEDIOS</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Somos una agencia de eventos dedicada a crear experiencias inolvidables. 
              Desde conciertos hasta fiestas corporativas, hacemos realidad tus ideas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("eventos")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Próximos Eventos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("galeria")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Galería
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonios")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Testimonios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:contacto@jfmedios.com" className="hover:text-primary transition-colors">
                  contacto@jfmedios.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+5491112345678" className="hover:text-primary transition-colors">
                  +54 9 11 1234-5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>© {currentYear} JFMedios. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
