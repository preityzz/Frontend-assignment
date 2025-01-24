import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <nav aria-label="Pagination" className="mt-8">
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border
                   border-gray-300 rounded-md hover:bg-gray-50 
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-colors duration-200"
          aria-label="Previous page"
        >
          <span className="sr-only">Previous</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">
            Page{" "}
            <span className="font-bold text-purple-600">{currentPage}</span> of{" "}
            <span className="font-bold text-purple-600">{totalPages}</span>
          </span>
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border
                   border-gray-300 rounded-md hover:bg-gray-50 
                   disabled:opacity-50 disabled:cursor-not-allowed
                   transition-colors duration-200"
          aria-label="Next page"
        >
          <span className="sr-only">Next</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
