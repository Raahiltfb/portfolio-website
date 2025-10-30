import React from 'react';
import { ArrowDown, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float animate-morphing"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-float animation-delay-2000 animate-morphing"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-3 animate-breathe"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fadeInUp">
          {/* Name with subtle animation */}
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-4 animate-slideInLeft hover-lift">
              <span className="font-semibold">Raahil</span>
              <span className="text-gray-600 dark:text-gray-400"> Mehta</span>
            </h1>
            
            <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6 animate-slideInRight animation-delay-300 stagger-2">
              <Zap className="text-cyan-500 animate-glow" size={20} />
              <span className="text-base sm:text-lg text-gray-600 dark:text-gray-400 font-medium text-center">
                Developer • Automation Builder • Athlete
              </span>
            </div>
          </div>
          
          {/* Main headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-4 sm:mb-6 animate-fadeInUp animation-delay-500">
            <span className="font-semibold text-gray-900 dark:text-white">Building efficient digital systems.</span>
            <br />
            <span className="text-gray-700 dark:text-gray-300">Living like an athlete.</span>
          </h2>
          
          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeInUp animation-delay-700 px-4 sm:px-0">
            I design web and automation solutions that simplify workflows and scale impact.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-20 animate-fadeInUp animation-delay-900 stagger-4 px-4 sm:px-0">
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-500 font-medium magnetic-btn hover-glow relative overflow-hidden text-sm sm:text-base"
            >
              <span className="absolute inset-0 animate-shimmer"></span>
              <span className="flex items-center justify-center">
                See My Work
                <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform duration-300 elastic" size={20} />
              </span>
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/10 transition-all duration-500 font-medium magnetic-btn glass-card text-sm sm:text-base"
            >
              Let's Build Together
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Scroll to explore</span>
            <ArrowDown className="text-gray-400" size={20} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;