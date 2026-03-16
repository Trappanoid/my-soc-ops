import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full" style={{ background: 'var(--gradient-chrome-subtle)' }}>
      {/* Header */}
      <header 
        className="flex items-center justify-between p-4 border-b-2 border-accent"
        style={{ background: 'var(--gradient-chrome)', boxShadow: 'var(--shadow-inset-light), 0 4px 8px rgba(0, 0, 0, 0.6)' }}
      >
        <button
          onClick={onReset}
          className="text-accent font-bold px-3 py-1.5 rounded-sm text-sm uppercase tracking-wide hover:bg-chrome-accent/30 active:bg-chrome-accent/50 transition-colors"
        >
          ← BACK
        </button>
        <h1 className="font-black text-platinum text-lg tracking-wider">SOC OPS</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-silver text-sm py-3 px-4 font-medium tracking-wide uppercase">
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div 
          className="text-accent text-center py-3 font-black text-sm uppercase tracking-widest"
          style={{ 
            background: 'var(--gradient-chrome)',
            boxShadow: 'var(--shadow-glow-cyan-strong), inset 0 1px 0 rgba(232, 232, 232, 0.1)'
          }}
        >
          🎉 BINGO! YOU GOT A LINE!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
