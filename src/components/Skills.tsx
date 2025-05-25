
import React from 'react';
import { Code, Server, Database, Cloud, Brain, Wrench, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Développement Frontend",
      icon: Code,
      color: "from-blue-500 to-blue-400",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      borderColor: "border-blue-200 hover:border-blue-300",
      skills: ["React.js", "Bootstrap", "HTML5", "CSS3", "JavaScript ", "Design Responsive"]
    },
    {
      title: "Développement Backend",
      icon: Server,
      color: "from-blue-600 to-blue-500",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      borderColor: "border-blue-200 hover:border-blue-300",
      skills: ["Node.js", "Express.js", "APIs RESTful"]
    },
    {
      title: "Base de Données",
      icon: Database,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      borderColor: "border-blue-200 hover:border-blue-300",
      skills: ["MongoDB", "Mongoose", "NoSQL","Hbase","Neo4J"]
    },
    {
      title: "Cloud & IA",
      icon: Cloud,
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      borderColor: "border-blue-200 hover:border-blue-300",
      skills: ["AWS", "Gemini AI", "AR/VR"]
    },
    {
      title: "Outils & Technologies",
      icon: Wrench,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      borderColor: "border-blue-200 hover:border-blue-300",
      skills: ["Git", "GitHub", "Postman"]
    },
    {
      title: "Data & AI ",
      icon: Brain,
      color: "from-blue-600 to-blue-500",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      borderColor: "border-blue-200 hover:border-blue-300",
      skills: ["Big Data", "Machine Learning", "PowerBi","Excel avancé"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up flex items-center justify-center gap-4">
            <Zap className="text-blue-600" size={48} />
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Compétences & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-slide-up">
            Un ensemble complet d'outils de technologies modernes et de méthodologies pour construire des applications évolutives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`${category.bgColor} rounded-xl p-8 transition-all duration-300 border ${category.borderColor} hover:shadow-lg group animate-scale-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg mr-4 transition-transform duration-300 group-hover:scale-110`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center transition-all duration-300 hover:translate-x-2"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full mr-3`}></div>
                      <span className="text-gray-700 text-sm">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
