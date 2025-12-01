import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, real-time inventory, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      tags: ["Node.js","React", "mongodb", "Tailwind"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "Scalable chat platform with WebSocket support, file sharing, and user presence. Features end-to-end encryption and group messaging.",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=500&fit=crop",
      tags: ["React", "Node.js", "Socket.io",],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      title: "Task Management System",
      description:
        "Collaborative project management tool with Kanban boards, team collaboration, and analytics dashboard. Supports real-time updates.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      tags: ["React", "Express", "MongoDB", ],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    // {
    //   title: "AI-Powered Analytics Dashboard",
    //   description:
    //     "Business intelligence platform with data visualization, predictive analytics, and automated reporting. Integrates with multiple data sources.",
    //   image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
    //   tags: ["TypeScript", "Python", "PostgreSQL", "D3.js"],
    //   github: "https://github.com",
    //   demo: "https://demo.com",
    // },
    // {
    //   title: "DevOps Automation Pipeline",
    //   description:
    //     "CI/CD pipeline automation with containerization, automated testing, and deployment strategies. Reduces deployment time by 70%.",
    //   image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=500&fit=crop",
    //   tags: ["Docker", "Kubernetes", "AWS", "Jenkins"],
    //   github: "https://github.com",
    //   demo: "https://demo.com",
    // },
    {
      title: "Social Media API",
      description:
        "RESTful API for social networking with authentication, posts, comments, and real-time notifications. Handles 10k+ concurrent users.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop",
      tags: ["Node.js", , "MongoDB", ],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work spanning various technologies and domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-gradient-card border-border hover-scale group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="bg-primary/10 text-primary border-primary/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild className="flex-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
