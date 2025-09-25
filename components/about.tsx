"use client"

import { useState } from "react"

export function About() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null)

  const blockchainSkills = [
    { name: "Figma", level: 90, description: "Smart contract development and optimization" },
    { name: "Solidity", level: 65, description: "Blockchain integration and dApp development" },
    { name: "JavaScript", level: 60, description: "DeFi protocols and token standards" },
    { name: "Java", level: 85, description: "Decentralized storage solutions" },
    { name: "Microsoft SQL", level: 75, description: "Smart contract testing and deployment" },
  ]

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am an Information Systems undergraduate minoring in Blockchain Technology. 
                Passionate in learning and building Web3.
              </p>
              <p>
                Currently developing blockchain infrastructure in the healthcare industry to build a distributed
                and decentralized patient medical record.
              </p>
              <p>
                When I am building, you'll find me front running the latest in blockchain technology,
                learning and upgrading my skills.
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
                {["Figma", "Solidity", "JavaScript", "Java", "Microsoft SQL"].map(
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
