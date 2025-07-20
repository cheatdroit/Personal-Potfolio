import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ChevronDown, Shield, Cloud, Code, Zap } from 'lucide-react';

const Home: React.FC = () => {
  const skills = [
    { icon: Shield, name: 'Security', color: 'text-red-500' },
    { icon: Cloud, name: 'Cloud', color: 'text-blue-500' },
    { icon: Code, name: 'DevOps', color: 'text-green-500' },
    { icon: Zap, name: 'Automation', color: 'text-yellow-500' },
  ];

  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies Mastered' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
                >
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                    Deependrasingh
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-medium"
                >
                  DevSecOps | Cloud | Security | Automation
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
                >
                  Passionate about DevOps, Cloud, and Security with hands-on experience in CI/CD, AWS, Terraform, Kubernetes, and infrastructure automation. I build secure, scalable systems that drive innovation.
                </motion.p>
              </div>

              {/* Skills Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-wrap gap-6"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700"
                  >
                    <skill.icon className={`w-5 h-5 ${skill.color}`} />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </motion.button>
                
                <Link to="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 dark:text-primary-400 font-semibold rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                  >
                    View Projects
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex justify-center"
            >
              <div className="relative">
                {/* Animated background rings */}
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 rounded-full blur-xl opacity-20"
                ></motion.div>
                
                <motion.div
                  animate={{ rotate: -360, scale: [1, 0.9, 1] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 bg-gradient-to-l from-accent-300 via-primary-300 to-accent-300 rounded-full blur-lg opacity-30"
                ></motion.div>
                
                {/* Main profile container */}
                <motion.div
                  animate={{ float: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800"
                >
                  {/* Profile Image */}
                  <img
                    src="/IMG_1743258166866.jpeg"
                    alt="Deependrasingh Kushvaha"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient for better text visibility if needed */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Status indicator */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-6 right-6 w-6 h-6 bg-green-500 rounded-full border-3 border-white dark:border-gray-800 shadow-lg"
                  >
                    <div className="absolute inset-1 bg-green-400 rounded-full animate-pulse"></div>
                  </motion.div>
                </motion.div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 rounded-lg shadow-lg opacity-80"
                ></motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                  className="absolute -bottom-2 -right-6 w-6 h-6 bg-accent-500 rounded-full shadow-lg opacity-70"
                ></motion.div>
                
                <motion.div
                  animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                  className="absolute top-1/2 -left-8 w-4 h-4 bg-secondary-500 rounded-sm shadow-lg opacity-60"
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-400"
          >
            <span className="text-sm">Scroll down</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                Building Tomorrow's Infrastructure Today
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                With expertise spanning across DevOps, cloud platforms, and security, I help organizations transform their infrastructure into secure, scalable, and automated systems that drive business growth.
              </p>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Learn More About Me
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <Shield className="w-8 h-8 text-red-500 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Security First</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Implementing security best practices from the ground up.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <Cloud className="w-8 h-8 text-blue-500 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cloud Native</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Designing scalable solutions for modern cloud platforms.
                  </p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <Code className="w-8 h-8 text-green-500 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">DevOps Excellence</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Streamlining development and operations workflows.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <Zap className="w-8 h-8 text-yellow-500 mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Automation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Reducing manual work through intelligent automation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;