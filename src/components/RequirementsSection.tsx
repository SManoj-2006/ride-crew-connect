
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, User, Car, Shield, Clock } from "lucide-react";

const requirements = [
  {
    category: "Driver Requirements",
    icon: <User className="h-6 w-6 text-primary" />,
    items: [
      "Must be at least 21 years old",
      "Valid driver's license for 3+ years",
      "Clean driving record",
      "Eligible to work in the US",
      "Pass background check",
    ],
  },
  {
    category: "Vehicle Requirements",
    icon: <Car className="h-6 w-6 text-primary" />,
    items: [
      "2010 model year or newer",
      "4-door vehicle",
      "Valid registration and insurance",
      "Pass vehicle inspection",
      "Good working condition",
    ],
  },
  {
    category: "Documents Needed",
    icon: <Shield className="h-6 w-6 text-primary" />,
    items: [
      "Government-issued ID",
      "Driver's license",
      "Vehicle registration",
      "Proof of insurance",
      "SSN for background check",
    ],
  },
  {
    category: "Process Timeline",
    icon: <Clock className="h-6 w-6 text-primary" />,
    items: [
      "Application review: 24 hours",
      "Background check: 2-3 days",
      "Vehicle inspection: 1 day",
      "Approval notification: Same day",
      "Start driving: Immediately",
    ],
  },
];

const RequirementsSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Requirements Overview</h2>
          <p className="text-lg text-muted-foreground">
            Here's everything you need to know to get started as a driver with our platform.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {requirements.map((requirement, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3">
                  {requirement.icon}
                  <CardTitle className="text-xl">{requirement.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requirement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;
