import React, { useState } from 'react';
import { Phone, X, ZoomIn, Check, Zap } from 'lucide-react';

const Pricing = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const packages = [
    {
      id: 'package1',
      price: '350€',
      image: '/post-ig-1 copy copy copy.jpg',
      brand: 'Tiandy',
      brandLogo: '/tiandy.png',
      description: [
        '3 kamera të jashtme profesionale',
        '1 kamerë e brendshme HD',
        'Kabllim i plotë',
        'HDD për 24 ditë incizim',
        'Pajisje të tjera përcjellëse'
      ]
    },
    {
      id: 'package2',
      price: '700€',
      image: '/POST copy copy copy.png',
      brand: 'Hikvision',
      brandLogo: '/Hikvision.png',
      description: [
        '1 monitor 24 inch për monitorim',
        '1x DVR me teknologji të avancuar',
        '1TB HDD për ruajtje të gjatë',
        '1 kamerë rrotulluese me zoom',
        '1 kamerë hybrid me dritë të madhe',
        '2 kamera 3K me Color Vu teknologji',
        'Kabllim 300m për mbulim të plotë',
        'Pajisje të tjera përcjellëse'
      ]
    },
    {
      id: 'package3',
      price: '1.500€',
      image: '/1080 1350 copy copy.jpg',
      brand: 'Tiandy',
      brandLogo: '/tiandy.png',
      description: [
        'TV 43 inch FALAS për monitorim',
        'Kamerë 360 shkallë panoramike',
        '7 kamera të thjeshta cilësi të lartë',
        'NVR profesional për menaxhim',
        'Switch rrjeti për lidhje optimale',
        'HDD me kapacitet të madh',
        'Pajisje përcjellëse të plota'
      ]
    }
  ];

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section id="pricing" className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B1B1B] mb-4 sm:mb-6">
              Paketat Tona
            </h2>
            <p className="text-lg sm:text-xl text-[#6B6B6B] max-w-3xl mx-auto">
              <strong className="text-[#C2352A]">Të gjitha paketat përfshijnë instalim profesional dhe trajnim</strong> për përdorimin e pajisjeve pas instalimit.
            </p>
          </div>

          {/* Mobile-optimized packages grid */}
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={pkg.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 transform"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                {/* Mobile-optimized Square Image Preview */}
                <div className="relative w-full aspect-square bg-gray-100 overflow-hidden group cursor-pointer">
                  <img 
                    src={pkg.image}
                    alt={`Paketa ${pkg.price}`}
                    className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110"
                    onClick={() => openImageModal(pkg.image)}
                    loading="lazy"
                  />
                  
                  {/* Smooth hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="transform scale-75 group-hover:scale-100 transition-all duration-500 bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <ZoomIn className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-lg" />
                    </div>
                  </div>

                  {/* Mobile-friendly expand hint */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 py-2 rounded-full text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
                    Prekni për ta zgjeruar
                  </div>
                </div>

                {/* Package Content */}
                <div className="p-4 sm:p-6 lg:p-8">
                  {/* Brand Logo Section */}
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4 w-32 sm:w-40 transition-all duration-300 hover:bg-gray-100">
                      <img 
                        src={pkg.brandLogo} 
                        alt={`${pkg.brand} Logo`}
                        className="h-8 sm:h-12 w-auto object-contain mx-auto"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="text-3xl sm:text-4xl font-bold text-[#C2352A] mb-1">
                      {pkg.price}
                    </div>
                    <p className="text-[#6B6B6B] text-sm sm:text-base">{pkg.brand}</p>
                  </div>

                  {/* Package Description */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-[#1B1B1B] mb-3 sm:mb-4">
                      Çfarë përfshin:
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {pkg.description.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 sm:space-x-3">
                          <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-[#1B1B1B] text-xs sm:text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Special Offer Badge */}
                  {pkg.id === 'package3' && (
                    <div className="mb-4 sm:mb-6 text-center">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold inline-block animate-pulse">
                        🎁 TV 43" FALAS
                      </div>
                    </div>
                  )}

                  {/* Call to Action */}
                  <div className="space-y-3 sm:space-y-4">
                    <a
                      href="tel:049585195"
                      className="w-full bg-[#C2352A] hover:bg-[#A02B22] text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>POROSIT TANI</span>
                    </a>
                    
                    <div className="text-center">
                      <p className="text-xs sm:text-sm text-[#6B6B6B] mb-1">
                        Thirrni për detaje dhe instalim
                      </p>
                      <p className="text-lg sm:text-xl font-bold text-[#C2352A]">
                        049 585 195
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="mt-12 sm:mt-16 bg-gradient-to-r from-[#C2352A] to-[#E37C28] text-white rounded-2xl p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Nuk gjeni paketën e duhur?
            </h3>
            <p className="text-base sm:text-lg opacity-90 mb-4 sm:mb-6">
              Kontaktoni me ne për një ofertë të personalizuar sipas nevojave tuaja
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:049585195"
                className="bg-white text-[#C2352A] hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-lg sm:text-xl transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>049 585 195</span>
              </a>
              <span className="text-white/80 hidden sm:inline">ose</span>
              <a 
                href="https://bufitech.fillout.com/kam?bufi=xxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E37C28] hover:bg-[#D16A1F] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-lg sm:text-xl transition-all duration-300 inline-flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>OFERTË E SHPEJTË</span>
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-white font-bold text-lg sm:text-2xl">📞</span>
              </div>
              <h4 className="text-sm sm:text-lg font-bold text-[#1B1B1B] mb-1 sm:mb-2">Konsultim Telefonik</h4>
              <p className="text-xs sm:text-base text-[#6B6B6B]">Falas për të gjithë</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-white font-bold text-lg sm:text-2xl">🏠</span>
              </div>
              <h4 className="text-sm sm:text-lg font-bold text-[#1B1B1B] mb-1 sm:mb-2">Vizitë Fizike</h4>
              <p className="text-xs sm:text-base text-[#6B6B6B]">Çmimi në telefon</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#E37C28] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-white font-bold text-lg sm:text-2xl">🔧</span>
              </div>
              <h4 className="text-sm sm:text-lg font-bold text-[#1B1B1B] mb-1 sm:mb-2">Instalim Profesional</h4>
              <p className="text-xs sm:text-base text-[#6B6B6B]">Përfshirë në çmim</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#C2352A] rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-white font-bold text-lg sm:text-2xl">🎓</span>
              </div>
              <h4 className="text-sm sm:text-lg font-bold text-[#1B1B1B] mb-1 sm:mb-2">Trajnim</h4>
              <p className="text-xs sm:text-base text-[#6B6B6B]">Mësoni të përdorni</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-optimized Full Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={closeImageModal}
        >
          <div className="relative w-full max-w-sm max-h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeImageModal}
              className="absolute -top-8 sm:-top-12 right-0 z-60 bg-white/20 hover:bg-white/30 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Full size image with 1080:1350 aspect ratio */}
            <div className="relative w-full bg-white rounded-lg overflow-hidden shadow-2xl" style={{ aspectRatio: '1080/1350' }}>
              <img
                src={selectedImage}
                alt="Expanded view"
                className="w-full h-full object-cover"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Bottom info */}
            <div className="absolute -bottom-12 sm:-bottom-16 left-0 right-0 text-center">
              <div className="bg-black/50 text-white px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm inline-block">
                <p className="text-xs sm:text-sm">
                  Prekni jashtë për të mbyllur
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Pricing;