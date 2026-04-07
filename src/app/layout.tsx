import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fadhlan Syahran Jungjungan | Full Stack Developer",
  description: "Full Stack Developer specializing in React, Node.js, and cloud-native applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-neutral-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
