"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const aiProjects = [
  {
    title: "Specula",
    description:
      "AI-assisted Prediction Market. On-chain forecasting with LLM-generated market summaries and automated resolution via decentralized oracles.",
    tech: ["Next.js", "TypeScript", "OpenAI", "Solidity"],
    image: "",
    category: "AI × Web3",
    href: "https://speculamarket.vercel.app/",
  },
  {
    title: "Arah AI Signals",
    description:
      "Integrated GPT-powered trade signal engine into the Arah perpetuals platform, surfacing actionable insights directly on token dashboards.",
    tech: ["Next.js", "TypeScript", "GPT-4o", "React"],
    image: "/arah banner.png",
    category: "AI × Trading",
    href: "https://arah.vercel.app/",
  },
  {
    title: "Vitalis Diagnostics",
    description:
      "Natural language query layer over on-chain patient records. Physicians can ask plain-English questions about patient history via an LLM middleware.",
    tech: ["Solidity", "LangChain", "TypeScript", "React"],
    image: "/vitalis banner.png",
    category: "AI × Health",
    href: "https://vitalisrecord.vercel.app/",
  },
  {
    title: "Block Rides Route Optimizer",
    description:
      "ML-based ride matching and route optimization layer for the Block Rides decentralized transport network, reducing average trip time by 22%.",
    tech: ["Python", "TensorFlow", "Solidity", "React"],
    image: "/blockrides banner.png",
    category: "AI × Transport",
    href: "https://blockrides.vercel.app/",
  },
]

export function AIProjects() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  useEffect(() => {
    if (!api) return

    const timer = setTimeout(() => {
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap())
      api.scrollTo(0)
    }, 10)

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)

    return () => {
      clearTimeout(timer)
      api.off("select", onSelect)
    }
  }, [api])

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
  }, [api])

  return (
    <section id="ai-projects" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI <span className="text-accent">×</span> Web3
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Projects at the frontier of machine intelligence and decentralized infrastructure
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          <Carousel setApi={setApi} className="w-full max-w-4xl" opts={{ loop: true }}>
            <CarouselContent>
              {aiProjects.map((project, index) => (
                <CarouselItem key={`${project.title}-${index}`}>
                  <div className="p-1 h-full">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <Card
                        className={cn(
                          "group relative overflow-hidden transition-all duration-300 h-full",
                          "bg-white/5 backdrop-blur-md border-border/50",
                          "hover:border-accent hover:shadow-[0_0_30px_-5px_var(--color-accent)]",
                          "hover:-translate-y-1"
                        )}
                        onMouseEnter={() => setHoveredProject(index)}
                        onMouseLeave={() => setHoveredProject(null)}
                      >
                        <CardContent className="p-0 flex flex-col h-full">
                          <div className="aspect-video overflow-hidden relative">
                            <img
                              src={
                                project.image ||
                                "/placeholder.svg?height=300&width=500&query=ai+neural+network+dashboard"
                              }
                              alt={project.title}
                              className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:saturate-105"
                            />
                          </div>
                          <div className="p-6 flex flex-col flex-grow relative z-20 bg-card border-t border-border/50">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                                {project.title}
                              </h3>
                              <span className="text-[10px] uppercase tracking-wider font-semibold bg-secondary px-2 py-1 rounded text-muted-foreground border border-border/50">
                                {project.category}
                              </span>
                            </div>
                            <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                              {project.tech.map((tech: string) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium border border-transparent group-hover:border-accent/30 transition-colors"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden md:flex -left-12 h-10 w-10 border border-muted-foreground/30 bg-background/80 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 rounded-full" />
            <CarouselNext className="hidden md:flex -right-12 h-10 w-10 border border-muted-foreground/30 bg-background/80 hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 rounded-full" />
          </Carousel>

          <div className="flex justify-center gap-3 mt-4">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background",
                  current === index
                    ? "w-8 bg-accent shadow-[0_0_10px_var(--color-accent)]"
                    : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={current === index ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
