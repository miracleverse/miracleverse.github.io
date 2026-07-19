# Andrei Salkov — Product Portfolio

Static site. `cases.js` is the source of truth for all case-study content; `node build.js` generates the static case HTML and injects it into `index.html` (between the `<!-- CASES:START -->` / `<!-- CASES:END -->` markers) so crawlers, ATS tools, and link previews see the full content without running JavaScript. `script.js` only handles the filter chips and expand/collapse interaction at runtime.

## Deploy to GitHub Pages (5 minutes, no coding needed)

1. Go to [github.com](https://github.com) and log in (or create a free account).
2. Click **+** (top right) → **New repository**.
   - Name it exactly: `andrey-salkov.github.io` — replace `andrey-salkov` with your actual GitHub username. Using this exact `username.github.io` format gives you the cleanest possible URL.
   - Set it to **Public**.
   - Don't initialize with a README (you already have one).
   - Click **Create repository**.
3. On the new repo page, click **uploading an existing file** (or drag-and-drop).
4. Drag in all three files from this folder: `index.html`, `cases.js`, `script.js`.
5. Scroll down, click **Commit changes**.
6. Go to the repo's **Settings** tab → **Pages** (left sidebar).
   - Under "Build and deployment" → Source: **Deploy from a branch**.
   - Branch: `main`, folder: `/ (root)`. Click **Save**.
7. Wait 1–2 minutes. Your site will be live at:
   `https://<your-username>.github.io/`

## Updating content later

All case study text lives in `cases.js` — open it in any text editor (or ask Claude Code to edit it for you) and change the text. Then run:

```
node build.js
```

This regenerates the static case markup inside `index.html`. Commit and push (or re-upload) both `cases.js` and the updated `index.html` — if you skip `node build.js`, the live site will still show the old content since it no longer runs any rendering JavaScript.

## Custom domain (optional, later)

If you buy a domain, GitHub Pages → Settings → Pages has a "Custom domain" field — point your domain's DNS at GitHub's IPs (instructions shown right there) and it works with the same repo.
