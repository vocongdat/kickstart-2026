import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket, ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section id="cta" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-background to-cyan-900/40" />
          <div className="absolute inset-0 grid-pattern opacity-30" />

          {/* Glow effects */}
          <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-purple-600/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-cyan-600/20 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 text-center px-6 sm:px-12 py-16 sm:py-20">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', duration: 0.8, delay: 0.2 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center mx-auto mb-8"
            >
              <Rocket size={28} className="text-white" />
            </motion.div>

            <h2
              className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span className="text-foreground">Ready to </span>
              <span className="gradient-text">Level Up?</span>
            </h2>

            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Join thousands of developers who are starting 2026 with momentum. Your future self
              will thank you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold text-lg px-10 py-7 rounded-xl shadow-lg shadow-purple-500/25 transition-all duration-300 hover:shadow-purple-500/40 hover:scale-105 cursor-pointer"
              >
                <Rocket className="mr-2" size={20} />
                Claim Your Spot
                <div className="absolute inset-0 shimmer" />
              </Button>
              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-foreground font-medium cursor-pointer"
                onClick={() =>
                  document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                View Full Schedule
                <ArrowRight className="ml-1.5" size={16} />
              </Button>
            </div>

            <p className="text-xs text-muted-foreground/60 mt-6">
              No credit card required for free tier. Start coding instantly.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
