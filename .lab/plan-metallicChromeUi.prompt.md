# Plan: Metallic Chrome UI Redesign

## TL;DR
Transform the Bingo app from a minimal light aesthetic into a sleek, industrial **Metallic Chrome** design featuring brushed metal gradients, sharp beveled edges, high-contrast typography, and an electric blue accent palette. The aesthetic is futuristic yet retro-industrial—think sleek gadget + 80s tech aesthetic with polished chrome surfaces and bold geometric forms.

## Design Vision

**Color Palette**:
- **Primary Chrome**: Deep charcoal grays + silver/platinum accents (brushed metal effect)
- **Accent**: Electric cyan/neon blue (#00d9ff or similar) for interactive elements
- **Secondary**: Deep navy/gunmetal base with metallic gradients
- **Highlights**: Bright silver/white for reflections and bevels

**Typography**:
- Move to a bold, geometric sans-serif (e.g., Space Mono for code-like feel, or IBM Plex Sans Bold for industrial strength)
- Increase contrast with darker backgrounds
- Use ALL-CAPS or strong case treatment for headers to match industrial aesthetic

**Visual Elements**:
- Beveled/inset button edges (simulating pressed chrome buttons)
- Gradient backgrounds (metal brushed effect): top-to-bottom light→dark or subtle iridescent gradients
- Metallic shadows and depth effects (use multiple shadow layers)
- Sharp rectangular forms with minimal border radius (industrial aesthetic)
- Neon glow accents on interactive elements
- Subtle patterns (brushed metal noise) in backgrounds

**Motion**:
- Smooth slide/transform animations for state changes
- Glow effects on hover/active states
- Metallic "clang" or "lock" feel to interactions

---

## Steps

### Phase 1: Design Tokens (Foundation)
1. Update `src/index.css` `@theme` variables:
   - Replace blue accent with electric cyan
   - Add chrome/metal color palette (charcoal, gunmetal, silver, platinum)
   - Add metallic gradient definitions as CSS variables
   - Add new highlight/glow colors for interactive states
   - *Dependencies*: No blockers; set foundation first

### Phase 2: Component Styling (Kitchen Sink)
2. **StartScreen** (`src/components/StartScreen.tsx`):
   - Dark charcoal background with subtle metallic gradient
   - White card → chrome/gunmetal card with beveled edges and shadow depth
   - Bold cyan button with glow effect, inset shadow for pressed feel
   - Typography: larger, bolder, geometric sans-serif

3. **GameScreen** (`src/components/GameScreen.tsx`):
   - Dark base with metallic gradient header bar
   - Cyan accent border separator
   - Bold white text on dark background
   - Notification banner: metallic dark with cyan accent

4. **BingoBoard** (`src/components/BingoBoard.tsx`):
   - Container with subtle chrome gradient background
   - Increased gap for sharper separation

5. **BingoSquare** (`src/components/BingoSquare.tsx`):
   - **Unmarked**: Gunmetal gray with subtle beveled inset (dark shadow inside)
   - **Marked**: Bright electric cyan with bold checkmark, metallic glow
   - **Winning**: Bright cyan with enhanced glow effect
   - All text white/bright for contrast
   - Minimal border radius (square, industrial feel)

6. **BingoModal** (`src/components/BingoModal.tsx`):
   - Darker backdrop
   - Modal: dark chrome card with cyan "BINGO!" text
   - Celebrate animation: metallic shine/reflection effect (moving gradient)
   - Button: cyan with glow

   *Depends on Phase 1*; phases 2 can parallelize components

### Phase 3: Typography & Font System
7. Add custom font (e.g., Space Mono or IBM Plex Sans) via Google Fonts or system stack
   - Update `@theme` with font-family
   - Apply bold weight to headers (700-900)
   - Increase letter-spacing for industrial look
   - *Depends on Phase 1*

### Phase 4: Animations & Micro-interactions
8. Add CSS animations for:
   - Metallic shine effect on key moments (page load, bingo win)
   - Glow pulse on hover for buttons/interactive elements
   - Smooth state transitions (color, shadow, glow)
   - *Depends on Phases 2-3*

### Phase 5: Polish & Verify
9. Test responsiveness across mobile/desktop
10. Check contrast ratios for accessibility (cyan on dark should be fine)
11. Verify animations perform smoothly (no jank)
12. Review overall cohesion and refine if needed

---

## Relevant Files

- [src/index.css](src/index.css) — Define `@theme` color tokens, add metallic gradients and shadow variables
- [src/components/StartScreen.tsx](src/components/StartScreen.tsx) — Restyle card, button, typography
- [src/components/GameScreen.tsx](src/components/GameScreen.tsx) — Dark base, metallic header
- [src/components/BingoBoard.tsx](src/components/BingoBoard.tsx) — Board container styling
- [src/components/BingoSquare.tsx](src/components/BingoSquare.tsx) — Square states (unmarked, marked, winning) with metallic effects
- [src/components/BingoModal.tsx](src/components/BingoModal.tsx) — Celebration modal, shine animation
- [index.html](index.html) — May need to update meta theme-color for dark aesthetic

---

## Verification

1. **Visual Inspection**:
   - [ ] Open app in browser; StartScreen loads with dark metallic aesthetic
   - [ ] Button has cyan glow and inset shadow on hover/click
   - [ ] Play a round; board displays with gunmetal squares and cyan marked states
   - [ ] Get a bingo; modal shows with glow effect and "BINGO!" in cyan
   - [ ] Modal celebrate animation includes metallic shine/reflection effect

2. **Accessibility**:
   - [ ] Run Lighthouse audit; contrast ratios pass (cyan #00d9ff on dark charcoal should meet WCAG)
   - [ ] Verify text is readable at all sizes

3. **Responsive**:
   - [ ] Test on mobile (375w), tablet (768w), desktop (1440w)
   - [ ] Ensure spacing, typography scale appropriately

4. **Browser Performance**:
   - [ ] Animations run at 60fps (no stuttering)
   - [ ] File size increase is minimal (mostly CSS)

---

## Decisions & Assumptions

- **Custom Font**: Will use either Space Mono (code-like, technical feel) or system bold stack (lighter weight). Recommend Space Mono for maximum chrome aesthetic fidelity.
- **Chrome Gradient**: Using CSS linear gradients + layered shadows to simulate brushed metal (no images needed to keep it lightweight)
- **Glow Effect**: Using CSS `filter: drop-shadow()` or `box-shadow` with blur for neon effect; will avoid over-using to prevent performance issues
- **Border Radius**: Minimized to 2-4px max for sharp, industrial edges (vs. current 4-6px softness)
- **Contrast**: Electric cyan (#00d9ff) on charcoal (#1a1f2e) provides 10+ contrast ratio—excellent for accessibility while maintaining aesthetic
- **Scope**: Focused on UI/visual redesign; no changes to game logic, component architecture, or state management

---

## Further Considerations

1. **Font Choice**: Space Mono (technical + retro-futuristic) OR IBM Plex Sans Bold (industrial strength) versus a system-UI fallback?
   - **Recommendation**: Try Space Mono first; if it feels too code-y, fall back to system-bold stack

2. **Glow Intensity**: How much neon glow is "right"? Subtle (used only on hover) vs. Always-on (every interactive element glows)?
   - **Recommendation**: Hover/active states glow; default state is clean chrome (glow feels "powered off" until user interacts)

3. **Dark Mode Only?** Keep light theme variant or go 100% dark chrome aesthetic?
   - **Recommendation**: 100% dark for this aesthetic (chrome is always dark/reflective in daylight/dark contexts)
