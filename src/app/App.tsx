import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Palette, Presentation, Code, Brain, Instagram, Rocket, Sparkles, Star, Zap, Target } from 'lucide-react';
import { SkillCard } from './components/SkillCard';
import { MagneticButton } from './components/MagneticButton';
import { AnimatedBackground } from './components/AnimatedBackground';
import { CursorGlow } from './components/CursorGlow';
import { MacWindow } from './components/MacWindow';
import { MacMenuBar } from './components/MacMenuBar';

export default function App() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });
  
  const skills = [
    {
      icon: Palette,
      title: '👩🏻‍🎨 Design',
      description: 'Creating clean, functional interfaces using Figma and visual content with Canva',
      level: 'Growing & refining',
      color: '#06b6d4',
    },
    {
      icon: Presentation,
      title: '📊 Presentations & Dashboards',
      description: 'Structured storytelling through presentations and AI-assisted dashboards',
      level: 'Actively improving',
      color: '#0ea5e9',
    },
    {
      icon: Code,
      title: '👩🏻‍💻 Vibe Coding',
      description: 'Learning how digital products work — logic, structure, and real implementation',
      level: 'Building momentum',
      color: '#14b8a6',
    },
    {
      icon: Brain,
      title: '🦾 AI Tools',
      description: 'Using AI to speed workflows, improve decisions, and work smarter',
      level: 'Practically applied',
      color: '#10b981',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", sans-serif' }}>
      {/* Smooth scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 z-50 origin-left"
        style={{ scaleX: smoothProgress }}
      />
      
      {/* macOS Menu Bar */}
      <MacMenuBar />
      
      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
        {/* Animated background */}
        <AnimatedBackground />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Animated logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.2, 
              type: 'spring',
              stiffness: 120,
              damping: 15
            }}
            className="inline-block mb-8"
          >
            <div className="relative group cursor-pointer">
              {/* Rotating border with blue-green tints */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: 'linear' 
                }}
                className="absolute -inset-4 bg-gradient-to-r from-cyan-600 via-teal-600 via-blue-600 via-emerald-600 to-cyan-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Pulsing effect */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 rounded-full blur-md opacity-50"
              />
              
              <motion.div 
                className="relative w-40 h-40 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <motion.img
                  src="/your-photo.jpg"
                  alt="Shivangi"
                  className="w-full h-full object-cover rounded-full pointer-events-none select-none"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  animate={{ 
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Main heading with animated gradient text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <h1 className="mb-6 text-6xl md:text-8xl text-white">
              <span className="inline-block mr-2">Hi, I'm{'   '}</span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative inline-block"
              >
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                  className="bg-gradient-to-r from-cyan-300 via-teal-300 via-blue-300 via-emerald-300 to-cyan-300 bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]"
                  style={{ backgroundSize: '200% auto' }}
                >
                            Shivangi
                </motion.span>
                
                {/* Underline animation */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 rounded-full shadow-lg shadow-cyan-500/50"
                  style={{ transformOrigin: 'left' }}
                />
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              A student intentionally building skills across{' '}
              <span className="text-cyan-300 font-semibold">design</span>,{' '}
              <span className="text-teal-300 font-semibold">presentations</span>,{' '}
              <span className="text-sky-300 font-semibold">AI tools</span>, and{' '}
              <span className="text-emerald-300 font-semibold">coding</span>
              {' '}— focused, consistent, and quietly ambitious. I believe in <span className="text-cyan-300 font-semibold">progress over hype</span> and <span className="text-teal-300 font-semibold">skills that actually compound</span>.
            </motion.p>
          </motion.div>

          {/* Animated badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            {[
              { icon: Star, text: 'Student', gradient: 'from-cyan-500 to-cyan-700' },
              { icon: Target, text: 'Career-Focused', gradient: 'from-teal-500 to-teal-700' },
              { icon: Zap, text: 'Smart Work', gradient: 'from-sky-500 to-sky-700' },
              { icon: Rocket, text: 'Consistent', gradient: 'from-emerald-500 to-emerald-700' },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, scale: 0, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.2 + index * 0.1,
                  type: 'spring',
                  stiffness: 150,
                  damping: 12
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                  transition: { 
                    duration: 0.2,
                    ease: "easeOut"
                  }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
                className={`px-5 py-3 rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  <item.icon size={20} />
                </motion.div>
                <span className="font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-gray-400"
            >
              <div className="flex flex-col items-center gap-3">
                <motion.span 
                  className="text-sm font-medium"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Scroll to explore
                </motion.span>
                <motion.div
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-xl"
                >
                  ↓
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section with vibrant background */}
      <section id="skills" className="relative py-32 px-6 bg-gradient-to-br from-gray-900 via-teal-900/20 to-gray-900">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="inline-block mb-4"
            >
              <div className="px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 rounded-full text-cyan-300 backdrop-blur-sm">
                What I Do?
              </div>
            </motion.div>
            
            <h2 className="mb-6 text-5xl md:text-6xl bg-gradient-to-r from-white via-cyan-200 to-teal-200 bg-clip-text text-transparent">
              Skills & Tools
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Building strong foundations with discipline and intent
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.title}
                {...skill}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section with bold design */}
      <section id="approach" className="relative py-32 px-6 bg-black overflow-hidden">
        {/* Animated gradient line */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 via-blue-500 to-cyan-500 bg-[length:200%_auto]"
        />

        {/* Parallax background elements */}
        <motion.div
          style={{ y: useTransform(smoothProgress, [0, 1], [0, -100]) }}
          className="absolute inset-0 opacity-10"
        >
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full blur-3xl" />
        </motion.div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="mb-6 text-5xl md:text-6xl text-white">
              My Approach ✨
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-32 h-2 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'No Hype, Just Growth',
                description: "Focused on real skills, not shortcuts or noise.",
                icon: '📈',
                gradient: 'from-cyan-500/20 to-cyan-900/20',
                borderColor: 'border-cyan-500/30',
              },
              {
                title: 'Consistency Over Perfection',
                description: 'Small, daily progress beats occasional bursts.',
                icon: '🌱',
                gradient: 'from-teal-500/20 to-teal-900/20',
                borderColor: 'border-teal-500/30',
              },
              {
                title: 'Smart Work Wins',
                description: 'Leveraging the right tools to build efficiently and intentionally.',
                icon: '🏆',
                gradient: 'from-sky-500/20 to-sky-900/20',
                borderColor: 'border-sky-500/30',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60, rotateX: 45 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  y: -15,
                  scale: 1.03,
                  rotateX: -5,
                  transition: { 
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${item.gradient} border-2 ${item.borderColor} backdrop-blur-sm cursor-pointer group overflow-hidden transform-gpu`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      `radial-gradient(circle at 50% 50%, ${item.gradient.split(' ')[0].replace('from-', '')}40, transparent)`,
                      `radial-gradient(circle at 80% 80%, ${item.gradient.split(' ')[1].replace('to-', '')}40, transparent)`,
                      `radial-gradient(circle at 50% 50%, ${item.gradient.split(' ')[0].replace('from-', '')}40, transparent)`,
                    ],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-6xl mb-6"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="mb-4 text-white text-2xl">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="relative inline-block">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-blue-500/20 rounded-3xl blur-xl"
              />
              <blockquote className="relative text-3xl md:text-4xl italic text-white px-8 py-6 bg-gradient-to-br from-cyan-900/30 to-teal-900/30 border border-cyan-500/30 rounded-3xl backdrop-blur-sm">
                {"Learning with "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">purpose</span>
                {". Building with intention.”"}
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer/Contact with vibrant design */}
      <section id="connect" className="relative py-24 px-6 bg-gradient-to-br from-cyan-900 via-teal-900 to-blue-900">
        {/* Animated background pattern */}
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:32px_32px]"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="mb-6 text-5xl md:text-6xl text-white"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(6, 182, 212, 0.5)',
                  '0 0 40px rgba(20, 184, 166, 0.5)',
                  '0 0 20px rgba(6, 182, 212, 0.5)',
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Let's Connect! 🤝
            </motion.h2>
            <p className="text-xl text-cyan-200 mb-12 max-w-2xl mx-auto">
              Always open to learning opportunities and meaningful connections.
            </p>

            <MagneticButton href="https://instagram.com/shiivv.exe">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative inline-block group"
              >
                {/* Super glow effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 rounded-full blur-2xl opacity-75"
                />
                
                <div className="relative px-10 py-5 bg-white rounded-full flex items-center gap-4 shadow-2xl">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  >
                    <Instagram size={28} className="text-teal-600" />
                  </motion.div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                    @shiivv.exe
                  </span>
                  <motion.span
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-2xl"
                  >
                    →
                  </motion.span>
                </div>
              </motion.div>
            </MagneticButton>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 pt-8 border-t border-white/20"
            >
              <p className="text-cyan-200">
                © 2025 Shivangi — Student | Career-Focused Learner | Building with Intention 
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}