import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="section-consistent section-padding">
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />
      
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
            About Me
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Get to know me better - my background, education, and what drives me as a developer
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Image and Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Profile Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="w-96 h-[30rem] sm:w-[26rem] sm:h-[32rem] mx-auto relative profile-container"
              >
                <img
                  src="/images/profile/profile.png"
                  alt="Sultan Faturahman"
                  className="w-full h-full object-contain profile-image"
                  style={{
                    filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))',
                    background: 'transparent'
                  }}
                  onError={(e) => {
                    // Fallback ke placeholder SVG
                    const target = e.target as HTMLImageElement;
                    target.src = "/images/profile-placeholder.svg";
                    target.className = "w-full h-full object-contain";
                    target.onerror = () => {
                      // Final fallback ke foto asli
                      target.src = "/images/profile/sultan-profile.jpg";
                      target.className = "w-full h-full object-contain";
                    };
                  }}
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-28 sm:h-28 bg-accent-gradient rounded-full flex items-center justify-center hover-lift"
                style={{ boxShadow: 'none' }}
              >
                <span className="text-white font-bold text-2xl sm:text-3xl">5+</span>
              </motion.div>
            </motion.div>

            {/* Personal Info */}
            <motion.div 
              className="space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3
                  }
                }
              }}
            >
              <motion.div
                className="flex items-center space-x-3 glass p-4 rounded-lg card-hover"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <motion.div className="text-hover">
                  <GraduationCap size={20} className="text-primary-400" />
                </motion.div>
                <span className="text-gray-300">Universitas Sultan Ageng Tirtayasa</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 glass p-4 rounded-lg card-hover"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <motion.div className="text-hover">
                  <MapPin size={20} className="text-primary-400" />
                </motion.div>
                <span className="text-gray-300">Indonesia</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 glass p-4 rounded-lg card-hover"
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <motion.div className="text-hover">
                  <Calendar size={20} className="text-accent-400" />
                </motion.div>
                <span className="text-gray-300">Available for opportunities</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Description */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              Passionate Web Developer with a Focus on Scalable System dan User Experience
            </motion.h3>
            
            <motion.p 
              className="text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              I am a dedicated website developer with a strong foundation in both frontend and backend technologies. 
              My journey in web development started during my studies at Universitas Sultan Ageng Tirtayasa, 
              where I developed a passion for creating digital solutions that make a difference.
            </motion.p>

            <motion.p 
              className="text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Throughout my career, I've had the privilege of working on diverse projects that have honed my skills 
              in modern web technologies. From e-commerce platforms to company profiles and membership systems, 
              I've consistently delivered high-quality solutions that prioritize both functionality and user experience.
            </motion.p>

            <motion.p 
              className="text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              My approach combines technical expertise with creative problem-solving, ensuring that every project 
              not only meets technical requirements but also exceeds user expectations. I believe in writing clean, 
              maintainable code and staying updated with the latest industry trends and best practices.
            </motion.p>

            {/* Key Points */}
            <motion.div 
              className="grid grid-cols-2 gap-4 pt-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.6
                  }
                }
              }}
            >
              <motion.div 
                className="glass p-4 rounded-lg border border-primary-500/20 hover:border-primary-400/40 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 30px rgba(14, 165, 233, 0.2)" 
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <h4 className="font-semibold text-white mb-2">Problem Solver</h4>
                <p className="text-sm text-gray-400">Creative solutions for complex challenges</p>
              </motion.div>
              <motion.div 
                className="glass p-4 rounded-lg border border-primary-500/20 hover:border-primary-400/40 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 30px rgba(14, 165, 233, 0.2)" 
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <h4 className="font-semibold text-white mb-2">Team Player</h4>
                <p className="text-sm text-gray-400">Collaborative approach to development</p>
              </motion.div>
              <motion.div 
                className="glass p-4 rounded-lg border border-accent-500/20 hover:border-accent-400/40 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 30px rgba(245, 158, 11, 0.2)" 
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <h4 className="font-semibold text-white mb-2">Quality Focused</h4>
                <p className="text-sm text-gray-400">Attention to detail and best practices</p>
              </motion.div>
              <motion.div 
                className="glass p-4 rounded-lg border border-accent-500/20 hover:border-accent-400/40 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 30px rgba(245, 158, 11, 0.2)" 
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <h4 className="font-semibold text-white mb-2">Continuous Learner</h4>
                <p className="text-sm text-gray-400">Always improving and adapting</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

