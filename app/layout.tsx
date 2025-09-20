import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Navigation } from "@/components/navigation";

import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  // todo: add title, description, keywords
  title: "A.DEV",
  description: "A.DEV Portfolio",
  keywords: ["portfolio"],
  authors: [{ name: "Alex Whalen" }],
  creator: "Alex Whalen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <main>{children}</main>
        <Navigation />
      </body>
    </html>
  );
}
