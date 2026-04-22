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
  title: "Navanath Bhosale | AI Developer & Full Stack Engineer",
  description: "Portfolio of Navanath Janardan Bhosale, a CS student specializing in Agentic AI, RAG Pipelines, and Full Stack Development. Discover my projects in AI/ML and Web Engineering.",
  keywords: ["Navanath Bhosale", "AI Developer", "Web Developer", "Agentic AI", "RAG Pipeline", "Full Stack Developer India", "Next.js Portfolio"],
  authors: [{ name: "Navanath Bhosale" }],
  openGraph: {
    title: "Navanath Bhosale | AI Developer & Full Stack Engineer",
    description: "Building the future with Agentic AI and Modern Web Tech.",
    url: "https://navanathbhosale.me",
    siteName: "Navanath Bhosale Portfolio",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Navanath Bhosale Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navanath Bhosale | AI Developer",
    description: "Agentic AI & Full Stack Developer Portfolio",
    images: ["/banner.png"],
  },
  metadataBase: new URL("https://navanathbhosale.me"),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Navanath Bhosale",
              "url": "https://navanathbhosale.me",
              "jobTitle": "AI Developer & Full Stack Engineer",
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "DKTE College of Engineering, Kolhapur"
              },
              "sameAs": [
                "https://github.com/delta-vision0",
                "https://linkedin.com/in/navanathbhosale"
              ]
            })
          }}
        />
        <BackgroundGlow />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
