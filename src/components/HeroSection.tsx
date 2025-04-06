
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The <span className="text-primary">simpler, safer</span> way to pay and get paid
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Send money to friends, shop online, and manage your finances all in one place. Fast, secure, and easy to use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-base shadow-button">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:text-primary px-8 py-6 text-base">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute -z-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 -top-10 -right-10"></div>
            <div className="relative bg-white rounded-xl shadow-card overflow-hidden border border-gray-100">
              <div className="bg-primary p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-white/80 text-sm">Your balance</p>
                    <h3 className="text-white text-2xl font-semibold">$2,458.20</h3>
                  </div>
                  <div className="bg-white/20 rounded-full p-2">
                    <ArrowRight className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <p className="text-gray-600 text-sm mb-2">Quick actions</p>
                  <div className="grid grid-cols-3 gap-2">
                    <Button variant="outline" className="flex flex-col items-center text-xs p-3 h-auto">
                      <span className="bg-blue-50 rounded-full p-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </span>
                      Send
                    </Button>
                    <Button variant="outline" className="flex flex-col items-center text-xs p-3 h-auto">
                      <span className="bg-blue-50 rounded-full p-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <polyline points="9 10 4 15 9 20"></polyline>
                          <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
                        </svg>
                      </span>
                      Request
                    </Button>
                    <Button variant="outline" className="flex flex-col items-center text-xs p-3 h-auto">
                      <span className="bg-blue-50 rounded-full p-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                          <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                          <line x1="2" y1="10" x2="22" y2="10"></line>
                        </svg>
                      </span>
                      Cards
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 text-sm mb-2">Recent transactions</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-100 mr-3 flex items-center justify-center">
                          <span className="text-xs font-medium">AZ</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Amazon</p>
                          <p className="text-xs text-gray-500">Yesterday</p>
                        </div>
                      </div>
                      <span className="font-medium text-sm text-danger">-$42.99</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-100">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-100 mr-3 flex items-center justify-center">
                          <span className="text-xs font-medium">JD</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">John Doe</p>
                          <p className="text-xs text-gray-500">Apr 3</p>
                        </div>
                      </div>
                      <span className="font-medium text-sm text-success">+$126.50</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-100 mr-3 flex items-center justify-center">
                          <span className="text-xs font-medium">SB</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Starbucks</p>
                          <p className="text-xs text-gray-500">Apr 2</p>
                        </div>
                      </div>
                      <span className="font-medium text-sm text-danger">-$5.75</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
