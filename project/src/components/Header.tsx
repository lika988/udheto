import React, { useState } from 'react';
import { Phone, Mail, Menu, X, Facebook, Instagram, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-[#1B1B1B] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-[#C2352A]" />
                <a href="tel:049585195" className="font-bold text-lg hover:text-[#C2352A] transition-colors">
                  049 585 195
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-[#C2352A]" />
                <a href="mailto:bufi.tech@proton.me" className="hover:text-[#C2352A] transition-colors">
                  bufi.tech@proton.me
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">Na ndiqni:</span>
              <a href="#" className="text-white hover:text-[#C2352A] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-[#C2352A] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@bufi.tech" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C2352A] transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg border-b-2 border-[#C2352A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/ddddled-4.png" 
                alt="BUFI TECH Logo"
                className="w-12 h-12 sm:w-16 sm:h-16"
              />
              <div>
                <span className="text-2xl sm:text-3xl font-bold text-[#1B1B1B]">BUFI TECH</span>
                <p className="text-sm text-[#6B6B6B] hidden sm:block">Kamerat e Sigurisë</p>
              </div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-[#C2352A] text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#pricing" className="text-[#1B1B1B] hover:text-[#C2352A] font-medium transition-colors">
                Paketat
              </a>
              <Link
                to="/abonime"
                className="bg-[#E37C28] hover:bg-[#D16A1F] text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
              >
                <Users className="w-4 h-4" />
                <span>ABONIME</span>
              </Link>
              <a href="#contact" className="text-[#1B1B1B] hover:text-[#C2352A] font-medium transition-colors">
                Kontakt
              </a>
              <a 
                href="tel:049585195"
                className="bg-[#C2352A] hover:bg-[#A02B22] text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>TELEFONO</span>
              </a>
            </nav>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#pricing" 
                  className="text-[#1B1B1B] hover:text-[#C2352A] font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Paketat
                </a>
                <Link
                  to="/abonime"
                  className="bg-[#E37C28] hover:bg-[#D16A1F] text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Users className="w-4 h-4" />
                  <span>ABONIME</span>
                </Link>
                <a 
                  href="#contact" 
                  className="text-[#1B1B1B] hover:text-[#C2352A] font-medium py-2 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kontakt
                </a>
                <a 
                  href="tel:049585195"
                  className="bg-[#C2352A] hover:bg-[#A02B22] text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 w-full"
                >
                  <Phone className="w-4 h-4" />
                  <span>TELEFONO TANI</span>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;