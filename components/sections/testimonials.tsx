"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  quote: string
  author: string
  title: string
  company: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="testimonials" className="py-32 px-6 bg-stone-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.h2
            className="text-5xl lg:text-6xl font-serif text-slate-900 text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            What They Say
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={cardVariants}>
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="h-full bg-white transition-all duration-300 border-0 hover:shadow-lg">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <motion.div
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <Quote className="w-12 h-12 text-slate-300" />
                        </motion.div>
                        <motion.blockquote
                          className="text-lg leading-relaxed font-light text-slate-700"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                        >
                          "{testimonial.quote}"
                        </motion.blockquote>
                        <motion.div
                          className="pt-4 border-t border-stone-200"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                        >
                          <cite className="not-italic">
                            <motion.p
                              className="font-medium text-lg text-slate-900"
                              whileHover={{ x: 3 }}
                              transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                              {testimonial.author}
                            </motion.p>
                            <p className="text-sm text-slate-600">{testimonial.title}</p>
                            <p className="text-sm text-slate-500">{testimonial.company}</p>
                          </cite>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
