import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Award, Medal, Crown, Star, Zap } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      title: 'Gold Medal - Tech Fest Idea Pitching',
      organization: 'NIT Mizoram',
      description: 'Won gold medal for innovative AI-based solution presentation at the annual tech fest.',
      icon: Crown,
      gradient: 'from-yellow-400 to-orange-500',
      year: '2024',
    },
    {
      title: 'Smart India Hackathon Winner',
      organization: 'Government of India',
      description: 'Secured victory at college level for innovative solution addressing national challenges.',
      icon: Trophy,
      gradient: 'from-green-400 to-blue-500',
      year: '2024',
    },
    {
      title: 'Yuvamanthan Hackathon - 2nd Place',
      organization: 'National Competition',
      description: 'Won ₹30,000 prize for IoT/AI-based "Smart AgriHubs" solution.',
      icon: Medal,
      gradient: 'from-purple-400 to-pink-500',
      year: '2024',
    },
    {
      title: 'NERTech Hackathon 2.0',
      organization: 'Bangalore Tech Summit',
      description: 'Only NIT selected to pitch IoT innovation at prestigious Bangalore event.',
      icon: Star,
      gradient: 'from-blue-400 to-cyan-500',
      year: '2024',
    },
    {
      title: 'Game Dev Moderator',
      organization: 'GDSC Hackathons',
      description: 'Led and mentored 50+ students in game development competitions.',
      icon: Zap,
      gradient: 'from-red-400 to-pink-500',
      year: '2023-24',
    },
    {
      title: 'T&P Leadership Excellence',
      organization: 'NIT Mizoram',
      description: 'Achieved 90% placement rate while leading 42-member team.',
      icon: Award,
      gradient: 'from-indigo-400 to-purple-500',
      year: '2024',
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-dark-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-accent-500 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6 hover:border-primary-400/40 transition-all duration-300 relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl blur-xl" 
                   style={{ background: `linear-gradient(45deg, ${achievement.gradient.replace('from-', '').replace('to-', ', ')})` }}>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${achievement.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <achievement.icon size={24} className="text-white" />
                  </div>
                  <span className="text-primary-400 font-semibold text-sm">{achievement.year}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {achievement.title}
                </h3>

                <p className="text-primary-400 font-medium text-sm mb-3">
                  {achievement.organization}
                </p>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent-500 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;