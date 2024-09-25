"use client"; 
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

      <main className=" flex flex-col justify-center">
      {/* <main className=""> */}
        <Navbar/>
      {children}
      <Toaster />
      </main>
      </body>
    </html>
  );
}
