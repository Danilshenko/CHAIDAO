# CHAIDAO — Rest in the Forest

Premium luxury tea landing page built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command        | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start development server |
| `npm run build`| Production build → `dist/` |
| `npm run preview` | Preview production build |

## Background video

Place your video file here:

```
public/0_Mountain_Forest_1920x1080.mp4
```

If the file is missing, the hero still works with a poster image.

## Project structure

```
src/
  components/   Navbar, ProductCard, ArrowButton
  sections/     Hero, Collection, Philosophy, Benefits, Testimonials, Footer
  context/      EN/RU language switcher
  data/         translations + products
public/
  images/       local product & UI images
```

## Push to GitHub

```bash
cd forest-rest
git init
git add .
git commit -m "Initial commit: CHAIDAO luxury tea landing page"
gh repo create chaidao-forest-rest --public --source=. --remote=origin --push
```

Or create an empty repo on GitHub, then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

## Deploy (optional)

- **Vercel / Netlify**: connect the GitHub repo, build command `npm run build`, output `dist`.
- **GitHub Pages**: use a static deploy action for Vite (`base` may need `/repo-name/` in `vite.config.js`).
