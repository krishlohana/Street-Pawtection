import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-secondary-600 to-secondary-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
          Ready to Make a Difference?
        </h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Join our mission to help street animals. Whether you want to report an animal in need, 
          volunteer your time, or adopt a rescued friend, your contribution matters.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/report">
            <Button variant="primary" size="lg" className="bg-white text-secondary-700 hover:bg-gray-100 shadow-lg">
              Report an Animal
            </Button>
          </Link>
          <Link to="/volunteer">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-secondary-800">
              Become a Volunteer
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;