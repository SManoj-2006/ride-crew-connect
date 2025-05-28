
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, MapPin, User, IndianRupee, Shield, Smartphone } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background with Indian colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-white to-green-500 opacity-90"></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-green-600/80"></div>
      
      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded"></div>
              <div className="w-8 h-8 bg-white rounded"></div>
              <div className="w-8 h-8 bg-green-500 rounded"></div>
              <span className="text-white font-semibold ml-2">India's #1 Ride Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Drive & Earn with RideCrewConnect India
            </h1>
            <p className="text-xl text-white/95">
              Join lakhs of professional drivers across India. Earn ₹25,000+ monthly with UPI payments, 
              emergency SOS, and support in Hindi & English. Available in 100+ cities.
            </p>
            
            {/* Feature highlights */}
            <div className="flex flex-wrap gap-4 my-4">
              <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-full">
                <IndianRupee className="h-4 w-4 text-white" />
                <span className="text-white text-sm">UPI Instant Pay</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-full">
                <Shield className="h-4 w-4 text-white" />
                <span className="text-white text-sm">Emergency SOS</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-full">
                <Smartphone className="h-4 w-4 text-white" />
                <span className="text-white text-sm">Hindi Support</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" asChild className="bg-white text-orange-600 hover:bg-orange-50 font-semibold">
                <Link to="/apply">Apply Now - Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-white hover:bg-white/10">
                <Link to="/requirements">View Requirements</Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-white/90 text-sm">
              <span>✓ No joining fees</span>
              <span>✓ Earn from day 1</span>
              <span>✓ 24/7 support</span>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            {/* Main image */}
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Indian taxi driver with smartphone" 
                className="object-cover w-full h-full" 
              />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg flex items-center gap-3">
              <Car className="h-5 w-5 text-orange-600" />
              <div>
                <span className="font-medium text-sm">Flexible Hours</span>
                <p className="text-xs text-gray-600">Work when you want</p>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg flex items-center gap-3">
              <User className="h-5 w-5 text-green-600" />
              <div>
                <span className="font-medium text-sm">10 Lakh+ Drivers</span>
                <p className="text-xs text-gray-600">Across India</p>
              </div>
            </div>
            
            <div className="absolute top-1/2 -left-6 bg-gradient-to-r from-orange-500 to-green-500 text-white p-3 rounded-lg shadow-lg">
              <div className="text-center">
                <IndianRupee className="h-6 w-6 mx-auto mb-1" />
                <div className="text-lg font-bold">₹25,000+</div>
                <div className="text-xs">Monthly Earning</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center text-white">
            <div className="text-3xl font-bold">100+</div>
            <div className="text-sm opacity-90">Cities Covered</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold">10L+</div>
            <div className="text-sm opacity-90">Active Drivers</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold">5 Cr+</div>
            <div className="text-sm opacity-90">Rides Completed</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold">4.8★</div>
            <div className="text-sm opacity-90">Driver Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
