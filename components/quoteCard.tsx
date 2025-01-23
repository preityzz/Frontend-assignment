import React from "react";
import { Quote } from "../types/quote";

interface QuoteCardProps {
  quote: Quote;
}

export default function QuoteCard({ quote }: QuoteCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <blockquote className="space-y-2">
        <p className="text-lg text-gray-800 leading-relaxed">&ldquo;{quote.quote}&rdquo;</p>
        <footer className="text-right">
          <cite className="text-gray-600 font-medium">— {quote.author}</cite>
        </footer>
      </blockquote>
    </div>
  );
}
