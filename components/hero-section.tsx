"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "@/components/animated-text";
import { ArrowDown } from "lucide-react";
import { DynamicGradientText } from "@/components/ui-elements/dynamic-gradient-text";
import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";

export function HeroSection() {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);
  const animatedTexts = ["Product Designer", "UI UX Designer", "UX Strategist"];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToNextSection = useCallback(() => {
    const nextSection = document.getElementById("projects");

    if (nextSection) {
      const sectionPosition =
        nextSection.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <section className="first-section relative flex min-h-screen w-full items-center justify-center">
      {/* Enhanced light theme background with focused color areas */}
      {theme === "light" && (
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[10%] left-[5%] w-[30%] h-[40%] bg-cyan-50/70 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[8%] w-[25%] h-[30%] bg-indigo-50/70 rounded-full blur-[120px]"></div>
          <div className="absolute top-[30%] right-[20%] w-[25%] h-[35%] bg-blue-50/60 rounded-full blur-[100px]"></div>
        </div>
      )}

      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="heading-xl mb-6">
            <span className="block mb-2">Hi, I'm Seppe</span>
            <DynamicGradientText className="leading-tight">
              Blending creativity and tech
            </DynamicGradientText>
          </h1>
          <p className="mt-6 text-xl text-muted-foreground font-light">
            I design results-driven solutions that empower users and help
            businesses scale.
          </p>
          <div className="mt-6 text-xl font-medium md:text-2xl lg:text-3xl">
            <AnimatedText texts={animatedTexts} />
          </div>
        </motion.div>

        <motion.button
          onClick={scrollToNextSection}
          className="mt-8 mx-auto flex flex-col items-center justify-center cursor-pointer group"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1,
          }}
          whileHover={{ y: 5 }}
          aria-label="Scroll to projects section"
        >
          <span className="text-sm font-medium text-muted-foreground mb-2 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-blue-400 group-hover:to-indigo-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
            View Projects
          </span>
          <div
            className={`p-2 rounded-full transition-all duration-300 social-icon-neon overflow-hidden group ${
              theme === "light"
                ? "bg-white/70 backdrop-blur-sm shadow-sm"
                : "bg-white/5 backdrop-blur-sm"
            }`}
          >
            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            >
              <ArrowDown
                className={`h-4 w-4 ${
                  theme === "light"
                    ? "text-black group-hover:text-white"
                    : "text-muted-foreground group-hover:text-white"
                } transition-colors`}
              />
            </motion.div>
          </div>
        </motion.button>
      </div>
    </section>
  );
}
