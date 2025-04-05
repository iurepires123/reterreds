import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

const CTA = () => {
  const phoneNumber = "5562985586999"; // Número com código do país (55) + DDD (62) + número
  const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para redes de proteção.");
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="bg-brand-blue py-16">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl">
            Proteção e tranquilidade para sua família. Entre em contato hoje mesmo!
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl">
            Não espere por acidentes para proteger quem você ama. Solicite um orçamento gratuito via WhatsApp e descubra a melhor solução para suas necessidades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-brand-blue hover:bg-gray-100"
              onClick={handleWhatsAppClick}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Fale conosco pelo WhatsApp
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/10"
              onClick={handleWhatsAppClick}
            >
              Solicitar orçamento agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
