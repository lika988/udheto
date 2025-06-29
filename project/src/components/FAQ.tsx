import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "A mund të blej vetëm kamerën pa instalim?",
      answer: "Jo! Ne ofrojmë vetëm paketa të integruara (shitje + instalim) për të garantuar cilësinë dhe funksionimin e plotë të sistemit. Kjo na lejon të ofrojmë garanci të plotë dhe mbështetje të vazhdueshme."
    },
    {
      question: "Sa kushton konsultimi paraprak?",
      answer: "Konsultimi përmes telefonit është falas për të gjithë! Për vizitë fizike në objektin tuaj, çmimi tregohet në telefon dhe varet nga distanca dhe kompleksiteti i objektit."
    },
    {
      question: "Sa kohë zgjat instalimi?",
      answer: "Instalimi zgjat nga 1 deri në 3 orë, në varësi të paketës dhe kompleksitetit të objektit. Për paketa më të mëdha ose objekte të veçanta, mund të kërkojë më shumë kohë, por gjithmonë ju informojmë paraprakisht."
    },
    {
      question: "Çfarë përfshin mbështetja pas instalimit?",
      answer: "Mbështetja përfshin: ndihmë teknike 24/7, përditësime software, zgjidhje problemesh, këshillime për përdorim optimal, dhe shërbim riparimi në rast nevoje."
    },
    {
      question: "A keni garanci për pajisjet dhe instalimin?",
      answer: "Po! Ofrojmë garanci 2-3 vjet për pajisjet (në varësi të paketës) dhe garanci të plotë për instalimin. Gjithashtu kemi siguracion profesional për të gjitha punët që kryejmë."
    },
    {
      question: "A mund të shoh pamjen e kamerave nga telefoni?",
      answer: "Absolutisht! Të gjitha paketat tona përfshijnë konfigurimin e aplikacionit mobil që ju lejon të shikoni pamjen live, të ruani regjistrime, dhe të merrni njoftime në kohë reale."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1B1B1B] mb-4">
            Pyetje të Shpeshta
          </h2>
          <p className="text-xl text-[#6B6B6B]">
            Përgjigjet për pyetjet më të zakonshme rreth shërbimeve tona
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
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
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-[#C2352A]" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[#6B6B6B]" />
                    )}
                  </div>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
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
  );
};

export default FAQ;