import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, TrendingUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Training & Placement Coordinator Lead',
      company: 'NIT Mizoram',
      location: 'Mizoram, India',
      period: 'May 2024 – Present',
      type: 'Leadership',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/20',
      achievements: [
        'Managing placement for 150+ students',
        'Leading a 42-member team, improving efficiency by 30%',
        'Secured partnerships with 150+ HRs',
        'Automated logistics using Google Apps Script (60% time saved)',
        'Mentoring 100+ students for placement readiness',
      ],
    },
    {
      title: 'Software Development Intern',
      company: 'Reaidy.io',
      location: 'Remote',
      period: 'Aug 2024 – Present',
      type: 'AI/ML, Full-Stack Development',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      achievements: [
        'Built AI-driven face/eye tracking Proxy Detection System',
        'Deployed in 100+ assessments (Physics Wallah) with 95% accuracy',
        'Technologies: React.js, Node.js, TensorFlow.js, WebRTC, face-api.js',
        'Reduced impersonation attempts by 85%',
      ],
    },
    {
      title: 'AI Software Engineer Intern',
      company: 'MindOrphin Pvt. Ltd (SayHey Project)',
      location: 'Remote',
      period: 'Apr 2025 – Present',
      type: 'AI/ML, Model Development',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/20',
      achievements: [
        'Built NLP-based conversation summarizers, improving efficiency by 25%',
        'Behavioral models improved user retention by 15%',
        'Delivered 500+ monthly wellness recommendations',
        'Implemented real-time audio processing and analysis',
      ],
    },
    {
      title: 'Full-Stack Developer Intern',
      company: 'BMARG Innovative Solutions',
      location: 'Remote',
      period: 'Jan 2024 – Apr 2024',
      type: 'Full-Stack Development',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
      achievements: [
        'Developed CureHouzz platform with real-time booking for 100+ users',
        'Integrated Firebase Authentication and responsive UI',
        'Built scalable backend with Node.js and MongoDB',
        'Implemented real-time notifications and booking system',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-primary">&lt;</span>
            <span className="text-white">Experience</span>
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-green"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My professional journey across AI/ML, leadership, and full-stack
            development.
          </p>
        </motion.div>

        {/* Grid of Cards */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`bg-gray-900/50 backdrop-blur-md border ${exp.borderColor} rounded-2xl p-6 neon-border shadow-lg`}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${exp.bgColor} ${exp.color} border ${exp.borderColor}`}
                >
                  {exp.type}
                </span>
                <div className="flex items-center text-gray-400 text-sm">
                  <Calendar size={14} className="mr-1" />
                  {exp.period}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>

              <div className="flex items-center gap-4 mb-4 text-gray-300 text-sm">
                <div className="flex items-center">
                  <Building size={16} className="mr-1" />
                  {exp.company}
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-1" />
                  {exp.location}
                </div>
              </div>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-300 text-sm"
                  >
                    <TrendingUp
                      size={16}
                      className={`${exp.color} mt-1 flex-shrink-0`}
                    />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
