/**
 * Auto-Rotating Orbiting Skills Component with Professional Skills Showcase
 */
 import React, { useEffect, useState, useRef } from 'react';
 import { motion } from 'framer-motion';
 
 const categories = [
   {
     title: 'Programming Languages',
     icon: '💻',
     orbitColor: 'border-blue-400',
     skills: ['Python', 'JavaScript', 'Java', 'C++', 'SQL', 'Go'],
   },
   {
     title: 'Frameworks & Libraries',
     icon: '⚛️',
     orbitColor: 'border-purple-400',
     skills: [
       'React.js',
       'Node.js',
       'TensorFlow',
       'PyTorch',
       'Express.js',
       'Flask',
     ],
   },
   {
     title: 'Technologies & Tools',
     icon: '🛠️',
     orbitColor: 'border-green-400',
     skills: [
       'Machine Learning',
       'Deep Learning',
       'Computer Vision',
       'NLP',
       'MongoDB',
       'Firebase',
     ],
   },
 ];
 
 const skillCategories = [
   {
     title: 'Programming Languages',
     icon: '</>',
     skills: [
       { name: 'Python', level: 80, projects: '5+', years: 3 },
       { name: 'JavaScript', level: 90, projects: '10+', years: 3 },
       { name: 'Java', level: 80, projects: '5+', years: 2 },
       { name: 'C++', level: 70, projects: '2+', years: 1.5 },
       { name: 'SQL', level: 70, projects: '8+', years: 1.5 },
       { name: 'Go', level: 55, projects: '3+', years: 0.5 },
     ]
   },
   {
     title: 'Frontend Development',
     icon: '⚛️',
     skills: [
       { name: 'React.js', level: 90, projects: '10+', years: 2 },
       { name: 'Next.js', level: 75, projects: '2+', years: 1 },
       { name: 'HTML5', level: 95, projects: '10+', years: 2 },
       { name: 'CSS3', level: 90, projects: '10+', years: 2 },
       { name: 'Tailwind CSS', level: 80, projects: '5+', years: 1 },
     ]
   },
   {
     title: 'Backend Development',
     icon: '🖥️',
     skills: [
       { name: 'Node.js', level: 80, projects: '10+', years: 2 },
       { name: 'Express.js', level: 75, projects: '3+', years: 1.5 },
       { name: 'Flask', level: 75, projects: '4+', years: 1 },
       { name: 'Django', level: 70, projects: '4+', years: 1 },
       { name: 'REST API', level: 80, projects: '8+', years: 2 },
     ]
   },
   {
     title: 'Databases',
     icon: '💾',
     skills: [
       { name: 'MongoDB', level: 80, projects: '7+', years: 1.5 },
       { name: 'PostgreSQL', level: 75, projects: '3+', years: 1 },
       { name: 'MySQL', level: 70, projects: '5+', years: 1 },
       { name: 'Firebase', level: 85, projects: '3+', years: 1.5 },
       { name: 'Supabase', level: 65, projects: '2+', years: 0.5 },
     ]
   },
   {
     title: 'AI & Machine Learning',
     icon: '🤖',
     skills: [
       { name: 'TensorFlow', level: 80, projects: '4+', years: 2 },
       { name: 'PyTorch', level: 75, projects: '5+', years: 1.5 },
       { name: 'OpenCV', level: 75, projects: '2+', years: 1 },
       { name: 'Scikit-learn', level: 80, projects: '4+', years: 2 },
       { name: 'NLP', level: 65, projects: '3+', years: 1 },
     ]
   },
   {
     title: 'Developer Tools',
     icon: '🛠️',
     skills: [
       { name: 'Git', level: 90, projects: '15+', years: 3 },
       { name: 'Docker', level: 75, projects: '4+', years: 1 },
       { name: 'VS Code', level: 95, projects: '25+', years: 3 },
       { name: 'Postman', level: 85, projects: '15+', years: 2 },
       { name: 'Figma', level: 80, projects: '8+', years: 1.5 },
     ]
   },
 ];
 
 const Skills = () => {
   const [rotation, setRotation] = useState(0);
   const [activeCategory, setActiveCategory] = useState(0);
   const [inView, setInView] = useState(false);
   const [skillsInView, setSkillsInView] = useState(false);
   const ref = useRef(null);
   const skillsRef = useRef(null);
 
   // Custom intersection observer hook replacement
   useEffect(() => {
     const observer = new IntersectionObserver(
       ([entry]) => {
         if (entry.isIntersecting) {
           setInView(true);
         }
       },
       { threshold: 0.1 }
     );
 
     if (ref.current) {
       observer.observe(ref.current);
     }
 
     return () => observer.disconnect();
   }, []);
 
   useEffect(() => {
     const observer = new IntersectionObserver(
       ([entry]) => {
         if (entry.isIntersecting) {
           setSkillsInView(true);
         }
       },
       { threshold: 0.1 }
     );
 
     if (skillsRef.current) {
       observer.observe(skillsRef.current);
     }
 
     return () => observer.disconnect();
   }, []);
 
   useEffect(() => {
     const interval = setInterval(() => {
       setRotation((prev) => prev + 0.5);
     }, 30);
     return () => clearInterval(interval);
   }, []);
 
   const getProficiencyLevel = (level) => {
     if (level >= 90) return { label: 'Expert', color: 'text-green-400' };
     if (level >= 75) return { label: 'Advanced', color: 'text-blue-400' };
     if (level >= 60) return { label: 'Intermediate', color: 'text-yellow-400' };
     return { label: 'Beginner', color: 'text-red-400' };
   };
 
   return (
     <section id="skills" className="py-20 bg-black grid-bg overflow-hidden">
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
             <span className="text-white">Skills</span>
             <span className="text-primary">/&gt;</span>
           </h2>
           <div className="w-24 h-1 bg-primary mx-auto rounded-full glow-green"></div>
           <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
             A dynamic visualization of my technical toolkit across programming,
             AI, and full-stack development.
           </p>
         </motion.div>
 
         {/* Centered Orbits with Rotating Skills */}
         <div className="flex flex-col md:flex-row items-center justify-center gap-16 mb-20">
           {categories.map((group, index) => (
             <div
               key={group.title}
               className={`relative w-64 h-64 rounded-full border-2 border-dashed ${group.orbitColor} flex items-center justify-center`}
             >
               {/* Center label */}
               <div className="absolute z-10 text-white text-lg font-bold text-center pointer-events-none">
                 <div className="text-3xl mb-1">{group.icon}</div>
                 {group.title}
               </div>
 
               {/* Rotating skill tags only */}
               {group.skills.map((skill, i) => {
                 const angle = (360 / group.skills.length) * i + rotation;
                 const rad = (angle * Math.PI) / 180;
                 const x = 110 * Math.cos(rad);
                 const y = 110 * Math.sin(rad);
                 return (
                   <div
                     key={skill}
                     className="absolute text-xs px-3 py-1 rounded-full bg-gray-800 text-primary border border-primary/20 shadow-md"
                     style={{
                       transform: `translate(${x}px, ${y}px)`,
                     }}
                   >
                     {skill}
                   </div>
                 );
               })}
             </div>
           ))}
         </div>
 
         {/* Professional Skills Showcase */}
         <motion.div
           ref={skillsRef}
           initial={{ opacity: 0, y: 50 }}
           animate={skillsInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="mt-24"
         >
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
               Skills & Technologies
             </h2>
             <p className="text-gray-400 max-w-2xl mx-auto">
               A comprehensive overview of my technical expertise and proficiency across various technologies
             </p>
           </div>
 
           {/* Category Tabs */}
           <div className="flex flex-wrap justify-center gap-2 mb-12">
             {skillCategories.map((category, index) => (
               <button
                 key={category.title}
                 onClick={() => setActiveCategory(index)}
                 className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                   activeCategory === index
                     ? 'bg-primary text-black font-semibold'
                     : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                 }`}
               >
                 <span className="text-lg">{category.icon}</span>
                 <span className="text-sm">{category.title}</span>
               </button>
             ))}
           </div>
 
           {/* Active Category Description */}
           <div className="text-center mb-8">
             <h3 className="text-2xl font-bold text-white mb-2">
               {skillCategories[activeCategory].title === 'Frontend Development' && 'Building responsive and interactive user interfaces'}
               {skillCategories[activeCategory].title === 'Backend Development' && 'Creating robust server-side applications and APIs'}
               {skillCategories[activeCategory].title === 'Programming Languages' && 'Mastering diverse programming paradigms and syntax'}
               {skillCategories[activeCategory].title === 'Databases' && 'Managing and optimizing data storage solutions'}
               {skillCategories[activeCategory].title === 'AI & Machine Learning' && 'Developing intelligent systems and predictive models'}
               {skillCategories[activeCategory].title === 'Developer Tools' && 'Utilizing modern development and design tools'}
             </h3>
           </div>
 
           {/* Skills Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {skillCategories[activeCategory].skills.map((skill, index) => {
               const proficiency = getProficiencyLevel(skill.level);
               return (
                 <motion.div
                   key={skill.name}
                   initial={{ opacity: 0, scale: 0.8, y: 50 }}
                   animate={skillsInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                   transition={{ delay: index * 0.1, duration: 0.5 }}
                   whileHover={{ 
                     scale: 1.05, 
                     boxShadow: "0 10px 30px rgba(0, 255, 128, 0.2)",
                     borderColor: "rgba(0, 255, 128, 0.5)"
                   }}
                   className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                 >
                   <div className="flex items-center justify-between mb-4">
                     <motion.div 
                       className="flex items-center gap-3"
                       initial={{ x: -20, opacity: 0 }}
                       animate={skillsInView ? { x: 0, opacity: 1 } : {}}
                       transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                     >
                       <motion.div 
                         className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center"
                         whileHover={{ 
                           backgroundColor: "rgba(0, 255, 128, 0.2)",
                           rotate: 360 
                         }}
                         transition={{ duration: 0.3 }}
                       >
                         <span className="text-primary font-bold text-lg">
                           {skill.name.charAt(0)}
                         </span>
                       </motion.div>
                       <div>
                         <motion.h4 
                           className="text-white font-semibold"
                           initial={{ opacity: 0 }}
                           animate={skillsInView ? { opacity: 1 } : {}}
                           transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                         >
                           {skill.name}
                         </motion.h4>
                         <motion.span 
                           className={`text-sm ${proficiency.color}`}
                           initial={{ opacity: 0, scale: 0.8 }}
                           animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
                           transition={{ delay: index * 0.1 + 0.4, duration: 0.4 }}
                         >
                           {proficiency.label}
                         </motion.span>
                       </div>
                     </motion.div>
                   </div>
 
                   <motion.div 
                     className="mb-4"
                     initial={{ opacity: 0, y: 20 }}
                     animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                     transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                   >
                     <div className="flex justify-between items-center mb-2">
                       <span className="text-gray-400 text-sm">Proficiency</span>
                       <motion.span 
                         className="text-white text-sm font-semibold"
                         initial={{ opacity: 0, scale: 0 }}
                         animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
                         transition={{ delay: index * 0.1 + 0.6, duration: 0.4 }}
                       >
                         {skill.level}%
                       </motion.span>
                     </div>
                     <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                       <motion.div
                         className="h-2 bg-gradient-to-r from-primary/50 to-primary rounded-full shadow-lg"
                         initial={{ width: 0, opacity: 0 }}
                         animate={skillsInView ? { width: `${skill.level}%`, opacity: 1 } : {}}
                         transition={{ delay: index * 0.1 + 0.7, duration: 1.2, ease: "easeOut" }}
                         style={{
                           boxShadow: `0 0 10px rgba(0, 255, 128, 0.4)`
                         }}
                       />
                     </div>
                   </motion.div>
 
                   <motion.div 
                     className="flex justify-between text-sm"
                     initial={{ opacity: 0, y: 20 }}
                     animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                     transition={{ delay: index * 0.1 + 0.8, duration: 0.4 }}
                   >
                     <motion.div 
                       className="text-center"
                       whileHover={{ scale: 1.1 }}
                       transition={{ duration: 0.2 }}
                     >
                       <motion.div 
                         className="text-primary font-semibold"
                         initial={{ scale: 0 }}
                         animate={skillsInView ? { scale: 1 } : {}}
                         transition={{ delay: index * 0.1 + 0.9, duration: 0.4, type: "spring" }}
                       >
                         {skill.projects}
                       </motion.div>
                       <div className="text-gray-400">Projects</div>
                     </motion.div>
                     <motion.div 
                       className="text-center"
                       whileHover={{ scale: 1.1 }}
                       transition={{ duration: 0.2 }}
                     >
                       <motion.div 
                         className="text-primary font-semibold"
                         initial={{ scale: 0 }}
                         animate={skillsInView ? { scale: 1 } : {}}
                         transition={{ delay: index * 0.1 + 1.0, duration: 0.4, type: "spring" }}
                       >
                         {skill.years}
                       </motion.div>
                       <div className="text-gray-400">Years</div>
                     </motion.div>
                   </motion.div>
 
 
                 </motion.div>
               );
             })}
           </div>
         </motion.div>
 
         {/* Additional Skills */}
         <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8, delay: 1.2 }}
           className="mt-24 text-center"
         >
           <h3 className="text-2xl font-bold text-white mb-8">
             Additional Expertise
           </h3>
           <div className="flex flex-wrap justify-center gap-4">
             {[
               'REST API',
               'WebRTC',
               'TensorFlow.js',
               'JWT',
               'OAuth',
               'Firebase Auth',
               'TailwindCSS',
               'UI/UX Design',
               'Figma',
               'Adobe XD',
               'DaVinci Resolve',
               'Leadership',
               'Public Speaking',
               'Team Collaboration',
             ].map((skill, i) => (
               <motion.span
                 key={skill}
                 initial={{ opacity: 0, scale: 0 }}
                 animate={inView ? { opacity: 1, scale: 1 } : {}}
                 transition={{ delay: 1.3 + i * 0.1, duration: 0.4 }}
                 whileHover={{ scale: 1.1 }}
                 className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 hover:bg-primary/20 transition-all duration-300 cursor-default"
               >
                 {skill}
               </motion.span>
             ))}
           </div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default Skills;