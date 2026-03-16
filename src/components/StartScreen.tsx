import { questions, FREE_SPACE } from '../data/questions';

interface StartScreenProps {
  onStart: () => void;
}

const previewItems: string[] = [
  ...questions.slice(0, 12),
  FREE_SPACE,
  ...questions.slice(12, 24),
];

// Staggered glow-pulse timing for preview squares
const GLOW_BASE_DURATION = 1.5;
const GLOW_MODULO = 7;
const GLOW_INCREMENT = 0.2;

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'var(--gradient-chrome-subtle)' }}
    >
      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(0,217,255,0.04) 39px,rgba(0,217,255,0.04) 40px),' +
            'repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(0,217,255,0.04) 39px,rgba(0,217,255,0.04) 40px)',
        }}
      />

      {/* Radial depth glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(0,217,255,0.10) 0%, transparent 70%),' +
            'radial-gradient(ellipse 60% 30% at 50% 100%, rgba(0,217,255,0.05) 0%, transparent 60%)',
        }}
      />

      {/* Floating diamond shapes */}
      <div className="absolute top-16 left-6 w-14 h-14 border border-accent/20 rotate-45 animate-float pointer-events-none" />
      <div className="absolute top-32 right-10 w-8 h-8 border border-accent/15 rotate-45 animate-float pointer-events-none" style={{ animationDelay: '1.2s' }} />
      <div className="absolute bottom-48 left-12 w-10 h-10 border border-accent/10 rotate-45 animate-float pointer-events-none" style={{ animationDelay: '2.1s' }} />
      <div className="absolute bottom-28 right-6 w-16 h-16 border border-accent/10 rotate-45 animate-float pointer-events-none" style={{ animationDelay: '0.7s' }} />
      <div className="absolute top-1/2 left-4 w-5 h-5 bg-accent/5 rotate-45 animate-float pointer-events-none" style={{ animationDelay: '1.8s' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-10">

        {/* ── Hero ── */}
        <div className="text-center w-full max-w-lg mb-6 animate-fade-in-up">
          {/* Top chrome bar */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-px flex-1 max-w-20" style={{ background: 'linear-gradient(90deg, transparent, var(--color-accent))' }} />
            <span className="text-accent text-xs tracking-[0.35em] font-bold uppercase">Social</span>
            <div className="h-px flex-1 max-w-20" style={{ background: 'linear-gradient(90deg, var(--color-accent), transparent)' }} />
          </div>

          {/* Main title with metallic shine */}
          <h1
            className="text-8xl font-black tracking-[0.08em] uppercase leading-none animate-metallic-shine"
            style={{
              background: 'linear-gradient(90deg, #b0b8c8, #ffffff, #e8e8e8, #ffffff, #909aaa, #d0d8e8, #ffffff)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            SOC OPS
          </h1>

          {/* Tagline with text glow */}
          <p className="text-accent text-base tracking-[0.45em] uppercase font-bold mt-2 animate-glow-pulse-text">
            BINGO
          </p>

          {/* Bottom chrome bar with dots */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="h-px flex-1 max-w-20" style={{ background: 'linear-gradient(90deg, transparent, var(--color-accent))' }} />
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-accent rounded-full animate-glow-pulse"
                style={{ animationDelay: `${i * 0.25}s` }}
              />
            ))}
            <div className="h-px flex-1 max-w-20" style={{ background: 'linear-gradient(90deg, var(--color-accent), transparent)' }} />
          </div>
        </div>

        {/* ── 5×5 Bingo Board Preview ── */}
        <div
          className="w-full max-w-sm mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <p className="text-chrome-accent text-xs tracking-[0.3em] uppercase text-center mb-2 font-bold">Preview Board</p>
          <div
            className="rounded-xs border border-chrome-accent p-1.5"
            style={{
              background: 'var(--gradient-chrome)',
              boxShadow: 'var(--shadow-inset-light), 0 4px 20px rgba(0,0,0,0.5)',
            }}
          >
            <div className="grid grid-cols-5 gap-1">
              {previewItems.map((text, i) => {
                const isFree = text === FREE_SPACE;
                return (
                  <div
                    key={i}
                    className="preview-square relative flex items-center justify-center p-1 text-center border rounded-xs overflow-hidden cursor-default"
                    style={{
                      minHeight: '48px',
                      background: isFree
                        ? 'linear-gradient(135deg, rgba(0,217,255,0.25), rgba(0,168,204,0.15))'
                        : 'linear-gradient(180deg, #2d3142 0%, #1a1f2e 100%)',
                      borderColor: isFree ? 'var(--color-accent)' : 'var(--color-chrome-accent)',
                      boxShadow: isFree ? 'var(--shadow-glow-cyan)' : 'var(--shadow-inset-light)',
                      animation: `glow-pulse ${GLOW_BASE_DURATION + (i % GLOW_MODULO) * GLOW_INCREMENT}s ease-in-out infinite`,
                      animationDelay: `${i * 0.07}s`,
                    }}
                  >
                    <span
                      className={`font-bold uppercase leading-tight ${isFree ? 'text-accent' : 'text-platinum'}`}
                      style={{ fontSize: '9px', wordBreak: 'break-word', hyphens: 'auto' }}
                    >
                      {text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── How to Play ── */}
        <div className="w-full max-w-sm mb-8">
          <p className="text-chrome-accent text-xs tracking-[0.3em] uppercase text-center mb-3 font-bold">How to Play</p>
          <div className="space-y-2">
            {[
              { num: '01', text: 'Find people who match the questions on each square' },
              { num: '02', text: 'Tap a square when you find someone who matches' },
              { num: '03', text: 'Get 5 in a row — horizontally, vertically, or diagonally!' },
            ].map((step, i) => (
              <div
                key={i}
                className="flex items-center gap-4 rounded-xs border border-chrome-accent p-4 animate-slide-in-left hover:scale-[1.02] transition-transform duration-200 cursor-default"
                style={{
                  background: 'var(--gradient-chrome)',
                  boxShadow: 'var(--shadow-inset-light), var(--shadow-inset-dark)',
                  animationDelay: `${0.4 + i * 0.12}s`,
                }}
              >
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-xs shrink-0 font-black text-accent text-sm border border-accent/40"
                  style={{
                    background: 'rgba(0,217,255,0.08)',
                    boxShadow: '0 0 8px rgba(0,217,255,0.2)',
                  }}
                >
                  {step.num}
                </div>
                <p className="text-silver text-sm font-medium leading-snug">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          className="w-full max-w-sm animate-fade-in-up"
          style={{ animationDelay: '0.7s' }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-accent/40 font-mono text-xl select-none">[[</span>
            <span className="text-chrome-accent text-xs tracking-[0.3em] uppercase">Ready to play?</span>
            <span className="text-accent/40 font-mono text-xl select-none">]]</span>
          </div>

          <button
            onClick={onStart}
            className="start-btn w-full relative overflow-hidden bg-accent hover:bg-accent-light active:bg-accent-glow text-chrome-dark font-black py-5 px-8 rounded-xs text-xl tracking-[0.18em] uppercase transition-colors duration-150 active:scale-95 animate-glow-pulse"
            style={{
              boxShadow: 'var(--shadow-glow-cyan-strong), inset 0 2px 0 rgba(232,232,232,0.3), inset 0 -2px 4px rgba(0,0,0,0.3)',
            }}
          >
            START GAME
          </button>

          <p className="text-chrome-accent text-xs text-center mt-3 tracking-wider uppercase">
            Free Space auto-marked · 5 in a row wins
          </p>
        </div>

      </div>
    </div>
  );
}
