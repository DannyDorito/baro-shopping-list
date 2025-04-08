import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/utilities/ThemeProvider";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Baro Ki'Teer Item Checklist",
  description: "Baro Ki'Teer Item Shopping List",
  keywords: [
    "Baro Ki'Teer",
    "Baro Ki'Teer Items",
    "Baro Ki'Teer Checklist",
    "Baro Ki'Teer Shopping List",
    "Baro Ki'Teer Inventory",
    "Baro Ki'Teer Inventory Tracker",
    "Baro Ki'Teer Inventory Management",
    "Baro Ki'Teer Inventory Checklist"
  ],
  authors: [{ name: "John Allison", url: "https://jallison.co.uk"}]
};

export const dynamic = "force-static";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
