import { personalInfo } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left – Name */}
          <div className="text-center sm:text-left">
            <span className="font-display font-bold text-lg text-gradient">
              &lt;{personalInfo.name.split(' ')[0]} /&gt;
            </span>
            <p className="text-xs text-gray-500 mt-1">
              Designed & Built with{' '}
              <FaHeart className="inline text-neon-purple text-[10px] mx-0.5" />{' '}
              by {personalInfo.name}
            </p>
          </div>

          {/* Center – Links */}
          <div className="flex gap-4">
            {[
              { icon: FaLinkedin, href: personalInfo.social.linkedin },
              { icon: FaGithub, href: personalInfo.social.github },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:shadow-neon-purple transition-all duration-300"
              >
                <link.icon className="text-sm" />
              </a>
            ))}
          </div>

          {/* Right – Copyright */}
          <p className="text-xs text-gray-500 text-center sm:text-right">
            © {year} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
