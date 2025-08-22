import React from 'react';
import { Building2, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Maritim Muda Nusantara',
      position: 'Website Developer & Administrator',
      period: 'Batch 6 - MSIB',
      duration: '2024',
      location: 'On-site',
      description: 'Developed and maintained theblueeconomist.org website using React and Tailwind CSS. Integrated Midtrans payment gateway for membership registration and certification programs.',
      technologies: ['React', 'Tailwind CSS', 'Midtrans', 'JavaScript'],
      website: 'https://theblueeconomist.org',
      highlights: [
        'Built membership registration system for The Blue Economist',
        'Integrated payment gateway for certification programs',
        'Implemented responsive design with modern UI/UX',
        'Managed website administration and content updates'
      ]
    },
    {
      company: 'Maritim Muda Nusantara',
      position: 'Website Developer',
      period: 'Batch 5 - MSIB',
      duration: '2023',
      location: 'On-site',
      description: 'Developed maritimmuda.id company profile website using Laravel framework. Created e-KTA membership system for Maritim Muda Nusantara organization.',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Digital Ocean', 'Bootstrap'],
      website: 'https://maritimmuda.id',
      highlights: [
        'Built company profile website for Maritim Muda Nusantara',
        'Developed e-KTA membership registration system',
        'Deployed and maintained website on Digital Ocean',
        'Implemented responsive design and user management'
      ]
    },
    {
      company: 'Teelite Club Studio',
      position: 'Full-Stack Developer',
      period: 'Freelance Project',
      duration: '2025',
      location: 'Remote',
      description: 'Developed teeliteclub.com, an exclusive clothing store website inspired by Ginseng Strip design. Built with modern technologies for optimal performance.',
      technologies: ['Vite', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      website: 'https://teeliteclub.com',
      highlights: [
        'Created exclusive clothing store with modern design',
        'Implemented responsive e-commerce functionality',
        'Used TypeScript for type safety and better development experience',
        'Integrated Supabase for backend services'
      ]
    }
  ];

  return (
    <section id="experience" className="section-consistent section-padding">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/3 via-transparent to-accent-500/3" />

      <div className="container-custom relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Professional Experience
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            My journey through various roles and projects that have shaped my expertise
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="glass rounded-2xl p-8 shadow-dark-xl border border-dark-700/50 hover:border-primary-500/30 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(14, 165, 233, 0.2)",
                scale: 1.01
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Left Column - Company Info */}
                <div className="space-y-4">
                  <motion.div 
                    className="flex items-center space-x-3"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-primary-gradient rounded-lg flex items-center justify-center shadow-glow"
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        boxShadow: "0 10px 30px rgba(14, 165, 233, 0.4)" 
                      }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Building2 size={24} className="text-white" />
                    </motion.div>
                    <div>
                      <motion.h3 
                        className="text-xl font-bold text-white"
                        whileHover={{ color: "#0ea5e9" }}
                        transition={{ duration: 0.2 }}
                      >
                        {exp.company}
                      </motion.h3>
                      <motion.p 
                        className="text-primary-400 font-semibold"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {exp.position}
                      </motion.p>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="space-y-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    <motion.div 
                      className="flex items-center space-x-2 text-gray-400"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      whileHover={{ x: 5, color: "#0ea5e9" }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Calendar size={16} />
                      <span>{exp.period} • {exp.duration}</span>
                    </motion.div>
                    <motion.div 
                      className="flex items-center space-x-2 text-gray-400"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                      }}
                      whileHover={{ x: 5, color: "#0ea5e9" }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </motion.div>
                  </motion.div>

                  <div className="pt-2">
                    <motion.a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-300"
                      whileHover={{ 
                        scale: 1.05,
                        x: 5
                      }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <span>Visit Website</span>
                      <motion.div
                        whileHover={{ rotate: 45 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ExternalLink size={16} />
                      </motion.div>
                    </motion.a>
                  </div>
                </div>

                {/* Right Column - Description and Highlights */}
                <div className="lg:col-span-2 space-y-4">
                  <motion.p 
                    className="text-gray-400 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    {exp.description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <h4 className="font-semibold text-white mb-3">Key Achievements:</h4>
                    <motion.ul 
                      className="space-y-2"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.1
                          }
                        }
                      }}
                    >
                      {exp.highlights.map((highlight, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start space-x-2"
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 }
                          }}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <motion.div 
                            className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0 shadow-glow-sm"
                            whileHover={{ scale: 1.5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          />
                          <span className="text-gray-400 text-sm">{highlight}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <h4 className="font-semibold text-white mb-3">Technologies Used:</h4>
                    <motion.div 
                      className="flex flex-wrap gap-2"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.05
                          }
                        }
                      }}
                    >
                      {exp.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium border border-primary-500/30 cursor-pointer"
                          variants={{
                            hidden: { opacity: 0, scale: 0 },
                            visible: { opacity: 1, scale: 1 }
                          }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: "rgba(14, 165, 233, 0.3)",
                            borderColor: "rgba(14, 165, 233, 0.5)",
                            color: "rgb(147, 197, 253)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Education Section */}
        <motion.div 
          className="mt-16 glass rounded-2xl p-8 shadow-dark-xl border border-dark-700/50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ 
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(245, 158, 11, 0.2)",
            borderColor: "rgba(245, 158, 11, 0.3)"
          }}
        >
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-2 gradient-text"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Education
            </motion.h3>
            <motion.p 
              className="text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              My academic foundation
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.div 
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="w-16 h-16 bg-accent-gradient rounded-full flex items-center justify-center shadow-glow-accent"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 10,
                  boxShadow: "0 15px 40px rgba(245, 158, 11, 0.5)" 
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Building2 size={24} className="text-white" />
              </motion.div>
              <div>
                <motion.h4 
                  className="text-xl font-bold text-white"
                  whileHover={{ color: "#f59e0b" }}
                  transition={{ duration: 0.2 }}
                >
                  Universitas Sultan Ageng Tirtayasa
                </motion.h4>
                <motion.p 
                  className="text-gray-400"
                  whileHover={{ color: "#0ea5e9" }}
                  transition={{ duration: 0.2 }}
                >
                  Bachelor's Degree in Computer Science
                </motion.p>
                <motion.p 
                  className="text-sm text-gray-500"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  Graduated with focus on web development and software engineering
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

