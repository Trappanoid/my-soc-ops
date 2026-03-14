# Soc Ops - Workspace Instructions

## Development Checklist

- [ ] `npm run lint` — ESLint passes with no errors
- [ ] `npm run build` — TypeScript compilation and Vite build succeed
- [ ] `npm run test` — All 21 Vitest tests passing

## Project Overview

Soc Ops is a social bingo game for in-person mixers. Find people matching 5×5 board questions to get 5 in a row.

**Tech Stack**: React 19, TypeScript 5.9, Vite 7, Tailwind CSS v4, Vitest, ESLint

## Architecture

**Component Tree**: App → StartScreen OR GameScreen → BingoBoard → BingoSquare (×25), BingoModal

**State**: `useBingoGame` hook manages board generation, localStorage persistence, win detection across states: `start` → `playing` → `bingo`

**Types** (`src/types/index.ts`):
- `BingoSquareData`: { id, text, isMarked, isFreeSpace }
- `BingoLine`: { type: row|column|diagonal, index, squares }
- `GameState`: 'start' | 'playing' | 'bingo'

## Directory Map

```
src/
├── components/          # React UI (StartScreen, GameScreen, BingoBoard, etc.)
├── hooks/useBingoGame.ts # Game state & logic
├── utils/
│   ├── bingoLogic.ts    # Pure functions: generateBoard, toggleSquare, checkBingo, getWinningSquareIds
│   └── bingoLogic.test.ts # 21 unit tests
├── data/questions.ts    # Question array (≥24 items required)
├── types/index.ts       # Type definitions
└── test/setup.ts        # Vitest config
```

## Key Patterns

**Game Logic**: Pure immutable functions in `bingoLogic.ts` with comprehensive tests

**State Persistence**: localStorage key `'bingo-game-state'` with version control and validation

**Styling**: Tailwind v4 utility classes; responsive grid: `grid grid-cols-5 aspect-square`

**Component Props**: TypeScript interfaces; destructuring parameters; prefer `interface` over `type`

## Common Tasks

**Add Questions**: Edit `src/data/questions.ts` (keep ≥24 items)

**Modify Game Logic**: Update `bingoLogic.ts` + add tests, then `npm run test`

**New Game Mode**: 
1. Extend `GameState` type
2. Update `useBingoGame` hook
3. Add screen component in `src/components/`
4. Update `App.tsx` routing
5. Bump localStorage version if state changes

**Styling**: Use Tailwind v4 classes; check `.github/instructions/tailwind-4.instructions.md` for v4 features

## Build & Deploy

`npm run build` → outputs to `dist/`. GitHub Pages auto-deploys on push to `main` (base path auto-detected from `VITE_REPO_NAME` env var).

## Code Standards

- TypeScript strict mode, no implicit any
- Functional React components with hooks only
- Tests required for new game logic
- ESLint must pass
- All dependencies pinned; React 19 & Tailwind v4 are latest
