"use client"

import LiquidEther from './LiquidEther'; // Adjust the import path if needed
// import { useTypewriter, Cursor } from 'react-simple-typewriter';

export function Hero() {
  // Setup the typewriter hook
  return (
    // 1. Make the section a "relative" positioning container
    <section className="min-h-screen flex items-center justify-center px-6 relative bg-black overflow-hidden">
  
      {/* 3. Ensure your content has a higher z-index to stay on top */}
      <div className="container mx-auto max-w-4xl text-center z-10">
        <LiquidEther
          className="liquid-ether-container"
          // You can keep your props here or adjust them as needed
          colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
          mouseForce={20}
          cursorSize={100}
        />
        <div className="space-y-6 z-11 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="grow-text text-5xl md:text-7xl font-bold text-balance text-white">
            Julian <span className="text-accent">Farrel</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto text-balance">
            Blockchain and Crypto Enthusiast. Learning and Building.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View My Work
            </button>
            <a
              href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 hover:border-accent text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}