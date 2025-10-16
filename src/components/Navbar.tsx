import { Link } from 'react-router-dom';
import { Calendar, Home, LogIn, UserPlus } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Calendar className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CampusFest
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link
              to="/events"
              className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
            >
              <Calendar className="h-4 w-4" />
              <span>Events</span>
            </Link>
            <ThemeToggle />
            <Link
              to="/signin"
              className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
            >
              <LogIn className="h-4 w-4" />
              <span>Sign In</span>
            </Link>
            <Link
              to="/signup"
              className="flex items-center space-x-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              <UserPlus className="h-4 w-4" />
              <span>Sign Up</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Link to="/signin" className="text-foreground hover:text-primary">
              <LogIn className="h-5 w-5" />
            </Link>
            <Link to="/signup" className="bg-primary text-primary-foreground px-3 py-2 rounded-lg">
              <UserPlus className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
