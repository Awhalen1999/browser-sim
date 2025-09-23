"use client";

import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import {
  getAllProjects,
  getFeaturedProjects,
  Project,
} from "@/constants/projects";
import { TechChipGroup } from "@/components/tech-chip-group";

const getTypeColor = (type: string) => {
  switch (type) {
    case "web":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "mobile":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "backend":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
  }
};

const getTagColor = (tech: string) => {
  const colors = [
    "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
    "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  ];
  return colors[tech.length % colors.length];
};

export function ProjectsWindow() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [readmeContent, setReadmeContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Get projects from constants
  const allProjects = getAllProjects();
  const featuredProjects = getFeaturedProjects();

  useEffect(() => {
    if (allProjects.length > 0) {
      selectProject(allProjects[0]);
    }
  }, [allProjects]);

  const selectProject = async (project: Project) => {
    setSelectedProject(project);
    setIsLoading(true);
    try {
      // Use the long description from the project data
      setReadmeContent(project.longDescription);
    } catch (error) {
      console.error("Failed to load content:", error);
      setReadmeContent("Failed to load project content.");
    } finally {
      setIsLoading(false);
    }
  };

  const openProjectLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white dark:bg-gray-900 h-full flex flex-col overflow-hidden font-sans">
      <div className="flex-grow flex overflow-hidden">
        {/* Project List Sidebar */}
        <div className="w-80 border-r border-gray-200 dark:border-gray-700 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          {allProjects.map((project, index) => (
            <div key={project.id}>
              <div
                className={`p-4 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200 ${
                  selectedProject === project
                    ? "bg-blue-100 dark:bg-blue-900 border-l-2 border-blue-500"
                    : ""
                }`}
                onClick={() => selectProject(project)}
              >
                <div className="flex items-center mb-2">
                  <div className="w-6 h-6 mr-2 text-gray-600 dark:text-gray-400">
                    {/* Placeholder icon - replace with actual icons later */}
                    <div className="w-full h-full bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center text-xs font-bold">
                      {project.name.charAt(0).toUpperCase()}
                    </div>
                  </div>
                  <h3 className="font-semibold flex-grow text-gray-800 dark:text-gray-200 truncate">
                    {project.name}
                  </h3>
                  {project.githubUrl && (
                    <button
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200"
                      onClick={(e) => {
                        e.stopPropagation();
                        openProjectLink(project.githubUrl!);
                      }}
                    >
                      <FaGithub className="w-5 h-5" />
                    </button>
                  )}
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getTypeColor(
                      project.type
                    )}`}
                  >
                    {project.type}
                  </span>
                  <TechChipGroup techIds={project.technologies} />
                </div>
              </div>
              {index < allProjects.length - 1 && (
                <hr className="border-gray-300 dark:border-gray-600" />
              )}
            </div>
          ))}
        </div>

        {/* Project Details */}
        <div className="flex-1 overflow-hidden flex flex-col bg-white dark:bg-gray-900">
          {selectedProject ? (
            <div className="overflow-y-auto flex-grow">
              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 dark:border-gray-100"></div>
                </div>
              ) : (
                <div className="prose prose-sm max-w-none p-6 dark:prose-invert">
                  <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-300 font-mono leading-relaxed">
                    {readmeContent}
                  </pre>
                </div>
              )}
            </div>
          ) : (
            <div className="p-6 flex items-center justify-center h-full">
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Select a project to view details
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
