"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Linkedin, Twitter, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ContactContent {
  title: string
  message: string
  email: string
  linkedin: string
  twitter: string
}

interface FooterContent {
  name: string
  tagline: string
  year: number
}

interface ContactProps {
  content: ContactContent
  footer: FooterContent
}

export function Contact({ content, footer }: ContactProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-32 px-6 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="text-center space-y-8">
            <motion.h2
              className="text-5xl lg:text-6xl font-serif text-slate-900"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {content.title}
            </motion.h2>

            <motion.p
              className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {content.message}
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-slate-600" />
                  <div>
                    <p className="text-lg font-medium text-slate-900">Email</p>
                    <p className="text-slate-600 font-light">{content.email}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white bg-transparent transition-all duration-300"
                    onClick={() => window.open(content.linkedin, "_blank")}
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white bg-transparent transition-all duration-300"
                    onClick={() => window.open(content.twitter, "_blank")}
                  >
                    <Twitter className="w-5 h-5 mr-2" />
                    Twitter
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-stone-50 p-12"
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.01 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-3">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-3">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-3">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.footer
            className="pt-16 border-t border-stone-200 text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="space-y-4">
              <p className="text-slate-600 font-light">
                © {footer.year} {footer.name}. All rights reserved.
              </p>
              <p className="text-sm text-slate-500 italic font-light">{footer.tagline}</p>
            </div>
            <div className="flex justify-center gap-8 text-sm text-slate-500">
              {["Privacy Policy", "Terms of Service", "Contact"].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  className="hover:text-slate-900 transition-colors duration-300 font-light"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.9 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.footer>
        </motion.div>
      </div>
    </section>
  )
}
