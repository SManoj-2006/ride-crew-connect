
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Car, 
  IndianRupee, 
  MapPin, 
  Clock, 
  Star, 
  TrendingUp,
  Calendar,
  Route,
  Fuel,
  Shield
} from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== 'driver') {
      navigate('/driver/login');
    }
  }, [user, navigate]);

  if (!user || user.role !== 'driver') {
    return null;
  }

  const todayStats = {
    earnings: 1250,
    rides: 8,
    hours: 6.5,
    rating: 4.8
  };

  const weeklyStats = {
    earnings: 8750,
    rides: 45,
    hours: 32,
    bonus: 500
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-6">
        <div className="container">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Welcome back, {user.name}!</h1>
            <p className="text-muted-foreground">Here's your driving performance for today</p>
          </div>

          {/* Quick Stats */}
          <div className="grid gap-4 md:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Today's Earnings</CardTitle>
                <IndianRupee className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">₹{todayStats.earnings}</div>
                <p className="text-xs text-muted-foreground">
                  +12% from yesterday
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Rides Completed</CardTitle>
                <Car className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{todayStats.rides}</div>
                <p className="text-xs text-muted-foreground">
                  2 more than yesterday
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Hours Online</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{todayStats.hours}h</div>
                <p className="text-xs text-muted-foreground">
                  Average: 7.2h/day
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Driver Rating</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{todayStats.rating}</div>
                <p className="text-xs text-muted-foreground">
                  Based on 124 reviews
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
              <TabsTrigger value="rides">Rides</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Performance</CardTitle>
                    <CardDescription>Your performance this week</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Total Earnings</span>
                      <span className="font-bold text-green-600">₹{weeklyStats.earnings}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Total Rides</span>
                      <span className="font-bold">{weeklyStats.rides}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Online Hours</span>
                      <span className="font-bold">{weeklyStats.hours}h</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Peak Bonus</span>
                      <span className="font-bold text-orange-600">₹{weeklyStats.bonus}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>Common driver actions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" variant="outline">
                      <MapPin className="h-4 w-4 mr-2" />
                      Go Online
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Route className="h-4 w-4 mr-2" />
                      View Active Requests
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Fuel className="h-4 w-4 mr-2" />
                      Find Fuel Stations
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Shield className="h-4 w-4 mr-2" />
                      Emergency Support
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Rides</CardTitle>
                  <CardDescription>Your last 5 completed rides</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { from: "Andheri West", to: "Bandra East", fare: "₹185", time: "2:30 PM", rating: 5 },
                      { from: "Powai", to: "Worli", fare: "₹220", time: "1:45 PM", rating: 4 },
                      { from: "Malad", to: "Goregaon", fare: "₹95", time: "12:15 PM", rating: 5 },
                      { from: "Juhu", to: "Santa Cruz", fare: "₹120", time: "11:30 AM", rating: 4 },
                      { from: "Versova", to: "Andheri", fare: "₹80", time: "10:45 AM", rating: 5 }
                    ].map((ride, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{ride.from} → {ride.to}</p>
                          <p className="text-sm text-muted-foreground">{ride.time}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-600">{ride.fare}</p>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs">{ride.rating}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="earnings" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Today</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600">₹{todayStats.earnings}</div>
                    <p className="text-sm text-muted-foreground">{todayStats.rides} rides</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>This Week</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600">₹{weeklyStats.earnings}</div>
                    <p className="text-sm text-muted-foreground">{weeklyStats.rides} rides</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>This Month</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600">₹28,450</div>
                    <p className="text-sm text-muted-foreground">156 rides</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Earnings Breakdown</CardTitle>
                  <CardDescription>Your earnings sources this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Base Fare</span>
                      <span className="font-bold">₹6,200</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Distance Charges</span>
                      <span className="font-bold">₹2,050</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Peak Hour Bonus</span>
                      <span className="font-bold text-orange-600">₹500</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Tips</span>
                      <span className="font-bold text-green-600">₹350</span>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center text-lg font-bold">
                      <span>Total</span>
                      <span className="text-green-600">₹{weeklyStats.earnings}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rides" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Ride History</CardTitle>
                  <CardDescription>All your completed rides</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { date: "Today", from: "Andheri West", to: "Bandra East", fare: "₹185", status: "Completed" },
                      { date: "Today", from: "Powai", to: "Worli", fare: "₹220", status: "Completed" },
                      { date: "Yesterday", from: "Malad", to: "Goregaon", fare: "₹95", status: "Completed" },
                      { date: "Yesterday", from: "Juhu", to: "Santa Cruz", fare: "₹120", status: "Completed" },
                      { date: "2 days ago", from: "Versova", to: "Andheri", fare: "₹80", status: "Completed" }
                    ].map((ride, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{ride.from} → {ride.to}</p>
                          <p className="text-sm text-muted-foreground">{ride.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">{ride.fare}</p>
                          <Badge variant="outline" className="text-green-600">
                            {ride.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Driver Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Name</label>
                      <p className="text-lg">{user.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <p>{user.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Phone</label>
                      <p>{user.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Location</label>
                      <p>{user.location}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Driver Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Rating</span>
                      <span className="font-bold">4.8/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Rides</span>
                      <span className="font-bold">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Member Since</span>
                      <span className="font-bold">Jan 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Status</span>
                      <Badge className="bg-green-600">Active</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
