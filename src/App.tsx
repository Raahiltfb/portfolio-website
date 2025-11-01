import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Cricket from './components/Cricket';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'portfolio', 'about', 'cricket', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} transition-colors duration-300`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
        <Header
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        
        <main>
          <section id="home">
            <Hero />
          </section>
          
          <section id="work">
            <Work />
          </section>
          
          <section id="portfolio">
            <Portfolio />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="cricket">
            <Cricket />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;