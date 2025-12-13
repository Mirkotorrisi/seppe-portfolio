"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Calendar, User, Layers, Code } from "lucide-react"
import type { Project } from "@/lib/projects"
import { useTheme } from "next-themes"

interface ProjectCardProps {
  project: Project
  index: number
  onCardHover?: (index: number, isPartiallyVisible: boolean) => void
}

export function ProjectCard({ project, index, onCardHover }: ProjectCardProps) {
  const { theme } = useTheme()
  const [isTruncated, setIsTruncated] = useState(false)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkTruncation = () => {
      if (descriptionRef.current) {
        const { scrollHeight, clientHeight } = descriptionRef.current
        setIsTruncated(scrollHeight > clientHeight)
      }
    }

    // Check immediately
    checkTruncation()

    // And after a small delay to ensure the DOM has updated
    const timer = setTimeout(checkTruncation, 100)
    window.addEventListener("resize", checkTruncation)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", checkTruncation)
    }
  }, [project.description])

  // Check if card is partially visible when hovered
  const handleMouseEnter = () => {
    if (!cardRef.current || !onCardHover) return

    const rect = cardRef.current.getBoundingClientRect()
    const isPartiallyVisible =
      rect.left < 0 || rect.right > window.innerWidth || rect.top < 0 || rect.bottom > window.innerHeight

    onCardHover(index, isPartiallyVisible)
  }

  return (
    <div
      ref={cardRef}
      className={`glass-neon-card h-full flex flex-col group ${theme === "light" ? "light-card bg-gray-50/90" : ""} cursor-pointer transition-transform duration-300 hover:-translate-y-1`}
      onMouseEnter={handleMouseEnter}
    >
      <Link href={`/projects/${project.id}`} className="p-5 flex flex-col h-full">
        {/* Title and action button above the image */}
        <div className="mb-4 flex justify-between items-center">
          <h3 className="text-xl font-bold tracking-tight" title={project.title}>
            {project.title}
          </h3>
          <div
            className={`rounded-full p-2 backdrop-blur-sm transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-indigo-400 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(56,189,248,0.5)] ${
              theme === "light" ? "bg-white/90 border border-gray-200 text-gray-800" : "bg-white/10 text-white"
            }`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        {/* Image with overlaid chip */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/10 mb-4 neon-border">
          <Image
            src={project.coverImage || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Chip overlay */}
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                theme === "light"
                  ? "bg-white/90 text-gray-800 border border-gray-200"
                  : "bg-black/50 text-white backdrop-blur-sm border border-white/10"
              }`}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Project information below the image */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-cyan-400" />
            <span className={`text-xs ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
              {project.year}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-blue-400" />
            <span className={`text-xs ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
              {project.role}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-indigo-400" />
            <span className={`text-xs ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
              {project.tools.slice(0, 1).join(", ")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Code className="h-4 w-4 text-purple-400" />
            <span className={`text-xs ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
              {project.aiTools.slice(0, 1).join(", ")}
            </span>
          </div>
        </div>

        {/* Description with integrated Read More button */}
        <div className="flex-grow relative">
          <div className="relative">
            <p
              ref={descriptionRef}
              className={`text-sm ${theme === "light" ? "text-gray-600" : "text-muted-foreground"} overflow-hidden`}
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                lineHeight: "1.5em",
                maxHeight: "3em",
                paddingRight: "5.5rem", // Make space for the Read More button
              }}
            >
              {project.description}
            </p>

            {/* Read More button positioned inline with text */}
            <span
              className={`absolute bottom-0 right-0 text-sm font-medium inline-flex items-center gap-1.5 transition-colors ${
                theme === "light"
                  ? "text-blue-600 group-hover:text-blue-700 bg-gradient-to-l from-gray-50 via-gray-50"
                  : "text-blue-400 group-hover:text-blue-300 bg-gradient-to-l from-[#111117] via-[#111117]"
              } pl-2`}
            >
              Read More
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}
