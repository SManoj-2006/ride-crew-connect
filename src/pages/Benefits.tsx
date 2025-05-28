
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, IndianRupee, Shield, Clock, Users, Car, MapPin } from "lucide-react";

const additionalBenefits = [
  {
    title: "UPI Instant Payments",
    description: "Get paid instantly via UPI, PhonePe, Paytm, GPay. No waiting for weekly payouts.",
    icon: <IndianRupee className="h-8 w-8 text-green-600" />,
  },
  {
    title: "Emergency SOS Support", 
    description: "24/7 emergency support with GPS tracking and instant police alert system.",
    icon: <Shield className="h-8 w-8 text-red-600" />,
  },
  {
    title: "Festival Bonuses",
    description: "Special earnings during Diwali, Holi, Dussehra and other Indian festivals.",
    icon: <Users className="h-8 w-8 text-purple-600" />,
  },
  {
    title: "Fuel Subsidies",
    description: "Get fuel discounts at partnered petrol pumps across India. Save on every fill-up.",
    icon: <Car className="h-8 w-8 text-blue-600" />,
  },
];

const Benefits = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-50 to-green-100 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Benefits of Driving with RideCrewConnect India
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover all the advantages of being part of India's fastest-growing ride-sharing platform
              </p>
              <Button size="lg" asChild>
                <Link to="/apply">
                  Start Earning Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Main Benefits Section */}
        <BenefitsSection />

        {/* Indian-Specific Benefits */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Special Benefits for Indian Drivers</h2>
              <p className="text-lg text-muted-foreground">
                Designed specifically for the Indian market with features that matter to you
              </p>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {additionalBenefits.map((benefit, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4">{benefit.icon}</div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Earnings Breakdown */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Earnings Breakdown</h2>
              <p className="text-lg text-muted-foreground">
                Transparent pricing with no hidden fees
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Per Ride Earnings</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">₹50-200</div>
                  <p className="text-muted-foreground">Average per ride depending on distance and city</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Peak Hour Bonus</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">2-3x</div>
                  <p className="text-muted-foreground">Surge pricing during peak hours and high demand</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Monthly Potential</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">₹25,000+</div>
                  <p className="text-muted-foreground">Full-time drivers in metro cities</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Earning?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of drivers across India who are already earning great money with flexible schedules
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/apply">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/requirements">View Requirements</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Benefits;
