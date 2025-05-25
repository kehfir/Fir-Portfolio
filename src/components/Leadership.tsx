
import React from 'react';
import { Trophy, Users, Star, Award } from 'lucide-react';

const Leadership = () => {
  const achievements = [
    {
      title: "Hackoverse'24 Leadership",
      description: "Led a team of 4 developers in a competitive hackathon",
      result: "Top 5 Position",
      icon: Trophy,
      gradient: "from-yellow-500 to-orange-400",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    {
      title: "Webathon'24 Team Lead",
      description: "Successfully managed and guided a team through web development challenges",
      result: "Top 8 Position", 
      icon: Star,
      gradient: "from-purple-500 to-pink-400",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      title: "Event Management Leadership",
      description: "Head of Crowd Management for ABESEC event, ensuring smooth operations",
      result: "Successful Event",
      icon: Users,
      gradient: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    }
  ];

  const leadership_skills = [
    "Team Management",
    "Project Coordination", 
    "Strategic Planning",
    "Problem Solving",
    "Communication",
    "Event Management",
    "Crowd Control",
    "Crisis Management"
  ];

  return (
    <section id="leadership" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Leadership & Achievements
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Demonstrated leadership capabilities through successful team management and competitive achievements.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Achievements */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Key Achievements</h3>
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div 
                  key={index} 
                  className={`${achievement.bgColor} rounded-xl p-6 hover:shadow-lg transition-all duration-300 border ${achievement.borderColor} group`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 bg-gradient-to-r ${achievement.gradient} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{achievement.title}</h4>
                      <p className="text-gray-600 mb-3">{achievement.description}</p>
                      <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${achievement.gradient} text-white rounded-full text-sm font-medium`}>
                        <Award size={16} className="mr-2" />
                        {achievement.result}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Leadership Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Leadership Skills</h3>
            
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-6">Core Competencies</h4>
              <div className="grid grid-cols-2 gap-4">
                {leadership_skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-3 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg border border-emerald-100 hover:border-emerald-200 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-xl p-6 border border-emerald-200">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Leadership Philosophy</h4>
              <p className="text-gray-600 leading-relaxed">
                I believe in collaborative leadership that empowers team members to achieve their best. 
                My approach focuses on clear communication, strategic thinking, and creating an environment 
                where innovation thrives through collective effort and shared vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
