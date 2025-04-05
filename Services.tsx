import { useState } from "react";
import { 
  Building, Home, Waves, Puzzle, Activity, Shirt 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import ImagePreview from "./ImagePreview";

const services = [
  {
    icon: Building,
    title: "Redes para Apartamentos",
    description: "Proteção para varandas, janelas e áreas de convivência em prédios residenciais.",
    color: "bg-blue-100 text-blue-600",
    image: "/images/service1.png"
  },
  {
    icon: Waves,
    title: "Redes e Lonas para Piscinas",
    description: "Segurança para áreas de lazer aquático, prevenindo acidentes.",
    color: "bg-cyan-100 text-cyan-600",
    image: "/images/service2.png"
  },
  {
    icon: Puzzle,
    title: "Redes para Playgrounds",
    description: "Proteção para áreas de recreação infantil, garantindo tranquilidade aos pais.",
    color: "bg-green-100 text-green-600",
    image: "/images/service3.png"
  },
  {
    icon: Activity,
    title: "Redes para Quadras",
    description: "Sistemas de proteção para quadras esportivas residenciais e comerciais.",
    color: "bg-orange-100 text-orange-600",
    image: "/images/service4.png"
  },
  {
    icon: Shirt,
    title: "Varais Personalizados",
    description: "Soluções práticas para otimizar o espaço da sua lavanderia.",
    color: "bg-purple-100 text-purple-600",
    image: "/images/service5.png"
  },
  {
    icon: Home,
    title: "Telas Mosquiteiras",
    description: "Soluções sob medida para diversos espaços residenciais e comerciais.",
    color: "bg-red-100 text-red-600",
    image: "/images/service6.png"
  },
];

const Services = () => {
  const [previewImage, setPreviewImage] = useState<{
    isOpen: boolean;
    src: string;
    alt: string;
  }>({
    isOpen: false,
    src: "",
    alt: ""
  });

  const handleImageClick = (src: string, alt: string) => {
    setPreviewImage({
      isOpen: true,
      src,
      alt
    });
  };

  const handleClosePreview = () => {
    setPreviewImage({
      ...previewImage,
      isOpen: false
    });
  };

  return (
    <section id="servicos" className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos <span className="text-brand-blue">Serviços</span>
          </h2>
          <p className="text-gray-600">
            Trabalhamos com os melhores materiais e técnicas para garantir a máxima segurança e durabilidade em todas as nossas instalações.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="p-6 space-y-4">
                  <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", service.color)}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div className="h-48 bg-gray-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => handleImageClick(service.image, service.title)}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal para visualização da imagem */}
      <ImagePreview
        isOpen={previewImage.isOpen}
        onClose={handleClosePreview}
        imageSrc={previewImage.src}
        imageAlt={previewImage.alt}
      />
    </section>
  );
};

export default Services;
