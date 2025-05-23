
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Johnson",
    role: "Driver for 2 years",
    content: "The flexibility is amazing. I can work around my schedule and the pay is consistently good. Great support team too!",
    rating: 5,
    avatar: "MJ",
  },
  {
    name: "Sarah Davis",
    role: "Driver for 1 year",
    content: "Best driving opportunity I've found. The app is easy to use and I love being able to cash out instantly when I need to.",
    rating: 5,
    avatar: "SD",
  },
  {
    name: "Robert Wilson",
    role: "Driver for 3 years",
    content: "Started part-time and now it's my main income. The community of drivers is supportive and management actually listens to feedback.",
    rating: 5,
    avatar: "RW",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Drivers Say</h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our driver community has to say about their experience.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>{testimonial.role}</CardDescription>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
