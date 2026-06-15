"use client"

import Ferrofluid from './Ferrofluid';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative bg-black overflow-hidden">

      {/* Ferrofluid fills the full hero background */}
      <div className="absolute inset-0 w-full h-full">
        <Ferrofluid
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          speed={0.4}
          scale={1.4}
          turbulence={1.2}
          fluidity={0.12}
          rimWidth={0.22}
          sharpness={2.8}
          shimmer={1.4}
          glow={2.2}
          flowDirection="down"
          opacity={1}
          mouseInteraction={true}
          mouseStrength={1.2}
          mouseRadius={0.32}
          mouseDampening={0.15}
        />
      </div>

      {/* Hero text floats on top */}
      <div className="relative z-10 space-y-6 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-balance text-white">
          Julian <span className="text-accent">Farrel</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto text-balance">
          Full-Stack Developer bridging enterprise systems, AI, and decentralized infrastructure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors"
          >
            View My Work
          </button>
          <a
            href="https://drive.google.com/file/d/1cAQctiFzGL_Fy_V6V20XRykJZt3q5eXl/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative px-8 py-3 rounded-lg font-medium inline-block
              border border-white/30
              text-white
              bg-white/5 backdrop-blur-sm
              transition-all duration-300
              hover:border-accent hover:bg-accent/10
              hover:shadow-[0_0_20px_4px_rgba(82,39,255,0.4)]
              hover:text-accent
            "
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}