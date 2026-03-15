import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';
import { projects } from '../data/portfolioData';
import { FaTimes } from 'react-icons/fa';

const categoryColors = {
  IoT: '#06b6d4',
  'Desktop App': '#a855f7',
  'Web App': '#f59e0b',
};

const ProjectCard = ({ project, index, onClick, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.15 }}
    whileHover={{ y: -8 }}
    onClick={onClick}
    className="glass-card p-6 cursor-pointer group relative overflow-hidden"
  >
    {/* Top gradient accent */}
    <div
      className="absolute top-0 left-0 right-0 h-1 opacity-60 group-hover:opacity-100 transition-opacity"
      style={{
        background: `linear-gradient(90deg, ${
          categoryColors[project.category] || '#a855f7'
        }, transparent)`,
      }}
    />

    {/* Category badge */}
    <div className="flex items-center justify-between mb-4">
      <span
        className="px-3 py-1 rounded-full text-xs font-mono font-medium"
        style={{
          background: `${categoryColors[project.category] || '#a855f7'}15`,
          color: categoryColors[project.category] || '#a855f7',
          border: `1px solid ${categoryColors[project.category] || '#a855f7'}30`,
        }}
      >
        {project.category}
      </span>
    </div>

    {/* Title */}
    <h3 className="font-display font-semibold text-lg text-white mb-3 group-hover:text-gradient transition-all duration-300">
      {project.title}
    </h3>

    {/* Description */}
    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
      {project.description}
    </p>

    {/* Techs */}
    <div className="flex flex-wrap gap-2 mb-5">
      {project.technologies.slice(0, 4).map((tech) => (
        <span
          key={tech}
          className="px-2 py-1 bg-white/[0.04] rounded-md text-xs text-gray-400 border border-white/5"
        >
          {tech}
        </span>
      ))}
      {project.technologies.length > 4 && (
        <span className="px-2 py-1 text-xs text-gray-500">
          +{project.technologies.length - 4}
        </span>
      )}
    </div>

    {/* Year badge */}
    {project.year && (
      <span className="text-xs font-mono text-gray-500">{project.year}</span>
    )}

    {/* Hover glow */}
    <div
      className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
      style={{ background: categoryColors[project.category] || '#a855f7' }}
    />
  </motion.div>
);

const ProjectModal = ({ project, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[200] flex items-center justify-center p-4"
    onClick={onClose}
  >
    {/* Backdrop */}
    <div className="absolute inset-0 bg-dark-500/80 backdrop-blur-md" />

    {/* Modal */}
    <motion.div
      initial={{ scale: 0.9, opacity: 0, y: 30 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 30 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      onClick={(e) => e.stopPropagation()}
      className="relative glass-strong rounded-2xl p-6 sm:p-8 max-w-lg w-full max-h-[85vh] overflow-y-auto"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
      >
        <FaTimes />
      </button>

      {/* Category */}
      <span
        className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium mb-4"
        style={{
          background: `${categoryColors[project.category] || '#a855f7'}15`,
          color: categoryColors[project.category] || '#a855f7',
          border: `1px solid ${categoryColors[project.category] || '#a855f7'}30`,
        }}
      >
        {project.category}
      </span>

      <h2 className="font-display font-bold text-2xl text-white mb-4">
        {project.title}
      </h2>

      <p className="text-gray-300 text-sm leading-relaxed mb-6">
        {project.description}
      </p>

      {/* Highlights */}
      {project.highlights && (
        <div className="mb-6">
          <h4 className="text-sm font-mono text-gray-400 mb-3 uppercase tracking-wider">
            Key Features
          </h4>
          <ul className="space-y-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{
                    background: categoryColors[project.category] || '#a855f7',
                  }}
                />
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      <div className="mb-6">
        <h4 className="text-sm font-mono text-gray-400 mb-3 uppercase tracking-wider">
          Technologies Used
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-white/[0.04] rounded-lg text-xs text-gray-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Year */}
      {project.year && (
        <p className="text-xs font-mono text-gray-500">Year: {project.year}</p>
      )}
    </motion.div>
  </motion.div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-gradient mx-auto">Featured Projects</h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Academic and personal projects showcasing my skills in Software Development, IoT, and Web Applications
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
              inView={inView}
            />
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
