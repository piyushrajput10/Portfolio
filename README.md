# Piyush Rajput — Portfolio

A modern, dark-themed developer portfolio built with **React 18**, **TypeScript**, and **Tailwind CSS**.

## ✨ Features

- ⚡ Vite for blazing-fast dev & build
- 🎨 Custom Tailwind design system (colors, fonts, animations)
- 🔤 Typewriter hero with role cycling
- 🖱️ Custom cursor with ring hover effect
- 📜 Scroll-triggered fade-up animations (IntersectionObserver)
- 🗂️ Tabbed experience section with timeline strip
- 📱 Fully responsive (mobile hamburger menu)
- 🌙 Dark theme with grain overlay & glow blobs
- 📮 Contact form (opens native mail client)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── types/        TypeScript interfaces
├── data/         All portfolio content (edit here!)
├── hooks/        useScrollAnimation, useActiveSection
├── components/   Navbar, FadeUp wrapper
├── sections/     Hero, About, Experience, Projects, Contact, Footer
├── App.tsx       Root component
├── main.tsx      Entry point
└── index.css     Tailwind + custom component classes
```

## ✏️ Customisation

All content lives in **`src/data/index.ts`** — update your:
- Stats, skill groups
- Experience entries (role, company, bullets, tags)
- Projects (title, description, features, stack)
- Contact links


## 🎨 Design System

| Token | Value |
|---|---|
| Primary font | Syne (display) |
| Body font | DM Sans |
| Mono font | DM Mono |
| Accent | `#00e5a0` |
| Background | `#07090d` |
| Surface | `#111820` |
