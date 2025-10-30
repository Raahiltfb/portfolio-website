import React, { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle, Linkedin, Github, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  const contactLinks = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'raahil.mehta@email.com',
      href: 'mailto:raahil.mehta@email.com',
      color: 'hover:text-cyan-600 dark:hover:text-cyan-400'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'Connect professionally',
      href: '#',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: 'View my code',
      href: '#',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      icon: <MessageCircle size={20} />,
      label: 'WhatsApp',
      value: 'Quick response',
      href: '#',
      color: 'hover:text-green-600 dark:hover:text-green-400'
    }
  ];

  return (
    <section className="py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            <span className="font-semibold">Let's Build Together</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Open for freelance projects, consulting, and tutoring.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-8">Get In Touch</h3>
            
            <div className="space-y-6 mb-10">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`flex items-center space-x-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 ${link.color} transition-all duration-200 hover:shadow-md group`}
                >
                  <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors duration-200">
                    {link.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{link.label}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-6 text-white">
              <h4 className="font-semibold text-lg mb-3">Why Work With Me?</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle size={16} className="mr-2 flex-shrink-0" />
                  Athletic discipline applied to every project
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="mr-2 flex-shrink-0" />
                  Systematic approach to problem-solving
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="mr-2 flex-shrink-0" />
                  Clear communication and regular updates
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="mr-2 flex-shrink-0" />
                  Efficient delivery without compromising quality
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent dark:bg-gray-700 dark:text-white resize-none transition-all duration-200"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                    isSubmitted
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : isFormValid && !isSubmitting
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white transform hover:scale-105'
                      : 'bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

              {isSubmitted && (
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-800 dark:text-green-300 text-sm">
                    Thanks for reaching out! I'll get back to you within 24 hours with a detailed response.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;