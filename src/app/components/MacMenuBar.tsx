import { motion } from 'motion/react';

export function MacMenuBar() {
  const menuItems = ['About', 'Skills', 'Approach', 'Connect'];
  
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-2xl border-b border-white/10"
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left side - Logo */}
        <div className="flex items-center gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-white font-semibold flex items-center gap-2"
          >
            <div className="w-5 h-5 rounded-full overflow-hidden">
              <img 
                src="/your-photo.jpg" 
                alt="Shivangi" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span>Shivangi</span>
          </motion.div>
        </div>
        
        {/* Center - Menu items */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.05 }}
              className="text-white/70 hover:text-white text-sm font-medium transition-colors cursor-pointer"
            >
              {item}
            </motion.a>
          ))}
        </div>
        
        {/* Right side - Time */}
        <div className="text-white/60 text-sm font-medium hover:text-white transition-colors cursor-default">
          {new Date().toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: false
          })}
        </div>
      </div>
    </motion.div>
  );
}
