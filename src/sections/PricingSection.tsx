import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Check, Crown, Gem, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tiers = [
  {
    name: 'Explorer',
    price: 'Free',
    description: 'Perfect for getting started',
    icon: Sparkles,
    color: 'text-zinc-400',
    borderColor: 'border-white/5',
    features: [
      'Access to daily challenges',
      'Community Discord access',
      'Public leaderboard',
      'Challenge solutions (after deadline)',
      'Certificate of participation',
    ],
    cta: 'Join Free',
    ctaStyle: 'bg-white/5 hover:bg-white/10 text-foreground border border-white/10',
    popular: false,
  },
  {
    name: 'Challenger',
    price: '$29',
    description: 'For serious learners',
    icon: Gem,
    color: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    features: [
      'Everything in Explorer',
      'Weekly live workshops',
      'Code review from mentors',
      'Exclusive challenge tracks',
      'Squad matchmaking',
      'Premium badge & profile',
    ],
    cta: 'Go Challenger',
    ctaStyle:
      'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white shadow-lg shadow-purple-500/20',
    popular: true,
  },
  {
    name: 'Legend',
    price: '$79',
    description: 'The ultimate experience',
    icon: Crown,
    color: 'text-yellow-400',
    borderColor: 'border-yellow-500/20',
    features: [
      'Everything in Challenger',
      '1-on-1 mentorship sessions',
      'Priority code reviews',
      'Early access to challenges',
      'Exclusive networking events',
      'Career coaching session',
      'Physical swag kit shipped',
    ],
    cta: 'Become Legend',
    ctaStyle:
      'bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 text-white shadow-lg shadow-yellow-500/20',
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 px-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(800px,100vw)] h-[min(800px,100vw)] rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 text-yellow-400 border-yellow-400/30 px-4 py-1">
            <Crown size={14} className="mr-1.5" />
            Choose Your Path
          </Badge>
          <h2
            className="text-3xl sm:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span className="text-foreground">Pick Your </span>
            <span className="gradient-text-warm">Level</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Everyone can participate for free. Unlock premium features for an elevated experience.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={tier.popular ? 'md:-mt-4 md:mb-[-16px]' : ''}
            >
              <Card
                className={`relative glass ${tier.borderColor} p-6 sm:p-8 h-full transition-all duration-300 hover:-translate-y-1 ${
                  tier.popular ? 'ring-1 ring-purple-500/30' : ''
                }`}
              >
                {/* Popular badge */}
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-0 px-4">
                      Most Popular
                    </Badge>
                  </div>
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <tier.icon size={28} className={`${tier.color} mx-auto mb-3`} />
                  <h3
                    className={`text-xl font-bold ${tier.color}`}
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {tier.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">{tier.description}</p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <span
                    className="text-4xl sm:text-5xl font-black text-foreground"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {tier.price}
                  </span>
                  {tier.price !== 'Free' && (
                    <span className="text-muted-foreground ml-1">/event</span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check size={16} className={`${tier.color} mt-0.5 shrink-0`} />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className={`w-full font-bold py-5 rounded-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer ${tier.ctaStyle}`}
                >
                  {tier.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
