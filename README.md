# Gina Condotti — Portfolio

Built with [Astro](https://astro.build), hosted free on GitHub Pages.

## One-time setup

1. **Create the repo.** On GitHub, make a new public repository named exactly
   `YOUR-USERNAME.github.io` (your GitHub username). This gives you the address
   `https://YOUR-USERNAME.github.io` with no extra configuration.
2. **Set your address.** In `astro.config.mjs`, replace `YOUR-USERNAME` with your username.
3. **Add your resume.** Copy your resume PDF to `public/resume.pdf`.
4. **Push the code.**
   ```bash
   cd gina-portfolio
   git init
   git add .
   git commit -m "First version of portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
   git push -u origin main
   ```
5. **Turn on Pages.** In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
6. Open the **Actions** tab and watch the "Deploy to GitHub Pages" run. When it's green
   (about a minute), the site is live. Every push to `main` redeploys automatically.

## Preview on your computer

```bash
npm install
npm run dev      # opens http://localhost:4321 and reloads as you edit
```

## Everyday edits

| To change… | Edit |
|---|---|
| Email, LinkedIn, GitHub, city, reel link, credits | `src/site.ts` |
| Colors and fonts for the whole site | the `:root` block at the top of `src/styles/global.css` |
| Homepage text (hero, skills, about) | `src/pages/index.astro` |
| A project's card and case-study page | its file in `src/projects/` |

**Add a project:** copy any file in `src/projects/`, rename it (the file name becomes the
URL, e.g. `noodles.md` → `/work/noodles/`), and edit the top section and the text below it.
`order` sets its position on the homepage. `draft: true` hides it.

**Add images:** put them in `public/images/`, then set `image: /images/your-file.png` and
`imageAlt: ...` in the project's top section. Use the same path inside the text with
`![Description](/images/your-file.png)`. Keep images under ~500 KB (export as .webp or .jpg).
GIFs work but get heavy; a short muted MP4 or a Vimeo embed is lighter for motion.

**Reel:** upload to Vimeo or YouTube and paste the *embed* link into `reelEmbed` in `src/site.ts`.

## Custom domain (optional)

1. Buy the domain (Cloudflare, Namecheap, etc.).
2. In the repo: **Settings → Pages → Custom domain**, enter it, and follow GitHub's DNS
   instructions. Tick **Enforce HTTPS** once it's available.
3. Update `site` in `astro.config.mjs` to the new address.

If you'd rather name the repo something else (e.g. `portfolio`), the site lives at
`https://YOUR-USERNAME.github.io/portfolio/` and you'd need to add `base: '/portfolio'` in
`astro.config.mjs` and update links. Using `YOUR-USERNAME.github.io` or a custom domain avoids that.
