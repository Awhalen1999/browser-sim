import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A.DEV | About",
  description: "About",
};

export default function About() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8">About</h1>
      <p className="mb-4">This is the about page.</p>
    </section>
  );
}
