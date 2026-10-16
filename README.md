# CampusPe — Unified Campus Ecosystem

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](#)

A pixel-perfect, responsive frontend web application for **CampusPe**, built using **Next.js (App Router)** and **Tailwind CSS**. CampusPe connects students, colleges, and employers in a unified digital ecosystem featuring opportunity matching, resume analysis, institutional discovery, and mobile app previews.

---

## Highlights & Features

### 1. Landing & Discovery (`Hero.jsx`)
- Dynamic metrics banner featuring student, college, job, and recruiter counters.
- Interactive category exploration pills (Colleges, Jobs, Internships, Freelance).
- High-impact visuals with custom vector illustrations and responsive typography.

### 2. Opportunity Discovery Feed (`OpportunitySection.jsx`)
- Interactive, multi-category live feed for exploring Colleges, Internships, and Gigs.
- Real-time tab filtering with badge annotations (e.g., Top College, Stipend/Fees, Location).
- Verified company and institution badges with responsive action buttons.

### 3. AI Resume Intelligence (`ResumeSection.jsx`)
- Drag-and-drop resume upload zone with file-type validations (`.pdf`, `.doc`, `.docx`).
- Floating compliance badges: **98% Match Rate** and **ATS Compliant** with ambient backdrop glows.
- Visual 4-step analysis pipeline connecting *Resume Analyzed*, *Skills Matched*, *Experience Matched*, and *Sources Searched*.

### 4. Institutional Portals (`CollegesSection.jsx` & `EmployersSection.jsx`)
- **Colleges Portal**: Feature cards highlighting verified profiles (`NAAC A++ Ready`, `98% Match`), direct enquiries (`WhatsApp / Chat`), campus hiring, and placement HUDs.
- **Employers Portal**: Fast-track role posting and hiring talent network with zero travel overhead.
- Two-column responsive layouts aligned with the desktop design specifications.

### 5. Interactive Mobile App Showcase (`AppShowcase.jsx`)
- Custom 3D coverflow carousel rendering multi-perspective mobile app screens.
- Smooth transition physics with touch swipe gesture support and pagination dot controls.
- Store conversion banner with links for Google Play and App Store.

### 6. Support & Community (`SupportSection.jsx` & `Footer.jsx`)
- Helpdesk and knowledge-base cards for students, admission teams, and corporate partners.
- Clean footer with structured navigation, social channels, and legal links.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Typography** | [Inter](https://fonts.google.com/specimen/Inter) via `next/font` |
| **Icons & Assets** | Custom inline SVGs & brand assets |

---

## Project Structure

```text
assignment/
├── public/                 # Static assets (logos, mobile previews, badges, SVGs)
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles & Tailwind CSS v4 directives
│   │   ├── layout.js       # Root layout with Inter font optimization & SEO metadata
│   │   └── page.js         # Main landing page assembling sections
│   └── components/
│       ├── Navbar.jsx              # Responsive header navigation
│       ├── Hero.jsx                # Landing hero with metrics & tags
│       ├── OpportunitySection.jsx  # Interactive opportunity feed & filters
│       ├── OpportunityIcons.jsx    # SVG icons & institution logos
│       ├── ResumeSection.jsx       # Resume upload dropzone & pipeline cards
│       ├── CollegesSection.jsx     # Institutional discovery feature cards
│       ├── EmployersSection.jsx    # Recruiter & hiring portal cards
│       ├── AppShowcase.jsx         # 3D mobile phone coverflow carousel
│       ├── SupportSection.jsx      # Help desk & query cards
│       └── Footer.jsx              # Footer links, brand info & social links
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js 18.17+ or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/campuspe-assignment.git
   cd campuspe-assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Scripts

- `npm run dev` — Starts the Next.js development server with Turbopack.
- `npm run build` — Compiles the production-ready bundle.
- `npm run start` — Runs the compiled production build locally.
- `npm run lint` — Runs ESLint across all codebase files.

---

## Deployment

The project is optimized for deployment on the [Vercel Platform](https://vercel.com):

1. Push your code to a GitHub repository.
2. Import the project in Vercel.
3. The framework preset will automatically detect **Next.js**.
4. Click **Deploy**.
