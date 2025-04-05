import { useState } from "react";
import { Check } from "lucide-react";
import ImagePreview from "./ImagePreview";

const benefits = [
  {
    title: "Material de alta qualidade",
    description: "Utilizamos apenas redes de proteção de alta resistência e durabilidade, testadas e aprovadas conforme as normas técnicas brasileiras."
  },
  {
    title: "Instalação profissional",
    description: "Nossa equipe é treinada e experiente, garantindo uma instalação perfeita e segura em qualquer tipo de estrutura."
  },
  {
    title: "Orçamento sem compromisso",
    description: "Oferecemos visita técnica gratuita para avaliação do ambiente e elaboração de um orçamento detalhado."
  },
  {
    title: "Garantia estendida",
    description: "Nossos serviços e produtos possuem garantia superior à exigida por lei, para sua tranquilidade."
  },
  {
    title: "Atendimento personalizado",
    description: "Do primeiro contato à instalação, você terá um acompanhamento personalizado para atender suas necessidades específicas."
  },
  {
    title: "Manutenção e suporte",
    description: "Oferecemos serviços de manutenção e suporte técnico para garantir a durabilidade e eficiência das redes de proteção."
  }
];

const Benefits = () => {
  const [showImagePreview, setShowImagePreview] = useState(false);

  return (
    <section id="beneficios" className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Por que escolher a <span className="text-brand-blue">Reter Redes</span>?
            </h2>
            <p className="text-gray-600 mb-8">
              Somos especializados em soluções de segurança com redes de proteção, 
              combinando qualidade superior, instalação profissional e atendimento 
              personalizado para garantir sua total satisfação.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-3">
                  <div className="mt-1 bg-brand-blue rounded-full p-1 text-white flex-shrink-0">
                    <Check className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/images/benefits.png" 
                alt="Benefícios das redes de proteção" 
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setShowImagePreview(true)}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-blue-light rounded-lg z-0"></div>
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-brand-blue rounded-lg z-0"></div>
          </div>
        </div>
      </div>

      {/* Modal para visualização da imagem */}
      <ImagePreview
        isOpen={showImagePreview}
        onClose={() => setShowImagePreview(false)}
        imageSrc="/images/benefits.png"
        imageAlt="Benefícios das redes de proteção"
      />
    </section>
  );
};

export default Benefits;
