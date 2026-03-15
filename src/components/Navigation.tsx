import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Experience', 'Services', 'Projects', 'Contact'];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Detect scroll to add backdrop effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-lg border-b border-gray-800'
          : 'bg-black/50 backdrop-blur-md border-b border-gray-800/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-lime-400 transition-colors duration-200 text-sm font-medium relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block px-6 py-2 bg-lime-400 text-black rounded-full text-sm font-bold hover:bg-lime-300 transition-all duration-300"
          >
            Get In Touch
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800 animate-fadeInUp">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-gray-300 hover:text-lime-400 transition-colors duration-200 py-2 font-medium"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full px-6 py-2 bg-lime-400 text-black rounded-full text-sm font-bold mt-4 hover:bg-lime-300 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}