import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';
import { certifications } from '../data/portfolioData';
import { FaExternalLinkAlt } from 'react-icons/fa';

const CertCard = ({ cert, index, inView }) => {
  const Icon = cert.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 15 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass-card p-6 group relative overflow-hidden"
    >
      {/* Corner accent */}
      <div
        className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{ background: cert.color }}
      />

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
        style={{
          background: `${cert.color}12`,
          border: `1px solid ${cert.color}25`,
        }}
      >
        <Icon className="text-2xl" style={{ color: cert.color }} />
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-white mb-1 text-base">
        {cert.title}
      </h3>
      <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
      <p className="text-xs text-gray-500 font-mono mb-4">{cert.date}</p>
      
      {/* Certification Number (if available) */}
      {cert.certificationNumber && (
        <p className="text-xs text-gray-500 font-mono mb-2">
          ID: {cert.certificationNumber}
        </p>
      )}

      {/* Verify link */}
      <a
        href={cert.credentialUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
        style={{ color: cert.color }}
      >
        Verify Credential <FaExternalLinkAlt className="text-[10px]" />
      </a>
    </motion.div>
  );
};

const Certifications = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <SectionWrapper id="certifications">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-gradient mx-auto">Certifications</h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Professional certifications validating my expertise
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
