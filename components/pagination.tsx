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
          className="px-4 py-2 text-sm font-medium 
                   text-gray-700 dark:text-gray-300 
                   bg-white dark:bg-gray-800 
                   border border-gray-300 dark:border-gray-600 
                   rounded-md 
                   hover:bg-gray-50 dark:hover:bg-gray-700
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

        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors">
          Page{" "}
          <span className="font-bold text-purple-600 dark:text-purple-400">
            {currentPage}
          </span>{" "}
          of{" "}
          <span className="font-bold text-purple-600 dark:text-purple-400">
            {totalPages}
          </span>
        </span>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 text-sm font-medium 
                   text-gray-700 dark:text-gray-300 
                   bg-white dark:bg-gray-800 
                   border border-gray-300 dark:border-gray-600 
                   rounded-md 
                   hover:bg-gray-50 dark:hover:bg-gray-700
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
