import { Separator } from '@/components/ui/separator';
import { Code2, Github, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  Event: ['About', 'Timeline', 'Challenges', 'Leaderboard'],
  Resources: ['Documentation', 'API Reference', 'Blog', 'Tutorials'],
  Community: ['Discord', 'GitHub', 'Twitter/X', 'Forum'],
  Legal: ['Terms', 'Privacy', 'Code of Conduct', 'Contact'],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-bold text-sm" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="text-foreground">NY</span>
                <span className="gradient-text">KICKOFF</span>
              </span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              A global coding event to start your year with passion, skill, and community.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={16} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-sm font-semibold text-foreground mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-white/5 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60">
            © 2026 New Year Coding Kick Off. Built with ❤️ and too much caffeine.
          </p>
          <p className="text-xs text-muted-foreground/40">Made by developers, for developers.</p>
        </div>
      </div>
    </footer>
  );
}
