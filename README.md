# QuoteVerse - Quote Generator App

A modern web application for browsing and saving inspiring quotes, built with Next.js 13,React, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <https://github.com/preityzz/Frontend-assignment.git>
cd frontend-assignment
```

2.Install dependencies
```bash
npm install
# or
yarn install
```

3.Run the development server
```bash
npm run dev
# or
yarn dev
```

4.Open http://localhost:3000 in your browser

## Project Structure

* frontend-assignment/
* ├── app/
*     ├── layout.tsx        # Root layout
*     ├── page.tsx         # Home page
*     ├── random/          # Random quote page
*     └── favorites/       # Favorites page
* ├── components/
*     ├── QuoteCard.tsx    # Quote display
*     ├── Navbar.tsx       # Navigation
*     ├── themeswitch.tsx # Theme management
*     └── Pagination.tsx   # Page controls     
* ├── context/
*     └── FavoriteContext.tsx # Favorites state
* ├── utils/
*     └── api.ts          # API functions
* └── types/
*     └── quote.ts        # TypeScript types


## Features

* Browse paginated quotes
* View random quotes
* Save favorite quotes
* Dark/Light theme toggle
* Responsive design
* Error handling
* Loading states

## Tech Stack
* Next.js 13 (App Router)
* TypeScript
* Tailwind CSS
* Context API for state management
* React Icons
* Framer Motion for animations


## Additional Notes
* Uses localStorage for persisting favorites
* Implements error boundaries for API failures
* Supports system color scheme preferences
* Follows responsive design principles
* Built with accessibility in mind

## API
* The application uses the DummyJSON Quotes API for fetching quotes.