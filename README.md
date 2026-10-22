# Hrishi Portfolio

A personal portfolio built with **Next.js 16 (App Router)**, **Tailwind CSS 4**, and a custom light “Standings & Broadsheet” design system.

## Features
- Hero section with quick overview and contact links.
- Eight‑section homepage (hero, projects, achievements, leadership, about, skills, CP profiles, contact).
- Dynamic project detail pages (`/projects/[slug]`).
- Fully typed data files (`projects.js`, `achievements.js`, `skills.js`).
- Reveal scroll‑animation powered by IntersectionObserver.
- Design tokens, hairline borders, dark‑mode‑ready colors, and reduced‑motion support.
- OpenGraph and Twitter meta tags (placeholder OG image).
- Placeholder screenshots and SVG assets in `public/projects/`.

## Development
```bash
npm install        # install deps
npm run dev        # start dev server at http://localhost:3000
npm run lint       # lint check
npm run build       # production build
```

## Deployment
The site is ready to be deployed on **Vercel**. Connect the repository in the Vercel dashboard – no additional configuration required because the Open Graph image and favicon are already in the repo.

## Project Structure
- `src/app/` – Next.js App Router pages and layout.
- `src/components/` – UI primitives, layout components, and section components.
- `src/data/` – static data for projects, achievements, skills, and site metadata.
- `public/projects/` – placeholder image/SVG assets for project previews.
- `TODO.md` – phased roadmap tracking implementation progress.

## License
MIT © Hrishikesh Patil
