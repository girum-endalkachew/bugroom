import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
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
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#FF6835", // Ember
          colorBackground: "#161B22", // Slate Card
          colorInputBackground: "#0D1117", // Midnight
          colorText: "#F7F4EF", // Paper
          colorTextSecondary: "#8B949E", // Ash
          borderRadius: "10px",
        },
        elements: {
          card: "border border-[#21262D] shadow-2xl",
          formButtonPrimary: "bg-[#FF6835] hover:bg-[#FF7D4F] text-white font-medium",
        },
      }}
    >
      <html lang="en" className="dark">
        <body className={`${inter.variable} ${jetbrainsMono.variable} bg-midnight text-paper min-h-screen antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}