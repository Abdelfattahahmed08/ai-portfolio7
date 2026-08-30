import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdelfattah Ahmed | Machine Learning Engineer",
  description: "Machine Learning Engineer specializing in AI, NLP, Computer Vision, AI Agents, RAG Systems and Intelligent Automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-white antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
