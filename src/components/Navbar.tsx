
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Car, User, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Car className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">RideCrewConnect</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/benefits" className="text-gray-700 hover:text-primary transition-colors">
              Benefits
            </Link>
            <Link to="/requirements" className="text-gray-700 hover:text-primary transition-colors">
              Requirements
            </Link>
            <Link to="/admin" className="text-gray-700 hover:text-primary transition-colors">
              Admin
            </Link>
            
            <div className="flex items-center space-x-2">
              {user ? (
                <>
                  <span className="text-sm text-gray-600">
                    Welcome, {user.name || user.email}
                  </span>
                  <Button variant="outline" size="sm" onClick={handleLogout}>
                    <LogOut className="h-4 w-4 mr-1" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/driver/login">
                      <User className="h-4 w-4 mr-1" />
                      Driver Login
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link to="/customer/login">Customer Login</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/apply">Apply Now</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/benefits" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Benefits
              </Link>
              <Link 
                to="/requirements" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Requirements
              </Link>
              <Link 
                to="/admin" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Admin
              </Link>
              
              {user ? (
                <>
                  <div className="text-sm text-gray-600 px-2">
                    Welcome, {user.name || user.email}
                  </div>
                  <Button variant="outline" size="sm" onClick={handleLogout} className="w-fit">
                    <LogOut className="h-4 w-4 mr-1" />
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="sm" asChild className="w-fit">
                    <Link to="/driver/login" onClick={() => setIsOpen(false)}>
                      <User className="h-4 w-4 mr-1" />
                      Driver Login
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="w-fit">
                    <Link to="/customer/login" onClick={() => setIsOpen(false)}>Customer Login</Link>
                  </Button>
                  <Button asChild className="w-fit">
                    <Link to="/apply" onClick={() => setIsOpen(false)}>Apply Now</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
