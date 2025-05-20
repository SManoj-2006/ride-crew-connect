
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "Apply Online",
    description: "Fill out our simple application form with your basic information and vehicle details.",
  },
  {
    number: "02",
    title: "Document Verification",
    description: "Submit required documents including driver's license, insurance, and vehicle registration.",
  },
  {
    number: "03",
    title: "Background Check",
    description: "We'll conduct a quick background check to ensure safety standards for our platform.",
  },
  {
    number: "04",
    title: "Get Approved",
    description: "Once approved, you'll get access to our driver app and can start accepting jobs.",
  },
];

const StepsSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Getting started as a driver is easy. Follow these simple steps to join our platform.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white text-xl font-bold mb-4">
                  {step.number}
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
