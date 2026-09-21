# Xinlong Bao — design direction

Adapted from [VoltAgent's BMW M design analysis](https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/bmw-m/DESIGN.md), retrieved 21 September 2026. This is an independent personal portfolio inspired by that visual language, not a BMW website or an official BMW design system.

## Direction

Precise, photographic, and editorial. The owner's projects supply the imagery and substance. Use the existing haptics, hardware, software, and gaming assets; do not introduce automotive stock photos, BMW logos, or implied affiliation.

## Palette

- Canvas: `#000000`; secondary surface: `#0d0d0d`; cards: `#1a1a1a`.
- Primary text: `#ffffff`; body: `#bbbbbb`; small secondary text: `#999999`.
- Hairlines: `#3c3c3c`; quiet section boundaries: `#262626`.
- Reference tricolor: `#0066b1`, `#1c69d4`, `#e22718`. Reserve it for the small identity stripe. Keep actions monochrome.

## Typography and geometry

Inter is the reference's open-source substitute for the proprietary BMW font. Use 700-weight uppercase display type with close tracking, 300-weight sentence-case body text, and small widely spaced uppercase labels. Use IBM Plex Mono only for technical annotations. CJK uses system sans-serif.

Keep corners square, borders thin, and backgrounds flat. No glow, ambient colored gradients, glass panels, or decorative shadows. Use a 1440px maximum content width, 24–72px responsive page gutters, 96px desktop section spacing, and 64px on mobile.

## Content hierarchy

Homepage: photographic identity → concise credentials → featured haptic research → selected projects → compact hardware setup → Counter-Strike. The Work page is the full collection; About contains education, experience, papers, and all hardware. All project details and demos remain reachable.

Project screenshot cards use a consistent 16:10 frame. Case-study images use contain-fit so diagrams and prototypes remain intact. Projects without screenshots have deliberate typographic covers, never invented screenshots or results.

## Interaction and accessibility

Outlined rectangular actions, at least 48px high; monochrome inversion on hover. Filters have an underline and `aria-pressed`. Current navigation uses `aria-current`. Mobile navigation is a disclosure with `aria-expanded`, closes on navigation or Escape, and restores focus on Escape. Provide a skip link, visible keyboard focus, descriptive image alternatives, and reduced-motion support.

Body text and labels retain sufficient contrast on their actual surfaces. Keep all cards available at every breakpoint; layouts collapse from three columns to two to one. Do not restyle the embedded projects themselves as part of the portfolio theme.
