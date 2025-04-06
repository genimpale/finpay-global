
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I've been using FinPay for my business for over a year now. The payment processing is fast and reliable, and my customers love how easy it is to pay.",
      author: "Sarah Johnson",
      role: "Small Business Owner",
      avatar: "SJ"
    },
    {
      quote: "The ability to send money internationally with such low fees has been a game changer for supporting my family overseas. Thank you FinPay!",
      author: "David Rodriguez",
      role: "Freelance Designer",
      avatar: "DR"
    },
    {
      quote: "The security features are top-notch. I feel confident making transactions knowing that my financial information is protected.",
      author: "Michelle Lee",
      role: "Online Shopper",
      avatar: "ML"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Trusted by thousands</h2>
          <p className="text-gray-600">
            See what our customers say about their experience with FinPay's services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-card">
              <div className="flex items-center mb-4">
                {Array(5).fill(0).map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" stroke="#FFD700" strokeWidth="1" className="mr-1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
