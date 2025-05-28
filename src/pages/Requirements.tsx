
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, User, Car, FileText, ArrowRight, AlertCircle } from "lucide-react";

const Requirements = () => {
  const driverRequirements = [
    {
      category: "Personal Requirements",
      icon: <User className="h-6 w-6" />,
      items: [
        "Minimum age: 21 years",
        "Valid Indian driving license (minimum 3 years)",
        "Clean driving record with no major violations",
        "Basic English and local language skills",
        "Smartphone with Android 6.0+ or iOS 10+",
        "Valid Aadhar card and PAN card"
      ]
    },
    {
      category: "Vehicle Requirements", 
      icon: <Car className="h-6 w-6" />,
      items: [
        "Vehicle model year: 2015 or newer",
        "4-door vehicle (hatchback, sedan, or SUV)",
        "Valid vehicle registration (RC)",
        "Comprehensive insurance coverage",
        "Pollution Under Control (PUC) certificate",
        "Vehicle inspection passed"
      ]
    },
    {
      category: "Documentation",
      icon: <FileText className="h-6 w-6" />,
      items: [
        "Original driving license",
        "Vehicle registration certificate",
        "Insurance documents",
        "Aadhar card",
        "PAN card",
        "Recent passport-size photographs"
      ]
    }
  ];

  const vehicleSpecs = [
    {
      type: "Hatchback",
      models: "Maruti Swift, Hyundai i20, Tata Altroz",
      minYear: "2015",
      earning: "₹15-25/km"
    },
    {
      type: "Sedan",
      models: "Honda City, Hyundai Verna, Maruti Ciaz",
      minYear: "2015", 
      earning: "₹18-30/km"
    },
    {
      type: "SUV",
      models: "Mahindra XUV300, Tata Nexon, Hyundai Creta",
      minYear: "2015",
      earning: "₹20-35/km"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-orange-50 to-green-100 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Driver Requirements for India
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Everything you need to know to become a RideCrewConnect driver in India
              </p>
              <Button size="lg" asChild>
                <Link to="/apply">
                  Check If You Qualify
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Requirements Section */}
        <section className="py-16">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-3">
              {driverRequirements.map((requirement, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {requirement.icon}
                      </div>
                      <CardTitle className="text-xl">{requirement.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {requirement.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle Specifications */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Approved Vehicle Types</h2>
              <p className="text-lg text-muted-foreground">
                Popular Indian vehicle models and their earning potential
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              {vehicleSpecs.map((spec, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-center">{spec.type}</CardTitle>
                    <CardDescription className="text-center">
                      Min. Year: {spec.minYear}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Popular Models:</p>
                      <p className="font-medium">{spec.models}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Earning Potential:</p>
                      <p className="text-2xl font-bold text-green-600">{spec.earning}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Application Process</h2>
              <p className="text-lg text-muted-foreground">
                Simple steps to get started with RideCrewConnect
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Submit Application",
                  description: "Fill out the online form with your details and upload required documents"
                },
                {
                  step: "2", 
                  title: "Background Check",
                  description: "We verify your documents and conduct a background check"
                },
                {
                  step: "3",
                  title: "Vehicle Inspection",
                  description: "Schedule a vehicle inspection at our authorized centers"
                },
                {
                  step: "4",
                  title: "Start Driving",
                  description: "Download the app, complete training, and start earning"
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Notes */}
        <section className="py-16 bg-orange-50">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="h-6 w-6 text-orange-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-orange-900 mb-2">Important Notes</h3>
                  <ul className="space-y-2 text-orange-800">
                    <li>• All documents must be original and valid</li>
                    <li>• Vehicle inspection is mandatory and must be passed</li>
                    <li>• Background check typically takes 3-5 business days</li>
                    <li>• You must maintain valid insurance and PUC throughout</li>
                    <li>• Age restrictions may vary by state regulations</li>
                    <li>• Commercial vehicle permits may be required in some cities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Meet the Requirements? Apply Now!
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Join thousands of drivers across India earning great money with flexible schedules
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/apply">
                    Apply to Drive
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/benefits">View Benefits</Link>
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

export default Requirements;
