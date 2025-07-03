import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Shield, Heart, Brain, Eye } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Proxy Detection System',
      description: 'AI-powered face and eye tracking system to prevent impersonation during online assessments. Deployed for 10,000+ assessments with 95% accuracy.',
      tech: ['React.js', 'Node.js', 'TensorFlow.js', 'WebRTC', 'face-api.js'],
      icon: Shield,
      liveUrl: 'https://advanced-proxy-detection-reaidyio.vercel.app',
      githubUrl: '#',
      features: ['Real-time face tracking', 'Eye movement analysis', '95% accuracy rate', 'Used by Physics Wallah'],
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
      borderColor: 'border-red-400/20',
    },
    {
      title: 'Serene Emotional Support Chatbot',
      description: 'AI-powered mental health chatbot providing personalized emotional support and wellness recommendations with 30% improved user engagement.',
      tech: ['Python', 'PyTorch', 'SpeechRecognition', 'React.js', 'NLP'],
      icon: Heart,
      liveUrl: '#',
      githubUrl: '#',
      features: ['Emotional analysis', 'Personalized responses', '30% engagement boost', 'Speech recognition'],
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/10',
      borderColor: 'border-pink-400/20',
    },
    {
      title: 'AI Conversation Summarizer',
      description: 'NLP-based system for SayHey app that summarizes audio conversations and ranks listeners based on performance metrics.',
      tech: ['Python', 'Whisper', 'pyannote', 'pydub', 'NLP'],
      icon: Brain,
      liveUrl: '#',
      githubUrl: '#',
      features: ['Audio transcription', 'Conversation analysis', 'Performance ranking', 'Real-time processing'],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
    },
    {
      title: 'CureHouzz Platform',
      description: 'Comprehensive doctor appointment platform handling 100+ users with real-time booking, authentication, and responsive design.',
      tech: ['React', 'Redux', 'Node.js', 'MongoDB', 'Firebase'],
      icon: Eye,
      liveUrl: '#',
      githubUrl: '#',
      features: ['Real-time booking', '5000+ users', 'Firebase auth', 'Responsive design'],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/20',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black grid-bg">
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
            <span className="text-white">Projects</span>
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-green"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Showcasing innovative solutions that blend AI, full-stack development, and real-world impact.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`bg-gray-900/50 backdrop-blur-sm border ${project.borderColor} rounded-xl overflow-hidden card-hover neon-border group`}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-full ${project.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon size={28} className={project.color} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className={`text-sm font-semibold ${project.color} mb-3`}>Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className={`w-2 h-2 ${project.bgColor} rounded-full`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className={`text-sm font-semibold ${project.color} mb-3`}>Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 ${project.bgColor} ${project.color} rounded-full text-sm border ${project.borderColor}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-outline px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 ${project.bgColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;