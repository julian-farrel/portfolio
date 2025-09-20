"use client"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-balance">
            Julian <span className="text-accent">Farrel</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
            I craft digital experiences that blend innovative design with robust engineering
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View My Work
            </button>
            <button
              onClick={() => window.open("https://drive.google.com/uc?export=download&id=YOUR_FILE_ID", "_blank")}
              className="border border-border hover:border-accent text-foreground px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
