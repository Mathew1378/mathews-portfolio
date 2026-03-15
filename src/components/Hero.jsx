import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo } from '../data/portfolioData';
import { FaDownload, FaEye, FaEnvelope } from 'react-icons/fa';
import { HiChevronDown } from 'react-icons/hi';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Build the sequence for TypeAnimation
  const typeSequence = personalInfo.typingStrings.flatMap((str) => [str, 2000]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient gradient orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-neon-purple -top-40 -left-40" />
      <div className="glow-orb w-[500px] h-[500px] bg-neon-blue -bottom-40 -right-40" />
      <div className="glow-orb w-[400px] h-[400px] bg-neon-cyan top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 text-xs sm:text-sm text-gray-300 font-mono"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight"
        >
          Hi, I'm{' '}
          <span className="text-gradient">{personalInfo.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg sm:text-xl text-gray-400 mb-2 font-medium"
        >
          {personalInfo.title} · {personalInfo.subtitle}
        </motion.p>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="h-10 flex items-center justify-center mb-10"
        >
          <span className="text-neon-purple font-mono text-sm sm:text-base mr-2">
            &gt;
          </span>
          <TypeAnimation
            sequence={typeSequence}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-gray-300 font-mono text-sm sm:text-base"
          />
          <span className="ml-0.5 w-2 h-5 bg-neon-cyan animate-pulse" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button onClick={scrollToProjects} className="btn-glow-solid">
            <FaEye className="text-sm" />
            View Projects
          </button>
          <button onClick={scrollToContact} className="btn-glow">
            <FaEnvelope className="text-sm" />
            Contact Me
          </button>
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow"
          >
            <FaDownload className="text-sm" />
            Download Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-xs font-mono tracking-widest">SCROLL</span>
            <HiChevronDown className="text-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
