import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Users, Trophy, GraduationCap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: Code,
      value: '25+',
      label: 'Projects Deployed',
      color: 'text-primary',
    },
    {
      icon: Brain,
      value: '5+',
      label: 'Internships',
      color: 'text-secondary',
    },
    {
      icon: Users,
      value: '150+',
      label: 'Students Mentored',
      color: 'text-accent',
    },
    {
      icon: Trophy,
      value: '5+',
      label: 'Hackathon Wins',
      color: 'text-primary',
    },
  ];

  const educationTimeline = [
    {
      title: 'NIT Mizoram',
      subtitle: 'B.Tech in Computer Science & Engineering',
      location: 'Mizoram, India',
      date: '2022 – Present',
      score: 'CGPA: 7.12',
      description: 'Pursuing a rigorous curriculum with a focus on AI, machine learning, and full-stack development.',
    },
    {
      title: 'Narayana IIT Academy',
      subtitle: 'Intermediate (MPC Branch)',
      location: 'Vizag, India',
      date: '2020 – 2022',
      score: 'JEE Mains: 97.89 percentile',
      description: 'Excelled in mathematics, physics, and chemistry, preparing for competitive engineering entrance exams.',
    },
    {
      title: 'Sri Chaitanya Techno School',
      subtitle: 'SSC (10th Class)',
      location: 'Vizag, India',
      date: '2019 – 2020',
      score: '594 / 600',
      description: 'Built a strong academic foundation with near-perfect scores across all subjects.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">&lt;</span>
            <span className="text-white">About</span>
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-green"></div>
        </motion.div>

        {/* Grid Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 neon-border">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3"></h3>

              <div className="space-y-6">
                <div className="bg-gray-800/30 rounded-lg p-4">
                  <h5 className="text-lg font-semibold text-white mb-3">
                    Key Courses
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'OS',
                      'DSA',
                      'Algorithms',
                      'DBMS',
                      'CN',
                      'SE',
                      'CG',
                      'CA',
                      'TOC',
                      'CD',
                      'OOP',
                      'AI',
                      'ML',
                      'DL',
                      'NLP',
                      'WT',
                      'IoT',
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-justify">
                  I’m a passionate Computer Science student at NIT Mizoram with
                  strong expertise in AI, machine learning, and full-stack
                  development. My journey is being driven by curiosity and a
                  commitment to solving real-world problems through technology.
                </p>

                <p className="text-gray-300 leading-relaxed text-justify">
                  As the Training & Placement Coordinator Lead, I’ve been
                  managing placement operations for 150+ students while leading
                  a team of 42 members. I’m currently continuing to deepen my
                  skills and knowledge while building scalable, impactful
                  solutions that can bring real change.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 text-center card-hover neon-border group"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gray-800 group-hover:bg-gray-700 transition-all duration-300 ${stat.color}`}
                >
                  <stat.icon size={28} />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16 mt-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">&lt;</span>
            <span className="text-white">Education</span>
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-green"></div>
        </motion.div>

        <div className="relative mt-12">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30 rounded-full"></div>
          {educationTimeline.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className={`relative mb-12 flex ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              } items-center justify-between md:w-3/4 mx-auto`}
            >
              <div className="w-5/12"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-gray-900/50 z-10 glow-green">
                <div className="absolute w-4 h-4 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: '0 8px 32px rgba(0, 255, 0, 0.2)' }}
                className={`w-5/12 bg-gray-900/70 backdrop-blur-sm border border-primary/30 rounded-xl p-6 neon-border ${
                  index % 2 === 0 ? 'text-left' : 'text-right'
                }`}
              >
                <h4 className="text-xl font-bold text-white mb-2">{edu.title}</h4>
                <p className="text-gray-300 text-sm mb-1">{edu.subtitle}</p>
                <p className="text-gray-400 text-sm mb-1">{edu.location}</p>
                <p className="text-gray-400 text-sm mb-2">{edu.date}</p>
                <p className="text-primary font-semibold mb-2">{edu.score}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;