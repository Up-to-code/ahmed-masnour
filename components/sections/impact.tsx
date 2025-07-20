"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Quote } from "lucide-react"

interface Stat {
  number: string
  label: string
}

interface Testimonial {
  quote: string
  author: string
  title: string
}

interface ImpactContent {
  title: string
  description: string
  stats: Stat[]
  testimonials: Testimonial[]
}

interface ImpactProps {
  content: ImpactContent
}

export function Impact({ content }: ImpactProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="impact" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="space-y-20"
        >
          <div className="text-center space-y-8">
            <motion.h2
              className="text-4xl lg:text-5xl font-light text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {content.title}
            </motion.h2>

            <motion.p
              className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {content.description}
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            className="grid md:grid-cols-3 gap-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl lg:text-6xl font-light text-slate-900">{stat.number}</div>
                <div className="text-lg text-slate-600 font-light">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <div className="grid lg:grid-cols-2 gap-12">
            {content.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-slate-50 p-12 space-y-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <Quote className="w-8 h-8 text-slate-400" />
                <blockquote className="text-lg text-slate-700 font-light leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="pt-4 border-t border-slate-200">
                  <cite className="not-italic">
                    <p className="font-medium text-slate-900">{testimonial.author}</p>
                    <p className="text-sm text-slate-500 font-light">{testimonial.title}</p>
                  </cite>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
