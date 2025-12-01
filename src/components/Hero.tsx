import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold">
  <span className="typing-emmanuel block">Emmanuel</span>
  <span className="gradient-text shake-archibong">Archibong</span>
</h1>

              <p className="text-xl md:text-2xl text-muted-foreground">
                Full-Stack Developer
              </p>
            </div>
            
            <p className="text-lg text-foreground/80 max-w-xl">
              I build Fast, scalable, and beautiful digital experiences.powered by React, TypeScript, Node.js, Express js and MongoDB. Bringing ideas to life with full-stack precision.            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild className="group">
                <a href="#projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/DevArchibong/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/devarchibong/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:archibonggemmanuel@gmail.com"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-glow" />
              <div className="relative bg-gradient-card rounded-2xl border border-border p-8 hover-scale">
                <img
                  src="./my_headshot.jpg"
                  alt="Emmanuel Archibong"
                  className="rounded-xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
