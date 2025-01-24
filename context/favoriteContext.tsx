"use client";

import { createContext, useContext, useState, useEffect } from "react";
import type { Quote } from "../types/quote";

interface FavoritesContextType {
  favorites: Quote[];
  toggleFavorite: (quote: Quote) => void;
  isFavorite: (id: number) => boolean;
  count: number;
}

const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  toggleFavorite: () => {},
  isFavorite: () => false,
  count: 0,
});

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Quote[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  }, []);

  const toggleFavorite = (quote: Quote) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.id === quote.id);
      const newFavorites = exists
        ? prev.filter((fav) => fav.id !== quote.id)
        : [...prev, quote];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite: (id) => favorites.some((fav) => fav.id === id),
        count: favorites.length,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
