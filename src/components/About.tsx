
import React, { useState, useEffect } from 'react';
import { GraduationCap, Award, Trophy, Users, User } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: "Bachelor",
      institution: " BUT Sciences des Données – SpécialitéVisualisation et Conception      d'Outils Décisionnels",
      location: "Université Clermont Auvergne IUT Aurillac",
      year: "2024–2025",
      icon: Award
    },
    {
      degree: "Licence Professionnelle",
      institution: " Licence Professionnelle en Infrastructureset Analyse des Données Massives (BigData)",
      location: "Ecole Supérieure de Technologie (Maroc)",
      year: "2023–2024",
      icon: Award
    },
    {
      degree: "Licence Professionnelle",
      institution: "DUT Informatique décisionnelle et science de données",
      location: "Ecole Supérieure de Technologie (Maroc)",
      year: "2021–2023",
      icon: Award
    }
  ];

  const certifications = [
    "Certificate of attendeance in machine learning",
    "Microsoft parcours d’apprentissage Développer des solutions d’IA générative avec Azure OpenAI Service",
    "Microsoft module pour Gérer l’identité pour les projets, les pipelines et les agents"
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4">
            <User className="text-blue-600" size={48} />
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              À Propos de Moi
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un développeuse passionnée avec une solide formation en informatique et data science, 
            apprenant constamment et construisant des solutions innovantes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Formation</h3>
            {education.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <div 
                  key={index} 
                  className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-all duration-300 border border-blue-100 hover:border-blue-200 hover:shadow-md group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-all duration-300">
                      <IconComponent size={24} className="text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{edu.degree}</h4>
                      <p className="text-blue-600 mb-1">{edu.institution}</p>
                      <p className="text-gray-500 text-sm">{edu.location} • {edu.year}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Certifications */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Certifications & Ateliers</h3>
            
            <div className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-all duration-300 border border-blue-100 hover:border-blue-200 hover:shadow-md">
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-gray-600 flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-all duration-300 border border-blue-100 hover:border-blue-200 hover:shadow-md">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Domaines de Spécialisation</h4>
              <div className="grid grid-cols-2 gap-3">
                {["Data Science", "Intégration IA", "Cloud Computing"].map((area, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-2 bg-white/70 text-blue-700 rounded-lg text-sm font-medium border border-blue-200 text-center"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
