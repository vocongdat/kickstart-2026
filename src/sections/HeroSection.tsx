import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from '@/components/CountdownTimer';
import { CodeTypingAnimation } from '@/components/CodeTypingAnimation';
import { Rocket, ArrowDown, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-16 overflow-hidden"
    >
      {/* Radial glow behind hero */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(800px,100vw)] h-[min(800px,100vw)] rounded-full bg-gradient-to-br from-purple-600/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[min(600px,80vw)] h-[min(600px,80vw)] rounded-full bg-gradient-to-tl from-cyan-500/8 via-green-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Event badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <div className="glass gradient-border rounded-full px-5 py-2 flex items-center gap-2">
          <Sparkles size={14} className="text-purple-400" />
          <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            March 1 – March 31, 2026
          </span>
          <Sparkles size={14} className="text-cyan-400" />
        </div>
      </motion.div>

      {/* Main heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center max-w-4xl mx-auto mb-6"
      >
        <h1
          className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[0.9]"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          <span className="block text-foreground">NEW YEAR</span>
          <span className="block gradient-text mt-2">CODING</span>
          <span className="block gradient-text-warm mt-2">KICK OFF</span>
        </h1>
      </motion.div>

      {/* Year */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mb-8"
      >
        <span
          className="text-6xl sm:text-8xl md:text-9xl font-black text-white/5 tracking-widest"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          2026
        </span>
      </motion.div>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl text-center mb-10 leading-relaxed px-2"
      >
        30 days. New challenges daily. Level up your skills in{' '}
        <span className="text-purple-400 font-semibold">React</span>,{' '}
        <span className="text-cyan-400 font-semibold">TypeScript</span>,{' '}
        <span className="text-green-400 font-semibold">AI Integration</span>, and more. Join
        developers worldwide in the ultimate coding marathon.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="flex flex-col sm:flex-row items-center gap-4 mb-16"
      >
        <Button
          size="lg"
          className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105 cursor-pointer"
        >
          <Rocket className="mr-2" size={20} />
          Register Now — It's Free
          <div className="absolute inset-0 shimmer" />
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="glass border-white/10 hover:border-white/20 text-foreground font-semibold text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Learn More
          <ArrowDown className="ml-2" size={18} />
        </Button>
      </motion.div>

      {/* Countdown */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mb-12"
      >
        <p className="text-center text-sm text-muted-foreground mb-4 uppercase tracking-[0.2em]">
          Starts in
        </p>
        <CountdownTimer />
      </motion.div>

      {/* Code animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="w-full flex justify-center px-2"
      >
        <CodeTypingAnimation />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown size={20} className="text-muted-foreground/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
