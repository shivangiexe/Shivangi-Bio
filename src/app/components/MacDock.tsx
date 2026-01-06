import { motion } from 'motion/react';
import { Palette, Presentation, Code, Brain, Instagram } from 'lucide-react';

export function MacDock() {
  const dockItems = [
    { icon: Palette, label: 'Design', color: 'from-cyan-500 to-cyan-600' },
    { icon: Presentation, label: 'Presentations', color: 'from-teal-500 to-teal-600' },
    { icon: Code, label: 'Code', color: 'from-sky-500 to-sky-600' },
    { icon: Brain, label: 'AI Tools', color: 'from-emerald-500 to-emerald-600' },
    { icon: Instagram, label: 'Instagram', color: 'from-pink-500 to-pink-600' },
  ];
  
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl px-3 py-3 shadow-2xl">
        <div className="flex items-end gap-2">
          {dockItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
              whileHover={{ 
                y: -20,
                scale: 1.2,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: -10 }}
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800/90 backdrop-blur-xl text-white text-xs rounded-lg whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {item.label}
              </motion.div>
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg cursor-pointer`}>
                <item.icon className="w-7 h-7 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
