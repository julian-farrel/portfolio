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
                Information Systems student and Blockchain developer focused on the convergence of AI, Finance, and Web3.
              </p>
              <p>
                I build decentralized systems that transform how industries handle data and value.
                My goal is to architect smarter, more transparent financial and enterprise solutions by bridging modern decentralized infrastructure with the predictive power of Artificial Intelligence.
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
