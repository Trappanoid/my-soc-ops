interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-8 py-20"
      style={{ background: 'var(--gradient-chrome-subtle)' }}
    >
      {/* Hero */}
      <div className="text-center mb-20 animate-fade-in">
        <h1
          className="text-8xl font-black text-platinum"
          style={{ letterSpacing: '0.1em' }}
        >
          SOC OPS
        </h1>
        <p className="text-sm text-chrome-accent tracking-widest uppercase mt-5 animate-fade-in-d1">
          Security team social bingo
        </p>
      </div>

      {/* How to Play */}
      <div className="mb-20 animate-fade-in-d2">
        <p className="text-xs text-chrome-accent tracking-widest uppercase mb-8 text-center">
          How to Play
        </p>
        <ol className="text-silver text-sm space-y-5 leading-loose max-w-xs">
          <li className="flex gap-5">
            <span className="text-chrome-accent font-bold shrink-0">1</span>
            <span>Find people who match the questions on your card</span>
          </li>
          <li className="flex gap-5">
            <span className="text-chrome-accent font-bold shrink-0">2</span>
            <span>Tap a square when you find a match</span>
          </li>
          <li className="flex gap-5">
            <span className="text-chrome-accent font-bold shrink-0">3</span>
            <span>Get 5 in a row to win!</span>
          </li>
        </ol>
      </div>

      {/* CTA */}
      <div className="animate-fade-in-d3">
        <button
          onClick={onStart}
          className={[
            'bg-accent hover:bg-accent-light active:bg-accent-glow',
            'text-chrome-dark font-black py-6 px-12 text-sm',
            'tracking-widest uppercase',
            'transition-transform duration-200 hover:scale-105 active:scale-95',
          ].join(' ')}
          style={{ boxShadow: 'var(--shadow-glow-cyan)' }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
