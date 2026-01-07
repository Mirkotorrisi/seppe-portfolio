"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const pathname = usePathname()
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Determine navigation links based on current path
  const showAboutLink = !pathname.includes("/about")
  const showWorkLink = pathname.includes("/about") || pathname.includes("/projects")

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-5 backdrop-blur-xl transition-colors">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="group relative" onClick={scrollToTop}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Logo Container with exact positioning */}
              <div className="relative w-[100px] h-[40px] flex items-center justify-start">
                {/* Base Logo - Always visible, fades out on hover */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                  style={{
                    backgroundImage: `url(/logo_seppe.svg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "left center",
                    backgroundSize: "contain",
                    filter:
                      mounted && theme === "light"
                        ? "brightness(0) saturate(100%)"
                        : "brightness(0) invert(1) saturate(100%)",
                  }}
                />

                {/* Gradient Logo - Hidden by default, appears on hover */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: "linear-gradient(90deg, rgb(6, 182, 212), rgb(59, 130, 246), rgb(99, 102, 241))",
                    WebkitMask: `url(/logo_seppe.svg) no-repeat left center / contain`,
                    mask: `url(/logo_seppe.svg) no-repeat left center / contain`,
                  }}
                />
              </div>
            </motion.div>
          </Link>

          {/* Navigation Section */}
          <nav className="flex items-center space-x-8">
            {/* Home Link */}
            {showWorkLink && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link href="/" className="relative group text-sm font-medium tracking-tight transition-colors" onClick={scrollToTop}>
                  <span className="relative z-10 group-hover:neon-gradient-text transition-all duration-300">Home</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            )}

            {/* About Link */}
            {showAboutLink && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Link href="/about" className="relative group text-sm font-medium tracking-tight transition-colors" onClick={scrollToTop}>
                  <span className="relative z-10 group-hover:neon-gradient-text transition-all duration-300">
                    About
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            )}

            {/* Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ThemeToggle />
            </motion.div>
          </nav>
        </div>
      </div>
    </header>
  )
}
