"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  isMockup?: boolean;
  variant?: "cyan-blue" | "blue-indigo" | "cyan-indigo" | "dark-indigo";
}

interface ProjectGalleryCarouselProps {
  images: (string | GalleryImage)[];
  projectTitle: string;
}

const gradients = {
  "cyan-blue": "from-cyan-500 via-blue-500 to-blue-600",
  "blue-indigo": "from-blue-500 via-indigo-500 to-indigo-600",
  "cyan-indigo": "from-cyan-500 via-blue-600 to-indigo-600",
  "dark-indigo": "from-slate-900 via-indigo-950 to-indigo-900",
};

function DeviceMockupSlide({
  screenshot,
  variant = "cyan-blue",
}: {
  screenshot: string;
  variant?: keyof typeof gradients;
}) {
  return (
    <div
      className={`relative w-full h-full bg-gradient-to-br ${gradients[variant]}`}
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-300/20 rounded-full blur-2xl" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* iPhone frame with screenshot */}
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8">
        <div className="relative w-[160px] h-[327px] md:w-[220px] md:h-[450px]">
          {/* iPhone outer frame */}
          <div className="absolute inset-0 bg-gray-900 rounded-[2rem] md:rounded-[2.8rem] shadow-2xl" />

          {/* Screen area */}
          <div className="absolute inset-[2px] md:inset-[3px] bg-black rounded-[1.9rem] md:rounded-[2.6rem] overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 w-16 md:w-20 h-5 md:h-6 bg-black rounded-full z-20" />

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
          <div className="absolute inset-[2px] md:inset-[3px] rounded-[1.9rem] md:rounded-[2.6rem] overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-6 right-6 w-12 h-12 border border-white/20 rounded-xl rotate-12 hidden md:block" />
      <div className="absolute bottom-10 left-6 w-8 h-8 border border-white/20 rounded-full hidden md:block" />
    </div>
  );
}

export function ProjectGalleryCarousel({
  images,
  projectTitle,
}: ProjectGalleryCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const normalizedImages = images.map((img) =>
    typeof img === "string" ? { src: img, isMockup: false } : img,
  );

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentImage = normalizedImages[currentIndex];

  return (
    <div className="relative">
      {/* Main carousel */}
      <div className="relative aspect-video overflow-hidden rounded-2xl glass-neon-card neon-border">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            {currentImage.isMockup ? (
              <DeviceMockupSlide
                screenshot={currentImage.src}
                variant={currentImage.variant || "cyan-blue"}
              />
            ) : (
              <Image
                src={currentImage.src || "/placeholder.svg"}
                alt={`${projectTitle} - Image ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority={currentIndex === 0}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/70 hover:border-cyan-400/50 transition-all duration-300 group z-10"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-black/70 hover:border-cyan-400/50 transition-all duration-300 group z-10"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
        </button>

        {/* Image counter */}
        <div className="absolute bottom-4 right-4 px-4 py-2 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-white text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Pagination dots (alternative mobile-friendly navigation) */}
      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-gradient-to-r from-cyan-400 to-blue-400"
                : "bg-white/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
