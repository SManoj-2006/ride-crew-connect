
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequirementsSection from "@/components/RequirementsSection";
import CTASection from "@/components/CTASection";

const Requirements = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="py-16 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Driver Requirements</h1>
              <p className="text-xl text-muted-foreground">
                Before applying, make sure you meet our eligibility criteria. We maintain high standards to ensure quality service for our customers.
              </p>
            </div>
          </div>
        </div>
        
        <RequirementsSection />
        
        <div className="py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Required Documents</h2>
              <p className="mb-6">When you apply, you'll need to submit the following documents:</p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Personal Documents</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Valid driver's license</li>
                    <li>• Proof of identity (passport or ID)</li>
                    <li>• SSN verification</li>
                    <li>• Proof of address (utility bill, etc.)</li>
                  </ul>
                </div>
                
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-3">Vehicle Documents</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Vehicle registration</li>
                    <li>• Auto insurance policy</li>
                    <li>• Vehicle inspection certificate</li>
                    <li>• Photos of your vehicle (interior & exterior)</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">Background Check Information</h2>
                <p className="text-muted-foreground mb-4">
                  As part of our commitment to safety, we conduct thorough background checks on all driver applicants. The background check includes:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Criminal background check</li>
                  <li>• Driving record check (looking for DUIs, accidents, moving violations)</li>
                  <li>• Identity verification</li>
                  <li>• Right to work verification</li>
                </ul>
                <p className="mt-4 text-muted-foreground">
                  Background checks typically take 3-5 business days to complete. We'll notify you once it's finished, and if approved, you can start accepting rides immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Requirements;
