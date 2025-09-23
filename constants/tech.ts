export interface TechItem {
  id: string;
  name: string;
  color: string;
  hoverColor?: string;
  svg?: string; // Path to SVG file
}

export const TECH_MAP: Record<string, TechItem> = {
  // Frontend
  react: {
    id: "react",
    name: "React",
    color: "#61dafb",
    hoverColor: "bg-blue-400",
  },
  nextjs: {
    id: "nextjs",
    name: "Next.js",
    color: "#000000",
    hoverColor: "bg-gray-800",
  },
  typescript: {
    id: "typescript",
    name: "TypeScript",
    color: "#3178c6",
    hoverColor: "bg-blue-600",
  },
  javascript: {
    id: "javascript",
    name: "JavaScript",
    color: "#f7df1e",
    hoverColor: "bg-yellow-400",
  },
  tailwind: {
    id: "tailwind",
    name: "Tailwind CSS",
    color: "#06b6d4",
    hoverColor: "bg-cyan-500",
  },
  redux: {
    id: "redux",
    name: "Redux",
    color: "#764abc",
    hoverColor: "bg-purple-600",
  },
  zustand: {
    id: "zustand",
    name: "Zustand",
    color: "#ff6b6b",
    hoverColor: "bg-red-400",
  },

  // Backend
  nodejs: {
    id: "nodejs",
    name: "Node.js",
    color: "#339933",
    hoverColor: "bg-green-600",
  },
  python: {
    id: "python",
    name: "Python",
    color: "#3776ab",
    hoverColor: "bg-blue-700",
  },
  graphql: {
    id: "graphql",
    name: "GraphQL",
    color: "#e10098",
    hoverColor: "bg-pink-600",
  },
  apollo: {
    id: "apollo",
    name: "Apollo",
    color: "#311c87",
    hoverColor: "bg-indigo-800",
  },

  // Database
  postgresql: {
    id: "postgresql",
    name: "PostgreSQL",
    color: "#336791",
    hoverColor: "bg-blue-800",
  },
  mongodb: {
    id: "mongodb",
    name: "MongoDB",
    color: "#47a248",
    hoverColor: "bg-green-600",
  },
  prisma: {
    id: "prisma",
    name: "Prisma",
    color: "#2d3748",
    hoverColor: "bg-gray-700",
  },
  supabase: {
    id: "supabase",
    name: "Supabase",
    color: "#3ecf8e",
    hoverColor: "bg-green-500",
  },
  firebase: {
    id: "firebase",
    name: "Firebase",
    color: "#ffca28",
    hoverColor: "bg-yellow-500",
  },

  // Tools
  git: {
    id: "git",
    name: "Git",
    color: "#f05032",
    hoverColor: "bg-red-600",
  },
  github: {
    id: "github",
    name: "GitHub",
    color: "#181717",
    hoverColor: "bg-gray-800",
  },
  figma: {
    id: "figma",
    name: "Figma",
    color: "#f24e1e",
    hoverColor: "bg-orange-600",
  },
  eslint: {
    id: "eslint",
    name: "ESLint",
    color: "#4b32c3",
    hoverColor: "bg-indigo-700",
  },
  prettier: {
    id: "prettier",
    name: "Prettier",
    color: "#f7b93e",
    hoverColor: "bg-yellow-500",
  },
  vite: {
    id: "vite",
    name: "Vite",
    color: "#646cff",
    hoverColor: "bg-indigo-500",
  },
  webpack: {
    id: "webpack",
    name: "Webpack",
    color: "#8dd6f9",
    hoverColor: "bg-blue-300",
    svg: "/icons/webpack.svg",
  },

  // Testing
  jest: {
    id: "jest",
    name: "Jest",
    color: "#c21325",
    hoverColor: "bg-red-700",
  },
  cypress: {
    id: "cypress",
    name: "Cypress",
    color: "#17202c",
    hoverColor: "bg-gray-900",
  },
  playwright: {
    id: "playwright",
    name: "Playwright",
    color: "#2e5a87",
    hoverColor: "bg-blue-800",
  },

  // Deployment
  vercel: {
    id: "vercel",
    name: "Vercel",
    color: "#000000",
    hoverColor: "bg-gray-800",
  },
  docker: {
    id: "docker",
    name: "Docker",
    color: "#2496ed",
    hoverColor: "bg-blue-600",
  },
  aws: {
    id: "aws",
    name: "AWS",
    color: "#ff9900",
    hoverColor: "bg-orange-500",
  },

  // Package Managers
  npm: {
    id: "npm",
    name: "npm",
    color: "#cb3837",
    hoverColor: "bg-red-700",
  },
  yarn: {
    id: "yarn",
    name: "Yarn",
    color: "#2c8ebb",
    hoverColor: "bg-blue-600",
  },
  pnpm: {
    id: "pnpm",
    name: "pnpm",
    color: "#f69220",
    hoverColor: "bg-orange-500",
  },
};

// Helper function to get tech by ID
export const getTechById = (id: string): TechItem | undefined => {
  return TECH_MAP[id];
};

// Helper function to get multiple tech items by IDs
export const getTechByIds = (ids: string[]): TechItem[] => {
  return ids.map((id) => TECH_MAP[id]).filter(Boolean);
};
