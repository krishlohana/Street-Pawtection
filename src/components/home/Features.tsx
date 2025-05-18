import React from 'react';
import { MapPin, Users, Heart, BookOpen, Megaphone, Phone } from 'lucide-react';

const features = [
  {
    icon: <MapPin size={24} className="text-primary-500" />,
    title: 'Report Animals',
    description: 'Spot a street animal in need? Quickly report their location, condition, and upload a photo.',
  },
  {
    icon: <Users size={24} className="text-secondary-500" />,
    title: 'Volunteer',
    description: 'Join our community of compassionate volunteers to help rescue, transport, foster, or care for animals.',
  },
  {
    icon: <Heart size={24} className="text-error-500" />,
    title: 'Adopt',
    description: 'Give a rescued animal a forever home. Browse our adoption listings and find your new companion.',
  },
  {
    icon: <BookOpen size={24} className="text-primary-500" />,
    title: 'Education',
    description: 'Learn about animal welfare, responsible pet ownership, and how to help street animals.',
  },
  {
    icon: <Megaphone size={24} className="text-secondary-500" />,
    title: 'Spread Awareness',
    description: 'Help us spread the word about animal welfare through our educational resources and campaigns.',
  },
  {
    icon: <Phone size={24} className="text-success-500" />,
    title: '24/7 Helpline',
    description: 'Our emergency helpline is available round the clock for animal rescue situations.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
            How We Help Street Animals
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Our comprehensive approach ensures that street animals receive the care, 
            protection, and advocacy they deserve.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-gray-100 inline-flex p-3 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;