import React from 'react';
import { Zap, Target, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            <span className="font-semibold">About Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Main bio */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                I'm <span className="font-semibold text-gray-900 dark:text-white">Raahil Mehta</span> — a developer and automation builder who applies an athlete's discipline to digital work.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-6">
                I've helped <span className="font-medium text-cyan-600 dark:text-cyan-400">Minus CO₂</span>, <span className="font-medium text-cyan-600 dark:text-cyan-400">Jain Associates</span>, and <span className="font-medium text-cyan-600 dark:text-cyan-400">Second Nature Sustainable Solutions</span> with websites, automation, and operational improvements.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 mb-8">
                Outside work I train daily — running, gym, and cricket — and bring that same consistency to projects. The discipline of athletic performance translates directly to building reliable, efficient systems.
              </p>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span>Let's Work Together</span>
                <Zap size={18} />
              </button>
            </div>
          </div>

          {/* Key attributes */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg">
                  <Code className="text-cyan-600 dark:text-cyan-400" size={20} />
                </div>
                <h4 className="font-semibold">Technical Focus</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Full-stack development</li>
                <li>• Workflow automation</li>
                <li>• System optimization</li>
                <li>• Clean energy tech</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Target className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <h4 className="font-semibold">Athletic Mindset</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Daily training routine</li>
                <li>• Performance tracking</li>
                <li>• Consistent improvement</li>
                <li>• Goal-oriented approach</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;