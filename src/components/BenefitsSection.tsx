
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Car, User, Route } from "lucide-react";

// Define the Clock and DollarSign components first
const Clock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const DollarSign = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

const benefits = [
  {
    title: "Flexible Hours",
    description: "Work when you want. Set your own schedule and drive only during hours that work for you.",
    icon: <Clock className="h-10 w-10 text-primary" />,
  },
  {
    title: "Competitive Pay",
    description: "Earn competitive rates with transparent pay structure. Get paid weekly with easy tracking.",
    icon: <DollarSign className="h-10 w-10 text-primary" />,
  },
  {
    title: "Vehicle Support",
    description: "Access vehicle maintenance programs and get discounts on repairs and services.",
    icon: <Car className="h-10 w-10 text-primary" />,
  },
  {
    title: "Route Optimization",
    description: "Our smart system helps you find the most efficient routes to maximize earnings.",
    icon: <Route className="h-10 w-10 text-primary" />,
  },
  {
    title: "Driver Community",
    description: "Join a supportive community of drivers sharing tips, advice, and best practices.",
    icon: <User className="h-10 w-10 text-primary" />,
  },
  {
    title: "Location Flexibility",
    description: "Pick up rides anywhere in our service area. No restricted zones or limited regions.",
    icon: <MapPin className="h-10 w-10 text-primary" />,
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Drive With Us?</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of satisfied drivers who've found the perfect driving opportunity with RideCrewConnect.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="driver-card">
              <CardHeader>
                <div className="mb-2">{benefit.icon}</div>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
