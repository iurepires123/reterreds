import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-brand-blue">
          Reter <span className="text-gray-800">Redes</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="text-gray-700 hover:text-brand-blue font-medium">
            Início
          </a>
          <a href="#servicos" className="text-gray-700 hover:text-brand-blue font-medium">
            Serviços
          </a>
          <a href="#beneficios" className="text-gray-700 hover:text-brand-blue font-medium">
            Benefícios
          </a>
          <a href="#depoimentos" className="text-gray-700 hover:text-brand-blue font-medium">
            Depoimentos
          </a>
          <a href="#contato" className="text-gray-700 hover:text-brand-blue font-medium">
            Contato
          </a>
          <a href="tel:+5562985586999">
            <Button className="bg-brand-blue hover:bg-brand-blue-dark">
              <Phone className="mr-2 h-4 w-4" />
              (62) 9 8558-6999
            </Button>
          </a>
        </nav>
        
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-gray-700"
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white pt-16">
          <div className="container flex flex-col space-y-6 py-8">
            <a href="#inicio" className="text-gray-700 hover:text-brand-blue text-xl font-medium" onClick={toggleMenu}>
              Início
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-brand-blue text-xl font-medium" onClick={toggleMenu}>
              Serviços
            </a>
            <a href="#beneficios" className="text-gray-700 hover:text-brand-blue text-xl font-medium" onClick={toggleMenu}>
              Benefícios
            </a>
            <a href="#depoimentos" className="text-gray-700 hover:text-brand-blue text-xl font-medium" onClick={toggleMenu}>
              Depoimentos
            </a>
            <a href="#contato" className="text-gray-700 hover:text-brand-blue text-xl font-medium" onClick={toggleMenu}>
              Contato
            </a>
            <a href="tel:+5562985586999">
              <Button className="bg-brand-blue hover:bg-brand-blue-dark w-full">
                <Phone className="mr-2 h-4 w-4" />
                (62) 9 8558-6999
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
