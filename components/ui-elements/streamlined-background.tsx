"use client"

import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"

export function StreamlinedBackground() {
  const { theme } = useTheme()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isMouseOnScreen, setIsMouseOnScreen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const animationFrameRef = useRef<number | null>(null)

  // Wait for theme to be available
  useEffect(() => {
    setMounted(true)
  }, [])

  // Background colors based on theme
  const backgroundColor = mounted && theme === "light" ? "rgb(255, 255, 255)" : "rgb(6, 6, 10)"

  // Enhanced theme colors with increased luminosity and saturation
  const themeColors = {
    // Lighter colors for light theme
    blue: mounted && theme === "light" ? "59, 130, 246" : "65, 145, 255", // Increase blue prominence
    indigo: mounted && theme === "light" ? "99, 102, 241" : "120, 110, 255", // Secondary indigo
    purple: mounted && theme === "light" ? "139, 92, 246" : "150, 100, 255", // Tertiary purple
  }

  // Create static gradients using only the theme colors, adjusted for refined hover effect
  const gradientStyle = {
    backgroundColor,
    backgroundImage:
      mounted && theme === "light"
        ? `
radial-gradient(circle at 15% 85%, rgba(${themeColors.blue}, 0.12) 0%, transparent 35%),
radial-gradient(circle at 85% 15%, rgba(${themeColors.indigo}, 0.12) 0%, transparent 35%),
radial-gradient(circle at 50% 60%, rgba(${themeColors.purple}, 0.09) 0%, transparent 45%),
radial-gradient(circle at 75% 75%, rgba(${themeColors.blue}, 0.08) 0%, transparent 30%),
radial-gradient(circle at 25% 25%, rgba(${themeColors.indigo}, 0.08) 0%, transparent 30%)
`
        : `
    radial-gradient(circle at 15% 85%, rgba(${themeColors.blue}, 0.15) 0%, transparent 45%),
    radial-gradient(circle at 85% 15%, rgba(${themeColors.indigo}, 0.15) 0%, transparent 45%),
    radial-gradient(circle at 50% 60%, rgba(${themeColors.purple}, 0.10) 0%, transparent 60%),
    radial-gradient(circle at 75% 75%, rgba(${themeColors.blue}, 0.08) 0%, transparent 35%),
    radial-gradient(circle at 25% 25%, rgba(${themeColors.indigo}, 0.08) 0%, transparent 35%)
  `,
  }

  // Track mouse position and screen presence
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsMouseOnScreen(true)
    }

    const handleMouseLeave = () => {
      setIsMouseOnScreen(false)
    }

    const handleMouseEnter = () => {
      setIsMouseOnScreen(true)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [])

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Canvas effect for the dynamic grid
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || !mounted) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with device pixel ratio for sharper rendering
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }

    setCanvasDimensions()

    // Grid cell size - 8px
    const gridSize = 8

    // Draw the grid with dynamic lighting based on mouse and scroll
    const drawGrid = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Normalize mouse position (0-1 range)
      const normalizedMouseX = mousePosition.x / window.innerWidth
      const normalizedMouseY = mousePosition.y / window.innerHeight

      // Normalize scroll position for effect variation
      const maxScroll = document.body.scrollHeight - window.innerHeight
      const normalizedScroll = maxScroll > 0 ? scrollPosition / maxScroll : 0

      // Refined light sources for a more subtle and integrated dark mode
      const lightSource1 = {
        x: mousePosition.x,
        y: mousePosition.y,
        radius: window.innerWidth * (theme === "light" ? 0.4 : 0.45) + normalizedScroll * 0.2 * window.innerWidth,
        intensity: theme === "light" ? 0.15 + normalizedScroll * 0.05 : 0.16 + normalizedScroll * 0.04, // More subtle in dark mode
      }

      const lightSource2 = {
        x: window.innerWidth * (1 - normalizedMouseX),
        y: window.innerHeight * (1 - normalizedMouseY),
        radius: window.innerWidth * (theme === "light" ? 0.25 : 0.3) + normalizedScroll * 0.15 * window.innerWidth,
        intensity: theme === "light" ? 0.08 + normalizedScroll * 0.02 : 0.09 + normalizedScroll * 0.015, // More subtle in dark mode
      }

      // Create a third light source that moves with scroll
      const lightSource3 = {
        x: window.innerWidth * 0.5,
        y: window.innerHeight * (0.3 + normalizedScroll * 0.4),
        radius: window.innerWidth * (theme === "light" ? 0.35 : 0.4),
        intensity: theme === "light" ? 0.07 : 0.065, // More subtle in dark mode
      }

      // Adjusted interaction radii for a more subtle effect
      const hoverRadius = theme === "light" ? 300 : 350 // Slightly larger radius in dark mode
      const highlightRadius = theme === "light" ? 150 : 180
      const subtleEffectRadius = theme === "light" ? 500 : 600 // Extended subtle effect range

      // Draw vertical lines with dynamic lighting
      for (let x = 0; x <= window.innerWidth; x += gridSize) {
        for (let y = 0; y <= window.innerHeight; y += gridSize) {
          // Calculate distance from each light source
          const dist1 = Math.sqrt(Math.pow(x - lightSource1.x, 2) + Math.pow(y - lightSource1.y, 2))
          const dist2 = Math.sqrt(Math.pow(x - lightSource2.x, 2) + Math.pow(y - lightSource2.y, 2))
          const dist3 = Math.sqrt(Math.pow(x - lightSource3.x, 2) + Math.pow(y - lightSource3.y, 2))

          // Calculate opacity based on distance from light sources
          const isUnderCursor = dist1 < hoverRadius
          const isInSubtleRange = dist1 < subtleEffectRadius

          // Base opacity calculation - adjusted for light theme
          const opacityMultiplier = theme === "light" ? 0.9 : 1
          const regularOpacity = Math.max(
            0,
            lightSource1.intensity * (1 - dist1 / lightSource1.radius) * opacityMultiplier,
          )

          // Refined hover effect with softer appearance for dark mode
          const hoverBoostFactor = theme === "light" ? 0.2 : 0.18 // Reduced intensity for dark mode
          const hoverBoostExponent = theme === "light" ? 1.8 : 2.2 // More gradual falloff for dark mode
          const hoverBoost = isUnderCursor
            ? hoverBoostFactor * Math.pow(1 - dist1 / hoverRadius, hoverBoostExponent)
            : isInSubtleRange && isMouseOnScreen
              ? (theme === "light" ? 0.07 : 0.06) * Math.pow(1 - dist1 / subtleEffectRadius, 3)
              : 0

          const opacity1 = regularOpacity + hoverBoost
          const opacity2 = Math.max(0, lightSource2.intensity * (1 - dist2 / lightSource2.radius) * opacityMultiplier)
          const opacity3 = Math.max(0, lightSource3.intensity * (1 - dist3 / lightSource3.radius) * opacityMultiplier)

          // Adjusted maximum opacity for better visual balance
          const maxOpacity = theme === "light" ? 0.4 : 0.4 // Reduced max opacity in dark mode
          const combinedOpacity = Math.min(maxOpacity, opacity1 + opacity2 + opacity3)

          // Create a more refined cursor highlight effect with better integration in dark mode
          if (dist1 < highlightRadius && isMouseOnScreen) {
            // Softer highlight with more gradual falloff in dark mode
            const cursorHighlightFactor = theme === "light" ? 0.15 : 0.12
            const cursorHighlightExponent = theme === "light" ? 2 : 2.4
            const cursorHighlight =
              cursorHighlightFactor * Math.pow(1 - dist1 / highlightRadius, cursorHighlightExponent)

            // Draw a highlight point with theme-appropriate colors
            const highlightColor = theme === "light" ? "rgba(0, 0, 0, " : "rgba(255, 255, 255, "
            ctx.fillStyle = `${highlightColor}${cursorHighlight})`
            ctx.beginPath()
            ctx.arc(x, y, theme === "light" ? 1 : 1.1, 0, Math.PI * 2)
            ctx.fill()

            // Enhanced colored glow with reduced intensity in dark mode for better integration
            const glowOpacityMultiplier = theme === "light" ? 0.4 : 0.35
            const innerHighlightRadius = highlightRadius * (theme === "light" ? 0.4 : 0.5)

            // Use a smoother transition between colors
            let glowColor
            if (dist1 < innerHighlightRadius) {
              // Create a gradient-like effect based on distance for better blending
              const blendFactor = dist1 / innerHighlightRadius
              const blueWeight = Math.min(blendFactor * 1.5, 1)

              glowColor = `rgba(${themeColors.blue}, ${cursorHighlight * glowOpacityMultiplier * (1 - blueWeight * 0.3)})`
            } else {
              glowColor = `rgba(${themeColors.blue}, ${cursorHighlight * (glowOpacityMultiplier * 0.5)})`
            }

            ctx.fillStyle = glowColor
            ctx.beginPath()
            ctx.arc(x, y, theme === "light" ? 1.8 : 2.2, 0, Math.PI * 2)
            ctx.fill()
          }

          // Skip drawing if opacity is too low (performance optimization)
          if (combinedOpacity < 0.01) continue

          // Enhanced color variation based on position for light theme
          let gridColor
          if (dist1 < dist2 && dist1 < dist3) {
            // Closer to light source 1 - use blue
            gridColor = `rgba(${themeColors.blue}, ${combinedOpacity})`
          } else if (dist2 < dist3) {
            // Closer to light source 2 - use indigo
            gridColor = `rgba(${themeColors.indigo}, ${combinedOpacity})`
          } else {
            // Closer to light source 3 - use purple
            gridColor = `rgba(${themeColors.purple}, ${combinedOpacity})`
          }

          // Draw grid intersection point with dynamic lighting
          ctx.fillStyle = gridColor
          ctx.fillRect(x - 0.5, y - 0.5, 1, 1)
        }
      }
    }

    // Animate the grid
    const animate = () => {
      drawGrid()
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      setCanvasDimensions()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [mousePosition, scrollPosition, isMouseOnScreen, theme, mounted])

  return (
    <div
      className={`fixed inset-0 -z-10 h-full w-full ${theme === "light" ? "light-background" : ""}`}
      style={{
        backgroundColor: gradientStyle.backgroundColor,
        backgroundImage: gradientStyle.backgroundImage,
      }}
    >
      {/* Light theme enhancement - more subtle and unified */}
      {theme === "light" && (
        <div className="absolute inset-0 pointer-events-none opacity-40">
          {/* Create subtle color sections that blend with the background */}
          <div className="absolute top-[10%] left-[5%] w-[25%] h-[30%] bg-blue-50/30 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[15%] right-[10%] w-[20%] h-[25%] bg-indigo-50/30 rounded-full blur-[150px]"></div>
          <div className="absolute top-[40%] right-[15%] w-[30%] h-[20%] bg-purple-50/30 rounded-full blur-[150px]"></div>
        </div>
      )}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  )
}
