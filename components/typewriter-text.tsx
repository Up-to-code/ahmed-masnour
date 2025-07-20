"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypewriterTextProps {
  text: string
  delay?: number
  speed?: number
}

export function TypewriterText({ text, delay = 0, speed = 60 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(text.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        }, speed)
        return () => clearTimeout(timeout)
      } else {
        // Hide cursor after typing is complete
        setTimeout(() => setShowCursor(false), 1500)
      }
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [currentIndex, text, delay, speed])

  useEffect(() => {
    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 600)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <motion.div className="inline-block">
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-6 bg-slate-700 ml-1"
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      />
    </motion.div>
  )
}
