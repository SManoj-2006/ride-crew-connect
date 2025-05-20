
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, MapPin, User } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg opacity-90"></div>
      
      {/* Content */}
      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Drive & Earn With RideCrewConnect
            </h1>
            <p className="text-xl text-white/90">
              Join our community of professional drivers and connect with opportunities that fit your schedule. Flexible hours, competitive pay, and support every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link to="/apply">Apply Now</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-white hover:bg-white/10">
                <Link to="/requirements">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1611429532458-c98f891a182d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Professional driver" 
                className="object-cover w-full h-full" 
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg flex items-center gap-3">
              <Car className="h-5 w-5 text-primary" />
              <span className="font-medium">Flexible driving opportunities</span>
            </div>
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg flex items-center gap-3">
              <User className="h-5 w-5 text-primary" />
              <span className="font-medium">Join 10,000+ drivers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
