import type React from "react"
import type { Metadata } from "next"
import { Inter, Crimson_Pro } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ahmed Mansour - Founder & CEO of Avyren",
  description:
    "Ahmed Mansour is the Founder & CEO of Avyren. Building simple, AI-powered tools for small businesses and empowering entrepreneurs to grow.",
  keywords: "Ahmed Mansour, Avyren, Founder, CEO, entrepreneur, AI tools, small business automation, Egypt",
  authors: [{ name: "Ahmed Mansour" }],
  creator: "Ahmed Mansour",
  openGraph: {
    title: "Ahmed Mansour - Founder & CEO of Avyren",
    description: "Building simple, AI-powered tools for small businesses and empowering entrepreneurs to grow.",
    url: "https://ahmedmansour.com",
    siteName: "Ahmed Mansour",
    type: "website",
    images: [
      {
        url: "/Untitled design - 2.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    
    card: "summary_large_image",
    title: "Ahmed Mansour - Founder & CEO of Avyren",
    description: "Building simple, AI-powered tools for small businesses and empowering entrepreneurs to grow.",
  },
  robots: {
    index: true,
    follow: true,
  },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonPro.variable} scroll-smooth`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
