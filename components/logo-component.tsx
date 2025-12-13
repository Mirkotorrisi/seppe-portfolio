"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

interface LogoComponentProps {
  className?: string
  width?: number
  height?: number
  showGradientOnHover?: boolean
}

export function LogoComponent({
  className = "",
  width = 100,
  height = 40,
  showGradientOnHover = true,
}: LogoComponentProps) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [logoError, setLogoError] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Fallback logo component
  const FallbackLogo = () => (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`text-xl font-bold tracking-tight transition-all duration-300 ${
          mounted && theme === "light" ? "text-gray-800" : "text-white"
        } ${isHovered && showGradientOnHover ? "neon-gradient-text" : ""}`}
      >
        Seppe
      </span>
    </div>
  )

  if (logoError) {
    return <FallbackLogo />
  }

  return (
    <div
      className={`relative ${className}`}
      style={{ width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main logo */}
      <Image
        src="/logo_seppe.svg"
        alt="Seppe Logo"
        width={width}
        height={height}
        className="w-full h-full object-contain transition-all duration-300"
        priority
        onError={() => setLogoError(true)}
        style={{
          filter:
            mounted && theme === "light" ? "brightness(0) saturate(100%)" : "brightness(0) invert(1) saturate(100%)",
        }}
      />

      {/* Gradient overlay on hover */}
      {showGradientOnHover && (
        <div
          className={`absolute inset-0 transition-opacity duration-300 pointer-events-none ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(90deg, rgb(6, 182, 212), rgb(59, 130, 246), rgb(99, 102, 241))",
              WebkitMask: `url(/logo_seppe.svg) no-repeat center / contain`,
              mask: `url(/logo_seppe.svg) no-repeat center / contain`,
            }}
          />
        </div>
      )}
    </div>
  )
}
