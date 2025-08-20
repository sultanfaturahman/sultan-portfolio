import React from 'react';
import { Github, Linkedin, Mail, Heart, MapPin, Code, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-consistent text-white">
      {/* Enhanced Background Elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-accent/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [180, 270, 180],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-custom py-20 relative z-10">
        <motion.div
          className="grid lg:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {/* Enhanced Brand Section */}
          <motion.div
            className="space-y-6"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center shadow-glow-accent"
                whileHover={{ rotate: 5 }}
              >
                <span className="text-white font-bold text-2xl">P</span>
              </motion.div>
              <span className="text-3xl font-bold gradient-text">Portfolio</span>
            </motion.div>
            <p className="text-slate-300 leading-relaxed max-w-sm text-lg">
              Professional website developer passionate about creating beautiful,
              functional, and user-friendly web experiences that make a difference.
            </p>

            {/* Tech Stack Badges */}
            <motion.div
              className="flex flex-wrap gap-2 pt-2"
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
              {['React', 'TypeScript', 'Tailwind'].map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-xs font-medium text-slate-300 backdrop-blur-sm"
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.15)"
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Quick Links */}
          <motion.div
            className="space-y-6"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <Code size={20} className="text-accent" />
              <span>Quick Links</span>
            </h3>
            <motion.ul
              className="space-y-3"
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
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#experience", label: "Experience" },
                { href: "#projects", label: "Projects" },
                { href: "#skills", label: "Skills" },
                { href: "#contact", label: "Contact" }
              ].map((link, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <motion.a
                    href={link.href}
                    className="text-slate-300 hover:text-accent transition-all duration-300 flex items-center space-x-2 group text-base"
                    whileHover={{ x: 4 }}
                  >
                    <motion.div
                      className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span>{link.label}</span>
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Enhanced Contact & Social */}
          <motion.div
            className="space-y-6"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <Sparkles size={20} className="text-accent" />
              <span>Get In Touch</span>
            </h3>
            <motion.div
              className="space-y-4"
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
                className="flex items-center space-x-3 group"
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 }
                }}
                whileHover={{ x: 4 }}
              >
                <Mail size={20} className="text-accent group-hover:scale-110 transition-transform duration-300" />
                <a
                  href="mailto:sultannfaturahman@gmail.com"
                  className="text-slate-300 hover:text-accent transition-colors duration-300 text-base"
                >
                  sultannfaturahman@gmail.com
                </a>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 group"
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0 }
                }}
                whileHover={{ x: 4 }}
              >
                <MapPin size={20} className="text-accent group-hover:scale-110 transition-transform duration-300" />
                <span className="text-slate-300 text-base">Indonesia</span>
              </motion.div>
            </motion.div>

            {/* Enhanced Social Links */}
            <div className="pt-6">
              <h4 className="text-base font-semibold text-white mb-4">Follow Me</h4>
              <motion.div
                className="flex space-x-4"
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
                {[
                  { href: "https://github.com/sultanfaturahman", icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com/in/sultan-faturahman/", icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:sultannfaturahman@gmail.com", icon: Mail, label: "Email" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? "_blank" : undefined}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:shadow-glow-accent transition-all duration-300 group"
                    variants={{
                      hidden: { opacity: 0, scale: 0 },
                      visible: { opacity: 1, scale: 1 }
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -2
                    }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <social.icon size={20} className="text-slate-300 group-hover:text-accent transition-colors duration-300" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Bottom Bar */}
        <AnimatedSection direction="up" delay={0.6} className="mt-16">
          <motion.div
            className="border-t border-white/10 pt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
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
              <motion.div
                className="text-slate-400 text-base"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                © {currentYear} Muhamad Sultan Faturahman. All rights reserved.
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 text-slate-400 text-base"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <span>Made with</span>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Heart size={18} className="text-red-500" />
                </motion.div>
                <span>using React & Tailwind CSS</span>
              </motion.div>
            </motion.div>

            {/* Additional decorative element */}
            <motion.div
              className="flex justify-center mt-8"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.div
                className="w-16 h-1 bg-accent-gradient rounded-full"
                animate={{
                  scaleX: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;
