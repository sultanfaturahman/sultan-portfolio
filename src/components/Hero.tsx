import React from 'react';
import { Github, Linkedin, Mail, FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { usePerformance } from '../hooks/usePerformance';

const Hero: React.FC = () => {
  const { shouldReduceAnimations, isTouch } = usePerformance();

  // CV URL - Ganti dengan link Google Drive atau hosting CV Anda
  const cvUrl = "https://drive.google.com/file/d/YOUR_GOOGLE_DRIVE_FILE_ID/view?usp=sharing";
  const cvDownloadUrl = "https://drive.google.com/uc?export=download&id=YOUR_GOOGLE_DRIVE_FILE_ID";

  const handleViewCV = () => {
    window.open(cvUrl, '_blank');
  };

  const handleDownloadCV = () => {
    window.open(cvDownloadUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-consistent pt-16">
      {/* Heavy background → desktop non-low-end only */}
      {!shouldReduceAnimations && (
        <>
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-primary-500/20 rounded-full fx-heavy blur-3xl hidden sm:block"
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500/20 rounded-full fx-heavy blur-3xl hidden sm:block"
            animate={{
              y: [0, -25, 0],
              x: [0, -15, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full fx-heavy blur-3xl hidden sm:block"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </>
      )}

      {/* Mobile gradient fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 sm:hidden" />

      <div className="container-custom text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <AnimatedSection direction="fade" delay={0.2}>
            <div className="mb-6">
              <motion.span 
                className="text-primary-400 font-medium text-lg glow"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Hello, I'm
              </motion.span>
            </div>
          </AnimatedSection>

          {/* Name */}
          <AnimatedSection direction="up" delay={0.4}>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="block sm:inline"
              >
                Muhamad Sultan
              </motion.span>
              <motion.span 
                className="block gradient-text"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Faturahman
              </motion.span>
            </motion.h1>
          </AnimatedSection>

          {/* Title */}
          <AnimatedSection direction="up" delay={0.6}>
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 sm:mb-8 font-medium px-4 sm:px-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Website Developer & Full-Stack Engineer
            </motion.h2>
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection direction="up" delay={0.8}>
            <motion.p 
              className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Passionate web developer with expertise in modern frameworks and technologies. 
              Creating beautiful, functional, and user-friendly web experiences with cutting-edge design.
            </motion.p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection direction="up" delay={1}>
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 1.4
                  }
                }
              }}
            >
              <motion.a
                href="#contact"
                className="btn-primary group w-full sm:w-auto text-center flex items-center justify-center space-x-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={isTouch ? undefined : { scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
              >
                <span className="relative z-10">Hire Me</span>
              </motion.a>
              
              <motion.button
                onClick={handleViewCV}
                className="btn-cv group w-full sm:w-auto text-center flex items-center justify-center space-x-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={isTouch ? undefined : { scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
              >
                <FileText size={20} className="relative z-10" />
                <span className="relative z-10">View CV</span>
              </motion.button>

              <motion.a
                href="#projects"
                className="btn-secondary group w-full sm:w-auto text-center flex items-center justify-center space-x-2"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={isTouch ? undefined : { scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
              >
                <span className="relative z-10">View Case Studies</span>
              </motion.a>
            </motion.div>

            {/* CV Download Option */}
            <motion.div 
              className="flex justify-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <motion.button
                onClick={handleDownloadCV}
                className="text-gray-400 hover:text-primary-400 flex items-center space-x-2 text-sm transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                <span>Download CV</span>
              </motion.button>
            </motion.div>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection direction="up" delay={1.2}>
            <motion.div 
              className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 1.6
                  }
                }
              }}
            >
              {[
                { href: "https://github.com/sultanfaturahman", icon: Github, color: "text-gray-700" },
                { href: "https://www.linkedin.com/in/sultan-faturahman/", icon: Linkedin, color: "text-blue-600" },
                { href: "mailto:sultannfaturahman@gmail.com", icon: Mail, color: "text-gray-700" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : "_blank"}
                  rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  className="w-12 h-12 sm:w-14 sm:h-14 glass rounded-full flex items-center justify-center shadow-dark-lg border border-dark-700/50 group hover:border-primary-500/50"
                  variants={{
                    hidden: { opacity: 0, scale: 0 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  whileHover={isTouch ? undefined : { scale: 1.1, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
                >
                  <social.icon size={20} className={`sm:w-6 sm:h-6 text-gray-300 group-hover:text-primary-400 group-hover:scale-110 transition-all duration-300`} />
                </motion.a>
              ))}
            </motion.div>
          </AnimatedSection>

          {/* Scroll Indicator */}
          <AnimatedSection direction="fade" delay={1.8}>
            <motion.div 
              className="inline-block"
              animate={{ 
                y: [0, 10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.a 
                href="#about" 
                className="inline-block p-2 rounded-full hover:bg-white/50 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
              </motion.a>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;

