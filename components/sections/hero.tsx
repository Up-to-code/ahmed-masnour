"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeroContent {
  name: string
  description: string
  subheadline: string
  ctaText: string
  portraitAlt: string
}

interface HeroProps {
  content: HeroContent
}

export function Hero({ content }: HeroProps) {
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-b from-white to-stone-50"
      style={{ opacity: heroOpacity, scale: heroScale }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Portrait */}
          <motion.div
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src="/Untitled design - 2.jpg"
                  alt={content.portraitAlt}
                  width={500}
                  height={700}
                  className="object-cover w-full max-w-md mx-auto grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="space-y-12 text-center lg:text-left order-1 lg:order-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="space-y-8">
              <motion.h1
                className="text-6xl lg:text-8xl font-serif text-slate-900 leading-tight tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {content.name}
              </motion.h1>

              <motion.p
                className="text-xl lg:text-2xl text-slate-600 font-light tracking-wide uppercase letter-spacing-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {content.description}
              </motion.p>

              <motion.p
                className="text-lg lg:text-xl text-slate-700 font-light leading-relaxed max-w-lg italic"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                "{content.subheadline}"
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col items-center lg:items-start gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-12 py-4 text-lg font-light tracking-wide transition-all duration-300 border-0"
                  onClick={scrollToAbout}
                  aria-label="Explore Ahmed's work"
                >
                  {content.ctaText}
                </Button>
              </motion.div>

              <motion.div
                className="flex flex-col items-center gap-2 text-slate-500"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <span className="text-sm font-light tracking-wide uppercase">Scroll to discover</span>
                <ArrowDown className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
