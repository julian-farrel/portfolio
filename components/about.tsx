"use client"

const skillCategories = [
  {
    label: "Frontend",
    skills: ["Next.js", "React", "Tailwind"],
  },
  {
    label: "Web3 & Smart Contracts",
    skills: ["Solidity", "DeFi"],
  },
  {
    label: "Enterprise & Database",
    skills: ["SAP Business One", "SQL"],
  },
]

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am an Information Systems undergraduate with a minor in Blockchain Technology — operating at the
                intersection of functional enterprise consulting, full-stack development, and decentralized architecture.
              </p>
              <p>
                My background in SAP Business One and enterprise systems gives me a grounded understanding of how
                organizations operate at scale, which I channel into building smarter, more transparent decentralized
                solutions — from on-chain medical records with Vitalis to tokenized ride-sharing with Block Rides.
              </p>
              <p>
                I don't just build for the blockchain — I build systems that bridge the legacy enterprise world with
                the trustless infrastructure of Web3 and the intelligence of modern AI.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-accent">Expertise</h3>
            <div className="space-y-4">
              {skillCategories.map((cat) => (
                <div key={cat.label}>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{cat.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-1.5 rounded-full text-sm font-medium
                          bg-white/5 border border-white/10 text-foreground
                          backdrop-blur-md
                          hover:bg-accent/15 hover:border-accent/50 hover:text-accent
                          transition-all duration-200 cursor-default
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
