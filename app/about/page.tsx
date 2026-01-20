"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SiteHeader } from "@/components/site-header"
import { Download, Briefcase, Code, Palette, Lightbulb, Cpu, Settings, Rocket } from "lucide-react"
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
  ]

  useEffect(() => {
    console.log("Loading profile image from blob URL")
  }, [])

  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden max-w-full">
      <StreamlinedBackground />
      <SiteHeader />

      <div className="pt-24 overflow-x-hidden w-full">
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
                <SectionPreTitle>hello there</SectionPreTitle>
                <h1 className={`heading-xl mb-6 ${theme === "light" ? "text-gray-800" : "text-white"}`}>About Me</h1>
                <p className="text-lg text-muted-foreground mb-8">
                  I'm Giuseppe Parisi, a Digital Product Designer focused on creating intuitive, human-centered experiences that bridge
                  the gap between people and technology. My approach combines strategic design with technical expertise
                  to transform complex challenges into seamless solutions. I don't just design interfaces; I build
                  digital products that empower users and deliver measurable value for businesses.
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
                  {imageError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white text-center p-4">
                      <p>Image could not be loaded</p>
                    </div>
                  )}

                  {!imageLoaded && !imageError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                      <div className="h-8 w-8 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent"></div>
                    </div>
                  )}

                  <Image
                    src="/images/parisi-square.jpeg"
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
              className="max-w-3xl mx-auto text-center"
            >
              <SectionPreTitle>Professional journey</SectionPreTitle>
              <h2 className={`heading-lg mb-4 ${theme === "light" ? "text-gray-800" : "text-white"}`}>Currently at</h2>
              <p className={`text-2xl font-medium mb-6 ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                CreationDose
              </p>
              <p className="text-lg text-muted-foreground">
                Driving the UI/UX design for the Vidoser ecosystem, where I focus on developing AI-powered tools for the
                Creator Economy. I manage the design process from concept to delivery, ensuring technical requirements
                are translated into intuitive, human-centered experiences while maintaining high quality standards
                across the platform.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How I Work Section */}
        <section className="section-spacing">
          <div className="container mx-auto px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-20"
            >
              <SectionPreTitle>My philosophy</SectionPreTitle>
              <h2 className={`heading-lg mb-4 ${theme === "light" ? "text-gray-800" : "text-white"}`}>How I Work</h2>
              <p className="text-lg text-muted-foreground">
                A strategic approach to design that delivers measurable results
              </p>
            </motion.div>

            {/* Section 1: Strategic UI/UX with animated Map icon */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8 }}
              className="mb-16 min-h-[400px] flex items-center py-8"
            >
              <div className="w-full max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Large Animated Map Icon with illuminating points */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                    className="relative flex items-center justify-center p-8 md:p-12"
                  >
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                      {/* Glowing background effect */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/30 via-blue-400/30 to-indigo-400/30 blur-3xl"
                      />

                      {/* Map grid background */}
                      <svg
                        viewBox="0 0 300 300"
                        className="absolute inset-0 w-full h-full"
                        style={{ filter: "drop-shadow(0 0 10px rgba(6, 182, 212, 0.3))" }}
                      >
                        {/* Map grid lines */}
                        <g stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" fill="none">
                          {[...Array(6)].map((_, i) => (
                            <line key={`h-${i}`} x1="40" y1={50 + i * 40} x2="260" y2={50 + i * 40} />
                          ))}
                          {[...Array(6)].map((_, i) => (
                            <line key={`v-${i}`} x1={50 + i * 40} y1="40" x2={50 + i * 40} y2="260" />
                          ))}
                        </g>

                        {/* Curved path connecting points */}
                        <motion.path
                          d="M80,100 Q120,80 150,120 T220,150"
                          stroke="rgba(59, 130, 246, 0.4)"
                          strokeWidth="2"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        />

                        {/* Illuminating points on the map */}
                        {[
                          { x: 80, y: 100, delay: 0 },
                          { x: 150, y: 120, delay: 0.3 },
                          { x: 220, y: 150, delay: 0.6 },
                          { x: 120, y: 180, delay: 0.9 },
                          { x: 180, y: 80, delay: 1.2 },
                        ].map((point, i) => (
                          <g key={i}>
                            {/* Pulsing ring around point */}
                            <motion.circle
                              cx={point.x}
                              cy={point.y}
                              r="8"
                              fill="none"
                              stroke="rgba(6, 182, 212, 0.6)"
                              strokeWidth="2"
                              initial={{ r: 8, opacity: 0.8 }}
                              animate={{
                                r: [8, 20, 8],
                                opacity: [0.8, 0, 0.8],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: point.delay,
                              }}
                            />
                            {/* Center point */}
                            <motion.circle
                              cx={point.x}
                              cy={point.y}
                              r="5"
                              initial={{ opacity: 0.5 }}
                              animate={{
                                opacity: [0.5, 1, 0.5],
                                scale: [1, 1.2, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: point.delay,
                              }}
                              className="fill-cyan-400"
                            />
                          </g>
                        ))}
                      </svg>
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-3xl md:text-4xl font-bold mb-6 text-white"
                    >
                      Strategic UI/UX
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="text-xl leading-relaxed text-muted-foreground"
                    >
                      I design interfaces that don't just look good, but perform. My focus is on conversion, user
                      retention, and creating intuitive flows that reduce friction and accelerate business growth.
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Section 2: Tech Integration & AI with animated Chip icon */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8 }}
              className="mb-16 min-h-[400px] flex items-center py-8"
            >
              <div className="w-full max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Text Content - Left side */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="order-2 md:order-1"
                  >
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-3xl md:text-4xl font-bold mb-6 text-white"
                    >
                      Tech Integration & AI
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="text-xl leading-relaxed text-muted-foreground"
                    >
                      I specialize in making complex technology accessible. I integrate AI and advanced functionalities
                      to automate tasks and empower users, turning sophisticated technical capabilities into easy-to-use
                      digital products.
                    </motion.p>
                  </motion.div>

                  {/* Large Animated Chip Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: 180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                    className="relative flex items-center justify-center order-1 md:order-2 p-8 md:p-12"
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                      className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64"
                    >
                      {/* Glowing effect */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/40 via-indigo-400/40 to-indigo-500/40 blur-3xl"
                      />

                      {/* Chip structure */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Circuit board paths */}
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: [0.3, 1, 0.3],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.2,
                            }}
                            className="absolute w-1 h-16 bg-gradient-to-t from-transparent via-blue-400 to-transparent"
                            style={{
                              transform: `rotate(${i * 45}deg) translateY(-80px)`,
                            }}
                          />
                        ))}

                        {/* Center chip */}
                        <motion.div
                          animate={{
                            boxShadow: [
                              "0 0 20px rgba(59, 130, 246, 0.5)",
                              "0 0 40px rgba(99, 102, 241, 0.8)",
                              "0 0 20px rgba(59, 130, 246, 0.5)",
                            ],
                          }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 border-4 border-blue-400/30 flex items-center justify-center"
                        >
                          <Cpu className="w-20 h-20 text-white" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Section 3: Efficiency & Scalability with animated Gears icon */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8 }}
              className="mb-16 min-h-[400px] flex items-center py-8"
            >
              <div className="w-full max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Large Animated Gears Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                    className="relative flex items-center justify-center p-4 sm:p-8 md:p-12"
                  >
                    <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 flex items-center justify-center">
                      {/* Glowing effect */}
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 via-blue-400/30 to-indigo-400/30 blur-3xl"
                      />

                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 10,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Settings className="w-full h-full text-cyan-400/70" />
                      </motion.div>

                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                          duration: 7,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Settings className="w-1/2 h-1/2 text-blue-400/80" />
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-3xl md:text-4xl font-bold mb-6 text-white"
                    >
                      Efficiency & Scalability
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="text-xl leading-relaxed text-muted-foreground"
                    >
                      I build design systems and scalable architectures. This ensures a consistent brand identity across
                      all platforms while speeding up the development process and reducing long-term maintenance costs.
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Section 4: End-to-End Execution with animated Rocket icon */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8 }}
              className="min-h-[400px] flex items-center py-8"
            >
              <div className="w-full max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Text Content - Left side */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="order-2 md:order-1"
                  >
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="text-3xl md:text-4xl font-bold mb-6 text-white"
                    >
                      End-to-End Execution
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="text-xl leading-relaxed text-muted-foreground"
                    >
                      I bridge the gap between design and code. By working closely with developers and stakeholders, I
                      ensure the final product is technically sound, pixel-perfect, and fully aligned with the initial
                      business goals.
                    </motion.p>
                  </motion.div>

                  {/* Large Animated Rocket Icon */}
                  <motion.div
                    initial={{ scale: 0, y: 100 }}
                    whileInView={{ scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                    className="relative flex items-center justify-center order-1 md:order-2 p-8 md:p-12"
                  >
                    <motion.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                      className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex items-center justify-center"
                    >
                      {/* Rocket icon */}
                      <motion.div
                        animate={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        className="relative z-10"
                      >
                        <Rocket className="w-32 h-32 text-cyan-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.8)]" />
                      </motion.div>

                      {/* Rocket thrust glow - positioned directly under rocket */}
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0.3, 0.8] }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                        className="absolute top-1/2 translate-y-12 left-1/2 -translate-x-1/2 w-24 h-32 bg-gradient-to-b from-cyan-400/60 via-blue-400/40 to-transparent rounded-full blur-xl"
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
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

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
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
