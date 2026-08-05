# Portfolio — scaffold

A working Next.js 14 (App Router) + TypeScript + Tailwind starting point for
the redesign brief. This is a real, buildable app with the interaction
primitives, design system, and information architecture in place — not a
mockup. Content, remaining pages, and the heavier interactive pieces (Three.js,
MDX case studies, live component playground) are scoped below as next steps
rather than built out fully, so you get a solid foundation instead of six
half-finished features.

## Quickstart

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

> Note: this sandbox's network blocks fonts.googleapis.com, so `npm run build`
> couldn't be verified end-to-end here with the real fonts loaded. Everything
> else — routing, types, Tailwind, all components — built and type-checked
> successfully. Google Fonts will resolve normally in your own environment or
> on Vercel; if you ever need to work fully offline, swap the `next/font/google`
> imports in `app/layout.tsx` for local font files via `next/font/local`.

> Also note: `npm audit` flags two high-severity advisories in Next.js
> 14.2.x with no further 14.x patch — the fix requires Next 15/16. I kept
> this on 14 because that's the version most compatible with the current
> App Router patterns and dependencies (Lenis, cmdk) as tested here; before
> shipping to production, plan an upgrade pass to Next 15 or 16 and re-verify.

## What's built

- **Design tokens** (`tailwind.config.ts`, `components/motion/tokens.ts`) —
  color, type scale, spacing, and motion values, all named by purpose. See
  them rendered live at `/design-system`.
- **Interaction primitives** — custom morphing cursor (`components/cursor`),
  magnetic buttons, Lenis smooth scroll, scroll-triggered section reveals —
  all respecting `prefers-reduced-motion` and hidden on touch devices where
  appropriate.
- **Navigation** — floating dock nav with active-state animation, plus a
  ⌘K command palette (`cmdk`) that's fully keyboard operable.
- **Signature hero element** — an interactive schematic node graph
  (`components/hero/SystemGraph.tsx`) connecting Design / Systems / Research
  / Interaction / Code / AI. Deliberately not a "neural network" or
  "glowing brain" — built as plain SVG so it stays accessible and cheap.
- **Information architecture** — five top-level sections plus a dynamic
  case-study route, described below.
- **Accessibility baseline** — visible focus rings, semantic headings,
  reduced-motion handling, `role="img"` + label on the decorative graph.

## Information architecture

```
/                   Homepage — hero, selected work, focus areas
/about              Narrative, process, stack
/projects           Case study index
/projects/[slug]    Case study template (Problem → Research → Process →
                     Design → Build → Impact)
/research           HCI/AI research interests, publications (interactive,
                     not PDFs)
/design-system      Live token explorer — this site's own design system
/ai                 Human–AI interaction focus area, demos
```

## Folder structure

```
app/                Routes (App Router)
components/
  cursor/           Custom cursor
  hero/             Signature hero graphic
  layout/           Section, Container
  motion/           Motion tokens (Framer Motion mirror of Tailwind tokens)
  nav/              Nav, CommandPalette
  providers/        SmoothScroll (Lenis)
  ui/                MagneticButton, Tag, ProjectCard
lib/
  data/             Project data (swap for real content or a CMS)
content/
  projects/         Empty — reserved for MDX case studies (see below)
```

## Roadmap — what the brief asks for beyond this scaffold

Rough effort order, not strict priority:

1. **Real content** — swap `lib/data/projects.ts` placeholders for actual
   case studies; write the About narrative and Research entries.
2. **MDX case studies** — install `@next/mdx`, move the `[slug]/page.tsx`
   template's prose into `content/projects/*.mdx`, keep the JSX for
   interactive embeds (before/after sliders, prototype iframes) as MDX
   components.
3. **Component playground** — a live, editable component showcase for
   `/design-system` (CodeMirror or Sandpack + your actual component
   library), matching the brief's "token explorer" idea.
4. **Selective Three.js / R3F** — the brief calls for WebGL "only where it
   adds value." Best candidate: a subtle depth/parallax layer behind the
   homepage hero, kept as a separate lazy-loaded client component so it
   never blocks first paint or hurts Lighthouse.
5. **GitHub-inspired contribution graph** on `/about` or a new
   `/frontend-engineering` sub-section, via the GitHub API.
6. **Dark mode toggle** — tokens for it already exist in
   `tailwind.config.ts` under `colors.dark`; wire up a toggle + `class`
   strategy (already set in `darkMode: ["class"]`).
7. **Horizontal / scroll-driven sections** for case studies with a lot of
   sequential process (GSAP ScrollTrigger is a good fit here specifically,
   layered on top of Lenis).
8. **Performance pass** — run Lighthouse once real images/content are in;
   convert imagery to `next/image`, audit font subsets, verify CLS on the
   node-graph hero.

## Design rationale (v2 — matched to the existing site)

Colors, type, and copy were pulled directly from the previous site
(`styles.css`, `about.html`, `index.html`) so this reads as the same
person's portfolio in a new layout, not a different brand:

- **Palette** — off-white paper (`#FFFDFD`), a blush sidebar/nav tint
  (`#FCF0F9`), a cream image-well surface (`#F7F4EF`), ink-brown text
  (`#1A1714`), and the single mauve accent (`#9D3A72`, darkening to
  `#7D2D5A` on hover) used throughout the original for headlines, active
  nav states, and links.
- **Type** — Cormorant Garamond italic bold for display headlines (exactly
  as used for the name, hero greeting, and section titles originally),
  Fira Sans for body copy, DM Mono for labels/utility text. All three
  loaded via `next/font/google` in `app/layout.tsx`.
- **Copy** — the hero greeting, bio, About page's five paragraphs, detail
  rows (Based in / School / Major / Minors / Originally), and skill tags
  are copied verbatim from `about.html` and `index.html`.
- **Projects** — all 18 real projects, grouped into the original four
  categories (Digital Product Design, Web Design & Interfaces, Book
  Design, Installations & Interactive Media), live in
  `lib/data/projects.ts`. Titles and subtitles match the source site
  exactly; slugs are new since the old site linked to static per-project
  HTML files.
- **Art page** — new `/art` route ports the masonry-gallery + lightbox
  pattern from `art.html`/`script.js` into a React client component, with
  the original captions preserved.

## Migration status: complete

All 19 projects across all 4 categories now have real content, real images,
and real video where the original site had it:

- **Digital Product Design** (5) — Dream.ee, Unsubtle, ATLAS, Curiosity
  Agent, Synthra
- **Web Design & Interfaces** (6) — Post-GenAI World, computational
  fluidity*, Finance & Cigarette Culture, techne || theos, overcast.exe,
  PASTE
- **Book Design** (3) — web archeology, in theory + in practice, anti-ai
  manifesto
- **Installations & Interactive Media** (5) — the grounding of touch, bits
  and pieces, untitled (fighting robots), tender evidence, internet
  maximalism

Also done: art gallery (13 pieces), homepage hero (real portrait +
orbiting-gadgets interaction), About portrait, favicon, and the full
design-token migration to Isabella's real palette/type.

\* *computational fluidity* wasn't listed on the original site's homepage
— it was included in the web design upload with a finished, linked live
site, so it's live here too. Flag if that was intentional and I'll pull it.

### What's still worth double-checking

- Every case study here was ported directly from a per-project HTML page
  you sent — none were written from scratch — but it's worth a final read
  through each one to confirm nothing got mis-transcribed along the way.
- Total repo size is now ~89MB, almost entirely video. Fine to unzip and
  run locally, but **use Git LFS for `public/projects/**/*.mp4` before
  pushing to a real git remote** — an 89MB repo without LFS will make every
  clone slow and bloat your git history permanently.
- `npm audit` still flags the Next.js 14.2.x advisories noted below —
  worth a Next 15/16 upgrade pass before shipping to production.

### Not yet migrated

- **Real imagery — 16 of 19 projects done.** Everything except Tender
  Evidence and Internet Maximalism now has real assets and full case-study
  content, including *bits and pieces* (2 hand-tracking videos, compressed
  from 61MB → ~2.1MB combined) and *untitled* — the fighting-robots piece
  (3 videos + 9 photos, compressed from a combined ~298MB down to ~6.3MB;
  it turned out to compress unusually well — mostly static shots).
- **Case-study content — 16 of 19 done.** `lib/data/projects.ts` carries
  full structured content for every project except Tender Evidence and
  Internet Maximalism. `GalleryImage` now supports `type: "video"` entries
  alongside images, rendered with a native `<video>` tag in the gallery
  grid — used for both new projects above.
- **One new project added earlier.** The web design batch included a
  project not listed on the original site's homepage — *computational
  fluidity*. Still flagging in case that omission from the homepage was
  intentional.

### Hero interaction note

`components/hero/PortraitOrbit.tsx` ports the original site's "perimeter
floating icons" behavior (script.js's `spawnAsset`) into Framer Motion: the
same five gadgets, same angular positions, same order — just staggered in
on mount instead of driven by a `setInterval`. The abstract node-graph
diagram from the first draft (`SystemGraph.tsx`) wasn't deleted — it's now
the visual on the `/ai` page instead, next to the AI-focus theme tags.
