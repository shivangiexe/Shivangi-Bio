import { motion } from 'motion/react';

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient orbs with blue-green Apple Sequoia theme */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full mix-blend-multiply filter blur-3xl opacity-70"
          style={{
            width: Math.random() * 400 + 200,
            height: Math.random() * 400 + 200,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: [
              'linear-gradient(45deg, #06b6d4, #0891b2)',  // cyan
              'linear-gradient(45deg, #14b8a6, #0d9488)',  // teal
              'linear-gradient(45deg, #0ea5e9, #0284c7)',  // sky blue
              'linear-gradient(45deg, #10b981, #059669)',  // emerald
              'linear-gradient(45deg, #06b6d4, #14b8a6)',  // cyan to teal
              'linear-gradient(45deg, #0ea5e9, #06b6d4)',  // sky to cyan
              'linear-gradient(45deg, #14b8a6, #10b981)',  // teal to emerald
              'linear-gradient(45deg, #3b82f6, #0ea5e9)',  // blue to sky
            ][i % 8],
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}