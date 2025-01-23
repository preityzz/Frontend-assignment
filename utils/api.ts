import { Quote, QuotesResponse } from "../types/quote";

export const getQuotes = async (page: number): Promise<QuotesResponse> => {
  const limit = 6;
  const skip = (page - 1) * limit;
  const response = await fetch(
    `https://dummyjson.com/quotes?limit=${limit}&skip=${skip}`
  );
  if (!response.ok) throw new Error("Failed to fetch quotes");
  return response.json();
};

export const getRandomQuote = async (): Promise<Quote> => {
  const response = await fetch("https://dummyjson.com/quotes/random");
  if (!response.ok) throw new Error("Failed to fetch random quote");
  return response.json();
};
