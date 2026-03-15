import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 600);
          return 100;
        }
        return Math.min(prev + Math.random() * 15 + 5, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#050510' }}
    >
      {/* Ambient orbs */}
      <div
        className="absolute rounded-full"
        style={{
          width: 400, height: 400,
          top: '20%', left: '20%',
          background: '#a855f7',
          filter: 'blur(120px)',
          opacity: 0.15,
          pointerEvents: 'none',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          width: 300, height: 300,
          bottom: '20%', right: '20%',
          background: '#3b82f6',
          filter: 'blur(120px)',
          opacity: 0.15,
          pointerEvents: 'none',
        }}
      />

      {/* Logo / Text */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'backOut' }}
        className="relative mb-12"
      >
        <h1
          className="font-display text-5xl sm:text-6xl font-bold text-gradient"
          style={{
            background: 'linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Portfolio
        </h1>
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-center text-sm mt-3 font-mono tracking-widest"
          style={{ color: '#9ca3af' }}
        >
          INITIALIZING...
        </motion.div>
      </motion.div>

      {/* Spinner Ring */}
      <div className="relative w-20 h-20 mb-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full"
          style={{ border: '2px solid transparent', borderTopColor: '#a855f7', borderRightColor: '#3b82f6' }}
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="absolute rounded-full"
          style={{ inset: 8, border: '2px solid transparent', borderBottomColor: '#06b6d4', borderLeftColor: '#ec4899' }}
        />
        <div
          className="absolute rounded-full"
          style={{
            inset: 16,
            background: 'linear-gradient(135deg, rgba(168,85,247,0.2), rgba(6,182,212,0.2))',
            backdropFilter: 'blur(4px)',
          }}
        />
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #a855f7, #3b82f6, #06b6d4)' }}
          initial={{ width: '0%' }}
          animate={{ width: `${Math.min(progress, 100)}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <p className="text-xs mt-3 font-mono" style={{ color: '#6b7280' }}>
        {Math.min(Math.round(progress), 100)}%
      </p>
    </motion.div>
  );
};

export default Loader;
