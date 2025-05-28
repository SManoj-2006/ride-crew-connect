
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import {
  Users,
  Car,
  DollarSign,
  TrendingUp,
  CheckCircle,
  XCircle,
  Clock,
  Settings,
  BarChart3,
  FileText,
  Shield,
  Phone,
  Building,
  UserCheck,
  HeadphonesIcon
} from "lucide-react";

const AdminDashboard = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh@example.in",
      phone: "+91 9876543210",
      status: "pending",
      appliedDate: "2024-01-15",
      vehicle: "Maruti Suzuki Swift 2020",
      location: "Mumbai, Maharashtra"
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@example.in",
      phone: "+91 9876543211",
      status: "approved",
      appliedDate: "2024-01-14",
      vehicle: "Hyundai i20 2021",
      location: "Delhi, NCR"
    },
    {
      id: 3,
      name: "Amit Singh",
      email: "amit@example.in",
      phone: "+91 9876543212",
      status: "rejected",
      appliedDate: "2024-01-13",
      vehicle: "Tata Tiago 2019",
      location: "Bangalore, Karnataka"
    }
  ]);

  const updateApplicationStatus = (id: number, status: string) => {
    setApplications(prev => 
      prev.map(app => 
        app.id === id ? { ...app, status } : app
      )
    );
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case "rejected":
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const stats = [
    {
      title: "Total Drivers",
      value: "12,340",
      icon: <Users className="h-6 w-6" />,
      change: "+12%",
      changeType: "positive"
    },
    {
      title: "Active Rides",
      value: "8,560",
      icon: <Car className="h-6 w-6" />,
      change: "+8%",
      changeType: "positive"
    },
    {
      title: "Revenue",
      value: "₹45,67,800",
      icon: <DollarSign className="h-6 w-6" />,
      change: "+15%",
      changeType: "positive"
    },
    {
      title: "Growth Rate",
      value: "23%",
      icon: <TrendingUp className="h-6 w-6" />,
      change: "+5%",
      changeType: "positive"
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">Manage your Indian ride-sharing platform</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <div className="text-primary">{stat.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">{stat.change}</span> from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="applications" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="applications">Applications</TabsTrigger>
          <TabsTrigger value="drivers">Drivers</TabsTrigger>
          <TabsTrigger value="rupees">₹ Rupees</TabsTrigger>
          <TabsTrigger value="tracking">Tracking</TabsTrigger>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="support">Support</TabsTrigger>
        </TabsList>

        {/* Applications Tab */}
        <TabsContent value="applications">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Driver Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Vehicle</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Applied Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell className="font-medium">{app.name}</TableCell>
                      <TableCell>{app.email}</TableCell>
                      <TableCell>{app.phone}</TableCell>
                      <TableCell>{app.vehicle}</TableCell>
                      <TableCell>{app.location}</TableCell>
                      <TableCell>{app.appliedDate}</TableCell>
                      <TableCell>{getStatusBadge(app.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {app.status === "pending" && (
                            <>
                              <Button
                                size="sm"
                                onClick={() => updateApplicationStatus(app.id, "approved")}
                                className="bg-green-600 hover:bg-green-700"
                              >
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => updateApplicationStatus(app.id, "rejected")}
                              >
                                <XCircle className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Drivers Tab */}
        <TabsContent value="drivers">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Active Drivers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "Suresh Patel", location: "Mumbai", rating: "4.8", status: "Online" },
                  { name: "Ravi Kumar", location: "Delhi", rating: "4.9", status: "Online" },
                  { name: "Ankit Sharma", location: "Bangalore", rating: "4.7", status: "Offline" },
                  { name: "Deepak Singh", location: "Pune", rating: "4.6", status: "Online" },
                  { name: "Manoj Yadav", location: "Chennai", rating: "4.8", status: "Online" },
                  { name: "Vijay Kumar", location: "Hyderabad", rating: "4.9", status: "Offline" }
                ].map((driver, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{driver.name}</h3>
                          <p className="text-sm text-muted-foreground">{driver.location}</p>
                          <p className="text-sm text-muted-foreground">{driver.rating} ★ rating</p>
                          <Badge className={`mt-1 ${driver.status === 'Online' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                            {driver.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Rupees Tab */}
        <TabsContent value="rupees">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Revenue Analytics (₹)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Today's Revenue</span>
                    <span className="font-bold text-2xl">₹1,24,567</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>This Week</span>
                    <span className="font-semibold">₹8,76,543</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>This Month</span>
                    <span className="font-semibold">₹45,67,800</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Commission Rate</span>
                    <span className="font-semibold">15%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Base Fare</span>
                    <span className="font-semibold">₹25</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Per KM Rate</span>
                    <span className="font-semibold">₹12</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Payment Methods
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>UPI Payments</span>
                    <span className="font-semibold">65%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Cash Payments</span>
                    <span className="font-semibold">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Card Payments</span>
                    <span className="font-semibold">8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Wallet Payments</span>
                    <span className="font-semibold">2%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tracking Tab */}
        <TabsContent value="tracking">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  SOS & Emergency Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Active Rides</span>
                    <span className="font-bold text-green-600">1,234</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Emergency Alerts</span>
                    <span className="font-bold text-red-600">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Speed Violations</span>
                    <span className="font-bold text-orange-600">12</span>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    Emergency Response Center
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Admin & Company Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Admin Users</span>
                    <span className="font-semibold">12</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Company Admins</span>
                    <span className="font-semibold">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Access Logs Today</span>
                    <span className="font-semibold">248</span>
                  </div>
                  <Button className="w-full" variant="outline">
                    Manage Access Rights
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Employees Tab */}
        <TabsContent value="employees">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="h-5 w-5" />
                  Employee Access Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Total Employees</span>
                    <span className="font-semibold">156</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Active Sessions</span>
                    <span className="font-semibold">89</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Department Access</span>
                    <span className="font-semibold">8 Depts</span>
                  </div>
                  <Button className="w-full">
                    Employee Directory
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Employee Roles & Permissions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Admin Role</span>
                    <span className="font-semibold">5 users</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Manager Role</span>
                    <span className="font-semibold">12 users</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Support Role</span>
                    <span className="font-semibold">25 users</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Analyst Role</span>
                    <span className="font-semibold">18 users</span>
                  </div>
                  <Button className="w-full" variant="outline">
                    Manage Roles
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Support Tab */}
        <TabsContent value="support">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HeadphonesIcon className="h-5 w-5" />
                  Customer Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Open Tickets</span>
                    <span className="font-bold text-orange-600">47</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Resolved Today</span>
                    <span className="font-bold text-green-600">23</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Average Response Time</span>
                    <span className="font-semibold">2.5 mins</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Customer Satisfaction</span>
                    <span className="font-semibold">4.6/5</span>
                  </div>
                  <Button className="w-full">
                    Support Dashboard
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  24/7 Support Center
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold">1800-RIDECREW</p>
                    <p className="text-sm text-muted-foreground">Toll-free helpline</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Calls Today</span>
                    <span className="font-semibold">1,247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Chat Sessions</span>
                    <span className="font-semibold">2,156</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Email Tickets</span>
                    <span className="font-semibold">89</span>
                  </div>
                  <Button className="w-full" variant="outline">
                    Live Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
