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
  title: "Akshar",
  description: "Structure Design Engineers and Cunsaltants",
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
