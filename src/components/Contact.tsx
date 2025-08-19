import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background to-muted/30" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? Get in touch and let's discuss your project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-scale-in">
            <Card className="card-gradient border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gradient-secondary">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <p className="text-muted-foreground">+254 746 906 860</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">techmagnetsolutionslimited@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">Kenya, East Africa</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="card-gradient border-0 shadow-2xl">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-gradient-accent">Ready to Start?</h3>
                <div className="space-y-3">
                  <Button 
                    className="w-full btn-hero" 
                    size="lg"
                    onClick={() => {
                      window.open('https://wa.me/254746906860?text=Hi! I would like to discuss my project requirements with TechMagnet Solutions.', '_blank');
                    }}
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Chat on WhatsApp Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full btn-outline-glow" 
                    size="lg"
                    onClick={() => {
                      window.open('mailto:techmagnetsolutionslimited@gmail.com?subject=Project Inquiry - TechMagnet Solutions&body=Hi TechMagnet Solutions,%0D%0A%0D%0AI would like to discuss my project requirements.%0D%0A%0D%0AProject Type: %0D%0ATimeline: %0D%0ABudget Range: %0D%0ADescription: %0D%0A%0D%0AThank you!', '_blank');
                    }}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Project Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-gradient border-0 shadow-2xl animate-scale-in animation-delay-500">
            <CardHeader>
              <CardTitle className="text-2xl text-gradient-primary">Start Your Project</CardTitle>
              <p className="text-muted-foreground">Tell us about your project and we'll get back to you within 24 hours</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input 
                    placeholder="Your full name" 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Project Type</label>
                <Input 
                  placeholder="e.g., E-commerce Website, Custom Web App, POS System" 
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Project Description</label>
                <Textarea 
                  placeholder="Tell us about your project, timeline, and any specific requirements..."
                  rows={6}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button 
                className="w-full btn-hero" 
                size="lg"
                onClick={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget.closest('form') || e.currentTarget.closest('[data-form]');
                  const formData = new FormData();
                  const inputs = document.querySelectorAll('#contact input, #contact textarea');
                  let formText = 'Project Inquiry from Website:%0D%0A%0D%0A';
                  
                  inputs.forEach((input: any) => {
                    if (input.placeholder && input.value) {
                      const label = input.placeholder.replace('Your ', '').replace('your@', '').replace('e.g., ', '');
                      formText += `${label}: ${input.value}%0D%0A`;
                    }
                  });
                  
                  window.open(`https://wa.me/254746906860?text=${formText}`, '_blank');
                }}
              >
                <Send className="w-5 h-5 mr-2" />
                Get My Free Quote
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We'll send you a detailed proposal within 24 hours
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action Banner */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="card-gradient border-0 shadow-2xl overflow-hidden">
            <CardContent className="p-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-gradient-primary mb-4">
                  Ready to 10X Your Business?
                </h3>
                <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Join 50+ successful businesses that chose TechMagnet Solutions for game-changing results
                </p>
                <div className="text-2xl font-bold text-gradient-accent animate-pulse">
                  Book Your Strategy Call Today! 🚀
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;