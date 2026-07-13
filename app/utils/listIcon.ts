export type IconCategory = "frontend" | "backend" | "database" | "cloud" | "devtool";

export interface IconItem {
  id: number;
  name: string;
  svg: string;
  color: string;
  category: IconCategory;
}

export const listIcon: IconItem[] = [
  { id: 1,  name: "HTML",        svg: "/icons/html5.svg",       color: "#E34F26", category: "frontend" },
  { id: 2,  name: "CSS",         svg: "/icons/css.svg",         color: "#1572B6", category: "frontend" },
  { id: 3,  name: "JavaScript",  svg: "/icons/javascript.svg",  color: "#F7DF1E", category: "frontend" },
  { id: 6,  name: "TypeScript",  svg: "/icons/typescript.svg",  color: "#3178C6", category: "frontend" },
  { id: 4,  name: "React",       svg: "/icons/react.svg",       color: "#61DAFB", category: "frontend" },
  { id: 8,  name: "Next.js",      svg: "/icons/nextjs.svg",      color: "var(--text-primary)", category: "frontend" },
  { id: 7,  name: "TailwindCSS", svg: "/icons/tailwindcss.svg", color: "#38B2AC", category: "frontend" },
  { id: 5,  name: "NodeJS",      svg: "/icons/nodejs.svg",      color: "#339933", category: "backend"  },
  { id: 11, name: "Express.js",  svg: "/icons/expressjs.png",   color: "var(--text-secondary)", category: "backend"  },
  { id: 15, name: "Go",          svg: "/icons/go.svg",          color: "#00ADD8", category: "backend"  },
  { id: 12, name: "MySQL",       svg: "/icons/mysql.svg",       color: "#4479A1", category: "database" },
  { id: 13, name: "Docker",      svg: "/icons/docker.svg",      color: "#2496ED", category: "cloud"    },
  { id: 9,  name: "Git",         svg: "/icons/git.svg",         color: "#F05032", category: "devtool"  },
  { id: 10, name: "Postman",     svg: "/icons/postman.svg",     color: "#FF6C37", category: "devtool"  },
  { id: 14, name: "VS Code",     svg: "/icons/vscode.svg",      color: "#007ACC", category: "devtool"  },
  { id: 16, name: "Google Cloud Platform", svg: "/icons/gcp.png", color: "#4285F4", category: "cloud" },
  { id: 17, name: "PostgreSQL", svg: "/icons/postgresql.webp", color: "#336791", category: "database" },
  { id: 18, name: "MaterialUI", svg: "/icons/materialui.svg", color: "#0081CB", category: "frontend" },
  { id: 19, name: "DBeaver", svg: "/icons/dbeaver.svg", color: "#4C4C4C", category: "devtool" },
  { id: 20, name: "Vercel", svg: "/icons/vercel.png", color: "#000000", category: "cloud" },
  { id: 21, name: "Fiber", svg: "/icons/fiber.png", color: "#00C1D4", category: "backend" },
  { id: 22, name: "TanStack Query", svg: "/icons/tanstackquery.png", color: "#FF4154", category: "frontend" },
  { id: 23, name: "Redis", svg: "/icons/redis.png", color: "#DC382D", category: "backend" },
  { id: 24, name: "Gin", svg: "/icons/gin.png", color: "#00C1D4", category: "backend" },
  { id: 25, name: "Supabase", svg: "/icons/supabase.png", color: "#3ECF8E", category: "backend" },
  { id: 26, name: "TanStack Table", svg: "/icons/tanstackquery.png", color: "#FF4154", category: "frontend" },
  { id: 27, name: "Firebase", svg: "/icons/firebase.png", color: "#FFCA28", category: "backend" },
];
