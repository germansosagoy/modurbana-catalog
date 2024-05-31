import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import Logo from '@assets/images/modurbana-logo.webp';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollTo = () => {
    const shippingSection = document.getElementById("envios");
    const aboutSection = document.getElementById("about");
    const element = shippingSection || aboutSection;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header className="w-full sticky top-0 z-10 bg-white bg-opacity-30 backdrop-blur-md border-b border-white border-opacity-20 shadow-lg animate-fade">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src={Logo} alt="Logo" className="w-10 h-10 rounded-lg" />
              <h1 className="text-[#373737] text-2xl font-bold">ModUrbana</h1>
            </a>
          </div>
          <div className="hidden md:flex justify-center items-center animate-pulse">
          <a className="text-slate-900 text-center font-semibold text-xs uppercase tracking-wider cursor-pointer" href='https://maps.app.goo.gl/5Uw55X2pDde3jtCK9' target="_blank" rel="noopener noreferrer">
          Nos ubicamos en Gustavo Grenda 70, Zona Centro - Chaco.
          </a>
         <MapPin className="w-4 h-4 ml-1 mb-1.5"/>
        </div>
          <div className="hidden md:flex hidden items-center">
         <a href="#envios" onClick={handleScrollTo} className="px-6 py-2 text-white/90 rounded-lg text-lg font-medium bg-[#017374] hover:bg-[#017374]/80 duration-300 ml-2">
          Envíos
        </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              id="menuButton"
              className="text-black focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`md:hidden flex flex-col items-center transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 max-h-screen translate-y-0'
            : 'opacity-0 max-h-0 -translate-y-10 overflow-hidden'
        }`}
      >
        <a href="#envios" className="px-6 py-2 text-white/90 rounded-lg text-lg font-medium bg-[#017374] hover:bg-[#017374]/80 duration-300 ml-2 mb-2">
        Envíos
        </a>
      </div>
    </header>
  );
};


export default Header;