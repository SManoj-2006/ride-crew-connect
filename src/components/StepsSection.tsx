
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Car, MapPin } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Apply Online",
    description: "Fill out our simple application form with your personal and vehicle information.",
    icon: <FileText className="h-10 w-10 text-primary" />,
  },
  {
    number: "02",
    title: "Background Check",
    description: "We'll verify your driving record and conduct a comprehensive background check.",
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
  },
  {
    number: "03",
    title: "Vehicle Inspection",
    description: "Schedule a quick vehicle inspection to ensure it meets our safety standards.",
    icon: <Car className="h-10 w-10 text-primary" />,
  },
  {
    number: "04",
    title: "Start Driving",
    description: "Once approved, download our driver app and start earning money immediately.",
    icon: <MapPin className="h-10 w-10 text-primary" />,
  },
];

const StepsSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">How to Get Started</h2>
          <p className="text-lg text-muted-foreground">
            Join our driver network in just 4 simple steps. The entire process typically takes 3-5 business days.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    {step.icon}
                  </div>
                  <div className="absolute -top-3 -left-3 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
