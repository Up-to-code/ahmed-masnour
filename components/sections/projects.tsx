"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  name: string
  description: string
  year: string
  status: string
  link: string
}

interface ProjectsProps {
  projects: Project[]
}

export function Projects({ projects }: ProjectsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-32 px-6 bg-slate-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-light text-slate-900 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ventures
          </motion.h2>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white p-12 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                whileHover={{ scale: 1.01, y: -4 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-4">
                      <h3 className="text-2xl font-medium text-slate-900 group-hover:text-slate-700 transition-colors">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Clock className="w-4 h-4" />
                        <span>{project.year}</span>
                      </div>
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          project.status === "Active" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                    <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl">{project.description}</p>
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white bg-transparent transition-all duration-300 group/btn"
                      disabled={project.status === "Coming Soon"}
                    >
                      {project.status === "Coming Soon" ? "Soon" : "Explore"}
                      <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
