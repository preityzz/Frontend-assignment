"use client";

import React, { useState, useEffect } from "react";
import { getQuotes, getRandomQuote } from "../utils/api";
import type { Quote } from "../types/quote";
import QuoteCard from "../components/quoteCard";
import Pagination from "../components/pagination";

export default function Home() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState({
    quotes: false,
    random: false,
  });
  const [error, setError] = useState<{
    quotes: string | null,
    random: string | null,
  }>({
    quotes: null,
    random: null,
  });

  const fetchQuotes = async (page: number) => {
    setLoading((prev) => ({ ...prev, quotes: true }));
    setError((prev) => ({ ...prev, quotes: null }));

    try {
      const data = await getQuotes(page);
      setQuotes(data.quotes);
      setTotalPages(Math.ceil(data.total / data.limit));
    } catch (err) {
      setError((prev) => ({
        ...prev,
        quotes: `Failed to fetch quotes: ${err instanceof Error ? err.message : 'Please try again.'}`,
      }));
    } finally {
      setLoading((prev) => ({ ...prev, quotes: false }));
    }
  };

  const fetchRandomQuote = async () => {
    setLoading((prev) => ({ ...prev, random: true }));
    setError((prev) => ({ ...prev, random: null }));

    try {
      const quote = await getRandomQuote();
      setRandomQuote(quote);
    } catch (err) {
      setError((prev) => ({
        ...prev,
        random: `Failed to fetch random quote: ${err instanceof Error ? err.message : 'Please try again.'}`,
      }));
    } finally {
      setLoading((prev) => ({ ...prev, random: false }));
    }
  };

  useEffect(() => {
    fetchQuotes(currentPage);
  }, [currentPage]);

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-900">
          Inspiring Quotes
        </h1>

        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Random Quote
          </h2>
          <button
            onClick={fetchRandomQuote}
            disabled={loading.random}
            className="w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-lg
                     hover:bg-indigo-700 transition-colors disabled:opacity-50"
          >
            {loading.random ? "Generating..." : "Get Random Quote"}
          </button>
          {error.random && <p className="mt-4 text-red-600">{error.random}</p>}
          {randomQuote && (
            <div className="mt-6">
              <QuoteCard quote={randomQuote} />
            </div>
          )}
        </section>

        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Quote Collection
          </h2>
          {loading.quotes && (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
            </div>
          )}
          {error.quotes && (
            <p className="text-center text-red-600 my-4">{error.quotes}</p>
          )}
          <div className="space-y-6">
            {quotes.map((quote) => (
              <QuoteCard key={quote.id} quote={quote} />
            ))}
          </div>
          {quotes.length > 0 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </section>
      </div>
    </main>
  );
}
