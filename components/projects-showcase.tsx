"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { projects } from "@/lib/projects"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useTheme } from "next-themes"

// Select featured projects (2-3 main ones) and group others by category
const FEATURED_PROJECT_IDS = ["ai-powered-healthcare-dashboard", "fintech-mobile-app"]

export function ProjectsShowcase() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const featured = projects.filter((p) => FEATURED_PROJECT_IDS.includes(p.id))

  const remaining = projects.filter((p) => !FEATURED_PROJECT_IDS.includes(p.id))

  return (
    <section id="projects" className="section-spacing relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Featured Work</h2>
          <p className="text-lg text-muted-foreground">
            A curated selection of my best projects across different domains, showcasing design thinking and technical
            expertise.
          </p>
        </motion.div>

        {/* Featured Projects - Alternating Layout */}
        <div className="space-y-20 mb-20">
          {featured.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center`}
            >
              {/* Image - alternates left/right */}
              <div
                className={`relative aspect-video rounded-xl overflow-hidden group ${
                  idx % 2 === 1 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={project.coverImage || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>

              {/* Content */}
              <div className={`space-y-4 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    {project.category}
                  </span>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold"
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="text-muted-foreground text-lg leading-relaxed"
                >
                  {project.description}
                </motion.p>

                {/* Project Meta */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Year</p>
                    <p className="font-medium">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Role</p>
                    <p className="font-medium">{project.role}</p>
                  </div>
                </motion.div>

                {/* Tools */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                  className="pt-2"
                >
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">Tools</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className={`text-sm px-3 py-1 rounded-full ${
                          theme === "light" ? "bg-gray-100 text-gray-700" : "bg-white/5 text-white/70"
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* View Project Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="pt-4"
                >
                  <Link href={`/projects/${project.id}`} className="inline-flex items-center gap-2 group/btn">
                    <span className="text-sm font-medium">View Project</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Remaining Projects - Compact Grid */}
        {remaining.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 text-center"
            >
              More Projects
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-8">
              {remaining.map((project, idx) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/projects/${project.id}`}>
                    <div className="space-y-4">
                      {/* Compact Image */}
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={project.coverImage || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        />
                      </div>

                      {/* Compact Info */}
                      <div className="space-y-2">
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          {project.category} • {project.year}
                        </span>
                        <h4 className="text-lg font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-indigo-400 group-hover:bg-clip-text transition-all">
                          {project.title}
                        </h4>
                        <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
