"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const projects = [
  // {
  //   title: "DeFi Yield Farming Protocol",
  //   description: "Automated yield farming protocol with smart contract optimization and multi-token staking",
  //   tech: ["Solidity", "React", "MySQL", "Web3.js", "Java"],
  //   image: "/defi-protocol-dashboard.jpg",
  //   category: "blockchain",
  //   metrics: { tvl: "$0M", apy: "0%", users: "0K" },
  // },
  {
    title: "IDX DEX Trading Platform",
    description: "Full-featured NFT marketplace with lazy minting, royalties, and IPFS integration",
    tech: ["Solidity", "Next.js", "IPFS", "Ethers.js", "Tailwind CSS"],
    image: "/nft-marketplace-interface.jpg",
    category: "blockchain",
    metrics: { volume: "$0B", collections: "120", sales: "2.8K" },
  },
  // {
  //   title: "Cross-Chain Bridge",
  //   description: "Secure asset bridge between Ethereum and Polygon with automated liquidity management",
  //   tech: ["Solidity", "Chainlink", "Node.js", "PostgreSQL"],
  //   image: "/cross-chain-bridge.jpg",
  //   category: "blockchain",
  //   metrics: { bridged: "$8.2M", chains: "3", uptime: "99.9%" },
  // },
  // {
  //   title: "DAO Governance Platform",
  //   description: "Decentralized governance system with proposal voting, treasury management, and delegation",
  //   tech: ["Solidity", "React", "The Graph", "IPFS"],
  //   image: "/dao-governance-platform.jpg",
  //   category: "blockchain",
  //   metrics: { proposals: "45", voters: "890", treasury: "$1.8M" },
  // },
]

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative Web3 solutions and DeFi protocols that push the boundaries of decentralized technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 bg-card border-border hover:border-accent/50"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden rounded-t-lg relative">
                  <img
                    src={project.image || "/placeholder.svg?height=300&width=500&query=blockchain+dashboard+interface"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {hoveredProject === index && (
                    <div className="absolute inset-0 bg-black/80 flex items-center justify-center transition-opacity duration-300">
                      <div className="text-center text-white">
                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-lg font-bold text-accent">{value}</div>
                              <div className="text-xs uppercase tracking-wide">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-accent/10 text-accent rounded text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
