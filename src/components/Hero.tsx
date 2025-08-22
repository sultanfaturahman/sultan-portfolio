import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { usePerformance } from '../hooks/usePerformance';

const Hero: React.FC = () => {
  const { shouldReduceAnimations, isTouch, isMobileDevice } = usePerformance();

  // CV URL - Ganti dengan link Google Drive atau hosting CV Anda
  const cvUrl = "https://drive.google.com/file/d/1IFCbJOiFbQDxaGe-FV4Hq4BmEsRCJNG-/view?usp=sharing";

  const handleViewCV = () => {
    window.open(cvUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-consistent pt-20">
      {/* Heavy background → desktop non-low-end only */}
      {!shouldReduceAnimations && !isMobileDevice && (
        <>
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-primary-500/20 rounded-full fx-heavy blur-3xl hidden lg:block"
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
            className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500/20 rounded-full fx-heavy blur-3xl hidden lg:block"
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
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full fx-heavy blur-3xl hidden lg:block"
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

      {/* Mobile-optimized static gradient - lighter version */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/2 to-accent-500/2 lg:hidden" />

      <div className="container-custom text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          {/* Main Heading - Modern Style like the image */}
          <AnimatedSection direction="up" delay={0.2}>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              whileHover={isTouch ? undefined : { scale: 1.01 }}
              transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="block"
              >
                Hi, I'm{" "}
                <motion.span
                  className="text-primary-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  Sultan.
                </motion.span>
              </motion.span>
            </motion.h1>
          </AnimatedSection>

          {/* Subtitle - Modern Style like the image */}
          <AnimatedSection direction="up" delay={0.6}>
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-400 mb-6 sm:mb-8 font-medium px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                Frontend Developer
              </motion.span>
            </motion.h2>
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection direction="up" delay={0.8}>
            <motion.p 
              className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="relative z-10">View Case Studies</span>
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              className="flex justify-center space-x-6 mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>

              <motion.a
                href="mailto:your.email@example.com"
                className="w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
              </motion.a>
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

