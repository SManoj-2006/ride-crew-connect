
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Car } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Car className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">RideCrewConnect</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-primary">Home</Link>
          <Link to="/benefits" className="text-sm font-medium hover:text-primary">Benefits</Link>
          <Link to="/requirements" className="text-sm font-medium hover:text-primary">Requirements</Link>
          <Link to="/apply" className="text-sm font-medium hover:text-primary">Apply</Link>
          <Link to="/dashboard">
            <Button>Company Login</Button>
          </Link>
        </nav>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 flex flex-col bg-background md:hidden">
            <nav className="flex flex-col items-center gap-6 p-6">
              <Link to="/" className="text-xl font-medium hover:text-primary" onClick={toggleMenu}>Home</Link>
              <Link to="/benefits" className="text-xl font-medium hover:text-primary" onClick={toggleMenu}>Benefits</Link>
              <Link to="/requirements" className="text-xl font-medium hover:text-primary" onClick={toggleMenu}>Requirements</Link>
              <Link to="/apply" className="text-xl font-medium hover:text-primary" onClick={toggleMenu}>Apply</Link>
              <Link to="/dashboard" onClick={toggleMenu}>
                <Button size="lg">Company Login</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
