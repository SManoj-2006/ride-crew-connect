
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Benefits = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Driver Benefits</h1>
              <p className="text-xl text-muted-foreground">
                We take care of our drivers with competitive pay and great perks. Here's why thousands of drivers choose to work with us.
              </p>
            </div>
          </div>
        </div>
        
        <BenefitsSection />
        
        <div className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Additional Benefits</h2>
              
              <div className="space-y-10">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-semibold mb-2">Flexible Payment Options</h3>
                    <p className="text-muted-foreground">
                      Get paid weekly, or use our Instant Pay feature to cash out up to 5 times per day. You maintain complete control over when you receive your earnings.
                    </p>
                  </div>
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-semibold mb-2">Driver Support</h3>
                    <p className="text-muted-foreground">
                      Access 24/7 driver support through the app. Our dedicated team is ready to help with any questions or concerns you may have while on the road.
                    </p>
                  </div>
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-semibold mb-2">Special Offers</h3>
                    <p className="text-muted-foreground">
                      Enjoy exclusive discounts on fuel, vehicle maintenance, phone plans, and more through our driver partnership program.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-semibold mb-2">Health & Wellness</h3>
                    <p className="text-muted-foreground">
                      Access affordable health care options, including telemedicine services, mental health support, and discounted health insurance plans.
                    </p>
                  </div>
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
                    <p className="text-muted-foreground">
                      Opportunity to advance to mentorship roles, training positions, or full-time management opportunities within our growing company.
                    </p>
                  </div>
                  <div className="md:w-1/3">
                    <h3 className="text-xl font-semibold mb-2">Rider Rewards</h3>
                    <p className="text-muted-foreground">
                      Earn bonuses and rewards for maintaining high ratings, completing consecutive trips, and driving during high-demand periods.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Benefits;
