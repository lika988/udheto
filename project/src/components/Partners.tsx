import React from 'react';

const Partners = () => {
  const partners = [
    { 
      name: "Tiandy", 
      logo: "/tiandy.png",
      description: "Teknologji e avancuar për sigurinë"
    },
    { 
      name: "Hikvision", 
      logo: "/Hikvision.png",
      description: "Lider botëror në sigurinë elektronike"
    },
    { 
      name: "Dahua", 
      logo: "/dahua.png",
      description: "Zgjidhje inovative për monitorim"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1B1B1B] mb-4">
            Brendet me të cilët punojmë
          </h2>
          <p className="text-lg text-[#6B6B6B]">
            Partnere të besuar për cilësi të lartë dhe teknologji të avancuar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="h-20 flex items-center justify-center mb-4">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} Logo`}
                  className="max-h-16 max-w-full object-contain transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-[#1B1B1B] mb-2">{partner.name}</h3>
                <p className="text-sm text-[#6B6B6B]">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-[#C2352A] to-[#E37C28] text-white px-8 py-4 rounded-full inline-block">
            <span className="font-semibold">Certifikuar nga të gjitha brendet</span>
          </div>
        </div>

        {/* Additional Brand Features */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-gray-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">✓</span>
            </div>
            <h4 className="text-lg font-bold text-[#1B1B1B] mb-2">Cilësi e Garantuar</h4>
            <p className="text-[#6B6B6B] text-sm">Vetëm produkte origjinale me garanci ndërkombëtare</p>
          </div>

          <div className="bg-white border-2 border-gray-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">🔧</span>
            </div>
            <h4 className="text-lg font-bold text-[#1B1B1B] mb-2">Instalim i Certifikuar</h4>
            <p className="text-[#6B6B6B] text-sm">Teknikë të trajnuar nga vetë prodhuesit</p>
          </div>

          <div className="bg-white border-2 border-gray-100 p-6 rounded-xl text-center hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-[#C2352A] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">📞</span>
            </div>
            <h4 className="text-lg font-bold text-[#1B1B1B] mb-2">Mbështetje Teknike</h4>
            <p className="text-[#6B6B6B] text-sm">Shërbim pas shitjes për të gjitha brendet</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;