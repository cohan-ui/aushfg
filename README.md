# AusHFG Homepage — BlueSky concept build

Vite + React 19 + `motion`. Plain CSS with design tokens lifted from the Figma file.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # → dist/
npm run preview
```

## Where things live

- `src/data/content.js` — every string on the page. Edit copy here.
- `src/styles/tokens.css` — colours, type scale, radius, motion easings.
- `src/components/HowItWorks.jsx` — pinned scroll timeline. Choreography fractions are in the `P` constant at the top;
  `DWELL` controls how long each resource rests on the marker. Falls back to a vertical list under 960px / reduced-motion.
- `.glass` (components.css) — orb-image + blur + grain card. Variants `glass--pink|green|blue|base`; tune with
  `--orb-pos`, `--orb-size`, `--orb-rot`, `--orb-opacity` per instance.
- `public/img/` — optimised assets from the .fig. `jurisdiction-logos.jpg` is exported but not placed.

## Notes
- "03 REGULAR INTERATION" in the file was corrected to "Regular iteration".
- Timeline copy for HPU / Standard Components / BIM steps is placeholder — only AusHFG Parts had copy in the file.
