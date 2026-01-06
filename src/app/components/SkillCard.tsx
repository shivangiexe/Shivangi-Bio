import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -12, scale: 1.03 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-2xl border border-white/20 hover:border-white/40 transition-all cursor-pointer group overflow-hidden"
      style={{
        boxShadow: isHovered ? `0 20px 60px ${color}40` : '0 0 0 transparent',
      }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        animate={isHovered ? {
          background: [
            `linear-gradient(135deg, ${color}10, ${color}05)`,
            `linear-gradient(225deg, ${color}15, ${color}08)`,
            `linear-gradient(135deg, ${color}10, ${color}05)`,
          ],
        } : {}}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Sparkle effects on hover */}
      {isHovered && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
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
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
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