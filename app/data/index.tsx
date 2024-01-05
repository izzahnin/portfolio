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
    thumbnail: "/image/lamacca-monopoli.png",
    title: "Lamacca Monopoli",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam fuga nobis totam sit odit. Placeat?",
    tools: ["React", "JavaScript", "TailwindCSS"],
    linkGithub: "https://github.com/izzahnin/lamacca-monopoli",
    linkDemo: "https://lamacca-monopoli.vercel.app/",
  },
  {
    id: 2,
    thumbnail: "/image/bg-1.svg",
    title: "BookShelf App",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam fuga nobis totam sit odit. Placeat?",
    tools: ["HTML", "CSS", "JavaScript"],
    linkGithub: "https://github.com",
    linkDemo: "https://izzahnin.github.io/bookshelf-apps/",
  },
  {
    id: 3,
    thumbnail: "/image/bg-2.svg",
    title: "Note App",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam fuga nobis totam sit odit. Placeat?",
    tools: ["React", "TypeScript", "TailwindCSS"],
    linkGithub: "https://github.com",
    linkDemo: "https://izzahnin.github.io/note-app/",
  }
]