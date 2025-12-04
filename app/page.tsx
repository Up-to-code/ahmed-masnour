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
    title: "The Avyren Story",
    story: [
      {
        title: "1. How My Journey Started",
        text: "My journey didn't start in a computer lab. It started in business school. I was 17, studying management and marketing, fascinated by how companies grow. But I quickly realized that in the modern world, growth needs technology. So, I taught myself to code. I spent years working as a freelancer, building websites and apps for all kinds of clients. I loved the work, but I started noticing a pattern. A painful one.",
      },
      {
        title: "2. The Problem I Saw in the World",
        text: "Every small business I worked with was drowning in chaos. They were overwhelmed by messages on Instagram and WhatsApp. They were losing hours every day manually booking appointments. They had no organized way to track their customers. I saw a huge gap. Big corporations had powerful, expensive software to handle everything for them. Small businesses? They were left with nothing but spreadsheets and manual replies. It felt unfair. Why should the best tools be reserved only for the giants?",
      },
      {
        title: "3. The Moment the Idea for Avyren Was Born",
        text: "The turning point came when I watched a client lose a sale simply because they couldn't reply fast enough. That’s when it hit me. Small businesses didn't need \"more features.\" They needed simplicity. They needed tools that worked for them, not against them. I imagined a world where a small team could operate with the power of a big enterprise. Where AI could handle the busy work—answering questions, booking slots, managing data—so the owners could focus on their passion. That idea became Avyren.",
      },
      {
        title: "4. Building the Product and Facing Challenges",
        text: "Building Avyren wasn't a straight line to success. It was a winding road of late nights and hard lessons. I had no big budget. I was a solo founder, learning everything from scratch. I built product after product, refining my skills, and often failing. There were days when the code wouldn't work, and the path forward seemed impossible. But I kept going. I was driven by the belief that small businesses deserve better. Every challenge I faced was just another problem I had to solve for my future users.",
      },
      {
        title: "5. My Vision for Avyren and the Future",
        text: "Today, Avyren is the realization of that early dream. We are building simple, global, AI-powered solutions that empower entrepreneurs. We automate the chaos—connecting Instagram, WhatsApp, Telegram, and websites into one smooth flow. My mission is simple: to help small teams achieve big results, without needing a big staff. We are leveling the playing field.",
      },
      {
        title: "6. A Personal Message from Ahmed, Founder & CEO",
        text: "\"To every entrepreneur fighting to grow their dream: I see you. I know how hard it is to wear every hat in your business. I built Avyren because I believe you shouldn't have to do it alone. You deserve tools that are as ambitious as you are. Avyren is more than just software to me. It’s my promise to you that technology should be your greatest ally, not your biggest headache. Let’s grow together.\"\n\n— Ahmed, Founder & CEO of Avyren",
      },
    ],
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
