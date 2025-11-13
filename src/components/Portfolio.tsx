import React, { useMemo } from 'react';
import { ExternalLink } from 'lucide-react';

const Portfolio: React.FC = () => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

  const projects = useMemo(() => [
    {
      title: 'Minus CO₂ Automations',
      description: 'Automated site-cleaning alert system for solar portfolios.',
      image: '/Screenshot 2025-11-13 at 8.15.39 PM.png',
      url: '#',
      useImage: true,
      problem: 'Manual reporting and workflow inefficiencies.',
      solution: 'Built automation workflows to reduce reporting time and streamline data collection.',
      tools: 'Notion / Google Sheets / Make / custom scripts',
      result: 'Substantial time savings in manual reporting processes'
    },
    {
      title: 'Jain Associates Law Firm Website',
      description: 'Professional law firm website with SEO optimization and client inquiry conversion.',
      url: 'https://jain-associates-legal-website.vercel.app/',
      useIframe: true,
      problem: 'Outdated site, poor SEO, low conversion for enquiries.',
      solution: 'Rebuilt a clean, professional, SEO-optimized website.',
      tools: 'Lovable / modern responsive build',
      result: 'Improved clarity and user experience; site ready for client acquisition'
    },
    {
      title: 'Second Nature',
      description: 'Sustainable solutions platform for solar services and client onboarding.',
      url: 'https://secondnaturess.com/',
      useIframe: true,
      problem: 'Needed web presence and client-facing materials for solar services.',
      solution: 'Designed and launched a polished site and prototype workflows for client intake.',
      tools: 'Bolt / simple CMS / prototype links',
      result: 'Professional web presence established with streamlined client onboarding'
    },
    {
      title: 'Cryptbug (Secret Agency Site)',
      description: 'Specialized intelligence and security operations platform.',
      url: 'https://bird-ops-nexus.vercel.app/',
      useIframe: true,
      problem: 'Need for secure, specialized operations coordination platform.',
      solution: 'Built comprehensive platform with real-time coordination and intelligence tools.',
      tools: 'React / TypeScript / modern security practices',
      result: 'Secure, scalable platform for specialized operations'
    }
  ], []);

  const getProxyUrl = (targetUrl: string) => {
    return `${supabaseUrl}/functions/v1/website-proxy?url=${encodeURIComponent(targetUrl)}`;
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-700"
            >
              {/* Preview Section */}
              <div className="relative overflow-hidden bg-gray-200 dark:bg-gray-700 h-64 group-hover:shadow-inner">
                {project.useImage ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : project.useIframe ? (
                  <iframe
                    src={getProxyUrl(project.url)}
                    title={project.title}
                    className="w-full h-full border-none"
                    loading="lazy"
                  />
                ) : null}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500 pointer-events-none"></div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-4 mb-8">
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

                {/* View Project Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
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
