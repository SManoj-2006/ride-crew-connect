
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplicationForm from "@/components/ApplicationForm";

const Apply = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Drive With Us</h1>
            <p className="text-xl text-muted-foreground mb-8">Start your application today and join our team of professional drivers.</p>
            <ApplicationForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Apply;
