import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: 'swap',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://valleywindowcare.com'),
  title: "Valley Window Care and Exterior Cleaning",
  description: "Professional exterior cleaning in Green Bay, WI",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import MobileFooter from "@/components/MobileFooter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} font-inter antialiased min-h-screen flex flex-col relative pb-16 md:pb-0 bg-slate-50 text-[#353738]`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
        <MobileFooter />
      </body>
    </html>
  );
}
