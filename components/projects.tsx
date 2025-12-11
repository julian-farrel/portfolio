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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "ParkHere",
    description: "Prototype for a Smart Parking System application made to solve inefficiency in parking spot searching.",
    tech: ["Figma"],
    image: "/parkhere banner 512h.png",
    gallery: [
      "/parkhere banner 512h.png",
      "/parkhere banner 2x.png",
      "/parkhere banner.png",
      "/parkhere banner 0 5x.png"
    ],
    category: "Figma",
  },
  {
    title: "Arah",
    description: "Trade tokenized perpetuals of the world's most popular stocks, amplified with up to 100x power.",
    tech: ["Next.js", "TypeScript", "React"],
    image: "/arah banner.png",
    category: "Web2",
    href: "https://arah.vercel.app/"
  },
  {
    title: "Specula",
    description: "Blockchain Based Prediction Market. Predict, Forecast Decentralized & Transparant",
    tech: ["Next.js", "TypeScript", "React"],
    image: "",
    category: "Web2",
    href: "https://speculamarket.vercel.app/"
  },
  {
    title: "Vitalis",
    description: "Our Medical Identity, Decentralized.",
    tech: ["Solidity", "TypeScript", "React"],
    image: "/vitalis banner.png",
    category: "Web3",
    href: "https://vitalisrecord.vercel.app/"
  },
  {
    title: "Aegis",
    description: "Verify Gold Instantly.",
    tech: ["Solidity", "ERC-721", "TypeScript", "React"],
    image: "/aegis banner.png",
    category: "Web3",
    href: "https://aegis-gold.vercel.app/"
  },
]

const categories = ["All", "Figma", "Web2", "Web3"]

export function Projects() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("All")

  const filteredProjects = projects.filter((project) =>
    activeTab === "All" ? true : project.category === activeTab
  )

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
  }, [api, activeTab])

  useEffect(() => {
    if (!api) return
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())
  }, [api])

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative Web3 solutions & applications to solve real world problems
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex p-1 bg-muted/50 backdrop-blur-sm rounded-full border border-border/50">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={cn(
                  "relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out",
                  activeTab === category
                    ? "text-background"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {activeTab === category && (
                  <span className="absolute inset-0 bg-foreground rounded-full shadow-sm -z-10 animate-in fade-in zoom-in-95 duration-200" />
                )}
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-8">
          {filteredProjects.length > 0 ? (
            <>
              <Carousel setApi={setApi} className="w-full max-w-4xl" opts={{ loop: true }}>
                <CarouselContent>
                  {filteredProjects.map((project, index) => (
                    <CarouselItem key={`${project.title}-${index}`}>
                      <div className="p-1 h-full">
                        {project.category === "Figma" ? (
                          <Dialog>
                            <DialogTrigger asChild>
                              <div className="block h-full cursor-pointer">
                                <ProjectCard project={project} index={index} setHoveredProject={setHoveredProject} />
                              </div>
                            </DialogTrigger>
                            <DialogContent className="max-w-screen-2xl w-[95vw] h-[90vh] p-0 bg-transparent border-none shadow-none flex flex-col justify-center outline-none">
                              <DialogHeader className="sr-only">
                                <DialogTitle>{project.title} Gallery</DialogTitle>
                                <DialogDescription>UI Designs for {project.title}</DialogDescription>
                              </DialogHeader>
                              <div className="relative w-full h-full flex items-center justify-center">
                                {/* UPDATED: Carousel takes full width of the large dialog */}
                                <Carousel className="w-full h-full" opts={{ loop: true }}>
                                  <CarouselContent className="h-full">
                                    {project.gallery?.map((img, imgIndex) => (
                                      <CarouselItem key={imgIndex} className="flex items-center justify-center h-full">
                                        {/* UPDATED: Image container takes 80vh height */}
                                        <div className="relative w-full h-[80vh] flex items-center justify-center p-2">
                                          <img
                                            src={img}
                                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                          />
                                        </div>
                                      </CarouselItem>
                                    ))}
                                  </CarouselContent>
                                  <CarouselPrevious className="left-4 bg-background/50 hover:bg-background border-none h-12 w-12" />
                                  <CarouselNext className="right-4 bg-background/50 hover:bg-background border-none h-12 w-12" />
                                </Carousel>
                              </div>
                            </DialogContent>
                          </Dialog>
                        ) : (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block h-full"
                          >
                            <ProjectCard project={project} index={index} setHoveredProject={setHoveredProject} />
                          </a>
                        )}
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
            </>
          ) : (
            <div className="text-center py-20 text-muted-foreground bg-card w-full max-w-4xl rounded-xl border border-border border-dashed">
              <p>No projects found in this category yet.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index, setHoveredProject }: { project: any, index: number, setHoveredProject: (idx: number | null) => void }) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden transition-all duration-300 h-full border-border bg-card",
        "hover:border-accent hover:shadow-[0_0_30px_-5px_var(--color-accent)]",
        "hover:-translate-y-1"
      )}
      onMouseEnter={() => setHoveredProject(index)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <CardContent className="p-0 flex flex-col h-full">
        <div className="aspect-video overflow-hidden relative">
          <img
            src={project.image || "/placeholder.svg?height=300&width=500&query=blockchain+dashboard+interface"}
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
  )
}