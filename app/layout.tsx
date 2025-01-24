import { FavoritesProvider } from "@/context/favoriteContext";
import Navbar from "@/components/navbar";
import { Providers } from "./providers";
import "./globals.css";

export const metadata = {
  title: "Quote Generator",
  description: "Browse and generate random quotes",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="font-sans bg-gradient-to-b from-purple-50 via-white to-white 
                     dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                     transition-colors duration-200 min-h-screen"
      >
        <Providers>
          <FavoritesProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
          </FavoritesProvider>
        </Providers>
      </body>
    </html>
  );
}
