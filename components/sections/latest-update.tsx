"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles } from "lucide-react"

interface LatestUpdateContent {
  title: string
  content: string
}

interface LatestUpdateProps {
  content: LatestUpdateContent
}

export function LatestUpdate({ content }: LatestUpdateProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="latest-update" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-gradient-to-b from-stone-50 to-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-6 h-6 text-slate-600" />
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {content.title}
            </motion.h2>
          </motion.div>

          <motion.div className="prose prose-xl prose-slate max-w-none">
            {content.content.split("\n\n").map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 md:mb-8 font-light text-slate-700 px-2 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                whileHover={{ scale: 1.01 }}
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

