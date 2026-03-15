import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';
import { timelineData } from '../data/portfolioData';

const typeColors = {
  education: '#a855f7',
  project: '#06b6d4',
  achievement: '#f59e0b',
};

const Timeline = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="timeline">
      <div className="max-w-4xl mx-auto" ref={ref}>
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-gradient mx-auto">My Journey</h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Education, projects, and milestones that shaped my career
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-6 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-blue to-neon-cyan opacity-20" />

          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            const Icon = item.icon;
            const color = typeColors[item.type] || '#a855f7';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-start mb-12 last:mb-0 ${
                  isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } flex-row`}
              >
                {/* Content card */}
                <div
                  className={`ml-16 sm:ml-0 sm:w-[calc(50%-32px)] ${
                    isLeft ? 'sm:pr-0 sm:text-right' : 'sm:pl-0 sm:text-left'
                  }`}
                >
                  <div className="glass-card p-5 sm:p-6 group">
                    {/* Year badge */}
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium mb-3"
                      style={{
                        background: `${color}15`,
                        color: color,
                        border: `1px solid ${color}30`,
                      }}
                    >
                      {item.year}
                    </span>

                    <h3 className="font-display font-semibold text-lg text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-2 font-medium">
                      {item.subtitle}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center z-10">
                  <motion.div
                    animate={{
                      boxShadow: [
                        `0 0 8px ${color}40`,
                        `0 0 20px ${color}60`,
                        `0 0 8px ${color}40`,
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${color}20, ${color}10)`,
                      border: `2px solid ${color}50`,
                    }}
                  >
                    <Icon className="text-base" style={{ color }} />
                  </motion.div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden sm:block sm:w-[calc(50%-32px)]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Timeline;
