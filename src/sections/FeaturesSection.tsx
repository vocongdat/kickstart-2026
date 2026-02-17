import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Brain, Users, Trophy, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Daily Challenges',
    description:
      'Fresh coding challenges every day, from algorithms to full-stack apps. Difficulty scales from beginner to advanced.',
    badge: 'Core',
    color: 'from-purple-500 to-purple-700',
    glowColor: 'shadow-purple-500/20',
    iconColor: 'text-purple-400',
  },
  {
    icon: Brain,
    title: 'AI-Powered Learning',
    description:
      'Integrate AI APIs, build intelligent features, and explore prompt engineering with hands-on projects.',
    badge: 'Trending',
    color: 'from-cyan-500 to-cyan-700',
    glowColor: 'shadow-cyan-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      "Form squads, review each other's code, and tackle group challenges. Build connections that last.",
    badge: 'Social',
    color: 'from-green-500 to-green-700',
    glowColor: 'shadow-green-500/20',
    iconColor: 'text-green-400',
  },
  {
    icon: Trophy,
    title: 'Leaderboard & Prizes',
    description:
      'Compete on the global leaderboard. Top performers win exclusive swag, mentorship sessions, and more.',
    badge: 'Rewards',
    color: 'from-orange-500 to-orange-700',
    glowColor: 'shadow-orange-500/20',
    iconColor: 'text-orange-400',
  },
  {
    icon: Zap,
    title: 'Live Workshops',
    description:
      'Weekly live sessions with industry experts covering React 19, TypeScript best practices, and system design.',
    badge: 'Live',
    color: 'from-yellow-500 to-yellow-700',
    glowColor: 'shadow-yellow-500/20',
    iconColor: 'text-yellow-400',
  },
  {
    icon: Globe,
    title: 'Open Source Impact',
    description:
      'Contribute to real open source projects. Your kickoff project becomes your portfolio piece.',
    badge: 'Impact',
    color: 'from-pink-500 to-pink-700',
    glowColor: 'shadow-pink-500/20',
    iconColor: 'text-pink-400',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export function FeaturesSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4">
      {/* Background accent */}
      <div className="absolute top-0 left-1/4 w-[min(500px,80vw)] h-[min(500px,80vw)] rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[min(500px,80vw)] h-[min(500px,80vw)] rounded-full bg-cyan-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-purple-400 border-purple-400/30 px-4 py-1">
            What Awaits You
          </Badge>
          <h2
            className="text-3xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-foreground">More Than Just </span>
            <span className="gradient-text">Coding</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A month-long journey designed to transform your skills, build your network, and ignite
            your passion for creating amazing software.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={cardVariants}>
              <Card
                className={`group relative glass border-white/5 hover:border-white/10 p-6 h-full transition-all duration-500 hover:-translate-y-1 hover:${feature.glowColor} hover:shadow-lg cursor-default`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} p-0.5 mb-5`}
                >
                  <div className="w-full h-full rounded-[10px] bg-background/80 flex items-center justify-center">
                    <feature.icon size={22} className={feature.iconColor} />
                  </div>
                </div>

                {/* Badge */}
                <Badge
                  variant="secondary"
                  className="mb-3 text-xs bg-white/5 text-muted-foreground border-0"
                >
                  {feature.badge}
                </Badge>

                {/* Content */}
                <h3
                  className="text-xl font-bold mb-2 text-foreground group-hover:gradient-text transition-all duration-300"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/[0.02] to-transparent" />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
