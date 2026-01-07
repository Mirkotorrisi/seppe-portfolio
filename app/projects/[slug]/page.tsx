"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { SiteHeader } from "@/components/site-header"
import { ArrowLeft, Calendar, User, Layers, CheckCircle } from "lucide-react"
import { type Project, projects } from "@/lib/projects"
import Link from "next/link"
import { StreamlinedBackground } from "@/components/ui-elements/streamlined-background"
import { SectionPreTitle } from "@/components/ui-elements/section-pre-title"
import { useTheme } from "next-themes"

export default function ProjectPage() {
  const params = useParams()
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const { theme } = useTheme() // Assuming a default dark theme

  useEffect(() => {
    if (params.slug) {
      const foundProject = projects.find((p) => p.id === params.slug)
      setProject(foundProject || null)
      setLoading(false)
    }
  }, [params.slug])

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
      </div>
    )
  }

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link href="/" className="mt-4 text-blue-500 hover:underline">
          Return to home
        </Link>
      </div>
    )
  }

  return (
    <main className="relative flex min-h-screen flex-col dark:bg-none">
      <StreamlinedBackground />
      <SiteHeader />

      <div className="pt-24 pb-24">
        {/* Hero Section */}
        <section className="section py-16">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <Link
                href="/"
                className="mb-6 inline-flex items-center gap-2 text-sm font-medium tracking-tight transition-colors relative group"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="group-hover:neon-gradient-text">Back to home</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <SectionPreTitle>Project showcase</SectionPreTitle>
              <h1 className="heading-xl mb-6 text-white">{project.title}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">{project.description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-neon-card overflow-hidden neon-border"
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={project.coverImage || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Rest of the page content remains the same */}
        {/* Project Overview */}
        <section className="section py-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Client Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-neon-card p-6"
              >
                <div className="flex flex-col items-center text-center p-2">
                  <div className="mb-4 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-blue-400">
                    <User className="h-6 w-6" />
                  </div>
                  <span className="block text-sm text-muted-foreground mb-1">Client</span>
                  <span className="text-lg font-medium">{project.client}</span>
                </div>
              </motion.div>

              {/* Year Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-neon-card p-6"
              >
                <div className="flex flex-col items-center text-center p-2">
                  <div className="mb-4 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-violet-400">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <span className="block text-sm text-muted-foreground mb-1">Year</span>
                  <span className="text-lg font-medium">{project.year}</span>
                </div>
              </motion.div>

              {/* Role Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-neon-card p-6"
              >
                <div className="flex flex-col items-center text-center p-2">
                  <div className="mb-4 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-purple-400">
                    <Layers className="h-6 w-6" />
                  </div>
                  <span className="block text-sm text-muted-foreground mb-1">Role</span>
                  <span className="text-lg font-medium">{project.role}</span>
                </div>
              </motion.div>
            </div>

            {/* Project Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="glass-neon-card p-8 mt-8"
            >
              <h2 className="text-xl font-bold mb-6">Project Overview</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2 text-blue-400">The Challenge</h3>
                  <p className="text-muted-foreground">{project.challenge}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-violet-400">The Solution</h3>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-purple-400">The Outcome</h3>
                  <p className="text-muted-foreground">{project.outcome}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Gallery */}
        <section className="section py-16">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <SectionPreTitle>Visual showcase</SectionPreTitle>
              <h2 className="heading-lg mb-4 text-white">Project Gallery</h2>
              <p className="text-lg text-muted-foreground">
                Explore the visual elements and key screens of this project.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-neon-card overflow-hidden neon-border group"
                >
                  <div className="relative aspect-video w-full">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section py-16">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <SectionPreTitle>Behind the scenes</SectionPreTitle>
              <h2 className="heading-lg mb-4 text-white">The Process</h2>
              <p className="text-lg text-muted-foreground">
                A look at the methodology and approach used to develop this project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-neon-card p-8"
            >
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">{project.process}</p>

                <h3 className="text-xl font-bold mt-8 mb-4">Key Achievements</h3>
                <ul className="space-y-3 pl-0">
                  <li className="flex items-start gap-2 pl-0">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Improved user engagement by implementing intuitive navigation patterns
                    </span>
                  </li>
                  <li className="flex items-start gap-2 pl-0">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Integrated AI-powered features that enhanced the overall user experience
                    </span>
                  </li>
                  <li className="flex items-start gap-2 pl-0">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Developed a responsive design system that works seamlessly across all devices
                    </span>
                  </li>
                  <li className="flex items-start gap-2 pl-0">
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Created a visually stunning interface that aligns with the client's brand identity
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section py-16">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`glass-neon-card p-12 text-center relative overflow-hidden border-2 ${
                theme === "light" ? "border-indigo-300 shadow-xl" : "border-indigo-500/40"
              }`}
              style={{
                backgroundImage:
                  theme === "light"
                    ? "linear-gradient(90deg, rgba(6, 182, 212, 0.85), rgba(59, 130, 246, 0.8), rgba(99, 102, 241, 0.85), rgba(59, 130, 246, 0.8), rgba(6, 182, 212, 0.85))"
                    : "linear-gradient(90deg, rgba(6, 182, 212, 0.5), rgba(59, 130, 246, 0.45), rgba(99, 102, 241, 0.55), rgba(59, 130, 246, 0.45), rgba(6, 182, 212, 0.5))",
                backgroundSize: "200% 100%",
              }}
            >
              {/* Add brighter decorative gradient elements */}
              <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-indigo-500/50 blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-violet-500/50 blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/40 blur-3xl"></div>

              <h2 className="heading-lg mb-6 text-white relative z-10" style={{ color: "white" }}>
                Interested in working together?
              </h2>
              <p
                className={`text-lg mb-8 max-w-2xl mx-auto relative z-10 ${
                  theme === "light" ? "text-white/90" : "text-muted-foreground"
                }`}
              >
                Let's collaborate on your next project and create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Link href="/about#contact">
                  <button className="relative overflow-hidden rounded-lg transition-all duration-300 px-6 py-3 text-sm font-medium w-full sm:w-auto bg-white text-blue-600 hover:bg-white/90 hover:shadow-lg hover:shadow-blue-500/20">
                    Get in Touch
                  </button>
                </Link>
                <Link href="/#projects">
                  <button className="relative overflow-hidden rounded-lg transition-all duration-300 px-6 py-3 text-sm font-medium w-full sm:w-auto bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 hover:shadow-lg hover:shadow-indigo-500/20">
                    View More Projects
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <footer className="py-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Seppe. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
