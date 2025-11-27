import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";

// components
import { Dock } from "@/components/dock";
import Header from "@/components/header";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Browser Simulation",
  description:
    "An interactive browser simulation with draggable, resizable windows and a modern macOS-inspired interface.",
  keywords: [
    "browser simulation",
    "window manager",
    "web app",
    "react",
    "nextjs",
    "typescript",
    "ui demo",
  ],
  authors: [{ name: "Alex Whalen" }],
  creator: "Alex Whalen",
  openGraph: {
    title: "Browser Simulation",
    description:
      "An interactive browser simulation with draggable, resizable windows.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className="h-screen overflow-hidden flex flex-col"
            style={{ backgroundColor: "var(--background)" }}
          >
            <Header />
            <main className="flex-1 relative overflow-hidden">{children}</main>
            <Dock />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
