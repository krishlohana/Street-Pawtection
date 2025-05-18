import React from 'react';
import { PawPrint, Home, Heart, Users } from 'lucide-react';

const stats = [
  {
    icon: <PawPrint size={36} className="text-primary-500" />,
    value: 500,
    label: 'Animals Rescued',
    suffix: '+',
  },
  {
    icon: <Home size={36} className="text-secondary-500" />,
    value: 350,
    label: 'Successful Adoptions',
    suffix: '+',
  },
  {
    icon: <Heart size={36} className="text-error-500" />,
    value: 200,
    label: 'Medical Treatments',
    suffix: '+',
  },
  {
    icon: <Users size={36} className="text-success-500" />,
    value: 100,
    label: 'Active Volunteers',
    suffix: '+',
  },
];

const ImpactStats: React.FC = () => {
  return (
    <section className="py-16 bg-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Our Impact So Far
          </h2>
          <p className="max-w-2xl mx-auto text-primary-100 text-lg">
            Every day, we work to improve the lives of street animals. 
            Here's what we've accomplished with your support.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-primary-800 rounded-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-primary-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;