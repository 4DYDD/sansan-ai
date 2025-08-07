"use client";
import { useEffect, useState } from "react";
import { useChatStore } from "../store";

/**
 * Komponen Navbar
 * - Toggle dark mode
 * - Tampilkan sisa kuota
 * - Maskot/Logo
 */
export default function Navbar() {
  const [dark, setDark] = useState(false);
  const quota = useChatStore((s) => s.quota);
  const maxQuota = useChatStore((s) => s.maxQuota);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="w-full flex items-center justify-between px-4 py-3 border-b border-black/10 dark:border-white/10 bg-white dark:bg-black sticky top-0 z-10">
      <div className="flex items-center gap-2">
        {/* Logo/Maskot sementara pakai emoji */}
        <span className="text-2xl">🤖</span>
        <span className="font-bold text-primary text-lg">Sansan AI</span>
      </div>
      <div className="flex items-center gap-4">
        {/* Quota Counter */}
        <span className="text-xs md:text-sm text-secondary font-semibold">
          Sisa Kuota: {quota} / {maxQuota}
        </span>
        {/* Toggle Dark Mode */}
        <button
          aria-label="Toggle dark mode"
          className="rounded-full p-2 bg-secondary text-white hover:scale-110 transition"
          onClick={() => setDark((v) => !v)}
        >
          {dark ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
