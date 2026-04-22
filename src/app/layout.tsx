import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import BackgroundGlow from "@/components/ui/BackgroundGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Navanath Janardan Bhosale | AI Developer & Web Developer",
  description: "Portfolio of Navanath Janardan Bhosale, a CS student specializing in AI/ML, Agentic AI, and Full Stack Development.",
  keywords: ["AI Developer", "Web Developer", "Navanath Bhosale", "Machine Learning", "React", "Next.js", "LangChain"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BackgroundGlow />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
