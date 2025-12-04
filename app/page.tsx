"use client";

import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Certificates } from "@/components/sections/certificates";
import { Startups } from "@/components/sections/startups";
import { LatestUpdate } from "@/components/sections/latest-update";
import { Vision } from "@/components/sections/vision";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Navigation } from "@/components/navigation";
import { ScrollProgress } from "@/components/scroll-progress";
import { AnimatedCursor } from "@/components/animated-cursor";

// Editable Content Configuration
const siteContent = {
  hero: {
    name: "Avyren",
    description: "AI-Powered Tools for Growing Businesses",
    subheadline:
      "Automate your business. Grow without limits. AI-powered tools that handle customer messages, bookings, orders, and support—so you can focus on what matters most.",
    ctaText: "Start Free Trial",
    portraitAlt: "Avyren - AI-Powered Tools for Small Businesses",
  },
  about: {
    title: "Our Mission",
    content: `We believe every small business deserves powerful tools to grow. Not complex systems that take months to learn. Not expensive software that breaks the budget.

Avyren exists to give small businesses the same automation and intelligence that big companies use—without the complexity or cost.

We build simple, smart tools that save time, increase revenue, and help businesses serve customers better. Because when small businesses succeed, everyone wins.`,
    highlights: [
      { year: "2024", event: "Launched AI message management platform" },
      { year: "2025", event: "Helping hundreds of businesses automate operations" },
      { year: "2025", event: "Expanding to serve businesses worldwide" },
    ],
  },
  certificates: [
    {
      title: "JavaScript Masterclass",
      institution: "Udemy",
      description:
        "A comprehensive course covering the fundamentals and advanced concepts of JavaScript.",
      issueDate: "2023",
      credentialId: "UC-12345678",
    },
    {
      title: "React Native Bootcamp",
      institution: "Coursera",
      description:
        "Hands-on training in building mobile applications with a focus on user experience.",
      issueDate: "2023",
      credentialId: "CERT-87654321",
    },
    {
      title: "Startup Strategy & Growth",
      institution: "Harvard Online",
      description:
        "Learn how to launch, scale, and manage startups effectively.",
      issueDate: "2024",
      credentialId: "HRV-11223344",
    },
  ],
  startups: [
    {
      name: "Multi-Channel Messaging",
      description: "Connect Instagram, WhatsApp, Telegram, and your website. See all customer conversations in one dashboard with AI-powered responses.",
      status: "Active",
      year: "2024",
      category: "AI Platform",
      link: "#",
    },
    {
      name: "Automated Bookings",
      description: "Customers book appointments directly through messages. Your calendar stays updated, and reminders go out automatically.",
      status: "Active",
      year: "2024",
      category: "Automation",
      link: "#",
    },
    {
      name: "Order Management",
      description: "Process orders, track status, send confirmations, and handle follow-ups—all without manual work.",
      status: "Active",
      year: "2024",
      category: "CRM & Sales",
      link: "#",
    },
  ],
  startupsNote:
    "Everything you need to automate your business operations, all in one simple platform.",
  latestUpdate: {
    title: "What We're Building Now",
    content: `Right now, we're focused on making our AI message management system even smarter and more powerful.

We're adding support for more messaging channels, improving our AI's understanding of complex requests, and building new automation features that save even more time.

Our latest project: an advanced booking system that handles group reservations, recurring appointments, and complex scheduling—all through simple messages.

We're also working on better analytics that show you exactly how automation is helping your business grow, with clear insights you can act on immediately.

Everything we build is based on feedback from business owners like you. If there's a feature that would help your business, we want to hear about it.`,
  },
  vision: {
    title: "Why Choose Avyren",
    content: `Built for Small Businesses
We understand your challenges because we're a small business too. Our tools solve real problems you face every day.

Simple, Not Simplistic
Powerful features without the complexity. If you can use WhatsApp, you can use Avyren.

AI That Actually Works
Our AI understands context, learns your business, and gets smarter over time. It's not just automated responses—it's intelligent assistance.

Affordable Pricing
Enterprise-level tools at small business prices. No hidden fees, no long-term contracts, just fair pricing that grows with you.

Fast Setup
Get started in minutes, not months. Connect your channels, customize your settings, and start automating today.

Reliable Support
Real people who understand your business. Get help when you need it, learn best practices, and grow with confidence.`,
  },
  testimonials: [
    {
      quote:
        "Ahmed's strategic vision and execution capabilities are exceptional. His ability to transform ideas into successful ventures is truly remarkable.",
      author: "Khalid Omar",
      title: "Entrepreneur",
      company: "ETIJAH",
    },
    {
      quote:
        "Working with Ahmed taught me the importance of clarity in business. His mentorship has been invaluable to my entrepreneurial journey.",
      author: "Abdul Moneim Al-Hajla",
      title: "Entrepreneur",
      company: "ADNAN",
    },
    {
      quote:
        "Ahmed combines strategic thinking with practical execution like no one else. His ventures consistently deliver meaningful impact.",
      author: "Mohamed Alaa",
      title: "Entrepreneur",
      company: "ZAMELE",
    },
  ],
  contact: {
    title: "Let's Connect",
    message:
      "Ready to collaborate on something meaningful? I'd love to hear from you.",
    email: "ahmed@example.com",
    linkedin: "https://linkedin.com/in/ahmedmansour",
    twitter: "https://twitter.com/ahmedmansour",
  },
  footer: {
    name: "Ahmed Masnour",
    tagline: "Crafted with purpose by Ahmed",
    year: new Date().getFullYear(),
  },
};

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollProgress />
      <AnimatedCursor />
      <Navigation />
      <Hero content={siteContent.hero} />
      <About content={siteContent.about} />
      {/* <Certificates certificates={siteContent.certificates} /> */}
      <Startups
        startups={siteContent.startups}
        note={siteContent.startupsNote}
      />
      <LatestUpdate content={siteContent.latestUpdate} />
      <Vision content={siteContent.vision} />
      <Testimonials testimonials={siteContent.testimonials} />
      <Contact content={siteContent.contact} footer={siteContent.footer} />
    </main>
  );
}
