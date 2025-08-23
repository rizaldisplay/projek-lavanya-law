import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WaButton from "@/components/WaButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lavanya Law Office",
  description: "Konsultasi hukum terpercaya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WaButton
          phone="6281234567890"
          message="Halo, saya ingin berkonsultasi hukum dengan Lavanya Law Office."
          position="br" // br | bl | tr | tl
          size="lg" // sm | md | lg
          tooltip="Chat sekarang"
        />
      </body>
    </html>
  );
}
