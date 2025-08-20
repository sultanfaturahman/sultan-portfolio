import React, { useState } from 'react';
import { Github, Globe, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';
import { usePerformance } from '../hooks/usePerformance';

// Component untuk handling image loading dengan fallback
const ProjectImage: React.FC<{
  src: string;
  alt: string;
  fallback: React.ReactNode;
}> = ({ src, alt, fallback }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (imageError) {
    return <>{fallback}</>;
  }

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading="lazy"
      />
      {!imageLoaded && (
        <div className="absolute inset-0">
          {fallback}
        </div>
      )}
      {imageLoaded && (
        <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-medium text-sm bg-black/50 px-3 py-1 rounded-full">
            View Project
          </span>
        </div>
      )}
    </>
  );
};

const Projects: React.FC = () => {
  const { shouldReduceAnimations } = usePerformance();
  const projects = [
    {
      title: 'The Blue Economist',
      description: 'Professional membership website for The Blue Economist organization with integrated payment gateway and certification programs.',
      image: '/images/projects/theblueeconomist.jpg',
      technologies: ['React', 'Tailwind CSS', 'Midtrans', 'JavaScript'],
      category: 'Web Application',
      website: 'https://theblueeconomist.org',
      github: 'https://github.com/maritimmuda-id',
      isOrganization: true,
      organizationName: 'Maritim Muda Nusantara',
      role: 'Lead Developer',
      // Case Study Format
      context: 'Membership organization needed digital transformation',
      problem: 'Manual registration process caused high drop-off rates and payment errors',
      approach: 'Built React-based platform with Midtrans integration and optimized UX',
      impact: {
        completion: '+38% completion rate',
        performance: 'LCP <1.2s',
        errors: '0 payment errors'
      },
      features: [
        'Membership registration system',
        'Payment gateway integration',
        'Certification programs',
        'Responsive design',
        'Admin dashboard'
      ]
    },
    {
      title: 'Maritim Muda Indonesia',
      description: 'Company profile website for Maritim Muda Nusantara with e-KTA membership system for organization members.',
      image: '/images/projects/maritimmuda.jpg',
      technologies: ['CodeIgniter', 'PHP', 'MySQL', 'Bootstrap', 'Digital Ocean'],
      category: 'Company Profile',
      website: 'https://maritimmuda.id',
      github: 'https://github.com/maritimmuda-id/maritimmuda.id',
      isOrganization: true,
      organizationName: 'Maritim Muda Nusantara',
      role: 'Full-Stack Developer',
      features: [
        'Company profile pages',
        'E-KTA membership system',
        'User management',
        'Responsive design',
        'Cloud deployment'
      ]
    },
    {
      title: 'Teelite Club',
      description: 'Exclusive clothing store website, authentic design, featuring modern e-commerce functionality.',
      image: '/images/projects/teeliteclub.jpg',
      technologies: ['Vite', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      category: 'E-Commerce',
      website: 'https://teeliteclub.com',
      isOrganization: true,
      organizationName: 'Teelite Club Studio',
      role : 'Full-Stack Developer',
      github: 'https://github.com/sultanfaturahman/teeliteclub',
      features: [
        'Product catalog',
        'Shopping cart',
        'User authentication',
        'Responsive design',
        'Modern UI/UX'
      ]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-dark-900 relative overflow-hidden section-lazy">
      {/* Enhanced Background Elements for Dark Theme */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl glow"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent-500/15 rounded-full blur-3xl glow-accent"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="container-custom relative z-10">
        <AnimatedSection direction="up" className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-white mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A showcase of my recent work and the technologies I've used to bring ideas to life, including organization projects
          </motion.p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.2}>
          {projects.map((project, index) => {
            const ProjectWrapper = project.website ? motion.a : motion.div;
            const wrapperProps = project.website ? {
              href: project.website,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "glass rounded-2xl shadow-dark-xl border border-dark-700/50 overflow-hidden group h-full flex flex-col hover:border-primary-500/30 cursor-pointer block"
            } : {
              className: "glass rounded-2xl shadow-dark-xl border border-dark-700/50 overflow-hidden group h-full flex flex-col hover:border-primary-500/30"
            };

            return (
            <StaggerItem key={index} direction="up">
              <ProjectWrapper
                {...wrapperProps}
                whileHover={shouldReduceAnimations ? {
                  y: -2,
                  scale: 1.005
                } : {
                  y: -6,
                  scale: 1.015
                }}
                transition={{
                  type: "tween",
                  duration: 0.2,
                  ease: "easeOut"
                }}
              >
                {/* Project Image */}
                <motion.div
                  className="relative h-40 sm:h-48 bg-gradient-to-br from-blue-100 to-indigo-100 overflow-hidden"
                  whileHover={shouldReduceAnimations ? {} : { scale: 1.03 }}
                  transition={{
                    type: shouldReduceAnimations ? "tween" : "spring",
                    duration: shouldReduceAnimations ? 0.2 : undefined,
                    stiffness: shouldReduceAnimations ? undefined : 300
                  }}
                >
                  <ProjectImage 
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fallback={
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 flex items-center justify-center"
                        whileHover={{ backgroundColor: "rgba(14, 165, 233, 0.3)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          whileHover={{ 
                            scale: 1.1,
                            rotate: 3
                          }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Code size={50} className="sm:w-15 sm:h-15 text-primary/60" />
                        </motion.div>
                      </motion.div>
                    }
                  />
                  <motion.div 
                    className="absolute top-4 right-4 z-10 flex flex-col gap-2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 400 }}
                  >
                    <motion.span 
                      className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {project.category}
                    </motion.span>
                    {project.isOrganization && (
                      <motion.span
                        className="px-3 py-1 bg-accent-500/90 backdrop-blur-sm rounded-full text-xs font-medium text-white text-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        Company
                      </motion.span>
                    )}
                  </motion.div>
                </motion.div>

                {/* Project Content */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <motion.h3 
                    className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  {project.isOrganization && (
                    <motion.div 
                      className="mb-2 flex items-center gap-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 0.5 }}
                    >
                      <span className="text-xs text-accent-400 font-medium">
                        {project.organizationName}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-primary-400 font-medium">
                        {project.role}
                      </span>
                    </motion.div>
                  )}
                  
                  <motion.p 
                    className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4 leading-relaxed flex-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Features */}
                  <motion.div 
                    className="mb-3 sm:mb-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    <h4 className="font-semibold text-white mb-1 sm:mb-2 text-xs sm:text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-start space-x-2"
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            visible: { opacity: 1, x: 0 }
                          }}
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <motion.div 
                            className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0 shadow-glow-sm"
                            whileHover={{ scale: 1.5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          />
                          <span className="text-gray-400 text-xs leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div 
                    className="mb-4 sm:mb-6"
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
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="px-2 py-1 bg-primary-500/20 text-primary-300 rounded-md text-xs font-medium cursor-pointer border border-primary-500/30"
                          variants={{
                            hidden: { opacity: 0, scale: 0 },
                            visible: { opacity: 1, scale: 1 }
                          }}
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "rgba(14, 165, 233, 0.3)",
                            borderColor: "rgba(14, 165, 233, 0.5)",
                            color: "rgb(147, 197, 253)"
                          }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Project Links */}
                  <motion.div 
                    className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-auto"
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
                    {project.website && (
                      <motion.a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary text-white px-3 sm:px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 group"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        whileHover={{ 
                          scale: 1.02,
                          backgroundColor: "rgb(2 132 199)",
                          boxShadow: "0 8px 25px rgba(14, 165, 233, 0.3)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Globe size={16} />
                        </motion.div>
                        <span>Visit</span>
                      </motion.a>
                    )}
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-100 text-gray-700 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 group"
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 }
                        }}
                        whileHover={{ 
                          scale: 1.02,
                          backgroundColor: "rgb(229 231 235)",
                          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)"
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Github size={16} />
                        </motion.div>
                        <span>Code</span>
                      </motion.a>
                    )}
                  </motion.div>
                </div>
              </ProjectWrapper>
            </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Call to Action */}
        <AnimatedSection direction="scale" delay={0.4} className="text-center mt-16">
          <motion.div 
            className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 text-white relative overflow-hidden"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(14, 165, 233, 0.3)" 
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Background Animation */}
            <motion.div
              className="absolute -top-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            <motion.h3 
              className="text-2xl font-bold mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Interested in Working Together?
            </motion.h3>
            <motion.p 
              className="text-blue-100 mb-6 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </motion.p>
            <motion.a 
              href="#contact" 
              className="btn-secondary border-white text-white hover:bg-white hover:text-primary relative z-10 inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;

