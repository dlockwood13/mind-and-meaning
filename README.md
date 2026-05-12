# Mind & Meaning

A psychology and philosophy learning app for structured curriculum, reflective practice, journaling, and conceptual self-inquiry.

## Curriculum

The app now includes a 69-lesson curriculum architecture:

- **Psychology — 24 lessons**: cognitive biases, heuristics, memory distortion, emotion, habit formation, behavioural change, personality paradigms, and mental models.
- **Philosophy — 31 lessons**: epistemology, formal logic, moral philosophy, metaethics, Hellenistic schools, existentialism, oppression, freedom, and meaning.
- **Reflection Practice — 14 lessons**: DEAL reflection, Schön's reflection-in-action/reflection-on-action, guided journaling, perspective shifting, and thought experiments.

## Features

- Curriculum architecture screen
- Psychology, philosophy, and reflection modules
- Mental models toolkit
- Thought experiment prompts
- DEAL-based journal interface
- Concept search
- Saved reflections
- GitHub Pages deployment workflow

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

This project includes `.github/workflows/deploy.yml` for GitHub Pages deployment.

For a user/organisation site like:

```text
https://dlockwood13.github.io/
```

use this in `vite.config.js`:

```js
base: "/"
```

For a project site like:

```text
https://dlockwood13.github.io/mind-and-meaning/
```

use:

```js
base: "/mind-and-meaning/"
```
