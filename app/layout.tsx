import "./globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-white dark:bg-black transition-colors">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center px-2 py-4 w-full max-w-4xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
