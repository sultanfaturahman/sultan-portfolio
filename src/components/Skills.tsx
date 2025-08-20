import React from 'react';
import { Code, Database, Globe, Server, Smartphone, Palette, Star, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection, { StaggerContainer, StaggerItem } from './AnimatedSection';

// Professional skill levels based on industry standards
// Clean build - no unused variables
const skillLevels = {
  expert: { label: 'Expert', color: 'text-emerald-400', bgColor: 'bg-emerald-500/20 border-emerald-500/30', description: '3+ years production experience' },
  advanced: { label: 'Advanced', color: 'text-blue-400', bgColor: 'bg-blue-500/20 border-blue-500/30', description: '2+ years experience' },
  intermediate: { label: 'Intermediate', color: 'text-amber-400', bgColor: 'bg-amber-500/20 border-amber-500/30', description: '1+ years experience' },
  beginner: { label: 'Beginner', color: 'text-slate-400', bgColor: 'bg-slate-500/20 border-slate-500/30', description: 'Learning & exploring' }
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe size={24} className="text-primary" />,
      skills: [
        { name: 'React', level: 'expert', years: '3+' },
        { name: 'JavaScript (ES6+)', level: 'expert', years: '4+' },
        { name: 'TypeScript', level: 'advanced', years: '2+' },
        { name: 'HTML5 & CSS3', level: 'expert', years: '4+' },
        { name: 'Tailwind CSS', level: 'advanced', years: '2+' },
        { name: 'Bootstrap', level: 'advanced', years: '3+' }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server size={24} className="text-primary" />,
      skills: [
        { name: 'PHP', level: 'advanced', years: '3+' },
        { name: 'Laravel', level: 'advanced', years: '2+' },
        { name: 'Node.js', level: 'intermediate', years: '1+' },
        { name: 'Express.js', level: 'intermediate', years: '1+' },
        { name: 'REST API Design', level: 'advanced', years: '2+' },
        { name: 'GraphQL', level: 'beginner', years: '<1' }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: <Database size={24} className="text-primary" />,
      skills: [
        { name: 'MySQL', level: 'advanced', years: '3+' },
        { name: 'PostgreSQL', level: 'intermediate', years: '1+' },
        { name: 'Supabase', level: 'intermediate', years: '1+' },
        { name: 'Digital Ocean', level: 'intermediate', years: '2+' },
        { name: 'AWS (Basic)', level: 'beginner', years: '<1' },
        { name: 'MongoDB', level: 'beginner', years: '<1' }
      ]
    },
    {
      title: 'Development Tools',
      icon: <Code size={24} className="text-primary" />,
      skills: [
        { name: 'Git & GitHub', level: 'advanced', years: '3+' },
        { name: 'Vite', level: 'advanced', years: '2+' },
        { name: 'Webpack', level: 'intermediate', years: '1+' },
        { name: 'Docker', level: 'beginner', years: '<1' },
        { name: 'VS Code', level: 'expert', years: '4+' },
        { name: 'Figma', level: 'intermediate', years: '2+' }
      ]
    },
    {
      title: 'Web Standards & Best Practices',
      icon: <Smartphone size={24} className="text-primary" />,
      skills: [
        { name: 'Responsive Design', level: 'expert', years: '4+' },
        { name: 'PWA Development', level: 'intermediate', years: '1+' },
        { name: 'Mobile-First Approach', level: 'expert', years: '3+' },
        { name: 'Cross-Browser Compatibility', level: 'advanced', years: '3+' },
        { name: 'Web Performance', level: 'advanced', years: '2+' },
        { name: 'Web Accessibility', level: 'intermediate', years: '1+' }
      ]
    },
    {
      title: 'Design & User Experience',
      icon: <Palette size={24} className="text-primary" />,
      skills: [
        { name: 'UI/UX Principles', level: 'advanced', years: '2+' },
        { name: 'Wireframing', level: 'intermediate', years: '2+' },
        { name: 'Prototyping', level: 'intermediate', years: '1+' },
        { name: 'User-Centered Design', level: 'intermediate', years: '1+' },
        { name: 'Design Systems', level: 'intermediate', years: '1+' },
        { name: 'Brand Identity', level: 'intermediate', years: '1+' }
      ]
    }
  ];

  return (
    <section id="skills" className="section-consistent section-padding">
      {/* Enhanced Background Animation Elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-accent/20 to-pink-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-2xl"
        animate={{
          x: [-50, 50, -50],
          y: [-30, 30, -30],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-custom relative z-10">
        <AnimatedSection direction="up" className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Professional competencies with years of hands-on experience in production environments
          </motion.p>
        </AnimatedSection>

        {/* Enhanced Skill Level Legend */}
        <AnimatedSection direction="scale" delay={0.2}>
          <motion.div
            className="mb-12 glass rounded-2xl p-8 shadow-glow border border-white/10"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px rgba(14, 165, 233, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold text-white mb-6 text-center">Proficiency Levels</h3>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.1}>
              {Object.entries(skillLevels).map(([key, level]) => (
                <StaggerItem key={key} direction="scale" className="text-center">
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      y: -4
                    }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className={`inline-flex items-center px-4 py-3 rounded-xl border ${level.bgColor} ${level.color} font-semibold text-sm mb-2 backdrop-blur-sm`}>
                      <Star size={16} className="mr-2 animate-pulse-glow" />
                      {level.label}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{level.description}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>
        </AnimatedSection>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
              }
            }
          }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="glass rounded-2xl p-6 sm:p-8 border border-white/10 h-full hover:shadow-glow-accent transition-all duration-200 group"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                  scale: 0.9
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1
                }
              }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(14, 165, 233, 0.4), 0 0 30px rgba(14, 165, 233, 0.3)",
                transition: {
                  type: "tween",
                  duration: 0.15,
                  ease: "easeOut"
                }
              }}
            >
              <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                <motion.div
                  className="text-accent group-hover:text-white transition-colors duration-150 p-2 rounded-lg bg-accent/20 group-hover:bg-accent/30"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: {
                      type: "tween",
                      duration: 0.1,
                      ease: "easeOut"
                    }
                  }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:gradient-text transition-all duration-150">{category.title}</h3>
              </div>

              <div className="space-y-4 sm:space-y-5">
                {category.skills.map((skill, skillIndex) => {
                  const levelInfo = skillLevels[skill.level as keyof typeof skillLevels];
                  return (
                    <motion.div
                      key={skillIndex}
                      className="p-4 sm:p-5 bg-white/5 rounded-xl border border-white/10 transition-all duration-150 hover:bg-white/10 hover:border-white/20 group/skill"
                      whileHover={{
                        scale: 1.02,
                        x: 4,
                        transition: {
                          type: "tween",
                          duration: 0.1,
                          ease: "easeOut"
                        }
                      }}
                    >
                      <div className="flex flex-col space-y-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h5 className="font-semibold text-white text-sm sm:text-base leading-tight group-hover/skill:text-accent transition-colors duration-150">
                              {skill.name}
                            </h5>
                            <span className="text-xs text-slate-400 mt-1 block">
                              {skill.years} years experience
                            </span>
                          </div>
                          <motion.span
                            className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${levelInfo.bgColor} ${levelInfo.color} whitespace-nowrap ml-3 flex-shrink-0 backdrop-blur-sm`}
                            whileHover={{ scale: 1.05 }}
                          >
                            {levelInfo.label}
                          </motion.span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Professional Competencies */}
        <AnimatedSection direction="up" delay={0.4} className="mt-20">
          <motion.div
            className="glass rounded-3xl p-10 shadow-glow border border-white/10 relative overflow-hidden"
            whileHover={{
              scale: 1.01,
              boxShadow: "0 30px 60px rgba(14, 165, 233, 0.4)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Background decoration */}
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.div
              className="text-center mb-10 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold gradient-text mb-4">Professional Competencies</h3>
              <p className="text-slate-300 text-lg">Business-focused skills and methodologies</p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2
                  }
                }
              }}
            >
              {[
                { category: 'Business Integration', skills: ['Payment Gateway Integration', 'E-commerce Solutions', 'CMS Development', 'Third-party API Integration'] },
                { category: 'Quality Assurance', skills: ['Code Review & Testing', 'Performance Optimization', 'Security Best Practices', 'Cross-platform Compatibility'] },
                { category: 'Project Management', skills: ['Agile Methodology', 'Client Communication', 'Timeline Management', 'Documentation'] }
              ].map((group, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/20 group/comp relative overflow-hidden"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 30,
                      scale: 0.95
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1
                    }
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut"
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.02
                  }}
                >
                  {/* Card glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-2xl opacity-0 group-hover/comp:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />

                  <div className="relative z-10">
                    <h4 className="font-bold text-white mb-6 flex items-center text-lg group-hover/comp:text-accent transition-colors duration-300">
                      <motion.div
                        className="mr-3 p-2 rounded-lg bg-accent/20 group-hover/comp:bg-accent/30 transition-colors duration-300 hover-lift"
                      >
                        <Award size={20} className="text-accent" />
                      </motion.div>
                      {group.category}
                    </h4>
                    <ul className="space-y-3">
                      {group.skills.map((skill, skillIndex) => (
                        <motion.li
                          key={skillIndex}
                          className="flex items-start space-x-3 group/item"
                          whileHover={{ x: 4 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <motion.div
                            className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 group-hover/item:shadow-glow-accent hover-lift"
                          />
                          <span className="text-sm text-slate-300 group-hover/item:text-white transition-colors duration-200 leading-relaxed">{skill}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatedSection>

        {/* Enhanced Continuous Learning */}
        <AnimatedSection direction="scale" delay={0.6} className="mt-20 text-center">
          <motion.div
            className="bg-accent-gradient rounded-3xl p-12 text-white relative overflow-hidden shadow-glow-accent"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(251, 146, 60, 0.4)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Enhanced Background Animations */}
            <motion.div
              className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.4, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/5 rounded-full blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full blur-lg"
              animate={{
                x: [-20, 20, -20],
                y: [-15, 15, -15],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-6 relative z-10 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Continuous Professional Development
            </motion.h3>
            <motion.p
              className="text-orange-100 mb-8 max-w-3xl mx-auto relative z-10 text-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Committed to staying current with industry trends and emerging technologies
              to deliver cutting-edge solutions and maintain competitive advantage.
            </motion.p>
            <motion.div
              className="mb-6 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h4 className="text-xl font-bold text-orange-100 mb-6">Currently Exploring</h4>
              <motion.div
                className="flex flex-wrap justify-center gap-3"
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
                {['Next.js 14', 'Vue.js 3', 'Python & Django', 'Cloud Architecture', 'DevOps Practices', 'AI Integration'].map((tech, index) => (
                  <motion.span
                    key={index}
                    className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-xl text-sm font-semibold cursor-pointer border border-white/20 hover:border-white/40 transition-all duration-300"
                    variants={{
                      hidden: { opacity: 0, scale: 0 },
                      visible: { opacity: 1, scale: 1 }
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.3)",
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;

