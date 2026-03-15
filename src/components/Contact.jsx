import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionWrapper from './SectionWrapper';
import { personalInfo } from '../data/portfolioData';
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaGithub, FaLinkedin, FaPaperPlane
} from 'react-icons/fa';

const contactDetails = [
  { icon: FaEnvelope, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: FaPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: FaMapMarkerAlt, label: 'Location', value: personalInfo.location, href: null },
];

const socialLinks = [
  { icon: FaLinkedin, label: 'LinkedIn', href: personalInfo.social.linkedin, color: '#0A66C2' },
  { icon: FaGithub, label: 'GitHub', href: personalInfo.social.github, color: '#ffffff' },
];

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, integrate with EmailJS or a backend
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="section-heading text-gradient mx-auto">Get In Touch</h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind? Let's talk about how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact details */}
            {contactDetails.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-neon-purple" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-mono tracking-wider">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-300">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <div className="pt-6">
              <p className="text-xs text-gray-500 uppercase font-mono tracking-wider mb-4">
                Follow Me
              </p>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                    title={link.label}
                  >
                    <link.icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Decorative accent */}
            <div className="hidden lg:block pt-8">
              <div className="glass-card p-5 text-center">
                <p className="text-sm text-gray-400 italic">
                  "The best way to predict the future is to create it."
                </p>
                <p className="text-xs text-gray-500 mt-2">— Peter Drucker</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="relative">
                  <label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focused === 'name' || formData.name
                        ? 'top-1.5 text-[10px] text-neon-purple'
                        : 'top-3.5 text-sm text-gray-500'
                    }`}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused('')}
                    required
                    className="w-full pt-5 pb-2.5 px-4 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-gray-200 outline-none focus:border-neon-purple/50 focus:shadow-neon-purple transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                      focused === 'email' || formData.email
                        ? 'top-1.5 text-[10px] text-neon-purple'
                        : 'top-3.5 text-sm text-gray-500'
                    }`}
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused('')}
                    required
                    className="w-full pt-5 pb-2.5 px-4 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-gray-200 outline-none focus:border-neon-purple/50 focus:shadow-neon-purple transition-all duration-300"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="relative">
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focused === 'subject' || formData.subject
                      ? 'top-1.5 text-[10px] text-neon-purple'
                      : 'top-3.5 text-sm text-gray-500'
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused('')}
                  required
                  className="w-full pt-5 pb-2.5 px-4 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-gray-200 outline-none focus:border-neon-purple/50 focus:shadow-neon-purple transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <label
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focused === 'message' || formData.message
                      ? 'top-1.5 text-[10px] text-neon-purple'
                      : 'top-3.5 text-sm text-gray-500'
                  }`}
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused('')}
                  required
                  rows={5}
                  className="w-full pt-5 pb-2.5 px-4 bg-white/[0.03] border border-white/10 rounded-xl text-sm text-gray-200 outline-none focus:border-neon-purple/50 focus:shadow-neon-purple transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-glow-solid w-full justify-center py-3.5 text-base"
              >
                <FaPaperPlane />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
