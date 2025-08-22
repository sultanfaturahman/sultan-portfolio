import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} className="text-accent" />,
      title: 'Email',
      value: 'sultannfaturahman@gmail.com',
      link: 'mailto:sultannfaturahman@gmail.com'
    },
    {
      icon: <Phone size={24} className="text-accent" />,
      title: 'Phone',
      value: '+62 813-8094-2768',
      link: 'tel:+6281380942768'
    },
    {
      icon: <MapPin size={24} className="text-accent" />,
      title: 'Location',
      value: 'Jakarta, Indonesia',
      link: null
    }
  ];

  return (
    <section id="contact" className="section-consistent section-padding">
      {/* Subtle static background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/3 via-blue-500/2 to-purple-500/3" />

      <div className="container-custom relative z-10">
        <AnimatedSection direction="up" className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            I'm always interested in hearing about new opportunities and exciting projects.
            Let's discuss how we can work together!
          </motion.p>
        </AnimatedSection>

        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          {/* Enhanced Contact Information */}
          <motion.div
            className="space-y-8"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedSection direction="up">
              <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-slate-300 leading-relaxed mb-8 text-lg">
                Whether you have a project in mind, want to discuss potential opportunities,
                or just want to say hello, I'd love to hear from you.
                I'm always open to new challenges and collaborations.
              </p>
            </AnimatedSection>

            {/* Enhanced Contact Details */}
            <motion.div
              className="space-y-6"
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
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 group"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    className="w-14 h-14 glass rounded-xl flex items-center justify-center group-hover:shadow-glow-accent transition-all duration-300 hover-lift"
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white text-lg group-hover:text-accent transition-colors duration-300">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-slate-300 hover:text-accent transition-colors duration-300 text-base"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-300 text-base">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Availability */}
            <AnimatedSection direction="scale" delay={0.4}>
              <motion.div
                className="glass rounded-2xl p-8 border border-emerald-500/30 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl" />
                <h4 className="font-bold text-white mb-3 text-lg relative z-10">Current Availability</h4>
                <p className="text-slate-300 text-base mb-4 relative z-10">
                  I'm currently available for new projects and opportunities.
                </p>
                <div className="flex items-center space-x-3 relative z-10">
                  <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-glow" />
                  <span className="text-base text-emerald-400 font-semibold">Available for work</span>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Enhanced Response Time */}
            <AnimatedSection direction="scale" delay={0.6}>
              <motion.div
                className="glass rounded-2xl p-8 border border-blue-500/30"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4 className="font-bold text-white mb-3 text-lg">Response Time</h4>
                <p className="text-slate-300 text-base">
                  I typically respond to messages within 24 hours during business days.
                </p>
              </motion.div>
            </AnimatedSection>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            className="glass rounded-3xl p-10 shadow-glow border border-white/10 relative overflow-hidden"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.6 }}
          >
            {/* Static background decoration */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-accent/10 to-purple-500/10 rounded-full blur-2xl" />

            <h3 className="text-3xl font-bold text-white mb-8 relative z-10">Send Me a Message</h3>

            {isSubmitted ? (
              <motion.div
                className="text-center py-12 relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  <CheckCircle size={80} className="text-emerald-500 mx-auto mb-6 shadow-glow" />
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-4">Message Sent!</h4>
                <p className="text-slate-300 text-lg">
                  Thank you for reaching out. I'll get back to you as soon as possible!
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-8 relative z-10"
                initial="hidden"
                animate="visible"
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
                  className="grid md:grid-cols-2 gap-6"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-3">
                      Name *
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 backdrop-blur-sm"
                      placeholder="Your name"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-3">
                      Email *
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 backdrop-blur-sm"
                      placeholder="your@email.com"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-300 mb-3">
                    Subject *
                  </label>
                  <motion.input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 backdrop-blur-sm"
                    placeholder="What's this about?"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-3">
                    Message *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 resize-none backdrop-blur-sm"
                    placeholder="Tell me about your project or opportunity..."
                    whileFocus={{ scale: 1.02 }}
                  ></motion.textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full bg-accent-gradient text-white font-semibold py-4 px-8 rounded-xl shadow-glow-accent hover:shadow-glow-accent/80 transition-all duration-300 flex items-center justify-center space-x-3 text-lg"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={22} />
                  <span>Send Message</span>
                </motion.button>
              </motion.form>
            )}
          </motion.div>
        </motion.div>

        {/* Enhanced Call to Action */}
        <AnimatedSection direction="scale" delay={0.8} className="text-center mt-20">
          <motion.div
            className="bg-primary-gradient rounded-3xl p-12 text-white relative overflow-hidden shadow-glow"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(59, 130, 246, 0.4)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Static background decorations */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-white/3 rounded-full blur-xl" />

            <div className="relative z-10">
              <motion.h3
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to Start Your Project?
              </motion.h3>
              <motion.p
                className="text-blue-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Let's discuss your ideas and turn them into reality.
                I'm excited to hear about your project and explore how we can work together.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center"
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
                <motion.a
                  href="mailto:sultannfaturahman@gmail.com"
                  className="glass border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                  <span>Email Me Directly</span>
                </motion.a>
                <motion.a
                  href="tel:+6281380942768"
                  className="glass border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={20} />
                  <span>Call Me Now</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;

