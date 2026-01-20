"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import { SiteHeader } from "@/components/site-header";
import {
  ArrowLeft,
  Calendar,
  User,
  Layers,
  Target,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { type Project, projects } from "@/lib/projects";
import Link from "next/link";
import { StreamlinedBackground } from "@/components/ui-elements/streamlined-background";
import { SectionPreTitle } from "@/components/ui-elements/section-pre-title";
import { useTheme } from "next-themes";
import { ProjectGalleryCarousel } from "@/components/project-gallery-carousel";

export default function ProjectPage() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (params.slug) {
      const foundProject = projects.find((p) => p.id === params.slug);
      setProject(foundProject || null);
      setLoading(false);
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link href="/" className="mt-4 text-blue-500 hover:underline">
          Return to home
        </Link>
      </div>
    );
  }

  const processSteps = project.process
    .split(". ")
    .filter(Boolean)
    .map((step, i) => ({
      number: i + 1,
      text: step + (step.endsWith(".") ? "" : "."),
    }));

  return (
    <main className="relative flex min-h-screen flex-col dark:bg-none overflow-x-hidden max-w-full">
      <StreamlinedBackground />
      <SiteHeader />

      <div className="pt-24 pb-24 overflow-x-hidden w-full">
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
                <span className="group-hover:neon-gradient-text">
                  Back to home
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <SectionPreTitle>Project showcase</SectionPreTitle>
              <h1 className="heading-xl mb-6 text-white">{project.title}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                {project.description}
              </p>
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

        {/* Project Details */}
        <section className="section py-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-neon-card p-6 group hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center p-2">
                  <div className="mb-4 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    <User className="h-6 w-6" />
                  </div>
                  <span className="block text-sm text-muted-foreground mb-1">
                    Client
                  </span>
                  <span className="text-lg font-medium">{project.client}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-neon-card p-6 group hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center p-2">
                  <div className="mb-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-600/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <span className="block text-sm text-muted-foreground mb-1">
                    Year
                  </span>
                  <span className="text-lg font-medium">{project.year}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-neon-card p-6 group hover:border-indigo-400/50 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center p-2">
                  <div className="mb-4 w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400/20 to-indigo-600/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                    <Layers className="h-6 w-6" />
                  </div>
                  <span className="block text-sm text-muted-foreground mb-1">
                    Role
                  </span>
                  <span className="text-lg font-medium">{project.role}</span>
                </div>
              </motion.div>
            </div>

            {/* Challenge Section - Target Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8 }}
              className="mb-16 min-h-[400px] flex items-center py-8"
            >
              <div className="w-full max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Large Animated Target Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                    className="relative flex items-center justify-center p-4 sm:p-8 md:p-12"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 flex items-center justify-center"
                    >
                      {/* Outer rings with pulse - cyan-blue colors */}
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400/30 to-blue-400/30 blur-2xl"
                      />

                      {/* Target circles - cyan-blue colors */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border-4 border-cyan-400/50" />
                        <div className="absolute w-3/4 h-3/4 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border-4 border-cyan-400/60" />
                        <div className="absolute w-1/2 h-1/2 rounded-full bg-gradient-to-br from-cyan-500/40 to-blue-500/40 border-4 border-blue-400/70" />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                          className="absolute w-1/4 h-1/4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 shadow-lg shadow-cyan-500/50"
                        />
                        <Target className="absolute w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white z-10" />
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Challenge Text */}
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
                      The Challenge
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="text-xl leading-relaxed text-muted-foreground"
                    >
                      {project.challenge}
                    </motion.p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Solution Section - Lightbulb Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8 }}
              className="mb-16 min-h-[400px] flex items-center py-8"
            >
              <div className="w-full max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Solution Text - Left side this time */}
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
                      The Solution
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      className="text-xl leading-relaxed text-muted-foreground"
                    >
                      {project.solution}
                    </motion.p>
                  </motion.div>

                  {/* Large Animated Lightbulb - blue-indigo colors */}
                  <motion.div
                    initial={{ scale: 0, rotate: 180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                    className="relative flex items-center justify-center order-1 md:order-2 p-8 md:p-12"
                  >
                    <motion.div
                      animate={{ y: [0, -20, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64"
                    >
                      {/* Glowing light effect - blue-indigo colors */}
                      <motion.div
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                        className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300/40 via-indigo-300/40 to-indigo-400/40 blur-3xl"
                      />

                      {/* Lightbulb structure */}
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Bulb glow - blue-indigo colors */}
                        <motion.div
                          animate={{
                            opacity: [0.6, 1, 0.6],
                            scale: [0.95, 1.05, 0.95],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                          }}
                          className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-blue-400/60 via-indigo-400/60 to-indigo-500/60 backdrop-blur-sm"
                        />

                        {/* Light rays - blue-indigo colors */}
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: [0, 0.8, 0],
                              scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              delay: i * 0.2,
                            }}
                            className="absolute w-1 h-24 bg-gradient-to-t from-transparent via-blue-400/50 to-transparent"
                            style={{
                              transform: `rotate(${i * 45}deg) translateY(-80px)`,
                            }}
                          />
                        ))}

                        {/* Lightbulb icon */}
                        <Lightbulb className="relative z-10 w-24 h-24 text-white drop-shadow-[0_0_20px_rgba(99,102,241,0.8)]" />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Process Section - Timeline */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="w-full max-w-6xl mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-20"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    The Process
                  </h2>
                  <p className="text-xl text-muted-foreground">
                    Step by step journey from concept to completion
                  </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                  {/* Vertical line - left on mobile, center on desktop */}
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute left-8 md:left-1/2 top-0 w-0.5 md:w-1 md:-translate-x-1/2"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgb(34, 211, 238), rgb(59, 130, 246), rgb(99, 102, 241))",
                      willChange: "height",
                      transformOrigin: "top",
                      transform: "translate3d(-50%, 0, 0)",
                      WebkitTransform: "translate3d(-50%, 0, 0)",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                  />

                  <div className="space-y-12 md:space-y-16">
                    {processSteps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`relative flex items-start md:items-center ${
                          index % 2 === 0
                            ? "md:flex-row"
                            : "md:flex-row-reverse"
                        } flex-row pl-20 md:pl-0`}
                      >
                        <div
                          className="absolute left-8 md:left-1/2 w-12 h-12 md:w-16 md:h-16 flex items-center justify-center z-10 -translate-x-1/2"
                          style={{ top: "0" }}
                        >
                          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center text-white font-bold text-base md:text-lg border-4 border-background shadow-lg">
                            {step.number}
                          </div>
                        </div>

                        {/* Content card */}
                        <div
                          className={`w-full md:w-[calc(50%-4rem)] ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}
                        >
                          <motion.div
                            whileHover={{ scale: 1.02, y: -4 }}
                            className="glass-neon-card p-6 md:p-8 relative group"
                          >
                            <div
                              className={`absolute top-6 md:top-8 ${
                                index % 2 === 0 ? "md:-right-3" : "md:-left-3"
                              } w-0 h-0 hidden md:block
                              ${
                                index % 2 === 0
                                  ? "border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[12px] border-l-cyan-500/30"
                                  : "border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-r-[12px] border-r-cyan-500/30"
                              }`}
                            />
                            <div className="flex items-start gap-3 md:gap-4">
                              <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 flex-shrink-0 mt-1" />
                              <p className="text-base md:text-lg leading-relaxed text-foreground">
                                {step.text}
                              </p>
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Outcome Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8 }}
              className="mb-32 min-h-[400px] flex items-center py-8"
            >
              <div className="w-full max-w-6xl mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    The Outcome
                  </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Outcome image - static, no animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <div className="relative aspect-square rounded-3xl overflow-hidden glass-neon-card">
                      <Image
                        src={project.outcomeImage || "/placeholder.svg"}
                        alt={`${project.title} - Final Product`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Outcome text */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <p className="text-xl leading-relaxed text-muted-foreground mb-8">
                      {project.outcome}
                    </p>

                    {/* Key results */}
                    <div className="space-y-4">
                      {[
                        "Exceeded expectations",
                        "Delivered on time",
                        "Positive user feedback",
                      ].map((result, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                          <span className="text-lg text-foreground">
                            {result}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ProjectGalleryCarousel
                images={project.images}
                projectTitle={project.title}
              />
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
                theme === "light"
                  ? "border-indigo-300 shadow-xl"
                  : "border-indigo-500/40"
              }`}
              style={{
                backgroundImage:
                  theme === "light"
                    ? "linear-gradient(90deg, rgba(6, 182, 212, 0.85), rgba(59, 130, 246, 0.8), rgba(99, 102, 241, 0.85), rgba(59, 130, 246, 0.8), rgba(6, 182, 212, 0.85))"
                    : "linear-gradient(90deg, rgba(6, 182, 212, 0.5), rgba(59, 130, 246, 0.45), rgba(99, 102, 241, 0.55), rgba(59, 130, 246, 0.45), rgba(6, 182, 212, 0.5))",
                backgroundSize: "200% 100%",
              }}
            >
              <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-indigo-500/50 blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-violet-500/50 blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-blue-500/40 blur-3xl"></div>

              <h2
                className="heading-lg mb-6 text-white relative z-10"
                style={{ color: "white" }}
              >
                Interested in working together?
              </h2>
              <p
                className={`text-lg mb-8 max-w-2xl mx-auto relative z-10 ${
                  theme === "light" ? "text-white/90" : "text-muted-foreground"
                }`}
              >
                Let's collaborate on your next project and create something
                extraordinary together.
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
  );
}
