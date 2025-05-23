
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the requirements to become a driver?",
    answer: "You must be at least 21 years old, have a valid driver's license for 3+ years, pass a background check, have a vehicle that's 2010 or newer, and maintain valid auto insurance.",
  },
  {
    question: "How much can I earn as a driver?",
    answer: "Earnings vary based on location, hours worked, and demand. Most drivers earn between $15-25 per hour. You keep 100% of tips and can cash out instantly.",
  },
  {
    question: "Can I use any vehicle to drive?",
    answer: "Your vehicle must be 2010 or newer, have 4 doors, pass a vehicle inspection, and be properly insured. We accept most makes and models that meet these requirements.",
  },
  {
    question: "How long does the application process take?",
    answer: "The entire process typically takes 3-5 business days. This includes document review, background check, and vehicle inspection scheduling.",
  },
  {
    question: "Do I need commercial insurance?",
    answer: "No, you don't need commercial insurance. We provide coverage while you're driving for us. However, you must maintain your personal auto insurance policy.",
  },
  {
    question: "Can I work in multiple cities?",
    answer: "Yes! Once approved, you can drive in any city where we operate. Just update your location in the driver app when you travel.",
  },
  {
    question: "What support is available for drivers?",
    answer: "We offer 24/7 driver support through the app, regular driver meetups, maintenance discounts, and a dedicated driver community forum.",
  },
  {
    question: "How often do I get paid?",
    answer: "We pay weekly every Tuesday for the previous week's earnings. You can also use our Instant Pay feature to cash out up to 5 times per day.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. Find everything you need to know about driving with us.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
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
