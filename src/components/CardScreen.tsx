import { useState } from 'react';
import { questions } from '../data/questions';

interface CardScreenProps {
  onBack: () => void;
}

export function CardScreen({ onBack }: CardScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);

  const drawCard = () => {
    if (isFlipping) return;
    
    setIsFlipping(true);
    setCurrentQuestion(null);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * questions.length);
      setCurrentQuestion(questions[randomIndex]);
      setIsFlipping(false);
    }, 300);
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden flex flex-col"
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

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-8 flex-1">
        {/* Header */}
        <div className="w-full max-w-lg mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-px flex-1 max-w-20" style={{ background: 'linear-gradient(90deg, transparent, var(--color-accent))' }} />
            <span className="text-accent text-xs tracking-[0.35em] font-bold uppercase">Card Deck</span>
            <div className="h-px flex-1 max-w-20" style={{ background: 'linear-gradient(90deg, var(--color-accent), transparent)' }} />
          </div>
          <h1 className="text-4xl font-black tracking-[0.08em] uppercase text-platinum">
            Draw a Question
          </h1>
        </div>

        {/* Card Area - Center */}
        <div className="flex-1 flex items-center justify-center w-full max-w-md mb-8">
          {currentQuestion ? (
            <div 
              className="w-full aspect-3/4 max-h-96 rounded-xs border-2 border-accent p-8 flex items-center justify-center text-center animate-flip-in relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #1a1f2e 0%, #2d3142 50%, #1a1f2e 100%)',
                boxShadow: 'var(--shadow-glow-cyan-strong), inset 0 2px 0 rgba(0,217,255,0.2), inset 0 0 60px rgba(0,217,255,0.05)',
              }}
            >
              {/* Scanning line effect */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,217,255,0.03) 2px, rgba(0,217,255,0.03) 4px)',
                }}
              />
              
              {/* Corner accents */}
              <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-accent/60" />
              <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-accent/60" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-accent/60" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-accent/60" />
              
              <div className="relative z-10">
                <p className="text-platinum text-2xl font-bold leading-relaxed uppercase tracking-wide">
                  {currentQuestion}
                </p>
              </div>
            </div>
          ) : (
            <div 
              className={`w-full aspect-3/4 max-h-96 rounded-xs border-2 p-8 flex items-center justify-center text-center cursor-pointer transition-all duration-200 relative overflow-hidden ${
                isFlipping 
                  ? 'border-accent animate-pulse-glow' 
                  : 'border-chrome-accent hover:border-accent hover:scale-105'
              }`}
              style={{
                background: isFlipping
                  ? 'linear-gradient(135deg, rgba(0,217,255,0.1) 0%, rgba(0,217,255,0.05) 100%)'
                  : 'linear-gradient(135deg, #2d3142 0%, #1a1f2e 50%, #2d3142 100%)',
                boxShadow: isFlipping
                  ? 'var(--shadow-glow-cyan-strong)'
                  : 'var(--shadow-inset-light), 0 4px 20px rgba(0,0,0,0.5)',
              }}
              onClick={drawCard}
            >
              {/* Cyberpunk pattern background */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage: 
                    'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,217,255,0.1) 10px, rgba(0,217,255,0.1) 20px),' +
                    'repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,217,255,0.05) 10px, rgba(0,217,255,0.05) 20px)',
                }}
              />
              
              {/* Circuit lines */}
              <div className="absolute top-8 left-8 right-8 h-px bg-linear-to-r from-transparent via-chrome-accent to-transparent opacity-40" />
              <div className="absolute bottom-8 left-8 right-8 h-px bg-linear-to-r from-transparent via-chrome-accent to-transparent opacity-40" />
              <div className="absolute top-8 bottom-8 left-8 w-px bg-linear-to-b from-transparent via-chrome-accent to-transparent opacity-40" />
              <div className="absolute top-8 bottom-8 right-8 w-px bg-linear-to-b from-transparent via-chrome-accent to-transparent opacity-40" />
              
              {/* Corner brackets */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-chrome-accent" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-chrome-accent" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-chrome-accent" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-chrome-accent" />
              
              <div className="relative z-10">
                {isFlipping ? (
                  <div className="space-y-4">
                    <div className="text-6xl animate-glow-pulse-text">⚡</div>
                    <p className="text-accent text-lg font-bold uppercase tracking-wider animate-glow-pulse-text">
                      Drawing...
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-6xl mb-4 animate-glow-pulse">🃏</div>
                    <p className="text-chrome-accent text-lg font-bold uppercase tracking-wider">
                      Tap to Draw
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-chrome-accent rounded-full animate-glow-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="w-full max-w-md space-y-3">
          <button
            onClick={drawCard}
            disabled={isFlipping}
            className="w-full bg-accent hover:bg-accent-light active:bg-accent-glow text-chrome-dark font-black py-4 px-6 rounded-xs text-lg tracking-[0.18em] uppercase transition-all duration-150 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
            style={{
              boxShadow: 'var(--shadow-glow-cyan-strong), inset 0 2px 0 rgba(232,232,232,0.3), inset 0 -2px 4px rgba(0,0,0,0.3)',
            }}
          >
            {isFlipping ? 'Drawing...' : 'Draw New Card'}
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:animate-shimmer pointer-events-none" />
          </button>

          <button
            onClick={onBack}
            className="w-full border-2 border-chrome-accent hover:border-accent bg-chrome-dark/30 hover:bg-chrome-dark/50 text-chrome-accent hover:text-accent font-bold py-3 px-6 rounded-xs text-base tracking-[0.15em] uppercase transition-all duration-150"
            style={{
              boxShadow: 'var(--shadow-inset-light)',
            }}
          >
            Back to Menu
          </button>
        </div>
      </div>
    </div>
  );
}
