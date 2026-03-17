import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MABI — Moving Ahead by Innovation | AI Business Platform",
  description: "MABI — My Artificial Business Intelligence. Zarządzaj produktami, klientami, produkcją i magazynem w jednym systemie z wbudowaną sztuczną inteligencją.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black text-white selection:bg-red-500/30 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
