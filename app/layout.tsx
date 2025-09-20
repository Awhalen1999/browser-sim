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
  title: "Alex Whalen",
  description:
    "Full-stack software developer specializing in mobile and web applications. Portfolio showcasing modern React, Next.js, and cross-platform development.",
  keywords: [
    "portfolio",
    "software developer",
    "full stack",
    "mobile development",
    "web development",
    "react",
    "nextjs",
    "typescript",
  ],
  authors: [{ name: "Alex Whalen" }],
  creator: "Alex Whalen",
  openGraph: {
    title: "Alex Whalen - Software Developer",
    description:
      "Full-stack mobile and web developer. Explore my projects and development journey.",
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
          <Header />
          {children}
          <Dock />
        </ThemeProvider>
      </body>
    </html>
  );
}
