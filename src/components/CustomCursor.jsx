import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Disable on mobile / touch devices
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handlePointerOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsPointer(true);
      }
    };

    const handlePointerOut = () => setIsPointer(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handlePointerOver);
    window.addEventListener('mouseout', handlePointerOut);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handlePointerOver);
      window.removeEventListener('mouseout', handlePointerOut);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        animate={{
          x: position.x - 5,
          y: position.y - 5,
          scale: isPointer ? 0.5 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-white" />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isPointer ? 1.5 : 1,
          opacity: isHidden ? 0 : 0.5,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.8 }}
      >
        <div className="w-10 h-10 rounded-full border border-neon-purple/60" />
      </motion.div>

      {/* Glow trail */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9997]"
        animate={{
          x: position.x - 30,
          y: position.y - 30,
          opacity: isHidden ? 0 : 0.15,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 1.2 }}
      >
        <div className="w-[60px] h-[60px] rounded-full bg-neon-purple/30 blur-xl" />
      </motion.div>
    </>
  );
};

export default CustomCursor;
