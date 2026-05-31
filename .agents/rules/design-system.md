# Cyber Minimalist Design System Rules

This rule defines the design system tokens, typography, and constraints for the **Cyber Minimalist** layout used throughout the portfolio revamp. Always adhere to these specifications when generating, editing, or styling components.

---

## 1. Design System DNA

- **Theme**: Dark Mode first, technical, premium developer aesthetic.
- **Core Principle**: Extreme contrast, clean structural grids, glassmorphism overlays, and neon cyan accents.

---

## 2. Color Palette (HEX & HSL Mappings)

When editing styling, map these colors using Tailwind utility classes or custom CSS variables:

| Color Token | Hex Code | Tailwind / CSS Mapping | Role |
| :--- | :--- | :--- | :--- |
| **Background (Base)** | `#020617` | `bg-[#020617]` | Main viewport background |
| **Background (Surface)**| `#0b1326` | `bg-[#0b1326]` | Secondary layout background |
| **Primary (Bright)** | `#dbfcff` | `text-[#dbfcff]` | Main primary text highlight |
| **Primary Accent** | `#00f0ff` | `text-[#00f0ff]` / `bg-[#00f0ff]` | Interactive elements, glows, active tags |
| **Primary fixed-dim** | `#00dbe9` | `text-[#00dbe9]` | Cyan details, icon highlights |
| **Secondary (Muted)** | `#d1bcff` | `text-[#d1bcff]` | Secondary details, accents |
| **On-Surface (Text)** | `#dae2fd` | `text-[#dae2fd]` | Default text color (high readability) |
| **On-Surface Muted** | `#b9cacb` | `text-[#b9cacb]` | Secondary text / descriptions |
| **Glass Background** | `rgba(30, 41, 59, 0.5)` | `bg-glass-bg` / `bg-slate-800/50` | Cards and navigation bar base |
| **Glass Border** | `rgba(255, 255, 255, 0.1)`| `border-glass-border` | Subtle thin borders for panels |
| **Minimalist Border** | `#1E293B` | `border-[#1E293B]` | Panel divide lines, bento grids |

---

## 3. Typography Hierarchy

Use these font classes and styles to maintain typography structure:

- **Headlines / Titles**: `Geist` font family. Bold, heavy tracking.
- **Body Text**: `Inter` font family. Clean, highly readable line heights.
- **Technical / Stack Details**: `JetBrains Mono` font family. Monospace styling.

### Typographic Tokens:
- **`display-xl`**: `font-family: Geist; font-size: 72px; font-weight: 800; line-height: 1.1; letter-spacing: -0.04em;`
- **`display-xl-mobile`**: `font-family: Geist; font-size: 40px; font-weight: 800; line-height: 1.2;`
- **`headline-lg`**: `font-family: Geist; font-size: 32px; font-weight: 700; line-height: 1.2; letter-spacing: 0.05em;`
- **`headline-md`**: `font-family: Geist; font-size: 24px; font-weight: 600; line-height: 1.3;`
- **`body-lg`**: `font-family: Inter; font-size: 18px; font-weight: 400; line-height: 1.6;`
- **`body-md`**: `font-family: Inter; font-size: 16px; font-weight: 400; line-height: 1.5;`
- **`label-caps`**: `font-family: JetBrains Mono; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;`
- **`tech-stack`**: `font-family: JetBrains Mono; font-size: 14px; font-weight: 500; line-height: 1.4;`

---

## 4. Layout & Spacing Tokens

- **Card Padding**: `32px` (`p-8` / `p-card-padding`)
- **Gutter / Columns**: `24px` (`gap-6` / `gap-gutter`)
- **Container Max-Width**: `1200px` (`max-w-[1200px]`)
- **Section Gap (Desktop)**: `160px` (`my-40` / `mb-section-gap-desktop`)
- **Section Gap (Mobile)**: `80px` (`my-20` / `mb-section-gap-mobile`)

---

## 5. UI Components & Style Mappings

### Glassmorphism Card (`.glass-card`)
Always style cards and modules with the following classes to provide a sleek glass look:
```css
.glass-card {
  backdrop-filter: blur(12px);
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Hover Glow Effects
Buttons and interactive items should have glowing focus highlights:
- **Neon Text Glow**: `text-shadow: 0 0 20px rgba(0, 240, 255, 0.2)`
- **Button Shadow Glow**: `box-shadow: 0 0 30px rgba(0, 240, 255, 0.4)` on hover.

### Atmospheric Parallax
Animate cards with subtle mouse movement translation (Parallax translation factors of `moveX * 0.01` and `moveY * 0.01`).
