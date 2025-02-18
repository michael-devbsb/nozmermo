
import { useEffect } from "react";
import {
  UtensilsCrossed,
  Utensils,
  ShoppingBag,
  Check,
  ArrowRight,
  Star,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;
        if (isVisible) {
          element.classList.add("animate-fade-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-warmWhite">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://www.nidelins.com.br/wp-content/uploads/2022/06/marmitas-2.jpeg")',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
            Marmitas Fit e Caseiras,
            <br />
            Feitas com Carinho pra Você!
          </h1>
          <p className="font-inter text-xl mb-8 max-w-2xl mx-auto">
            Pratos deliciosos, saudáveis e personalizados para o seu dia a dia. Peça já!
          </p>
          <button className="bg-coral text-white px-8 py-4 rounded-full font-inter font-medium text-lg hover:bg-coral/90 transition-all transform hover:scale-105">
            Ver Cardápio
          </button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-center font-playfair text-4xl mb-16 text-deepBrown">
            Como funciona?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: UtensilsCrossed,
                title: "Escolha",
                description: "Escolha suas marmitas no cardápio.",
              },
              {
                icon: ShoppingBag,
                title: "Peça",
                description:
                  "Faça seu pedido pelo site ou WhatsApp.",
              },
              {
                icon: Check,
                title: "Receba",
                description: "Receba no conforto da sua casa.",
              },
              {
                icon: Utensils,
                title: "Aproveite",
                description: "Aproveite um refeição fresca e deliciosa.",
              },
            ].map((step, index) => (
              <div
                key={step.title}
                className="text-center animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-coral/10 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-coral" />
                </div>
                <h3 className="font-playfair text-xl mb-2 text-deepBrown">
                  {step.title}
                </h3>
                <p className="font-inter text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Meals Section */}
      <section className="py-20 bg-white"  id="menu">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-playfair text-4xl mb-16 text-deepBrown">
            Nosso Cardápio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((meal) => (
              <div
                key={meal}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-all animate-on-scroll opacity-0"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src="https://lojacaseiramente.com.br/wp-content/uploads/2022/03/RS-10-A.jpg"
                    alt="Meal"
                    className="object-cover w-full h-64"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-inter text-coral uppercase tracking-wide">
                    Popular
                  </span>
                  <h3 className="font-playfair text-xl mt-2 mb-2 text-deepBrown">
                    Frango Grelhado
                  </h3>
                  <p className="text-gray-600 font-inter mb-4">
                  Arroz integral, frango grelhado e legumes.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-playfair text-xl text-deepBrown">
                      R$20,00
                    </span>
                    <button className="text-coral hover:text-coral/80 font-inter flex items-center gap-2">
                      Peça já
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-sage/10">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-playfair text-4xl mb-16 text-deepBrown">
            O que Nossos Clientes Dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div
                key={testimonial}
                className="bg-white p-8 rounded-lg shadow-sm animate-on-scroll opacity-0"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="font-inter text-gray-600 mb-6">
                "As marmitas são incríveis! Sempre frescas e saborosas. Recomendo!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-coral/20 rounded-full flex items-center justify-center">
                    <span className="font-playfair text-coral text-lg">JD</span>
                  </div>
                  <div>
                    <h4 className="font-playfair text-deepBrown">João Silva</h4>
                    <p className="text-sm text-gray-500 font-inter">
                      Cliente Regular
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-4xl mb-16 text-deepBrown">
              Entre em Contato
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-coral" />
                </div>
                <p className="font-inter text-gray-600">(61) 99445-2293</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-coral" />
                </div>
                <p className="font-inter text-gray-600">contato@nozmermo.com</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-6 h-6 text-coral" />
                </div>
                <p className="font-inter text-gray-600">WhatsApp</p>
              </div>
            </div>
            <form className="max-w-xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-coral font-inter"
                />
                <input
                  type="email"
                  placeholder="Seu Email"
                  className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-coral font-inter"
                />
              </div>
              <textarea
                placeholder="Sua Mensagem"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-coral font-inter mb-6"
              ></textarea>
              <button className="bg-coral text-white px-8 py-3 rounded-full font-inter font-medium hover:bg-coral/90 transition-all transform hover:scale-105 w-full md:w-auto">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deepBrown text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-playfair text-2xl mb-4">NozMermo</h3>
              <p className="font-inter text-gray-400">
                Healthy & delicious meals, delivered with love to your doorstep.
              </p>
            </div>
            <div>
              <h4 className="font-playfair text-lg mb-4">Links Rápidos</h4>
              <ul className="space-y-2 font-inter">
                <li>
                  <a href="#" className="text-gray-400 hover:text-coral">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#menu" className="text-gray-400 hover:text-coral">
                    Cardápio
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-coral">
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-coral">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-playfair text-lg mb-4">Contato</h4>
              <ul className="space-y-2 font-inter">
                <li className="text-gray-400">(61) 99445-2293</li>
                <li className="text-gray-400">contato@nozmermo.com</li>
                <li className="text-gray-400">
                  Itapoã - DF / Rua do Macalé 
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-playfair text-lg mb-4">Segue nóis</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-coral transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-coral transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-coral transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center font-inter text-gray-400">
            <p>&copy; 2024 NozMermo. Todos os direitos resevados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/61994452293"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <i className="fab fa-whatsapp text-2xl">
          <img
    src="https://img.icons8.com/?size=100&id=AltfLkFSP7XN&format=png&color=000000"
    alt="WhatsApp"
    className="w-8 h-8"
          />
        </i>
      </a>
    </div>
  );
};

export default Index;
