"use client";

import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { useFavorites } from "../../context/favoriteContext";
import QuoteCard from "../../components/quoteCard";

export default function FavoritesPage() {
  const { favorites, count } = useFavorites();

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-white 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                    transition-colors duration-200"
    >
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1
            className="text-4xl font-bold bg-gradient-to-r 
                         from-purple-600 to-indigo-600 
                         dark:from-purple-400 dark:to-indigo-400 
                         bg-clip-text text-transparent mb-8"
          >
            Your Favorite Quotes
          </h1>
          <div
            className="inline-flex items-center gap-2 px-4 py-2 
                         bg-white dark:bg-gray-800 rounded-full 
                         shadow-md border border-gray-100 dark:border-gray-700"
          >
            <FaHeart className="w-5 h-5 text-red-500" />
            <span className="text-gray-600 dark:text-gray-300 font-medium">
              {count} quotes saved
            </span>
          </div>
        </motion.div>
      </section>

      {/* Quotes List */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div className="space-y-6">
          {favorites.map((quote) => (
            <motion.div
              key={quote.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="transform transition-all duration-300 hover:-translate-y-1"
            >
              <QuoteCard quote={quote} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
