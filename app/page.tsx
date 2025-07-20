"use client"

import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Certificates } from "@/components/sections/certificates"
import { Startups } from "@/components/sections/startups"
import { Vision } from "@/components/sections/vision"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"
import { Navigation } from "@/components/navigation"
import { ScrollProgress } from "@/components/scroll-progress"
import { AnimatedCursor } from "@/components/animated-cursor"

// Editable Content Configuration
const siteContent = {
  hero: {
    name: "Ahmed Mansour",
    description: "Entrepreneur · Business Builder · Vision for Growth",
    subheadline: "Building companies from bold ideas. Creating impact through clarity and vision.",
    ctaText: "Explore My Work",
    portraitAlt: "Ahmed Mansour - Entrepreneur and Business Builder",
  },
  about: {
    title: "About Ahmed",
    content: `Ahmed Mansour is an entrepreneur and business builder based in Egypt.

With a passion for creating companies from the ground up, he combines strategy, design, and execution to bring ideas to life.

His work spans startup building, digital innovation, and growth-focused leadership.`,
    highlights: [
      { year: "2020", event: "Founded first startup" },
      { year: "2022", event: "Launched ITTIJA" },
      { year: "2023", event: "Established ZAMELI" },
      { year: "2024", event: "Developing SAMAK" },
    ],
  },
  certificates: [
    {
      title: "JavaScript Masterclass",
      institution: "Udemy",
      description: "A comprehensive course covering the fundamentals and advanced concepts of JavaScript.",
      issueDate: "2023",
      credentialId: "UC-12345678",
    },
    {
      title: "React Native Bootcamp",
      institution: "Coursera",
      description: "Hands-on training in building mobile applications with a focus on user experience.",
      issueDate: "2023",
      credentialId: "CERT-87654321",
    },
    {
      title: "Startup Strategy & Growth",
      institution: "Harvard Online",
      description: "Learn how to launch, scale, and manage startups effectively.",
      issueDate: "2024",
      credentialId: "HRV-11223344",
    },
  ],
  startups: [
    {
      name: "ITTIJA",
      description: "Smart navigation solutions for modern mobility.",
      status: "Active",
      year: "2022",
      category: "Navigation Technology",
      link: "#",
    },
    {
      name: "ZAMELI",
      description: "Digital certificate and learning platform.",
      status: "Active",
      year: "2023",
      category: "EdTech Platform",
      link: "#",
    },
    {
      name: "SAMAK",
      description: "A new platform on the horizon — stay tuned.",
      status: "Coming Soon",
      year: "2024",
      category: "Innovation Lab",
      link: "#",
    },
  ],
  startupsNote: "Each venture reflects a commitment to solving real problems with clarity and purpose.",
  vision: {
    title: "Vision",
    content: `I build products and companies that help people grow.

My vision is to bridge creativity and business through clarity, strategic thinking, and human-centered execution.

Every venture starts with a bold question — and ends with real impact.`,
  },
  testimonials: [
    {
      quote:
        "Ahmed's strategic vision and execution capabilities are exceptional. His ability to transform ideas into successful ventures is truly remarkable.",
      author: "Sarah Chen",
      title: "Tech Entrepreneur",
      company: "InnovateCorp",
    },
    {
      quote:
        "Working with Ahmed taught me the importance of clarity in business. His mentorship has been invaluable to my entrepreneurial journey.",
      author: "Omar Hassan",
      title: "Startup Founder",
      company: "GrowthLab",
    },
    {
      quote:
        "Ahmed combines strategic thinking with practical execution like no one else. His ventures consistently deliver meaningful impact.",
      author: "Maria Rodriguez",
      title: "Investment Partner",
      company: "Venture Capital Group",
    },
  ],
  contact: {
    title: "Let's Connect",
    message: "Ready to collaborate on something meaningful? I'd love to hear from you.",
    email: "ahmed@example.com",
    linkedin: "https://linkedin.com/in/ahmedmansour",
    twitter: "https://twitter.com/ahmedmansour",
  },
  footer: {
    name: "Ahmed Mansour",
    tagline: "Crafted with purpose by Ahmed",
    year: new Date().getFullYear(),
  },
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollProgress />
      <AnimatedCursor />
      <Navigation />
      <Hero content={siteContent.hero} />
      <About content={siteContent.about} />
      <Certificates certificates={siteContent.certificates} />
      <Startups startups={siteContent.startups} note={siteContent.startupsNote} />
      <Vision content={siteContent.vision} />
      <Testimonials testimonials={siteContent.testimonials} />
      <Contact content={siteContent.contact} footer={siteContent.footer} />
    </main>
  )
}
