import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/vivekvardhan7', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sai-vivek-tata-049210280', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:saivivek2809@gmail.com', label: 'Email' },
    { icon: Phone, href: 'tel:+916303649750', label: 'Phone' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-primary rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="text-primary font-mono text-lg">Hello, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Sai Vivek</span>
            <br />
            <span className="text-primary text-glow">Vardhan Tata</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-2xl md:text-3xl font-semibold mb-8 text-gray-300 h-16"
          >
            <TypeAnimation
              sequence={[
                'AI SOFTWARE ENGINEER',
                2000,
                'FULL-STACK DEVELOPER',
                2000,
                'AI/ML DEVELOPER',
                2000,
                'TNP LEAD NITMZ',
                2000,
                'CSE ENGINEER',
                2000,
                'PHOTOGRAPHER',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primary"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed"
          >
            Computer Science student at NIT Mizoram specializing in AI, Machine Learning, and Full-Stack Development. Building innovative solutions that make a real impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3 rounded-full text-lg font-semibold"
            >
              Hire Me
            </motion.a>

            <motion.a
              href="https://github.com/vivekvardhan7"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-outline px-8 py-3 rounded-full text-lg font-semibold flex items-center gap-2"
            >
              <ExternalLink size={20} />
              View Work
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex items-center gap-4"
          >
            <span className="text-gray-400 font-mono">Follow me:</span>
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:bg-gray-700 transition-all duration-300 neon-border cursor-pointer"
              >
                <link.icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-2xl">
            <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm font-mono ml-4">sai-vivek-portfolio</span>
            </div>
            <div className="p-6 font-mono text-sm text-green-400">
              <p>const <span className="text-blue-400">developer</span> = {'{'}</p>
              <p className="ml-6">name: <span className="text-yellow-400">"Sai Vivek Vardhan Tata"</span>,</p>
              <p className="ml-6">role: <span className="text-yellow-400">"AI Software Engineer"</span>,</p>
              <p className="ml-6">skills: [<span className="text-yellow-400">"React", "Python/Java", "AI/ML"</span>],</p>
              <p className="ml-6">location: <span className="text-yellow-400">"NIT Mizoram"</span>,</p>
              <p className="ml-6">passion: <span className="text-yellow-400">"Building Innovation"</span>,</p>
              <p className="ml-6">available: <span className="text-orange-400">true</span></p>
              <p>{'};'}</p>
              <p className="text-gray-500 mt-4">// Ready to create amazing things!</p>
              <p className="text-primary animate-pulse">|</p>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-float glow-green"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-float delay-1000 glow-blue"></div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-primary hover:text-white transition-colors duration-200 flex flex-col items-center gap-2"
        >
          <span className="text-sm font-mono">Scroll Down</span>
          <ChevronDown size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
