
import { Car } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container grid gap-8 md:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <Car className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold">RideCrewConnect</span>
          </Link>
          <p className="text-muted-foreground">
            Connecting the best drivers with the best opportunities. Join our growing driver community today.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Resources</h3>
            <Link to="/benefits" className="text-muted-foreground hover:text-primary">Driver Benefits</Link>
            <Link to="/requirements" className="text-muted-foreground hover:text-primary">Requirements</Link>
            <Link to="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold">Company</h3>
            <Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Connect With Us</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
          <div className="mt-4">
            <p className="text-muted-foreground">Download our app:</p>
            <div className="mt-2 flex gap-2">
              <a href="#" className="inline-block">
                <img src="https://source.unsplash.com/random/120x40/?appstore" alt="App Store" className="h-10 rounded" />
              </a>
              <a href="#" className="inline-block">
                <img src="https://source.unsplash.com/random/120x40/?googleplay" alt="Google Play" className="h-10 rounded" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-8 border-t pt-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} RideCrewConnect. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
