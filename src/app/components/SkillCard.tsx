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
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), {
    stiffness: 300,
    damping: 30
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), {
    stiffness: 300,
    damping: 30
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
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
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ 
        y: -15, 
        scale: 1.02,
        transition: { 
          duration: 0.3,
          ease: "easeOut"
        }
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 hover:border-white/40 transition-all duration-500 cursor-pointer group overflow-hidden"
      style={{
        boxShadow: isHovered ? `0 25px 80px ${color}30, 0 0 0 1px ${color}20` : '0 10px 40px rgba(0,0,0,0.1)',
      }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={isHovered ? {
          background: [
            `linear-gradient(135deg, ${color}08, ${color}03)`,
            `linear-gradient(225deg, ${color}12, ${color}06)`,
            `linear-gradient(135deg, ${color}08, ${color}03)`,
          ],
        } : {}}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Enhanced sparkle effects */}
      {isHovered && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{ backgroundColor: color }}
              initial={{ 
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                scale: 0,
                opacity: 0,
              }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </>
      )}
      
      <div className="relative z-10">
        <motion.div
          animate={isHovered ? { 
            rotate: [0, -15, 15, -15, 0],
            scale: [1, 1.1, 1],
          } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block"
        >
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden backdrop-blur-xl"
            style={{ backgroundColor: `${color}25` }}
          >
            <motion.div
              className="absolute inset-0"
              animate={isHovered ? {
                background: [
                  `linear-gradient(45deg, ${color}40, ${color}20)`,
                  `linear-gradient(225deg, ${color}40, ${color}20)`,
                  `linear-gradient(45deg, ${color}40, ${color}20)`,
                ],
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <Icon style={{ color }} size={32} strokeWidth={2.5} className="relative z-10" />
          </div>
        </motion.div>
        
        <h3 className="mb-3 text-white">{title}</h3>
        <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
        
        <motion.div 
          className="inline-block px-4 py-2 rounded-full font-medium backdrop-blur-xl"
          style={{ 
            backgroundColor: `${color}20`,
            color 
          }}
          whileHover={{ scale: 1.05 }}
        >
          {level}
        </motion.div>
      </div>
    </motion.div>
  );
}