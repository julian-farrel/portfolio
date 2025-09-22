import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Github, Linkedin, Instagram } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-balance">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8">
          <Card className="bg-card border-border">
            <CardContent className="p-8 flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Get In Touch</h3>
              <p className="text-muted-foreground mb-6">
                Ready to start a conversation?
                <br/> I'd love to hear about your project and explore how we can work together.
              </p>

              <div className="space-y-4 flex flex-col items-center justify-center text-center">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=julianfarrel05@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  julianfarrel05@gmail.com
                </a>

                <div className="flex gap-4 pt-4">
                  <a
                    href="https://github.com/julian-farrel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/julianfarrel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/juliannfarrel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-secondary hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* <Card className="bg-card border-border">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Message</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-foreground placeholder:text-muted-foreground resize-none"
                  />
                </div>
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Send Message</Button>
              </form>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  )
}
