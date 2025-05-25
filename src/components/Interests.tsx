
import React from 'react';
import { DatabaseZap, ChartBarIncreasing, BarChart3, Container, ChartPie, Activity, Building2, Target, ChartArea } from 'lucide-react';

const Interests = () => {
  const interests = [
    {
      title: "UE 5.1 – Intégrer le traitement de données complexes",
      description: "Conception d’un outil décisionnel, migration vers NoSQL, enjeux Big Data, sécurité et confidentialité des données",
      icon: DatabaseZap,
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      details: [
        "Conception d’un outil décisionnel",
        "Migration vers NoSQL",
        "Enjeux Big Data",
        "Sécurité et confidentialité des données"
      ]
    },
    {
      title: "UE 5.2 – Mettre en œuvre l’analyse exploratoire de données complexes",
      description: "Application de techniques de datamining pour l’analyse de données complexes.",
      icon: ChartBarIncreasing,
      gradient: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      details: [
        "Datamining : exploration, classification, clustering",
        "Développement du plan de carrière"
      ]
    },
    {
      title: "UE 5.3 – Intégrer et valoriser sa production dans l’écosystème de l’entreprise",
      description: "Mise en valeur des résultats à travers la visualisation, la communication éthique et professionnelle, y compris en anglais.",
      icon: BarChart3,
      gradient: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      details: [
        "Visualisation",
        "Communication responsable",
        "Éthique",
        "Anglais professionnel",
        "Migration vers NoSQL"
      ]
    },
    {
      title: "UE 5.4 – Participer au déploiement d’une solution décisionnelle",
      description: "Développement logiciel orienté décisionnel, visualisation web et mise en production d’outils décisionnels.",
      icon: Container,
      gradient: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      details: [
        "Développement logiciel",
        "Visualisation web",
        "Déploiement d’un outil décisionnel"
      ]
    },
    {
      title: "UE 6.1 – Intégrer le traitement de données complexes",
      description: "Développement avancé d’outils décisionnels, tests de sécurité (pentest), introduction à la blockchain et gestion de projet.",
      icon: ChartArea,
      gradient: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      details: [
        "Développement et test d’un outil décisionnel",
        "Sécurité (pentest)",
        "Stage et portfolio",
        "Blockchain, MCO"
      ]
    },
    {
      title: "UE 6.2 – Mettre en œuvre l’analyse exploratoire de données complexes",
      description: "Approfondissement en analyse statistique et apprentissage automatique pour l’intelligence artificielle.",
      icon: ChartArea,
      gradient: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      details: [
        "Analyse statistique",
        "Apprentissage statistique",
        "IA"
      ]
    },
    {
      title: "UE 6.3 – Intégrer et valoriser sa production dans l’écosystème de l’entreprise",
      description: "Communication professionnelle et managériale, présentation de stage, étude de cas sectorielle et anglais appliqué.",
      icon: Building2,
      gradient: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      details: [
        "Présentation de stage (180s)",
        "Anglais professionnel",
        "Étude de cas tourisme",
        "Communication managériale"
      ]
    },
    {
      title: "UE 6.4 – Participer au déploiement d’une solution décisionnelle",
      description: "Mise en production avancée d’outils décisionnels, intégration des technologies Big Data et applications blockchain.",
      icon: Building2,
      gradient: "from-blue-500 to-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      details: [
        "Développement avancé d’un outil décisionnel",
        "Big Data",
        "Blockchain, MCO et Bitcoin"
      ]
    }

  ];

  const additional_interests = [
    "Technologie Financière",
    "Trading Algorithmique",
    "Stratégies d'Investissement",
    "Psychologie de Marché",
    "Analyse Économique",
    "Optimisation de Portefeuille"
  ];

  return (
    <section id="interests" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4">
            <Target className="text-blue-600" size={48} />
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
            Modules 
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Au-delà de la technologie, je suis passionné par les marchés financiers et les stratégies de trading.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {interests.map((interest, index) => {
            const IconComponent = interest.icon;
            return (
              <div
                key={index}
                className={`${interest.bgColor} rounded-xl p-8 hover:shadow-lg transition-all duration-300 border ${interest.borderColor} group`}
              >
                <div className="text-center mb-6">
                  <div className={`p-4 bg-gradient-to-r ${interest.gradient} rounded-xl inline-block group-hover:scale-110 transition-transform duration-300 mb-4`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{interest.title}</h3>
                  <p className="text-gray-600 text-sm">{interest.description}</p>
                </div>

                <div className="space-y-3">
                  {interest.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center">
                      <div className={`w-2 h-2 bg-gradient-to-r ${interest.gradient} rounded-full mr-3`}></div>
                      <span className="text-gray-600 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Interests */}

      </div>
    </section>
  );
};

export default Interests;
