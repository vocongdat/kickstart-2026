import { useState, useEffect, useRef } from 'react';

const codeLines = [
  { text: 'const', type: 'keyword' },
  { text: ' kickoff', type: 'variable' },
  { text: ' = ', type: 'plain' },
  { text: 'new', type: 'keyword' },
  { text: ' CodingChallenge', type: 'class' },
  { text: '({', type: 'plain' },
  { text: '\n  year', type: 'property' },
  { text: ': ', type: 'plain' },
  { text: '2026', type: 'number' },
  { text: ',', type: 'plain' },
  { text: '\n  theme', type: 'property' },
  { text: ': ', type: 'plain' },
  { text: '"Level Up"', type: 'string' },
  { text: ',', type: 'plain' },
  { text: '\n  skills', type: 'property' },
  { text: ': [', type: 'plain' },
  { text: '"React"', type: 'string' },
  { text: ', ', type: 'plain' },
  { text: '"TypeScript"', type: 'string' },
  { text: ', ', type: 'plain' },
  { text: '"AI"', type: 'string' },
  { text: '],', type: 'plain' },
  { text: '\n  passion', type: 'property' },
  { text: ': ', type: 'plain' },
  { text: 'Infinity', type: 'number' },
  { text: ',', type: 'plain' },
  { text: '\n});', type: 'plain' },
  { text: '\n\nawait', type: 'keyword' },
  { text: ' kickoff', type: 'variable' },
  { text: '.', type: 'plain' },
  { text: 'start', type: 'function' },
  { text: '();', type: 'plain' },
  { text: ' ', type: 'plain' },
  { text: "// 🚀 Let's go!", type: 'comment' },
];

const typeColors: Record<string, string> = {
  keyword: 'text-purple-400',
  variable: 'text-cyan-300',
  class: 'text-yellow-300',
  property: 'text-blue-300',
  number: 'text-orange-300',
  string: 'text-green-300',
  function: 'text-yellow-200',
  comment: 'text-zinc-500 italic',
  plain: 'text-zinc-300',
};

export function CodeTypingAnimation() {
  const [displayedTokens, setDisplayedTokens] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (displayedTokens < codeLines.length) {
      const delay = Math.random() * 80 + 40;
      const timer = setTimeout(() => {
        setDisplayedTokens((prev) => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [displayedTokens]);

  // Restart animation on loop
  useEffect(() => {
    if (isComplete) {
      const timer = setTimeout(() => {
        setDisplayedTokens(0);
        setIsComplete(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isComplete]);

  return (
    <div ref={containerRef} className="glass rounded-xl overflow-hidden max-w-xl w-full">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs text-zinc-500" style={{ fontFamily: 'var(--font-mono)' }}>
          kickoff.ts
        </span>
      </div>

      {/* Code content */}
      <div
        className="p-3 sm:p-5 min-h-[180px] sm:min-h-[200px]"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(11px, 2.5vw, 14px)',
          lineHeight: '1.8',
        }}
      >
        <div className="flex items-start">
          <span className="text-zinc-600 select-none w-8 text-right mr-4 text-xs mt-0.5">1</span>
          <div className="flex-1">
            {codeLines.slice(0, displayedTokens).map((token, idx) => {
              if (token.text.startsWith('\n')) {
                const lineNum = token.text.split('\n').length;
                const currentLineNumber = codeLines
                  .slice(0, idx + 1)
                  .reduce((acc, t) => acc + (t.text.match(/\n/g) || []).length, 1);
                return (
                  <span key={idx}>
                    {token.text.split('\n').map((part, partIdx) => (
                      <span key={partIdx}>
                        {partIdx > 0 && (
                          <>
                            <br />
                            <span className="text-zinc-600 select-none inline-block w-8 text-right mr-4 text-xs">
                              {currentLineNumber - lineNum + partIdx + 1}
                            </span>
                          </>
                        )}
                        <span className={typeColors[token.type]}>{part}</span>
                      </span>
                    ))}
                  </span>
                );
              }
              return (
                <span key={idx} className={typeColors[token.type]}>
                  {token.text}
                </span>
              );
            })}
            {!isComplete && (
              <span className="inline-block w-2 h-4 bg-cyan-400 ml-0.5 animate-pulse" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
