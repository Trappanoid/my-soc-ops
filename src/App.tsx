import { useState } from 'react';
import { useBingoGame } from './hooks/useBingoGame';
import { StartScreen } from './components/StartScreen';
import { GameScreen } from './components/GameScreen';
import { BingoModal } from './components/BingoModal';
import { CardScreen } from './components/CardScreen';

type GameMode = 'menu' | 'bingo' | 'cards';

function App() {
  const [mode, setMode] = useState<GameMode>('menu');
  
  const {
    gameState,
    board,
    winningSquareIds,
    showBingoModal,
    startGame,
    handleSquareClick,
    resetGame,
    dismissModal,
  } = useBingoGame();

  const handleModeSelect = (selectedMode: 'bingo' | 'cards') => {
    if (selectedMode === 'bingo') {
      startGame();
      setMode('bingo');
    } else {
      setMode('cards');
    }
  };

  const handleBackToMenu = () => {
    setMode('menu');
    if (gameState !== 'start') {
      resetGame();
    }
  };

  if (mode === 'menu') {
    return <StartScreen onStart={handleModeSelect} />;
  }

  if (mode === 'cards') {
    return <CardScreen onBack={handleBackToMenu} />;
  }

  return (
    <>
      <GameScreen
        board={board}
        winningSquareIds={winningSquareIds}
        hasBingo={gameState === 'bingo'}
        onSquareClick={handleSquareClick}
        onReset={handleBackToMenu}
      />
      {showBingoModal && (
        <BingoModal onDismiss={dismissModal} />
      )}
    </>
  );
}

export default App;
