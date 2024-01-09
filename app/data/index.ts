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
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam fuga nobis totam sit odit. Placeat?",
    tools: ["React", "JavaScript", "TailwindCSS"],
    linkGithub: "https://github.com/izzahnin/lamacca-monopoli",
    linkDemo: "https://lamacca-monopoli.vercel.app/",
  },
  {
    id: 3,
    thumbnail: "/images/thumbnail-note.jpeg",
    title: "Note App",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam fuga nobis totam sit odit. Placeat?",
    tools: ["React", "TypeScript", "TailwindCSS"],
    linkGithub: "https://github.com",
    linkDemo: "https://note-app-izzahnin.vercel.app/",
  },
  {
    id: 4,
    thumbnail: "/images/elixir.png",
    title: "Elixir",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam fuga nobis totam sit odit. Placeat?",
    tools: ["NextJS", "TypeScript", "TailwindCSS"],
    linkGithub: "https://github.com",
    linkDemo: "https://elixir-perfume.vercel.app/",
  },
  {
    id: 2,
    thumbnail: "/images/thumbnail-bookshelf.jpeg",
    title: "BookShelf App",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam fuga nobis totam sit odit. Placeat?",
    tools: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com",
    linkDemo: "https://izzahnin.github.io/bookshelf-apps/",
  },
  {
    id: 4,
    thumbnail: "/images/cstudio.png",
    title: "CSTUDIO",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam fuga nobis totam sit odit. Placeat?",
    tools: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com",
    linkDemo: "https://izzahnin.github.io/cstudio/",
  },
  {
    id: 5,
    thumbnail: "/images/gsp.png",
    title: "PT.Ghaisan Putra Perkasa Makassar",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam fuga nobis totam sit odit. Placeat?",
    tools: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com",
    linkDemo: "https://izzahnin.github.io/ghaisanputraperkasa/",
  },
  {
    id: 6,
    thumbnail: "/images/jb.png",
    title: "PT.Jalur Berlian Makassar",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam fuga nobis totam sit odit. Placeat?",
    tools: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com",
    linkDemo: "https://izzahnin.github.io/jalurberlian/",
  },
];
