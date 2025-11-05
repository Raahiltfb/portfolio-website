import React from 'react';
import { Code, Zap, Megaphone, FileText, GraduationCap, ArrowRight } from 'lucide-react';

const Work: React.FC = () => {
  const coreServices = [
    {
      icon: <Code size={28} />,
      title: 'Web Development & Responsive Sites',
      benefit: 'Fast, conversion-focused builds',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Zap size={28} />,
      title: 'Business Automation & AI Integrations',
      benefit: 'Reduce manual work, save time',
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const additionalWork = [
    {
      icon: <Megaphone size={28} />,
      title: 'Digital Strategy & Social Media for Clean-tech',
      description: 'Working at Minus CO₂ on growth and pipeline',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FileText size={28} />,
      title: 'Proposal Design & Sales Support',
      description: 'Clear, persuasive commercial materials',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <GraduationCap size={28} />,
      title: 'Academic Tutoring & Essay Coaching',
      description: 'IGCSE, IB DP, college apps (NYU, USC, Emory)',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-lg text-cyan-600 dark:text-cyan-400 font-medium mb-4">
            Software, automation, and operational systems — delivered for real businesses.
          </p>
          <br><br>
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            <span className="font-semibold">What I Build</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              I provide software solutions and automation, and I also work at Minus CO₂ in social media, 
              proposal design, sales, software prototyping, and electricity consumption analysis for solar feasibility.
            </p>
            <div className="inline-flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700">
              <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
              <span>IBM Full Stack Software Developer Professional Certificate</span>
            </div>
          </div>
        </div>

        {/* Core Services */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">What I Build</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover-lift border border-gray-100 dark:border-gray-700 hover:border-transparent relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-8 transition-opacity duration-500 rounded-2xl`}></div>
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 elastic animate-glow`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {service.benefit}
                  </p>
                  
                  <div className="flex items-center text-gray-500 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 font-medium transition-colors duration-300">
                    <span>Learn more</span>
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform duration-300" size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Work */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">Additional Work & Roles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalWork.map((work, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${work.color} text-white mb-4 group-hover:scale-105 transition-transform duration-200`}>
                  {work.icon}
                </div>
                
                <h4 className="font-semibold mb-2 text-sm">{work.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{work.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-action section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Automate & Scale?</h3>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Whether you need efficient web solutions, workflow automation, or strategic digital growth, 
                I bring athletic discipline to every project.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-cyan-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
