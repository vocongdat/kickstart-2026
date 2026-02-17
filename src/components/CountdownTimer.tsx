import { useState, useEffect } from 'react';

interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeRemaining(targetDate: Date): CountdownValues {
  const now = new Date().getTime();
  const target = targetDate.getTime();
  const diff = Math.max(0, target - now);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="glass glow-purple rounded-2xl w-16 h-20 sm:w-28 sm:h-32 flex items-center justify-center">
          <span
            className="text-2xl sm:text-5xl font-bold gradient-text"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            {String(value).padStart(2, '0')}
          </span>
        </div>
        {/* Top shine effect */}
        <div className="absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
      <span className="text-[10px] sm:text-sm text-muted-foreground mt-2 sm:mt-3 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium">
        {label}
      </span>
    </div>
  );
}

export function CountdownTimer() {
  // Target: March 1, 2026 — start of the coding kickoff
  const targetDate = new Date('2026-03-01T00:00:00');
  const [time, setTime] = useState<CountdownValues>(getTimeRemaining(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-1.5 sm:gap-5">
      <CountdownUnit value={time.days} label="Days" />
      <span className="text-2xl sm:text-5xl font-bold text-muted-foreground/50 mt-[-20px] sm:mt-[-28px]">
        :
      </span>
      <CountdownUnit value={time.hours} label="Hours" />
      <span className="text-2xl sm:text-5xl font-bold text-muted-foreground/50 mt-[-20px] sm:mt-[-28px]">
        :
      </span>
      <CountdownUnit value={time.minutes} label="Minutes" />
      <span className="text-2xl sm:text-5xl font-bold text-muted-foreground/50 mt-[-20px] sm:mt-[-28px]">
        :
      </span>
      <CountdownUnit value={time.seconds} label="Seconds" />
    </div>
  );
}
