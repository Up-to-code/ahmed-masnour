"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Initiative {
  title: string
  description: string
  icon: string
}

interface Testimonial {
  quote: string
  author: string
  title: string
}

interface CommunityContent {
  title: string
  description: string
  initiatives: Initiative[]
  testimonials: Testimonial[]
}

interface CommunityProps {
  content: CommunityContent
}

export function Community({ content }: CommunityProps) {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="community" className="py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-sans font-light text-gray-800 text-center mb-8"
            variants={itemVariants}
          >
            {content.title}
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {content.description}
          </motion.p>

          {/* Initiatives */}
          <motion.div className="grid md:grid-cols-3 gap-8 mb-20" variants={itemVariants}>
            {content.initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="h-full bg-gradient-to-br from-blue-50 to-green-50 border-0 rounded-3xl">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="text-4xl mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      {initiative.icon}
                    </motion.div>
                    <h3 className="text-xl font-medium text-gray-800 mb-4">{initiative.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{initiative.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-3xl font-light text-gray-800 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              What People Say
            </motion.h3>

            <div className="grid lg:grid-cols-3 gap-8">
              {content.testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Card className="h-full bg-white border border-gray-100 rounded-3xl">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <motion.div
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <Quote className="w-8 h-8 text-blue-600 opacity-60" />
                        </motion.div>
                        <blockquote className="text-gray-600 leading-relaxed italic">"{testimonial.quote}"</blockquote>
                        <div className="pt-4 border-t border-gray-100">
                          <cite className="not-italic">
                            <p className="font-medium text-gray-800">{testimonial.author}</p>
                            <p className="text-sm text-gray-500">{testimonial.title}</p>
                          </cite>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
