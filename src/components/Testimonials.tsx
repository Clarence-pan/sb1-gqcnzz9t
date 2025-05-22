import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  image: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, company, rating, image }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md">
    <div className="flex justify-between items-start mb-4">
      <div className="flex -ml-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        ))}
      </div>
      <div className="text-gray-400 dark:text-gray-500 text-sm">
        {company}
      </div>
    </div>
    
    <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{quote}"</p>
    
    <div className="flex items-center">
      <img
        src={image}
        alt={author}
        className="w-12 h-12 rounded-full object-cover mr-4"
      />
      <div>
        <h4 className="font-medium text-gray-900 dark:text-white">{author}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Xxx transformed our approach to business intelligence. We're now able to make data-driven decisions in minutes instead of days.",
      author: "Sarah Johnson",
      role: "Chief Data Officer",
      company: "TechCorp Inc.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "The predictive analytics feature helped us anticipate market changes and stay ahead of our competition. Impressive technology!",
      author: "Michael Chen",
      role: "Marketing Director",
      company: "GrowthLabs",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      quote: "What impressed me most was how accessible Xxx made our complex data. Even team members without technical backgrounds can derive insights.",
      author: "Emma Rodriguez",
      role: "Operations Manager",
      company: "Logistics Pro",
      rating: 4,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Data-Driven Teams
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            See what our users have to say about how Xxx has transformed their approach to data analysis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;