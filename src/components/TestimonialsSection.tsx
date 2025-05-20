
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "James Wilson",
    role: "Full-time Driver",
    testimonial: "Joining RideCrewConnect was the best career decision I've made. The flexibility allows me to be there for my family while earning a great income. The app is intuitive, and the support team is always there when I need them.",
    image: "https://source.unsplash.com/random/100x100/?portrait,man,1",
  },
  {
    name: "Maria Rodriguez",
    role: "Weekend Driver",
    testimonial: "I drive on weekends to supplement my income, and it's been perfect. The onboarding process was smooth, and I was on the road earning within days. I appreciate how transparent the company is about pay and expectations.",
    image: "https://source.unsplash.com/random/100x100/?portrait,woman,1",
  },
  {
    name: "David Chen",
    role: "Part-time Driver",
    testimonial: "As a college student, I needed a flexible job that works around my class schedule. RideCrewConnect lets me work when I want, and the pay helps cover my expenses. The driver community is supportive and welcoming.",
    image: "https://source.unsplash.com/random/100x100/?portrait,man,2",
  },
  {
    name: "Sarah Johnson",
    role: "Evening Driver",
    testimonial: "After working my day job, I drive a few hours in the evenings. The extra income has helped me pay off debt and save for a vacation. The route optimization feature helps me maximize my time and earnings.",
    image: "https://source.unsplash.com/random/100x100/?portrait,woman,2",
  },
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Hear From Our Drivers</h2>
          <p className="text-lg text-muted-foreground">
            Real stories from real drivers who are part of the RideCrewConnect family.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16">
            <Button size="icon" variant="ghost" onClick={prevTestimonial} className="rounded-full size-12">
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
          </div>
          
          <Card className="bg-muted/30 border-none">
            <CardContent className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <blockquote className="text-lg md:text-xl mb-4 italic">
                    "{testimonials[currentTestimonial].testimonial}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-base">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16">
            <Button size="icon" variant="ghost" onClick={nextTestimonial} className="rounded-full size-12">
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
          
          {/* Mobile navigation */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            <Button size="icon" variant="outline" onClick={prevTestimonial}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button size="icon" variant="outline" onClick={nextTestimonial}>
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full ${
                  index === currentTestimonial ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
