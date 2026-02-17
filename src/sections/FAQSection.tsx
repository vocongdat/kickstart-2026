import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Do I need prior coding experience?',
    a: 'While some familiarity with JavaScript is helpful, Week 1 starts from the fundamentals. We have tracks for beginners, intermediate, and advanced developers — everyone grows.',
  },
  {
    q: 'How much time commitment is needed?',
    a: "Challenges are designed to take 30-60 minutes daily, but you can spend more if you're in the zone. Weekend challenges are larger and may take 2-3 hours. It's self-paced — do what works for you.",
  },
  {
    q: 'What technologies will be covered?',
    a: "The primary focus is on React, TypeScript, and modern web development. Week 3 introduces AI integration with OpenAI/Anthropic APIs. You'll also touch on Next.js, testing, and deployment.",
  },
  {
    q: "Can I participate if I'm in a different timezone?",
    a: 'Absolutely! Challenges are released at midnight UTC and you have 24 hours to submit. Live workshops are recorded and available on-demand. Our community spans 50+ countries.',
  },
  {
    q: 'What happens if I miss a day?',
    a: "No worries! While streaks earn bonus points, you won't be penalized for missing days. All challenges remain available throughout the event, and you can catch up at your own pace.",
  },
  {
    q: 'How do squads and teams work?',
    a: 'You can form a squad with friends or get auto-matched with developers at your level. Squads of 3-5 people tackle special team challenges, do code reviews together, and climb the team leaderboard.',
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full glass rounded-xl p-5 text-left transition-all duration-300 hover:border-white/10 border border-white/5 group cursor-pointer"
      >
        <div className="flex items-center justify-between gap-4">
          <h3
            className="font-semibold text-foreground text-sm sm:text-base"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {q}
          </h3>
          <ChevronDown
            size={18}
            className={`text-muted-foreground shrink-0 transition-transform duration-300 ${
              open ? 'rotate-180' : ''
            }`}
          />
        </div>
        <motion.div
          initial={false}
          animate={{
            height: open ? 'auto' : 0,
            opacity: open ? 1 : 0,
            marginTop: open ? 12 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
        </motion.div>
      </button>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="relative py-24 sm:py-32 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 text-orange-400 border-orange-400/30 px-4 py-1">
            Got Questions?
          </Badge>
          <h2
            className="text-3xl sm:text-5xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-foreground">Frequently </span>
            <span className="gradient-text-warm">Asked</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
