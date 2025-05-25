import React from 'react';
import { Github, ExternalLink, ShoppingCart, MessageCircle, Edit3, Calculator, Building2, Play, Eye, FolderOpen } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Détection des émotions à partir de texte",
      description: "Un projet de Big Data en R visant à prédire les émotions exprimées dans des messages textuels. L'objectif est de transformer un corpus en une information émotionnelle utile, pour des applications comme la modération de contenu ou le suivi du bien-être.",
      techStack: ["R", "tidyverse", "caret"],
      github: "",
      videoLink: "",
      icon: ShoppingCart,
      gradient: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      features: [
        "Prétraitement du texte : nettoyage, tokenisation",
        "Exploration des classes émotionnelles",
        "Entraînement de plusieurs modèles et comparaison de leur performance",
        "Validation croisée",
        "Visualisation des résultats par nuages de mots et matrices de confusion"
      ],
      stats: {
        lines: "2000+",
        features: "5+",
        tech: "3"
      }
    },
    {
      title: "Hospital Management System",
      description: "Application web de gestion hospitalière simulée, conçue pour améliorer l'organisation des services hospitaliers : patients, médecins, rendez-vous, etc. Interface simple et fluide à destination des personnels hospitaliers.",
      techStack: ["Node.js", "HTML", "CSS", "JavaScript", "Sqlite"],
      github: "",
      videoLink: "",
      icon: MessageCircle,
      gradient: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      features: [
        "Gestion des utilisateurs : patients, médecins, Admin",
        "Système CRUD pour les enregistrements médicaux",
        "Interface responsive en HTML/CSS",
        "Routage serveur pour les différentes entités",
        "Base de données SQLite intégrée"
      ],
      stats: {
        lines: "3500+",
        features: "8+",
        tech: "5"
      }
    },
    {
      title: "Open Web Calendar",
      description: "Un agenda interactif codé en HTML, CSS et JavaScript. Il permet d'afficher des événements via une intégration iframe, idéal pour un usage personnel ou collaboratif (par exemple dans une classe ou une association).",
      techStack: ["HTML", "CSS", "JavaScript", "Intégration iframe", "Manipulation DOM"],
      github: "",
      videoLink: "",
      icon: Edit3,
      gradient: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      features: [
        "Génération dynamique d'un calendrier mensuel",
        "Affichage d'événements via iframe externe",
        "Interface claire avec navigation par Année",
        "Possibilité d'intégration sur un site web",
        "Manipulation DOM avancée"
      ],
      stats: {
        lines: "1500+",
        features: "6+",
        tech: "5"
      }
    },
    {
      title: "Analyse de la croissance des enfants",
      description: "Projet réalisé à partir de données médicales réelles fournies sous forme de fichier CSV (croissance.csv). L'objectif était de prédire les anomalies de croissance à l'aide de l'analyse statistique, de l'interpolation et de la classification supervisée.",
      techStack: ["R", "spline", "ggplot2", "validation croisée", "modèles de classification (KNN, forêt aléatoire, arbre de décision)"],
      github: "",
      videoLink: "",
      icon: Calculator,
      gradient: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      features: [
        "Analyse exploratoire des données de croissance",
        "Interpolation des courbes de croissance avec spline",
        "Classification supervisée pour détecter les anomalies",
        "Visualisation des résultats avec ggplot2",
        "Comparaison de différents modèles de classification"
      ],
      stats: {
        lines: "2500+",
        features: "7+",
        tech: "6"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up flex items-center justify-center gap-4">
            <FolderOpen className="text-blue-600" size={48} />
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Projets 
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-up">
            Une vitrine de mon travail récent, démontrant mon expertise en développement full-stack, technologies modernes et approches innovantes de résolution de problèmes.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className={`group ${project.bgColor} rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border ${project.borderColor} hover:scale-[1.01] animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-12">
                    {/* Project Header */}
                    <div className="flex-shrink-0 mb-8 lg:mb-0 lg:w-80">
                      <div className="flex items-center mb-6">
                        <div className={`p-4 bg-gradient-to-r ${project.gradient} rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <IconComponent size={32} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col space-y-3">
                        <a
                          href={`https://github.com/kehfir/${project.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group/btn`}
                        >
                          <Github size={20} className="mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                          Voir le Code Source
                        </a>

                        {project.videoLink && (
                          <a
                            href={project.videoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                          >
                            <Play size={20} className="mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                            Regarder la Démo
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="flex-1">
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">Technologies Utilisées</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:border-gray-300 transition-colors duration-200">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features Grid */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-3 uppercase tracking-wide">Fonctionnalités Clés</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {project.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start group/feature">
                              <div className={`w-2 h-2 bg-gradient-to-r ${project.gradient} rounded-full mr-3 mt-2 group-hover/feature:scale-125 transition-transform duration-200`}></div>
                              <span className="text-gray-600 text-sm leading-relaxed group-hover/feature:text-gray-800 transition-colors duration-200">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
