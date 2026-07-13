export interface DataItem {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  tools: string[];
  linkGithub: string;
  linkDemo: string;
}

export interface FeaturedProject {
  id: number;
  thumbnail: string;
  title: string;
  label: string;
  problemStatement: string;
  stats: { label: string; value: string }[];
  stack: string[];
  features: string[];
  links: {
    demo?: string;
    github?: string;
    backendReadme?: string;
    frontendReadme?: string;
    readme?: string;
  };
}

export const getFeaturedProjects = (): FeaturedProject[] => [
  {
    id: 1,
    thumbnail: "/images/seismic.png",
    title: "Indonesia Seismic Monitor",
    label: "Solo Fullstack Project",
    problemStatement:
      "A real-time dashboard for monitoring seismic activity across Indonesia — combining live BMKG data with 6 months of USGS historical data to calculate a seismicity index per province.",
    stats: [
      { label: "REST API endpoints", value: "2" },
      { label: "Provinces mapped", value: "38" },
      { label: "Live data sources", value: "2" },
      { label: "Auto-refresh", value: "2 min" },
    ],
    stack: ["Go 1.22", "Fiber v2", "Next.js 16", "TypeScript", "TailwindCSS v4", "TanStack Query", "react-leaflet", "Vercel", "Docker"],
    features: [
      "Interactive map with earthquake markers colored by magnitude, with dark/light tile switching",
      "Data pipeline: fetch BMKG (XML) + USGS (GeoJSON) → map coordinates to province → calculate seismicity index → serve via API",
      "Dark/light mode with system preference detection",
    ],
    links: {
      demo: "https://indonesia-seismic-monitor.vercel.app/",
      github: "https://github.com/izzahnin/indonesia-seismic-monitor",
      readme: "https://github.com/izzahnin/indonesia-seismic-monitor/blob/main/README.md",
    },
  },
  {
    id: 2,
    thumbnail: "/images/jbfleet.png",
    title: "Fleet Management System",
    label: "Independent Project — Client Work",
    problemStatement:
      "A production-ready fleet and logistics management system built from scratch for a container freight company in Makassar — featuring real-time GPS tracking, 4-level RBAC, and a public order tracking page for customers.",
    stats: [
      { label: "REST API endpoints", value: "36" },
      { label: "Admin pages", value: "8" },
      { label: "Role levels (RBAC)", value: "4" },
      { label: "DB tables", value: "7" },
    ],
    stack: ["Go 1.25", "Gin v1.12", "Next.js 16", "TypeScript", "TailwindCSS v4", "PostgreSQL", "Redis", "TanStack Table", "react-leaflet", "Docker", "Supabase", "Vercel"],
    features: [
      "Real-time GPS tracking via checkpoint system — Redis-cached latest position, polyline history on map, and a public order tracking page requiring no login",
      "RBAC with 4 roles (super_admin, admin_sales, admin_ops, demo), rate-limited login (10 req/60s per IP), and demo read-only mode enforced at the backend level",
      "Clean Architecture: Handler → Usecase → Repository — deployed across Vercel + Render + Supabase + Upstash with Docker Compose for local dev",
    ],
    links: {
      demo: "https://jalurberlian.vercel.app",
      github: "https://github.com/izzahnin/jalur-berlian",
      readme: "https://github.com/izzahnin/jalur-berlian/blob/main/README.md"
    },
  },
];

export const getOtherProjects = (): DataItem[] => [
  {
    id: 1,
    thumbnail: "/images/elixir.png",
    title: "Elixir Perfume E-Commerce",
    description: "Full-stack e-commerce platform for luxury perfumes, built as a team project for an Information Systems course. Covers product catalog, shopping cart, user authentication, and API integration.",
    tools: ["Next.js", "TypeScript", "API Integration"],
    linkGithub: "https://github.com/izzahnin/elixir-perfume",
    linkDemo: "https://elixir-perfume.vercel.app/",
  },
  {
    id: 2,
    thumbnail: "/images/sigap.png",
    title: "SIGAP PSU Makassar",
    description: "Company profile website for SIGAP PSU Makassar, focused on responsive design and clean information architecture for a government-affiliated housing service.",
    tools: ["Next.js", "TypeScript", "MaterialUI", "Firebase"],
    linkGithub: "https://github.com/izzahnin/sigap-psu-makassar",
    linkDemo: "https://sigappsumakassar.vercel.app/",
  },
  {
    id: 3,
    thumbnail: "/images/lamacca.png",
    title: "Lamacca Monopoli",
    description: "A QR-code based digital monopoly board game built for a PKM-PM research project, with real-time gameplay and an interactive UI designed to modernize a traditional board game.",
    tools: ["React", "JavaScript", "TailwindCSS", "QR Code API"],
    linkGithub: "https://github.com/izzahnin/lamacca-monopoli",
    linkDemo: "https://lamacca-monopoli.vercel.app/",
  },
  {
    id: 4,
    thumbnail: "/images/thumbnail-note.jpeg",
    title: "Note App",
    description: "A note-taking app with create, edit, search, and delete functionality, with persistent storage — built to practice clean state management in React.",
    tools: ["React", "TypeScript", "TailwindCSS", "Local Storage"],
    linkGithub: "https://github.com/izzahnin/notes-app",
    linkDemo: "https://note-app-izzahnin.vercel.app/",
  },
  {
    id: 5,
    thumbnail: "/images/thumbnail-bookshelf.jpeg",
    title: "BookShelf App",
    description: "A digital bookshelf for managing reading lists — add, search, and archive books — built with vanilla JavaScript to practice core DOM manipulation without a framework.",
    tools: ["HTML", "CSS", "JavaScript", "Local Storage"],
    linkGithub: "https://github.com/izzahnin/bookshelf-apps",
    linkDemo: "https://izzahnin.github.io/bookshelf-apps/",
  },
  {
    id: 6,
    thumbnail: "/images/jb.png",
    title: "Jalur Berlian — Company Profile",
    description: "An early company profile site for a freight and logistics company in Makassar — the first engagement with this client, later followed by the full-stack Fleet Management System.",
    tools: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com/izzahnin/jalurberlian",
    linkDemo: "https://izzahnin.github.io/jalurberlian/",
  },
  {
    id: 7,
    thumbnail: "/images/gsp.png",
    title: "PT. Ghaisan Putra Perkasa",
    description: "A company profile website for a logistics and freight forwarding company, focused on presenting company services clearly to prospective clients.",
    tools: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com/izzahnin/ghaisanputraperkasa",
    linkDemo: "https://izzahnin.github.io/ghaisanputraperkasa/",
  },
];

export const getAllData = getOtherProjects;
