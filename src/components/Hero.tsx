import React from 'react';
import { Github, Linkedin, Mail, FileText, Code2, Database, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { usePerformance } from '../hooks/usePerformance';

const Hero: React.FC = () => {
  const { shouldReduceAnimations, isTouch, isMobileDevice } = usePerformance();

  // CV URL - Ganti dengan link Google Drive atau hosting CV Anda
  const cvUrl = "https://drive.google.com/file/d/1ap30E5tFEiWCGaB8_6f6A1HLMd8WsBjt/view?usp=drive_link";

  const handleViewCV = () => {
    window.open(cvUrl, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-consistent pt-16">
      {/* Subtle static background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/3 via-transparent to-accent-500/3" />

      {/* Mobile-optimized static gradient - lighter version */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/2 to-accent-500/2 lg:hidden" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Kicker */}
            <AnimatedSection direction="up" delay={0.1}>
              <motion.div
                className="inline-block px-4 py-2 bg-primary-500/10 text-primary-400 border border-primary-500/30 rounded-full text-sm font-semibold mb-5 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Frontend Developer
              </motion.div>
            </AnimatedSection>

            {/* Main Heading */}
            <AnimatedSection direction="up" delay={0.2}>
              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight tracking-tight"
                whileHover={isTouch ? undefined : { scale: 1.01 }}
                transition={{ type: "tween", duration: 0.2, ease: "easeOut" }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="block"
                >
                  Talk is cheap.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="block"
                >
                  Show me the{" "}
                  <span className="text-primary-400">code</span>
                </motion.span>
              </motion.h1>
            </AnimatedSection>

            {/* Description */}
            <AnimatedSection direction="up" delay={0.6}>
              <motion.p 
                className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                I design and code beautifully simple things, and I love what I do.
              </motion.p>
            </AnimatedSection>

            {/* CTA Button */}
            <AnimatedSection direction="up" delay={0.8}>
              <motion.div className="mb-12">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center px-6 py-4 bg-primary-500 hover:bg-primary-400 text-black font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  whileHover={isTouch ? undefined : { scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  LET'S CHAT!
                </motion.a>
              </motion.div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection direction="up" delay={1}>
              <motion.div
                className="flex gap-8 sm:gap-12 mb-10"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 1.2
                    }
                  }
                }}
              >
                <motion.div
                  className="text-center lg:text-left"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <div className="text-3xl font-bold text-white">5+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </motion.div>
                <motion.div
                  className="text-center lg:text-left"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </motion.div>
              </motion.div>
            </AnimatedSection>

            {/* Social Icons */}
            <AnimatedSection direction="up" delay={1.8}>
              <motion.div
                className="flex justify-center lg:justify-start space-x-4 mb-10 sm:mb-14"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
              >
                <motion.a
                  href="https://github.com/sultanfaturahman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/sultan-faturahman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={18} />
                </motion.a>

                <motion.a
                  href="mailto:your.email@example.com"
                  className="w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50 rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={18} />
                </motion.a>
              </motion.div>
            </AnimatedSection>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {/* Background Blob */}
              <motion.div
                className="absolute inset-0 w-[120%] h-[120%] -top-10 -left-10 rounded-full opacity-20"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, #374151 0%, #1f2937 65%)',
                  filter: 'blur(2px)'
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.25, 0.2]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[26rem] xl:w-96 xl:h-[30rem] 2xl:w-[26rem] 2xl:h-[32rem] relative profile-container"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/images/profile/profile.png"
                  alt="Sultan Faturahman"
                  className="w-full h-full object-contain profile-image relative z-10"
                  style={{
                    filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3)) saturate(0.95) contrast(1.05)',
                    background: 'transparent',
                    maskImage: 'radial-gradient(130% 130% at 85% 85%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 95%)'
                  }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/profile-placeholder.svg";
                    target.className = "w-full h-full object-contain";
                    target.onerror = () => {
                      target.src = "/images/profile/sultan-profile.jpg";
                      target.className = "w-full h-full object-contain";
                    };
                  }}
                />
              </motion.div>

              {/* Floating Tech Badges */}
              {/* React Badge */}
              <motion.div
                className="absolute w-16 h-16 sm:w-20 sm:h-20 bg-slate-800 rounded-full flex items-center justify-center shadow-xl border border-slate-700/50"
                style={{ left: '20%', bottom: '60px', zIndex: 10 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -8, 0],
                }}
                transition={{
                  opacity: { delay: 1.2, duration: 0.5 },
                  scale: { delay: 1.2, duration: 0.5 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.1, y: -4 }}
              >
                <Code2 size={24} className="text-blue-400" />
              </motion.div>

              {/* JavaScript Badge */}
              <motion.div
                className="absolute w-24 h-24 sm:w-28 sm:h-28 bg-slate-800 rounded-full flex items-center justify-center shadow-xl border border-slate-700/50"
                style={{ right: '-10px', bottom: '-10px', zIndex: 10 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -10, 0],
                }}
                transition={{
                  opacity: { delay: 1.4, duration: 0.5 },
                  scale: { delay: 1.4, duration: 0.5 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
                whileHover={{ scale: 1.1, y: -4 }}
              >
                <Database size={32} className="text-primary-400" />
              </motion.div>

              {/* Design Badge */}
              <motion.div
                className="absolute w-12 h-12 sm:w-14 sm:h-14 bg-slate-800 rounded-full flex items-center justify-center shadow-xl border border-slate-700/50"
                style={{ right: '100px', top: '100px', zIndex: 10 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  y: [0, -6, 0],
                }}
                transition={{
                  opacity: { delay: 1.6, duration: 0.5 },
                  scale: { delay: 1.6, duration: 0.5 },
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
                whileHover={{ scale: 1.1, y: -4 }}
              >
                <Palette size={20} className="text-accent-400" />
              </motion.div>

              {/* Accent Dot */}
              <motion.div
                className="absolute w-3 h-3 bg-primary-400 rounded-full shadow-lg"
                style={{ right: '140px', bottom: '40px', zIndex: 10 }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0.8, 1, 0.8],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  opacity: { delay: 1.8, duration: 0.5 },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

