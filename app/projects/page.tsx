import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A.DEV | Projects",
  description: "Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 bg-background">Projects</h1>
      <p className="mb-4">This is the projects page.</p>
    </section>
  );
}
