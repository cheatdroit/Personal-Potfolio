import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, MapPin } from 'lucide-react';
import { experiences, education } from '../data/experience';

const About: React.FC = () => {
  const skills = [
    { category: 'Cloud Platforms', items: ['AWS', 'Azure', 'Google Cloud'] },
    { category: 'DevOps Tools', items: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes'] },
    { category: 'Infrastructure', items: ['Terraform', 'Ansible', 'CloudFormation', 'Pulumi'] },
    { category: 'Monitoring', items: ['Prometheus', 'Grafana', 'ELK Stack', 'New Relic'] },
    { category: 'Security', items: ['OWASP', 'Vulnerability Assessment', 'Penetration Testing'] },
    { category: 'Programming', items: ['Python', 'Bash', 'JavaScript', 'Go'] },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                About Me
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                A passionate DevSecOps engineer from Vadodara, Gujarat, dedicated to building secure, scalable, and automated infrastructure solutions.
              </p>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>Vadodara, Gujarat, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600 dark:text-gray-400">Available for opportunities</span>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full blur-lg opacity-20"
                ></motion.div>
                
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-64 h-64 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-800"
                >
                  <img
                    src="/IMG_1743258166866.jpeg"
                    alt="Deependrasingh Kushvaha"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Info Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              My Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              From my early days as a security researcher to my current role in DevSecOps, I've been driven by a passion for creating secure, efficient, and scalable technology solutions. My journey spans across cybersecurity, cloud infrastructure, and automation, always with a focus on bridging the gap between development and operations while maintaining the highest security standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">2020</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Started as Security Researcher</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">2022</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Began B.Tech in Cyber Security</div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-2">2024</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Current DevSecOps Role</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <GraduationCap className="w-8 h-8 text-primary-600" />
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                  Education
                </h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Strong academic foundation in cybersecurity and information technology
              </p>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                  {edu.description && (
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Briefcase className="w-8 h-8 text-primary-600" />
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                  Work Experience
                </h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Professional journey in technical support, DevOps, and security
              </p>
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg relative"
                >
                  {exp.current && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        Current
                      </span>
                    </div>
                  )}
                  
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                        {exp.company}
                      </p>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description.map((desc, descIndex) => (
                      <li key={descIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600 dark:text-gray-400">{desc}</p>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Award className="w-8 h-8 text-primary-600" />
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                  Technical Skills
                </h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Comprehensive expertise across modern DevOps and cloud technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index * 0.1) + (skillIndex * 0.05), duration: 0.3 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;