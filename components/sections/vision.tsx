"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, Target, Heart } from "lucide-react"

interface VisionContent {
  title: string
  content: string
}

interface VisionProps {
  content: VisionContent
}

export function Vision({ content }: VisionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const icons = [Lightbulb, Target, Heart]

  return (
    <section id="vision" className="py-32 px-6 bg-slate-900 text-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="text-5xl lg:text-6xl font-serif mb-16" variants={itemVariants}>
            {content.title}
          </motion.h2>

          <motion.div className="flex justify-center gap-8 mb-16" variants={itemVariants}>
            {icons.map((Icon, index) => (
              <motion.div
                key={index}
                className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="prose prose-xl prose-invert max-w-none" variants={itemVariants}>
            {content.content.split("\n\n").map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-xl lg:text-2xl leading-relaxed mb-8 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
                whileHover={{ scale: 1.02 }}
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
