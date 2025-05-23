
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 gradient-bg">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Driving Career?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of drivers who are already earning great money with flexible schedules. 
            Apply today and start driving this week!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link to="/apply">
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-white hover:bg-white/10">
              <Link to="/requirements">View Requirements</Link>
            </Button>
          </div>
          <p className="text-white/80 text-sm mt-6">
            No application fees • Quick approval process • Start earning immediately
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
