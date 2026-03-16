# Plan: Chalkboard Classroom Redesign

## TL;DR
Transform the Bingo game into an immersive "Chalkboard Classroom" aesthetic with a dark green chalkboard background, cream/white chalk text, hand-written fonts, and interactive chalk-smudge effects when marking squares. Includes subtle texture overlays and chalk-drawing animations throughout.

**Design Direction:**
- Color palette: Classic dark green (primary), cream/chalk white (text), colored chalk accents (pink, yellow, orange)
- Typography: Hand-written/chalk-style font (Comic Sans, Caveat, Fredoka, or similar)
- Interactions: Chalk smudge effect on square marking
- Effects: Chalk texture, subtle chalk-drawing animations for reveals
- Scope: Complete visual overhaul—all components, colors, typography, animations

---

## Implementation Steps

### Phase 1: Design System & Theme Foundation

**1. Update src/index.css with new color palette**
   - Set CSS custom properties for chalkboard theme:
     - `--color-chalkboard`: `#1a4d2e` (deep green)
     - `--color-chalk-primary`: `#f5f1e8` (cream white)
     - `--color-chalk-accent-pink`: `#ff6b9d` (chalk pink)
     - `--color-chalk-accent-yellow`: `#ffd93d` (chalk yellow)
     - `--color-chalk-accent-orange`: `#ff8238` (chalk orange)
     - `--color-marked`: `#c1f0d0` (light chalk green)
     - `--color-marked-border`: `--color-chalk-accent-pink` (chalk pink border)
     - Background images: Add subtle chalk texture overlay
   - Add @font-face rule for chalk-like font (e.g., "Caveat" from Google Fonts or system fallback)
   - Update body & #root to use chalkboard background

**2. Configure Tailwind v4 to extend theme with chalkboard colors**
   - Create `tailwind.config.ts` or update existing to add custom color scale:
     - `colors.board-green`, `colors.chalk-cream`, `colors.chalk-pink`, etc.
   - Ensure Tailwind can use CSS custom properties via `theme()` references
   - *Depends on: Step 1*

**3. Add chalk texture CSS utility**
   - Create reusable utility classes for chalk texture and smudge effects in index.css
   - `@layer utilities { .chalk-texture { ... } .chalk-smudge { ... } }`
   - Use CSS filters (noise, slight blur) or background-image to simulate texture
   - *Parallel with: Step 1*

---

### Phase 2: Component Styling Updates

**4. Update StartScreen.tsx**
   - Replace `bg-gray-50` with `bg-board-green`
   - Change text colors to cream chalk
   - Update button to have chalk-style border/shadow
   - Title font should use chalk font-family
   - Add subtle texture overlay via `chalk-texture` class
   - *Depends on: Steps 1-3*

**5. Update GameScreen.tsx**
   - Change background to `bg-board-green`
   - Style header with chalk aesthetic (cream text, pink/yellow accents)
   - Update title and instructions styling
   - Change "BINGO" indicator banner to pink chalk color
   - *Depends on: Steps 1-3*

**6. Update BingoBoard.tsx**
   - Keep grid structure (5x5)
   - Add chalk texture to board container
   - Adjust gap/spacing to look like chalk lines separating squares
   - Update board background
   - *Depends on: Steps 1-3*

**7. Update BingoSquare.tsx (key interactive component)**
   - Default state: cream chalk text on dark outline, chalkboard-textured background
   - Marked state: Apply `chalk-smudge` class + light green chalk background
   - Winning state: Update to yellow/gold chalk color
   - Free space: Bold cream text, disabled styling with chalk aesthetic
   - Add transition timing for smudge effect reveal (200-300ms)
   - *Depends on: Steps 1-3*

**8. Update BingoModal.tsx**
   - Background overlay stays dark (maybe adjust opacity for chalkboard feel)
   - Modal card background: cream chalk with green border
   - "BINGO!" text: Large, bold, in pink chalk color with shadow
   - Victory emoji (🎉) or replace with chalk-themed graphic
   - Button styling: chalk aesthetic with smudge on hover
   - *Depends on: Steps 1-3*

---

### Phase 3: Animations & Effects

**9. Add chalk-drawing animation**
   - Create keyframes animation for subtle chalk reveal effect (optional, for title/heading text)
   - Use CSS `stroke-dasharray`/`stroke-dashoffset` pattern (if using SVG elements)
   - Or use opacity + transform animation for text elements
   - Apply to StartScreen title, GameScreen title on reveal
   - *Depends on: Steps 1-3*

**10. Enhance chalk-smudge effect for square marking**
   - Refine the smudge animation in BingoSquare marking action
   - Use radial gradient or filter-based effect to simulate chalk being wiped
   - Trigger on click with ~200ms animation duration
   - *Depends on: Step 7*

**11. Add chalk texture animation (subtle)**
   - Light noise animation that subtly shifts across board on load (optional flair)
   - Keep it subtle to avoid distraction
   - *Parallel with: Step 10*

---

### Phase 4: Polish & Refinement

**12. Review and test across breakpoints**
   - Verify mobile (small screens) layout and touch interactions
   - Check desktop and tablet responsiveness
   - Ensure chalk texture doesn't overwhelm on smaller screens
   - *Depends on: Steps 4-11*

**13. Verify Tailwind v4 integration**
   - Check that all custom colors render correctly
   - Ensure font imports work (Caveat or chosen chalk font loads properly)
   - Confirm no Tailwind v3 deprecated utilities in use
   - *Depends on: Steps 4-11*

**14. Update copilot-instructions.md with design guide**
   - Document the new chalkboard theme colors and design principles
   - Add mandatory development checklist (lint, build, test)
   - Include guidance on maintaining chalk aesthetic in future changes
   - *Depends on: Step 12*

---

## Relevant Files

- src/index.css — Global styles, color variables, chalk texture utilities, font imports
- src/components/StartScreen.tsx — Title page styling
- src/components/GameScreen.tsx — Game header and layout
- src/components/BingoBoard.tsx — Board container and grid
- src/components/BingoSquare.tsx — Interactive square states (default, marked, winning)
- src/components/BingoModal.tsx — Victory modal styling
- tailwind.config.ts — Extend theme with custom chalkboard colors (create if missing)
- copilot-instructions.md — Add design guide section after implementation

---

## Verification

1. **Visual Review**
   - [ ] All components render with dark green chalkboard background
   - [ ] Text displays in cream/chalk white color
   - [ ] Marked squares show chalk-smudge effect and light green background on click
   - [ ] Victory modal displays in pink chalk color with cream card
   - [ ] Chalk texture visible but not overwhelming (especially on mobile)

2. **Interactive Testing**
   - [ ] Click squares→smudge effect animates smoothly (200-300ms)
   - [ ] BINGO banner appears and animates correctly
   - [ ] Modal bounce animation works and uses chalk styling
   - [ ] All buttons and interactive elements are accessible (keyboard, screen reader)

3. **Responsive Testing**
   - [ ] Mobile (320px+) — Layout intact, touch interactions work, texture readable
   - [ ] Tablet (768px+) — Board scales appropriately, no layout breaks
   - [ ] Desktop (1024px+) — Full experience, animations smooth

4. **Build & Lint**
   - [ ] `npm run build` completes without errors
   - [ ] `npm run lint` passes (no ESLint warnings/errors)
   - [ ] All TypeScript types pass compilation

5. **Browser Verification**
   - [ ] Chrome/Edge — colors, fonts, animations render correctly
   - [ ] Firefox — same visual fidelity
   - [ ] Safari — animations smooth, textures display

---

## Decisions & Design Details

- **Font Selection**: Will use Google Fonts "Caveat" (hand-written style) as primary, with fallback to Comic Sans or system hand-written alternate
- **Chalk Texture**: Via CSS `background-image` with subtle noise/grain pattern, not as overlay image (keeps it lightweight)
- **Smudge Effect**: Radial gradient animation on click, ~200ms duration, with slight blur filter to simulate chalk wiping
- **Color Accuracy**: Staying true to classic chalkboard green (#1a4d2e) paired with traditional chalk colors
- **Animations**: Keeping existing animations but restyling them for chalk aesthetic (bounce modal stays, smudge effect is new)
- **Accessibility**: All text contrast meets WCAG AA (cream on dark green ✓, pink on cream ✓)

---

## Further Considerations

1. **Chalk Font Alternative** — If Caveat doesn't load or feel right, consider:
   - Fredoka (hand-drawn but cleaner)
   - Indie Flower (very chalk-like)
   - System fallback: Comic Sans or Trebuchet MS (familiar classroom fonts)
   
2. **Texture Performance** — If chalk texture causes performance issues on older devices:
   - Reduce texture complexity (simpler noise pattern)
   - Make texture optional via CSS media query or user preference
   
3. **Color Contrast Edge Cases** — Cream on green is strong, but double-check:
   - Pink chalk on cream background (marked squares) for readability
   - Yellow chalk accents for sufficient contrast if used on text
   
4. **Advanced Enhancement** — Post-MVP consideration:
   - Eraser animation for unmarking squares
   - Chalk "writing" animation as board draws on startup
   - Sound effects (chalk scratching) tied to interactions
