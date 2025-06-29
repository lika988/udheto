import React from 'react';
import { Shield, Wrench, Clock, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Vetëm paketa të integruara",
      description: "Nuk shesim pajisje pa instalim – garantojmë funksionimin perfekt dhe cilësinë e plotë të sistemit.",
      color: "text-[#C2352A]"
    },
    {
      icon: Award,
      title: "Ekspertë të certifikuar",
      description: "Teknikë të trajnuar dhe të certifikuar për Tiandy, Hikvision, Dahua dhe marka të tjera premium.",
      color: "text-[#E37C28]"
    },
    {
      icon: Clock,
      title: "Mbështetje 24/7",
      description: "Shërbim mbështetjeje i vazhdueshëm pas instalimit. Jemi gjithmonë të gatshëm për t'ju ndihmuar.",
      color: "text-green-500"
    },
    {
      icon: Wrench,
      title: "Instalim profesional",
      description: "Instalim i kujdesshëm dhe i plotë, konfigurimi optimal dhe trajnim për përdorimin e sistemit.",
      color: "text-blue-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1B1B1B] mb-4">
            Pse të na zgjidhni ne?
          </h2>
          <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto">
            Më shumë se 5 vjet përvojë në fushën e sigurisë elektronike. 
            Qasja jonë e integruar garanton rezultate të shkëlqyera.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:bg-gray-50"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-[#1B1B1B] mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-[#6B6B6B] leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#C2352A] to-[#E37C28] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Rezultate të garantuara ose kthimi i parave
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Jemi kaq të sigurt për cilësinë e punës sonë sa ofrojmë garanci të plotë. 
            Nëse nuk jeni të kënaqur, kthejmë paratë.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;