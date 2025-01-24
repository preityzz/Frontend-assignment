import React from "react";
import { useFavorites } from "../context/favoriteContext";
import type { Quote } from "../types/quote";
import { FaCopy, FaHeart, FaRegHeart } from "react-icons/fa";

interface QuoteCardProps {
  quote: Quote;
}

export default function QuoteCard({ quote }: QuoteCardProps) {
  const { isFavorite, toggleFavorite: toggleFavoriteContext } = useFavorites();
  const favorite = isFavorite(quote.id);

  const toggleFavorite = () => {
    toggleFavoriteContext(quote);
  };

  return (
    <div className="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div
        className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden 
                      border border-gray-100 dark:border-gray-700 
                      transition-colors duration-200"
      >
        <div className="relative p-6">
          {/* Decorative quote mark */}
          <div
            className="absolute top-4 left-4 text-6xl leading-none 
                         text-purple-100 dark:text-purple-900/30 
                         pointer-events-none font-serif"
          >
            &ldquo;
          </div>

          <div className="relative z-10">
            <blockquote>
              <p
                className="text-lg md:text-xl text-gray-800 dark:text-gray-100 
                           leading-relaxed mb-4 pl-8"
              >
                {quote.quote}
              </p>
              <footer className="pl-8">
                <p className="text-base text-gray-500 dark:text-gray-400">
                  ― {quote.author}
                </p>
              </footer>
            </blockquote>
          </div>

          {/* Action buttons */}
          <div className="flex justify-end items-center gap-2 mt-4">
            <button
              onClick={toggleFavorite}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700
                       transition-colors duration-200"
              aria-label={
                favorite ? "Remove from favorites" : "Add to favorites"
              }
            >
              {favorite ? (
                <FaHeart className="w-5 h-5 text-red-500" />
              ) : (
                <FaRegHeart className="w-5 h-5 text-gray-400 dark:text-gray-500" />
              )}
            </button>
            <button
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700
                       transition-colors duration-200"
              aria-label="Copy quote"
            >
              <FaCopy className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
