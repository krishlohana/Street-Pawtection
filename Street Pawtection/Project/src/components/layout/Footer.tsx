import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <PawPrint size={28} className="text-primary-400" />
              <span className="text-xl font-heading font-bold">Street Pawtection</span>
            </div>
            <p className="text-gray-300 mb-4">
              We are dedicated to helping street animals find safety, care, and loving homes.
              Join us in making a difference in the lives of voiceless creatures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary-400 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-400 transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Report Animal', path: '/report' },
                { name: 'Adopt a Pet', path: '/adopt' },
                { name: 'Volunteer', path: '/volunteer' },
                { name: 'Blog', path: '/blog' },
                { name: 'Creator', path: '/creator' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-primary-400 mt-1" />
                <span className="text-gray-300">+92-XXX-XXXXXXX (24/7 Helpline)</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-primary-400 mt-1" />
                <a 
                  href="mailto:contact@streetpawtection.org" 
                  className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                >
                  contact@streetpawtection.org
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary-400 mt-1" />
                <span className="text-gray-300">Karachi, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on animals, events, and ways to help.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                required
              />
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white py-2 px-4 rounded-md transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Street Pawtection. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;