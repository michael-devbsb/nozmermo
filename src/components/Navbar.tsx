import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            className={`text-2xl font-playfair font-bold ${
              isScrolled ? "text-deepBrown" : "text-white"
            }`}
          >
            NozMermo
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className={`${
                isScrolled ? "text-deepBrown" : "text-white"
              } hover:text-coral transition-colors font-inter`}
            >
              Início
            </a>
            <a
              href="#menu"
              className={`${
                isScrolled ? "text-deepBrown" : "text-white"
              } hover:text-coral transition-colors font-inter`}
            >
              Cardápio
            </a>
            <a
              href="#about"
              className={`${
                isScrolled ? "text-deepBrown" : "text-white"
              } hover:text-coral transition-colors font-inter`}
            >
              Sobre Nós
            </a>
            <a
              href="#contact"
              className={`${
                isScrolled ? "text-deepBrown" : "text-white"
              } hover:text-coral transition-colors font-inter`}
            >
              Contato
            </a>
            <button className="bg-coral text-white px-6 py-2 rounded-full font-inter font-medium hover:bg-coral/90 transition-colors">
              Peça já
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              isScrolled ? "text-deepBrown" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-20 left-0 right-0 shadow-lg animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a
                href="#"
                className="block text-deepBrown hover:text-coral transition-colors font-inter"
              >
                Início
              </a>
              <a
                href="#menu"
                className="block text-deepBrown hover:text-coral transition-colors font-inter"
              >
                Cardápio
              </a>
              <a
                href="#about"
                className="block text-deepBrown hover:text-coral transition-colors font-inter"
              >
                Sobre nós
              </a>
              <a
                href="#contact"
                className="block text-deepBrown hover:text-coral transition-colors font-inter"
              >
                Contato
              </a>
              <button className="w-full bg-coral text-white px-6 py-2 rounded-full font-inter font-medium hover:bg-coral/90 transition-colors">
                Peça já
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;