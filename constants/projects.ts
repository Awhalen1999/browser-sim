import { TECH_MAP } from "./tech";

export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  technologies: string[]; // Array of tech IDs
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  type: "web" | "mobile" | "backend" | "desktop";
  date: string;
}

export const PROJECTS: Project[] = [
  {
    id: "portfolio-website",
    name: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring a macOS-style desktop interface.",
    longDescription: `# Portfolio Website

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring a macOS-style desktop interface.

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- React

## Features

- Modern, responsive design
- Cross-platform compatibility
- Real-time data synchronization
- Secure authentication
- Scalable architecture

## Getting Started

1. Clone the repository
2. Install dependencies
3. Run the development server
4. Open your browser and navigate to the application

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.`,
    technologies: ["nextjs", "typescript", "tailwind", "react"],
    githubUrl: "https://github.com/alexwhalen/portfolio",
    demoUrl: "https://alexwhalen.dev",
    featured: true,
    type: "web",
    date: "2024-01-15",
  },
  {
    id: "mobile-app",
    name: "Mobile App",
    description:
      "Cross-platform mobile application built with React Native and Expo, featuring real-time data synchronization.",
    longDescription: `# Mobile App

Cross-platform mobile application built with React Native and Expo, featuring real-time data synchronization.

## Technologies Used

- React Native
- Expo
- TypeScript
- Firebase

## Features

- Cross-platform compatibility
- Real-time data synchronization
- Offline support
- Push notifications
- Modern UI/UX

## Getting Started

1. Clone the repository
2. Install dependencies
3. Run the development server
4. Open your browser and navigate to the application

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.`,
    technologies: ["react", "typescript", "firebase"],
    githubUrl: "https://github.com/alexwhalen/mobile-app",
    featured: true,
    type: "mobile",
    date: "2024-02-20",
  },
  {
    id: "api-service",
    name: "API Service",
    description:
      "RESTful API service built with Node.js and Express, providing data management and authentication features.",
    longDescription: `# API Service

RESTful API service built with Node.js and Express, providing data management and authentication features.

## Technologies Used

- Node.js
- Express
- MongoDB
- JWT

## Features

- RESTful API design
- JWT authentication
- Data validation
- Error handling
- API documentation

## Getting Started

1. Clone the repository
2. Install dependencies
3. Run the development server
4. Open your browser and navigate to the application

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.`,
    technologies: ["nodejs", "mongodb", "javascript"],
    githubUrl: "https://github.com/alexwhalen/api-service",
    featured: false,
    type: "backend",
    date: "2024-03-10",
  },
];

// Helper functions
export const getAllProjects = (): Project[] => {
  return PROJECTS.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

export const getFeaturedProjects = (): Project[] => {
  return PROJECTS.filter((project) => project.featured);
};

export const getProjectById = (id: string): Project | undefined => {
  return PROJECTS.find((project) => project.id === id);
};
