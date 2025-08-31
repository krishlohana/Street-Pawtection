import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would submit form data to backend
    setFormSubmitted(true);
  };
  
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
              Contact Us
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Have questions or want to get involved? We're here to help. Reach out to us 
              using any of the methods below.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex bg-primary-100 p-3 rounded-full mb-4">
                <Phone size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">
                Call Our Helpline
              </h3>
              <p className="text-gray-600 mb-4">
                24/7 emergency rescue hotline for street animals in distress
              </p>
              <a 
                href="tel:+92XXXXXXXXXX" 
                className="block text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors duration-300"
              >
                +92-XXX-XXXXXXX
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex bg-primary-100 p-3 rounded-full mb-4">
                <Mail size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">
                Email Us
              </h3>
              <p className="text-gray-600 mb-4">
                For general inquiries, volunteering, and adoption questions
              </p>
              <a 
                href="mailto:contact@streetpawtection.org" 
                className="block text-lg font-medium text-primary-600 hover:text-primary-700 transition-colors duration-300"
              >
                contact@streetpawtection.org
              </a>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="inline-flex bg-primary-100 p-3 rounded-full mb-4">
                <MapPin size={24} className="text-primary-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">
                Visit Our Center
              </h3>
              <p className="text-gray-600 mb-4">
                Our rescue center and adoption facility is open daily
              </p>
              <p className="text-gray-700">
                123 Compassion Street<br />
                Karachi, Pakistan
              </p>
              <div className="flex items-center justify-center mt-2 text-sm text-gray-500">
                <Clock size={14} className="mr-1" />
                <span>9:00 AM - 5:00 PM (Mon-Sat)</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8">
                <h2 className="text-2xl font-heading font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h2>
                
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle size={64} className="text-success-500 mx-auto mb-4" />
                    <h3 className="text-xl font-heading font-semibold text-gray-800 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                    <Button 
                      variant="primary" 
                      onClick={() => setFormSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                          Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                          Email *
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                        Subject *
                      </label>
                      <input
                        id="subject"
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      ></textarea>
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
              
              <div className="bg-primary-700 text-white p-8">
                <h2 className="text-2xl font-heading font-bold mb-6">
                  Quick Response Promise
                </h2>
                <p className="mb-6">
                  We are committed to responding to all inquiries as quickly as possible:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-white text-primary-700 rounded-full p-1 mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <strong className="block text-white mb-1">Emergency Animal Reports</strong>
                      <p className="text-primary-100">Immediate dispatch of rescue team</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-primary-700 rounded-full p-1 mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <strong className="block text-white mb-1">Adoption Inquiries</strong>
                      <p className="text-primary-100">Response within 24 hours</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-primary-700 rounded-full p-1 mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <strong className="block text-white mb-1">Volunteer Applications</strong>
                      <p className="text-primary-100">Processed within 48 hours</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-white text-primary-700 rounded-full p-1 mr-3 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <div>
                      <strong className="block text-white mb-1">General Inquiries</strong>
                      <p className="text-primary-100">Response within 3 business days</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8 p-4 bg-primary-800 rounded-lg">
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    Follow Us
                  </h3>
                  <p className="mb-4 text-primary-100">
                    Stay updated with our rescue missions and success stories
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-primary-300 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-primary-300 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-primary-300 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;