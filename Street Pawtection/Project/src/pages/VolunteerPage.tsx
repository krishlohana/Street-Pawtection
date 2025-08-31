import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { CheckCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

const volunteerRoles = [
  {
    id: 'rescuer',
    title: 'Animal Rescuer',
    description: 'Help rescue animals from the streets and transport them to safety.',
    skills: ['Ability to handle animals', 'Own transportation', 'Available on short notice'],
  },
  {
    id: 'fosterer',
    title: 'Foster Parent',
    description: 'Provide temporary housing and care for animals until they find permanent homes.',
    skills: ['Safe housing space', 'Basic animal care knowledge', 'Time commitment'],
  },
  {
    id: 'medical',
    title: 'Medical Assistant',
    description: 'Assist with medical treatments, vaccinations, and rehabilitation.',
    skills: ['Medical/Veterinary background', 'Compassion', 'Attention to detail'],
  },
  {
    id: 'eventhelper',
    title: 'Event Helper',
    description: 'Support at adoption events, fundraisers, and community awareness programs.',
    skills: ['Good communication', 'Organizational skills', 'Enthusiasm'],
  },
  {
    id: 'social',
    title: 'Social Media Champion',
    description: 'Help manage our social media presence and spread awareness.',
    skills: ['Social media savvy', 'Writing skills', 'Photography/videography a plus'],
  },
  {
    id: 'donor',
    title: 'Donor/Sponsor',
    description: 'Support our mission through financial contributions or in-kind donations.',
    skills: ['Regular financial support', 'Material donations', 'Corporate sponsorships'],
  },
];

const VolunteerPage: React.FC = () => {
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  
  const toggleRole = (roleId: string) => {
    if (selectedRoles.includes(roleId)) {
      setSelectedRoles(selectedRoles.filter(id => id !== roleId));
    } else {
      setSelectedRoles([...selectedRoles, roleId]);
    }
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // Get form data
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      // Submit to Supabase
      const { data, error } = await supabase
        .from('volunteer_applications')
        .insert([
          {
            first_name: formData.get('firstName') as string,
            last_name: formData.get('lastName') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string,
            address: formData.get('address') as string,
            availability: formData.get('availability') as string,
            experience: formData.get('experience') as string || null,
            selected_roles: selectedRoles,
          }
        ]);

      if (error) {
        console.error('Error submitting application:', error);
        alert('There was an error submitting your application. Please try again.');
        return;
      }

      console.log('Application submitted successfully:', data);
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-4">
              Become a Volunteer
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join our community of compassionate volunteers who are making a difference in the lives 
              of street animals. Your time and skills can help save lives!
            </p>
          </div>
          
          {formSubmitted ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle size={64} className="text-success-500" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-gray-800 mb-4">
                Thank You for Volunteering!
              </h2>
              <p className="text-gray-600 mb-6">
                Your application has been received. Our volunteer coordinator will reach out to you 
                within 48 hours to discuss the next steps.
              </p>
              <Button 
                variant="primary" 
                onClick={() => setFormSubmitted(false)}
              >
                Return to Form
              </Button>
            </div>
          ) : (
            <>
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="bg-secondary-500 text-white p-6">
                  <h2 className="text-2xl font-heading font-bold">Select Volunteer Roles</h2>
                  <p className="mt-2">Choose one or more roles that interest you based on your skills and availability.</p>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {volunteerRoles.map((role) => (
                      <div
                        key={role.id}
                        className={`border rounded-lg p-5 cursor-pointer transition-all duration-300 ${
                          selectedRoles.includes(role.id)
                            ? 'border-primary-500 bg-primary-50 ring-2 ring-primary-500 ring-opacity-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                        onClick={() => toggleRole(role.id)}
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="text-lg font-heading font-semibold text-gray-800 mb-2">
                            {role.title}
                          </h3>
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            selectedRoles.includes(role.id)
                              ? 'bg-primary-500 border-primary-500'
                              : 'border-gray-300'
                          }`}>
                            {selectedRoles.includes(role.id) && (
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{role.description}</p>
                        <div className="mt-2">
                          <p className="text-xs text-gray-500 mb-1">Key skills/requirements:</p>
                          <ul className="text-xs text-gray-600">
                            {role.skills.map((skill, index) => (
                              <li key={index} className="flex items-center mb-1">
                                <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                                {skill}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary-500 text-white p-6">
                  <h2 className="text-2xl font-heading font-bold">Volunteer Registration Form</h2>
                  <p className="mt-2">Please fill out this form so we can match you with the right opportunities.</p>
                </div>
                <form onSubmit={handleSubmit} className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
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
                        name="email"
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                      Address *
                    </label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="availability" className="block text-gray-700 font-medium mb-2">
                      Availability *
                    </label>
                    <select
                      id="availability"
                      name="availability"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      required
                    >
                      <option value="">Select your availability</option>
                      <option value="weekdays">Weekdays</option>
                      <option value="weekends">Weekends</option>
                      <option value="evenings">Evenings</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">
                      Previous Experience
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Please share any relevant experience working with animals or in similar volunteer roles..."
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                      Selected Roles
                    </label>
                    {selectedRoles.length > 0 ? (
                      <div className="flex flex-wrap gap-2">
                        {selectedRoles.map((roleId) => {
                          const role = volunteerRoles.find(r => r.id === roleId);
                          return (
                            <div key={roleId} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                              {role?.title}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-error-500 text-sm">Please select at least one role above</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <label className="flex items-start">
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        required
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        I agree to the <a href="#" className="text-primary-600 hover:text-primary-700">volunteer terms and conditions</a> and consent to being contacted about volunteer opportunities.
                      </span>
                    </label>
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={selectedRoles.length === 0 || submitting}
                    className="w-full"
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </form>
              </div>
            </>
          )}
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-heading font-semibold text-gray-800 mb-4">
              Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact our volunteer coordinator at{' '}
              <a href="mailto:volunteer@streetpawtection.org" className="text-primary-600 hover:text-primary-700">
                volunteer@streetpawtection.org
              </a>{' '}
              or call us at +92-XXX-XXXXXXX
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPage;