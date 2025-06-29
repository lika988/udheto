import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, Check, Star, Users, Shield, Clock, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const plans = [
    {
      id: '1month',
      name: '1 muaj',
      price: '€49.99',
      period: '/muaj',
      description: 'Sistem sigurie pa kabllim që funksionon pa internet. Shikim në kohë reale kudo që të jesh, pa asnjë problem teknik. Ideal për fillestartë që duan mbrojtje bazike.',
      popular: false,
      color: 'from-blue-600 to-blue-700',
      buttonColor: 'bg-blue-500 hover:bg-blue-600 text-white'
    },
    {
      id: '2months',
      name: '2 muaj',
      price: '€89.99',
      period: '/total',
      description: 'Sistem i avancuar pa kabllim me shikim live kudo. Pa nevojë për internet, ofron mbrojtje të plotë me detektim njerëzish dhe ruajtje 10-ditore. Zgjidhja më e popullarizuar.',
      popular: true,
      color: 'from-orange-500 to-red-600',
      buttonColor: 'bg-yellow-400 hover:bg-yellow-300 text-orange-800'
    },
    {
      id: '3months',
      name: '3 muaj',
      price: '€119.99',
      period: '/total',
      description: 'Sistemi premium pa kabllim me të gjitha karakteristikat. Shikim live pa internet, komunikim dy-kahësh dhe mbrojtje maksimale. Zgjidhja më e kompletuar për sigurinë tuaj.',
      popular: false,
      color: 'from-gray-700 to-gray-800',
      buttonColor: 'bg-blue-500 hover:bg-blue-600 text-white'
    }
  ];

  const features = [
    { text: 'PA KABLLIM & PA INTERNET - FUNKSION I PLOTË', available: [true, true, true] },
    { text: 'SHIKIM NË KOHË REALE (LIVE VIEW) KUDO QË TË JESH', available: [true, true, true] },
    { text: '2K - REZOLUCION 3MP', available: [true, true, true] },
    { text: 'VIZION NATË ME NGJYRË', available: [true, true, true] },
    { text: 'PAMJE PANORAMIKE 360°', available: [true, true, true] },
    { text: 'DETEKTIM I NJERËZVE', available: [false, true, true] },
    { text: 'KOMUNIKIM DY-KAHËSH', available: [false, false, true] },
    { text: '24/7 MBROJTJE ME RUAJTJE VIDEO', available: [true, true, true] },
    { text: 'MONITORIM NË SMARTFON KU DO QË TË JENI', available: [true, true, true] }
  ];

  const faqs = [
    {
      question: "A është vetëm një kamerë në çdo aboniment?",
      answer: "Po, të gjitha abonimet përfshijnë një kamerë të vetme me cilësi të lartë. Kjo kamerë është e dizajnuar për të mbuluar një zonë të gjerë dhe ofron pamje panoramike 360°, duke e bërë atë ideale për monitorimin e objekteve të ndryshme."
    },
    {
      question: "Për çfarë lloj objektesh është i përshtatshëm ky sistem?",
      answer: "Sistemi është ideal për ndërtimtari (monitorim i materialeve dhe progresit të punës), objekte publike, magazina, parking, zyra, dhe çdo vend ku dëshironi të mbikëqyrni aktivitetin. Veçanërisht i dobishëm për objekte ku nuk ka internet ose energji elektrike të qëndrueshme."
    },
    {
      question: "Si funksionon pa internet dhe pa kabllim?",
      answer: "Kamera përdor teknologji wireless të avancuar dhe bateri me jetëgjatësi të gjatë. Ajo krijon rrjetin e saj të brendshëm që ju lejon të shikoni pamjen live përmes aplikacionit në telefon, pa pasur nevojë për internet ose lidhje me kabllo."
    },
    {
      question: "Sa kohë zgjat bateria e kamerës?",
      answer: "Bateria zgjat deri në 6 muaj me përdorim normal. Kamera vjen me tregues baterie në aplikacion dhe ju njofton kur duhet të ngarkohet. Ngarkimi bëhet lehtësisht me kabllo USB-C."
    },
    {
      question: "A mund ta shoh kamerën nga distanca?",
      answer: "Po, mund ta shikoni kamerën nga çdo distancë përmes aplikacionit në telefon. Kamera krijon lidhjen e saj wireless që ju lejon të aksesoni pamjen live, regjistrime, dhe të merrni njoftime në kohë reale kudo që të jeni."
    },
    {
      question: "Çfarë ndodh nëse dikush përpiqet ta vjedhë kamerën?",
      answer: "Kamera ka sistem alarmi të integruar dhe dërgon njoftim të menjëhershëm në telefonin tuaj nëse lëviz ose hiqet nga pozicioni. Gjithashtu, të gjitha regjistrime ruhen në cloud, kështu që edhe nëse kamera dëmtohet, provat mbeten të sigurta."
    },
    {
      question: "A ka kosto shtesë për ruajtjen e videove?",
      answer: "Jo, ruajtja e videove është e përfshirë në çmimin e abonimit. Nuk ka kosto të fshehura ose tarifa shtesë për cloud storage."
    },
    {
      question: "Si instalohet kamera?",
      answer: "Instalimi është shumë i thjeshtë dhe bëhet nga ekipi ynë profesional pa pagesë shtesë. Kamera mund të vendoset në çdo sipërfaqe me mbështetëse magnetike ose vida, dhe konfigurohet plotësisht brenda 15 minutave."
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Siguri e Garantuar',
      description: 'Monitorim 24/7 me teknologji të avancuar'
    },
    {
      icon: Clock,
      title: 'Shërbim i Vazhdueshëm',
      description: 'Mbështetje teknike dhe mirëmbajtje e rregullt'
    },
    {
      icon: Award,
      title: 'Cilësi Premium',
      description: 'Pajisje dhe shërbime të certifikuara'
    },
    {
      icon: Users,
      title: 'Ekip Profesional',
      description: 'Teknikë të trajnuar dhe të përvojshëm'
    }
  ];

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-2 border-[#C2352A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link 
                to="/"
                className="flex items-center space-x-2 text-[#C2352A] hover:text-[#A02B22] transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Kthehu</span>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-3">
                <img 
                  src="/ddddled-4.png" 
                  alt="BUFI TECH Logo"
                  className="w-10 h-10"
                />
                <div>
                  <span className="text-xl font-bold text-[#1B1B1B]">BUFI TECH</span>
                  <p className="text-sm text-[#6B6B6B]">Abonime Sigurie</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a href="tel:049585195" className="text-[#C2352A] hover:text-[#A02B22] font-semibold">
                049 585 195
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#C2352A] to-[#E37C28] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Abonime për Kamerë Sigurie
          </h1>
          <p className="text-xl sm:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            Një kamerë e vetme me teknologji të avancuar për monitorimin e objekteve tuaja. 
            Ideale për ndërtimtari, objekte publike dhe vende të punës.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">✓ Pa Kabllim & Pa Internet</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">✓ Instalim Falas</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="font-semibold">✓ Pamje 360°</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Zgjidhni Planin Tuaj
            </h2>
            <p className="text-xl text-slate-300">
              Çmime transparente, pa kosto të fshehura
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={plan.id}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  selectedPlan === plan.id ? 'ring-4 ring-[#C2352A] ring-opacity-50' : ''
                } ${plan.popular ? 'lg:scale-110 relative' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-1 shadow-lg">
                      <Star className="w-4 h-4" />
                      <span>MË I POPULLARIZUAR</span>
                    </div>
                  </div>
                )}

                <div className={`bg-gradient-to-r ${plan.color} p-6 text-white ${plan.popular ? 'pt-10' : ''}`}>
                  <h3 className="text-2xl font-bold mb-2 text-center">{plan.name}</h3>
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold">{plan.price}</div>
                    <div className="text-lg opacity-80">{plan.period}</div>
                  </div>
                </div>

                <div className="p-8">
                  <p className="text-[#6B6B6B] mb-6 leading-relaxed text-center">
                    {plan.description}
                  </p>

                  <button 
                    onClick={() => handlePlanSelect(plan.id)}
                    className={`w-full ${plan.buttonColor} py-4 rounded-xl font-bold text-lg mb-8 transition-all duration-300 ${
                      selectedPlan === plan.id ? 'ring-2 ring-[#C2352A] ring-opacity-50' : ''
                    }`}
                  >
                    {selectedPlan === plan.id ? 'E ZGJEDHUR' : 'Zgjidhni Planin'}
                  </button>

                  <div className="space-y-4">
                    {features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        {feature.available[index] ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <span className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5 text-center">✗</span>
                        )}
                        <span className={`text-sm ${!feature.available[index] ? 'line-through opacity-60 text-gray-400' : 'text-[#1B1B1B]'}`}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-start space-x-3 mb-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-[#1B1B1B]">Mbështetje 24/7</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-[#1B1B1B]">Instalim falas</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B1B1B] mb-4">
              Pyetje të Shpeshta
            </h2>
            <p className="text-xl text-[#6B6B6B]">
              Përgjigjet për pyetjet më të zakonshme rreth abonimeve tona
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-[#C2352A] focus:ring-opacity-20"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-[#1B1B1B] pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openFAQ === index ? (
                        <ChevronUp className="w-6 h-6 text-[#C2352A]" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-[#6B6B6B]" />
                      )}
                    </div>
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-[#6B6B6B] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#6B6B6B] mb-4">
              Nuk gjetët përgjigjen që kërkonit?
            </p>
            <a 
              href="tel:049585195"
              className="bg-[#C2352A] hover:bg-[#A02B22] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-block"
            >
              Kontaktoni drejtpërdrejt
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B1B1B] mb-4">
              Përse të zgjidhni abonimin?
            </h2>
            <p className="text-xl text-[#6B6B6B]">
              Përfitime ekskluzive për abonentët tanë
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:bg-white"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#C2352A] to-[#E37C28] flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
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
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-[#1B1B1B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Gati për të filluar?</h3>
              <p className="text-gray-300 mb-6">
                Kontaktoni me ne për të porositur abonimin tuaj dhe për të planifikuar instalimin falas.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#C2352A]" />
                  <a href="tel:049585195" className="text-lg font-semibold hover:text-[#C2352A] transition-colors">
                    049 585 195
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#C2352A]" />
                  <a href="mailto:bufi.tech@proton.me" className="hover:text-[#C2352A] transition-colors">
                    bufi.tech@proton.me
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="inline-block bg-gradient-to-r from-[#C2352A] to-[#E37C28] p-8 rounded-2xl">
                <h4 className="text-xl font-bold mb-2">Konsultim Falas!</h4>
                <p className="opacity-90 mb-4">
                  Vizitë në objektin tuaj pa pagesë
                </p>
                <a 
                  href="tel:049585195"
                  className="bg-white text-[#C2352A] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Telefono Tani</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubscriptionPage;