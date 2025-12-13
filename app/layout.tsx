import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import "./globals.css"
import "./glass-neon.css"
import "./unified-gradient.css"
import "./logo-fixes.css"
import "./header-logo.css"

export const metadata: Metadata = {
  title: "Seppe | Digital Product Designer",
  description: "Portfolio of Seppe, a Digital Product Designer specializing in AI-driven design solutions",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Preload the logo for better performance */}
        <link rel="preload" href="/logo_seppe.svg" as="image" type="image/svg+xml" />
      </head>
      <body className={cn("min-h-screen font-sans antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
          storageKey="portfolio-theme-preference"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
