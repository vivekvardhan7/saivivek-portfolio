import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [query, setQuery] = useState('');
  const [botResponse, setBotResponse] = useState('');

  const contactIcons = [
    { icon: Mail, label: 'saivivek2809@gmail.com', href: 'mailto:saivivek2809@gmail.com' },
    { icon: Phone, label: '+91-6303649750', href: 'tel:+916303649750' },
    { icon: MapPin, label: 'NIT Mizoram, India', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/vivekvardhan7' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/sai-vivek-tata-049210280' },
  ];

const botReplies = {
    hello: "Hi there! I'm VivekBot. How can I assist you today?",
    hi: "Hello! 😊 How can I help you?",
    hlo: "Hello! 👋",
    "how are you": "I'm doing great! Thanks for asking 🙌",
    "who are you": "I'm the official AI assistant for Vivek's Portfolio 🤖",
    "who developed you": "I was developed by Tata Sai Vivek ✨",
    "how do you made": "I was built using React.js, TypeScript, TailwindCSS, Framer Motion, and Formspree — pure creativity and code 💻✨",
    projects: "I've developed 25+ projects across AI, full-stack, and automation. Check the Projects section!",
    skills: "My skills include React.js, Python, JavaScript, AI/ML, Deep Learning, Computer Vision, NLP, and full-stack development.",
    internships: "I’ve interned at Reaidy.io, MindOrphin, BMARG, and Vizag Steel Plant, focusing on AI and software development.",
    experience: "Led the Training & Placement Cell at NIT Mizoram, guided 150+ students, built automation tools, and worked in AI startups.",
    education: "Currently pursuing B.Tech in CSE at NIT Mizoram. Completed Intermediate at Narayana IIT Academy and 10th from Sri Chaitanya.",
    contact: "Use the form on the right or email me at saivivek2809@gmail.com 📬",
    creator: "I was created by Sai Vivek Tata 👨‍💻",
    default: "I'm not sure I understood that. Try asking about 'skills', 'projects', 'internships', 'creator' or 'education'."
  };
  

  const handleBotQuery = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = query.toLowerCase().trim();
    const reply = botReplies[cleaned as keyof typeof botReplies] || botReplies.default;
    setBotResponse(reply);
  };

  return (
    <section id="contact" className="py-20 bg-black/50">
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
            <span className="text-white">Contact</span>
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-green"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Ready to collaborate on innovative projects? Let's connect and build something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-col gap-8">
              {/* Contact Icons */}
              <div className="grid grid-cols-3 gap-4 justify-center">
                {contactIcons.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center text-center text-white hover:text-primary transition duration-300"
                  >
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 neon-border mb-2">
                      <item.icon size={22} />
                    </div>
                    <p className="text-sm font-medium text-gray-300">{item.label}</p>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-2xl font-bold text-white mb-4">Social Links</h4>
                <div className="flex gap-6">
                  {socialLinks.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      className="text-gray-400 hover:text-primary transition duration-300"
                    >
                      <item.icon size={28} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* AI Identity Core */}
              <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl backdrop-blur-sm neon-border text-white shadow-lg space-y-4">
                <h4 className="text-xl font-bold text-primary">🧠 VIVEK_ID: Developer Blueprint</h4>
                <pre className="text-sm font-mono text-gray-300">
{`const VIVEK_ID = {
  creativity: "Infinite",
  mission: "Build AI for human good",
  motto: "Code. Create. Connect.",
  location: "NIT Mizoram",
  status: "Always Learning"
};`}
                </pre>
              </div>

              {/* Chatbot Assistant */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-6 bg-gray-800/70 backdrop-blur-md border border-primary/30 rounded-xl text-white neon-border shadow-md relative"
              >
                <div className="absolute -top-5 right-5 bg-primary rounded-full p-2 shadow-lg animate-bounce cursor-pointer">
                  <MessageCircle size={24} className="text-white" />
                </div>
                <h5 className="text-xl font-semibold mb-2 text-center">Ask VivekBot 🤖</h5>
                <form onSubmit={handleBotQuery} className="space-y-4">
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="text"
                    placeholder="Ask about projects, skills, internships..."
                    className="w-full px-4 py-2 bg-gray-900 border border-primary/20 rounded-lg text-white"
                  />
                  {botResponse && (
                    <p className="text-sm text-green-400">{botResponse}</p>
                  )}
                </form>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-primary/20 rounded-xl p-8 neon-border">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              <form
                action="https://formspree.io/f/xdkzjlln"
                method="POST"
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-primary/20 rounded-lg text-white"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-primary/20 rounded-lg text-white"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-primary/20 rounded-lg text-white"
                    placeholder="Enter subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-primary/20 rounded-lg text-white resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
