// ========================
// 🔹 components/Header.tsx
// ========================
'use client';

import Link from "next/link";
import { useTheme } from "next-themes";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold"></h1>
        <nav>
            <ul className="flex space-x-6">
                <li><Link href="/" className="text-xl hover:text-blue-500">Projects</Link></li>
                <li><Link href="/FAQ" className="text-xl hover:text-blue-500">FAQ</Link></li>
                <li><Link href="https://linkedin.com/in/tanjodh-hayer" target="_blank" className="text-xl hover:text-blue-500">LinkedIn</Link></li>
                <li><Link href="https://github.com/TanjodhHayer" target="_blank" className="text-xl hover:text-blue-500">GitHub</Link></li>
            </ul>
        </nav>

      </div>
    </header>
  );
}
