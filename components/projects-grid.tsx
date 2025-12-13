"use client"

import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects"

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProjectCard project={project} index={index} />
        </motion.div>
      ))}
    </div>
  )
}
