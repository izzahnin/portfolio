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
      "Lamacca Monopoli is a board game that have been modified to be a qr-code based game. This game is made for my PKM-PM project.",
    tools: ["React", "JavaScript", "TailwindCSS"],
    linkGithub: "https://github.com/izzahnin/lamacca-monopoli",
    linkDemo: "https://lamacca-monopoli.vercel.app/",
  },
  {
    id: 3,
    thumbnail: "/images/thumbnail-note.jpeg",
    title: "Note App",
    description:
      "This app is made for my submission in Dicoding's 'Belajar Membuat Aplikasi Web dengan React' course.",
    tools: ["React", "TypeScript", "TailwindCSS"],
    linkGithub: "https://github.com",
    linkDemo: "https://note-app-izzahnin.vercel.app/",
  },
  {
    id: 4,
    thumbnail: "/images/elixir.png",
    title: "Elixir",
    description:
      "Team project from Sistem Informasi course, this project is made for our final project.",
    tools: ["NextJS", "TypeScript", "TailwindCSS"],
    linkGithub: "https://github.com",
    linkDemo: "https://elixir-perfume.vercel.app/",
  },
  {
    id: 2,
    thumbnail: "/images/thumbnail-bookshelf.jpeg",
    title: "BookShelf App",
    description:
      "This app is made for my submission in Dicoding's 'Belajar Fundamental Front-End Web Development' course.",
    tools: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com",
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
];
