import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { useState, useRef } from 'react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  level: string;
  color: string;
  delay: number;
}

export function SkillCard({ icon: Icon, title, description, level, color, delay }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [8, -8]), {
    stiffness: 150,
    damping: 20,
    mass: 0.5
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-8, 8]), {
    stiffness: 150,
    damping: 20,
    mass: 0.5
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    // Disable 3D effects on mobile for better performance
    if (window.innerWidth < 768) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 1, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ 
        y: -10, 
        scale: 1.02,
        transition: { 
          type: "spring",
          stiffness: 200,
          damping: 20
        }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 hover:border-white/40 transition-all duration-500 cursor-pointer group overflow-hidden touch-manipulation"
      style={{
        boxShadow: isHovered ? `0 20px 60px ${color}20, 0 0 0 1px ${color}15` : '0 8px 32px rgba(0,0,0,0.1)',
      }}
    >
      {/* Simplified gradient background */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: isHovered ? `linear-gradient(135deg, ${color}08, ${color}04)` : 'transparent'
        }}
      />
      
      {/* Reduced sparkle effects - only 3 instead of 8 */}
      {isHovered && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full opacity-60"
              style={{ backgroundColor: color }}
              initial={{ 
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                scale: 0,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut"
              }}
            />
          ))}
        </>
      )}
      
      <div className="relative z-10">
        <motion.div
          animate={isHovered ? { 
            rotate: [0, -5, 5, 0],
            scale: [1, 1.02, 1],
          } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="inline-block"
        >
          <div 
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 relative overflow-hidden backdrop-blur-sm"
            style={{ backgroundColor: `${color}20` }}
          >
            {/* Simplified icon background */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: `linear-gradient(45deg, ${color}30, ${color}15)` }}
            />
            <Icon style={{ color }} size={24} strokeWidth={2.5} className="relative z-10 sm:w-7 sm:h-7 md:w-8 md:h-8" />
          </div>
        </motion.div>
        
        <h3 className="mb-2 sm:mb-3 text-white text-lg sm:text-xl font-semibold">{title}</h3>
        <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{description}</p>
        
        <motion.div 
          className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium backdrop-blur-xl text-sm sm:text-base"
          style={{ 
            backgroundColor: `${color}20`,
            color 
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {level}
        </motion.div>
      </div>
    </motion.div>
  );
}