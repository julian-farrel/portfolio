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

const socialMediaAccounts = [
  {
    name: "Boby Finance",
    handle: "@BobyFinance",
    platform: "YouTube",
    description:
      "Finance and crypto content created with the help of AI — covering market insights, Web3 trends, and investment breakdowns.",
    tags: ["Finance", "Crypto", "Web3", "AI-Generated"],
    image: "",
    href: "https://www.youtube.com/@BobyFinance",
  },
  {
    name: "Coming Soon",
    handle: "@TikTok",
    platform: "TikTok",
    description:
      "Short-form finance and crypto content powered by AI. Stay tuned for updates.",
    tags: ["Finance", "Crypto", "Short-Form", "AI-Generated"],
    image: "",
    href: "#",
  },
]

export function AIProjects() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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

  const platformIcon = (platform: string) => {
    if (platform === "YouTube") {
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    }
    if (platform === "TikTok") {
      return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
        </svg>
      )
    }
    return null
  }

  const platformColor = (platform: string) => {
    if (platform === "YouTube") return "text-red-500"
    if (platform === "TikTok") return "text-pink-400"
    return "text-accent"
  }

  return (
    <section id="ai-projects" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI-Powered <span className="text-accent">Social Media</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Content channels built and grown with the help of artificial intelligence
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          <Carousel setApi={setApi} className="w-full max-w-4xl" opts={{ loop: true }}>
            <CarouselContent>
              {socialMediaAccounts.map((account, index) => (
                <CarouselItem key={`${account.name}-${index}`}>
                  <div className="p-1 h-full">
                    <a
                      href={account.href}
                      target={account.href === "#" ? "_self" : "_blank"}
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
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        <CardContent className="p-0 flex flex-col h-full">
                          <div className="aspect-video overflow-hidden relative bg-gradient-to-br from-secondary/60 to-background flex items-center justify-center">
                            {account.image ? (
                              <img
                                src={account.image}
                                alt={account.name}
                                className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:saturate-105"
                              />
                            ) : (
                              <div className={cn("opacity-20 group-hover:opacity-40 transition-opacity duration-300 scale-[3]", platformColor(account.platform))}>
                                {platformIcon(account.platform)}
                              </div>
                            )}
                          </div>
                          <div className="p-6 flex flex-col flex-grow relative z-20 bg-card border-t border-border/50">
                            <div className="flex justify-between items-start mb-1">
                              <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                                {account.name}
                              </h3>
                              <span className={cn("flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-semibold bg-secondary px-2 py-1 rounded border border-border/50", platformColor(account.platform))}>
                                {platformIcon(account.platform)}
                                {account.platform}
                              </span>
                            </div>
                            <p className="text-xs text-muted-foreground/60 mb-4">{account.handle}</p>
                            <p className="text-muted-foreground mb-6 flex-grow">{account.description}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                              {account.tags.map((tag: string) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium border border-transparent group-hover:border-accent/30 transition-colors"
                                >
                                  {tag}
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
