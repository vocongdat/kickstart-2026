import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Calendar, Star, Flame } from 'lucide-react';

const timelineWeeks = [
  {
    week: 'Week 1',
    dates: 'Mar 1 – Mar 7',
    title: 'Foundation & Setup',
    description:
      'Set up your dev environment, join your squad, and tackle warm-up challenges covering modern JavaScript, TypeScript fundamentals, and React basics.',
    challenges: ['TypeScript Kata', 'React Component Library', 'API Design Basics'],
    color: 'from-purple-500 to-blue-500',
    dotColor: 'bg-purple-500',
    icon: Star,
    difficulty: 'Beginner',
  },
  {
    week: 'Week 2',
    dates: 'Mar 8 – Mar 14',
    title: 'Deep Dive & Architecture',
    description:
      'Explore advanced patterns: state management, custom hooks, server components, and full-stack architecture with Next.js.',
    challenges: ['State Machine Builder', 'Custom Hook Library', 'Full-Stack Dashboard'],
    color: 'from-cyan-500 to-green-500',
    dotColor: 'bg-cyan-500',
    icon: Flame,
    difficulty: 'Intermediate',
  },
  {
    week: 'Week 3',
    dates: 'Mar 15 – Mar 21',
    title: 'AI & Innovation',
    description:
      'Integrate AI into your applications. Build intelligent features using LLMs, explore RAG patterns, and create AI-powered tools.',
    challenges: ['AI Chat Interface', 'RAG Document Search', 'Smart Code Reviewer'],
    color: 'from-orange-500 to-pink-500',
    dotColor: 'bg-orange-500',
    icon: Flame,
    difficulty: 'Advanced',
  },
  {
    week: 'Week 4',
    dates: 'Mar 22 – Mar 31',
    title: 'Capstone & Showcase',
    description:
      "Build your capstone project combining everything you've learned. Present to the community, get feedback, and celebrate your growth.",
    challenges: ['Capstone Project', 'Code Review Exchange', 'Demo Day Presentation'],
    color: 'from-yellow-500 to-orange-500',
    dotColor: 'bg-yellow-500',
    icon: Star,
    difficulty: 'All Levels',
  },
];

export function TimelineSection() {
  return (
    <section id="timeline" className="relative py-24 sm:py-32 px-4">
      <div className="absolute top-1/3 right-0 w-[min(600px,80vw)] h-[min(600px,80vw)] rounded-full bg-orange-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-cyan-400 border-cyan-400/30 px-4 py-1">
            <Calendar size={14} className="mr-1.5" />
            The Journey
          </Badge>
          <h2
            className="text-3xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-foreground">4 Weeks of </span>
            <span className="gradient-text">Growth</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Each week builds on the last, taking you from fundamentals to building production-ready
            applications with cutting-edge technologies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-cyan-500/50 to-orange-500/50" />

          <div className="space-y-10">
            {timelineWeeks.map((week, index) => (
              <motion.div
                key={week.week}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-14 sm:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 sm:left-4.5 top-6">
                  <div className={`w-3 h-3 rounded-full ${week.dotColor} ring-4 ring-background`} />
                  <div
                    className={`absolute inset-0 w-3 h-3 rounded-full ${week.dotColor} animate-ping opacity-30`}
                  />
                </div>

                <Card className="glass border-white/5 hover:border-white/10 p-6 transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={`text-sm font-bold bg-gradient-to-r ${week.color} bg-clip-text text-transparent`}
                    >
                      {week.week}
                    </span>
                    <span className="text-xs text-muted-foreground">{week.dates}</span>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-white/5 border-0 text-muted-foreground ml-auto"
                    >
                      {week.difficulty}
                    </Badge>
                  </div>

                  <h3
                    className="text-xl font-bold text-foreground mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {week.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {week.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {week.challenges.map((challenge) => (
                      <Badge
                        key={challenge}
                        variant="outline"
                        className="text-xs border-white/10 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {challenge}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
