import React, { useState } from 'react';
import { Phone, Mail, Clock, Send, Facebook, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Faleminderit! Do t\'ju kontaktojmë së shpejti.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1B1B1B] mb-4">
            Kontaktoni me ne
          </h2>
          <p className="text-lg sm:text-xl text-[#6B6B6B] max-w-3xl mx-auto">
            Jemi gati për t'ju ndihmuar me sistemin tuaj të sigurisë. 
            Kontaktoni sot për një konsultim falas!
          </p>
        </div>

        {/* Mobile-First Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <a 
            href="tel:049585195"
            className="bg-[#C2352A] hover:bg-[#A02B22] text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Telefono Tani</h3>
              <p className="text-2xl font-bold mb-1">049 585 195</p>
              <p className="text-sm opacity-90">24/7 për emergjenca</p>
            </div>
          </a>

          <a 
            href="mailto:bufi.tech@proton.me"
            className="bg-[#E37C28] hover:bg-[#D16A1F] text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Dërgo Email</h3>
              <p className="text-lg font-semibold mb-1">bufi.tech@proton.me</p>
              <p className="text-sm opacity-90">Përgjigje brenda 2 orësh</p>
            </div>
          </a>

          <div className="bg-green-500 text-white p-6 rounded-2xl shadow-lg sm:col-span-2 lg:col-span-1">
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Orari i Punës</h3>
              <div className="space-y-1 text-sm">
                <p><strong>E Hënë - E Premte:</strong> 08:00 - 18:00</p>
                <p><strong>E Shtunë:</strong> 09:00 - 14:00</p>
                <p className="opacity-90">Emergjenca: 24/7</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-[#1B1B1B] mb-6">
              Dërgoni një mesazh
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1B1B1B] mb-2">
                  Emri i plotë *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C2352A] focus:border-transparent transition-all duration-300 text-base"
                  placeholder="Shkruani emrin tuaj"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#1B1B1B] mb-2">
                  Numri i telefonit *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C2352A] focus:border-transparent transition-all duration-300 text-base"
                  placeholder="049 123 456"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1B1B1B] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C2352A] focus:border-transparent transition-all duration-300 text-base"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1B1B1B] mb-2">
                  Mesazhi *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C2352A] focus:border-transparent transition-all duration-300 resize-none text-base"
                  placeholder="Përshkruani nevojat tuaja për sistem sigurie..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C2352A] hover:bg-[#A02B22] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
                <span>DËRGO MESAZHIN</span>
              </button>
            </form>

            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-800 text-sm">
                <strong>Konsultimi falas!</strong> Do t'ju kontaktojmë brenda 24 orëve për të planifikuar një vizitë falas në objektin tuaj.
              </p>
            </div>
          </div>

          {/* Social Media & Additional Info */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="bg-gradient-to-r from-[#C2352A] to-[#E37C28] text-white p-6 sm:p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Konsultim Falas!</h3>
              <p className="text-lg mb-6 opacity-90">
                Vijmë në objektin tuaj, analizojmë nevojat dhe ofrojmë zgjidhjen më të përshtatshme pa pagesë.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:049585195"
                  className="bg-white text-[#C2352A] px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>049 585 195</span>
                </a>
                <a 
                  href="mailto:bufi.tech@proton.me"
                  className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white/30 transition-colors flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-100 p-6 sm:p-8 rounded-2xl">
              <h4 className="text-xl font-bold text-[#1B1B1B] mb-4">Na ndiqni në rrjetet sociale</h4>
              <div className="space-y-4">
                <a 
                  href="#" 
                  className="flex items-center space-x-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1B1B1B]">Facebook</p>
                    <p className="text-sm text-[#6B6B6B]">@bufi.tech</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-lg transition-colors group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1B1B1B]">Instagram</p>
                    <p className="text-sm text-[#6B6B6B]">@bufi.tech</p>
                  </div>
                </a>

                <a 
                  href="https://www.tiktok.com/@bufi.tech" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors group"
                >
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-white">TikTok</p>
                    <p className="text-sm text-gray-300">@bufi.tech</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;