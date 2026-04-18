import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Meta9 Tech | Driving Innovation & Digital Transformation",
  description: "Meta9 Tech is a global technology conglomerate driving innovation, digital transformation, and delivering excellence in full-stack development, cloud infrastructure, AI, and staffing solutions.",
  keywords: "IT consulting, staffing, development, digital transformation, cloud infrastructure, AI, Meta9 Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
