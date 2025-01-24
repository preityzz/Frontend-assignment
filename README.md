# QuoteVerse

A modern quote generator application built with Next.js 13, featuring quote browsing, favorites, and theme customization.

## Quick Start

### Prerequisites
- Node.js 18+
- npm/yarn
- Git

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/quoteverse.git

# Navigate to project
cd quoteverse

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

4.Open http://localhost:3000 in your browser

## Project Structure

frontend-assignment/
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx         # Home page
│   ├── random/          # Random quote page
│   └── favorites/       # Favorites page
├── components/
│   ├── QuoteCard.tsx    # Quote display
│   ├── Navbar.tsx       # Navigation
│   └── Pagination.tsx   # Page controls
├── context/
│   ├── ThemeContext.tsx # Theme management
│   └── FavoriteContext.tsx # Favorites state
├── utils/
│   └── api.ts          # API functions
└── types/
    └── quote.ts        # TypeScript types


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