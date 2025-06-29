import React from 'react';
import { CheckCircle, ArrowRight, Phone, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <img 
                  src="/ddddled-4.png" 
                  alt="BUFI TECH Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
                <span className="text-[#C2352A] font-bold text-xl sm:text-2xl">BUFI TECH</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#1B1B1B] leading-tight">
                Kamerat e Sigurisë me{' '}
                <span className="text-[#C2352A]">Instalim Profesional</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Blejni kamerën <strong className="text-[#C2352A]">vetëm</strong> me shërbimin tonë të instalimit. 
                Garantojmë cilësi dhe funksionim optimal!
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                <span className="text-[#1B1B1B] text-base sm:text-lg">Vetëm paketa të integruara - asnjë shitje pa instalim</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                <span className="text-[#1B1B1B] text-base sm:text-lg">Brendet premium: Tiandy, Hikvision, Dahua</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0" />
                <span className="text-[#1B1B1B] text-base sm:text-lg">Mbështetje 24/7 pas instalimit</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToPricing}
                className="bg-[#C2352A] hover:bg-[#A02B22] text-white px-6 sm:px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>SHIKO PAKETAT</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <a 
                href="tel:049585195"
                className="border-2 border-[#C2352A] text-[#C2352A] hover:bg-[#C2352A] hover:text-white px-6 sm:px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>049 585 195</span>
              </a>
            </div>

            {/* Quick Quote Button */}
            <div className="pt-4 sm:pt-6">
              <div className="bg-gradient-to-r from-[#E37C28] to-[#F59E0B] p-4 sm:p-6 rounded-2xl shadow-lg">
                <div className="text-center text-white mb-4">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">🚀 Merrni Ofertë të Shpejtë</h3>
                  <p className="text-sm sm:text-base opacity-90">Përzgjidhni vetë nevojat tuaja dhe merrni ofertë të personalizuar</p>
                </div>
                <a 
                  href="https://bufitech.fillout.com/kam?bufi=xxxxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white text-[#E37C28] hover:bg-gray-100 px-6 py-3 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  <span>OFERTË E SHPEJTË</span>
                </a>
              </div>
            </div>

            {/* Mobile Contact Info */}
            <div className="sm:hidden bg-[#C2352A] text-white p-4 rounded-xl">
              <div className="text-center">
                <p className="font-semibold mb-2">Kontaktoni tani për konsultim falas!</p>
                <div className="flex flex-col space-y-2">
                  <a href="tel:049585195" className="font-bold text-xl">📞 049 585 195</a>
                  <a href="mailto:bufi.tech@proton.me" className="text-sm">✉️ bufi.tech@proton.me</a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-4 sm:p-8">
              <img 
                src="https://images.pexels.com/photos/30546987/pexels-photo-30546987.jpeg" 
                alt="Instalim kamera sigurie"
                className="w-full h-64 sm:h-96 object-cover rounded-xl"
              />
              <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-[#C2352A] text-white p-3 sm:p-4 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold">100%</div>
                  <div className="text-xs sm:text-sm">Siguri</div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#C2352A]/10 to-[#E37C28]/10 rounded-2xl transform rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;