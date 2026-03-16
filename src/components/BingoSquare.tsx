import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2 text-center border border-chrome-accent rounded-xs transition-all duration-150 select-none min-h-[60px] text-xs leading-tight font-bold font-mono uppercase';

  let stateClasses = '';
  let containerStyle: React.CSSProperties = {};

  if (square.isMarked) {
    if (isWinning) {
      stateClasses = 'bg-accent border-accent text-chrome-dark';
      containerStyle = {
        boxShadow: 'var(--shadow-glow-cyan-strong), inset 0 1px 0 rgba(232, 232, 232, 0.3), inset 0 -2px 4px rgba(0, 0, 0, 0.3)'
      };
    } else {
      stateClasses = 'bg-accent border-accent text-chrome-dark';
      containerStyle = {
        boxShadow: 'var(--shadow-glow-cyan), inset 0 1px 0 rgba(232, 232, 232, 0.2), inset 0 -2px 4px rgba(0, 0, 0, 0.3)'
      };
    }
  } else {
    stateClasses = 'bg-chrome-medium border-chrome-accent text-platinum hover:bg-chrome-light active:bg-chrome-accent';
    containerStyle = {
      boxShadow: 'var(--shadow-inset-light), var(--shadow-inset-dark)'
    };
  }

  const freeSpaceClasses = square.isFreeSpace ? 'font-black text-sm' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      style={containerStyle}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-0.5 text-platinum text-sm font-black">✓</span>
      )}
    </button>
  );
}
