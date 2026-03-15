import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';
import { skillCategories } from '../data/portfolioData';

const SkillBar = ({ name, level, color, delay, inView }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={inView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.5, delay }}
    className="group"
  >
    <div className="flex justify-between mb-1.5">
      <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
        {name}
      </span>
      <span className="text-xs font-mono text-gray-500">{level}%</span>
    </div>
    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
        className="h-full rounded-full relative"
        style={{
          background: `linear-gradient(90deg, ${color}, ${color}88)`,
          boxShadow: `0 0 12px ${color}40`,
        }}
      >
        <div
          className="absolute inset-0 rounded-full opacity-50"
          style={{
            background: `linear-gradient(90deg, transparent, ${color}60, transparent)`,
            backgroundSize: '200% 100%',
            animation: 'shimmer 2s linear infinite',
          }}
        />
      </motion.div>
    </div>
  </motion.div>
);

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-gradient mx-auto">Skills & Expertise</h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive overview of my technical proficiencies
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-12 gap-8">
          {/* Category tabs */}
          <div className="lg:col-span-4 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {skillCategories.map((cat, idx) => (
              <motion.button
                key={cat.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onClick={() => setActiveCategory(idx)}
                className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-left whitespace-nowrap lg:whitespace-normal transition-all duration-300 ${
                  activeCategory === idx
                    ? 'glass-strong border-l-2 shadow-lg'
                    : 'hover:bg-white/[0.02]'
                }`}
                style={{
                  borderLeftColor:
                    activeCategory === idx ? cat.color : 'transparent',
                }}
              >
                <cat.icon
                  className="text-lg flex-shrink-0"
                  style={{
                    color: activeCategory === idx ? cat.color : '#6b7280',
                  }}
                />
                <div>
                  <span
                    className={`text-sm font-medium ${
                      activeCategory === idx ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {cat.title}
                  </span>
                  <span className="hidden lg:block text-xs text-gray-500 mt-0.5">
                    {cat.skills.length} skills
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Skill bars */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  {(() => {
                    const Icon = skillCategories[activeCategory].icon;
                    return (
                      <Icon
                        className="text-xl"
                        style={{ color: skillCategories[activeCategory].color }}
                      />
                    );
                  })()}
                  <h3 className="font-display font-semibold text-lg text-white">
                    {skillCategories[activeCategory].title}
                  </h3>
                </div>

                <div className="space-y-5">
                  {skillCategories[activeCategory].skills.map((skill, i) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={skillCategories[activeCategory].color}
                      delay={i * 0.08}
                      inView={true}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
