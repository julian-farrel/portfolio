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
  DialogClose, 
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

const projects = [
  {
    title: "ParkHere",
    description: "Prototype for a Smart Parking System application made to solve inefficiency in parking spot searching.",
    tech: ["Figma"],
    image: "/parkhere banner 512h.png",
    gallery: [
      "parkhere1.png",
      "parkhere2.png",
      "parkhere3.png",
      "parkhere4.png",
      "parkhere5.png",
      "parkhere6.png",
      "parkhere7.png",
      "parkhere8.png",
      "parkhere9.png",
      "parkhere10.png",
      "parkhere11.png",
      "parkhere12.png",
      "parkhere13.png",
      "parkhere14.png",
      "parkhere15.png"
    ],
    category: "Figma",
  },
  {
    title: "Sepato",
    description: "Decentralized Marketplace to Buy/Sell Footwear.",
    tech: ["Figma"],
    image: "sepato banner.png",
    gallery: [
      "sepato1.png",
      "sepato2.png",
      "sepato3.png",
      "sepato4.png",
      "sepato5.png",
      "sepato6.png",
      "sepato7.png",
      "sepato8.png",
      "sepato9.png",
      "sepato10.png",
      "sepato11.png",
      "sepato12.png",
      "sepato13.png",
      "sepato14.png",
      "sepato15.png"
    ],
    category: "Figma",
  },
  {
    title: "NFTMart",
    description: "Decentralized Marketplace to Buy/Sell NFT.",
    tech: ["Figma"],
    image: "nftmart banner.png",
    gallery: [
      "nftmart1.png",
      "nftmart2.png",
      "nftmart3.png",
      "nftmart4.png",
      "nftmart5.png",
      "nftmart6.png",
      "nftmart7.png",
      "nftmart8.png",
      "nftmart9.png",
      "nftmart10.png"
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
                            
                            <DialogContent 
                              showCloseButton={false} 
                              // FIX: Added '!' (important) to these classes to override shadcn defaults strictly
                              className="fixed !left-0 !top-0 !w-screen !h-screen !max-w-none !m-0 !p-0 !border-none bg-transparent !shadow-none !outline-none !translate-x-0 !translate-y-0 flex items-center justify-center"
                            >
                              <DialogHeader className="sr-only">
                                <DialogTitle>{project.title} Gallery</DialogTitle>
                                <DialogDescription>UI Designs for {project.title}</DialogDescription>
                              </DialogHeader>

                              {/* EXIT BUTTON: Fixed to absolute top-right of SCREEN */}
                              <DialogClose className="fixed top-4 right-4 z-[100] p-2 bg-black/50 hover:bg-white/20 border border-white/10 rounded-full text-white/80 hover:text-white transition-all backdrop-blur-sm">
                                <X className="w-5 h-5" />
                                <span className="sr-only">Close</span>
                              </DialogClose>

                              <div className="w-full h-full flex items-center justify-center p-4">
                                <Carousel className="w-full h-full flex items-center justify-center" opts={{ loop: true }}>
                                  <CarouselContent className="h-full ml-0">
                                    {project.gallery?.map((img, imgIndex) => (
                                      <CarouselItem key={imgIndex} className="h-full pl-0 flex items-center justify-center">
                                        {/* IMAGE: Constrained width to ensure it doesn't overlap with the side buttons */}
                                        <div className="relative flex items-center justify-center w-full h-full">
                                          <img
                                            src={img}
                                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                                            className="max-w-[calc(100vw-150px)] max-h-[85vh] w-auto h-auto object-contain drop-shadow-2xl"
                                          />
                                        </div>
                                      </CarouselItem>
                                    ))}
                                  </CarouselContent>
                                  
                                  {/* NAV BUTTONS: Fixed to screen edges, size 12 */}
                                  <CarouselPrevious 
                                    className="fixed left-4 top-1/2 -translate-y-1/2 h-12 w-12 border-white/10 bg-black/50 hover:bg-white/20 text-white/80 hover:text-white backdrop-blur-md z-[60] border-none" 
                                  />
                                  <CarouselNext 
                                    className="fixed right-4 top-1/2 -translate-y-1/2 h-12 w-12 border-white/10 bg-black/50 hover:bg-white/20 text-white/80 hover:text-white backdrop-blur-md z-[60] border-none" 
                                  />
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