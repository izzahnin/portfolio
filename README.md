# Portfolio - Nurul Izzah Nurhidayat

Personal portfolio for Nurul Izzah Nurhidayat, an Informatics Engineering graduate focused on full-stack web development.

The site highlights my background, practical experience, technology stack, selected full-stack projects, and contact information for developer opportunities.

## Features

- App Router implementation with Next.js 14
- Static homepage optimized for portfolio content
- Responsive layout for desktop, tablet, and mobile screens
- Light and dark theme support with client-side preference persistence
- Focused sections for hero, about, stack, experience, projects, and contact
- Project data stored locally for simple maintenance and static rendering

## Tech Stack

- **Framework**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: React Icons and local technology icons
- **Deployment**: Vercel

## Project Structure

```text
portfolio/
|-- app/
|   |-- (pages)/
|   |   |-- layout.tsx
|   |   `-- page.tsx
|   |-- components/
|   |   |-- Hero.tsx
|   |   |-- SectionAbout.tsx
|   |   |-- SectionHighlights.tsx
|   |   |-- SectionExperience.tsx
|   |   |-- SectionProjects.tsx
|   |   |-- SectionContact.tsx
|   |   `-- Navbar.tsx
|   |-- data/
|   |   `-- index.ts
|   |-- utils/
|   |   `-- listIcon.ts
|   `-- globals.css
|-- public/
|   |-- icons/
|   |-- images/
|   `-- Nurul_Izzah_Nurhidayat-CV.pdf
`-- package.json
```

## Sections

- **Hero**: Short introduction, role focus, primary links, and core stack markers.
- **About**: Background summary, profile facts, and CV download.
- **Stack**: Technologies grouped by frontend, backend, database, cloud, and tools.
- **Experience**: Internship and Bangkit Academy capstone experience.
- **Projects**: Featured full-stack projects and additional selected work.
- **Contact**: Email, location, availability, GitHub, and LinkedIn links.

## Featured Projects

- **Indonesia Seismic Monitor**: Real-time seismic dashboard combining BMKG and USGS data.
- **Fleet Management System**: Independent fleet and logistics case study with GPS tracking, RBAC, and order tracking.
- **NinURL URL Shortener**: Full-stack URL shortener with Redis caching and analytics.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Build for production:

```bash
npm run build
```

## Contact

**Nurul Izzah Nurhidayat**  
Full-stack Developer  
Makassar, Indonesia

- Email: cacaizzah2008@gmail.com
- GitHub: [github.com/izzahnin](https://github.com/izzahnin)
- LinkedIn: [nurul-izzah-nurhidayat](https://www.linkedin.com/in/nurul-izzah-nurhidayat-397346289/)

## Deployment

This project is deployed on Vercel.
