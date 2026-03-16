import { useState } from 'react';
import { questions } from '../data/questions';

interface StartScreenProps {
  onStart: () => void;
}

const PREVIEW_QUESTIONS = questions.slice(0, 9);

export function StartScreen({ onStart }: StartScreenProps) {
  const [markedSquares, setMarkedSquares] = useState<Set<number>>(new Set());

  const toggleSquare = (i: number) => {
    setMarkedSquares((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div
      className="relative flex flex-col items-center min-h-screen overflow-x-hidden"
      style={{ background: 'var(--gradient-chrome-subtle)' }}
    >
      {/* Geometric grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Hero */}
      <div className="relative z-10 flex flex-col items-center pt-12 pb-4 text-center animate-fade-in-0">
        <h1 className="text-7xl font-black shine-title" style={{ letterSpacing: '0.06em' }}>
          SOC OPS
        </h1>
        <p className="text-accent font-bold tracking-widest uppercase text-xs mt-2">Social Bingo</p>
        <p className="text-silver text-sm mt-3 font-mono">Break the ice. Make connections.</p>
      </div>

      {/* Interactive Preview Board */}
      <div className="relative z-10 flex flex-col items-center mt-6 animate-fade-in-1">
        <p className="text-chrome-accent text-xs uppercase tracking-widest mb-3 font-bold">
          Tap to mark squares
        </p>
        <div
          className="grid grid-cols-3 gap-1.5 p-3 rounded-sm border border-chrome-accent animate-glow-pulse"
          style={{
            background: 'var(--gradient-chrome)',
            boxShadow: 'var(--shadow-inset-light), var(--shadow-inset-dark)',
          }}
        >
          {PREVIEW_QUESTIONS.map((q, i) => {
            const isMarked = markedSquares.has(i);
            return (
              <button
                key={i}
                onClick={() => toggleSquare(i)}
                aria-pressed={isMarked}
                className={[
                  'relative flex items-center justify-center p-1.5 text-center border rounded-xs',
                  'transition-all duration-150 select-none w-[78px] h-[58px]',
                  'text-xxs leading-tight font-bold font-mono uppercase',
                  isMarked
                    ? 'bg-accent border-accent text-chrome-dark scale-[1.04]'
                    : 'bg-chrome-medium border-chrome-accent text-platinum hover:bg-chrome-light',
                ].join(' ')}
                style={
                  isMarked
                    ? { boxShadow: 'var(--shadow-glow-cyan)' }
                    : { boxShadow: 'var(--shadow-inset-light), var(--shadow-inset-dark)' }
                }
              >
                <span className="line-clamp-3">{q}</span>
                {isMarked && (
                  <span className="absolute top-0.5 right-0.5 text-platinum text-xs font-black leading-none">
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* How to Play */}
      <div className="relative z-10 w-full max-w-sm px-4 mt-8 animate-fade-in-2">
        <h2 className="text-platinum font-bold text-xs tracking-widest uppercase mb-4 text-center">
          How to Play
        </h2>
        <div className="flex flex-col gap-3">
          {[
            { n: '1', text: 'Tap squares to mark people you meet who match the prompt' },
            { n: '2', text: 'Chat, connect, and discover what you have in common' },
            { n: '3', text: 'Get 5 in a row — across, down, or diagonal — to win!' },
          ].map(({ n, text }) => (
            <div
              key={n}
              className="flex items-start gap-3 p-3 rounded-sm border border-chrome-accent hover:border-accent transition-all duration-200 hover:scale-[1.01]"
              style={{
                background: 'var(--gradient-chrome)',
                boxShadow: 'var(--shadow-inset-light), var(--shadow-inset-dark)',
              }}
            >
              <span className="text-accent font-black text-xl w-5 shrink-0 leading-none">{n}</span>
              <span className="text-silver text-xs font-mono leading-tight">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 w-full max-w-sm px-4 mt-8 pb-12 animate-fade-in-3">
        <button
          onClick={onStart}
          className="relative w-full overflow-hidden bg-accent hover:bg-accent-light active:bg-accent-glow text-chrome-dark font-black py-4 px-8 rounded-sm text-lg tracking-wide uppercase transition-all duration-200 hover:scale-105 active:scale-95"
          style={{
            boxShadow:
              'var(--shadow-glow-cyan), inset 0 2px 0 rgba(232, 232, 232, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.3)',
          }}
        >
          <span className="relative z-10">Play 5×5 Bingo</span>
          <span className="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
        </button>
        {markedSquares.size > 0 && (
          <p className="text-chrome-accent text-xs text-center mt-2 font-mono">
            You&apos;ve tried it — ready for the full 5×5?
          </p>
        )}
      </div>
    </div>
  );
}

