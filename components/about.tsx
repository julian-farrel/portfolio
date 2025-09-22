"use client"

import { useState } from "react"

export function About() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  const blockchainSkills = [
    { name: "Solidity", level: 90, description: "Smart contract development and optimization" },
    { name: "Web3.js", level: 85, description: "Blockchain integration and dApp development" },
    { name: "Ethereum", level: 88, description: "DeFi protocols and token standards" },
    { name: "IPFS", level: 75, description: "Decentralized storage solutions" },
    { name: "Hardhat", level: 82, description: "Smart contract testing and deployment" },
    { name: "DeFi", level: 80, description: "Decentralized finance protocol development" },
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a blockchain developer passionate about building the decentralized future.
                With deep expertise in smart contracts, DeFi protocols, and Web3 technologies, I create secure and
                innovative blockchain solutions.
              </p>
              <p>
                Currently developing custom DeFi protocols to building user-friendly dApps, I bridge the gap between complex
                blockchain technology and seamless user experiences. My work spans across Ethereum, Layer 2 solutions,
                and emerging blockchain ecosystems.
              </p>
              <p>
                When I'm not coding smart contracts, you'll find me researching the latest in blockchain technology,
                contributing to open source Web3 projects, or sharing insights about decentralized systems.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-accent">Expertise</h3>
              <div className="space-y-3">
                {blockchainSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="relative cursor-pointer"
                    onMouseEnter={() => setActiveSkill(skill.name)}
                    onMouseLeave={() => setActiveSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-accent h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    {activeSkill === skill.name && (
                      <div className="absolute top-full left-0 mt-2 p-2 bg-card border border-border rounded-md shadow-lg z-10 text-xs">
                        {skill.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-accent">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["Solidity", "React", "Next.js", "TypeScript", "Web3.js", "Hardhat", "Node.js", "Python"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-accent">Focus Areas</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Smart contract development & auditing</li>
                <li>• DeFi protocol architecture</li>
                <li>• Web3 dApp development</li>
                <li>• Blockchain integration & optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
