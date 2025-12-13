"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface AnimatedTextProps {
  texts: string[]
  className?: string
}

export function AnimatedText({ texts, className = "" }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [texts.length])

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <div className={`relative h-[1.5em] overflow-hidden ${className}`}>
      {texts.map((text, index) => (
        <motion.div
          key={text}
          initial="hidden"
          animate={index === currentIndex ? "visible" : "exit"}
          variants={variants}
          transition={{ duration: 0.5 }}
          className={`absolute inset-0 ${index === currentIndex ? "block" : "hidden"}`}
        >
          {text}
        </motion.div>
      ))}
    </div>
  )
}
