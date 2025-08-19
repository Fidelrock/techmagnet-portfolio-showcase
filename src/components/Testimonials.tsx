import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    content: "TechMagnet delivered beyond expectations. Our website is sleek, fast, and has helped us attract more clients. The team's expertise in modern web technologies really shows.",
    author: "LRBFA.africa Team",
    role: "Professional Association",
    rating: 5,
    project: "Corporate Website Development"
  },
  {
    content: "The e-commerce platform was exactly what we needed. Reliable, secure, and scalable. The integration with payment systems works flawlessly, and our sales have increased significantly.",
    author: "ZambeziMarket.net",
    role: "E-commerce Platform",
    rating: 5,
    project: "Online Marketplace Solution"
  },
  {
    content: "Their POS system transformed our business operations. The inventory management and real-time analytics give us insights we never had before. Highly professional team!",
    author: "Local Business Owner",
    role: "Retail Management",
    rating: 5,
    project: "Point of Sale System"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-gradient-primary">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear what our clients say about working with TechMagnet Solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="card-gradient border-0 shadow-2xl card-hover animate-scale-in relative overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-8 h-8 text-primary" />
              </div>

              <CardContent className="p-8">
                {/* Rating Stars */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Project Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/20">
                    {testimonial.project}
                  </span>
                </div>

                {/* Author Info */}
                <div className="border-t border-border/50 pt-4">
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action for More Testimonials */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="inline-block card-gradient border-0 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gradient-accent mb-4">
                Join Our Success Stories
              </h3>
              <p className="text-muted-foreground mb-6 max-w-lg">
                Ready to become our next satisfied client? Let's discuss how we can help transform your business with innovative technology solutions.
              </p>
              <div className="inline-flex items-center space-x-2 text-primary">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-semibold">Trusted by 50+ Businesses</span>
                <Star className="w-5 h-5 fill-current" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;