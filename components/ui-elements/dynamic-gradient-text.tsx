"use client"

import type { ReactNode } from "react"

interface DynamicGradientTextProps {
  children: ReactNode
  className?: string
}

export function DynamicGradientText({ children, className = "" }: DynamicGradientTextProps) {
  // If children is a string, split it and apply different styles
  if (typeof children === "string") {
    const words = children.split(" ")

    return (
      <span className={`${className} inline-block`}>
        {words.map((word, index) => {
          // Apply different styles based on the word
          if (word === "Blending") {
            return (
              <span key={index} className="text-foreground mr-[-0.2em]">
                {word}{" "}
              </span>
            )
          } else if (word === "creativity") {
            return (
              <span key={index} className="font-caveat neon-gradient-text text-[1.4em]">
                {word}{" "}
              </span>
            )
          } else if (word === "with") {
            return (
              <span key={index} className="text-foreground">
                {word}{" "}
              </span>
            )
          } else if (word === "AI" || word === "power") {
            return (
              <span key={index} className="neon-gradient-text">
                {word}
                {index < words.length - 1 ? " " : ""}
              </span>
            )
          } else {
            // Default styling for any other words
            return (
              <span key={index} className="neon-gradient-text">
                {word}
                {index < words.length - 1 ? " " : ""}
              </span>
            )
          }
        })}
      </span>
    )
  }

  // If children is not a string, just apply the gradient class
  return <span className={`neon-gradient-text ${className} inline-block`}>{children}</span>
}
