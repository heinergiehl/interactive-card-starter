"use client"

import React, { useEffect, useRef } from "react"
import { useMotionTemplate, useMotionValue } from "framer-motion"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"
type InteractiveCardProps = {
  gradientSize?: number
  highlightColor?: string
  gradientOpacity?: number
  gradientFrom?: string
  gradientTo?: string
  cardCSS?: string
}

function InteractiveCard({
  gradientSize = 200,
  highlightColor = "rgba(255, 255, 255, 0.7)",
  gradientOpacity = 0.8,
  gradientFrom = "#4f16eb",
  gradientTo = "#4b0358",
  cardCSS = "rounded-lg transition-all duration-300 relative ",
}: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(-gradientSize)
  const mouseY = useMotionValue(-gradientSize)

  const handleMouseMove = (e: MouseEvent) => {
    if (cardRef.current) {
      const { left, top } = cardRef.current.getBoundingClientRect()
      const clientX = e.clientX
      const clientY = e.clientY

      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
      console.log("mouse move", mouseX.get(), mouseY.get())
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])
  return (
    <div
      id="interactive-card-container"
      className={cn([
        "relative group rounded-lg transition-all duration-300 w-[200px] h-[300px]",
        cardCSS,
      ])}
      ref={cardRef}
    >
      <div
        id="interactive-card-background"
        className="absolute inset-[0px] z-20 rounded-xl bg-slate-800/90 "
      />
      <motion.div
        id="interactive-card-highlight"
        className="pointer-events-none absolute inset-px z-10 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
                   radial-gradient(
                   ${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${highlightColor}, transparent 100%)
                   `,
          opacity: gradientOpacity,
        }}
      />
      <motion.div
        id="interactive-card-gradient"
        className="pointer-events-none absolute z-0 -inset-[2px]
              rounded-xl duration-300 group-hover:opacity-100  
              "
        style={{
          background: useMotionTemplate`
                          radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
              ${gradientFrom}, 
              ${gradientTo}, 
              transparent 100%
            )
                  
                  `,
        }}
      />
      <div id="interactive-card-content" className="relative z-30 p-1">
        <Image
          width={700}
          height={700}
          src={"/image.png"}
          className="rounded-t-lg w-full h-full object-cover"
          alt="image"
        />
        <div className="mt-4">
          <h2 className="text-xl font-bold">Interactive Card</h2>
          <p className="text-sm text-gray-400">
            Beautiful interactive cards with Tailwind CSS, FramerMotion
          </p>
        </div>
      </div>
    </div>
  )
}

export default InteractiveCard
