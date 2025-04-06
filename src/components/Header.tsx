
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { LogIn, User, Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  return (
    <header className="sticky top-0 w-full bg-white border-b border-gray-100 shadow-sm z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-primary-dark font-bold text-xl">FinPay</span>
          </Link>
        </div>

        {!isMobile ? (
          <>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-gray-700 hover:text-primary font-medium">Home</Link>
              <Link to="/send" className="text-gray-700 hover:text-primary font-medium">Send Money</Link>
              <Link to="/request" className="text-gray-700 hover:text-primary font-medium">Request Money</Link>
              <Link to="/transactions" className="text-gray-700 hover:text-primary font-medium">Transactions</Link>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <LogIn className="h-4 w-4" />
                <span>Log In</span>
              </Button>
              <Button className="bg-primary hover:bg-primary-dark shadow-button" size="sm">
                Sign Up
              </Button>
            </div>
          </>
        ) : (
          <Button 
            variant="ghost" 
            size="sm" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        )}
      </div>
      
      {/* Mobile menu */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-sm animate-fade-in">
          <nav className="flex flex-col gap-2 p-4">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium py-2">Home</Link>
            <Link to="/send" className="text-gray-700 hover:text-primary font-medium py-2">Send Money</Link>
            <Link to="/request" className="text-gray-700 hover:text-primary font-medium py-2">Request Money</Link>
            <Link to="/transactions" className="text-gray-700 hover:text-primary font-medium py-2">Transactions</Link>
          </nav>
          <div className="flex gap-2 p-4 border-t border-gray-100">
            <Button variant="outline" size="sm" className="flex-1 flex items-center justify-center gap-2">
              <LogIn className="h-4 w-4" />
              <span>Log In</span>
            </Button>
            <Button className="flex-1 bg-primary hover:bg-primary-dark shadow-button" size="sm">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
