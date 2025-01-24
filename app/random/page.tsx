"use client";

import React, { useState } from "react";
import { getRandomQuote } from "../../utils/api";
import type { Quote } from "../../types/quote";
import QuoteCard from "../../components/quoteCard";

export default function RandomQuotePage() {
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomQuote = async () => {
    setLoading(true);
    setError(null);

    try {
      const quote = await getRandomQuote();
      setRandomQuote(quote);
    } catch {
      setError("Failed to fetch random quote. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-white 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                    transition-colors duration-200"
    >
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Random{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r 
                           from-purple-600 to-indigo-600 
                           dark:from-purple-400 dark:to-indigo-400"
            >
              Quote
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Discover something unexpected
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            <div className="flex justify-center mb-8">
              <button
                onClick={fetchRandomQuote}
                disabled={loading}
                className="group relative inline-flex items-center px-6 py-2
                         text-sm font-medium text-white
                         bg-purple-600 dark:bg-purple-700 
                         hover:bg-purple-700 dark:hover:bg-purple-800 
                         rounded-full transition-colors
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="group-hover:translate-x-[-4px] transition-transform">
                  {loading ? "Generating..." : "Get Random Quote"}
                </span>
                <span className="ml-2 text-white/70">→</span>
              </button>
            </div>
            {error && (
              <p className="text-sm text-center text-red-600 dark:text-red-400 mb-4">
                {error}
              </p>
            )}
            {randomQuote && <QuoteCard quote={randomQuote} />}
          </div>
        </div>
      </section>
    </div>
  );
}
