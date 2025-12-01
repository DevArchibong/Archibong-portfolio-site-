import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "archibonggemmanuel@gmail.com",
      href: "mailto:emmanuel.archibong@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+2348153890778",
      href: "tel:+2348153890778",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Abuja, Nigeria",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/DevArchibong/",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/devarchibong/",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision.
          </p>
        </div>

        <Card className="p-8 bg-gradient-card border-border">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out through any of these channels. I respond as soon as possible
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-6">
                <h4 className="font-semibold mb-4">Connect on Social</h4>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        asChild
                      >
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.label}
                        >
                          <Icon className="h-5 w-5" />
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
