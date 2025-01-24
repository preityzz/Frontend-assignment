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
      <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
        <div className="relative p-6">
          {/* Decorative quote mark */}
          <div className="absolute top-4 left-4 text-6xl leading-none text-purple-100 pointer-events-none font-serif">
            &ldquo;
          </div>

          <div className="relative z-10">
            <blockquote>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4 pl-8">
                {quote.quote}
              </p>

              <footer className="flex items-center justify-between mt-6">
                <cite className="flex items-center space-x-3 not-italic">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-600 font-semibold text-lg">
                        {quote.author.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-900 font-semibold block">
                      {quote.author}
                    </span>
                    <span className="text-gray-500">Author</span>
                  </div>
                </cite>
                <div className="flex space-x-2">
                  <button
                    onClick={toggleFavorite}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      favorite
                        ? "text-red-500 hover:text-red-600"
                        : "text-gray-400 hover:text-red-500"
                    }`}
                  >
                    {favorite ? (
                      <FaHeart className="w-5 h-5" />
                    ) : (
                      <FaRegHeart className="w-5 h-5" />
                    )}
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `"${quote.quote}" - ${quote.author}`
                      );
                    }}
                    className="text-purple-600 hover:text-purple-700 transition-colors p-2 
                           rounded-full hover:bg-purple-50"
                    title="Copy quote"
                  >
                    <FaCopy className="w-5 h-5" />
                  </button>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
