import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "License Tracker System",
    description: "Automated licensing process management platform for streamlined client operations and compliance tracking.",
    technologies: ["C#", "ASP.NET", "SQL Server", "Web APIs"],
    category: "Enterprise Software",
    status: "Live",
    highlights: ["Automated workflows", "Real-time tracking", "Compliance reports"]
  },
  {
    title: "eTims Portal",
    description: "Comprehensive digital solution for tax and compliance tracking with government system integration.",
    technologies: ["C#", "ASP.NET Core", "Integration APIs", "Security"],
    category: "Government Portal",
    status: "Live",
    highlights: ["Government integration", "Secure transactions", "Real-time sync"]
  },
  {
    title: "Parking Management App",
    description: "Smart parking operations management with real-time monitoring and automated payment processing.",
    technologies: ["Web App", "Payment Gateway", "Real-time Updates"],
    category: "Smart Solutions",
    status: "Live",
    highlights: ["Real-time monitoring", "Payment automation", "Mobile responsive"]
  },
  {
    title: "POS System",
    description: "Complete point-of-sale solution with inventory management, sales analytics, and customer tracking.",
    technologies: ["C#", "Desktop App", "Database", "Reporting"],
    category: "Business Software",
    status: "Live",
    highlights: ["Inventory management", "Sales analytics", "Customer tracking"]
  },
  {
    title: "LRBFA.africa",
    description: "Professional web presence for association with modern design and comprehensive information architecture.",
    technologies: ["WordPress", "Custom Theme", "SEO", "Responsive"],
    category: "Corporate Website",
    status: "Live",
    highlights: ["Professional design", "SEO optimized", "Mobile-first"]
  },
  {
    title: "ZambeziMarket.net",
    description: "Feature-rich online marketplace platform with secure transactions and vendor management.",
    technologies: ["E-commerce", "WordPress", "WooCommerce", "Payment Gateway"],
    category: "E-commerce Platform",
    status: "Live",
    highlights: ["Multi-vendor support", "Secure payments", "Scalable architecture"]
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-muted/30 to-background" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions that drive business growth and digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="card-gradient border-0 shadow-2xl card-hover animate-scale-in group h-full flex flex-col"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <Badge 
                    variant="secondary"
                    className="bg-secondary/20 text-secondary border-secondary/30"
                  >
                    {project.category}
                  </Badge>
                  <Badge 
                    variant="outline"
                    className="bg-accent/20 text-accent border-accent/30"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-gradient-primary transition-all duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">Key Features:</h4>
                  <div className="space-y-1">
                    {project.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline" 
                        className="bg-primary/10 text-primary border-primary/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 btn-outline-glow"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="hover:bg-primary/10 hover:text-primary"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="inline-block p-8 rounded-2xl card-gradient border-0 shadow-2xl">
            <h3 className="text-2xl font-bold text-gradient-secondary mb-4">
              Explore More Projects
            </h3>
            <p className="text-muted-foreground mb-6">
              Discover our complete portfolio and open-source contributions
            </p>
            <Button className="btn-hero">
              <Github className="w-5 h-5 mr-2" />
              Visit Our GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;