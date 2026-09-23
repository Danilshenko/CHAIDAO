# CHAIDAO — Rest in the Forest

Premium luxury tea landing page built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Scripts

| Command           | Description                |
|-------------------|----------------------------|
| `npm run dev`     | Start development server   |
| `npm run build`   | Production build → `dist/` |
| `npm run preview` | Preview production build   |

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

## Deploy (optional)

- **Vercel / Netlify**: connect this repo, build command `npm run build`, output folder `dist`.
- Any host: run `npm run build` and upload the `dist` folder.
