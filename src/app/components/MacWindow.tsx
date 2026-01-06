import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface MacWindowProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

export function MacWindow({ children, className = '', title }: MacWindowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
      className={`relative bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden ${className}`}
    >
      {/* macOS Window Controls */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-3 h-3 rounded-full bg-[#FF5F57] cursor-pointer"
        />
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-3 h-3 rounded-full bg-[#FEBC2E] cursor-pointer"
        />
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-3 h-3 rounded-full bg-[#28C840] cursor-pointer"
        />
        {title && (
          <div className="flex-1 text-center text-white/60 text-sm font-medium -ml-12">
            {title}
          </div>
        )}
      </div>
      
      {/* Window Content */}
      <div className="p-6 md:p-8">
        {children}
      </div>
    </motion.div>
  );
}
