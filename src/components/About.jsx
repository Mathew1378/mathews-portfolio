import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';
import { personalInfo, techStack } from '../data/portfolioData';
import { FaUser } from 'react-icons/fa';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-gradient mx-auto">About Me</h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start" ref={ref}>
          {/* Profile Picture & Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative group">
              {/* Neon border ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-neon-purple via-neon-blue to-neon-cyan opacity-40 blur-md group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative w-64 h-auto sm:w-72 rounded-2xl glass-strong flex flex-col items-center p-6 sm:p-8 overflow-hidden">
                {/* Profile Picture */}
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-6">
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-neon-purple via-neon-blue to-neon-cyan opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-500" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20">
                    {/* Your profile picture */}
                    <img 
                      src="/profile-picture.jpeg" 
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-neon-purple/30 to-neon-cyan/30">
                            <FaUser class="text-5xl text-gray-300" />
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-4">
                  <h3 className="text-gradient font-display font-bold text-2xl mb-2">
                    {personalInfo.name}
                  </h3>
                  <p className="text-gray-300 font-medium text-sm sm:text-base">
                    {personalInfo.title}
                  </p>
                </div>

                {/* Short Objective */}
                <div className="glass-card p-4 w-full">
                  <h4 className="text-sm font-mono text-gray-400 mb-2 tracking-wider uppercase">
                    Objective
                  </h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    {personalInfo.objective}
                  </p>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-neon-purple/10 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-neon-cyan/10 to-transparent rounded-tr-full" />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white mb-3 font-display">
                Professional Introduction
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.bio}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h3 className="text-sm font-mono text-gray-400 mb-4 tracking-wider uppercase">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.05 }}
                    whileHover={{ scale: 1.15, y: -4 }}
                    className="glass-card px-3 py-2 flex items-center gap-2 !rounded-lg group"
                    title={tech.name}
                  >
                    <tech.icon
                      className="text-lg transition-colors"
                      style={{ color: tech.color }}
                    />
                    <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
