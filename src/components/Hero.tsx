
import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown, Code, ArrowRight, Download, User } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/kehfir', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/firdaouss-kehailou-9166a4241/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:Firdaouss.KEHAILOU@etu.uca.fr', label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in-up">
          {/* Professional Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200 mb-6 animate-slide-down">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">Disponible pour de nouvelles opportunités</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-in-left">
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent leading-tight">
              Firdaous kehailou
            </span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6 animate-slide-in-right">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full text-sm font-medium border border-blue-200">
              Data Analyst  , Data Scientist
            </span>
  
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto animate-scale-in">
            <div className="flex items-center justify-center md:justify-end text-gray-600 space-x-2 hover:text-blue-600 transition-colors duration-300">
              <MapPin size={18} />
              <span className="font-medium">Clermont Ferrand , France</span>
            </div>
            <div className="flex items-center justify-center md:justify-start text-gray-600 space-x-2 hover:text-blue-600 transition-colors duration-300">
              <Phone size={18} />
              <span className="font-medium">0611075338</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in">
         



           Passionnée par l’exploitation des données pour générer des solutions à forte valeur ajoutée.
            Spécialisé dans le <span className="font-semibold text-blue-600">en data science</span>  visualisation et machine learning ,avec un intérêt marqué pour
            <span className="font-semibold text-blue-600"> l’intelligence artificielle</span>et l’ingénierie des données afin de concevoir des analyses pertinentes et des outils décisionnels performants.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12 animate-slide-up">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200 hover:bg-white hover:border-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  aria-label={link.label}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <IconComponent size={24} className="text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                </a>
              );
            })}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-rotate-in">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <Download size={20} className="mr-2 group-hover:translate-y-1 transition-transform duration-300" />
              <span>Télécharger CV</span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
