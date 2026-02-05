import { MessageCircle } from "lucide-react";

const WhatsAppFloating = () => {
  const phone = "5491151105000";
  const message = encodeURIComponent(
    "Hola! Me interesa obtener información sobre sus servicios de eventos.",
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-green-700"
    >
      <MessageCircle className="h-5 w-5" />
      WhatsApp
    </a>
  );
};

export default WhatsAppFloating;
