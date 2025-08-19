import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, ShoppingCart, Cog, Database, Smartphone, Cloud } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Web Applications",
    description: "Scalable web applications built with C#, ASP.NET, APIs, and seamless integrations that grow with your business.",
    technologies: ["C#", "ASP.NET", "APIs", "Integrations"],
    gradient: "from-primary to-secondary"
  },
  {
    icon: Smartphone,
    title: "Business Websites",
    description: "Fast, responsive, entrepreneur-friendly websites designed to convert visitors into customers.",
    technologies: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    gradient: "from-secondary to-accent"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Complete online stores with WordPress, WooCommerce, and custom integrations for seamless shopping experiences.",
    technologies: ["WordPress", "WooCommerce", "Payment Integration"],
    gradient: "from-accent to-primary"
  },
  {
    icon: Database,
    title: "Management Systems",
    description: "Custom POS, inventory tracking, and business management solutions tailored to your specific needs.",
    technologies: ["POS Systems", "Inventory", "Analytics"],
    gradient: "from-primary to-accent"
  },
  {
    icon: Cloud,
    title: "Portal Development",
    description: "Secure portals for licensing, compliance, and business operations with user-friendly interfaces.",
    technologies: ["Secure Portals", "User Management", "Compliance"],
    gradient: "from-secondary to-primary"
  },
  {
    icon: Cog,
    title: "System Integration",
    description: "Connect your existing systems and automate workflows for maximum efficiency and productivity.",
    technologies: ["API Integration", "Automation", "Workflow"],
    gradient: "from-accent to-secondary"
  }
];

const Services = () => {
  return (
    <section className="py-20 px-6" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions to accelerate your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="card-gradient border-0 shadow-2xl card-hover animate-scale-in group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary" 
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your business with our solutions?
          </p>
          <div className="inline-block">
            <div className="text-2xl font-bold text-gradient-accent animate-pulse">
              Let's discuss your project! 🚀
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;