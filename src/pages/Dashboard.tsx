
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Car, User, Search } from "lucide-react";

// Mock data for applications
const mockApplications = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    location: "New York, NY",
    vehicle: "Toyota Camry (2020)",
    status: "pending",
    date: "2023-05-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "(555) 987-6543",
    location: "Los Angeles, CA",
    vehicle: "Honda Accord (2021)",
    status: "approved",
    date: "2023-05-13",
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    phone: "(555) 456-7890",
    location: "Chicago, IL",
    vehicle: "Ford Fusion (2019)",
    status: "rejected",
    date: "2023-05-10",
  },
  {
    id: 4,
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    phone: "(555) 234-5678",
    location: "Miami, FL",
    vehicle: "Chevrolet Malibu (2022)",
    status: "pending",
    date: "2023-05-14",
  },
  {
    id: 5,
    name: "David Miller",
    email: "david.miller@example.com",
    phone: "(555) 876-5432",
    location: "Seattle, WA",
    vehicle: "Nissan Altima (2021)",
    status: "approved",
    date: "2023-05-12",
  },
  {
    id: 6,
    name: "Sarah Wilson",
    email: "sarah.wilson@example.com",
    phone: "(555) 345-6789",
    location: "Denver, CO",
    vehicle: "Hyundai Sonata (2020)",
    status: "pending",
    date: "2023-05-15",
  },
];

// Status badge colors
const statusColors = {
  pending: "bg-yellow-100 text-yellow-800",
  approved: "bg-green-100 text-green-800",
  rejected: "bg-red-100 text-red-800",
};

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  
  // Filter applications based on search and status
  const filteredApplications = mockApplications.filter((app) => {
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || app.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Car className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">RideCrewConnect</span>
            <Badge variant="outline" className="ml-2">Admin</Badge>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Welcome, Admin</span>
            <Button variant="outline" size="sm">Logout</Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold">Company Dashboard</h1>
              <p className="text-muted-foreground">Manage driver applications and monitor performance</p>
            </div>
            <Button>+ New Application</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Total Applications</CardTitle>
                <CardDescription>All time applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold">{mockApplications.length}</span>
                  <User className="h-6 w-6 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Approved Drivers</CardTitle>
                <CardDescription>Ready to start</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold">
                    {mockApplications.filter(a => a.status === "approved").length}
                  </span>
                  <Car className="h-6 w-6 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Pending Reviews</CardTitle>
                <CardDescription>Awaiting decision</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold">
                    {mockApplications.filter(a => a.status === "pending").length}
                  </span>
                  <Clock className="h-6 w-6 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="applications" className="mb-8">
            <TabsList>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="drivers">Active Drivers</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            <TabsContent value="applications" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Driver Applications</CardTitle>
                  <CardDescription>
                    Review and manage applicants
                  </CardDescription>
                  
                  <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search by name, email, or location..."
                        className="pl-8"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <Select
                      value={statusFilter}
                      onValueChange={setStatusFilter}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Vehicle</TableHead>
                          <TableHead>Application Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredApplications.map((application) => (
                          <TableRow key={application.id}>
                            <TableCell className="font-medium">
                              <div>{application.name}</div>
                              <div className="text-sm text-muted-foreground">{application.email}</div>
                            </TableCell>
                            <TableCell>{application.location}</TableCell>
                            <TableCell>{application.vehicle}</TableCell>
                            <TableCell>{new Date(application.date).toLocaleDateString()}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className={`
                                ${application.status === "pending" ? "bg-yellow-100 text-yellow-800" : ""}
                                ${application.status === "approved" ? "bg-green-100 text-green-800" : ""}
                                ${application.status === "rejected" ? "bg-red-100 text-red-800" : ""}
                              `}>
                                {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="outline" size="sm">View Details</Button>
                            </TableCell>
                          </TableRow>
                        ))}
                        {filteredApplications.length === 0 && (
                          <TableRow>
                            <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                              No applications match your filters
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="drivers">
              <Card>
                <CardHeader>
                  <CardTitle>Active Drivers</CardTitle>
                  <CardDescription>
                    Monitor and manage your active driver fleet
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center py-16">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">Additional driver management features coming soon</p>
                    <Button variant="outline">View Preview</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reports">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics & Reports</CardTitle>
                  <CardDescription>
                    Track performance metrics and generate reports
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center py-16">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-4">Reporting features coming soon</p>
                    <Button variant="outline">View Preview</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <footer className="border-t py-6">
        <div className="container">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} RideCrewConnect. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

// Clock icon component
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

export default Dashboard;
