import { useState, useCallback, Suspense, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Lazy load the heavy Three.js component
const ParticleBackground = lazy(() => import('./components/ParticleBackground'));

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && <Loader onComplete={handleLoadComplete} />}
      </AnimatePresence>

      {/* Custom Cursor */}
      <CustomCursor />

      {/* 3D Particle Background — lazy loaded */}
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Stats />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
