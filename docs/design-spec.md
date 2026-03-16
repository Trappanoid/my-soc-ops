# Design Specification: Card Deck Shuffle Mode

## Overview
Adding a new "Card Deck Shuffle" game mode alongside the existing Bingo game mode.

## User Flow
1. Player opens the game
2. Player sees mode selection (Bingo or Card Shuffle)
3. If Card Shuffle is selected:
   - Player sees a card deck interface
   - Player taps/clicks to draw a random card
   - Card animates and reveals a question
   - Player can draw another card

## Design Decisions

### Mode Selection
- Add mode selection to StartScreen
- Two clear buttons/options: "Play Bingo" and "Draw Cards"
- Maintain cyberpunk aesthetic from existing design

### Card Shuffle Screen
- Single card display area (center focus)
- Tap/click interaction to draw new card
- Card flip animation to reveal question
- Return to menu button

### Card Design
- Card back: Cyberpunk pattern/design
- Card front: Question text with styling matching theme
- Flip animation with glow effects

## Components to Create
1. `ModeSelection.tsx` - Choose between game modes
2. `CardScreen.tsx` - Card shuffle game screen
3. `QuestionCard.tsx` - Individual card component

## Iterations Planned
1. Create design spec ✓
2. Add mode selection to StartScreen ✓
3. Create basic CardScreen component ✓
4. Implement QuestionCard with flip animation (integrated into CardScreen)
5. Update App.tsx to support mode switching ✓
6. Polish visual effects

## Implementation Notes

### Iteration 1: Mode Selection (Completed)
- Changed StartScreen to display two mode buttons instead of single start button
- "PLAY BINGO" - primary button with cyan glow
- "DRAW CARDS" - secondary outlined button
- Updated tagline from "BINGO" to "GAME MODES"
- Updated footer text to describe both modes

### Iteration 2: CardScreen (Completed)
- Created CardScreen component with cyberpunk aesthetic matching StartScreen
- Card display area with 3:4 aspect ratio
- Initial state shows card back placeholder with "Tap to Draw" prompt
- After tap, displays random question from questions array
- "Draw New Card" button for additional draws
- "Back to Menu" button to return to mode selection

### Iteration 3: App Integration (Completed)
- Added mode state management to App.tsx
- Three modes: 'menu', 'bingo', 'cards'
- Proper navigation between modes
- Reset button in bingo mode now returns to menu

### Iteration 4: Visual Polish (Completed)
- **Card Flip Animation**: Added 3D flip-in animation when question card appears
- **Drawing State**: Interactive "Drawing..." state with lightning bolt icon when drawing card
- **Card Back Design**:
  - Cyberpunk diagonal grid pattern overlay (20% opacity)
  - Circuit lines forming border frame
  - Corner brackets for tech aesthetic
  - Hover effect scales card to 1.05
  - Animated pulsing dots at bottom
- **Card Front Design**:
  - Scanning line effect overlay (horizontal lines)
  - Corner accent brackets with cyan glow
  - Gradient background with inset glow
  - Uppercase text with wide tracking
- **Button Polish**:
  - Shimmer effect on hover (gradient sweep)
  - Disabled state when drawing
  - Button text changes to "Drawing..." when in progress
- **Animations**:
  - `flip-in`: 3D perspective flip from back to front (0.6s)
  - `card-draw`: Scale bounce effect (cubic-bezier easing)
  - `pulse-glow`: Continuous glow pulse on drawing state
  
All animations use cyberpunk cyan (#00d9ff) glow effects matching the overall theme.
