# Ganesh J — Premium Personal Developer Portfolio

A modern, high-performance, responsive personal developer portfolio website designed and architected for **Ganesh J** (B.Tech Information Technology Graduate & Full-Stack Developer specializing in React.js, Node.js, Express.js, JavaScript, Python, MySQL, and PostgreSQL).

Built with **React**, **Vite**, **Framer Motion**, and **Lucide Icons** following strict production UI/UX design standards.

---

## 🌟 Key Highlights & Design Direction

- **Professional Dark Theme**: Deep navy/slate-black background with electric blue and violet glowing accents.
- **Data-Driven Architecture**: All portfolio sections (projects, skills, career history, education, certifications, and contact) are separated from the presentation layer and driven by centralized JavaScript data files.
- **Zero-Friction Extensibility**: Adding new projects or experiences is as simple as adding an object into `src/data/projects.js` without touching React components.
- **Responsive Layout**: Designed and verified across Mobile (320px–767px), Tablet (768px–1023px), Laptop (1024px–1439px), and Desktop (1440px+).
- **Recruiter & Interviewer Focused**: Clear metrics (e.g., 35% query optimization, 10+ REST APIs, 1,000+ students supported, 8.1 CGPA), verified role-based access control (RBAC) achievements, and real code demonstrations.
- **Accessible & SEO Ready**: Semantic HTML5 tags, Open Graph meta tags, descriptive alt attributes, keyboard focus states, and support for `prefers-reduced-motion`.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18.3+ |
| **Bundler & Build Tool** | Vite 5+ |
| **Icons** | Lucide React |
| **Motion & Transitions** | Framer Motion & CSS Hardware Accelerated Transforms |
| **Styling** | Modern CSS3 (Variables, Flexbox, CSS Grid, Glassmorphism) |
| **Contact Integration** | Formatted direct `mailto:` protocol & clipboard copy |

---

## 📁 Project Architecture

```
MY PORTFOLIO/
├── public/
│   ├── favicon.svg                   # Custom monogram vector favicon
│   ├── images/
│   │   ├── avatar.svg                # Stylized profile image
│   │   ├── project-booking.svg       # Party Decoration Booking Mockup
│   │   ├── project-portal.svg        # Exam Result Publishing Mockup
│   │   └── project-ai.svg            # Pandemic AI Mortality Mockup
│   └── resume/
│       └── Ganesh_J_Resume.pdf       # Downloadable resume document
│
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── animations/
│   │   │   └── Reveal.jsx            # Scroll-triggered viewport animations
│   │   ├── common/
│   │   │   ├── Button.jsx            # Reusable polymorphic button (links/actions)
│   │   │   ├── Button.css
│   │   │   ├── Navbar.jsx            # Sticky navigation with active scrollspy
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.jsx            # Footer with dynamic year & back-to-top
│   │   │   ├── Footer.css
│   │   │   ├── SectionTitle.jsx      # Standardized section header badge + title
│   │   │   ├── SectionTitle.css
│   │   │   ├── SocialLinks.jsx       # Reusable social profile links
│   │   │   └── SocialLinks.css
│   │   └── layout/
│   │       └── MainLayout.jsx        # App layout wrapper
│   │
│   ├── data/
│   │   ├── personalInfo.js           # Bio, stats, socials, and contact details
│   │   ├── navigation.js             # Navigation anchors
│   │   ├── skills.js                 # Grouped technical skill categories
│   │   ├── experience.js             # Professional internships and achievements
│   │   ├── projects.js               # Dynamic project showcase array
│   │   ├── education.js              # Academic degrees and coursework
│   │   └── certifications.js         # Verified training and certifications
│   │
│   ├── hooks/
│   │   └── useActiveSection.js       # Intersection observer scrollspy hook
│   │
│   ├── sections/
│   │   ├── Hero.jsx & Hero.css       # First-screen hero with CTA & avatar
│   │   ├── About.jsx & About.css     # Narrative, stats & architecture pillars
│   │   ├── Skills.jsx & Skills.css   # Categorized skills matrix (no fake bars)
│   │   ├── Experience.jsx & .css     # Interactive vertical career timeline
│   │   ├── Projects.jsx & .css       # Project cards + Interactive detail modal
│   │   ├── Education.jsx & .css      # Degree & institutional highlights
│   │   ├── Certifications.jsx & .css # Professional credential cards
│   │   └── Contact.jsx & .css        # Validated message form & direct info
│   │
│   ├── styles/
│   │   ├── variables.css             # Color tokens, fonts, spacing, shadows
│   │   ├── animations.css            # Ambient pulses, keyframes, reduced-motion
│   │   ├── responsive.css            # Breakpoint queries for mobile/tablet/laptop
│   │   └── global.css                # Global resets, typography, scrollbar
│   │
│   ├── utils/
│   │   └── helpers.js                # Smooth scroll & date helpers
│   │
│   ├── App.jsx                       # Top-level composition
│   └── main.jsx                      # DOM mount
│
├── index.html                        # Semantic HTML5 root with SEO metadata
├── vite.config.js                    # Vite configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` (included with Node.js)

### 1. Installation

Clone or open the repository folder, then install dependencies:

```bash
npm install
```

### 2. Start Development Server

Run the local Vite development server:

```bash
npm run dev
```

Visit the displayed local URL (typically `http://localhost:3000` or `http://localhost:5173`) in your web browser.

### 3. Build for Production

To create an optimized, minified production build:

```bash
npm run build
```

The output will be generated inside the `dist/` directory, ready to be hosted on any static hosting provider.

### 4. Preview Production Build Locally

```bash
npm run preview
```

---

## 🔧 How to Manage & Customize Content

All content is decoupled from JSX code. You never have to touch component markup to update your information.

### 1. Adding or Modifying Projects (`src/data/projects.js`)

Add a new object to the `projects` array:

```javascript
{
  id: 4,
  title: "E-Commerce Microservices",
  category: "Full Stack Architecture",
  subtitle: "High-scale order processing engine",
  description: "Brief summary visible on the main card",
  fullDescription: "Detailed architecture overview displayed in the interactive modal",
  technologies: ["React", "Node.js", "Docker", "PostgreSQL"],
  highlights: [
    "Implemented asynchronous message queue with RabbitMQ",
    "Stripe webhook payment processing with idempotency keys"
  ],
  image: "/images/project-ecommerce.png", // Place image in public/images/
  github: "https://github.com/ganesh-j/ecommerce", // Leave empty string "" to hide button
  liveDemo: "https://ecommerce.demo.com",          // Leave empty string "" to hide button
  featured: true
}
```

> **Note**: If `github` or `liveDemo` is empty (`""`), the corresponding button is automatically omitted from the card.

### 2. Updating Skills (`src/data/skills.js`)

Add or adjust items under any category in `skillCategories`:

```javascript
{
  name: "Docker",
  level: "Proficient",
  icon: "Box" // Any Lucide icon name mapped in Skills.jsx
}
```

### 3. Updating Work Experience (`src/data/experience.js`)

Edit or add timeline items in the `experiences` array. Fields include `role`, `company`, `location`, `period`, `responsibilities`, and `technologies`.

### 4. Updating Personal Info & Contact (`src/data/personalInfo.js`)

Change your name, role, email address, phone number, location, and social links in `src/data/personalInfo.js`. All navbar links, hero buttons, footer links, and contact channels update automatically across the site.

### 5. Replacing the Resume PDF

Replace the file located at:
```
public/resume/Ganesh_J_Resume.pdf
```
Ensure your updated PDF matches the filename `Ganesh_J_Resume.pdf`, or change the `resumeUrl` path in `src/data/personalInfo.js`.

---

## 🌐 Deployment Guide

### Option A: Deploy to Vercel (Recommended)

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com).
3. Click **"Add New Project"** and import your GitHub repository.
4. Vercel automatically detects **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your portfolio will be live in under 1 minute with automatic SSL.

### Option B: Deploy to Netlify

1. Sign in to [Netlify](https://netlify.com).
2. Click **"Add new site"** → **"Import an existing project"**.
3. Select your GitHub repository.
4. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy site"**.

---

## 📄 License

This portfolio codebase is proprietary and crafted for **Ganesh J**. Open for personal portfolio reference and modification.
