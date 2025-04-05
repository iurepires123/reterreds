import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ShieldCheck } from "lucide-react";
import ImagePreview from "./ImagePreview";

const Hero = () => {
  const [showImagePreview, setShowImagePreview] = useState(false);

  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("servicos");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-brand-blue-light via-white to-white">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue font-medium text-sm">
            <ShieldCheck className="mr-2 h-4 w-4" />
            Segurança para sua família
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Redes de Proteção de <span className="text-brand-blue">Alta Qualidade</span> em Goiânia
          </h1>
          <p className="text-lg text-gray-700 max-w-lg">
            Protegemos o que mais importa com redes de proteção para apartamentos, piscinas, playgrounds, quadras esportivas e varais personalizados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-brand-blue hover:bg-brand-blue-dark text-white font-medium px-6"
              onClick={handleScrollToContact}
            >
              Solicitar orçamento
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-brand-blue text-brand-blue hover:bg-brand-blue-light"
              onClick={handleScrollToServices}
            >
              Ver serviços
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white text-xs">
                ⭐
              </div>
              <div className="w-8 h-8 rounded-full bg-brand-blue-dark flex items-center justify-center text-white text-xs">
                ⭐
              </div>
              <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-white text-xs">
                ⭐
              </div>
            </div>
            <div className="text-sm text-gray-700">
              <span className="font-bold">4.9/5</span> - +20mil clientes satisfeitos
            </div>
          </div>
        </div>
        <div className="relative h-64 md:h-auto">
          <img
            src="/images/hero-gradient.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-lg z-0"
          />
          <div className="relative w-full h-full flex items-center justify-center z-10">
            <img 
              src="/images/hero.png" 
              alt="Redes de proteção instaladas" 
              className="w-full max-w-[800px] md:h-[400px] rounded-lg shadow-lg object-cover cursor-pointer"
              onClick={() => setShowImagePreview(true)}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block z-20">
            <div className="text-brand-blue font-bold">15+ anos</div>
            <div className="text-sm text-gray-600">de experiência</div>
          </div>
        </div>
      </div>

      {/* Modal para visualização da imagem */}
      <ImagePreview
        isOpen={showImagePreview}
        onClose={() => setShowImagePreview(false)}
        imageSrc="/images/hero.png"
        imageAlt="Redes de proteção instaladas"
      />
    </section>
  );
};

export default Hero;
