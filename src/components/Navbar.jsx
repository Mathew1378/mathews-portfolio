import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, personalInfo } from '../data/portfolioData';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);

      // active section detection
      const sections = navLinks.map((l) => l.id);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop - 200 <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-[3px] z-[100] bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-strong shadow-glass py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo('hero')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-display text-xl font-bold text-gradient"
          >
            &lt;{personalInfo.name.split(' ')[0]} /&gt;
          </motion.button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/[0.06] rounded-lg border border-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 text-2xl"
          >
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden glass-strong mt-2 mx-4 rounded-xl overflow-hidden"
            >
              <div className="py-4 px-4 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollTo(link.id)}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      activeSection === link.id
                        ? 'text-white bg-white/[0.06]'
                        : 'text-gray-400 hover:text-white hover:bg-white/[0.03]'
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
