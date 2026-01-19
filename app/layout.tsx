import { Geist } from "next/font/google";
import "./globals.css";
import React from "react";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Calculator",
    description: "A simple calculator built with Next.js",
    appleWebApp: {
        capable: true,
        title: "Calculator",
        statusBarStyle: "default",
    },
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body>
        {children}
      </body>
    </html>
  );
}
