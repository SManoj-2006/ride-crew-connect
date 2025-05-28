
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, IndianRupee, Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 via-orange-400 to-green-500 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/50 to-green-600/50"></div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-white text-sm font-medium">
              <IndianRupee className="h-4 w-4" />
              Earn ₹25,000+ Monthly
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Driving Career in India?
          </h2>
          <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto">
            Join 10 lakh+ drivers earning great money with flexible schedules across 100+ Indian cities. 
            Apply today and start driving this week!
          </p>
          
          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <IndianRupee className="h-8 w-8 text-white mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">UPI Payments</h3>
              <p className="text-white/80 text-sm">Instant payments via PhonePe, Paytm, GPay</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <Shield className="h-8 w-8 text-white mx-auto mb-2" />
              <h3 className="text-white font-semibold mb-1">Emergency SOS</h3>
              <p className="text-white/80 text-sm">24/7 safety support across India</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl text-white mx-auto mb-2 w-8 h-8 flex items-center justify-center">🏆</div>
              <h3 className="text-white font-semibold mb-1">Top Rated</h3>
              <p className="text-white/80 text-sm">4.8★ rated platform in India</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" asChild className="bg-white text-orange-600 hover:bg-orange-50 font-semibold text-lg px-8 py-6">
              <Link to="/apply">
                Apply Now - Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-white hover:bg-white/10 font-semibold text-lg px-8 py-6">
              <Link to="/requirements">View Requirements</Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-white/90 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>No application fees</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>Quick 3-day approval</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>Start earning immediately</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span>Hindi & English support</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default CTASection;
