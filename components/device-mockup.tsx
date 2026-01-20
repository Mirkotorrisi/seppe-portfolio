"use client"

import Image from "next/image"

interface DeviceMockupProps {
  screenshot: string
  variant?: "cyan-blue" | "blue-indigo" | "cyan-indigo" | "dark-indigo"
  className?: string
}

export function DeviceMockup({ screenshot, variant = "cyan-blue", className = "" }: DeviceMockupProps) {
  const gradients = {
    "cyan-blue": "from-cyan-500 via-blue-500 to-blue-600",
    "blue-indigo": "from-blue-500 via-indigo-500 to-indigo-600",
    "cyan-indigo": "from-cyan-500 via-blue-600 to-indigo-600",
    "dark-indigo": "from-slate-900 via-indigo-950 to-indigo-900",
  }

  return (
    <div className={`relative w-full aspect-[4/3] bg-gradient-to-br ${gradients[variant]} rounded-2xl overflow-hidden ${className}`}>
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-300/20 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* iPhone frame with screenshot */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="relative w-[240px] h-[490px] transform hover:scale-105 transition-transform duration-500">
          {/* iPhone outer frame */}
          <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl">
            {/* Side buttons */}
            <div className="absolute -left-[3px] top-24 w-[3px] h-8 bg-gray-800 rounded-l-sm" />
            <div className="absolute -left-[3px] top-36 w-[3px] h-12 bg-gray-800 rounded-l-sm" />
            <div className="absolute -left-[3px] top-52 w-[3px] h-12 bg-gray-800 rounded-l-sm" />
            <div className="absolute -right-[3px] top-32 w-[3px] h-16 bg-gray-800 rounded-r-sm" />
          </div>
          
          {/* Screen area */}
          <div className="absolute inset-[3px] bg-black rounded-[2.8rem] overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20" />
            
            {/* Screenshot */}
            <div className="relative w-full h-full">
              <Image
                src={screenshot || "/placeholder.svg"}
                alt="App screenshot"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          
          {/* Screen glare effect */}
          <div className="absolute inset-[3px] rounded-[2.8rem] overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-8 right-8 w-16 h-16 border border-white/20 rounded-2xl rotate-12" />
      <div className="absolute bottom-12 left-8 w-12 h-12 border border-white/20 rounded-full" />
      <div className="absolute top-1/3 right-12 w-4 h-4 bg-white/30 rounded-full" />
      <div className="absolute bottom-1/3 left-16 w-3 h-3 bg-cyan-300/50 rounded-full" />
    </div>
  )
}
