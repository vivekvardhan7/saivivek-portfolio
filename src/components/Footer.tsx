import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Code } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-primary/20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <Code className="text-primary" size={20} />
              <span className="text-white font-mono font-semibold">Sai Vivek Vardhan Tata</span>
            </div>
            <p className="text-gray-400 flex items-center gap-2 justify-center md:justify-start">
             
            </p>
            <p className="text-gray-500 text-sm mt-1">
          Copyrights © 2025 TATA SAI VIVEK
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-gray-400 text-sm font-mono">
              <span className="text-primary">const</span> status = <span className="text-yellow-400">"Available for hire"</span>;
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="bg-primary hover:bg-primary/80 text-black p-3 rounded-full transition-all duration-300 glow-green"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;