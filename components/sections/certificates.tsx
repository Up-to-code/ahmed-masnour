"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, ExternalLink, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Certificate {
  title: string
  institution: string
  description: string
  issueDate: string
  credentialId: string
}

interface CertificatesProps {
  certificates: Certificate[]
}

export function Certificates({ certificates }: CertificatesProps) {
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
    <section id="certificates" className="py-32 px-6 bg-stone-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.h2
            className="text-5xl lg:text-6xl font-serif text-slate-900 text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            Certificates
          </motion.h2>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <motion.div key={index} variants={cardVariants}>
                <motion.div
                  whileHover={{
                    y: -8,
                    transition: { type: "spring", stiffness: 300, damping: 20 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Card className="h-full transition-all duration-300 border-0 bg-white hover:shadow-lg group cursor-pointer">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <motion.div
                            className="flex items-center gap-2 text-slate-700"
                            whileHover={{ x: 3 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <Award className="w-5 h-5" />
                            <span className="text-sm font-medium">{cert.institution}</span>
                          </motion.div>
                          <motion.div className="flex items-center gap-1 text-slate-500" whileHover={{ scale: 1.05 }}>
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{cert.issueDate}</span>
                          </motion.div>
                        </div>

                        <motion.h3
                          className="text-xl font-serif text-slate-900 leading-tight"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                        >
                          {cert.title}
                        </motion.h3>

                        <motion.p
                          className="text-slate-600 leading-relaxed font-light"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                        >
                          {cert.description}
                        </motion.p>

                        <motion.div
                          className="pt-4 border-t border-stone-200 flex items-center justify-between"
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                        >
                          <p className="text-xs text-slate-500">ID: {cert.credentialId}</p>
                          <motion.div
                            whileHover={{ rotate: 15, scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" />
                          </motion.div>
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
