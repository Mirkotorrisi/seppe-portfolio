import type React from "react"
import { cn } from "@/lib/utils"

interface SectionPreTitleProps {
  children: React.ReactNode
  className?: string
}

export function SectionPreTitle({ children, className }: SectionPreTitleProps) {
  return (
    <div className={cn("font-caveat text-xl md:text-2xl block mb-2 neon-gradient-text", className)}>{children}</div>
  )
}
