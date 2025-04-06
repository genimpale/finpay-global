
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-primary-dark font-bold text-xl">FinPay</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Your trusted partner for online payments, money transfers, and financial solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Account</h3>
            <ul className="flex flex-col gap-2">
              <li><Link to="/login" className="text-gray-600 hover:text-primary text-sm">Log In</Link></li>
              <li><Link to="/signup" className="text-gray-600 hover:text-primary text-sm">Sign Up</Link></li>
              <li><Link to="/profile" className="text-gray-600 hover:text-primary text-sm">Profile</Link></li>
              <li><Link to="/security" className="text-gray-600 hover:text-primary text-sm">Security</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Services</h3>
            <ul className="flex flex-col gap-2">
              <li><Link to="/send" className="text-gray-600 hover:text-primary text-sm">Send Money</Link></li>
              <li><Link to="/request" className="text-gray-600 hover:text-primary text-sm">Request Money</Link></li>
              <li><Link to="/transactions" className="text-gray-600 hover:text-primary text-sm">Transactions</Link></li>
              <li><Link to="/cards" className="text-gray-600 hover:text-primary text-sm">Cards</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Help</h3>
            <ul className="flex flex-col gap-2">
              <li><Link to="/contact" className="text-gray-600 hover:text-primary text-sm">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-primary text-sm">FAQ</Link></li>
              <li><Link to="/help" className="text-gray-600 hover:text-primary text-sm">Help Center</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <p className="text-gray-500 text-xs">© 2025 FinPay. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/terms" className="text-gray-500 hover:text-primary text-xs">Terms</Link>
              <Link to="/privacy" className="text-gray-500 hover:text-primary text-xs">Privacy</Link>
              <Link to="/legal" className="text-gray-500 hover:text-primary text-xs">Legal</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
