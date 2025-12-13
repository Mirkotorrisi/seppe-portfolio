"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full relative overflow-hidden border border-white/10 w-9 h-9"
      >
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`rounded-full relative overflow-hidden w-9 h-9 transition-all group ${
        theme === "light"
          ? "bg-white/90 border border-gray-200 text-gray-800 hover:text-white"
          : "bg-white/5 border border-white/10 text-white hover:border-white/20"
      }`}
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 z-0"></div>
      {theme === "light" ? (
        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all relative z-10" />
      ) : (
        <Moon className="h-5 w-5 rotate-0 scale-100 transition-all relative z-10" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
