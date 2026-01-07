"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { ContactSection } from "@/components/contact-section"
import { StreamlinedBackground } from "@/components/ui-elements/streamlined-background"

export default function HomePage() {
  const { theme } = useTheme()

  // Scroll to top on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: "instant" })
    }
  }, [])

  return (
    <main className="relative flex min-h-screen flex-col dark:bg-none">
      <StreamlinedBackground />
      <SiteHeader />
      <HeroSection />

      <FeaturedProjects />
      <ContactSection />

      <footer className="py-8 text-center text-sm text-muted-foreground mt-12">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Seppe. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
