# AIStudyHub — Full-Stack SEO Blog + Analytics (MERN + React/TS)

AIStudyHub is a portfolio‑grade, content‑driven SEO project targeting “AI tools for students & beginners.” It combines a modern React + TypeScript frontend (dark AI SaaS UI) with a lightweight Express/Mongo backend for keyword and rank tracking.

## Highlights
- Modern AI SaaS UI (dark theme, gradients, glassmorphism, Framer Motion)
- SEO‑ready routing and metadata (`/blog/:slug`, React Helmet, canonical, sitemap, robots)
- Lightweight analytics backend (keywords, current rank, rank history)
- Built‑in monetization sections (affiliate CTAs and recommended tools)
- Easy local run and cloud deployment (Vercel frontend, Render backend)

## Tech Stack
- Frontend: React (TypeScript), Vite, Tailwind v4, Framer Motion, React Router, React Helmet Async
- Backend: Node.js, Express.js, MongoDB (Mongoose) — with in‑memory fallback

## Monorepo Structure
```
D:\SEO_Blog
├─ client/                # React + TypeScript app (Vite)
│  ├─ src/
│  │  ├─ layouts/         # MainLayout
│  │  ├─ components/      # Navbar, Hero, ArticleCard, TOC, Dashboard widgets
│  │  ├─ pages/           # Home, Blog, Article, Dashboard
│  │  ├─ data/            # articles.json (content), keywords.json (seed)
│  │  ├─ main.tsx, App.tsx, style.css
│  ├─ public/             # robots.txt, sitemap.xml
│  ├─ vite.config.ts      # /api → http://localhost:4000 proxy
│  └─ package.json
├─ server/                # Express API
│  ├─ server.js
│  └─ src/
│     ├─ models/          # Keyword.js, RankHistory.js
│     └─ routes/          # keywords.js, rank.js, history.js
├─ package.json           # Root scripts to run both together
└─ README.md
```

## Quickstart (Run Both Together)
Prerequisites: Node.js 20.x (20.17+), npm

```bash
# 1) From project root
cd D:\SEO_Blog
npm install           # installs root tools (concurrently)
npm run install:all   # installs client/ and server/ deps

# 2) Start both (one terminal)
npm run dev
```

- Backend: http://localhost:4000
- Frontend: Vite will print the URL (e.g., http://localhost:5173)
- The frontend proxy sends `/api/*` to the backend in dev.

### Run Separately (optional)
```bash
# Backend
cd D:\SEO_Blog\server
npm install
npm start

# Frontend (in another terminal)
cd D:\SEO_Blog\client
npm install
npm run dev
```

## Environment Variables

Backend (`server`):
- `MONGO_URI` — MongoDB connection string (if empty, API uses in‑memory fallback)
- `PORT` — default 4000

Frontend (`client`):
- `VITE_API_URL` — optional base URL for API in production (dev uses proxy)
- `VITE_GA4_ID` — e.g., `G-XXXXXXXXXX`
- `VITE_SITE_URL` — canonical site URL, e.g., `https://your-domain.com`

Also replace placeholders directly in `client/index.html` if not using env:
- GA4 `<script>` — replace `G-XXXXXXXXXX`
- GSC `<meta name="google-site-verification" ... />` — replace token

## SEO Setup
- Clean URLs: `/blog`, `/blog/:slug`
- Per‑page metadata with React Helmet Async (title, meta description, canonical)
- `client/public/robots.txt` and `client/public/sitemap.xml` included
- Internal linking: pillar → clusters, clusters ↔ pillar, related clusters

## Content Authoring
Articles live in: `client/src/data/articles.json`

Minimal shape:
```json
{
  "slug": "ai-tools-for-students",
  "title": "The Ultimate Guide to AI Tools for Students…",
  "metaDescription": "Explore the best AI tools for students…",
  "excerpt": "From notes to research and planning…",
  "date": "2026-03-28",
  "readingTime": 15,
  "tags": ["guide", "students", "ai tools"],
  "toc": [{ "id": "note-taking", "text": "AI Note-Taking", "level": 2 }],
  "recommended": [{ "title": "Notion AI", "href": "https://notion.so", "note": "Notes + planning" }],
  "content": [
    { "type": "p", "text": "Intro…" },
    { "type": "h2", "id": "note-taking", "text": "AI Note-Taking" },
    { "type": "p", "text": "…" },
    { "type": "ul", "items": ["Point A", "Point B"] },
    { "type": "cta", "title": "Recommended Tools", "text": "…", "href": "https://your-affiliate", "cta": "See recommendations" }
  ]
}
```

## API (Lightweight Analytics)
Base URL: `/api`

- `GET /api/keywords` — list keywords
- `POST /api/keywords` — create keyword
  - body: `{ "keyword": string, "intent": string, "difficulty": number }`
- `POST /api/rank-update` — update current rank and add history
  - body: `{ "keyword": string, "rank": number, "date?"?: string }`
- `GET /api/history` — recent rank history (all)
- `GET /api/history/:keyword` — rank history for a keyword

If `MONGO_URI` is not set, the API falls back to in‑memory storage so you can demo locally.

## Deployment

Frontend — Vercel:
1. Import the repo into Vercel, project root: `client/`
2. Set environment variables as needed (`VITE_API_URL`, `VITE_GA4_ID`, `VITE_SITE_URL`)
3. `vercel.json` includes rewrite for `/api/*` → your Render backend (update hostname)

Backend — Render:
1. Create a “Web Service”, root: `server/`
2. Build command: `npm install`
3. Start command: `npm start`
4. Environment: `MONGO_URI`, `PORT=4000`

DNS/Canonical:
- Point your domain to Vercel; set `VITE_SITE_URL`
- Update `public/sitemap.xml` URLs or generate dynamically as needed

## Troubleshooting

1) Port already in use (EADDRINUSE: :4000)
- Another server is running. Kill it or use a new port.
  ```powershell
  Get-NetTCPConnection -LocalPort 4000 -State Listen | Select-Object OwningProcess -Unique
  Stop-Process -Id <PID> -Force
  ```

2) Tailwind overlay: “use `@tailwindcss/postcss`”
- Fixed by `client/postcss.config.js`:
  ```js
  export default { plugins: { '@tailwindcss/postcss': {}, autoprefixer: {} } }
  ```
  and `npm i -D @tailwindcss/postcss`.

3) Vite/Node version mismatch
- Vite 5 is pinned for Node 20.17 compatibility. If upgrading Node (20.19+), you can bump Vite.

4) Running both together
```bash
cd D:\SEO_Blog
npm install
npm run install:all
npm run dev
```

## Roadmap Ideas
- Persist dashboard filters and search
- Add charting library (e.g., Recharts) for richer visuals
- Admin auth for protected analytics endpoints
- Generate sitemap automatically from `articles.json`

---
Built for real‑world SEO and portfolio impact. Replace placeholder GA4/GSC values and affiliate links before launch.

