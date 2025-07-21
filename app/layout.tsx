import type { Metadata } from "next";
import localFont from "next/font/local";
import { Staatliches, Carme, Honk, Silkscreen, Jersey_10, Sankofa_Display, Climate_Crisis} from 'next/font/google'
import "./globals.css";
import 'flowbite';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const staatliches = Staatliches({
  subsets: ['latin'],
  weight: '400', // satu-satunya weight yang tersedia
  variable: '--font-staatliches',
});

const carme = Carme({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-carme",
});

const honk = Honk({
  weight: "400",
  subsets: ["latin"],
  display: 'swap' ,
  variable: "--font-honk",
});

const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-silkscreen",
});

const jersey10 = Jersey_10({
  weight: "400",
  subsets: ["latin"],
  display: 'swap' ,
  variable: "--font-jersey10",
});

const sankofa = Sankofa_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sankofa",
});

const cc = Climate_Crisis({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cc",
});

export const metadata: Metadata = {
  title: "Bima's Portofolio",
  description: "Welcome to my world",
  icons: {
    icon:"/assets/rj.ico",
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
        className={`${geistSans.variable} ${cc.variable} ${jersey10.variable} ${sankofa.variable} ${silkscreen.variable} ${geistMono.variable} ${staatliches.variable} ${carme.variable} ${honk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
