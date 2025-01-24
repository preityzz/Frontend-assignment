"use client";

import React, { useState, useEffect } from "react";
import { getQuotes } from "../utils/api";
import type { Quote } from "../types/quote";
import QuoteCard from "../components/quoteCard";
import Pagination from "../components/pagination";

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchQuotes = async (page: number) => {
    setLoading(true);
    setError(null);

    try {
      const data = await getQuotes(page);
      setQuotes(data.quotes);
      setTotalPages(Math.ceil(data.total / data.limit));
    } catch {
      setError("Failed to fetch quotes. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes(currentPage);
  }, [currentPage]);

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-white 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                    transition-colors duration-200"
    >
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Discover Inspiring{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r 
                           from-purple-600 to-indigo-600 
                           dark:from-purple-400 dark:to-indigo-400"
            >
              Quotes
            </span>
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
            Find wisdom and inspiration from the world&apos;s greatest minds.
          </p>
        </div>
      </section>

      
      <main className="px-4 sm:px-6 lg:px-8 pb-12">
        <div className="max-w-6xl mx-auto">
          <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div
              className="bg-gradient-to-r from-purple-600 to-indigo-600 
                          dark:from-purple-800 dark:to-indigo-800 px-6 py-3"
            >
              <h2 className="text-lg font-bold text-white">Quote Collection</h2>
            </div>

            <div className="p-6 dark:bg-gray-800">
              {loading && (
                <div className="flex justify-center py-8">
                  <div
                    className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 
                                border-purple-600 dark:border-purple-400"
                  ></div>
                </div>
              )}

              {error && (
                <div className="text-center py-6">
                  <p className="text-red-600 dark:text-red-400 text-sm mb-3">
                    {error}
                  </p>
                  <button
                    onClick={() => fetchQuotes(currentPage)}
                    className="text-purple-600 dark:text-purple-400 
                             hover:text-purple-700 dark:hover:text-purple-300 
                             text-sm font-medium"
                  >
                    Try Again
                  </button>
                </div>
              )}

              <div className="space-y-4">
                {quotes.map((quote) => (
                  <div
                    key={quote.id}
                    className="transform transition-all duration-300 hover:-translate-y-1"
                  >
                    <QuoteCard quote={quote} />
                  </div>
                ))}
              </div>

              {quotes.length > 0 && (
                <div className="mt-6 flex justify-center">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
