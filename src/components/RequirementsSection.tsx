
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const RequirementsSection = () => {
  const driverRequirements = [
    "Must be at least 21 years of age",
    "Valid driver's license for at least 1 year",
    "Clean driving record with no major violations",
    "Must pass background check",
    "Smartphone compatible with our driver app",
  ];

  const vehicleRequirements = [
    "4-door vehicle in good condition",
    "Vehicle must be 10 years old or newer",
    "Current registration and insurance",
    "Must pass vehicle inspection",
    "Working AC and heating",
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Driver Requirements</h2>
          <p className="text-lg text-muted-foreground">
            Before applying, please make sure you meet our basic driver and vehicle requirements.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Driver Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {driverRequirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-0.5">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Vehicle Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {vehicleRequirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-0.5">
                      <Check className="h-5 w-5 text-primary" />
                    </div>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
