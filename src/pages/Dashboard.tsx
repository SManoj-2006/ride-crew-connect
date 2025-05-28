
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Clock, MapPin, Star, Phone, Shield } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, you'd check for authentication here
    // For now, this is just a demo dashboard
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Driver Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's your driving summary for India.</p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹28,473</div>
                <p className="text-xs text-muted-foreground">+12% from last week</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Hours Driven</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">42.5</div>
                <p className="text-xs text-muted-foreground">This week</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Trips</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156</div>
                <p className="text-xs text-muted-foreground">This month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Rating</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.9</div>
                <p className="text-xs text-muted-foreground">Average rating</p>
              </CardContent>
            </Card>
          </div>

          {/* Indian Features */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Emergency SOS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Quick access to emergency services and support
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Emergency Help
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Safety Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Real-time tracking and safety monitoring
                </p>
                <Button className="w-full" variant="outline">
                  Safety Center
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  UPI Payments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Accept payments via UPI, cards, and cash
                </p>
                <Button className="w-full" variant="outline">
                  Payment Settings
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Demo Notice */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Demo Dashboard - Indian Edition</CardTitle>
              <CardDescription>
                This is a demonstration of what your driver dashboard would look like for the Indian market. 
                Features include UPI payments, emergency SOS, and location tracking across major Indian cities.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button onClick={() => navigate("/apply")}>
                  Start Your Application
                </Button>
                <Button variant="outline" onClick={() => navigate("/customer/login")}>
                  Customer Portal
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Indian Cities Coverage */}
          <Card>
            <CardHeader>
              <CardTitle>Service Areas</CardTitle>
              <CardDescription>
                We operate in major Indian cities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {[
                  "Mumbai", "Delhi NCR", "Bangalore", "Chennai",
                  "Hyderabad", "Pune", "Kolkata", "Ahmedabad",
                  "Jaipur", "Surat", "Lucknow", "Kanpur"
                ].map((city) => (
                  <div key={city} className="p-3 border rounded-lg text-center">
                    <span className="font-medium">{city}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
