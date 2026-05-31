# ANTIGRAVITY Context & Guidelines

Welcome to the **Personal Portfolio** codebase. This document outlines the key details, tech stack, codebase structure, commands, and development practices you need to know to effectively assist in maintaining and extending this project.

---

## 1. Project Overview & Tech Stack

This project is a premium personal portfolio website. It is designed with modern aesthetics, animations, and custom interactions.

- **Framework**: [Next.js 15.5.4](https://nextjs.org/) (App Router, utilizing Turbopack)
- **Library**: [React 19.1.0](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using `@tailwindcss/postcss` configuration)
- **Animations**: [Framer Motion v12](https://www.framer.com/motion/)
- **Smooth Scrolling**: [Lenis Scroll v1.3](https://lenis.darkroom.engineering/)
- **Other Utilities**:
  - Theme switching: `next-themes` (Default: Dark Mode)
  - Layout utils: `clsx` and `tailwind-merge`
  - Feedback/Toasts: `react-hot-toast`
  - Icons: `react-icons`
  - Marquees: `react-fast-marquee` and custom components

---

## 2. Essential Commands

Use these commands for installation, running local development, or building the project:

- **Install dependencies**:
  ```bash
  npm install
  ```
- **Start development server** (uses Next.js Turbopack):
  ```bash
  npm run dev
  ```
- **Build production app**:
  ```bash
  npm run build
  ```
- **Start production server** (post-build):
  ```bash
  npm run start
  ```

---

## 3. Directory Structure

```
personal-portfolio/
├── CLAUDE.md              # Claude's high-level guidelines
├── ANTIGRAVITY.md         # This instructions file
├── package.json           # Project dependencies & scripts
├── tailwind.config.js     # Tailwind configurations (if any) or Next/PostCSS configurations
├── public/                # Static assets (images, icons, resumes, etc.)
└── src/
    ├── app/               # Next.js App Router (pages and global setup)
    │   ├── globals.css    # Global Tailwind styles, variables (HSL theme tokens)
    │   ├── layout.tsx     # Root HTML layout, ThemeProvider, LenisScroll, Toaster, Navigation, Footer
    │   ├── page.tsx       # Landing Home page mapping components (Hero, TechMarquee, FeaturedProjects, AboutMe, Contact)
    │   ├── about/         # /about page route
    │   ├── contact/       # /contact page route
    │   └── work/          # /work page route
    ├── components/        # React components (broken down for maintainability)
    │   ├── ui/            # Reusable core visual components (e.g. 3d-card, marquee, text-generate-effect)
    │   ├── Hero.tsx       # Portfolio hero section
    │   ├── Navigation.tsx # Global sticky navbar with routing links
    │   ├── Footer.tsx     # Global footer
    │   └── ...            # Theme toggle, layout wrapper, sections, etc.
    └── lib/
        └── utils.ts       # Shared helper utilities (e.g., cn wrapper for tailwind-merge + clsx)
```

---

## 4. Architectural & Coding Best Practices

To maintain visual excellence and code quality, please adhere to the following rules:

### Component Decomposition
- **Avoid bloated files**: Do not pack massive nested JSX trees into a single file. Break down complex pages and sections into smaller, logical sub-components.
- Use auxiliary files within components or local sub-folders if they serve a single section (e.g., breakdown card groups, custom grids).

### Styling & Theme System
- **Design System Compliance**: Always adhere to the project's **Cyber Minimalist** design system. Core rules are codified in [.agents/rules/design-system.md](file:///Users/vipan/Desktop/projects/personal-portfolio/.agents/rules/design-system.md).
- **Use HSL Variables**: The theme uses custom Tailwind HSL-based tokens. Apply styles using variables mapped in `globals.css` (e.g., `bg-background`, `text-foreground`, `border-border`, `bg-card`).
- **Dark Mode First**: Support dark mode by default (`defaultTheme="dark"`). Test component contrast in both states using classes like `dark:text-white`.
- **Aesthetic standard**: Ensure layouts feel premium, interactive, and utilize micro-animations (Framer Motion hover/entry transitions) and smooth scroll alignment.

### Next.js & React 19 Rules
- **Server Components by Default**: By default, components in `src/app/` are Server Components.
- **Client Components**: Prefix components with `"use client"` **only** if they require React state, event listeners, effects (`useEffect`), or third-party client hooks (Framer Motion, Lenis scroll, Theme Provider, Toast triggers, custom context).
- **Imports**: Prefer relative imports for components (`../components/X`) or configure path aliases if needed.

### TypeScript Usage
- Maintain high TypeScript safety. Always type component props, function returns, and event handlers.
- Avoid the use of `any` types. Let compiler infer types where safe, or use explicit Interfaces/Types.
