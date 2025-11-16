import type { Metadata } from "next";
import { Geist, Geist_Mono, Agdasima } from "next/font/google";
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const agdasima = Agdasima({
  weight: ['400','700'], // regular and bold
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Akshar Structure Design Engineers and Consultants",
  description: "A structural engineering consultancy providing design-oriented solutions for buildings and infrastructure, focused on safe, efficient, and economical structure design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
