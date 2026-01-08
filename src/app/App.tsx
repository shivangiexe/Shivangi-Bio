import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Palette, Presentation, Code, Brain, Instagram, Rocket, Sparkles, Star, Zap, Target, Briefcase, GraduationCap, Building2, Globe } from 'lucide-react';
import { SkillCard } from './components/SkillCard';
import { MagneticButton } from './components/MagneticButton';
import { AnimatedBackground } from './components/AnimatedBackground';
import { CursorGlow } from './components/CursorGlow';
import { MacWindow } from './components/MacWindow';
import { MacMenuBar } from './components/MacMenuBar';
import { ScrollToTop } from './components/ScrollToTop';
import { SmoothNav } from './components/SmoothNav';

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
        role="progressbar"
        aria-label="Page scroll progress"
      />
      
      {/* macOS Menu Bar */}
      <MacMenuBar />
      
      {/* Smooth Navigation Dots */}
      <SmoothNav />
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
      
      {/* Cursor glow effect */}
      <CursorGlow />

      {/* Main content */}
      <main id="main-content">

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20" aria-label="About Shivangi">
        {/* Animated background */}
        <AnimatedBackground />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" aria-hidden="true" />

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
            className="inline-block mb-6 md:mb-8"
          >
            <div className="relative group cursor-pointer">
              {/* Rotating border - simplified */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 30, 
                  repeat: Infinity, 
                  ease: 'linear' 
                }}
                className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"
              />
              
              {/* Simplified pulsing effect */}
              <motion.div
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-1 md:-inset-2 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full blur-sm opacity-40"
              />
              
              <motion.div 
                className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br from-cyan-600 via-teal-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
              >
                <motion.img
                  src="/your-photo.jpg"
                  alt="Shivangi"
                  className="w-full h-full object-cover rounded-full pointer-events-none select-none"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  animate={{ 
                    rotate: [0, 1, -1, 0],
                  }}
                  transition={{ 
                    duration: 8, 
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
            <h1 className="mb-4 md:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white leading-tight">
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
                  className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-1 md:h-2 bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 rounded-full shadow-lg shadow-cyan-500/50"
                  style={{ transformOrigin: 'left' }}
                />
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
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
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-8 md:mb-12 px-4"
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
                  scale: 1.05,
                  y: -2,
                  transition: { 
                    duration: 0.2,
                    ease: "easeOut"
                  }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
                className={`px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center gap-1.5 sm:gap-2 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 text-sm sm:text-base`}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.3
                  }}
                >
                  <item.icon size={16} className="sm:w-5 sm:h-5" />
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
      <section id="skills" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-teal-900/20 to-gray-900" aria-label="Skills and Tools">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute top-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-teal-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-6 sm:mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="inline-block mb-3 sm:mb-4"
            >
              <div className="px-4 sm:px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 rounded-full text-cyan-300 backdrop-blur-sm text-sm sm:text-base">
                What I Do?
              </div>
            </motion.div>
            
            <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-cyan-200 to-teal-200 bg-clip-text text-transparent leading-tight">
              Skills & Tools
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Building strong foundations with discipline and intent
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
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

      {/* Experience Section */}
      <section id="experience" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900" aria-label="Experience and Work">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            className="absolute top-20 right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-20 left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-purple-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="inline-block mb-3 sm:mb-4"
            >
              <div className="px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-blue-300 backdrop-blur-sm text-sm sm:text-base">
                Where I Work?
              </div>
            </motion.div>
            
            <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              Experience & Roles
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Building real-world experience through meaningful work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: Building2,
                emoji: '💼',
                title: 'Working Professional',
                organization: 'Elitos',
                instagram: '@elitos.official',
                instagramUrl: 'https://instagram.com/elitos.official',
                description: 'Working with family business — gaining hands-on experience in operations, strategy, and real-world business skills',
                type: 'Business',
                gradient: 'from-amber-500/20 to-orange-900/20',
                borderColor: 'border-amber-500/30',
                iconColor: 'text-amber-400',
              },
              {
                icon: Briefcase,
                emoji: '🚀',
                title: 'Marketing Officer',
                organization: 'RagsPro Agency',
                instagram: '@rags.ai',
                instagramUrl: 'https://instagram.com/rags.ai',
                website: 'ragspro.com',
                websiteUrl: 'https://ragspro.com',
                description: 'Driving marketing strategies and growth initiatives at a cutting-edge AI agency',
                type: 'Marketing',
                gradient: 'from-cyan-500/20 to-blue-900/20',
                borderColor: 'border-cyan-500/30',
                iconColor: 'text-cyan-400',
              },
              {
                icon: GraduationCap,
                emoji: '📊',
                title: 'Data Analytics + Gen AI',
                organization: 'Ducat',
                instagram: '@ducatsouthextension',
                instagramUrl: 'https://instagram.com/ducatsouthextension',
                description: 'Professional training in data analytics and generative AI — building future-ready skills',
                type: 'Education',
                gradient: 'from-violet-500/20 to-purple-900/20',
                borderColor: 'border-violet-500/30',
                iconColor: 'text-violet-400',
              },
              {
                icon: Palette,
                emoji: '🎨',
                title: 'Designer Head',
                organization: 'Novelle MUN',
                instagram: '@the_novelle_mun',
                instagramUrl: 'https://instagram.com/the_novelle_mun',
                description: 'Leading the design team, creating visual identities, and crafting impactful event materials',
                type: 'Leadership',
                gradient: 'from-pink-500/20 to-rose-900/20',
                borderColor: 'border-pink-500/30',
                iconColor: 'text-pink-400',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className={`relative p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${item.gradient} border-2 ${item.borderColor} backdrop-blur-sm cursor-pointer group overflow-hidden transform-gpu touch-manipulation`}
              >
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${item.gradient.split(' ')[0].replace('from-', '')}30, transparent)`
                  }}
                />
                
                <div className="relative z-10">
                  {/* Type badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${item.borderColor} border bg-white/5`}>
                    {item.type}
                  </div>
                  
                  {/* Icon */}
                  <motion.div 
                    className="text-4xl sm:text-5xl mb-4"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.emoji}
                  </motion.div>
                  
                  {/* Title & Organization */}
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-1">{item.title}</h3>
                  <p className={`${item.iconColor} font-semibold text-base sm:text-lg mb-2`}>{item.organization}</p>
                  
                  {/* Instagram handle */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <a 
                      href={item.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <Instagram size={14} />
                      <span>{item.instagram}</span>
                    </a>
                    {item.website && (
                      <a 
                        href={item.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        <Globe size={14} />
                        <span>{item.website}</span>
                      </a>
                    )}
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{item.description}</p>
                </div>
                
                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${item.gradient.replace('from-', 'bg-').split(' ')[0]} opacity-20 rounded-bl-full`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section with bold design */}
      <section id="approach" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-black overflow-hidden" aria-label="My Approach and Philosophy">
        {/* Animated gradient line */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-teal-500 via-blue-500 to-cyan-500 bg-[length:200%_auto]"
        />

        {/* Simplified parallax background elements */}
        <motion.div
          style={{ y: useTransform(smoothProgress, [0, 1], [0, -30]) }}
          className="absolute inset-0 opacity-5"
        >
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full blur-2xl" />
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full blur-2xl" />
        </motion.div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
              My Approach ✨
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-20 sm:w-32 h-1 sm:h-2 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 mx-auto rounded-full"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
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
                className={`relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${item.gradient} border-2 ${item.borderColor} backdrop-blur-sm cursor-pointer group overflow-hidden transform-gpu touch-manipulation`}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Simplified hover glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${item.gradient.split(' ')[0].replace('from-', '')}20, transparent)`
                  }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6"
                    whileHover={{ 
                      scale: [1, 1.05, 1]
                    }}
                    whileTap={{ 
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="mb-3 sm:mb-4 text-white text-xl sm:text-2xl font-semibold">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{item.description}</p>
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
      <section id="connect" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-cyan-900 via-teal-900 to-blue-900" aria-label="Connect with Shivangi">
        {/* Animated background pattern */}
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] sm:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px] sm:bg-[size:32px_32px]"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(6, 182, 212, 0.3)',
                  '0 0 30px rgba(20, 184, 166, 0.4)',
                  '0 0 20px rgba(6, 182, 212, 0.3)',
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Let's Connect! 🤝
            </motion.h2>
            <p className="text-lg sm:text-xl text-cyan-200 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              Always open to learning opportunities and meaningful connections.
            </p>

            <MagneticButton href="https://instagram.com/shiivv.exe">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-block group"
              >
                {/* Simplified glow effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 rounded-full blur-xl opacity-60"
                />
                
                <div className="relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white rounded-full flex items-center gap-2 sm:gap-3 md:gap-4 shadow-2xl touch-manipulation">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  >
                    <Instagram size={20} className="text-teal-600 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  </motion.div>
                  <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                    @shiivv.exe
                  </span>
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-lg sm:text-xl md:text-2xl"
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
              className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20"
            >
              <p className="text-cyan-200 text-sm sm:text-base px-4">
                © 2025 Shivangi — Student | Career-Focused Learner | Building with Intention 
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </main>
    </div>
  );
}