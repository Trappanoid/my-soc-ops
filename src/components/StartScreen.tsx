interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6" style={{ background: 'var(--gradient-chrome-subtle)', minHeight: '100vh' }}>
      <div className="text-center max-w-sm">
        <h1 className="text-6xl font-black text-platinum mb-1 tracking-wider" style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.7)', letterSpacing: '0.05em' }}>SOC OPS</h1>
        <p className="text-xl text-accent mb-12 font-bold tracking-widest uppercase">SOCIAL BINGO</p>
        
        <div 
          className="rounded-sm p-8 mb-8 border border-chrome-accent"
          style={{ 
            background: 'var(--gradient-chrome)',
            boxShadow: 'var(--shadow-inset-light), var(--shadow-inset-dark), 0 4px 12px rgba(0, 0, 0, 0.6)'
          }}
        >
          <h2 className="font-bold text-platinum mb-4 text-lg tracking-wider">HOW TO PLAY</h2>
          <ul className="text-left text-silver text-sm space-y-2 font-medium">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent hover:bg-accent-light active:bg-accent-glow text-chrome-dark font-black py-4 px-8 rounded-sm text-lg tracking-wide uppercase transition-all duration-200 transform hover:scale-105 active:scale-95"
          style={{
            boxShadow: 'var(--shadow-glow-cyan), inset 0 2px 0 rgba(232, 232, 232, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.3)'
          }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
