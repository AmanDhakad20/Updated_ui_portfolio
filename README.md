# Aman Dhakad Portfolio

An animated single-page portfolio built with React and Vite.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build in dist/
npm run preview   # preview the production build
```

Requires Node.js 18 or newer.

## Edit the content

All text (experience, skills, certifications, education, contact details) lives in `src/data.js`.
The hero text and About paragraph are in `src/components/Hero.jsx` and `src/components/About.jsx`.

## Structure

```
index.html
vite.config.js
src/
  main.jsx            entry point
  App.jsx             page layout
  data.js             all content
  hooks.js            scroll-in-view and theme hooks
  styles.css          design tokens, light and dark themes, animations
  components/
    Header.jsx        sticky nav and theme toggle
    Hero.jsx          intro, drifting colour blobs and the animated loading-bay tracker
    Typewriter.jsx    typing headline ("I build ...")
    Marquee.jsx       scrolling technology strip
    Stats.jsx         count-up stat tiles
    ScrollTruck.jsx   truck that drives along the bottom of the screen as you scroll
    Section.jsx       shared heading-rail layout (each section has its own colour)
    About.jsx
    Experience.jsx    project cards and the Angular v10 to v19 counter
    Skills.jsx        skill chips
    Certs.jsx
    Education.jsx
    Contact.jsx       copy buttons for email, phone and LinkedIn
```

## Design tokens

Colours and fonts are CSS variables at the top of `src/styles.css`. The dark theme is defined in two places
(system preference and the manual toggle), so change both blocks if you adjust dark colours.

## Deploy

`npm run build`, then upload the `dist/` folder to Netlify, Vercel, GitHub Pages or any static host.
The build uses relative paths (`base: './'`), so it works from a sub-folder too.
