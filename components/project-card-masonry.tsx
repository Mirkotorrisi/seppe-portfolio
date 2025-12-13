"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Calendar, User, Layers } from "lucide-react"
import type { Project } from "@/lib/projects"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { theme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
        className={`group h-full overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:-translate-y-1 ${
          theme === "light" ? "light-card bg-gray-50/90" : "glass-neon-card"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image section with overlay */}
        <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-white/10 mb-4 neon-border">
          <Image
            src={project.coverImage || "/placeholder.svg?height=400&width=600&query=project"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300`} />

          {/* Category chip */}
          <div className="absolute top-3 left-3 z-10">
            <motion.span
              animate={{ y: isHovered ? 0 : 0 }}
              className={`text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm ${
                theme === "light"
                  ? "bg-white/90 text-gray-800 border border-gray-200"
                  : "bg-black/50 text-white border border-white/10"
              }`}
            >
              {project.category}
            </motion.span>
          </div>
        </div>

        <div className="p-5 flex flex-col h-full">
          {/* Title and action button */}
          <div className="mb-4 flex justify-between items-start gap-3">
            <h3 className="text-lg font-bold tracking-tight flex-1 line-clamp-2">{project.title}</h3>
            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1, rotate: isHovered ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className={`rounded-full p-2 backdrop-blur-sm transition-all flex-shrink-0 ${
                isHovered
                  ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                  : theme === "light"
                    ? "bg-white/90 border border-gray-200 text-gray-800"
                    : "bg-white/10 text-white"
              }`}
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.div>
          </div>

          {/* Project metadata */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-cyan-400 flex-shrink-0" />
              <span className={`text-xs ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
                {project.year}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-blue-400 flex-shrink-0" />
              <span className={`text-xs ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
                {project.role}
              </span>
            </div>
            <div className="flex items-center gap-2 col-span-2">
              <Layers className="h-4 w-4 text-indigo-400 flex-shrink-0" />
              <span className={`text-xs ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}>
                {project.tools.slice(0, 2).join(", ")}
              </span>
            </div>
          </div>

          {/* Description */}
          <motion.div
            animate={{ height: isHovered ? "auto" : "3em" }}
            transition={{ duration: 0.3 }}
            className="flex-grow relative overflow-hidden"
          >
            <p
              className={`text-sm ${theme === "light" ? "text-gray-600" : "text-muted-foreground"}`}
              style={{
                display: "-webkit-box",
                WebkitLineClamp: isHovered ? 3 : 2,
                WebkitBoxOrient: "vertical",
                lineHeight: "1.5em",
              }}
            >
              {project.description}
            </p>
          </motion.div>

          {/* Read More button - appears on hover */}
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 5 }}
            transition={{ duration: 0.3 }}
            className="mt-3 flex items-center gap-1.5 text-sm font-medium text-blue-400 group-hover:text-blue-300"
          >
            Read More
            <ArrowUpRight className="h-3.5 w-3.5" />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  )
}
