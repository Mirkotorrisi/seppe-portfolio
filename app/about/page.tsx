"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { Download, Briefcase, Code, Palette, Lightbulb, Cpu } from "lucide-react"
import { StreamlinedBackground } from "@/components/ui-elements/streamlined-background"
import { SectionPreTitle } from "@/components/ui-elements/section-pre-title"
import { ContactSection } from "@/components/contact-section"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function AboutPage() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const { theme } = useTheme()

  const skills = [
    { name: "UX/UI Design", icon: <Palette className="h-5 w-5" /> },
    { name: "Product Strategy", icon: <Briefcase className="h-5 w-5" /> },
    { name: "Prototyping", icon: <Code className="h-5 w-5" /> },
    { name: "User Research", icon: <Lightbulb className="h-5 w-5" /> },
    { name: "AI Integration", icon: <Cpu className="h-5 w-5" /> },
  ]

  useEffect(() => {
    console.log("Loading profile image from blob URL")
    // Scroll to top on mount
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [])

  return (
    <main className="relative flex min-h-screen flex-col">
      <StreamlinedBackground />
      <SiteHeader />

      <div className="pt-24">
        {/* Hero Section */}
        <section className="first-section section-spacing">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-left"
              >
                <SectionPreTitle>Hello there</SectionPreTitle>
                <h1 className={`heading-xl mb-6 ${theme === "light" ? "text-gray-800" : "text-white"}`}>About Me</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  I'm a Digital Product Designer with a passion for creating intuitive, user-centered experiences that
                  leverage the power of AI to solve complex problems. My approach combines creative thinking with
                  technical expertise to deliver solutions that exceed expectations.
                </p>

                <button
                  className="flex items-center justify-center gap-2 relative z-10 py-3 px-6 rounded-lg font-medium text-white overflow-hidden transition-all duration-300 border border-white/10 shadow-sm hover:shadow-lg hover:scale-[1.02] hover:border-white/20 gradient-button"
                  style={{
                    background:
                      "linear-gradient(90deg, rgb(6, 182, 212), rgb(59, 130, 246), rgb(99, 102, 241), rgb(59, 130, 246), rgb(6, 182, 212))",
                    backgroundSize: "300% 100%",
                  }}
                >
                  <Download className="h-4 w-4" /> Download Resume
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-[32px] glass-neon-card mx-auto md:mx-0">
                  {/* Fallback image in case the main image fails to load */}
                  {imageError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white text-center p-4">
                      <p>Image could not be loaded</p>
                    </div>
                  )}

                  {/* Loading indicator */}
                  {!imageLoaded && !imageError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                      <div className="h-8 w-8 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>
                    </div>
                  )}

                  {/* Main image with event handlers */}
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/parisi_square.png-bPO6t8jZDOnyM4HRfxfGCJvGDA4rTc.jpeg"
                    alt="Seppe"
                    fill
                    sizes="(max-width: 768px) 256px, 320px"
                    className={`object-cover transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                    priority
                    onLoad={() => setImageLoaded(true)}
                    onError={() => {
                      console.error("Failed to load profile image")
                      setImageError(true)
                    }}
                  />

                  {/* Placeholder image as a backup */}
                  {!imageLoaded && !imageError && <div className="absolute inset-0 bg-gray-700"></div>}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Current Role */}
        <section className="section-spacing">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w3xl mx-auto text-center"
            >
              <SectionPreTitle>Professional journey</SectionPreTitle>
              <h2 className={`heading-lg mb-4 ${theme === "light" ? "text-gray-800" : "text-white"}`}>Currently at</h2>
              <p className={`text-2xl font-medium mb-6 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                CreationDose
              </p>
              <p className="text-lg text-muted-foreground">
                Leading design initiatives for AI-powered products that enhance user experiences across various
                industries, from healthcare to finance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* AI Approach */}
        <section className="section-spacing">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <SectionPreTitle>My philosophy</SectionPreTitle>
              <h2 className={`heading-lg mb-4 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                AI & Design Approach
              </h2>
              <p className="text-lg text-muted-foreground">
                Creating intelligent, human-centered experiences that leverage the power of AI while maintaining ethical
                standards.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-neon-card p-6"
              >
                <h3 className={`text-xl font-bold mb-4 ${theme === "light" ? "text-gray-800" : ""}`}>
                  Human-Centered AI
                </h3>
                <p className="text-muted-foreground">
                  I believe AI should enhance human capabilities, not replace them. My design approach focuses on
                  creating symbiotic relationships between users and AI systems, where technology adapts to human needs
                  and preferences.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-neon-card p-6"
              >
                <h3 className={`text-xl font-bold mb-4 ${theme === "light" ? "text-gray-800" : ""}`}>
                  Ethical Design Principles
                </h3>
                <p className="text-muted-foreground">
                  I prioritize transparency, fairness, and inclusivity in all my AI-driven designs. This means creating
                  interfaces that clearly communicate how AI is being used and ensuring that systems work equitably for
                  all users.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-neon-card p-6"
              >
                <h3 className={`text-xl font-bold mb-4 ${theme === "light" ? "text-gray-800" : ""}`}>
                  Iterative Prototyping
                </h3>
                <p className="text-muted-foreground">
                  AI systems require continuous refinement. I employ rapid prototyping and testing methodologies to
                  gather user feedback early and often, allowing for iterative improvements that enhance the
                  intelligence and usability of the final product.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass-neon-card p-6"
              >
                <h3 className={`text-xl font-bold mb-4 ${theme === "light" ? "text-gray-800" : ""}`}>
                  Cross-Disciplinary Collaboration
                </h3>
                <p className="text-muted-foreground">
                  Effective AI design requires collaboration between designers, data scientists, engineers, and domain
                  experts. I thrive in multidisciplinary teams, bridging the gap between technical capabilities and user
                  needs.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="section-spacing">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <SectionPreTitle>My expertise</SectionPreTitle>
              <h2 className={`heading-lg mb-4 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                Skills & Capabilities
              </h2>
              <p className="text-lg text-muted-foreground">
                A combination of design expertise and technical knowledge that enables me to create exceptional digital
                experiences.
              </p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="glass-neon-card p-6 text-center"
                >
                  <div className="mb-4 rounded-full bg-gradient-to-br from-cyan-500/10 to-indigo-500/10 p-3 text-cyan-400 mx-auto w-12 h-12 flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <h3 className={`text-lg font-medium ${theme === "light" ? "text-gray-800" : ""}`}>{skill.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </div>

      <footer className="py-8 text-center text-sm text-muted-foreground mt-12">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Seppe. All rights reserved.</p>
        </div>
      </footer>
      <style jsx>{`
        .gradient-button {
          background-position: 0% 50%;
        }
        .gradient-button:hover {
          animation: gradientMove 3s linear infinite;
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.6);
        }
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </main>
  )
}
