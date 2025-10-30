import React from 'react';
import { ExternalLink, ArrowRight, CheckCircle, Clock, Wrench } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Minus CO₂ — Automation & Operations',
      category: 'Automation',
      problem: 'Manual reporting and workflow inefficiencies.',
      solution: 'Built automation workflows and prototypes to reduce reporting time and streamline data collection.',
      tools: 'Notion / Google Sheets / Make / custom scripts',
      result: 'Substantial time savings in manual reporting processes',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      status: 'completed',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Jain Associates — Law Firm Website',
      category: 'Web Development',
      problem: 'Outdated site, poor SEO, low conversion for enquiries.',
      solution: 'Rebuilt a clean, professional, SEO-optimized website.',
      tools: 'Lovable / modern responsive build',
      result: 'Improved clarity and user experience; site ready for client acquisition',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      status: 'completed',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Second Nature Sustainable Solutions — Website & Prototype',
      category: 'Web Development',
      problem: 'Needed web presence and client-facing materials for solar services.',
      solution: 'Designed and launched a polished site and prototype workflows for client intake.',
      tools: 'Bolt / simple CMS / prototype links',
      result: 'Professional web presence established with streamlined client onboarding',
      image: 'https://images.pexels.com/photos/9875416/pexels-photo-9875416.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      status: 'completed',
      color: 'from-green-500 to-blue-500'
    },
    {
      title: 'Sample — Demo Project 1',
      category: 'E-commerce Platform',
      problem: 'Complex inventory management and poor user experience.',
      solution: 'Built modern e-commerce platform with automated inventory tracking.',
      tools: 'React / Node.js / PostgreSQL / Stripe',
      result: 'Streamlined operations and improved conversion rates',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      status: 'sample',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Sample — Demo Project 2',
      category: 'SaaS Dashboard',
      problem: 'Data scattered across multiple platforms, no unified view.',
      solution: 'Created comprehensive analytics dashboard with real-time insights.',
      tools: 'Next.js / TypeScript / D3.js / API integrations',
      result: 'Centralized data access and improved decision-making speed',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      status: 'sample',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            <span className="font-semibold">Selected Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real solutions for real businesses — from automation workflows to complete web platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover-lift border border-gray-100 dark:border-gray-700 relative"
            >
              <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 elastic"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                
                {/* Status badge */}
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-semibold rounded-full`}>
                    {project.category}
                  </div>
                  {project.status === 'sample' && (
                    <div className="px-3 py-1 bg-gray-800/80 text-white text-xs font-medium rounded-full">
                      Sample Project
                    </div>
                  )}
                </div>

                {/* Status icon */}
                <div className="absolute top-4 right-4">
                  {project.status === 'completed' ? (
                    <div className="p-2 bg-green-500 rounded-full">
                      <CheckCircle size={16} className="text-white" />
                    </div>
                  ) : (
                    <div className="p-2 bg-gray-600 rounded-full">
                      <Wrench size={16} className="text-white" />
                    </div>
                  )}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Problem</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{project.problem}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Solution</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{project.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Tools</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{project.tools}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Result</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{project.result}</p>
                  </div>
                </div>
                
                <button className="group/btn flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 font-medium text-sm transition-all duration-200 w-full justify-center py-3 rounded-lg hover:bg-cyan-50 dark:hover:bg-cyan-900/20">
                  <span>{project.status === 'sample' ? 'View Demo' : 'View Project'}</span>
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Ready to Build Something Great?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              These projects represent systematic approaches to real business challenges. Let's discuss your vision.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;