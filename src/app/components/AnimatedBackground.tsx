import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reduced orbs for mobile (3 instead of 8)
  const orbCount = isMobile ? 3 : 8;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs - reduced on mobile */}
      {[...Array(orbCount)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-multiply filter blur-3xl"
          style={{
            width: isMobile ? 150 : Math.random() * 400 + 200,
            height: isMobile ? 150 : Math.random() * 400 + 200,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: isMobile ? 0.4 : 0.7,
            background: [
              'linear-gradient(45deg, #06b6d4, #0891b2)',
              'linear-gradient(45deg, #14b8a6, #0d9488)',
              'linear-gradient(45deg, #0ea5e9, #0284c7)',
              'linear-gradient(45deg, #10b981, #059669)',
              'linear-gradient(45deg, #06b6d4, #14b8a6)',
              'linear-gradient(45deg, #0ea5e9, #06b6d4)',
              'linear-gradient(45deg, #14b8a6, #10b981)',
              'linear-gradient(45deg, #3b82f6, #0ea5e9)',
            ][i % 8],
          }}
          animate={isMobile ? {
            // Simpler animation for mobile
            scale: [1, 1.1, 1],
          } : {
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: isMobile ? 20 : Math.random() * 10 + 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}