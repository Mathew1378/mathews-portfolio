import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';
import { stats } from '../data/portfolioData';

const AnimatedCounter = ({ value, suffix = '', inView }) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="font-display font-bold text-4xl sm:text-5xl text-gradient">
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/[0.03] via-neon-blue/[0.03] to-neon-cyan/[0.03]" />

      <div className="max-w-6xl mx-auto">
        <div className="glass-strong rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
                <p className="text-gray-400 text-sm mt-2 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
