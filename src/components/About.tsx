import { Card } from "@/components/ui/card";
import { Code2, Database, Server, Cloud } from "lucide-react";

const About = () => {
  const expertise = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, Tailwind CSS",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Node.js, Express, RESTful APIs",
    },
    {
      icon: Database,
      title: "Database Management",
      description: "PostgreSQL, MongoDB,",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "AWS, Docker",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate full-stack developer with expertise in building MERN Stack web applications.
            I combine technical skill with analytical problem-solving to deliver robust, scalable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-gradient-card border-border hover-scale group cursor-pointer"
              >
                <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </Card>
            );
          })}
        </div>

        <Card className="mt-12 p-8 bg-gradient-card border-border">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Professional Journey</h3>
              <p className="text-foreground/80 mb-4">
                With years of experience in full-stack development, I've worked on diverse projects
                ranging from e-commerce platforms to enterprise applications. My approach combines
                modern development practices with a deep understanding of business needs.
              </p>
              <p className="text-foreground/80">
                I'm passionate about clean code, scalable architecture, and creating exceptional
                user experiences that make a real impact.
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary mb-2">Education</h4>
                <p className="text-foreground/80">
                  Diploma.Software development
                  <br />
                  <span className="text-muted-foreground">Focus on Full stack web development using modern web technologies (MERN)</span>
                </p>
                <p className="text-foreground/80">
                  B.Sc. Elect/Elect
                  <br />
                  <span className="text-muted-foreground">Focus on Networks and communications</span>
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Experience</h4>
                <p className="text-foreground/80">
                  1+ years in full-stack development
                  <br />
                  <span className="text-muted-foreground">Specialized in modern web technologies</span>
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
