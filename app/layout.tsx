import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";

// components
import { Dock } from "@/components/ui/dock";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Dock />
        </ThemeProvider>
      </body>
    </html>
  );
}
