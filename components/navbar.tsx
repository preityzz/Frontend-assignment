"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFavorites } from "../context/favoriteContext";
import ThemeSwitch from "./themeSwitch";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Random", href: "/random" },
  { name: "Favorites", href: "/favorites" },
];

export default function Navbar() {
  const { count } = useFavorites();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-800 dark:to-indigo-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-xl">
            QuoteVerse
          </Link>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="hidden md:flex space-x-4 items-center">
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
            <ThemeSwitch />
          </div>
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden transition-all duration-200 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors
                ${
                  pathname === item.href
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="flex items-center">
                {item.name}
                {item.name === "Favorites" && count > 0 && (
                  <span className="ml-2 bg-red-500 px-2 py-1 rounded-full text-xs text-white">
                    {count}
                  </span>
                )}
              </div>
            </Link>
          ))}
          <div className="px-3 py-2">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}
