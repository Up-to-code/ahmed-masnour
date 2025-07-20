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
  title: "Ahmed Mansour - Entrepreneur & Business Builder",
  description:
    "Ahmed Mansour is an entrepreneur and business builder based in Egypt. Building companies from bold ideas and creating impact through clarity and vision.",
  keywords: "Ahmed Mansour, entrepreneur, business builder, startup, ITTIJA, ZAMELI, SAMAK, Egypt, innovation",
  authors: [{ name: "Ahmed Mansour" }],
  creator: "Ahmed Mansour",
  openGraph: {
    title: "Ahmed Mansour - Entrepreneur & Business Builder",
    description: "Building companies from bold ideas. Creating impact through clarity and vision.",
    url: "https://ahmedmansour.com",
    siteName: "Ahmed Mansour",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Mansour - Entrepreneur & Business Builder",
    description: "Building companies from bold ideas. Creating impact through clarity and vision.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
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
