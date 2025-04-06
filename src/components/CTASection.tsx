
import React from 'react';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Ready to get started with FinPay?
            </h2>
            <p className="text-blue-100">
              Join millions of people already managing their money with us.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-primary hover:bg-blue-50">
              Create Account
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-primary-dark hover:border-transparent">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
