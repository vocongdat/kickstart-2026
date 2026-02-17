import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  color: string;
}

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * value);
      setDisplay(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

function StatItem({ value, suffix, label, color }: StatItemProps) {
  return (
    <div className="text-center">
      <div
        className={`text-3xl sm:text-5xl md:text-6xl font-black mb-2 ${color}`}
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        <AnimatedNumber value={value} suffix={suffix} />
      </div>
      <p className="text-sm sm:text-base text-muted-foreground">{label}</p>
    </div>
  );
}

const stats = [
  { value: 5000, suffix: '+', label: 'Developers Registered', color: 'gradient-text' },
  { value: 30, suffix: '', label: 'Days of Challenges', color: 'gradient-text-warm' },
  { value: 120, suffix: '+', label: 'Coding Challenges', color: 'gradient-text' },
  { value: 50, suffix: '+', label: 'Countries Represented', color: 'gradient-text-warm' },
];

const testimonials = [
  {
    quote:
      "Last year's kickoff completely changed my career trajectory. I went from struggling with React to landing a senior role.",
    author: 'Sarah Chen',
    role: 'Senior Frontend Engineer @ Stripe',
    avatar: '👩‍💻',
  },
  {
    quote:
      'The community is incredible. I made connections that turned into collaboration opportunities and open source contributions.',
    author: 'Marcus Johnson',
    role: 'Full-Stack Developer @ Vercel',
    avatar: '👨‍💻',
  },
  {
    quote:
      "Best structured learning experience I've had. The weekly progression from basics to AI integration was perfectly paced.",
    author: 'Yuki Tanaka',
    role: 'Tech Lead @ Shopify',
    avatar: '🧑‍💻',
  },
];

export function StatsSection() {
  return (
    <section id="stats" className="relative py-24 sm:py-32 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-8 sm:p-12 mb-24 gradient-border"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 relative z-10">
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 text-green-400 border-green-400/30 px-4 py-1">
            Community Voices
          </Badge>
          <h2
            className="text-3xl sm:text-5xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-foreground">Hear From </span>
            <span className="gradient-text">Alumni</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="glass rounded-xl p-6 h-full hover:border-white/10 transition-all duration-300 border border-white/5">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">
                      ★
                    </span>
                  ))}
                </div>

                <blockquote className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-3">
                  <span className="text-2xl">{testimonial.avatar}</span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
