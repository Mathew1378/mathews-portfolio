import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SectionWrapper = ({ children, id, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative py-24 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
