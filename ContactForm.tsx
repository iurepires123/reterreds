import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, Clock, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const phoneNumber = "5562985586999"; // Número com código do país (55) + DDD (62) + número
  const message = encodeURIComponent("Olá! Gostaria de solicitar um orçamento para redes de proteção.");
  
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="contato" className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Entre em <span className="text-brand-blue">Contato</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Estamos prontos para te atender e oferecer a melhor solução para suas necessidades. 
              Entre em contato pelos nossos canais de atendimento ou clique no botão do WhatsApp para um orçamento rápido.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue-light rounded-full p-3">
                  <Phone className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Telefone</h3>
                  <a href="tel:+5562985586999" className="text-gray-600 hover:text-brand-blue">(62) 9 8558-6999</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue-light rounded-full p-3">
                  <MessageSquare className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">WhatsApp</h3>
                  <a 
                    href={`https://wa.me/${phoneNumber}?text=${message}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-600"
                  >
                    (62) 9 8558-6999
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue-light rounded-full p-3">
                  <Mail className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <a href="mailto:reterredes@hotmail.com" className="text-gray-600 hover:text-brand-blue">reterredes@hotmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue-light rounded-full p-3">
                  <MapPin className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Endereço</h3>
                  <p className="text-gray-600">Goiânia, Goiás - Brasil</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue-light rounded-full p-3">
                  <Clock className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Horário de Atendimento</h3>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-600">Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Solicite um orçamento pelo WhatsApp</h3>
            <p className="text-gray-600 mb-6">
              Clique no botão abaixo para iniciar uma conversa diretamente com nossa equipe de atendimento. 
              Responderemos o mais rápido possível com as melhores soluções para você.
            </p>
            
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-6 flex items-center justify-center gap-2"
            >
              <MessageSquare className="h-6 w-6" />
              Solicitar orçamento via WhatsApp
            </Button>
            
            <p className="text-sm text-gray-500 text-center mt-4">
              Atendimento rápido e personalizado
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
