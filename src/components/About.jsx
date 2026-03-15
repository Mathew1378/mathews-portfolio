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
          {/* Avatar / Photo Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative group">
              {/* Neon border ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-neon-purple via-neon-blue to-neon-cyan opacity-40 blur-md group-hover:opacity-60 transition-opacity duration-500" />
              <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl glass-strong flex items-center justify-center overflow-hidden">
                {/* Placeholder avatar */}
                <div className="flex flex-col items-center gap-4">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-neon-purple/30 to-neon-cyan/30 flex items-center justify-center border border-white/10">
                    <FaUser className="text-4xl text-gray-300" />
                  </div>
                  <span className="text-gradient font-display font-bold text-xl">
                    {personalInfo.name}
                  </span>
                  <span className="text-gray-400 text-sm font-mono">
                    {personalInfo.title}
                  </span>
                </div>
                {/* Corner accent */}
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

            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white mb-3 font-display">
                Career Objective
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.objective}
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
