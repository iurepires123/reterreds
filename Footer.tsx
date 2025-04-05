import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Reter Redes</h3>
            <p className="text-gray-400 mb-4">
              Especialistas em instalação de redes de proteção em Goiânia e região metropolitana.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white">Redes para Apartamentos</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white">Redes para Piscinas</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white">Redes para Playgrounds</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white">Redes para Quadras</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white">Varais Personalizados</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-white">Início</a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white">Serviços</a>
              </li>
              <li>
                <a href="#beneficios" className="text-gray-400 hover:text-white">Benefícios</a>
              </li>
              <li>
                <a href="#depoimentos" className="text-gray-400 hover:text-white">Depoimentos</a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-white">Contato</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-brand-blue" />
                <a href="tel:+5562985586999" className="text-gray-400 hover:text-white">(62) 9 8558-6999</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-brand-blue" />
                <a href="mailto:reterredes@hotmail.com" className="text-gray-400 hover:text-white">reterredes@hotmail.com</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-brand-blue mt-1" />
                <span className="text-gray-400">Goiânia, Goiás - Brasil</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Reter Redes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
