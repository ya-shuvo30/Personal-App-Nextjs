# Developer Portfolio Website

Modern, dark-themed portfolio for a full-stack engineer. Built with Next.js App Router, TypeScript, Tailwind CSS v4, Motion animations, and Lucide icons. The experience features micro-interactions, scroll-triggered reveals, and reusable UI primitives inspired by shadcn/ui.

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS v4 with custom tokens defined in `src/app/globals.css`
- Motion (formerly Framer Motion) for scroll + hover animations
- Lucide React icon set
- Custom UI components (`button`, `card`, `input`, `textarea`) for consistent styling

## Key Sections

| Section | Highlights |
| --- | --- |
| Navigation | Sticky, translucent nav with smooth scroll |
| Hero | Particle background, gradient typography, CTA + social icons |
| About | Bio copy, trait pills, feature cards |
| Skills | Animated progress bars, tech pills |
| Projects | Featured + grid cards using `ImageWithFallback` |
| Contact | Styled form, contact cards, social buttons |

## Project Structure

```text
src/
├── app/
│   ├── globals.css        # Theme tokens, typography helpers, utilities
│   ├── layout.tsx         # Metadata + global layout
│   └── page.tsx           # Composes all sections
└── components/
    ├── Navigation.tsx
    ├── HeroSection.tsx
    ├── AboutSection.tsx
    ├── SkillsSection.tsx
    ├── ProjectsSection.tsx
    ├── ContactSection.tsx
    ├── figma/ImageWithFallback.tsx
    └── ui/{button,card,input,textarea}.tsx
```

## Getting Started

```bash
npm install
npm run dev
```

- Local dev server: <http://localhost:3000>
- Lint: `npm run lint`
- Production build: `npm run build`

## Customization

- Update hero/about copy and social links inside their respective components.
- Adjust skill values or project data by editing arrays in `SkillsSection.tsx` and `ProjectsSection.tsx`.
- Replace Unsplash images or add new hosts via `next.config.ts` (`images.remotePatterns`).
- Tailwind utility classes and custom typography helpers live in `globals.css` for easy theme tweaks.

## Deployment

Host on Vercel for the best Next.js experience:

1. Create a new Vercel project connected to this repository.
2. Set framework preset to Next.js; defaults work out of the box.
3. After deployment, add any additional image domains to `next.config.ts` if assets are hosted elsewhere.

For other hosts (Netlify, AWS, etc.), ensure `npm run build` passes and serve the generated `.next` output via the platform’s Next.js adapter.
