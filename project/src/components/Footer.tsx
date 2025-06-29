import React from 'react';
import { Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1B1B1B] text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <img 
                src="/ddddled-4.png" 
                alt="BUFI TECH Logo"
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
              <div>
                <span className="text-xl sm:text-2xl font-bold">BUFI TECH</span>
                <p className="text-sm text-gray-300">Kamerat e Sigurisë</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Specialistë për sisteme sigurie me instalim profesional. 
              Vetëm paketa të integruara për rezultate të garantuara.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Shërbimet</h3>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>• Instalim kamerash sigurie</li>
              <li>• Sisteme monitorimi</li>
              <li>• Mbështetje teknike 24/7</li>
              <li>• Trajnim për përdorim</li>
              <li>• Mirëmbajtje dhe riparime</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#C2352A] flex-shrink-0" />
                <a href="tel:049585195" className="hover:text-[#C2352A] transition-colors font-semibold text-lg">
                  049 585 195
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#C2352A] flex-shrink-0" />
                <a href="mailto:bufi.tech@proton.me" className="hover:text-[#C2352A] transition-colors text-sm sm:text-base break-all">
                  bufi.tech@proton.me
                </a>
              </div>
              <div className="flex items-center space-x-4 pt-2">
                <a href="#" className="text-gray-400 hover:text-[#C2352A] transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-[#C2352A] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.tiktok.com/@bufi.tech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C2352A] transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © 2024 Bufi Tech. Të gjitha të drejtat të rezervuara.
            </p>
            <p className="text-gray-400 text-sm text-center sm:text-right">
              Licensuar dhe i siguruar për shërbime sigurie elektronike
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;