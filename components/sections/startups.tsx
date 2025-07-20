"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Calendar, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Startup {
  name: string
  description: string
  status: string
  year: string
  category: string
  link: string
}

interface StartupsProps {
  startups: Startup[]
  note: string
}

export function Startups({ startups, note }: StartupsProps) {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Coming Soon":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <section id="startups" className="py-32 px-6 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.h2
            className="text-5xl lg:text-6xl font-serif text-slate-900 text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            Ventures I've Built
          </motion.h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
            {startups.map((startup, index) => (
              <motion.div key={index} variants={cardVariants}>
                <motion.div
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="h-full transition-all duration-300 border-0 bg-gradient-to-br from-stone-50 to-white group">
                    <CardContent className="p-10">
                      <div className="text-center space-y-6">
                        <div className="space-y-3">
                          <div className="flex items-center justify-center gap-3">
                            <motion.h3
                              className="text-3xl font-serif text-slate-900"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                              {startup.name}
                            </motion.h3>
                            {startup.status === "Coming Soon" && (
                              <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                              >
                                <Sparkles className="w-5 h-5 text-blue-600" />
                              </motion.div>
                            )}
                          </div>

                          <div className="flex items-center justify-center gap-4">
                            <motion.div className="flex items-center gap-2 text-slate-500" whileHover={{ scale: 1.05 }}>
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{startup.year}</span>
                            </motion.div>
                            <span
                              className={`text-sm font-medium px-3 py-1 rounded-full transition-all duration-300 ${getStatusColor(startup.status)}`}
                            >
                              {startup.status}
                            </span>
                          </div>

                          <p className="text-sm text-slate-500 font-medium tracking-wide uppercase">
                            {startup.category}
                          </p>
                        </div>

                        <motion.p
                          className="text-lg text-slate-600 leading-relaxed font-light"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                        >
                          {startup.description}
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            variant="outline"
                            className="w-full border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 bg-transparent"
                            aria-label={`Learn more about ${startup.name}`}
                            disabled={startup.status === "Coming Soon"}
                          >
                            {startup.status === "Coming Soon" ? "Stay Tuned" : "Learn More"}
                            <motion.div
                              whileHover={{ x: 3 }}
                              transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </motion.div>
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-lg text-slate-600 leading-relaxed italic font-light">"{note}"</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
