import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/cheatdroit',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/cheatdroit/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:info@deependra.me',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DK</span>
              </div>
              <span className="font-semibold text-gray-900 dark:text-white">
                Deependrasingh Kushvaha
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              DevSecOps & Cloud Engineer passionate about building secure, scalable infrastructure and automating complex workflows.
            </p>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Vadodara, Gujarat, India</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-primary-500 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Let's connect and collaborate on exciting projects!
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Deependrasingh Kushvaha. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;