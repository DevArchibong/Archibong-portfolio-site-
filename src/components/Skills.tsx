import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: "Expert" },
        { name: "TypeScript", level: "Expert" },
        { name: "Next.js", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Redux/Zustand", level: "Intermediate" },
        { name: "React Query", level: "Advanced" },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: "Expert" },
        { name: "Express.js", level: "Expert" },
        // { name: "Python", level: "Advanced" },
        // { name: "GraphQL", level: "Advanced" },
        { name: "RESTful APIs", level: "Intermediate" },
        { name: "WebSockets", level: "Intermediate" },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "PostgreSQL", level: "Expert" },
        { name: "MongoDB", level: "Advanced" },
        // { name: "Redis", level: "Advanced" },

        { name: "SQL", level: "Expert" },
        { name: "Database Design", level: "Expert" },
      ],
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Docker", level: "Advanced" },
        { name: "AWS", level: "Advanced" },
        { name: "Git & GitHub", level: "Expert" },
        // { name: "CI/CD", level: "Advanced" },
        // { name: "Linux", level: "Advanced" },
        // { name: "Kubernetes", level: "Intermediate" },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Expert":
        return "bg-primary/20 text-primary border-primary/30";
      case "Advanced":
        return "bg-accent/20 text-accent border-accent/30";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-card border-border hover-scale"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between"
                  >
                    <span className="text-foreground font-medium">
                      {skill.name}
                    </span>
                    <Badge
                      variant="outline"
                      className={getLevelColor(skill.level)}
                    >
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
