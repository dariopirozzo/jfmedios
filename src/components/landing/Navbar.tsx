import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string, source: string) => {
    trackEvent("navigation_section_click", {
      section_id: id,
      source,
    });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    trackEvent("navigation_logo_click", {
      source: "navbar",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => {
      const nextState = !prevState;
      trackEvent("navigation_mobile_menu_toggle", {
        is_open: nextState,
      });
      return nextState;
    });
  };

  const navItems = [
    { label: "Eventos", id: "eventos" },
    { label: "Galería", id: "galeria" },
    { label: "Testimonios", id: "testimonios" },
    { label: "Contacto", id: "contacto" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="flex items-center"
          aria-label="JF Medios"
        >
          <img
            src="/jfmedios-logo-sin-bg.png"
            alt="JF Medios"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id, "navbar_desktop_menu")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              {item.label}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection("contacto", "navbar_desktop_quote_button")}
            className="gradient-bordo"
          >
            Cotizar Evento
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id, "navbar_mobile_menu")}
                className="block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contacto", "navbar_mobile_quote_button")}
              className="w-full gradient-bordo mt-4"
            >
              Cotizar Evento
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
