import React from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'Minus CO₂ Automations',
      description: 'Automated site-cleaning alert system for solar portfolios.',
      image: '/Screenshot 2025-11-13 at 8.15.39 PM.png',
      url: '#',
      useImage: true
    },
    {
      title: 'Jain Associates Law Firm Website',
      description: 'Professional law firm website with SEO optimization and client inquiry conversion.',
      url: 'https://jain-associates-legal-website.vercel.app/',
      useIframe: true
    },
    {
      title: 'Second Nature',
      description: 'Sustainable solutions platform for solar services and client onboarding.',
      url: 'https://secondnaturess.com/',
      useIframe: true
    },
    {
      title: 'Cryptbug (Secret Agency Site)',
      description: 'Specialized intelligence and security operations platform.',
      url: 'https://bird-ops-nexus.vercel.app/',
      useIframe: true
    }
  ];

  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            <span className="font-semibold">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Live projects showcasing real business solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 flex flex-col h-full"
            >
              {/* Preview Section */}
              <div className="relative overflow-hidden bg-gray-200 dark:bg-gray-700 h-64 flex-shrink-0">
                {project.useImage ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : project.useIframe ? (
                  <iframe
                    src={project.url}
                    title={project.title}
                    className="w-full h-full border-none pointer-events-none group-hover:scale-105 transition-transform duration-500 origin-top"
                    style={{ transformOrigin: 'top center' }}
                  />
                ) : null}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* View Project Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    project.url === '#'
                      ? 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-default'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white hover:shadow-lg'
                  }`}
                  onClick={(e) => {
                    if (project.url === '#') {
                      e.preventDefault();
                    }
                  }}
                >
                  <span>{project.url === '#' ? 'No Live Link' : 'View Project'}</span>
                  {project.url !== '#' && (
                    <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Ready to Build Something Great?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              Let's discuss your project and how we can deliver real results.
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