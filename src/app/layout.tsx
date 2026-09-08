import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bugroom — Every bug has a story",
  description: "Find it. Fix it. Remember it. Forensic bug tracking and investigation room.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang=\"en\" className=\"dark\">
      <body className={\\ \ bg-midnight text-paper min-h-screen antialiased\}>
        {children}
      </body>
    </html>
  );
}
