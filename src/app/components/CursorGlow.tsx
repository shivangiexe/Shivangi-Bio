import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Disable on mobile/touch devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    
    if (isMobile) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Don't render on mobile
  if (isMobile) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-50 mix-blend-screen hidden md:block"
      animate={{
        x: mousePosition.x - 200,
        y: mousePosition.y - 200,
      }}
      transition={{
        type: 'spring',
        damping: 25,
        stiffness: 150,
        mass: 0.5,
      }}
    >
      <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-500/15 via-teal-500/15 to-blue-500/15 blur-2xl" />
    </motion.div>
  );
}