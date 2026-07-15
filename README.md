# ClinicSell — Landing Page

A professional single-page clinic landing site built on top of the **liquid glass**
animated background component.

## Stack

- [Vite](https://vite.dev) + [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/vite`) + `tw-animate-css`
- shadcn project structure (`src/components/ui`, `@/` path alias, `components.json`, `src/lib/utils.ts`)
- [lucide-react](https://lucide.dev) icons

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
npm run preview  # serve the production build
```

## Structure

```
src/
├── components/
│   ├── ui/
│   │   └── liquid-glass.tsx   # the liquid-glass component — kept verbatim, do not edit
│   ├── demo.tsx               # original demo usage of the component
│   └── landing/               # the clinic landing page
│       ├── background.tsx     # fixed animated background + #glass-distortion SVG filter
│       ├── glass.tsx          # landing glass primitives (GlassPanel, GlassCTA, GlassChip)
│       ├── navbar.tsx         # fixed glass navbar with mobile menu
│       ├── hero.tsx           # hero with CTAs and trust badges
│       ├── stats.tsx          # stats strip
│       ├── services.tsx       # six departments
│       ├── why-us.tsx         # feature checklist
│       ├── doctors.tsx        # team cards
│       ├── testimonials.tsx   # patient stories
│       ├── appointment.tsx    # booking form + contact info
│       ├── footer.tsx         # footer with links and socials
│       ├── back-to-top.tsx    # floating back-to-top button
│       └── index.tsx          # assembles the page
├── lib/utils.ts               # cn() helper (shadcn convention)
├── App.tsx
├── index.css                  # Tailwind v4 + tw-animate-css + moveBackground keyframes
└── main.tsx
```

## Notes

- `src/components/ui/liquid-glass.tsx` is the drop-in component exactly as provided.
  The landing page reproduces its background and glass styling in
  `src/components/landing/` without modifying it.
- Photos are hotlinked from Unsplash; the appointment form is front-end only
  (wire it to your booking system / backend when ready).
