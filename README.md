# Personal Portfolio - Vipan Sharma

A modern, dark-themed personal portfolio website showcasing projects, skills, and professional experience. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

[View Portfolio](your-portfolio-url.com)

## 📋 Table of Contents

- [Project Structure](#project-structure)
- [UI Patterns & Design System](#ui-patterns--design-system)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)

## 📁 Project Structure

```
personal-portfolio/
├── public/                     # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   └── app/                    # Next.js App Router
│       ├── globals.css         # Global styles & Tailwind imports
│       ├── layout.tsx          # Root layout component
│       ├── page.tsx            # Home page component
│       └── favicon.ico
├── package.json                # Dependencies and scripts
├── next.config.ts              # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── postcss.config.mjs         # PostCSS configuration
└── README.md                  # Project documentation
```

## 🎨 UI Patterns & Design System

### Color Scheme
- **Primary Background**: Dark theme with deep black/charcoal backgrounds
- **Secondary Background**: Subtle gray cards and sections
- **Accent Color**: Bright lime green (#CCFF00) for CTAs and highlights
- **Text Colors**: 
  - Primary: White/light gray for headings
  - Secondary: Medium gray for body text
  - Muted: Darker gray for labels

### Typography
- **Headings**: Bold, large sans-serif fonts with high contrast
- **Body Text**: Clean, readable sans-serif with medium weight
- **Hierarchy**: Clear size differentiation between H1, H2, H3, and body text

### Layout Patterns

#### 1. Hero Section
- **Pattern**: Split layout with text on left, image on right
- **Elements**: 
  - Large headline with name introduction
  - Brief description/tagline
  - Primary CTA button (lime green)
  - Social media links (LinkedIn, GitHub)
  - Professional headshot with rounded corners

#### 2. Featured Projects Section
- **Pattern**: Grid layout with project cards
- **Card Structure**:
  - Project thumbnail/mockup image
  - Project title and brief description
  - Technology stack tags
  - Project metadata (role, year, client)
  - Action buttons ("Live Demo", "See Details")
- **Projects Showcased**:
  - Promotional landing page
  - Blog site for World News
  - E-commerce product page

#### 3. About Me Section
- **Pattern**: Text-focused section with personal narrative
- **Elements**:
  - Section heading
  - Multi-paragraph personal story
  - Professional background highlights
  - "More About Me" CTA link

#### 4. Contact Section
- **Pattern**: Contact form with social links
- **Elements**:
  - Contact form with fields (Name, Email, Subject, Message)
  - Primary contact email display
  - Social media links grid
  - Submit button (lime green accent)

### Component Patterns

#### Buttons
- **Primary**: Lime green background with dark text
- **Secondary**: Outlined style with lime green border
- **Hover States**: Subtle transitions and color shifts

#### Cards
- **Style**: Dark background with subtle borders
- **Shadow**: Minimal shadow for depth
- **Spacing**: Consistent padding and margins
- **Images**: Rounded corners, proper aspect ratios

#### Navigation
- **Style**: Clean, minimal top navigation
- **Logo**: Name in bold typography
- **Menu Items**: Simple text links (Work, About, Contact)

#### Form Elements
- **Style**: Dark theme form inputs
- **Focus States**: Lime green accent borders
- **Labels**: Clear, accessible labeling

### Responsive Design Patterns
- **Mobile-First**: Responsive grid system
- **Breakpoints**: Standard responsive breakpoints
- **Stack Pattern**: Elements stack vertically on mobile
- **Touch-Friendly**: Adequate button sizes for mobile interaction

## ✨ Features

- **Modern Design**: Clean, professional dark theme
- **Responsive Layout**: Optimized for all device sizes
- **Project Showcase**: Interactive project gallery with detailed views
- **Contact Form**: Functional contact form for inquiries
- **Social Integration**: Links to professional social profiles
- **Performance Optimized**: Built with Next.js for optimal loading speeds
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠 Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Runtime**: React 19
- **Build Tool**: Turbopack (Next.js bundler)
- **Development**: Hot Module Replacement (HMR)

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/personal-portfolio.git
cd personal-portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server

### Development Guidelines

1. **Component Structure**: Create reusable components in appropriate directories
2. **Styling**: Use Tailwind CSS classes following the design system
3. **TypeScript**: Maintain type safety throughout the application
4. **Performance**: Optimize images and implement lazy loading where appropriate

## 🚀 Deployment

The portfolio is optimized for deployment on platforms like:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **DigitalOcean App Platform**

### Build Command
```bash
npm run build
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

Vipan Sharma - [vipansharma.dev@gmail.com](mailto:vipansharma.dev@gmail.com)

Project Link: [https://github.com/vipinshrma/personal-portfolio](https://github.com/vipinshrma/personal-portfolio)

---

*Built with ❤️ using Next.js and Tailwind CSS*
# personal-portfolio
