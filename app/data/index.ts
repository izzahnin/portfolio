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

export const profileLinks = {
  cv: "https://p8gcy8ukp8jloegc.public.blob.vercel-storage.com/cv.pdf",
};

export const getFeaturedProjects = (): FeaturedProject[] => [
  {
    id: 1,
    thumbnail: "/images/seismic.png",
    title: "Indonesia Seismic Monitor",
    label: "Solo Full-stack Project",
    problemStatement:
      "A real-time dashboard that combines live BMKG data with 6 months of USGS historical records to monitor seismic activity and calculate a province-level seismicity index.",
    stats: [
      { label: "REST API endpoints", value: "2" },
      { label: "Provinces mapped", value: "38" },
      { label: "Live data sources", value: "2" },
      { label: "Auto-refresh", value: "2 min" },
    ],
    stack: ["Go 1.22", "Fiber v2", "Next.js 16", "TypeScript", "Tailwind CSS v4", "TanStack Query", "React Leaflet", "Vercel", "Docker"],
    features: [
      "Interactive map with earthquake markers colored by magnitude, with dark/light tile switching",
      "Data pipeline: fetch BMKG (XML) + USGS (GeoJSON) -> map coordinates to province -> calculate seismicity index -> serve via API",
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
    label: "Independent Project, Realistic Case Study",
    problemStatement:
      "A self-initiated fleet and logistics management system based on a real freight workflow, covering real-time GPS tracking, role-based access control, and public order tracking for customers.",
    stats: [
      { label: "REST API endpoints", value: "36" },
      { label: "Admin pages", value: "8" },
      { label: "Role levels (RBAC)", value: "4" },
      { label: "DB tables", value: "7" },
    ],
    stack: ["Go 1.25", "Gin v1.12", "Next.js 16", "TypeScript", "Tailwind CSS v4", "PostgreSQL", "Redis", "TanStack Table", "React Leaflet", "Docker", "Supabase", "Vercel"],
    features: [
      "Real-time GPS tracking via checkpoint system, with Redis-cached latest position, polyline history on map, and a public order tracking page requiring no login",
      "RBAC with 4 roles (super_admin, admin_sales, admin_ops, demo), rate-limited login (10 req/60s per IP), and demo read-only mode enforced at the backend level",
      "Clean Architecture: Handler -> Usecase -> Repository, deployed across Vercel + Render + Supabase + Upstash with Docker Compose for local dev",
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
    thumbnail: "/images/url-shortener.png",
    title: "NinURL URL Shortener",
    description: "Full-stack URL shortener with fast redirects, Redis caching, async click tracking, custom aliases, expiry dates, and privacy-aware analytics.",
    tools: ["Next.js", "TypeScript", "Express.js", "PostgreSQL", "Prisma", "Redis"],
    linkGithub: "https://github.com/izzahnin/url-shortener",
    linkDemo: "https://ninurl.vercel.app/",
  },
  {
    id: 2,
    thumbnail: "/images/elixir.png",
    title: "Elixir Perfume E-Commerce",
    description: "Team-built e-commerce platform for a luxury perfume catalog, covering product browsing, cart flow, user authentication, and API integration.",
    tools: ["Next.js", "TypeScript", "API Integration"],
    linkGithub: "https://github.com/izzahnin/elixir-perfume",
    linkDemo: "https://elixir-perfume.vercel.app/",
  },
  {
    id: 3,
    thumbnail: "/images/sigap.png",
    title: "SIGAP PSU Makassar",
    description: "Responsive company profile website for SIGAP PSU Makassar, structured to present a government-affiliated housing service clearly.",
    tools: ["Next.js", "TypeScript", "Material UI", "Firebase"],
    linkGithub: "https://github.com/izzahnin/sigap-psu-makassar",
    linkDemo: "https://sigappsumakassar.vercel.app/",
  },
  {
    id: 4,
    thumbnail: "/images/lamacca.png",
    title: "Lamacca Monopoli",
    description: "QR-code based digital monopoly board game for a PKM-PM research project, with real-time gameplay and an interactive interface.",
    tools: ["React", "JavaScript", "Tailwind CSS", "QR Code API"],
    linkGithub: "https://github.com/izzahnin/lamacca-monopoli",
    linkDemo: "https://lamacca-monopoli.vercel.app/",
  },
  {
    id: 5,
    thumbnail: "/images/thumbnail-note.jpeg",
    title: "Note App",
    description: "Note-taking app with create, edit, search, delete, and persistent storage features, built to practice clean React state management.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Local Storage"],
    linkGithub: "https://github.com/izzahnin/notes-app",
    linkDemo: "https://note-app-izzahnin.vercel.app/",
  },
  {
    id: 6,
    thumbnail: "/images/thumbnail-bookshelf.jpeg",
    title: "Bookshelf App",
    description: "Digital bookshelf for managing reading lists, with add, search, and archive features built in vanilla JavaScript.",
    tools: ["HTML", "CSS", "JavaScript", "Local Storage"],
    linkGithub: "https://github.com/izzahnin/bookshelf-apps",
    linkDemo: "https://izzahnin.github.io/bookshelf-apps/",
  },
  {
    id: 7,
    thumbnail: "/images/jb.png",
    title: "Jalur Berlian - Company Profile",
    description: "Early paid client project for a freight and logistics company in Makassar, later inspiring the Fleet Management System case study.",
    tools: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com/izzahnin/jalurberlian",
    linkDemo: "https://izzahnin.github.io/jalurberlian/",
  },
  {
    id: 8,
    thumbnail: "/images/gsp.png",
    title: "PT. Ghaisan Putra Perkasa",
    description: "Company profile website for a logistics and freight forwarding business, designed to present services clearly to prospective clients.",
    tools: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com/izzahnin/ghaisanputraperkasa",
    linkDemo: "https://izzahnin.github.io/ghaisanputraperkasa/",
  },
];

export const getAllData = getOtherProjects;
