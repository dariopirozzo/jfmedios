import { Instagram, Facebook, Mail, Phone } from "lucide-react";

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
            <div className="flex items-center mb-4">
              <img
                src="/jfmedios-logo-sin-bg.png"
                alt="JF Medios"
                className="h-[2.6rem] w-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Somos una agencia de eventos dedicada a crear experiencias inolvidables. 
              Desde conciertos hasta fiestas corporativas, hacemos realidad tus ideas.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/jfmedios?igsh=czE5cGRzbWpldzR6"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1CvwnPfC1j/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
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
                <a
                  href="mailto:jfanucchimedios@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  jfanucchimedios@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a
                  href="tel:+541151105000"
                  className="hover:text-primary transition-colors"
                >
                  +54 11 5110 5000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p className="flex flex-wrap items-center justify-center gap-2">
            <span>© {currentYear} JFMedios. Todos los derechos reservados.</span>
            <span className="text-muted-foreground/60">|</span>
            <a
              href="https://www.devstudiocode.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            >
              <span>Powered by DevStudio</span>
              <img
                src="/logo_transparent.png"
                alt="DevStudio"
                className="h-5 w-auto object-contain"
              />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
