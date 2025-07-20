"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Download, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Highlight {
  year: string
  event: string
}

interface AboutContent {
  title: string
  content: string
  highlights: Highlight[]
}

interface AboutProps {
  content: AboutContent
}

export function About({ content }: AboutProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="space-y-20"
        >
          <motion.h2
            className="text-5xl lg:text-6xl font-serif text-slate-900 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {content.title}
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Main Content */}
            <motion.div
              className="lg:col-span-2 space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="prose prose-xl prose-slate max-w-none">
                {content.content.split("\n\n").map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="text-xl text-slate-600 leading-relaxed mb-8 font-light"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white bg-transparent transition-all duration-300"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Résumé
                </Button>
              </motion.div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-serif text-slate-900 mb-8">Key Highlights</h3>
              <div className="space-y-4">
                {content.highlights.map((highlight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                    whileHover={{ x: 4 }}
                  >
                    <Card className="border-l-4 border-l-slate-900 border-t-0 border-r-0 border-b-0 bg-stone-50 hover:bg-stone-100 transition-colors duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-2">
                          <Calendar className="w-4 h-4 text-slate-600" />
                          <span className="text-sm font-medium text-slate-900">{highlight.year}</span>
                        </div>
                        <p className="text-slate-700 font-light">{highlight.event}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
