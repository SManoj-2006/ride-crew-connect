
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Clock, Car, Star, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CustomerDashboard = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const recentRides = [
    {
      id: 1,
      date: "2024-01-20",
      from: "Downtown Mall",
      to: "Airport",
      driver: "John Smith",
      rating: 5,
      fare: "$45.00"
    },
    {
      id: 2,
      date: "2024-01-18",
      from: "Home",
      to: "Office Park",
      driver: "Sarah Johnson",
      rating: 4,
      fare: "$28.50"
    },
    {
      id: 3,
      date: "2024-01-15",
      from: "Restaurant",
      to: "Home",
      driver: "Mike Wilson",
      rating: 5,
      fare: "$22.00"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome back!</h1>
          <p className="text-gray-600">Book your next ride or manage your account</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Book a Ride */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  Book a Ride
                </CardTitle>
                <CardDescription>
                  Enter your pickup and destination locations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="pickup">Pickup Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="pickup"
                      placeholder="Enter pickup address"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destination">Destination</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="destination"
                      placeholder="Enter destination address"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Ride Type</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Standard</option>
                      <option>Premium</option>
                      <option>Shared</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label>When</Label>
                    <select className="w-full p-2 border rounded-md">
                      <option>Now</option>
                      <option>Schedule for later</option>
                    </select>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Find Drivers
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Clock className="mr-2 h-4 w-4" />
                  Schedule Ride
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Star className="mr-2 h-4 w-4" />
                  Rate Last Driver
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Total Rides</span>
                    <span className="font-medium">47</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Average Rating</span>
                    <span className="font-medium">4.8 ⭐</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Total Spent</span>
                    <span className="font-medium">$1,245.50</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Recent Rides */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Recent Rides</CardTitle>
            <CardDescription>Your ride history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentRides.map((ride) => (
                <div key={ride.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="font-medium">{ride.from} → {ride.to}</div>
                    <div className="text-sm text-gray-600">
                      {ride.date} • Driver: {ride.driver}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{ride.fare}</div>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{ride.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerDashboard;
