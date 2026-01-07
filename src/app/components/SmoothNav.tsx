import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'approach', label: 'Approach' },
  { id: 'connect', label: 'Connect' },
];

export function SmoothNav() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-20 right-6 z-40 hidden lg:block"
    >
      <div className="flex flex-col gap-3 bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === item.id
                ? 'bg-cyan-400 scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Navigate to ${item.label}`}
          >
            {/* Tooltip */}
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 text-gray-900 px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none"
            >
              {item.label}
            </motion.span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}
