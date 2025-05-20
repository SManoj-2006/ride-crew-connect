
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="gradient-bg rounded-2xl p-8 md:p-16 flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Earning?</h2>
          <p className="text-xl text-white/90 max-w-2xl mb-8">
            Join thousands of drivers already making money with RideCrewConnect. Our simple application process gets you on the road fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link to="/apply">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent text-white border-white hover:bg-white/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
