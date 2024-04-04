import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { light } from "@clerk/themes";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Capitalyzer",
  description: "Financial Analysis Application",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: light,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="container mx-auto">
            <div className="flex items-start justify-center min-h-screen">
              <ChakraProvider>
                <div className="mt-20">{children}</div>
              </ChakraProvider>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
