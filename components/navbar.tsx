"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "../context/favoriteContext";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Random", href: "/random" },
  { name: "Favorites", href: "/favorites" },
];

export default function Navbar() {
  const { count } = useFavorites();
  const pathname = usePathname();

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-xl">
            QuoteVerse
          </Link>
          <div className="flex space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center
                  ${
                    pathname === item.href
                      ? "bg-white/20 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
              >
                {item.name}
                {item.name === "Favorites" && count > 0 && (
                  <span className="ml-2 bg-red-500 px-2 py-1 rounded-full text-xs text-white">
                    {count}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
