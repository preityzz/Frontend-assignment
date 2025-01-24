import { FavoritesProvider } from "../context/favoriteContext";
import Navbar from "../components/navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quote Generator",
  description: "Browse and generate random quotes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <FavoritesProvider>
            <Navbar />
            {children}
          </FavoritesProvider>
        </Providers>
      </body>
    </html>
  );
}
