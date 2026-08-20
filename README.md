# Shivam Kumar — Portfolio (Next.js)

Personal portfolio built with Next.js 14 (App Router) + Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel (free)

**Option A — via GitHub (recommended)**

1. Create a new empty repo on GitHub (e.g. `shivam-portfolio`).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/shivam-portfolio.git
   git push -u origin main
   ```
3. Go to https://vercel.com → Sign up / log in with GitHub (free Hobby plan).
4. Click **Add New → Project**, select your `shivam-portfolio` repo.
5. Vercel auto-detects Next.js — just click **Deploy**. Done in ~1 minute.
6. You'll get a free `https://shivam-portfolio-xxxx.vercel.app` URL. You can add a custom
   domain later from Project Settings → Domains (custom domain needs to be bought separately;
   the `.vercel.app` URL itself is free forever on the Hobby plan).

**Option B — via Vercel CLI (no GitHub needed)**

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts (link to a new project, keep defaults). It deploys straight from this folder.

## Editing content

- `app/page.js` — all text content (experience, skills, contact info) lives in the
  `EXPERIENCE` and `SKILLS` arrays near the top of the file.
- `public/photo.jpg` — replace this file (same name) to swap your photo.
- `app/globals.css` — colors, fonts, and animation styles (CSS variables at the top).
