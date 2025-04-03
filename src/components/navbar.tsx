import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronRight } from 'lucide-react';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };
  
  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: "#inicio", label: "Início" },
    { href: "#servicos", label: "Serviços" },
    { href: "#planos", label: "Planos" },
    { href: "#resultados", label: "Resultados" },
    { href: "#sobre", label: "Sobre" },
  ];

  return (
    <nav className="top-0 z-50 bg-gradient-to-r from-sky-400 to-sky-500 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className=" rounded-full">
              <Image
                src="/SALEWAY.png"
                alt="SaleWay Logo"
                width={35}
                height={30}
                className="object-contain"
              />
            </div>
            <h2 className="text-white text-2xl font-bold">SaleWay</h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white font-semibold hover:text-sky-100 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="#contato"
              className="bg-white text-sky-500 px-5 py-2 rounded-full font-bold hover:bg-sky-100 transition-colors shadow-sm"
            >
              Contato
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-full hover:bg-sky-400 transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-4/6 max-w-sm bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center space-x-2">
              <div className="rounded-full">
                <Image
                  src="/SALEWAY.png"
                  alt="SaleWay Logo"
                  width={30}
                  height={25}
                  className="object-contain"
                />
              </div>
              <h2 className="text-sky-500 text-xl font-bold">SaleWay</h2>
            </div>
            <button 
              className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Fechar menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Mobile Menu Links */}
          <div className="flex-1 overflow-y-auto py-4">
            <div className="px-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between py-3 px-4 rounded-lg text-gray-700 hover:bg-sky-50 hover:text-sky-500 transition-colors"
                  onClick={handleLinkClick}
                >
                  <span className="font-medium">{item.label}</span>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Mobile Menu Footer */}
          <div className="p-4 border-t">
            <a
              href="#contato"
              className="flex items-center justify-center bg-sky-500 text-white px-5 py-3 rounded-lg font-bold hover:bg-sky-600 transition-colors shadow-sm w-full"
              onClick={handleLinkClick}
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
