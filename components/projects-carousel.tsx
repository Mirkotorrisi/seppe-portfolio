"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects"
import { useMobile } from "@/hooks/use-mobile"
import { useTheme } from "next-themes"

interface ProjectsCarouselProps {
  filter?: "all" | "work" | "personal"
}

export function ProjectsCarousel({ filter = "all" }: ProjectsCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const [activeIndex, setActiveIndex] = useState(projects.length) // Start in the middle set
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null) // Track hovered card
  const [isDragging, setIsDragging] = useState(false)
  const [itemsPerView, setItemsPerView] = useState(3)
  const [isAnimating, setIsAnimating] = useState(false)
  const isMobile = useMobile()
  const { theme } = useTheme()

  // Filter projects based on the selected filter
  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.type === filter)

  // Create a wrapped set of projects for infinite scrolling
  const wrappedProjects = [...filteredProjects, ...filteredProjects, ...filteredProjects]

  // Get the actual project index (from the original array)
  const getRealIndex = (index: number) => {
    return ((index % filteredProjects.length) + filteredProjects.length) % filteredProjects.length
  }

  useEffect(() => {
    const handleResize = () => {
      // Calculate the total width of all cards plus spacing
      const totalWidth = wrappedProjects.length * (getItemWidth() + 16) - window.innerWidth
      setWidth(totalWidth)

      // Update items per view based on screen size
      if (window.innerWidth >= 1280) {
        setItemsPerView(3.5) // Show more cards with reduced spacing
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2.5) // Show more cards with reduced spacing
      } else {
        setItemsPerView(1.5) // Show more cards with reduced spacing
      }
    }

    handleResize() // Call once to set initial values
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [wrappedProjects.length])

  // Reset carousel when filter changes
  useEffect(() => {
    setActiveIndex(filteredProjects.length)
    setHoveredIndex(null)
  }, [filter, filteredProjects.length])

  // Handle the "loop" effect when reaching the edges
  useEffect(() => {
    if (isAnimating || filteredProjects.length === 0) return

    // If we've scrolled to the end of the first set, jump to the middle set
    if (activeIndex < filteredProjects.length) {
      setTimeout(() => {
        setIsAnimating(true)
        setActiveIndex(activeIndex + filteredProjects.length)
        // Reset animation flag after the position change
        setTimeout(() => setIsAnimating(false), 50)
      }, 500)
    }
    // If we've scrolled to the end of the third set, jump to the middle set
    else if (activeIndex >= filteredProjects.length * 2) {
      setTimeout(() => {
        setIsAnimating(true)
        setActiveIndex(activeIndex - filteredProjects.length)
        // Reset animation flag after the position change
        setTimeout(() => setIsAnimating(false), 50)
      }, 500)
    }
  }, [activeIndex, isAnimating, filteredProjects.length])

  const slideLeft = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setActiveIndex(activeIndex - 1)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const slideRight = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setActiveIndex(activeIndex + 1)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const handleDragEnd = (e: any, info: any) => {
    setIsDragging(false)

    // Calculate the drag distance and determine if we should change the active index
    const dragThreshold = 50 // Minimum drag distance to trigger a slide

    if (info.offset.x > dragThreshold && !isAnimating) {
      // Dragged right - go to previous slide
      setIsAnimating(true)
      setActiveIndex(activeIndex - 1)
      setTimeout(() => setIsAnimating(false), 500)
    } else if (info.offset.x < -dragThreshold && !isAnimating) {
      // Dragged left - go to next slide
      setIsAnimating(true)
      setActiveIndex(activeIndex + 1)
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  // Calculate the item width based on the container width and desired items per view
  const getItemWidth = () => {
    // Use viewport width for calculations to ensure cards flow beyond screen edges
    const viewportWidth = window.innerWidth
    const gapWidth = 16 // Reduced gap to 16px

    // Calculate card width based on viewport and desired items per view
    return (viewportWidth - gapWidth * (itemsPerView - 1)) / itemsPerView
  }

  // Get the real index for the pagination indicators
  const currentRealIndex = getRealIndex(activeIndex)

  // If no projects match the filter, show a message
  if (filteredProjects.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-lg text-muted-foreground">No projects found for this filter.</p>
      </div>
    )
  }

  return (
    <div className="relative py-12">
      <div
        ref={carouselRef}
        className="carousel-container overflow-visible w-screen relative left-[calc(-50vw+50%)] right-[calc(-50vw+50%)]"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          className="flex gap-4 px-[calc(50vw-50%)]"
          animate={{
            x: -activeIndex * (getItemWidth() + 16) + window.innerWidth / 2 - getItemWidth() / 2,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
          }}
          onMouseLeave={() => setHoveredIndex(null)} // Reset hover state when mouse leaves carousel
        >
          {wrappedProjects.map((project, index) => (
            <motion.div
              key={`${project.id}-${index}`}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] transition-all duration-300"
              onMouseEnter={() => !isDragging && setHoveredIndex(index)} // Set hovered index when mouse enters
              animate={{
                scale: hoveredIndex === index ? 1.05 : hoveredIndex !== null ? 0.95 : 1,
                opacity: hoveredIndex === index ? 1 : hoveredIndex !== null ? 0.7 : 0.95,
                filter: hoveredIndex !== null && hoveredIndex !== index ? "blur(1px)" : "blur(0px)",
              }}
              transition={{
                type: "tween",
                duration: 0.15,
                ease: "easeOut",
              }}
            >
              <ProjectCard project={project} index={getRealIndex(index)} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation buttons - positioned outside the carousel container for proper alignment */}
      {!isMobile && filteredProjects.length > 1 && (
        <>
          <button
            onClick={slideLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-3 backdrop-blur-sm transition-all bg-background/80 text-foreground hover:bg-background hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] z-50"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={slideRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-3 backdrop-blur-sm transition-all bg-background/80 text-foreground hover:bg-background hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] z-50"
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Pagination indicators - showing the real index */}
      {filteredProjects.length > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          {filteredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true)
                  // Calculate the new index in the wrapped array
                  const newIndex = activeIndex - currentRealIndex + index
                  setActiveIndex(newIndex)
                  setTimeout(() => setIsAnimating(false), 500)
                }
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentRealIndex
                  ? "w-6 bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                  : theme === "light"
                    ? "w-2 bg-gray-300 hover:bg-gray-400"
                    : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
