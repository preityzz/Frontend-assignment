import { Quote, QuotesResponse } from "../types/quote";

export const getQuotes = async (page: number): Promise<QuotesResponse> => {
  try {
    const limit = 6;
    const skip = (page - 1) * limit;
    const response = await fetch(
      `https://dummyjson.com/quotes?limit=${limit}&skip=${skip}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching quotes:", error);
    throw new Error("Failed to fetch quotes. Please try again later.");
  }
};

export const getRandomQuote = async (): Promise<Quote> => {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching random quote:", error);
    throw new Error("Failed to fetch random quote. Please try again later.");
  }
};
