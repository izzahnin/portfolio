export interface DataItem {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  tools: string[];
  linkGithub: string;
  linkDemo: string;
}

export const getAllData = (): DataItem[] => [
  {
    id: 1,
    thumbnail: "/images/lamacca.png",
    title: "Lamacca Monopoli",
    description:
      "An innovative QR-code based monopoly board game developed for PKM-PM project. Features real-time gameplay, interactive UI, and modern web technologies to create an engaging digital board game experience.",
    tools: ["React", "JavaScript", "TailwindCSS", "QR Code API"],
    linkGithub: "https://github.com/izzahnin/lamacca-monopoli",
    linkDemo: "https://lamacca-monopoli.vercel.app/",
  },
  {
    id: 3,
    thumbnail: "/images/thumbnail-note.jpeg",
    title: "Note App",
    description:
      "A comprehensive note-taking application built with React and TypeScript. Features include note creation, editing, search functionality, and local storage persistence. Submitted for Dicoding's React course with clean, responsive design.",
    tools: ["React", "TypeScript", "TailwindCSS", "Local Storage"],
    linkGithub: "https://github.com/izzahnin/notes-app",
    linkDemo: "https://note-app-izzahnin.vercel.app/",
  },
  {
    id: 4,
    thumbnail: "/images/elixir.png",
    title: "Elixir Perfume E-Commerce",
    description:
      "Full-stack e-commerce platform for luxury perfumes built as a team project for Information Systems course. Features product catalog, shopping cart, user authentication, and responsive design with modern UI/UX.",
    tools: ["NextJS", "TypeScript", "TailwindCSS", "API Integration"],
    linkGithub: "https://github.com/izzahnin/elixir-perfume",
    linkDemo: "https://elixir-perfume.vercel.app/",
  },
  {
    id: 7,
    thumbnail: "/images/sigap.png",
    title: "SIGAP PSU MAKASSAR",
    description:
      "Professional company profile website for SIGAP PSU Makassar built with Next.js. Features responsive design, modern UI components, and optimized performance for showcasing company services and information.",
    tools: ["NextJS", "TypeScript", "MaterialUI", "TailwindCSS"],
    linkGithub: "https://github.com/izzahnin/sigap-psu-makassar",
    linkDemo: "https://sigappsumakassar.vercel.app/",
  },
  {
    id: 2,
    thumbnail: "/images/thumbnail-bookshelf.jpeg",
    title: "BookShelf App",
    description:
      "Dynamic bookshelf management application with CRUD functionality. Users can add, categorize, search, and manage their book collections. Built with vanilla JavaScript showcasing fundamental DOM manipulation and local storage.",
    tools: ["HTML", "CSS", "JavaScript", "Local Storage"],
    linkGithub: "https://github.com/izzahnin/bookshelf-apps",
    linkDemo: "https://izzahnin.github.io/bookshelf-apps/",
  },
  {
    id: 4,
    thumbnail: "/images/cstudio.png",
    title: "CSTUDIO",
    description:
      "Submission from dicoding 'Belajar Dasar Pemrograman Web' course.",
    tools: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com",
    linkDemo: "https://izzahnin.github.io/cstudio/",
  },
  {
    id: 6,
    thumbnail: "/images/jb.png",
    title: "PT.Jalur Berlian Makassar",
    description:
      "Simple Company Profile of PT.Jalur Berlian Makassar",
    tools: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com",
    linkDemo: "https://izzahnin.github.io/jalurberlian/",
  },
  {
    id: 5,
    thumbnail: "/images/gsp.png",
    title: "PT.Ghaisan Putra Perkasa Makassar",
    description:
      "Simple Company Profile of PT.Ghaisan Putra Perkasa Makassar",
    tools: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com",
    linkDemo: "https://izzahnin.github.io/ghaisanputraperkasa/",
  },
  {
    id: 8,
    thumbnail: "/images/jb.png",
    title: "Jalur Berlian Fleet Management System (Ongoing)",
    description:
      "Ongoing fullstack project for PT Jalur Berlian focused on backend system and fleet management. Currently developing the backend with Go and the frontend with Next.js to support operational monitoring and internal workflow management.",
    tools: ["NextJS", "Go", "MySQL", "Docker"],
    linkGithub: "https://github.com/izzahnin?tab=repositories",
    linkDemo: "https://github.com/izzahnin?tab=repositories",
  },
];
