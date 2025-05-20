
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much can I earn as a driver?",
    answer: "Earnings vary based on your location, hours, and the number of rides you complete. On average, our drivers earn $15-25 per hour before expenses. Our app provides transparent earnings breakdowns and opportunities to earn bonuses during peak hours."
  },
  {
    question: "How soon can I start driving after applying?",
    answer: "The application process typically takes 3-5 business days, depending on the time it takes to complete your background check and verify your documents. Once approved, you can immediately start accepting ride requests through the app."
  },
  {
    question: "Do I need my own insurance?",
    answer: "Yes, you must have a valid auto insurance policy that meets your state's minimum requirements. We also provide additional insurance coverage that takes effect when you're actively driving for RideCrewConnect."
  },
  {
    question: "Can I drive for other services while driving for you?",
    answer: "Yes! We have no exclusivity requirements. Many of our drivers work with multiple platforms to maximize their earning potential. You're free to drive for anyone else when you're not online with our app."
  },
  {
    question: "What areas do you currently operate in?",
    answer: "We currently operate in over 50 major cities across the United States. During the application process, we'll confirm if we're active in your area. We're also constantly expanding to new locations."
  },
];

const FAQSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about driving with RideCrewConnect.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
