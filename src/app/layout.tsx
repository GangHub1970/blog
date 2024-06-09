import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gang's Blog",
  description: "Dream Coding Blog Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-full ${inter.className}`}>
        <Header />
        <main className="min-h-full max-w-6xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
