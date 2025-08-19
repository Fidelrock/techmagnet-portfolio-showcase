import { Card, CardContent } from "@/components/ui/card";
import { Code, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">About</span> TechMagnet
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where innovation meets expertise, and ideas transform into reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Professional Side */}
          <Card className="card-gradient border-0 shadow-2xl card-hover animate-scale-in">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-gradient-primary">Professional Excellence</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We're a team of Software Engineers specializing in{" "}
                <span className="text-primary font-semibold">C#, ASP.NET</span>, and modern web frameworks like{" "}
                <span className="text-secondary font-semibold">Vite and WordPress</span>. Over the years, we've developed innovative solutions including License Tracker Systems, eTims Portals, Parking Management Apps, POS Systems, and multiple business websites that drive growth.
              </p>
            </CardContent>
          </Card>

          {/* Values & Passion */}
          <Card className="card-gradient border-0 shadow-2xl card-hover animate-scale-in animation-delay-500">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-gradient-accent">Our Passion</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We're passionate about{" "}
                <span className="text-accent font-semibold">solving real-world problems</span>{" "}
                through technology. Our creative approach keeps us grounded while we push the boundaries of what's possible. We believe in building solutions that not only work but inspire.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Company Values */}
        <div className="mt-16 text-center">
          <Card className="card-gradient border-0 shadow-2xl animate-scale-in animation-delay-1000">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-gradient-secondary">Our Mission</h3>
              </div>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                To empower entrepreneurs and businesses with cutting-edge technology solutions that drive growth, streamline operations, and create lasting impact in the digital world.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;