# Website aesthetic review — 21 September 2026

## Assessment

The original site had a distinctive personal voice and useful project evidence, but its visual hierarchy was weaker than its content. The biggest issue was the route to the work: visitors passed a seven-image mosaic, six large equipment cards, and another Counter-Strike image before reaching the project index.

| Finding | Impact | Implemented change |
| --- | --- | --- |
| Warm serif display type, brown/cream colors, and blue/green/orange section palettes competed | The site felt like several separate visual directions | One black/white system, Inter display type, restrained tricolor identity accents |
| Text-only opening followed by repeated headset, room, and inventory imagery | Long introduction without a clear project narrative | Photographic hero, featured haptics research, then three selected projects |
| Hardware dominated both Home and About | Education, research, and experience were difficult to reach | Compact homepage setup preview; the full About setup follows academic and professional information |
| Weak distinction between main and secondary actions | Visitors had to work harder to choose a next step | Consistent outlined main actions, quieter text links, visible current navigation |
| Small controls and a fixed horizontal header | Fragile spacing on narrow screens | Mobile navigation disclosure, larger targets, wrapping filters, responsive grids |
| Project diagrams used uniform cover crops | Technical details could be cut off | Contain-fit case-study images and visible gallery captions |
| Generic empty-image cards | Projects without screenshots looked unfinished | Deliberate typographic covers with project category and technology labels |

## BMW M adaptation

Source: [BMW M DESIGN.md in VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/bmw-m/DESIGN.md).

Applied the reference's black canvas, photographic emphasis, uppercase display hierarchy, square buttons, thin borders, and sparing tricolor accents. Inter is its suggested open-source substitute for BMW Type Next Latin. The portfolio keeps Xinlong Bao's name and existing project imagery. The reusable local rules are in [DESIGN.md](../DESIGN.md).

## Validation

- TypeScript check passed.
- Standard Next.js production build passed.
- GitHub Pages static export passed, with all 13 project pages generated.
- Checked 572 local link and asset references in the exported portfolio: none missing.
- Visually reviewed desktop and mobile layouts in the browser, including the photographic hero, project cards, mobile navigation, and project detail page.
- At 320px, Home, Work, About, Live demos, and project pages with and without imagery had no document-level horizontal overflow.
- Tested mobile menu opening, Escape closing, and closing on navigation. Re-tested every category on the production build: Hardware 2, Software 4, Games 1, Study tools 4, Research 1, Security studio 1; All work restored 13.
- Both existing embedded demos rendered their content. The Algo demo retains its existing Tailwind CDN warning; its implementation is outside the portfolio theme.

## Remaining visual opportunity

Some existing prototype photographs and project screenshots are low-resolution. Their technical content is retained; fresh high-resolution photographs would improve the large case-study galleries further.

The initial design review was verified in a local production preview before deployment.
