import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { leagueSpartan } from "@/lib/font";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Room - Muebles de Diseño Premium',
  description: 'Descubre nuestra colección de muebles de diseño premium. Creamos espacios únicos con muebles funcionales y elegantes para tu hogar.',
  icons: {
    icon: '/assents/images/shopping-bag-fill.png',
  }
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${leagueSpartan.className} ${geistSans.variable} ${geistMono.variable} antialiased text-xl`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
