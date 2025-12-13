"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card-masonry"
import { projects } from "@/lib/projects"

interface ProjectsMasonryProps {
  filter?: "all" | "work" | "personal"
}

export function ProjectsMasonry({ filter = "all" }: ProjectsMasonryProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.type === filter)

  if (!mounted) {
    return <div className="h-96" />
  }

  if (filteredProjects.length === 0) {
    return (
      <div className="container mx-auto px-6 md:px-12 py-12 text-center">
        <p className="text-lg text-muted-foreground">No projects found for this filter.</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 md:px-12 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.5,
              delay: (index % 2) * 0.1,
              ease: "easeOut",
            }}
          >
            <ProjectCard project={project} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
