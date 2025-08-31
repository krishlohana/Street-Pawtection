import React from 'react';
import { Link } from 'react-router-dom';
import { HeartHandshake, Phone } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-30">
        <div className="bg-hero-pattern bg-cover bg-center h-full w-full"></div>
      </div>
      <div className="container mx-auto px-4 pt-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-white">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Be the <span className="text-primary-400">Voice</span> for the <span className="text-secondary-400">Voiceless</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              Together we can make a difference in the lives of street animals. 
              Report, rescue, adopt, or volunteer - every action counts.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/report">
                <Button variant="primary" size="lg" className="flex items-center gap-2">
                  <HeartHandshake size={20} />
                  Report an Animal
                </Button>
              </Link>
              <a href="tel:+92XXXXXXXXXX" className="flex items-center gap-2 bg-white text-gray-800 hover:bg-gray-100 py-3 px-8 rounded-md transition-all duration-300 font-medium">
                <Phone size={20} />
                24/7 Helpline
              </a>
            </div>
            <div className="mt-8 text-gray-300">
              <p>
                <strong className="text-primary-300">Emergency?</strong> Call our 24/7 helpline or use our quick reporting system.
              </p>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="hero-animation">
              <img 
                src="https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Street dog looking at camera"
                className="rounded-lg shadow-2xl max-w-md"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 hero-animation" style={{ animationDelay: '1s' }}>
              <img
                src="/Cookie .jpg"
                alt="Cookie - A beautiful rescued dog"
                className="rounded-lg shadow-2xl max-w-xs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;