import React from 'react';
import { Github, Linkedin, Heart, PawPrint, Code, Users } from 'lucide-react';

const Creator: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center items-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                  <Heart size={32} className="text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-300 rounded-full flex items-center justify-center">
                  <PawPrint size={16} className="text-orange-700" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4">
              Meet the Creator
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-500 mx-auto rounded-full"></div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="relative">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-amber-50 to-orange-50 opacity-50"></div>
              
              {/* Animal Silhouettes */}
              <div className="absolute top-8 left-8 opacity-10">
                <svg width="60" height="60" viewBox="0 0 100 100" className="text-orange-400">
                  <path fill="currentColor" d="M50 85c-19.33 0-35-15.67-35-35s15.67-35 35-35 35 15.67 35 35-15.67 35-35 35zm-15-45c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm30 0c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-15 20c-5.52 0-10-4.48-10-10h20c0 5.52-4.48 10-10 10z"/>
                </svg>
              </div>
              
              <div className="absolute bottom-8 right-8 opacity-10">
                <svg width="50" height="50" viewBox="0 0 100 100" className="text-amber-400">
                  <path fill="currentColor" d="M50 85c-19.33 0-35-15.67-35-35s15.67-35 35-35 35 15.67 35 35-15.67 35-35 35zm-12-50c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm24 0c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-12 25c-3.31 0-6-2.69-6-6h12c0 3.31-2.69 6-6 6z"/>
                </svg>
              </div>

              <div className="relative p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Profile Image Placeholder */}
                  <div className="lg:col-span-1 flex justify-center">
                    <div className="relative">
                      <div className="w-48 h-48 bg-gradient-to-br from-orange-300 to-amber-400 rounded-full flex items-center justify-center shadow-2xl">
                        <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center">
                          <div className="text-6xl font-bold text-orange-500">KL</div>
                        </div>
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
                        <Code size={24} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 text-center lg:text-left">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-3">
                      Krish Lohana
                    </h2>
                    <div className="flex items-center justify-center lg:justify-start mb-6">
                      <div className="bg-gradient-to-r from-orange-400 to-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Founder & Developer
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-2xl">
                      A passionate tech enthusiast and animal lover who created this platform to give a 
                      digital voice to voiceless street animals. Combining technology with compassion 
                      to make a meaningful difference in the lives of those who need it most.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="text-center p-4 bg-orange-50 rounded-xl">
                        <div className="text-2xl font-bold text-orange-600 mb-1">500+</div>
                        <div className="text-sm text-gray-600">Animals Helped</div>
                      </div>
                      <div className="text-center p-4 bg-amber-50 rounded-xl">
                        <div className="text-2xl font-bold text-amber-600 mb-1">24/7</div>
                        <div className="text-sm text-gray-600">Platform Active</div>
                      </div>
                      <div className="text-center p-4 bg-orange-50 rounded-xl">
                        <div className="text-2xl font-bold text-orange-600 mb-1">100+</div>
                        <div className="text-sm text-gray-600">Volunteers</div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center lg:justify-start space-x-4">
                      <a
                        href="https://github.com/krishlohana"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-gray-800 hover:bg-gray-900 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <Github size={24} />
                        <span className="sr-only">GitHub</span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/krish-lohana-304409283/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
                      >
                        <Linkedin size={24} />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-4 border-orange-400">
              <div className="flex justify-center mb-6">
                <div className="flex items-center space-x-2">
                  <PawPrint size={24} className="text-orange-500" />
                  <Users size={24} className="text-amber-500" />
                  <Heart size={24} className="text-orange-500" />
                </div>
              </div>
              <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">
                "Technology with a Heart"
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                Every line of code written for Street Pawtection carries the hope of saving a life. 
                This platform represents the belief that technology, when guided by compassion, 
                can bridge the gap between those who need help and those willing to provide it.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-orange-400 to-amber-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Join the Mission
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Together, we can create a world where no street animal suffers in silence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/report"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Report an Animal
                </a>
                <a
                  href="/volunteer"
                  className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Become a Volunteer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creator;