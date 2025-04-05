import { MessageSquare } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5562985586999"; // Número com código do país (55) + DDD (62) + número
  const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para redes de proteção.");
  
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
