import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ReactNode, useRef, useState, useEffect } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export function MagneticButton({ children, className = '', href }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });
  
  const rotateX = useTransform(springY, [-100, 100], [5, -5]);
  const rotateY = useTransform(springX, [-100, 100], [-5, 5]);

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    const magneticStrength = isHovered ? 0.4 : 0.2;
    mouseX.set(x * magneticStrength);
    mouseY.set(y * magneticStrength);
  };

  const reset = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!ref.current || isHovered) return;
      
      // Disable magnetic effects on mobile
      if (window.innerWidth < 768) return;
      
      const rect = ref.current.getBoundingClientRect();
      const distance = Math.sqrt(
        Math.pow(e.clientX - (rect.left + rect.width / 2), 2) +
        Math.pow(e.clientY - (rect.top + rect.height / 2), 2)
      );
      
      if (distance < 150) {
        const x = (e.clientX - (rect.left + rect.width / 2)) * 0.1;
        const y = (e.clientY - (rect.top + rect.height / 2)) * 0.1;
        mouseX.set(x);
        mouseY.set(y);
      } else {
        mouseX.set(0);
        mouseY.set(0);
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [isHovered, mouseX, mouseY]);

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={reset}
      style={{
        x: springX,
        y: springY,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ 
        scale: 0.95,
        transition: { duration: 0.1 }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
}
