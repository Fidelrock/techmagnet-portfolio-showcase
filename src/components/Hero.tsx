import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Tech background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse-glow"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse-glow animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-secondary rounded-full animate-pulse-glow animation-delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow animation-delay-3000"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-gradient-primary mb-2">TechMagnet</span>
            <span className="block">Solutions Limited</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            We help entrepreneurs bring their ideas to life by building{" "}
            <span className="text-gradient-accent font-semibold">scalable web apps</span>,{" "}
            <span className="text-gradient-accent font-semibold">business websites</span>, and{" "}
            <span className="text-gradient-accent font-semibold">custom solutions</span>{" "}
            using C# and modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              className="btn-hero group"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Your Project Today
              <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              className="btn-outline-glow group"
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio');
                portfolioSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See Our Success Stories
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute -top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/30">
            <span className="text-2xl">💻</span>
          </div>
        </div>
        
        <div className="absolute -top-10 right-10 animate-float animation-delay-2000">
          <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-accent/30">
            <span className="text-xl">🚀</span>
          </div>
        </div>

        <div className="absolute top-20 -left-5 animate-float animation-delay-4000">
          <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-secondary/30">
            <span className="text-lg">⚡</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;