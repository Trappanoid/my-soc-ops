interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50" style={{ backdropFilter: 'blur(4px)' }}>
      <div 
        className="rounded-sm p-8 max-w-xs w-full text-center animate-[bounce_0.5s_ease-out]"
        style={{
          background: 'var(--gradient-chrome)',
          boxShadow: 'var(--shadow-glow-cyan-strong), 0 8px 32px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(232, 232, 232, 0.1)',
          border: '2px solid var(--color-accent)'
        }}
      >
        <div className="text-6xl mb-6 animate-pulse">🎉</div>
        <h2 className="text-5xl font-black text-accent mb-3 tracking-wider uppercase" style={{ textShadow: '0 0 20px rgba(0, 217, 255, 0.6)' }}>BINGO!</h2>
        <p className="text-platinum mb-8 font-bold text-lg tracking-wide uppercase">You completed a line!</p>
        
        <button
          onClick={onDismiss}
          className="w-full bg-accent hover:bg-accent-light active:bg-accent-glow text-chrome-dark font-black py-3 px-6 rounded-sm transition-all duration-200 transform hover:scale-105 active:scale-95 uppercase tracking-widest"
          style={{
            boxShadow: 'var(--shadow-glow-cyan), inset 0 2px 0 rgba(232, 232, 232, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.3)'
          }}
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
